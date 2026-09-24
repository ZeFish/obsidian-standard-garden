"use strict";

const obsidian_1 = require("obsidian");
const { isPublishIntent } = require("../../constants.js");
const {
  getNoteFrontmatter,
  getNoteFrontmatterAsync,
  invalidateFrontmatterCache,
} = require("../../utils/frontmatter.js");

// ─── Publish Status ───────────────────────────────────────────────────────────
// A live "magic" status icon/button in Obsidian.
// The icon + colour reflect the note's garden state — not-published / public /
// unlisted / private — and update on the fly as the frontmatter changes.
// Location is configurable: titlebar (default), statusbar, ribbon, or hidden.

const STATES = {
  unpublished: { icon: "cloud-off",          color: "var(--stnd-status-local)",    label: "Local" },
  local:       { icon: "cloud-off",          color: "var(--stnd-status-local)",    label: "Local" },
  pending:     { icon: "upload-cloud",       color: "var(--stnd-status-pending)",  label: "Queued" },
  synced:      { icon: "check-circle",       color: "var(--stnd-status-synced)",   label: "Synced" },
  changed:     { icon: "upload-cloud",       color: "var(--stnd-status-modified)", label: "Modified" },
  outdated:    { icon: "arrow-down-circle",  color: "var(--stnd-status-outdated)", label: "Outdated" },
  desynced:    { icon: "alert-circle",       color: "var(--stnd-status-desynced)", label: "Unpublished (online)" },
  // Backward compatibility aliases
  public:      { icon: "globe",              color: "var(--stnd-status-synced)",   label: "Synced" },
  unlisted:    { icon: "eye-off",            color: "var(--stnd-status-synced)",   label: "Synced (unlisted)" },
  private:     { icon: "lock",               color: "var(--stnd-status-synced)",   label: "Synced (private)" },
};

class PublishStatusFeature {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
    this.statusBarEl = null;
    this.ribbonEl = null;
    this.noteStatuses = new Map(); // path -> { status, remoteContent, timestamp }
    this.checkingFiles = new Set();
  }

  async load() {
    const refresh = () => this.refreshAll();
    this.plugin.registerEvent(this.app.workspace.on("file-open", refresh));
    this.plugin.registerEvent(this.app.workspace.on("active-leaf-change", refresh));
    this.plugin.registerEvent(this.app.workspace.on("layout-change", refresh));
    this.plugin.registerEvent(
      this.app.metadataCache.on("changed", (file) => {
        invalidateFrontmatterCache(file.path);
        this.refreshForFile(file);
      }),
    );
    this.plugin.registerEvent(
      this.app.metadataCache.on("resolve", (file) => {
        invalidateFrontmatterCache(file.path);
        this.refreshForFile(file);
      }),
    );
    this.plugin.registerEvent(
      this.app.vault.on("modify", (file) => {
        invalidateFrontmatterCache(file.path);
        this.refreshForFile(file);
      }),
    );
    this.plugin.registerEvent(
      this.app.vault.on("delete", (file) => {
        invalidateFrontmatterCache(file.path);
        this.noteStatuses.delete(file.path);
      }),
    );
    this.app.workspace.onLayoutReady(refresh);
  }

  async unload() {
    this.cleanupAll();
  }

  cleanupAll() {
    // 1. Nettoyer les boutons de titre et les indicateurs en bas de note
    this.app.workspace.getLeavesOfType("markdown").forEach((leaf) => {
      const el = leaf.view && leaf.view._stndPublishAction;
      if (el) {
        el.remove();
        delete leaf.view._stndPublishAction;
      }
      const indicator = leaf.view && leaf.view._stndBottomIndicator;
      if (indicator) {
        indicator.remove();
        delete leaf.view._stndBottomIndicator;
      }
    });

    // 2. Nettoyer la barre d'état
    if (this.statusBarEl) {
      this.statusBarEl.remove();
      this.statusBarEl = null;
    }

    // 3. Nettoyer l'icône de ruban
    if (this.ribbonEl) {
      this.ribbonEl.remove();
      this.ribbonEl = null;
    }
  }

  // ── State ────────────────────────────────────────────────────────────────────
  // Sync state evaluates the synchronization between the local vault and the remote Garden.
  // Visibility (public/unlisted/private) is an orthogonal attribute.
  stateKey(frontmatter, path, file) {
    const fm = frontmatter || {};
    const wantsPublish = isPublishIntent(fm);
    const isConfirmedOnline =
      !!fm["garden-url"] ||
      !!fm.url_public ||
      fm.published === true ||
      fm.published === "true";

    // Critical safety alert: Note is unpublished locally (publish: false or omitted),
    // but was previously published and remains live online!
    if (!wantsPublish) {
      if (isConfirmedOnline) {
        return "desynced";
      }
      return "unpublished";
    }

    if (!isConfirmedOnline) return "pending";

    // 1. Cached status check (remote out of sync)
    if (path && this.noteStatuses) {
      const cached = this.noteStatuses.get(path);
      if (cached && (cached.status === "outdated" || cached.status === "changed")) {
        return cached.status;
      }
    }

    // 2. Synchronisation immédiate avec noteStatsCache (partagé avec le side panel)
    const statsCache = this.plugin?.garden?.noteStatsCache || this.plugin?.panel?.noteStatsCache;
    if (statsCache && path) {
      const stats = statsCache.get(path);
      const remoteTime = stats?.updated_at
        ? new Date(stats.updated_at).getTime()
        : 0;
      const localTime = file?.stat?.mtime || 0;
      if (remoteTime > 0 && localTime > remoteTime + 3000) {
        return "changed";
      }
    }

    return "synced";
  }

  getStateInfo(frontmatter, path, file) {
    const fm = frontmatter || {};
    const key = this.stateKey(fm, path, file);
    const base = STATES[key] || STATES.unpublished;
    const state = Object.assign({}, base);
    const vis = String(fm.visibility || "public").toLowerCase().trim();

    if (key === "synced") {
      if (vis === "private") {
        state.icon = "lock";
        state.label = "Synced (private)";
      } else if (vis === "unlisted") {
        state.icon = "eye-off";
        state.label = "Synced (unlisted)";
      } else {
        state.icon = "globe";
        state.label = "Synced (public)";
      }
    } else if (key === "changed") {
      state.label = vis === "private" ? "Modified (private)" : (vis === "unlisted" ? "Modified (unlisted)" : "Modified");
    } else if (key === "outdated") {
      state.label = "Outdated";
    } else if (key === "desynced") {
      state.icon = "alert-circle";
      state.color = "var(--stnd-status-desynced)";
      state.label = "Unpublished locally (still online)";
    }
    return { key, state, visibility: vis };
  }

  // ── Async Status Check ───────────────────────────────────────────────────────
  async triggerStatusCheck(file) {
    if (!file) return;
    if (this.checkingFiles.has(file.path)) return;
    const hasKey = !!this.plugin.settings.apiKey;
    if (!hasKey) return;

    this.checkingFiles.add(file.path);
    try {
      const fm = await getNoteFrontmatterAsync(this.app, file);
      const wantsPublish = isPublishIntent(fm);
      const hasGardenUrl =
        fm["garden-url"] != null ||
        fm.url_public != null ||
        fm.published === true ||
        fm.published === "true";

      if (!hasGardenUrl && !wantsPublish) {
        this.noteStatuses.delete(file.path);
        return;
      }

      if (!wantsPublish && hasGardenUrl) {
        // Desynced: unpublished locally, but still has garden-url
        this.noteStatuses.set(file.path, {
          status: "desynced",
          timestamp: Date.now(),
        });
        this.renderCurrentWidgets();
        return;
      }

      const cached = this.noteStatuses.get(file.path);
      const now = Date.now();

      // Fast check: Si noteStatsCache indique déjà une modification locale
      const statsCache = this.plugin?.garden?.noteStatsCache || this.plugin?.panel?.noteStatsCache;
      if (statsCache) {
        const stats = statsCache.get(file.path);
        const remoteTime = stats?.updated_at ? new Date(stats.updated_at).getTime() : 0;
        const localTime = file.stat?.mtime || 0;
        if (remoteTime > 0 && localTime > remoteTime + 3000) {
          if (!cached || cached.status !== "changed") {
            this.noteStatuses.set(file.path, {
              status: "changed",
              remoteContent: cached ? cached.remoteContent : null,
              timestamp: now,
            });
            this.renderCurrentWidgets();
          }
        }
      }

      // Skip check if verified recently and the file mtime hasn't changed since then
      if (cached && (now - cached.timestamp < 10000) && (file.stat?.mtime <= cached.timestamp)) {
        return;
      }

      // Block concurrent checks by setting an intermediate timestamp
      if (!this.noteStatuses.has(file.path)) {
        this.noteStatuses.set(file.path, {
          status: cached ? cached.status : this.stateKey(fm, file.path, file),
          remoteContent: cached ? cached.remoteContent : null,
          timestamp: now
        });
      }

      const garden = this.plugin.garden;
      if (!garden) return;

      const res = await garden.checkNoteStatus(file);
      this.noteStatuses.set(file.path, {
        status: res.status,
        remoteContent: res.remoteContent,
        timestamp: Date.now()
      });
      this.renderCurrentWidgets();
      if (this.plugin.panel && typeof this.plugin.panel.updateTopIndicator === "function") {
        this.plugin.panel.updateTopIndicator(true);
      }
    } catch (err) {
      console.error("Standard : Erreur lors de la vérification asynchrone du statut :", err);
    } finally {
      this.checkingFiles.delete(file.path);
    }
  }

  // ── Rendering ────────────────────────────────────────────────────────────────
  refreshAll() {
    const hasKey = !!this.plugin.settings.apiKey;
    const indicatorStyle = this.plugin.settings.publishIndicatorStyle || "garden";

    if (!hasKey && indicatorStyle === "hidden") {
      this.cleanupAll();
      return;
    }

    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile && hasKey) {
      this.triggerStatusCheck(activeFile);
    }

    this.renderCurrentWidgets();
  }

  renderCurrentWidgets() {
    const hasKey = !!this.plugin.settings.apiKey;
    const location = this.plugin.settings.publishStatusLocation || "titlebar";
    const indicatorStyle = this.plugin.settings.publishIndicatorStyle || "garden";

    if (!hasKey && indicatorStyle === "hidden") {
      this.cleanupAll();
      return;
    }

    // Nettoyer les widgets inutilisés pour l'emplacement actuel
    if (location !== "titlebar" || !hasKey || location === "hidden") {
      this.app.workspace.getLeavesOfType("markdown").forEach((leaf) => {
        const el = leaf.view && leaf.view._stndPublishAction;
        if (el) {
          el.remove();
          delete leaf.view._stndPublishAction;
        }
      });
    }

    if ((location !== "statusbar" || !hasKey || location === "hidden") && this.statusBarEl) {
      this.statusBarEl.remove();
      this.statusBarEl = null;
    }

    if ((location !== "ribbon" || !hasKey || location === "hidden") && this.ribbonEl) {
      this.ribbonEl.remove();
      this.ribbonEl = null;
    }

    // Mettre à jour ou créer le widget de l'emplacement actif
    if (hasKey && location !== "hidden") {
      if (location === "titlebar") {
        this.app.workspace
          .getLeavesOfType("markdown")
          .forEach((leaf) => this.refreshLeaf(leaf));
      } else if (location === "statusbar") {
        this.refreshStatusBar();
      } else if (location === "ribbon") {
        this.refreshRibbon();
      }
    }

    // Clean up any remaining note bottom indicators (moved to panel top indicator)
    this.app.workspace.getLeavesOfType("markdown").forEach((leaf) => {
      const el = leaf.view?._stndBottomIndicator || leaf.view?.containerEl?.querySelector(".stnd-bottom-indicator");
      if (el) {
        el.remove();
        if (leaf.view) delete leaf.view._stndBottomIndicator;
      }
    });

    // Update the Garden side panel's top status indicator
    if (this.plugin.panel && typeof this.plugin.panel.updateTopIndicator === "function") {
      this.plugin.panel.updateTopIndicator(false);
    }
  }

  refreshForFile(file) {
    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile && activeFile.path === file.path) {
      this.refreshAll();
    } else {
      this.app.workspace.getLeavesOfType("markdown").forEach((leaf) => {
        if (leaf.view && leaf.view.file && leaf.view.file.path === file.path) {
          if (this.plugin.settings.publishStatusLocation === "titlebar") {
            this.refreshLeaf(leaf);
          }
        }
      });
      if (this.plugin.panel && typeof this.plugin.panel.updateTopIndicator === "function") {
        this.plugin.panel.updateTopIndicator(false);
      }
    }
  }

  refreshBottomIndicator(leaf, indicatorStyle, triggerAnimation = false) {
    const view = leaf?.view;
    if (!view || !view.containerEl || !view.file) return;

    let indicator = view._stndBottomIndicator;
    if (indicatorStyle === "hidden") {
      if (indicator) {
        indicator.remove();
        delete view._stndBottomIndicator;
      }
      return;
    }

    const fm = getNoteFrontmatter(this.app, view.file);
    const { key, state } = this.getStateInfo(fm, view.file.path, view.file);

    if (!indicator || !indicator.isConnected || !view.containerEl.contains(indicator)) {
      const existing = view.containerEl.querySelector(".stnd-bottom-indicator");
      if (existing) {
        indicator = existing;
      } else {
        indicator = document.createElement("div");
        indicator.className = "stnd-bottom-indicator";
        view.containerEl.appendChild(indicator);
      }
      view._stndBottomIndicator = indicator;
    }

    if (view.containerEl.style.position !== "relative" && getComputedStyle(view.containerEl).position === "static") {
      view.containerEl.style.position = "relative";
    }

    indicator.className = `stnd-bottom-indicator stnd-style-${indicatorStyle} stnd-state-${key}`;
    const stateLabel = state?.label || key;
    indicator.setAttribute("title", `Garden: ${stateLabel}`);

    if (triggerAnimation && indicatorStyle === "garden") {
      indicator.classList.remove("stnd-growing");
      // Force reflow pour relancer l'animation
      void indicator.offsetWidth;
      indicator.classList.add("stnd-growing");
    }
  }

  refreshLeaf(leaf) {
    const view = leaf.view;
    if (!view || typeof view.addAction !== "function" || !view.file) return;

    const fm = getNoteFrontmatter(this.app, view.file);
    const { key, state } = this.getStateInfo(fm, view.file.path, view.file);

    let el = view._stndPublishAction;
    if (!el || !el.isConnected || !view.containerEl.contains(el)) {
      const existing = view.containerEl.querySelector(".stnd-publish-status");
      if (existing) {
        el = existing;
      } else {
        el = view.addAction(state.icon, "Garden Status", (evt) => this.onClick(view, evt));
        el.addClass("stnd-publish-status");
      }
      view._stndPublishAction = el;
    }
    obsidian_1.setIcon(el, state.icon);
    el.style.color = state.color;
    el.setAttribute("aria-label", `Garden Status — ${state.label}`);
    el.dataset.stndState = key;
  }

  refreshStatusBar() {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
      if (this.statusBarEl) this.statusBarEl.style.display = "none";
      return;
    }

    const fm = getNoteFrontmatter(this.app, activeFile);
    const { key, state } = this.getStateInfo(fm, activeFile.path, activeFile);

    if (!this.statusBarEl) {
      this.statusBarEl = this.plugin.addStatusBarItem();
      this.statusBarEl.addClass("stnd-publish-status-statusbar");
      this.statusBarEl.style.cursor = "pointer";
      this.statusBarEl.addEventListener("click", (evt) => {
        const view = this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
        if (view) this.onClick(view, evt);
      });
    }

    this.statusBarEl.style.display = "";
    this.statusBarEl.empty();
    
    const iconSpan = this.statusBarEl.createSpan();
    obsidian_1.setIcon(iconSpan, state.icon);
    iconSpan.style.color = state.color;
    iconSpan.style.marginRight = "6px";
    iconSpan.style.display = "inline-flex";
    iconSpan.style.alignItems = "center";

    this.statusBarEl.createSpan({ text: `Garden: ${state.label}` });
    this.statusBarEl.setAttribute("aria-label", `Garden Status — ${state.label}`);
  }

  refreshRibbon() {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
      if (this.ribbonEl) this.ribbonEl.style.display = "none";
      return;
    }

    const fm = getNoteFrontmatter(this.app, activeFile);
    const { key, state } = this.getStateInfo(fm, activeFile.path, activeFile);

    if (!this.ribbonEl) {
      this.ribbonEl = this.plugin.addRibbonIcon(state.icon, "Garden Status", (evt) => {
        const view = this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
        if (view) this.onClick(view, evt);
      });
      this.ribbonEl.addClass("stnd-publish-status-ribbon");
    }

    this.ribbonEl.style.display = "";
    obsidian_1.setIcon(this.ribbonEl, state.icon);
    this.ribbonEl.style.color = state.color;
    this.ribbonEl.setAttribute("aria-label", `Garden Status — ${state.label}`);
  }

  // ── Click → contextual menu ──────────────────────────────────────────────────
  onClick(view, evt) {
    const file = view.file;
    if (!file) return;
    const garden = this.plugin.garden;
    if (!garden) return;

    const fm = getNoteFrontmatter(this.app, file);
    const key = this.stateKey(fm, file.path, file);
    const menu = new obsidian_1.Menu();

    const publish = async () => {
      if (!garden.checkApiKeyAndShowModal()) {
        return;
      }
      const ok = await garden.publishWithCheck(file);
      if (ok !== null) {
        new obsidian_1.Notice(
          ok
            ? `Standard: "${file.basename}" published.`
            : `Standard: Failed to publish "${file.basename}".`,
        );
        if (ok) {
          const leaf = view.leaf || { view };
          const indicatorStyle = this.plugin.settings.publishIndicatorStyle || "garden";
          this.refreshBottomIndicator(leaf, indicatorStyle, true);
        }
        if (ok && garden.plugin.settings.openAfterPublish) {
          garden.viewLiveVersion(file);
        }
      }
      this.refreshAll();
    };

    if (key === "desynced") {
      menu.addItem((i) =>
        i
          .setTitle("Remove from Garden (delete online note)")
          .setIcon("trash-2")
          .setWarning(true)
          .onClick(async () => {
            await garden.deleteOnlineVersion(file);
            this.refreshAll();
          }),
      );
      menu.addItem((i) =>
        i
          .setTitle("Republish (set publish: true)")
          .setIcon("upload-cloud")
          .onClick(async () => {
            await this.app.fileManager.processFrontMatter(file, (fm) => {
              fm.publish = true;
              if ("status" in fm) delete fm.status;
            });
            await publish();
          }),
      );
      menu.addItem((i) =>
        i.setTitle("View live version").setIcon("external-link").onClick(() => garden.viewLiveVersion(file)),
      );
    } else if (key === "unpublished" || key === "pending") {
      menu.addItem((i) =>
        i.setTitle("Publish to Garden").setIcon("upload-cloud").onClick(() => publish()),
      );
    } else if (key === "outdated") {
      const cached = this.noteStatuses.get(file.path);
      const remoteContent = cached?.remoteContent || "";
      menu.addItem((i) =>
        i
          .setTitle("Pull remote changes (overwrite local)")
          .setIcon("arrow-down-circle")
          .onClick(async () => {
            if (remoteContent) {
              await this.app.vault.modify(file, remoteContent);
              new obsidian_1.Notice(`Standard: Local file updated with remote version.`);
              this.noteStatuses.set(file.path, {
                status: "synced",
                timestamp: Date.now(),
              });
              this.refreshAll();
            } else {
              new obsidian_1.Notice(`Standard: Remote content not found.`);
            }
          }),
      );
      menu.addItem((i) =>
        i.setTitle("Force publish local").setIcon("refresh-cw").onClick(() => publish()),
      );
      menu.addItem((i) =>
        i.setTitle("View online").setIcon("external-link").onClick(() => garden.viewLiveVersion(file)),
      );
      menu.addSeparator();
      menu.addItem((i) =>
        i
          .setTitle("Remove from Garden (unpublish)")
          .setIcon("trash-2")
          .setWarning(true)
          .onClick(async () => {
            await garden.deleteOnlineVersion(file);
            this.refreshAll();
          }),
      );
    } else if (key === "changed") {
      menu.addItem((i) =>
        i.setTitle("Publish local changes").setIcon("upload-cloud").onClick(() => publish()),
      );
      menu.addItem((i) =>
        i.setTitle("View online").setIcon("external-link").onClick(() => garden.viewLiveVersion(file)),
      );
      menu.addSeparator();
      menu.addItem((i) =>
        i
          .setTitle("Remove from Garden (unpublish)")
          .setIcon("trash-2")
          .setWarning(true)
          .onClick(async () => {
            await garden.deleteOnlineVersion(file);
            this.refreshAll();
          }),
      );
    } else {
      menu.addItem((i) =>
        i.setTitle("View online").setIcon("external-link").onClick(() => garden.viewLiveVersion(file)),
      );
      menu.addItem((i) =>
        i.setTitle("Re-publish").setIcon("refresh-cw").onClick(() => publish()),
      );
      menu.addSeparator();
      menu.addItem((i) =>
        i
          .setTitle("Remove from Garden (unpublish)")
          .setIcon("trash-2")
          .setWarning(true)
          .onClick(async () => {
            await garden.deleteOnlineVersion(file);
            this.refreshAll();
          }),
      );
    }

    menu.addSeparator();
    menu.addItem((i) =>
      i
        .setTitle("Sync all notes")
        .setIcon("folder-sync")
        .onClick(async () => {
          await garden.syncAllPublished();
          const activeView = this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
          if (activeView) {
            const leaf = activeView.leaf || { view: activeView };
            const indicatorStyle = this.plugin.settings.publishIndicatorStyle || "garden";
            this.refreshBottomIndicator(leaf, indicatorStyle, true);
          }
        }),
    );
    menu.showAtMouseEvent(evt);
  }
}

module.exports = { PublishStatusFeature };
