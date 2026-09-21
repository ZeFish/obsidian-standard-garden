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
      if (active && file === active) {
        if (this.activeTab === "mycelium" || this.activeTab === "links") {
          this.linksData = null;
        }
        this.render();
      }
    };
    this.plugin.app.workspace.on("active-leaf-change", this._onFileChange);
    this.plugin.app.metadataCache.on("changed", this._onMetaChange);
    this.render();
  }

  async onClose() {
    if (this._onFileChange) {
      this.plugin.app.workspace.off("active-leaf-change", this._onFileChange);
    }
    if (this._onMetaChange) {
      this.plugin.app.metadataCache.off("changed", this._onMetaChange);
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

    // ── Barre d'onglets (Tabs) ──
    const tabsEl = container.createEl("div", { cls: "stnd-panel-tabs" });
    
    const noteTabBtn = tabsEl.createEl("button", {
      cls: "stnd-panel-tab" + (this.activeTab === "note" ? " is-active" : ""),
      text: "Note",
    });
    noteTabBtn.addEventListener("click", () => {
      this.activeTab = "note";
      this.render();
    });

    const myceliumTabBtn = tabsEl.createEl("button", {
      cls:
        "stnd-panel-tab" +
        (this.activeTab === "mycelium" || this.activeTab === "links"
          ? " is-active"
          : ""),
      text: "Mycelium",
    });
    myceliumTabBtn.addEventListener("click", () => {
      this.activeTab = "mycelium";
      this.linksData = null;
      this.render();
      this.refreshLinksData();
    });

    const auditTabBtn = tabsEl.createEl("button", {
      cls: "stnd-panel-tab" + (this.activeTab === "audit" ? " is-active" : ""),
      text: "Audit",
    });
    auditTabBtn.addEventListener("click", () => {
      this.activeTab = "audit";
      this.render();
    });

    // Rendu en fonction de l'onglet actif
    if (this.activeTab === "note") {
      const file = this.plugin.app.workspace.getActiveFile();

      if (!file) {
        const empty = container.createEl("div", { cls: "stnd-panel-empty" });
        empty.createEl("p", { text: "Aucune note ouverte.", cls: "stnd-panel-muted" });
        return;
      }

      this._lastRenderedFile = file;
      const meta = this.plugin.app.metadataCache.getFileCache(file);
      const fm = meta?.frontmatter || {};

      // ── File Info ────────────────────────────────────────────────────────
      this._renderFileInfo(container, file, fm);

      // ── AI Generate ──────────────────────────────────────────────────────
      this._renderAIGenerate(container, file, fm);

      // ── Token Groups ────────────────────────────────────────────────────
      this._renderTokenGroups(container, file, fm);
    } else if (this.activeTab === "mycelium" || this.activeTab === "links") {
      const activeFile = this.plugin.app.workspace.getActiveFile();
      if (activeFile && (!this.linksData || this.linksData.file !== activeFile) && !this.isLoadingLinks) {
        this.refreshLinksData();
      }
      this._renderLinksTab(container);
    } else if (this.activeTab === "audit") {
      this._renderAuditTab(container);
    }
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

        // Citations List
        const citations = cachedStats?.citations || [];
        const citationsSection = statsBox.createEl("div", { cls: "stnd-panel-citations" });
        citationsSection.style.cssText = "margin-top: var(--size-4-2);";

        const citationsHeader = citationsSection.createEl("div", {
          cls: "stnd-panel-citations-header",
        });
        citationsHeader.style.cssText =
          "display: flex; align-items: center; justify-content: space-between; font-size: var(--font-ui-smaller); font-weight: var(--font-semibold); color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--size-4-1);";
        citationsHeader.createEl("span", {
          text: `Citations (${citations.length})`,
        });

        if (citations.length > 0) {
          const citationsList = citationsSection.createEl("div", {
            cls: "stnd-panel-citations-list",
          });
          citationsList.style.cssText = "display: flex; flex-direction: column; gap: 4px;";

          for (const cit of citations) {
            const citCard = citationsList.createEl("div", {
              cls: "stnd-panel-citation-card",
            });
            citCard.style.cssText =
              "display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; border-radius: var(--radius-s); background: var(--background-modifier-hover); cursor: pointer; transition: background 0.15s ease;";

            citCard.addEventListener("mouseenter", () => {
              citCard.style.background = "var(--background-modifier-active-hover)";
            });
            citCard.addEventListener("mouseleave", () => {
              citCard.style.background = "var(--background-modifier-hover)";
            });

            const citInfo = citCard.createEl("div", { cls: "stnd-panel-citation-info" });
            citInfo.style.cssText =
              "display: flex; flex-direction: column; min-width: 0; overflow: hidden;";
            const citTitle = citInfo.createEl("span", {
              text: cit.title || cit.slug,
              cls: "stnd-panel-citation-title",
            });
            citTitle.style.cssText =
              "font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;";

            const citAuthor = citInfo.createEl("span", {
              text: `@${cit.username}`,
              cls: "stnd-panel-citation-author",
            });
            citAuthor.style.cssText = "font-size: 11px; color: var(--text-faint);";

            const extIcon = citCard.createEl("span", {
              cls: "stnd-panel-citation-icon",
            });
            extIcon.style.cssText =
              "color: var(--text-faint); display: flex; align-items: center; flex-shrink: 0; margin-left: 6px;";
            obsidian_1.setIcon(extIcon, "external-link");

            citCard.addEventListener("click", () => {
              if (cit.url) {
                window.open(cit.url, "_blank");
              }
            });
          }
        } else if (!this.isLoadingStats) {
          const emptyCit = citationsSection.createEl("div", {
            cls: "stnd-panel-citations-empty",
          });
          emptyCit.style.cssText =
            "font-size: var(--font-ui-smaller); color: var(--text-faint); font-style: italic;";
          emptyCit.createEl("span", { text: "No citations yet" });
        }
      }
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
                  KNOWN_TOKENS.has(key) ||
                  key.startsWith("stnd-") ||
                  key.startsWith("stnd_")
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
      text: "Generate theme with AI",
      cls: "stnd-panel-btn",
    });
    genBtn.style.flex = "2";

    const view = this;
    genBtn.addEventListener("click", async () => {
      genBtn.disabled = true;
      genBtn.textContent = "Generating…";

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
            `Applied ${Object.keys(tokens).length} tokens.`,
          );
        } else {
          new obsidian_1.Notice("No tokens returned.");
        }
      } catch (e) {
        new obsidian_1.Notice(`Generation failed: ${e.message}`);
      } finally {
        genBtn.disabled = false;
        genBtn.textContent = "Generate theme with AI";
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
        const toggle = row.createEl("div", {
          cls: "checkbox-container" + (current ? " is-enabled" : ""),
        });
        toggle.addEventListener("click", () => {
          const next = !toggle.hasClass("is-enabled");
          toggle.toggleClass("is-enabled", next);
          this._setFrontmatter(file, field.key, next || null);
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

  _renderLinksTab(container) {
    const activeFile = this.plugin.app.workspace.getActiveFile();
    if (!activeFile) {
      const empty = container.createEl("div", { cls: "stnd-panel-empty" });
      empty.createEl("p", { text: "No active note open.", cls: "stnd-panel-muted" });
      return;
    }

    const linksWrap = container.createEl("div", { cls: "stnd-audit-container" });

    const headerRow = linksWrap.createEl("div", { cls: "stnd-audit-header-row" });
    headerRow.createEl("h3", { text: "Mycelium & Links", cls: "stnd-audit-title" });

    const refreshBtn = headerRow.createEl("button", {
      cls: "stnd-audit-refresh-btn" + (this.isLoadingLinks ? " is-loading" : ""),
      title: "Refresh mentions",
    });
    obsidian_1.setIcon(refreshBtn, "refresh-cw");
    refreshBtn.addEventListener("click", () => this.refreshLinksData());

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
        const view = this.plugin.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
        if (view?.previewMode) {
          view.previewMode.rerender(true);
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

    // Section 1 : Mentions liées (Backlinks)
    this._renderAuditSection(
      linksWrap,
      "Linked mentions (Backlinks)",
      linkedMentions,
      "link",
      (el) => this._renderLinkedMentionsList(el, linkedMentions, blockedTag),
      null,
      linkedMentions.length > 0,
    );

    // Section 2 : Mentions non liées (Mycélium)
    this._renderAuditSection(
      linksWrap,
      "Unlinked mentions (Mycelium)",
      unlinkedMentions,
      "link-2",
      (el) => this._renderUnlinkedMentionsList(el, unlinkedMentions, activeFile, blockedTag),
      null,
      unlinkedMentions.length > 0,
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
      const card = parent.createEl("div", { cls: "stnd-audit-card" });

      const sourceRow = card.createEl("div", { cls: "stnd-audit-card-source-row" });
      const noteLink = sourceRow.createEl("a", {
        cls: "stnd-audit-note-link",
        text: item.basename,
      });
      noteLink.addEventListener("click", () => {
        this.app.workspace.getLeaf().openFile(item);
      });

      const actionsRow = card.createEl("div", { cls: "stnd-audit-card-actions" });

      const hideBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",
        text: "Hide",
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
      const card = parent.createEl("div", { cls: "stnd-audit-card" });

      const sourceRow = card.createEl("div", { cls: "stnd-audit-card-source-row" });
      const noteLink = sourceRow.createEl("a", {
        cls: "stnd-audit-note-link",
        text: item.file.basename,
      });
      noteLink.addEventListener("click", () => {
        this.app.workspace.getLeaf().openFile(item.file);
      });

      if (item.term) {
        const termBadge = sourceRow.createEl("span", {
          cls: "stnd-panel-meta",
          text: `mention: "${item.term}"`,
        });
        termBadge.style.marginLeft = "6px";
        termBadge.style.fontSize = "11px";
      }

      const actionsRow = card.createEl("div", { cls: "stnd-audit-card-actions" });

      const linkBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-audit-btn-compact",
        text: "Link",
      });
      obsidian_1.setIcon(linkBtn.createEl("span", { cls: "btn-icon" }), "link");

      linkBtn.addEventListener("click", async () => {
        await createMentionLink(this.plugin.app, activeFile, item);
        this.refreshLinksData();
      });

      const hideBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",
        text: "Hide",
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
      const card = parent.createEl("div", { cls: "stnd-audit-card" });

      const sourceRow = card.createEl("div", { cls: "stnd-audit-card-source-row" });
      const noteLink = sourceRow.createEl("a", {
        cls: "stnd-audit-note-link",
        text: item.basename,
      });
      noteLink.addEventListener("click", () => {
        this.app.workspace.getLeaf().openFile(item);
      });

      const actionsRow = card.createEl("div", { cls: "stnd-audit-card-actions" });

      const restoreBtn = actionsRow.createEl("button", {
        cls: "stnd-panel-btn stnd-audit-btn-compact",
        text: "Restore",
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
