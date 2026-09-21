"use strict";

const { PluginSettingTab, Setting, Notice, SuggestModal, MarkdownView } = require("obsidian");
const { Decoration, ViewPlugin } = require("@codemirror/view");
const { descWithLinks } = require("../../constants.js");

// ─── Engine: Find Outgoing Unlinked Mentions ─────────────────────────────────

function getFileAliases(app, file) {
  const cache = app.metadataCache.getFileCache(file);
  const aliases = [];
  if (cache?.frontmatter?.aliases) {
    const a = cache.frontmatter.aliases;
    if (Array.isArray(a)) aliases.push(...a);
    else if (typeof a === "string") aliases.push(...a.split(",").map(s => s.trim()));
  }
  if (cache?.frontmatter?.alias) {
    const a = cache.frontmatter.alias;
    if (Array.isArray(a)) aliases.push(...a);
    else if (typeof a === "string") aliases.push(...a.split(",").map(s => s.trim()));
  }
  return aliases.filter(Boolean);
}

function escapeRegex(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * Masks the entire YAML frontmatter body with spaces of identical length.
 * The text length and character offsets remain 100% identical, but frontmatter
 * keys, tags, dates, and metadata values will never be matched or linked, while
 * the markdown body remains fully searchable.
 */
function getSearchableContent(content) {
  if (!content) return "";
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);
  if (!match) return content;

  const fmStart = content.indexOf(match[1]);
  const fmBody = match[1];
  const fmEnd = fmStart + fmBody.length;

  // Mask all characters in frontmatter body with spaces (preserving line breaks)
  const maskedFmBody = fmBody.replace(/[^\r\n]/g, " ");

  return content.slice(0, fmStart) + maskedFmBody + content.slice(fmEnd);
}

const RESERVED_FILENAMES = new Set([
  "readme",
  "license",
  "licence",
  "changelog",
  "changes",
  "todo",
  "index",
  "private",
  "note",
  "notes",
  "untitled",
  "sans titre",
  "scratchpad",
  "log",
  "logs",
  "journal",
  "template",
  "templates",
  "draft",
  "drafts",
  "archive",
  "archives",
]);

const COMMON_STOPWORDS = new Set([
  "jour",
  "note",
  "base",
  "page",
  "text",
  "texte",
  "type",
  "item",
  "tout",
  "tous",
  "bien",
  "faire",
  "fait",
  "voir",
  "avec",
  "sans",
  "pour",
  "dans",
  "plus",
  "mais",
  "comme",
  "importe",
  "aura",
  "avoir",
  "etre",
  "peut",
  "dire",
  "mode",
  "meta",
  "info",
  "data",
  "true",
  "false",
  "null",
]);

function isFileIgnoredForMycelium(file, plugin) {
  if (!file?.path) return true;
  const p = file.path.toLowerCase();
  if (p.startsWith(".trash/") || p.includes("/.trash/")) return true;
  if (p.startsWith("templates/") || p.includes("/templates/") || p.startsWith("_templates/")) return true;
  if (p.startsWith("archive/") || p.includes("/archive/") || p.startsWith("archives/")) return true;

  if (RESERVED_FILENAMES.has(file.basename.toLowerCase())) return true;

  if (plugin?.settings?.excludedFolders) {
    const raw = plugin.settings.excludedFolders;
    const folders = Array.isArray(raw)
      ? raw
      : String(raw)
          .split(",")
          .map((f) => f.trim().toLowerCase().replace(/^\/+|\/+$/g, ""))
          .filter(Boolean);
    const norm = file.path.toLowerCase().replace(/^\/+/, "");
    if (folders.some((f) => norm.startsWith(f + "/") || norm === f)) {
      return true;
    }
  }

  // Also check tag `#backlink-exclude`
  const cache = plugin?.app?.metadataCache?.getFileCache(file);
  const tags = [];
  if (cache?.tags) tags.push(...cache.tags.map((t) => t.tag.toLowerCase().replace(/^#/, "")));
  if (cache?.frontmatter?.tags) {
    const ft = cache.frontmatter.tags;
    if (Array.isArray(ft)) tags.push(...ft.map((t) => String(t).toLowerCase().replace(/^#/, "")));
    else if (typeof ft === "string") tags.push(...ft.split(",").map((t) => t.trim().toLowerCase().replace(/^#/, "")));
  }
  if (tags.includes("backlink-exclude")) return true;

  return false;
}

const COMMON_FRENCH_IDIOMS = [
  /\b(?:mise|mis|mettre|met|mettait|foutre|foutu)\s+à\s+la\s+porte\b/gi,
  /\b(?:prendre|pris|prend)\s+la\s+porte\b/gi,
  /\b(?:au\s+bout\s+du\s+compte)\b/gi,
  /\b(?:de\s+temps\s+en\s+temps)\b/gi,
  /\b(?:coup\s+de\s+main)\b/gi,
];

async function findOutgoingUnlinkedMentions(app, activeFile, plugin = null) {
  const rawContent = await app.vault.cachedRead(activeFile);
  const content = getSearchableContent(rawContent);
  const files = app.vault.getMarkdownFiles();
  const suggestions = [];
  const seenBasenames = new Set();
  const seenTerms = new Set();

  // Find boundaries of common idioms to avoid false positives (e.g. "mise à la porte")
  const idiomRanges = [];
  for (const idiomRegex of COMMON_FRENCH_IDIOMS) {
    idiomRegex.lastIndex = 0;
    let im;
    while ((im = idiomRegex.exec(content)) !== null) {
      idiomRanges.push({ start: im.index, end: im.index + im[0].length });
    }
  }

  for (const file of files) {
    if (file.path === activeFile.path) continue;
    if (isFileIgnoredForMycelium(file, plugin)) continue;

    const baseNameLower = file.basename.toLowerCase();
    if (seenBasenames.has(baseNameLower)) continue;
    
    // Check if it's already explicitly linked in outgoing OR incoming links
    const outgoing = app.metadataCache.resolvedLinks[activeFile.path] || {};
    if (outgoing.hasOwnProperty(file.path)) continue;
    const incoming = app.metadataCache.resolvedLinks[file.path] || {};
    if (incoming.hasOwnProperty(activeFile.path)) continue;

    const termsToCheck = [file.basename, ...getFileAliases(app, file)];
    let matchFound = false;
    let matchedTerm = "";

    for (const term of termsToCheck) {
      const termLower = term.toLowerCase().trim();
      if (termLower.length < 3) continue; // Skip very short words to avoid noise
      if (COMMON_STOPWORDS.has(termLower)) continue; // Skip common language words
      if (RESERVED_FILENAMES.has(termLower)) continue; // Skip technical words
      if (seenTerms.has(termLower)) continue;
      
      const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, "gi");
      let rawMatch;
      let validMatchCount = 0;

      while ((rawMatch = regex.exec(content)) !== null) {
        const mStart = rawMatch.index;
        const mEnd = mStart + rawMatch[0].length;

        // Skip if inside existing wikilink or markdown link
        const searchStart = Math.max(0, mStart - 100);
        const searchEnd = Math.min(content.length, mEnd + 100);
        const context = content.slice(searchStart, searchEnd);
        const relStart = mStart - searchStart;
        const relEnd = relStart + rawMatch[0].length;
        const before = context.slice(0, relStart);
        const after = context.slice(relEnd);

        if (before.lastIndexOf("[[") > before.lastIndexOf("]]") && after.indexOf("]]") !== -1) {
          continue;
        }
        if (before.lastIndexOf("[") > before.lastIndexOf("]") && after.indexOf(")") !== -1) {
          continue;
        }

        // Skip if match falls entirely inside an idiomatic expression
        const isIdiom = idiomRanges.some((r) => mStart >= r.start && mEnd <= r.end);
        if (isIdiom) continue;

        validMatchCount++;
      }

      if (validMatchCount > 0) {
        matchFound = true;
        matchedTerm = term;
        break;
      }
    }

    if (matchFound) {
      seenBasenames.add(baseNameLower);
      seenTerms.add(matchedTerm.toLowerCase().trim());
      suggestions.push({ file, term: matchedTerm });
    }
  }

  // Post-filter: Longer terms win over sub-terms (e.g. "La peur du jugement" wins over "Jugement"
  // if "Jugement" does not appear anywhere else on its own in the document)
  const filteredSuggestions = [];
  suggestions.sort((a, b) => (b.term?.length || 0) - (a.term?.length || 0));

  for (let i = 0; i < suggestions.length; i++) {
    const current = suggestions[i];
    let isSubMatchOnly = false;

    for (const accepted of filteredSuggestions) {
      if (accepted.term.toLowerCase().includes(current.term.toLowerCase())) {
        const withoutAccepted = content.replace(
          new RegExp(`\\b${escapeRegex(accepted.term)}\\b`, "gi"),
          " "
        );
        const currentRegex = new RegExp(
          `\\b${escapeRegex(current.term)}\\b`,
          "gi"
        );
        if (!currentRegex.test(withoutAccepted)) {
          isSubMatchOnly = true;
          break;
        }
      }
    }

    if (!isSubMatchOnly) {
      filteredSuggestions.push(current);
    }
  }

  return filteredSuggestions;
}

async function createMentionLink(app, activeFile, suggestion) {
  const content = await app.vault.read(activeFile);
  const previousContent = content;
  const searchableContent = getSearchableContent(content);
  const term = suggestion.term;
  
  // We want to replace the LAST occurrence of the term that is not inside a link and not a frontmatter key.
  // We match against searchableContent so frontmatter property keys are masked out.
  const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, "gi");
  let match;
  const allMatches = [];
  while ((match = regex.exec(searchableContent)) !== null) {
    allMatches.push({ start: match.index, end: match.index + match[0].length, text: match[0] });
  }

  // Find link boundaries
  const linkBoundaries = [];
  const linkRegex = /(\[\[.*?\]\])|(\[.*?\]\(.*?\))/g;
  let lMatch;
  while ((lMatch = linkRegex.exec(content)) !== null) {
    linkBoundaries.push({ start: lMatch.index, end: lMatch.index + lMatch[0].length });
  }

  // Iterate backwards to find the last valid match
  let targetMatch = null;
  for (let i = allMatches.length - 1; i >= 0; i--) {
    const m = allMatches[i];
    let isInsideLink = false;
    for (const b of linkBoundaries) {
      if (m.start >= b.start && m.end <= b.end) {
        isInsideLink = true;
        break;
      }
    }
    if (!isInsideLink) {
      targetMatch = m;
      break;
    }
  }

  if (targetMatch) {
    const before = content.substring(0, targetMatch.start);
    const after = content.substring(targetMatch.end);
    // If the matched text exactly matches the basename, link cleanly as [[Basename]].
    // Otherwise, preserve sentence casing or alias as [[Basename|term]].
    let linkStr = `[[${suggestion.file.basename}]]`;
    if (suggestion.file.basename !== targetMatch.text) {
      linkStr = `[[${suggestion.file.basename}|${targetMatch.text}]]`;
    }
    
    const newContent = before + linkStr + after;
    await app.vault.modify(activeFile, newContent);

    // Interactive Notice with instant Undo button
    const notice = new Notice("", 7000);
    const nEl = notice.noticeEl;
    nEl.empty();
    nEl.createSpan({ text: `Lié : "${term}" → [[${suggestion.file.basename}]]` });

    const undoBtn = nEl.createEl("button", {
      text: "Annuler",
      cls: "stnd-panel-btn stnd-panel-btn-secondary",
    });
    undoBtn.style.cssText =
      "margin-left: 8px; padding: 2px 8px; font-size: 11px; height: 22px;";

    undoBtn.addEventListener("click", async () => {
      await app.vault.modify(activeFile, previousContent);
      notice.hide();
      new Notice(`Lien annulé : "${term}"`);
      if (typeof window.stndRefreshMycelium === "function") {
        window.stndRefreshMycelium();
      }
      if (typeof window.stndPanelRefreshLinks === "function") {
        window.stndPanelRefreshLinks();
      }
    });
  } else {
    new Notice(`Impossible de trouver une occurrence valide pour "${term}".`);
  }
}


let ghostLinksRevision = 0;

// ─── Option A: Ghost Links (CodeMirror Extension) ────────────────────────────

const ghostLinksPlugin = ViewPlugin.fromClass(
  class {
    constructor(view) {
      this.lastRevision = ghostLinksRevision;
      this.decorations = Decoration.none;
      this.view = view;
      this.buildDecorations(view);
    }

    update(update) {
      if (
        update.docChanged ||
        update.viewportChanged ||
        this.lastRevision !== ghostLinksRevision
      ) {
        this.lastRevision = ghostLinksRevision;
        this.buildDecorations(update.view);
      }
    }

    buildDecorations(view) {
      const isEnabled = window.stndMyceliumSettings?.enableGhostLinks;
      if (!isEnabled) {
        this.decorations = Decoration.none;
        return;
      }

      const suggestions = window.stndMyceliumCache || [];
      if (!suggestions || suggestions.length === 0) {
        this.decorations = Decoration.none;
        return;
      }

      // Sort suggestions by length descending (longest phrase matches first)
      const sortedSuggestions = [...suggestions].sort(
        (a, b) => (b.term?.length || 0) - (a.term?.length || 0)
      );

      const builder = [];
      const matchedRanges = []; // Track occupied ranges to avoid overlapping decorations in CM6

      // Determine frontmatter end offset if any
      let fmEndOffset = -1;
      const app = view.app || window.app;
      const activeFile = app?.workspace?.getActiveFile();
      if (activeFile && app?.metadataCache) {
        const cache = app.metadataCache.getFileCache(activeFile);
        if (cache?.frontmatterPosition) {
          fmEndOffset = cache.frontmatterPosition.end.offset;
        }
      }

      for (let { from, to } of view.visibleRanges) {
        const text = view.state.doc.sliceString(from, to);
        if (!text) continue;

        for (const sug of sortedSuggestions) {
          const term = sug.term;
          if (!term || term.length < 2) continue;

          const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, "gi");
          let match;
          while ((match = regex.exec(text)) !== null) {
            const start = from + match.index;
            const end = start + match[0].length;

            // 1. Skip if within YAML frontmatter
            if (fmEndOffset > -1 && start < fmEndOffset) {
              continue;
            }

            // 2. Skip if already inside a markdown or wikilink [[...]] or [...]()
            const searchWindowStart = Math.max(0, start - 150);
            const searchWindowEnd = Math.min(view.state.doc.length, end + 150);
            const context = view.state.doc.sliceString(searchWindowStart, searchWindowEnd);
            const relStart = start - searchWindowStart;
            const relEnd = relStart + match[0].length;
            const before = context.slice(0, relStart);
            const after = context.slice(relEnd);

            if (before.lastIndexOf("[[") > before.lastIndexOf("]]") && after.indexOf("]]") !== -1) {
              continue;
            }
            if (before.lastIndexOf("[") > before.lastIndexOf("]") && after.indexOf(")") !== -1) {
              continue;
            }

            // 3. Skip if overlapping with another already-matched longer term
            const overlaps = matchedRanges.some(
              (r) => (start >= r.start && start < r.end) || (end > r.start && end <= r.end) || (start <= r.start && end >= r.end)
            );
            if (overlaps) continue;

            matchedRanges.push({ start, end });

            builder.push(
              Decoration.mark({
                class: "mycelium-ghost-link",
                attributes: {
                  title: `🌱 Alt+Click to link to ${sug.file.basename}`,
                  "data-target": sug.file.path,
                  "data-term": term,
                  "data-basename": sug.file.basename,
                },
              }).range(start, end)
            );
          }
        }
      }

      builder.sort((a, b) => a.from - b.from || a.to - b.to);
      this.decorations = Decoration.set(builder);
    }
  },
  {
    decorations: (v) => v.decorations,
    eventHandlers: {
      click: (e, view) => {
        const target = e.target.closest(".mycelium-ghost-link");
        if (!target) return false;

        const targetPath = target.getAttribute("data-target");
        const term = target.getAttribute("data-term");
        const basename = target.getAttribute("data-basename") || target.textContent;
        if (!targetPath || !term) return false;

        const app = view.app || window.app;
        const file = app.vault.getAbstractFileByPath(targetPath);
        const activeFile = app.workspace.getActiveFile();
        if (!file || !activeFile) return false;

        // Desktop: Alt+Click links immediately
        if (e.altKey) {
          e.preventDefault();
          e.stopPropagation();
          createMentionLink(app, activeFile, { file, term });
          return true;
        }

        // Mobile: Tap opens native action menu to link
        const { Menu, Platform } = require("obsidian");
        if (Platform.isMobile) {
          e.preventDefault();
          e.stopPropagation();
          const menu = new Menu();
          menu.addItem((item) => {
            item
              .setTitle(`Lier [[${basename}]]`)
              .setIcon("link")
              .onClick(() => {
                createMentionLink(app, activeFile, { file, term });
              });
          });
          menu.showAtMouseEvent(e);
          return true;
        }

        return false;
      },
    },
  }
);

// ─── Option B: Linking Modal ─────────────────────────────────────────────────

class LinkingModal extends SuggestModal {
  constructor(app, activeFile, suggestions) {
    super(app);
    this.activeFile = activeFile;
    this.suggestions = suggestions;
    this.setPlaceholder("Select a concept to link...");
  }

  getSuggestions(query) {
    return this.suggestions.filter((s) =>
      s.file.basename.toLowerCase().includes(query.toLowerCase()) ||
      s.term.toLowerCase().includes(query.toLowerCase())
    );
  }

  renderSuggestion(suggestion, el) {
    el.createEl("div", { text: suggestion.file.basename, cls: "link-suggest-title" });
    el.createEl("small", { text: `Found mention: "${suggestion.term}"`, cls: "link-suggest-desc" });
  }

  async onChooseSuggestion(suggestion, evt) {
    await createMentionLink(this.app, this.activeFile, suggestion);
  }
}

// ─── Option C: Compost Footer & Engine ───────────────────────────────────────

class MyceliumFeature {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
    if (!plugin.settings.mycelium) {
      plugin.settings.mycelium = {
        enableGhostLinks: false,
        enableLinkingCommand: true,
        enableCompostFooter: false,
      };
    }
    this.settings = plugin.settings.mycelium;
  }

  async refreshSuggestions() {
    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile && activeFile.extension === "md") {
      const suggestions = await findOutgoingUnlinkedMentions(
        this.app,
        activeFile,
        this.plugin
      );
      window.stndMyceliumCache = suggestions;
    } else {
      window.stndMyceliumCache = [];
    }

    ghostLinksRevision++;

    // Notify CodeMirror views to re-render decorations
    this.app.workspace.iterateAllLeaves((leaf) => {
      if (leaf.view instanceof MarkdownView && leaf.view.editor?.cm) {
        try {
          leaf.view.editor.cm.dispatch({});
        } catch (e) {}
      }
    });
  }

  async load() {
    window.stndMyceliumCache = [];
    window.stndMyceliumSettings = this.settings;
    window.stndMyceliumFeature = this;
    window.stndRefreshMycelium = () => this.refreshSuggestions();

    // Initial cache population for current active file
    this.refreshSuggestions();

    this.plugin.registerEvent(
      this.app.workspace.on("active-leaf-change", () => {
        this.refreshSuggestions();
      })
    );

    this.plugin.registerEvent(
      this.app.metadataCache.on("changed", (file) => {
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile && file.path === activeFile.path) {
          if (this.cacheTimeout) clearTimeout(this.cacheTimeout);
          this.cacheTimeout = setTimeout(() => this.refreshSuggestions(), 1500);
        }
      })
    );

    this.plugin.registerEditorExtension(ghostLinksPlugin);

    const isLinkingEnabled = this.settings.enableLinkingCommand ?? this.settings.enableGraftingCommand;
    if (isLinkingEnabled) {
      this.plugin.addCommand({
        id: "mycelium-link-mentions",
        name: "Tend the Mycelium (Link mentions)",
        callback: async () => {
          const activeFile = this.app.workspace.getActiveFile();
          if (!activeFile || activeFile.extension !== "md") {
            new Notice("Open a markdown note to tend the mycelium.");
            return;
          }
          new Notice("Scanning for roots...");
          const suggestions = await findOutgoingUnlinkedMentions(
            this.app,
            activeFile,
            this.plugin
          );
          if (suggestions.length === 0) {
            new Notice("No unlinked mentions found.");
            return;
          }
          new LinkingModal(this.app, activeFile, suggestions).open();
        },
      });
    }

    this.plugin.registerMarkdownPostProcessor(async (el, ctx) => {
      // 1. If disabled, clean up any compost footers that might be in the DOM
      if (!this.settings.enableCompostFooter) {
        const footers = el.querySelectorAll(".mycelium-compost-footer");
        footers.forEach((f) => f.remove());
        return;
      }

      const file = this.app.vault.getAbstractFileByPath(ctx.sourcePath);
      if (!file) return;

      // 2. Only inject on the LAST block of the document containing text
      const sectionInfo = ctx.getSectionInfo(el);
      if (!sectionInfo) return;

      const lines = sectionInfo.text.split("\n");
      let lastNonEmptyIndex = lines.length - 1;
      while (lastNonEmptyIndex >= 0 && !lines[lastNonEmptyIndex].trim()) {
        lastNonEmptyIndex--;
      }

      if (sectionInfo.lineEnd < lastNonEmptyIndex) {
        return;
      }

      // 3. Clean up any previous duplicate footers in this document view
      const containerParent =
        el.closest(".markdown-preview-section") ||
        el.closest(".markdown-rendered") ||
        el.parentElement;

      if (containerParent) {
        const existingList = containerParent.querySelectorAll(
          ".mycelium-compost-footer"
        );
        existingList.forEach((n) => n.remove());
      }

      // 4. Create single footer right after this last block
      const container = document.createElement("div");
      container.className = "mycelium-compost-footer";
      el.insertAdjacentElement("afterend", container);

      const suggestions = await findOutgoingUnlinkedMentions(
        this.app,
        file,
        this.plugin
      );

      if (suggestions && suggestions.length > 0) {
        container.empty();
        container.createEl("h4", {
          text: "🌱 Mycélium (Mentions potentielles)",
          cls: "mycelium-footer-title",
        });
        const btnContainer = container.createEl("div", {
          cls: "mycelium-footer-buttons",
        });

        for (const sug of suggestions) {
          const btn = btnContainer.createEl("button", {
            text: `+ ${sug.file.basename}`,
            cls: "mycelium-footer-btn",
          });
          btn.onclick = async () => {
            await createMentionLink(this.app, file, sug);
            btn.remove();
            if (btnContainer.children.length === 0) {
              container.remove();
            }
          };
        }
      } else {
        container.remove();
      }
    });
  }
}

// ─── Settings Tab ────────────────────────────────────────────────────────────

class MyceliumSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
    this.settings = plugin.settings.mycelium;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Mycelium (Link Assist)" });

    const desc = containerEl.createEl("p", {
      text: "The Mycelium engine connects your thoughts by finding unlinked mentions of other notes in your current text. When you link a mention, it connects the LAST occurrence of the word, encouraging the reader to read the whole text before clicking away.",
      cls: "setting-item-description",
    });

    
    new Setting(containerEl)
      .setName("Enable Ghost Links (Option A)")
      .setDesc("Subtly underlines potential links in the editor. Alt+Click or tap to link them.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.settings.enableGhostLinks)
          .onChange(async (value) => {
            this.settings.enableGhostLinks = value;
            window.stndMyceliumSettings = this.settings;
            await this.plugin.saveSettings();
            if (typeof window.stndRefreshMycelium === "function") {
              window.stndRefreshMycelium();
            }
          }),
      );

    new Setting(containerEl)
      .setName("Enable Linking Command")
      .setDesc("Adds a command 'Tend the Mycelium (Link mentions)' to the palette. Opens a modal to link mentions.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.settings.enableLinkingCommand ?? this.settings.enableGraftingCommand ?? true)
          .onChange(async (value) => {
            this.settings.enableLinkingCommand = value;
            this.settings.enableGraftingCommand = value;
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName("Enable Compost Footer")
      .setDesc("Silently appends a list of potential links at the bottom of the Reading View for passive discovery.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.settings.enableCompostFooter)
          .onChange(async (value) => {
            this.settings.enableCompostFooter = value;
            window.stndMyceliumSettings = this.settings;
            await this.plugin.saveSettings();
            const view = this.plugin.app.workspace.getActiveViewOfType(MarkdownView);
            if (view?.previewMode) {
              view.previewMode.rerender(true);
            }
          }),
      );
  }
}

module.exports = {
  MyceliumFeature,
  MyceliumSettingTab,
  findOutgoingUnlinkedMentions,
  createMentionLink,
  graftLink: createMentionLink,
};
