"use strict";

const obsidian_1 = require("obsidian");
const { KNOWN_TOKENS, isPublishIntent } = require("../../constants");
const { StndConfirmModal } = require("../garden/modals/confirm-modal");
const { StndShareModal } = require("../garden/modals/share-modal");
const {
  findOutgoingUnlinkedMentions,
  createMentionLink,
} = require("../mycelium/index.js");

// ─── Side Panel View ──────────────────────────────────────────────────────────

const STND_PANEL_VIEW = "stnd-garden-panel";

class StandardGardenView extends obsidian_1.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this._onFileChange = null;
    this._onMetaChange = null;
    this._debounceTimers = {};
    this._lastRenderedFile = null;
    this.activeTab = "note"; // "note", "links" ou "audit"
    this.auditData = null;
    this.isAuditing = false;
    this.searchingCandidates = {};
    this.linksData = null;
    this.isLoadingLinks = false;
    this.noteStatsCache = new Map();
    this.isLoadingStats = false;
    this.inquiryCache = new Map();
  }

  async triggerHypheInquiry(file) {
    if (!file) return;
    const existing = this.inquiryCache.get(file.path) || {};
    this.inquiryCache.set(file.path, { ...existing, isLoading: true, error: null });
    this.render();

    try {
      const content = await this.plugin.app.vault.read(file);
      const questions = await this.plugin.garden.askHypheInquiry(file, content);
      this.inquiryCache.set(file.path, {
        questions: questions || [],
        isLoading: false,
        error: null,
      });
    } catch (err) {
      this.inquiryCache.set(file.path, {
        questions: [],
        isLoading: false,
        error: err.message || "Failed to generate inquiry",
      });
    } finally {
      this.render();
    }
  }

  async appendInquiryToNote(file, question) {
    if (!file || !question) return;
    try {
      await this.plugin.app.vault.process(file, (content) => {
        const callout = `\n\n> [!quote] 🦉 Hyphe's Inquiry\n> ${question}\n\n`;
        return content.trimEnd() + callout;
      });
      new obsidian_1.Notice("Inquiry added to note.");
    } catch (err) {
      new obsidian_1.Notice(`Error adding inquiry: ${err.message}`);
    }
  }

  async loadNoteStats(file) {
    if (!file || this.isLoadingStats) return;
    this.isLoadingStats = true;
    try {
      const stats = await this.plugin.garden.getNoteStats(file);
      if (stats) {
        this.noteStatsCache.set(file.path, stats);
      }
    } catch (e) {
      console.error("[Standard] Error loading note stats:", e);
    } finally {
      this.isLoadingStats = false;
      this.render();
    }
  }

  getViewType() {
    return STND_PANEL_VIEW;
  }
  getDisplayText() {
    return "Garden";
  }
  getIcon() {
    return "flower";
  }

  async onOpen() {
    this._onFileChange = () => {
      this.render();
    };
    this._onMetaChange = (file) => {
      if (this._writing) return;
      const active = this.plugin.app.workspace.getActiveFile();
      if (active && file && (file === active || (file.path && active.path && file.path === active.path))) {
        this.linksData = null;
        this.render();
      }
    };
    this.plugin.app.workspace.on("file-open", this._onFileChange);
    this.plugin.app.workspace.on("active-leaf-change", this._onFileChange);
    this.plugin.app.metadataCache.on("changed", this._onMetaChange);
    this.plugin.app.metadataCache.on("resolve", this._onMetaChange);
    this.render();
  }

  async onClose() {
    if (this._onFileChange) {
      this.plugin.app.workspace.off("file-open", this._onFileChange);
      this.plugin.app.workspace.off("active-leaf-change", this._onFileChange);
    }
    if (this._onMetaChange) {
      this.plugin.app.metadataCache.off("changed", this._onMetaChange);
      this.plugin.app.metadataCache.off("resolve", this._onMetaChange);
    }
    for (const t of Object.values(this._debounceTimers)) clearTimeout(t);
  }

  // ── Frontmatter write helper ────────────────────────────────────────────

  _setFrontmatter(file, key, value) {
    clearTimeout(this._debounceTimers[key]);
    this._debounceTimers[key] = setTimeout(() => {
      this._writing = true;
      this.plugin.app.fileManager
        .processFrontMatter(file, (fm) => {
          if (value === "" || value === null || value === undefined) {
            delete fm[key];
          } else {
            fm[key] = value;
          }
        })
        .finally(() => {
          setTimeout(() => {
            this._writing = false;
          }, 300);
        });
    }, 400);
  }

  // ── Render ──────────────────────────────────────────────────────────────

  render() {
    const container = this.containerEl.children[1];
    container.empty();
    container.addClass("stnd-panel");
    container.style.overflowY = "auto";
    container.style.touchAction = "pan-y";
    container.style.webkitOverflowScrolling = "touch";

    // Global header: left = product name, right = connected username (if any)
    const headerEl = container.createEl("div", {
      cls: "stnd-panel-global-header",
    });
    headerEl.createEl("div", {
      cls: "stnd-panel-global-title",
      text: "Garden",
    });
    const username = this.plugin?.settings?.apiUsername || "";
    const userEl = headerEl.createEl("div", {
      cls: "stnd-panel-global-username",
      text: username ? `@${username}` : "",
    });

    if (username) {
      userEl.style.cursor = "pointer";
      userEl.addEventListener("click", () => {
        window.open(`https://standard.garden/@${username}`, "_blank");
      });
      // Simple hover effect
      userEl.addEventListener("mouseenter", () => {
        userEl.style.color = "var(--text-normal)";
      });
      userEl.addEventListener("mouseleave", () => {
        userEl.style.color = "var(--text-faint)";
      });
    }

    // Garden (note) and Mycelium now render together as a single view — no
    // tab bar needed. Audit is disabled here for now (candidate for moving
    // into the chisel plugin later); _renderAuditTab is kept intact below,
    // just unreached, so re-enabling it is a one-line uncomment.
    //
    // const tabsEl = container.createEl("div", { cls: "stnd-panel-tabs" });
    // const auditTabBtn = tabsEl.createEl("button", {
    //   cls: "stnd-panel-tab" + (this.activeTab === "audit" ? " is-active" : ""),
    //   text: "Audit",
    // });
    // auditTabBtn.addEventListener("click", () => {
    //   this.activeTab = "audit";
    //   this.render();
    // });

    const file = this.plugin.app.workspace.getActiveFile();

    if (!file) {
      const empty = container.createEl("div", { cls: "stnd-panel-empty" });
      empty.createEl("p", { text: "Aucune note ouverte.", cls: "stnd-panel-muted" });
      return;
    }

    this._lastRenderedFile = file;
    const meta = this.plugin.app.metadataCache.getFileCache(file);
    const fm = meta?.frontmatter || {};

    // ── Garden: File Info / Profile Settings / AI Generate / Token Groups ──
    this._renderFileInfo(container, file, fm);
    this._renderGardenSettings(container, file, fm);
    this._renderAIGenerate(container, file, fm);
    this._renderTokenGroups(container, file, fm);

    // ── Mycelium & Links ─────────────────────────────────────────────────
    if ((!this.linksData || this.linksData.file !== file) && !this.isLoadingLinks) {
      this.refreshLinksData();
    }
    this._renderLinksTab(container);

    // if (this.activeTab === "audit") {
    //   this._renderAuditTab(container);
    // }
  }

  // ── File Info Section ─────────────────────────────────────────────────

  _renderFileInfo(container, file, fm) {
    const section = container.createEl("div", { cls: "stnd-panel-section" });

    // Publish status + actions
    const isPublished = isPublishIntent(fm);
    // garden_url is the confirmation stamp; url_public/published = legacy notes
    const isConfirmedOnline =
      !!fm["garden-url"] ||
      !!fm.url_public ||
      fm.published === true ||
      fm.published === "true";

    const statusRow = section.createEl("div", { cls: "stnd-panel-status-row" });
    statusRow.style.marginTop = "0"; // Pull it up since header is gone

    if (this.plugin.settings.apiKey) {
      if (isConfirmedOnline) {
        const cachedStats = this.noteStatsCache.get(file.path);
        const remoteTime = cachedStats?.updated_at
          ? new Date(cachedStats.updated_at).getTime()
          : 0;
        const localTime = file.stat?.mtime || 0;
        const isModifiedLocally =
          remoteTime > 0 && localTime > remoteTime + 3000;

        if (isModifiedLocally) {
          const badge = statusRow.createEl("span", {
            text: "Modified",
            cls: "stnd-panel-badge stnd-panel-badge-pending",
          });
          badge.title = "Local edits not yet synced to Garden";
        } else {
          const badge = statusRow.createEl("span", {
            text: "Synced",
            cls: "stnd-panel-badge stnd-panel-badge-online",
          });
          badge.title = "Up to date with Garden";
        }
      } else if (isPublished) {
        statusRow.createEl("span", {
          text: "Queued",
          cls: "stnd-panel-badge stnd-panel-badge-pending",
        });
      } else if (fm.status === "draft" || fm.publish === false || fm.publish === "false") {
        statusRow.createEl("span", {
          text: "Draft",
          cls: "stnd-panel-badge stnd-panel-badge-excluded",
        });
      } else {
        statusRow.createEl("span", {
          text: "Local",
          cls: "stnd-panel-badge stnd-panel-badge-local",
        });
      }
    } else {
      const notice = statusRow.createEl("span", {
        text: "Add an API key in settings to plant seeds.",
        cls: "stnd-panel-meta",
      });
      notice.style.fontStyle = "italic";
    }

    if (this.plugin.settings.apiKey) {
      const actions = statusRow.createEl("div", { cls: "stnd-panel-actions" });

      const publishBtn = actions.createEl("button", {
        text: isConfirmedOnline ? "Update" : "Publish",
        cls: "stnd-panel-btn",
      });
      publishBtn.addEventListener("click", async () => {
        publishBtn.disabled = true;
        publishBtn.textContent = "...";
        const ok = await this.plugin.garden.publishWithCheck(file);
        if (ok === true) {
          new obsidian_1.Notice(`Standard : "${file.basename}" publié.`);
          if (this.plugin.settings.openAfterPublish) {
            this.plugin.garden.viewLiveVersion(file);
          }
          this.render();
        } else if (ok === false) {
          new obsidian_1.Notice(`Standard : Échec de la publication de "${file.basename}".`);
          this.render();
        } else {
          // null = user cancelled the confirmation — restore button
          publishBtn.disabled = false;
          publishBtn.textContent = isConfirmedOnline ? "Update" : "Publish";
        }
      });

      if (isConfirmedOnline && this.plugin.settings.apiUsername) {
        const liveUrl = this.plugin.garden.getLiveUrl(file);

        const viewBtn = actions.createEl("button", {
          text: "Open",
          cls: "stnd-panel-btn stnd-panel-btn-secondary",
        });
        viewBtn.addEventListener("click", () => this.plugin.garden.viewLiveVersion(file));

        const shareBtn = actions.createEl("button", {
          text: "Share",
          cls: "stnd-panel-btn stnd-panel-btn-secondary",
        });
        shareBtn.addEventListener("click", () => {
          new StndShareModal(this.plugin.app, file.basename, liveUrl).open();
        });

        const copyBtn = actions.createEl("button", {
          text: "Copy",
          cls: "stnd-panel-btn stnd-panel-btn-secondary",
        });
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(liveUrl);
          new obsidian_1.Notice("Public URL copied to clipboard.");
        });
      }

      if (isConfirmedOnline) {
        const removeBtn = actions.createEl("button", {
          text: "Unpublish",
          cls: "stnd-panel-btn stnd-panel-btn-danger",
        });
        removeBtn.addEventListener("click", async () => {
          removeBtn.disabled = true;
          removeBtn.textContent = "...";
          const ok = await this.plugin.garden.deleteOnlineVersion(file);
          if (ok === true) {
            new obsidian_1.Notice(
              `Standard : "${file.basename}" retiré du jardin.`,
            );
            this.render();
          } else if (ok === false) {
            new obsidian_1.Notice(`Standard : Échec du retrait de "${file.basename}".`);
            this.render();
          } else {
            // null = user cancelled — restore button
            removeBtn.disabled = false;
            removeBtn.textContent = "Unpublish";
          }
        });
      }

      // ── Visibility Selector ───────────────────────────────────────────
      const visRow = section.createEl("div", { cls: "stnd-panel-vis-row" });
      visRow.style.cssText =
        "display: flex; align-items: center; justify-content: space-between; margin-top: var(--size-4-2); font-size: var(--font-ui-smaller);";
      visRow.createEl("span", { text: "Visibility", cls: "stnd-panel-meta" });

      const visSelect = visRow.createEl("select", {
        cls: "dropdown stnd-panel-select",
      });
      visSelect.createEl("option", { value: "public", text: "Public (feed & search)" });
      visSelect.createEl("option", { value: "unlisted", text: "Unlisted (link only)" });
      visSelect.createEl("option", { value: "private", text: "Private (owner only)" });

      const currentVis = String(fm.visibility || "public").toLowerCase().trim();
      visSelect.value = ["public", "unlisted", "private"].includes(currentVis)
        ? currentVis
        : "public";

      visSelect.addEventListener("change", () => {
        this._setFrontmatter(file, "visibility", visSelect.value);
      });

      // ── Stats & Citations ─────────────────────────────────────────────
      if (isConfirmedOnline) {
        const statsBox = section.createEl("div", { cls: "stnd-panel-stats-box" });
        statsBox.style.cssText =
          "margin-top: var(--size-4-3); padding-top: var(--size-4-2); border-top: 1px solid var(--background-modifier-border);";

        const cachedStats = this.noteStatsCache.get(file.path);
        if (!cachedStats && !this.isLoadingStats) {
          this.loadNoteStats(file);
        }

        const statsRow = statsBox.createEl("div", { cls: "stnd-panel-stats-row" });
        statsRow.style.cssText =
          "display: flex; align-items: center; justify-content: space-between; gap: var(--size-4-2); font-size: var(--font-ui-smaller); color: var(--text-muted);";

        const viewsEl = statsRow.createEl("div", { cls: "stnd-panel-views-count" });
        viewsEl.style.cssText = "display: flex; align-items: center; gap: 4px;";
        const eyeIcon = viewsEl.createEl("span");
        obsidian_1.setIcon(eyeIcon, "eye");
        const viewsCount = cachedStats ? cachedStats.views : (this.isLoadingStats ? "..." : 0);
        viewsEl.createEl("span", {
          text: `${viewsCount} ${viewsCount === 1 ? "view" : "views"}`,
        });

        if (cachedStats?.updated_at) {
          const date = new Date(cachedStats.updated_at);
          const formatted = date.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
          statsRow.createEl("span", {
            text: `Updated ${formatted}`,
            cls: "stnd-panel-meta",
          });
        }
      }
    }
  }

  // ── Garden Root Note Settings ──────────────────────────────────────────

  _renderGardenSettings(container, file, fm) {
    const isRoot = fm.permalink === "/";
    if (!isRoot) return;

    const section = container.createEl("div", { cls: "stnd-panel-section stnd-panel-garden-profile" });
    const header = section.createEl("div", { cls: "stnd-panel-section-header" });
    header.style.cssText =
      "font-size: var(--font-ui-smaller); font-weight: var(--font-semibold); color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--size-4-2);";
    header.createEl("span", { text: "Garden Profile Settings" });

    const fields = [
      {
        key: "garden-display-name",
        label: "Display name",
        type: "text",
        placeholder: this.plugin?.settings?.apiUsername || "Gardener",
      },
      {
        key: "garden-domain",
        label: "Custom domain",
        type: "text",
        placeholder: "notes.example.com",
      },
      {
        key: "garden-brand",
        label: "Brand logo",
        type: "text",
        placeholder: "URL or false to hide",
      },
      {
        key: "garden-favicon",
        label: "Favicon",
        type: "text",
        placeholder: "https://.../favicon.png",
      },
      {
        key: "garden-avatar",
        label: "Avatar",
        type: "text",
        placeholder: "URL or image path",
      },
      {
        key: "garden-launcher",
        label: "Command Launcher",
        type: "toggle",
        default: true,
      },
      {
        key: "garden-mycelium",
        label: "Mycelium Network",
        type: "toggle",
        default: true,
      },
    ];

    for (const field of fields) {
      this._renderField(section, file, fm, field);
    }
  }

  // ── AI Generate ───────────────────────────────────────────────────────

  _renderAIGenerate(container, file, fm) {
    const section = container.createEl("div", {
      cls: "stnd-panel-section stnd-panel-ai",
    });

    const hasTokens = Object.keys(fm).some(
      (key) =>
        KNOWN_TOKENS.has(key) ||
        key.startsWith("stnd-") ||
        key.startsWith("stnd_"),
    );

    const row = section.createEl("div", { cls: "stnd-panel-ai-row" });
    row.style.display = "flex";
    row.style.gap = "var(--size-4-2)";
    row.style.marginTop = "0";

    if (hasTokens) {
      const resetBtn = row.createEl("button", {
        text: "Reset",
        cls: "stnd-panel-btn stnd-panel-btn-secondary",
      });
      resetBtn.style.flex = "1";

      resetBtn.addEventListener("click", () => {
        new StndConfirmModal(
          this.plugin.app,
          `Remove all design tokens from "${file.basename}"?\n\nThis will delete fonts, colors, rhythm and layout tokens from frontmatter.`,
          "Reset",
          async () => {
            let removed = 0;
            await this.plugin.app.fileManager.processFrontMatter(file, (fm) => {
              for (const key of Object.keys(fm)) {
                if (
                  !key.startsWith("garden-") &&
                  !key.startsWith("garden_") &&
                  (KNOWN_TOKENS.has(key) ||
                    key.startsWith("stnd-") ||
                    key.startsWith("stnd_"))
                ) {
                  delete fm[key];
                  removed++;
                }
              }
            });
            new obsidian_1.Notice(
              removed > 0
                ? `Cleared ${removed} design token${removed > 1 ? "s" : ""}.`
                : "No design tokens found.",
            );
            this.plugin.design.updateBodyClasses();
            this.render();
          },
          () => {},
        ).open();
      });
    }

    const genBtn = row.createEl("button", {
      text: "Let's Hyphe design this",
      cls: "stnd-panel-btn",
    });
    genBtn.style.flex = "2";

    const view = this;
    genBtn.addEventListener("click", async () => {
      genBtn.disabled = true;
      genBtn.textContent = "Hyphe is designing…";

      try {
        const noteContent = await view.plugin.app.vault.cachedRead(file);
        const tokens = await view.plugin.garden.generateTokens(
          "",
          noteContent,
          fm,
        );
        if (tokens && typeof tokens === "object") {
          const excludedFromAI = new Set(["margin", "margin-block"]);
          await view.plugin.app.fileManager.processFrontMatter(file, (fm) => {
            for (const [key, value] of Object.entries(tokens)) {
              if (KNOWN_TOKENS.has(key) && !excludedFromAI.has(key)) {
                fm[key] = value;
              }
            }
          });
          new obsidian_1.Notice(
            `Hyphe styled this note with ${Object.keys(tokens).length} tokens.`,
          );
        } else {
          new obsidian_1.Notice("No tokens returned.");
        }
      } catch (e) {
        let msg = e.message || "Failed to generate design";
        try {
          const jsonStart = msg.indexOf("{");
          if (jsonStart !== -1) {
            const parsed = JSON.parse(msg.slice(jsonStart));
            if (parsed.error) msg = parsed.error;
          }
        } catch {}
        new obsidian_1.Notice(`Design failed: ${msg}`);
      } finally {
        genBtn.disabled = false;
        genBtn.textContent = "Let's Hyphe design this";
      }
    });
  }

  // ── Token Groups ──────────────────────────────────────────────────────

  _renderTokenGroups(container, file, fm) {
    const groups = [
      {
        title: "Typography",
        fields: [
          {
            key: "font-text",
            label: "Body font",
            type: "text",
            placeholder: "Inter",
          },
          {
            key: "font-header",
            label: "Heading font",
            type: "text",
            placeholder: "Merriweather",
          },
          {
            key: "font-monospace",
            label: "Code font",
            type: "text",
            placeholder: "Fira Code",
          },
          {
            key: "font-interface",
            label: "UI font",
            type: "text",
            placeholder: "System-UI",
          },
          {
            key: "font-weight-body",
            label: "Body weight",
            type: "number",
            placeholder: "400",
            step: "50",
          },
          {
            key: "font-weight-header",
            label: "Heading weight",
            type: "number",
            placeholder: "700",
            step: "50",
          },
          {
            key: "line-height",
            label: "Line height",
            type: "number",
            placeholder: "1.6",
            step: "0.05",
          },
        ],
      },
      {
        title: "Colors — Semantic",
        fields: [
          { key: "color-accent", label: "Accent", type: "color" },
          { key: "color-header", label: "Headings", type: "color" },
          { key: "color-bold", label: "Bold", type: "color" },
          { key: "color-italic", label: "Italic", type: "color" },
        ],
      },
      {
        title: "Colors — Light",
        fields: [
          { key: "color-light-foreground", label: "Foreground", type: "color" },
          { key: "color-light-background", label: "Background", type: "color" },
          { key: "color-light-accent", label: "Accent", type: "color" },
          { key: "color-light-red", label: "Red", type: "color" },
          { key: "color-light-orange", label: "Orange", type: "color" },
          { key: "color-light-yellow", label: "Yellow", type: "color" },
          { key: "color-light-green", label: "Green", type: "color" },
          { key: "color-light-cyan", label: "Cyan", type: "color" },
          { key: "color-light-blue", label: "Blue", type: "color" },
          { key: "color-light-purple", label: "Purple", type: "color" },
          { key: "color-light-pink", label: "Pink", type: "color" },
        ],
      },
      {
        title: "Colors — Dark",
        fields: [
          { key: "color-dark-foreground", label: "Foreground", type: "color" },
          { key: "color-dark-background", label: "Background", type: "color" },
          { key: "color-dark-accent", label: "Accent", type: "color" },
          { key: "color-dark-red", label: "Red", type: "color" },
          { key: "color-dark-orange", label: "Orange", type: "color" },
          { key: "color-dark-yellow", label: "Yellow", type: "color" },
          { key: "color-dark-green", label: "Green", type: "color" },
          { key: "color-dark-cyan", label: "Cyan", type: "color" },
          { key: "color-dark-blue", label: "Blue", type: "color" },
          { key: "color-dark-purple", label: "Purple", type: "color" },
          { key: "color-dark-pink", label: "Pink", type: "color" },
        ],
      },
      {
        title: "Vertical Rhythm",
        fields: [
          {
            key: "margin",
            label: "Base unit",
            type: "text",
            placeholder: "1rlh",
          },
          {
            key: "margin-block",
            label: "Block multiplier",
            type: "number",
            placeholder: "2",
            step: "0.5",
          },
        ],
      },
    ];

    const advancedAccordion = container.createEl("details", {
      cls: "stnd-panel-group stnd-panel-advanced-design",
    });
    const summary = advancedAccordion.createEl("summary", {
      text: "Advanced Design Settings",
    });
    summary.style.fontWeight = "var(--font-medium)";

    const contentWrap = advancedAccordion.createEl("div", {
      cls: "stnd-panel-advanced-body",
    });
    contentWrap.style.paddingLeft = "var(--size-4-2)";

    for (const group of groups) {
      const details = contentWrap.createEl("details", {
        cls: "stnd-panel-group",
      });
      if (group.open) details.setAttribute("open", "");
      details.createEl("summary", { text: group.title });

      const list = details.createEl("div", { cls: "stnd-panel-fields" });

      for (const field of group.fields) {
        this._renderField(list, file, fm, field);
      }
    }
  }

  // ── Individual Field Renderers ────────────────────────────────────────

  _renderField(parent, file, fm, field) {
    const row = parent.createEl("div", { cls: "stnd-panel-field" });
    row.createEl("label", { text: field.label, cls: "stnd-panel-field-label" });

    const current = fm[field.key];

    switch (field.type) {
      case "text": {
        const input = row.createEl("input", {
          cls: "stnd-panel-input",
          type: "text",
        });
        input.placeholder = field.placeholder || "";
        input.value = current ?? "";
        input.addEventListener("input", () => {
          this._setFrontmatter(file, field.key, input.value || null);
        });
        break;
      }
      case "number": {
        const input = row.createEl("input", {
          cls: "stnd-panel-input",
          type: "number",
        });
        input.placeholder = field.placeholder || "";
        input.step = field.step || "1";
        input.value = current ?? "";
        input.addEventListener("input", () => {
          const v = input.value === "" ? null : Number(input.value);
          this._setFrontmatter(file, field.key, v);
        });
        break;
      }
      case "toggle": {
        const isEnabled =
          current !== undefined
            ? Boolean(current && current !== "false")
            : (field.default ?? false);
        const toggle = row.createEl("div", {
          cls: "checkbox-container" + (isEnabled ? " is-enabled" : ""),
        });
        toggle.addEventListener("click", () => {
          const next = !toggle.hasClass("is-enabled");
          toggle.toggleClass("is-enabled", next);
          this._setFrontmatter(file, field.key, next);
        });
        break;
      }
      case "dropdown": {
        const select = row.createEl("select", {
          cls: "dropdown stnd-panel-select",
        });
        for (const opt of field.options) {
          const el = select.createEl("option", {
            text: opt || "—",
            value: opt,
          });
          if ((current ?? "") === opt) el.selected = true;
        }
        select.addEventListener("change", () => {
          this._setFrontmatter(file, field.key, select.value || null);
        });
        break;
      }
      case "color": {
        const wrapper = row.createEl("div", { cls: "stnd-panel-color-wrap" });
        const colorInput = wrapper.createEl("input", {
          type: "color",
          cls: "stnd-panel-color",
        });
        const textInput = wrapper.createEl("input", {
          type: "text",
          cls: "stnd-panel-input stnd-panel-color-text",
        });
        textInput.placeholder = field.placeholder || "#000000";

        const raw = current ?? "";
        const hex = this._toHex(raw);
        colorInput.value = hex || "#000000";
        textInput.value = raw;

        colorInput.addEventListener("input", () => {
          textInput.value = colorInput.value;
          this._setFrontmatter(file, field.key, colorInput.value);
        });
        textInput.addEventListener("input", () => {
          const h = this._toHex(textInput.value);
          if (h) colorInput.value = h;
          this._setFrontmatter(file, field.key, textInput.value || null);
        });
        break;
      }
    }
  }

  _toHex(value) {
    if (!value) return null;
    const s = String(value)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (/^#[0-9a-f]{6}$/i.test(s)) return s;
    if (/^#[0-9a-f]{3}$/i.test(s)) {
      return "#" + s[1] + s[1] + s[2] + s[2] + s[3] + s[3];
    }
    return null;
  }

  async runScan() {
    this.isAuditing = true;
    this.render();
    try {
      this.auditData = await this.plugin.vaultAudit.performAudit();
    } catch (err) {
      console.error("[Garden] Audit failed:", err);
    } finally {
      this.isAuditing = false;
      this.render();
    }
  }

  _renderAuditTab(container) {
    const auditWrap = container.createEl("div", { cls: "stnd-audit-container" });

    // En-tête de l'audit (Statistiques et rafraîchissement)
    const headerRow = auditWrap.createEl("div", { cls: "stnd-audit-header-row" });
    headerRow.createEl("h3", { text: "Vault Audit", cls: "stnd-audit-title" });

    const refreshBtn = headerRow.createEl("button", {
      cls: "stnd-audit-refresh-btn" + (this.isAuditing ? " is-loading" : ""),
      title: "Refresh audit"
    });
    obsidian_1.setIcon(refreshBtn, "refresh-cw");
    refreshBtn.addEventListener("click", () => this.runScan());

    // Déclencher un scan automatique si pas de données et pas de chargement en cours
    if (!this.auditData && !this.isAuditing) {
      this.runScan();
      return;
    }

    if (this.isAuditing) {
      const loadingEl = auditWrap.createEl("div", { cls: "stnd-audit-loading" });
      const spin = loadingEl.createEl("div", { cls: "stnd-audit-spinner" });
      obsidian_1.setIcon(spin, "loader");
      loadingEl.createEl("p", { text: "Scanning vault...", cls: "stnd-audit-loading-text" });
      return;
    }

    const { brokenEmbeds, brokenLinks, orphanedMedia } = this.auditData;

    // ── Cartes statistiques d'en-tête ──
    const statsRow = auditWrap.createEl("div", { cls: "stnd-audit-stats-row" });
    
    const embedStat = statsRow.createEl("div", { cls: "stnd-audit-stat-card type-embed" });
    embedStat.createEl("div", { text: String(brokenEmbeds.length), cls: "stnd-audit-stat-number" });
    embedStat.createEl("div", { text: "Broken Media", cls: "stnd-audit-stat-label" });

    const linkStat = statsRow.createEl("div", { cls: "stnd-audit-stat-card type-link" });
    linkStat.createEl("div", { text: String(brokenLinks.length), cls: "stnd-audit-stat-number" });
    linkStat.createEl("div", { text: "Broken Links", cls: "stnd-audit-stat-label" });

    const orphanStat = statsRow.createEl("div", { cls: "stnd-audit-stat-card type-orphan" });
    orphanStat.createEl("div", { text: String(orphanedMedia.length), cls: "stnd-audit-stat-number" });
    orphanStat.createEl("div", { text: "Orphaned Media", cls: "stnd-audit-stat-label" });

    // Calculer le nombre de fichiers avec double horodatage réparables
    let fixableCount = 0;
    const brokenMap = new Set(brokenEmbeds.map(i => i.link.split("/").pop().toLowerCase()));
    for (const orphan of orphanedMedia) {
      const match = orphan.name.match(/^(\d{6}_\d{4}_)(.*)/);
      if (match && brokenMap.has(match[2].toLowerCase())) {
        fixableCount++;
      }
    }

    if (fixableCount > 0) {
      const banner = auditWrap.createEl("div", { cls: "stnd-audit-banner stnd-audit-banner-warning" });
      
      const bannerIcon = banner.createEl("span", { cls: "stnd-audit-banner-icon" });
      obsidian_1.setIcon(bannerIcon, "alert-triangle");
      
      const bannerText = banner.createEl("div", { cls: "stnd-audit-banner-text" });
      bannerText.createEl("strong", { text: "Double Timestamps Detected" });
      bannerText.createEl("span", { 
        text: `${fixableCount} orphaned images match broken links due to double timestamping.` 
      });
      
      const fixBtn = banner.createEl("button", { 
        cls: "stnd-panel-btn stnd-audit-banner-btn", 
        text: "Auto Repair" 
      });
      fixBtn.addEventListener("click", async () => {
        fixBtn.disabled = true;
        fixBtn.textContent = "Repairing...";
        const count = await this.plugin.vaultAudit.fixDoubleTimestamps();
        new obsidian_1.Notice(`${count} images successfully repaired!`);
        this.runScan();
      });
    }

    // Section 1 : Images et médias brisés
    this._renderAuditSection(
      auditWrap,
      "Broken Images & Media",
      brokenEmbeds,
      "image",
      (el) => this._renderBrokenEmbeds(el, brokenEmbeds),
      null,
      brokenEmbeds.length <= 50
    );

    // Section 2 : Liens internes brisés
    this._renderAuditSection(
      auditWrap,
      "Broken Internal Links",
      brokenLinks,
      "link",
      (el) => this._renderBrokenLinks(el, brokenLinks),
      null,
      brokenLinks.length <= 50
    );

    // Section 3 : Médias orphelins
    this._renderAuditSection(
      auditWrap,
      "Orphaned Media",
      orphanedMedia,
      "folder",
      (el) => this._renderOrphanedMedia(el, orphanedMedia),
      orphanedMedia.length > 0 ? () => {
        new StndConfirmModal(
          this.plugin.app,
          `Delete permanently the ${orphanedMedia.length} orphaned media files?\n\nThis action is irreversible.`,
          "Delete all",
          async () => {
            let successCount = 0;
            for (const file of orphanedMedia) {
              if (await this.plugin.vaultAudit.deleteOrphan(file)) {
                successCount++;
              }
            }
            new obsidian_1.Notice(`${successCount} files deleted.`);
            this.runScan();
          },
          () => {}
        ).open();
      } : null,
      orphanedMedia.length <= 50
    );
  }

  _getFileTags(file) {
    const cache = this.plugin.app.metadataCache.getFileCache(file);
    const tags = [];
    if (cache?.tags) {
      tags.push(...cache.tags.map((t) => t.tag.toLowerCase().replace(/^#/, "")));
    }
    if (cache?.frontmatter?.tags) {
      const ft = cache.frontmatter.tags;
      if (Array.isArray(ft)) {
        tags.push(...ft.map((t) => String(t).toLowerCase().replace(/^#/, "")));
      } else if (typeof ft === "string") {
        tags.push(
          ...ft
            .split(",")
            .map((t) => t.trim().toLowerCase().replace(/^#/, "")),
        );
      }
    }
    return tags;
  }

  async _addTagToFile(file, tag) {
    const clean = tag.replace(/^#/, "");
    await this.plugin.app.fileManager.processFrontMatter(file, (fm) => {
      let tags = fm.tags || [];
      if (typeof tags === "string") tags = tags.split(",").map((s) => s.trim());
      if (!tags.includes(clean)) {
        tags.push(clean);
        fm.tags = tags;
      }
    });
  }

  async _removeTagFromFile(file, tag) {
    const clean = tag.replace(/^#/, "");
    await this.plugin.app.fileManager.processFrontMatter(file, (fm) => {
      let tags = fm.tags || [];
      if (typeof tags === "string") tags = tags.split(",").map((s) => s.trim());
      fm.tags = tags.filter((t) => t !== clean);
    });
  }

  async refreshLinksData() {
    window.stndPanelRefreshLinks = () => this.refreshLinksData();
    const activeFile = this.plugin.app.workspace.getActiveFile();
    if (!activeFile) {
      this.linksData = null;
      return;
    }
    this.isLoadingLinks = true;
    this.render();
    try {
      // 1. Incoming linked mentions (Backlinks)
      const incoming = [];
      const resolvedLinks = this.plugin.app.metadataCache.resolvedLinks || {};
      for (const [sourcePath, targets] of Object.entries(resolvedLinks)) {
        if (sourcePath !== activeFile.path && targets.hasOwnProperty(activeFile.path)) {
          const file = this.plugin.app.vault.getAbstractFileByPath(sourcePath);
          if (file) incoming.push(file);
        }
      }

      // 2. Unlinked mentions via Mycelium (with excluded folders filtered)
      const unlinked = await findOutgoingUnlinkedMentions(
        this.plugin.app,
        activeFile,
        this.plugin,
      );

      // Keep the ghost-link editor cache in sync so decorations never lag
      // behind what this panel just found.
      if (typeof window.stndRefreshMycelium === "function") {
        window.stndRefreshMycelium();
      }

      this.linksData = {
        incoming,
        unlinked,
        file: activeFile,
      };
    } catch (e) {
      console.error("[Standard] Error loading links data", e);
    } finally {
      this.isLoadingLinks = false;
      this.render();
    }
  }

  _renderHypheInquiries(container, activeFile) {
    const card = container.createEl("div", { cls: "stnd-resonances-card stnd-inquiries-card" });

    const header = card.createEl("div", { cls: "stnd-inquiries-header" });
    const title = header.createEl("span", { cls: "stnd-inquiries-title" });
    title.setText("🦉 Hyphe's Inquiries");

    const cached = this.inquiryCache.get(activeFile.path);

    const askBtn = header.createEl("button", {
      cls: "stnd-inquiries-btn mod-cta",
      text: cached?.questions?.length ? "Re-inquire" : "Inquire",
    });
    if (cached?.isLoading) {
      askBtn.disabled = true;
      askBtn.setText("Reflecting...");
    }

    askBtn.addEventListener("click", async () => {
      await this.triggerHypheInquiry(activeFile);
    });

    if (cached?.isLoading) {
      const loading = card.createEl("div", { cls: "stnd-inquiry-loading" });
      loading.style.cssText =
        "font-size: var(--font-ui-smaller); color: var(--text-muted); font-style: italic; padding: 6px 0;";
      loading.setText("Hyphe is reading your note and framing questions...");
      return;
    }

    if (cached?.error) {
      const errEl = card.createEl("div", { cls: "stnd-inquiry-error" });
      errEl.style.cssText = "font-size: 11px; color: var(--color-red); margin-top: 4px;";
      errEl.setText(`Error: ${cached.error}`);
      return;
    }

    if (cached?.questions?.length > 0) {
      const list = card.createEl("div", { cls: "stnd-inquiries-list" });
      for (const q of cached.questions) {
        const box = list.createEl("div", { cls: "stnd-inquiry-box" });
        const qText = box.createEl("span", { cls: "stnd-inquiry-text" });
        qText.setText(q);

        const addBtn = box.createEl("button", {
          cls: "stnd-inquiry-action-btn",
          text: "+ Add to note",
        });
        addBtn.addEventListener("click", async () => {
          await this.appendInquiryToNote(activeFile, q);
        });
      }
    } else {
      const placeholder = card.createEl("p", {
        cls: "stnd-inquiry-placeholder",
        text: "Ask Hyphe for Socratic questions to challenge your assumptions and uncover unexamined angles.",
      });
      placeholder.style.cssText =
        "font-size: 11px; color: var(--text-faint); margin: 4px 0 0 0; line-height: 1.4;";
    }
  }

  _renderPublicResonances(container, activeFile) {
    const meta = this.plugin.app.metadataCache.getFileCache(activeFile);
    const fm = meta?.frontmatter || {};
    const isConfirmedOnline =
      !!fm["garden-url"] ||
      !!fm.url_public ||
      fm.published === true ||
      fm.published === "true";

    const card = container.createEl("div", { cls: "stnd-resonances-card stnd-network-card" });

    const header = card.createEl("div", { cls: "stnd-inquiries-header" });
    const title = header.createEl("span", { cls: "stnd-inquiries-title" });
    title.setText("🌐 Network Resonances");

    if (!isConfirmedOnline) {
      const draftNote = card.createEl("p");
      draftNote.style.cssText =
        "font-size: 11px; color: var(--text-faint); margin: 0; line-height: 1.4;";
      draftNote.setText(
        "Publish this note to reveal public citations, readership metrics, and semantic connections across standard.garden.",
      );
      return;
    }

    const cachedStats = this.noteStatsCache.get(activeFile.path);
    if (!cachedStats && !this.isLoadingStats) {
      this.loadNoteStats(activeFile);
    }

    // Stats row
    const statsRow = card.createEl("div", { cls: "stnd-network-stats" });
    const viewsCount = cachedStats ? cachedStats.views : (this.isLoadingStats ? "..." : 0);
    const citationsCount = cachedStats?.citations?.length || 0;

    statsRow.createEl("span", {
      text: `👁️ ${viewsCount} ${viewsCount === 1 ? "view" : "views"} · 🔗 ${citationsCount} ${citationsCount === 1 ? "citation" : "citations"}`,
    });

    if (cachedStats?.updated_at) {
      const date = new Date(cachedStats.updated_at);
      statsRow.createEl("span", {
        text: date.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
        cls: "stnd-panel-meta",
      });
    }

    // Citations list
    const citations = cachedStats?.citations || [];
    if (citations.length > 0) {
      card.createEl("div", {
        cls: "stnd-network-subheading",
        text: `Citations & Mentions (${citations.length})`,
      });

      const list = card.createEl("div");
      list.style.cssText = "display: flex; flex-direction: column; gap: 4px;";

      for (const cit of citations) {
        const item = list.createEl("div", { cls: "stnd-panel-citation-card" });
        item.style.cssText =
          "display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; border-radius: var(--radius-s); background: var(--background-primary); cursor: pointer; border: 1px solid var(--background-modifier-border);";

        const info = item.createEl("div");
        info.style.cssText = "display: flex; flex-direction: column; min-width: 0;";

        const citTitle = info.createEl("span", {
          text: cit.title || cit.slug,
          cls: "stnd-panel-citation-title",
        });
        citTitle.style.cssText =
          "font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;";

        const citAuthor = info.createEl("span", {
          text: `@${cit.username}`,
          cls: "stnd-panel-citation-author",
        });
        citAuthor.style.cssText = "font-size: 10px; color: var(--text-faint);";

        item.addEventListener("click", () => {
          const local =
            this.plugin.garden?.bySlug?.get(cit.slug) ||
            this.plugin.garden?.byTitleSlug?.get(cit.slug) ||
            this.plugin.garden?.byBasenameSlug?.get(cit.slug);
          if (local) {
            this.plugin.app.workspace.getLeaf(false).openFile(local);
          } else if (cit.url) {
            window.open(cit.url, "_blank");
          }
        });
      }
    }

    // Related notes list
    const related = cachedStats?.related || [];
    if (related.length > 0) {
      card.createEl("div", {
        cls: "stnd-network-subheading",
        text: `Related Notes (${related.length})`,
      });

      const list = card.createEl("div");
      list.style.cssText = "display: flex; flex-direction: column; gap: 4px;";

      for (const rel of related) {
        const item = list.createEl("div", { cls: "stnd-panel-citation-card" });
        item.style.cssText =
          "display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; border-radius: var(--radius-s); background: var(--background-primary); cursor: pointer; border: 1px solid var(--background-modifier-border);";

        const info = item.createEl("div");
        info.style.cssText = "display: flex; flex-direction: column; min-width: 0;";

        const relTitle = info.createEl("span", {
          text: rel.title || rel.slug,
          cls: "stnd-panel-citation-title",
        });
        relTitle.style.cssText =
          "font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;";

        if (rel.username) {
          const relAuthor = info.createEl("span", {
            text: `@${rel.username}`,
            cls: "stnd-panel-citation-author",
          });
          relAuthor.style.cssText = "font-size: 10px; color: var(--text-faint);";
        }

        item.addEventListener("click", () => {
          const local =
            this.plugin.garden?.bySlug?.get(rel.slug) ||
            this.plugin.garden?.byTitleSlug?.get(rel.slug) ||
            this.plugin.garden?.byBasenameSlug?.get(rel.slug);
          if (local) {
            this.plugin.app.workspace.getLeaf(false).openFile(local);
          } else if (rel.url) {
            window.open(rel.url, "_blank");
          }
        });
      }
    }
  }

  _renderLinksTab(container) {
    const activeFile = this.plugin.app.workspace.getActiveFile();
    if (!activeFile) {
      const empty = container.createEl("div", { cls: "stnd-panel-empty" });
      empty.createEl("p", { text: "No active note open.", cls: "stnd-panel-muted" });
      return;
    }

    const linksWrap = container.createEl("div", { cls: "stnd-audit-container" });

    const headerRow = linksWrap.createEl("div", { cls: "stnd-audit-header-row" });
    const titleCol = headerRow.createEl("div", { cls: "stnd-resonances-title-col" });
    titleCol.createEl("h3", { text: "Resonances", cls: "stnd-audit-title" });
    titleCol.createEl("span", {
      text: "Connections, inspiration & inquiries",
      cls: "stnd-resonances-subtitle",
    });

    const refreshBtn = headerRow.createEl("button", {
      cls: "stnd-audit-refresh-btn" + (this.isLoadingLinks ? " is-loading" : ""),
      title: "Refresh resonances",
    });
    obsidian_1.setIcon(refreshBtn, "refresh-cw");
    refreshBtn.addEventListener("click", () => {
      this.noteStatsCache.delete(activeFile.path);
      this.loadNoteStats(activeFile);
      this.refreshLinksData();
    });

    // 1. Hyphe's Inquiries Card
    this._renderHypheInquiries(linksWrap, activeFile);

    // 2. Network Resonances Card (Citations & Related)
    this._renderPublicResonances(linksWrap, activeFile);

    // 3. Vault Connections Section
    const vaultHeader = linksWrap.createEl("div", {
      cls: "stnd-network-subheading",
      text: "Vault Connections",
    });
    vaultHeader.style.cssText = "margin-top: 14px; margin-bottom: 8px;";

    // ── Quick Preferences (Ghost links & Compost footer toggles) ──
    const prefsCard = linksWrap.createEl("div", { cls: "stnd-panel-mycelium-prefs" });
    prefsCard.style.cssText =
      "display: flex; flex-direction: column; gap: 8px; margin: 0 0 var(--size-4-3) 0; padding: 10px 12px; background: var(--background-secondary); border-radius: var(--radius-m); border: 1px solid var(--background-modifier-border);";

    const makeToggleRow = (label, desc, isEnabled, onToggle) => {
      const row = prefsCard.createEl("div");
      row.style.cssText =
        "display: flex; align-items: center; justify-content: space-between; gap: 8px;";

      const textWrap = row.createEl("div");
      textWrap.style.cssText =
        "display: flex; flex-direction: column; min-width: 0;";
      const lbl = textWrap.createEl("span", { text: label });
      lbl.style.cssText =
        "font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal);";
      const sub = textWrap.createEl("span", { text: desc });
      sub.style.cssText = "font-size: 11px; color: var(--text-faint);";

      const toggleBtn = row.createEl("div", {
        cls: "checkbox-container" + (isEnabled ? " is-enabled" : ""),
      });
      toggleBtn.style.cssText = "cursor: pointer; flex-shrink: 0;";

      toggleBtn.addEventListener("click", async () => {
        const next = !toggleBtn.hasClass("is-enabled");
        toggleBtn.toggleClass("is-enabled", next);
        await onToggle(next);
      });
    };

    if (!this.plugin.settings.mycelium) {
      this.plugin.settings.mycelium = {
        enableGhostLinks: false,
        enableLinkingCommand: true,
        enableCompostFooter: true,
      };
    }
    const mySettings = this.plugin.settings.mycelium;

    makeToggleRow(
      "Ghost links",
      "Underline mentions in editor (Alt+click or tap to link)",
      !!mySettings.enableGhostLinks,
      async (enabled) => {
        mySettings.enableGhostLinks = enabled;
        window.stndMyceliumSettings = mySettings;
        await this.plugin.saveSettings();
        if (typeof window.stndRefreshMycelium === "function") {
          window.stndRefreshMycelium();
        }
        new obsidian_1.Notice(
          enabled ? "Ghost links enabled in editor." : "Ghost links disabled.",
        );
      },
    );

    makeToggleRow(
      "Compost footer",
      "Show suggested links at bottom of reading view",
      !!mySettings.enableCompostFooter,
      async (enabled) => {
        mySettings.enableCompostFooter = enabled;
        window.stndMyceliumSettings = mySettings;
        await this.plugin.saveSettings();
        // Not getActiveViewOfType(MarkdownView): the panel itself is the
        // active view while its own toggle is being clicked, so that lookup
        // returns null and the open note never re-renders. Refresh every
        // open leaf instead, same as the Ghost links toggle above.
        if (typeof window.stndRefreshMycelium === "function") {
          window.stndRefreshMycelium();
        }
        new obsidian_1.Notice(
          enabled ? "Compost footer enabled." : "Compost footer hidden.",
        );
      },
    );

    if (this.isLoadingLinks) {
      const loadingEl = linksWrap.createEl("div", { cls: "stnd-audit-loading" });
      const spin = loadingEl.createEl("div", { cls: "stnd-audit-spinner" });
      obsidian_1.setIcon(spin, "loader");
      loadingEl.createEl("p", { text: "Scanning mycelium & links...", cls: "stnd-audit-loading-text" });
      return;
    }

    if (!this.linksData) return;

    const { incoming, unlinked } = this.linksData;
    const blockedTag = "backlink-exclude";

    const linkedMentions = [];
    const excludedMentions = [];
    const processedPaths = new Set();

    for (const file of incoming) {
      if (processedPaths.has(file.path)) continue;
      processedPaths.add(file.path);

      const tags = this._getFileTags(file);
      if (tags.includes(blockedTag)) {
        excludedMentions.push(file);
      } else {
        linkedMentions.push(file);
      }
    }

    const unlinkedMentions = [];
    for (const item of unlinked) {
      // Never show a note in unlinked mentions if it is already in incoming backlinks or processed!
      if (processedPaths.has(item.file.path)) continue;
      processedPaths.add(item.file.path);

      const tags = this._getFileTags(item.file);
      if (tags.includes(blockedTag)) {
        excludedMentions.push(item.file);
      } else {
        unlinkedMentions.push(item);
      }
    }

    // Section 1 : Mentions non liées (Mycélium)
    this._renderAuditSection(
      linksWrap,
      "Unlinked mentions (Mycelium)",
      unlinkedMentions,
      "link-2",
      (el) => this._renderUnlinkedMentionsList(el, unlinkedMentions, activeFile, blockedTag),
      null,
      unlinkedMentions.length > 0,
    );

    // Section 2 : Mentions liées (Backlinks)
    this._renderAuditSection(
      linksWrap,
      "Linked mentions (Backlinks)",
      linkedMentions,
      "link",
      (el) => this._renderLinkedMentionsList(el, linkedMentions, blockedTag),
      null,
      linkedMentions.length > 0,
    );

    // Section 3 : Exclusions actives
    this._renderAuditSection(
      linksWrap,
      "Active exclusions",
      excludedMentions,
      "eye-off",
      (el) => this._renderExcludedMentionsList(el, excludedMentions, blockedTag),
      null,
      excludedMentions.length > 0,
    );
  }

  _renderLinkedMentionsList(parent, items, blockedTag) {
    items.forEach((item) => {
      const card = parent.createEl("div", { cls: "stnd-audit-card stnd-audit-card-row" });

      const titleWrap = card.createEl("div", { cls: "stnd-audit-card-title-wrap" });
      const noteLink = titleWrap.createEl("a", {
        cls: "stnd-audit-note-link",
        text: item.basename,
      });
      noteLink.addEventListener("click", () => {
        this.app.workspace.getLeaf().openFile(item);
      });

      const actionsRow = card.createEl("div", { cls: "stnd-audit-card-actions" });

      const hideBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",
        attr: { title: "Hide" },
      });
      obsidian_1.setIcon(hideBtn.createEl("span", { cls: "btn-icon" }), "eye-off");

      hideBtn.addEventListener("click", async () => {
        await this._addTagToFile(item, blockedTag);
        new obsidian_1.Notice(`Hidden: ${item.basename}`);
        this.refreshLinksData();
      });
    });
  }

  _renderUnlinkedMentionsList(parent, items, activeFile, blockedTag) {
    items.forEach((item) => {
      const card = parent.createEl("div", { cls: "stnd-audit-card stnd-audit-card-row" });

      const titleWrap = card.createEl("div", { cls: "stnd-audit-card-title-wrap" });
      const noteLink = titleWrap.createEl("a", {
        cls: "stnd-audit-note-link",
        text: item.file.basename,
      });
      noteLink.addEventListener("click", () => {
        this.app.workspace.getLeaf().openFile(item.file);
      });

      if (item.term) {
        titleWrap.createEl("span", {
          cls: "stnd-panel-meta stnd-audit-card-term",
          text: `"${item.term}"`,
        });
      }

      const actionsRow = card.createEl("div", { cls: "stnd-audit-card-actions" });

      const linkBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-audit-btn-compact",
        attr: { title: "Link" },
      });
      obsidian_1.setIcon(linkBtn.createEl("span", { cls: "btn-icon" }), "link");

      linkBtn.addEventListener("click", async () => {
        await createMentionLink(this.plugin.app, activeFile, item);
        this.refreshLinksData();
      });

      const hideBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",
        attr: { title: "Hide" },
      });
      obsidian_1.setIcon(hideBtn.createEl("span", { cls: "btn-icon" }), "eye-off");

      hideBtn.addEventListener("click", async () => {
        await this._addTagToFile(item.file, blockedTag);
        new obsidian_1.Notice(`Hidden: ${item.file.basename}`);
        this.refreshLinksData();
      });
    });
  }

  _renderExcludedMentionsList(parent, items, blockedTag) {
    items.forEach((item) => {
      const card = parent.createEl("div", { cls: "stnd-audit-card stnd-audit-card-row" });

      const titleWrap = card.createEl("div", { cls: "stnd-audit-card-title-wrap" });
      const noteLink = titleWrap.createEl("a", {
        cls: "stnd-audit-note-link",
        text: item.basename,
      });
      noteLink.addEventListener("click", () => {
        this.app.workspace.getLeaf().openFile(item);
      });

      const actionsRow = card.createEl("div", { cls: "stnd-audit-card-actions" });

      const restoreBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-audit-btn-compact",
        attr: { title: "Restore" },
      });
      obsidian_1.setIcon(restoreBtn.createEl("span", { cls: "btn-icon" }), "undo");

      restoreBtn.addEventListener("click", async () => {
        await this._removeTagFromFile(item, blockedTag);
        new obsidian_1.Notice(`Restored: ${item.basename}`);
        this.refreshLinksData();
      });
    });
  }

  _renderAuditSection(parent, title, items, iconName, renderContentFn, bulkActionFn = null, autoOpen = true) {
    const details = parent.createEl("details", {
      cls: "stnd-panel-group stnd-audit-section",
    });
    if (items.length > 0 && autoOpen) details.setAttribute("open", "");

    const summary = details.createEl("summary");
    const titleContainer = summary.createEl("div", { cls: "stnd-audit-section-title-wrap" });
    
    const iconSpan = titleContainer.createEl("span", { cls: "stnd-audit-section-icon" });
    obsidian_1.setIcon(iconSpan, iconName);

    titleContainer.createEl("span", { text: `${title} (${items.length})` });

    if (bulkActionFn) {
      const bulkBtn = summary.createEl("button", {
        cls: "stnd-audit-bulk-btn",
        text: "Clean"
      });
      bulkBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        bulkActionFn();
      });
    }

    const contentDiv = details.createEl("div", { cls: "stnd-audit-section-content" });

    if (items.length === 0) {
      const okDiv = contentDiv.createEl("div", { cls: "stnd-audit-empty-success" });
      const checkIcon = okDiv.createEl("span", { cls: "stnd-audit-check-icon" });
      obsidian_1.setIcon(checkIcon, "check");
      okDiv.createEl("span", { text: "Everything is in order" });
    } else {
      renderContentFn(contentDiv);
    }
  }

  _renderBrokenEmbeds(parent, items) {
    if (items.length > 50) {
      const banner = parent.createEl("div", { cls: "stnd-audit-banner stnd-audit-banner-warning" });
      banner.style.margin = "0 0 var(--size-4-3) 0";

      const bannerText = banner.createEl("div", { cls: "stnd-audit-banner-text" });
      bannerText.createEl("strong", { text: "Render Hidden for Safety" });
      bannerText.createEl("span", {
        text: `Displaying the ${items.length} broken media cards is disabled to prevent slowing down Obsidian.`
      });

      const showBtn = banner.createEl("button", {
        cls: "stnd-panel-btn stnd-audit-banner-btn",
        text: "Show anyway"
      });
      showBtn.style.background = "var(--interactive-accent)";
      showBtn.style.color = "var(--text-on-accent)";

      showBtn.addEventListener("click", () => {
        banner.remove();
        this._renderBrokenEmbedsList(parent, items);
      });
    } else {
      this._renderBrokenEmbedsList(parent, items);
    }
  }

  _renderBrokenEmbedsList(parent, items) {
    items.forEach((item) => {
      const card = parent.createEl("div", { cls: "stnd-audit-card" });

      const sourceRow = card.createEl("div", { cls: "stnd-audit-card-source-row" });
      const noteLink = sourceRow.createEl("a", {
        cls: "stnd-audit-note-link",
        text: item.file.basename
      });
      noteLink.addEventListener("click", () => {
        this.app.workspace.getLeaf().openFile(item.file, {
          eState: { line: item.line ?? 0 }
        });
      });
      
      sourceRow.createEl("span", {
        cls: "stnd-audit-badge-type",
        text: item.isMedia ? "media" : "note"
      });

      card.createEl("div", {
        cls: "stnd-audit-card-broken-target",
        text: `↳ Missing target: ${item.link}`
      });

      const actionsRow = card.createEl("div", { cls: "stnd-audit-card-actions" });

      const searchBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",
        text: "Search"
      });
      obsidian_1.setIcon(searchBtn.createEl("span", { cls: "btn-icon" }), "search");

      const itemKey = `${item.file.path}::${item.link}`;

      searchBtn.addEventListener("click", async () => {
        if (this.searchingCandidates[itemKey]) {
          delete this.searchingCandidates[itemKey];
          this.render();
          return;
        }
        const candidates = await this.plugin.vaultAudit.findCandidates(item.link);
        this.searchingCandidates[itemKey] = candidates;
        this.render();
      });

      const removeBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-panel-btn-danger stnd-audit-btn-compact",
        text: "Delete"
      });
      obsidian_1.setIcon(removeBtn.createEl("span", { cls: "btn-icon" }), "trash");

      removeBtn.addEventListener("click", async () => {
        const ok = await this.plugin.vaultAudit.removeBrokenReference(item);
        if (ok) {
          new obsidian_1.Notice("Broken reference deleted.");
          this.runScan();
        }
      });

      if (this.searchingCandidates[itemKey]) {
        const candidates = this.searchingCandidates[itemKey];
        const candidatesWrap = card.createEl("div", { cls: "stnd-audit-candidates-wrap" });

        if (candidates.length === 0) {
          candidatesWrap.createEl("div", {
            text: "No file with this name was found.",
            cls: "stnd-audit-candidates-empty"
          });
        } else {
          candidatesWrap.createEl("div", {
            text: "Files found (click to link):",
            cls: "stnd-audit-candidates-title"
          });
          candidates.forEach(cand => {
            const candBtn = candidatesWrap.createEl("button", {
              cls: "stnd-audit-candidate-btn",
              text: cand.path
            });
            candBtn.addEventListener("click", async () => {
              const success = await this.plugin.vaultAudit.resolveBrokenEmbed(item, cand.path);
              if (success) {
                new obsidian_1.Notice("Link successfully repaired!");
                delete this.searchingCandidates[itemKey];
                this.runScan();
              }
            });
          });
        }
      }
    });
  }

  _renderBrokenLinks(parent, items) {
    if (items.length > 50) {
      const banner = parent.createEl("div", { cls: "stnd-audit-banner stnd-audit-banner-warning" });
      banner.style.margin = "0 0 var(--size-4-3) 0";

      const bannerText = banner.createEl("div", { cls: "stnd-audit-banner-text" });
      bannerText.createEl("strong", { text: "Rendu masqué par sécurité" });
      bannerText.createEl("span", {
        text: `L'affichage des ${items.length} cartes de liens brisés est désactivé pour éviter de ralentir Obsidian. Ces liens pointent généralement vers des notes futures prévues.`
      });

      const showBtn = banner.createEl("button", {
        cls: "stnd-panel-btn stnd-audit-banner-btn",
        text: "Afficher quand même"
      });
      showBtn.style.background = "var(--interactive-accent)";
      showBtn.style.color = "var(--text-on-accent)";

      showBtn.addEventListener("click", () => {
        banner.remove();
        this._renderBrokenLinksList(parent, items);
      });
    } else {
      this._renderBrokenLinksList(parent, items);
    }
  }

  _renderBrokenLinksList(parent, items) {
    items.forEach((item) => {
      const card = parent.createEl("div", { cls: "stnd-audit-card" });

      const sourceRow = card.createEl("div", { cls: "stnd-audit-card-source-row" });
      const noteLink = sourceRow.createEl("a", {
        cls: "stnd-audit-note-link",
        text: item.file.basename
      });
      noteLink.addEventListener("click", () => {
        this.app.workspace.getLeaf().openFile(item.file, {
          eState: { line: item.line ?? 0 }
        });
      });

      card.createEl("div", {
        cls: "stnd-audit-card-broken-target",
        text: `↳ Broken link: [[${item.link}]]`
      });

      const actionsRow = card.createEl("div", { cls: "stnd-audit-card-actions" });

      const createBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-audit-btn-compact",
        text: "Create Note"
      });
      obsidian_1.setIcon(createBtn.createEl("span", { cls: "btn-icon" }), "plus");

      createBtn.addEventListener("click", async () => {
        const success = await this.plugin.vaultAudit.createMissingNote(item);
        if (success) {
          new obsidian_1.Notice(`Note "${item.link}" created.`);
          this.runScan();
        }
      });

      const unlinkBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",
        text: "Remove Link"
      });
      obsidian_1.setIcon(unlinkBtn.createEl("span", { cls: "btn-icon" }), "link-2");

      unlinkBtn.addEventListener("click", async () => {
        const success = await this.plugin.vaultAudit.removeBrokenLink(item);
        if (success) {
          new obsidian_1.Notice("Link converted to plain text.");
          this.runScan();
        }
      });
    });
  }

  _renderOrphanedMedia(parent, items) {
    if (items.length > 50) {
      const banner = parent.createEl("div", { cls: "stnd-audit-banner stnd-audit-banner-warning" });
      banner.style.margin = "0 0 var(--size-4-3) 0";

      const bannerText = banner.createEl("div", { cls: "stnd-audit-banner-text" });
      bannerText.createEl("strong", { text: "Render Hidden for Safety" });
      bannerText.createEl("span", {
        text: `Displaying the ${items.length} orphaned media cards is disabled to prevent slowing down Obsidian.`
      });

      const showBtn = banner.createEl("button", {
        cls: "stnd-panel-btn stnd-audit-banner-btn",
        text: "Show anyway"
      });
      showBtn.style.background = "var(--interactive-accent)";
      showBtn.style.color = "var(--text-on-accent)";

      showBtn.addEventListener("click", () => {
        banner.remove();
        this._renderOrphanedMediaList(parent, items);
      });
    } else {
      this._renderOrphanedMediaList(parent, items);
    }
  }

  _renderOrphanedMediaList(parent, items) {
    items.forEach((file) => {
      const card = parent.createEl("div", { cls: "stnd-audit-card stnd-audit-card-orphan" });

      const isImg = /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(file.name);
      if (isImg) {
        const thumbWrap = card.createEl("div", { cls: "stnd-audit-orphan-thumb-wrap" });
        const resourcePath = this.app.vault.getResourcePath(file);
        const img = thumbWrap.createEl("img", { cls: "stnd-audit-orphan-thumb" });
        img.src = resourcePath;
      }

      const infoCol = card.createEl("div", { cls: "stnd-audit-orphan-info" });
      infoCol.createEl("div", { text: file.name, cls: "stnd-audit-orphan-name" });
      
      const sizeKB = Math.round(file.stat.size / 102.4) / 10;
      const sizeStr = sizeKB > 1000 
        ? `${Math.round(sizeKB / 102.4) / 10} MB` 
        : `${sizeKB} KB`;
      
      infoCol.createEl("div", {
        text: `${file.path} (${sizeStr})`,
        cls: "stnd-audit-orphan-path"
      });

      const actionsRow = card.createEl("div", { cls: "stnd-audit-card-actions" });
      actionsRow.style.marginTop = "var(--size-4-2)";

      const openBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",
        text: "Open"
      });
      obsidian_1.setIcon(openBtn.createEl("span", { cls: "btn-icon" }), "file-text");

      openBtn.addEventListener("click", () => {
        this.app.workspace.getLeaf().openFile(file);
      });

      const deleteBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-panel-btn-danger stnd-audit-btn-compact",
        text: "Delete"
      });
      obsidian_1.setIcon(deleteBtn.createEl("span", { cls: "btn-icon" }), "trash");

      deleteBtn.addEventListener("click", () => {
        new StndConfirmModal(
          this.plugin.app,
          `Delete permanently the media file "${file.name}"?`,
          "Delete",
          async () => {
            const success = await this.plugin.vaultAudit.deleteOrphan(file);
            if (success) {
              new obsidian_1.Notice("Media deleted.");
              this.runScan();
            }
          },
          () => {}
        ).open();
      });
    });
  }
}

module.exports = { StandardGardenView, STND_PANEL_VIEW };
