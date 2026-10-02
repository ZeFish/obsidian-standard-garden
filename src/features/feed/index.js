"use strict";

const { BasesView, MarkdownRenderer, MarkdownRenderChild, Setting, Platform } = require("obsidian");

const VIEW_ID = "standard-feed";
const LEGACY_VIEW_ID = "atelier-feed";

const DEFAULT_SETTINGS = {
  maxItems: 50,
  previewChars: 600,
  showCovers: true,
};

/* ───────────────────────── Helper Functions ───────────────────────── */

function formatDate(ms) {
  if (!ms) return "";
  const d = new Date(ms);
  if (isNaN(d.getTime())) return "";
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - d.getTime()) / 86400000);
  if (diffDays === 0) return "Aujourd'hui";
  if (diffDays === 1) return "Hier";
  if (diffDays > 1 && diffDays < 7) return `Il y a ${diffDays} jours`;
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
}

function stripFrontmatter(text) {
  if (!text) return "";
  if (text.startsWith("---")) {
    const end = text.indexOf("\n---", 3);
    if (end !== -1) {
      const after = text.indexOf("\n", end + 1);
      return after !== -1 ? text.slice(after + 1) : "";
    }
  }
  return text;
}

function extractCover(app, content, entryOrFm) {
  const fm = entryOrFm?.frontmatter || entryOrFm || {};
  
  // 1. Check frontmatter property (cover, image, banner)
  for (const key of ["cover", "image", "banner"]) {
    let val = null;
    if (typeof entryOrFm?.getValue === "function") {
      try { val = entryOrFm.getValue(`note.${key}`); } catch {}
    }
    if (!val && fm[key]) val = fm[key];
    
    if (val) {
      const str = String(val).trim();
      if (/^https?:\/\//i.test(str)) return str;
      // Wikilink or relative path
      const cleaned = str.replace(/^\[\[/, "").replace(/\]\]$/, "");
      const file = app.metadataCache.getFirstLinkpathDest(cleaned, "");
      if (file) return app.vault.adapter.getResourcePath(file.path);
    }
  }

  // 2. First image embed in markdown body
  // Check markdown image: ![...](...)
  const mdMatch = content.match(/!\[[^\]]*\]\(([^)]+)\)/);
  if (mdMatch) {
    const src = mdMatch[1].trim();
    if (/^https?:\/\//i.test(src)) return src;
    const file = app.metadataCache.getFirstLinkpathDest(src, "");
    if (file) return app.vault.adapter.getResourcePath(file.path);
  }

  // Check Obsidian wiki embed: ![[...]]
  const wikiMatch = content.match(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/);
  if (wikiMatch) {
    const link = wikiMatch[1].trim();
    const file = app.metadataCache.getFirstLinkpathDest(link, "");
    if (file) return app.vault.adapter.getResourcePath(file.path);
  }

  return null;
}

/* ───────────────────────── Feed Card Renderer ───────────────────────── */

class FeedCardRenderer {
  static async renderCard(app, container, file, options = {}, component = null) {
    const {
      previewChars = 600,
      showCovers = true,
      token = null,
      getToken = () => null,
    } = options;

    if (token !== null && getToken() !== token) return;
    if (!container || !container.isConnected) return;

    const card = container.createDiv({ cls: "stnd-feed-card" });

    // Header: title + date
    const header = card.createDiv({ cls: "stnd-feed-card-header" });
    const cache = app.metadataCache.getFileCache(file);
    const fm = cache?.frontmatter || {};
    const titleText = fm.title || file.basename;

    header.createDiv({ cls: "stnd-feed-title", text: titleText });

    const noteTime = fm.publish || fm.created || file.stat?.mtime;
    if (noteTime) {
      header.createDiv({
        cls: "stnd-feed-date",
        text: formatDate(noteTime),
      });
    }

    // Click on card opens note (supports Ctrl/Cmd click for new tab)
    card.addEventListener("click", (evt) => {
      if (evt.target.closest("a")) return;
      app.workspace.getLeaf(evt.metaKey || evt.ctrlKey ? "tab" : false).openFile(file);
    });

    const body = card.createDiv({ cls: "stnd-feed-body" });

    // Async content reading with cancellation token guard
    try {
      const raw = await app.vault.cachedRead(file);
      if (token !== null && getToken() !== token) return;
      if (!card.isConnected) return;

      let content = stripFrontmatter(raw);

      // Strip directives (like ::feed, ::list, etc.) to prevent recursive rendering
      content = content.replace(/^::.*$/gm, "").trim();

      if (showCovers) {
        const cover = extractCover(app, content, fm);
        if (cover) {
          const img = body.createEl("img", { cls: "stnd-feed-cover" });
          img.src = cover;
          img.loading = "lazy";
        }
      }

      if (previewChars > 0 && content.length > previewChars) {
        content = content.slice(0, previewChars).trimEnd() + "…";
      }

      if (content) {
        if (token !== null && getToken() !== token) return;
        if (!card.isConnected) return;
        await MarkdownRenderer.render(app, content, body, file.path, component);
      }
    } catch {
      // Fallback
    }
  }

  static renderFeedOrList(app, container, type, queryTag, plugin, component = null) {
    const isMobile = Boolean(Platform?.isMobile);

    // Register lifecycle child if component is a postprocessor context
    if (component && typeof component.addChild === "function") {
      try {
        const child = new MarkdownRenderChild(container);
        child.onunload = () => {
          container._stndFeedToken = (container._stndFeedToken || 0) + 1;
        };
        component.addChild(child);
      } catch {}
    }

    // Parse tag and optional limit from queryTag (e.g. "#article", "#article 10", "#article limit=5")
    let cleanTag = (queryTag || "").trim();
    let customLimit = null;
    const limitMatch = cleanTag.match(/(?:\s+limit[=:]\s*(\d+)|\s+(\d+))$/i);
    if (limitMatch) {
      customLimit = parseInt(limitMatch[1] || limitMatch[2], 10);
      cleanTag = cleanTag.slice(0, limitMatch.index).trim();
    }
    cleanTag = cleanTag.replace(/^#/, "").toLowerCase();

    const files = app.vault
      .getMarkdownFiles()
      .filter((f) => !plugin?.garden?.isPathExcluded(f.path));
    const matches = [];
    const publishKey = (plugin?.settings?.keyPrefix || "") + (plugin?.settings?.publishKey || "publish");

    for (const file of files) {
      const cache = app.metadataCache.getFileCache(file);
      const fm = cache?.frontmatter || {};
      const fileTags = Array.isArray(fm.tags) ? fm.tags : (typeof fm.tags === "string" ? [fm.tags] : []);
      const allTags = [...fileTags, ...(cache?.tags || []).map(t => t.tag)];

      const matchesTag = !cleanTag || allTags.some(t => {
        const normalized = String(t).toLowerCase().replace(/^#/, "");
        return normalized === cleanTag || normalized.startsWith(cleanTag + "/");
      });

      if (matchesTag) {
        const isPublished = fm[publishKey] === true ||
          typeof fm[publishKey] === "string" ||
          fm.visibility === "public" ||
          Boolean(fm[publishKey]);

        if (isPublished) {
          const sortDate = fm.publish ? new Date(fm.publish).getTime() : (fm.created ? new Date(fm.created).getTime() : file.stat.mtime);
          matches.push({
            file,
            title: fm.title || file.basename,
            time: isNaN(sortDate) ? file.stat.mtime : sortDate,
            excerpt: fm.excerpt || "",
            fm,
          });
        }
      }
    }

    // Sort newest to oldest
    matches.sort((a, b) => b.time - a.time);

    if (matches.length === 0) {
      container.createEl("p", {
        text: cleanTag ? `No public notes found for #${cleanTag}` : "No public notes found.",
        cls: "stnd-feed-empty",
      });
      return;
    }

    const token = (container._stndFeedToken = (container._stndFeedToken || 0) + 1);
    const getToken = () => container._stndFeedToken;
    const renderComponent = (component && typeof component.register === "function") ? component : plugin;

    if (type === "list") {
      const ul = container.createEl("ul", { cls: "stnd-feed-list" });
      const defaultListBatch = isMobile ? 30 : 100;
      const batchSize = customLimit || defaultListBatch;
      let renderedCount = 0;
      let moreContainer = null;

      const renderListBatch = (startIdx, count) => {
        const batch = matches.slice(startIdx, startIdx + count);
        for (const m of batch) {
          const li = ul.createEl("li");
          const a = li.createEl("a", {
            text: m.title,
            cls: "internal-link stnd-feed-link",
          });
          a.addEventListener("click", (e) => {
            e.preventDefault();
            app.workspace.getLeaf().openFile(m.file);
          });
          if (m.time) {
            li.createSpan({ cls: "stnd-feed-list-date", text: ` (${formatDate(m.time)})` });
          }
        }
        renderedCount = startIdx + batch.length;
        updateListMore();
      };

      const updateListMore = () => {
        if (moreContainer) {
          moreContainer.remove();
          moreContainer = null;
        }
        const remaining = matches.length - renderedCount;
        if (remaining > 0) {
          moreContainer = container.createDiv({ cls: "stnd-feed-more" });
          const moreBtn = moreContainer.createEl("button", {
            cls: "stnd-feed-more-btn",
            text: `+ ${remaining} more note(s) (show)`,
          });
          moreBtn.addEventListener("click", () => {
            renderListBatch(renderedCount, batchSize);
          });
        }
      };

      renderListBatch(0, batchSize);
      return;
    }

    // type === "feed"
    const feedRoot = container.createDiv({ cls: "stnd-feed" });
    const defaultFeedBatch = isMobile ? 10 : 25;
    const batchSize = customLimit || defaultFeedBatch;
    let currentRendered = 0;
    let moreContainer = null;

    const renderFeedBatch = async (startIdx, count) => {
      const itemsToRender = matches.slice(startIdx, startIdx + count);
      for (const m of itemsToRender) {
        if (getToken() !== token || !container.isConnected) break;
        await FeedCardRenderer.renderCard(
          app,
          feedRoot,
          m.file,
          {
            previewChars: plugin?.settings?.feed?.previewChars ?? (isMobile ? 300 : 600),
            showCovers: plugin?.settings?.feed?.showCovers ?? true,
            token,
            getToken,
          },
          renderComponent,
        );
        // Small async yield to keep UI thread and scrolling 100% responsive
        await new Promise((resolve) => setTimeout(resolve, isMobile ? 25 : 5));
      }
      currentRendered = startIdx + itemsToRender.length;
      updateFeedMore();
    };

    const updateFeedMore = () => {
      if (moreContainer) {
        moreContainer.remove();
        moreContainer = null;
      }
      if (getToken() !== token || !container.isConnected) return;

      const remaining = matches.length - currentRendered;
      if (remaining > 0) {
        moreContainer = container.createDiv({ cls: "stnd-feed-more" });
        const moreBtn = moreContainer.createEl("button", {
          cls: "stnd-feed-more-btn mod-cta",
          text: `+ ${remaining} more note(s) (show ${Math.min(remaining, batchSize)})`,
        });
        moreBtn.addEventListener("click", async () => {
          moreBtn.disabled = true;
          moreBtn.textContent = "Chargement...";
          await renderFeedBatch(currentRendered, batchSize);
        });
      }
    };

    // Render initial batch
    renderFeedBatch(0, batchSize);
  }
}

/* ───────────────────────── Obsidian Bases View ───────────────────────── */

class FeedBasesView extends (BasesView || class {}) {
  type = VIEW_ID;

  constructor(controller, containerEl, settings) {
    super(controller);
    this.feedContainerEl = containerEl;
    this.settings = settings;
    this.renderToken = 0;
  }

  onload() {
    this.feedContainerEl.addClass("stnd-feed");
    this._render();
  }

  onunload() {
    this.renderToken++;
    this.feedContainerEl.removeClass("stnd-feed");
    this.feedContainerEl.empty();
  }

  onDataUpdated() {
    this._render();
  }

  async _render() {
    const token = ++this.renderToken;
    const root = this.feedContainerEl;
    if (!root) return;
    root.empty();

    if (!this.data) return;

    const entries = this.data?.data ?? [];
    if (entries.length === 0) {
      root.createDiv({ cls: "stnd-feed-empty", text: "No notes in this feed." });
      return;
    }

    const isMobile = Boolean(Platform?.isMobile);
    const defaultMax = isMobile ? 15 : 50;
    const maxItems = this._option("maxItems", this.settings?.maxItems ?? defaultMax);
    const previewChars = this._option("previewChars", this.settings?.previewChars ?? (isMobile ? 300 : 600));
    const showCovers = this._option("showCovers", this.settings?.showCovers ?? true);

    const shown = entries.slice(0, maxItems);

    for (const entry of shown) {
      const file = entry.file;
      if (!file) continue;
      if (this.renderToken !== token || !root.isConnected) break;
      await FeedCardRenderer.renderCard(
        this.app,
        root,
        file,
        {
          previewChars,
          showCovers,
          token,
          getToken: () => this.renderToken,
        },
        this,
      );
      await new Promise((resolve) => setTimeout(resolve, isMobile ? 25 : 5));
    }

    if (this.renderToken === token && root.isConnected && entries.length > shown.length) {
      root.createDiv({
        cls: "stnd-feed-more",
        text: `+ ${entries.length - shown.length} more note(s) — narrow the filter or raise the limit.`,
      });
    }
  }

  _option(key, fallback) {
    try {
      const v = this.config?.get?.(key);
      return v === undefined || v === null ? fallback : v;
    } catch {
      return fallback;
    }
  }
}

/* ───────────────────────── Feed Feature ───────────────────────── */

class FeedFeature {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
    if (!plugin.settings.feed) {
      plugin.settings.feed = { ...DEFAULT_SETTINGS };
    }
    this.settings = plugin.settings.feed;
  }

  async load() {
    if (typeof this.plugin.registerBasesView === "function") {
      const viewOptions = () => [
        { type: "slider", key: "maxItems", displayName: "Max entries", default: this.settings.maxItems, min: 5, max: 200, step: 5 },
        { type: "slider", key: "previewChars", displayName: "Preview length (chars, 0 = full)", default: this.settings.previewChars, min: 0, max: 2000, step: 100 },
        { type: "toggle", key: "showCovers", displayName: "Show cover images", default: this.settings.showCovers },
      ];

      // Register standard view
      this.plugin.registerBasesView(VIEW_ID, {
        name: "Feed",
        icon: "rss",
        factory: (controller, containerEl) =>
          new FeedBasesView(controller, containerEl, this.settings),
        options: viewOptions,
      });

      // Register legacy alias so existing .base views don't break
      this.plugin.registerBasesView(LEGACY_VIEW_ID, {
        name: "Feed (Legacy)",
        icon: "rss",
        factory: (controller, containerEl) =>
          new FeedBasesView(controller, containerEl, this.settings),
        options: viewOptions,
      });
    }
  }

  async unload() {}
}

module.exports = {
  FeedFeature,
  FeedBasesView,
  FeedCardRenderer,
  DEFAULT_FEED_SETTINGS: DEFAULT_SETTINGS,
};
