"use strict";

const { PluginSettingTab, requestUrl, setIcon } = require("obsidian");
const { isPublishIntent } = require("../constants.js");
const { GardenSettingTab } = require("../core/garden/settings-tab.js");
const { DesignSystemSettingTab } = require("../core/design-system/settings-tab.js");

class AccountSettingTab {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    const username = this.plugin.settings.apiUsername;
    if (!username) {
      this._renderDisconnected(containerEl);
      return;
    }

    containerEl.createEl("h2", { text: "Compte" });

    const base = (this.plugin.settings.apiUrl || "https://standard.garden/api")
      .replace(/\/api\/?$/, "");
    const gardenUrl = `${base}/@${username}`;

    // ── Identity card ──
    const card = containerEl.createEl("div");
    card.style.cssText =
      "display:flex;align-items:center;gap:14px;padding:16px;" +
      "border:1px solid var(--background-modifier-border);border-radius:12px;margin-bottom:16px;";

    const avatar = card.createEl("div", {
      text: username.slice(0, 2).toLowerCase(),
    });
    avatar.style.cssText =
      "width:44px;height:44px;border-radius:50%;display:flex;align-items:center;" +
      "justify-content:center;font-weight:600;flex:0 0 auto;" +
      "background:var(--background-secondary);color:var(--interactive-accent);";

    const idCol = card.createEl("div");
    idCol.style.cssText = "flex:1;min-width:0;";
    const name = idCol.createEl("div", { text: `@${username}` });
    name.style.cssText = "font-weight:600;font-size:var(--font-ui-medium);";
    const link = idCol.createEl("a", {
      text: gardenUrl.replace(/^https?:\/\//, ""),
      href: gardenUrl,
    });
    link.setAttribute("target", "_blank");
    link.style.cssText =
      "font-size:var(--font-ui-smaller);color:var(--text-accent);text-decoration:none;";

    const actions = card.createEl("div");
    actions.style.cssText = "display:flex;gap:8px;flex:0 0 auto;";
    const viewGarden = actions.createEl("button", { text: "Online" });
    viewGarden.classList.add("mod-cta");
    viewGarden.onclick = () => window.open(gardenUrl, "_blank");
    const signout = actions.createEl("button", { text: "Sign out" });
    signout.onclick = async () => {
      this.plugin.settings.apiKey = "";
      this.plugin.settings.apiUsername = "";
      this.plugin.statsCache = null;
      await this.plugin.saveSettings();
      this.display();
    };

    // Calculate local published count
    const files = this.plugin.garden?.getPublishableFiles
      ? this.plugin.garden.getPublishableFiles()
      : this.app.vault.getMarkdownFiles();
    const localCount = files.filter(
      (f) => isPublishIntent(this.app.metadataCache.getFileCache(f)?.frontmatter),
    ).length;

    // ── Account Stats Card ──
    const statsContainer = containerEl.createEl("div", {
      cls: "stnd-account-stats-container",
    });

    const cachedData = this.plugin.statsCache;
    if (cachedData) {
      this._renderStatsValues(statsContainer, cachedData, localCount);
      requestUrl({
        url: `${this.plugin.settings.apiUrl}/me`,
        headers: { "x-api-key": this.plugin.settings.apiKey },
        throw: false,
      })
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            this.plugin.statsCache = res.json;
            this._updateStatsValues(statsContainer, res.json, localCount);
          }
        })
        .catch(() => {});
    } else {
      statsContainer.createEl("span", {
        cls: "stnd-account-stats-loading",
        text: "Loading garden stats...",
      });

      requestUrl({
        url: `${this.plugin.settings.apiUrl}/me`,
        headers: { "x-api-key": this.plugin.settings.apiKey },
        throw: false,
      })
        .then((res) => {
          if (res.status < 200 || res.status >= 300) throw new Error();
          return res.json;
        })
        .then((data) => {
          this.plugin.statsCache = data;
          statsContainer.empty();
          this._renderStatsValues(statsContainer, data, localCount);
        })
        .catch(() => {
          statsContainer.empty();
          statsContainer.createEl("span", {
            cls: "stnd-account-stats-loading",
            text: "Failed to load stats.",
          });
        });
    }
  }

  _renderDisconnected(containerEl) {
    containerEl.createEl("h2", { text: "Compte" });

    const card = containerEl.createEl("div");
    card.style.cssText =
      "text-align:center;padding:32px 20px;border:1px solid var(--background-modifier-border);border-radius:12px;margin-top:8px;";

    const badge = card.createEl("div");
    badge.style.cssText =
      "width:48px;height:48px;border-radius:50%;display:flex;align-items:center;" +
      "justify-content:center;margin:0 auto 14px;background:var(--background-secondary);" +
      "color:var(--interactive-accent);";
    setIcon(badge, "leaf");

    const heading = card.createEl("div", {
      text: "Connect your vault to the web",
    });
    heading.style.cssText =
      "font-size:var(--font-ui-large);font-weight:600;margin-bottom:8px;";

    const desc = card.createEl("div", {
      text: "Publish notes to your digital garden with a single status: public frontmatter property.",
      cls: "setting-item-description",
    });
    desc.style.cssText = "max-width:380px;margin:0 auto 20px;line-height:1.5;";

    const btn = card.createEl("button", {
      text: "Connect to Garden",
    });
    btn.classList.add("mod-cta");
    btn.onclick = () => this.plugin.garden.startConnect();
  }

  _renderStatsValues(container, data, localCount) {
    const localCol = container.createEl("div", { cls: "stnd-account-stat-col" });
    localCol.createEl("div", {
      cls: "stnd-account-stat-value stnd-stat-local",
      text: String(localCount),
    });
    localCol.createEl("div", {
      cls: "stnd-account-stat-label",
      text: "Local",
    });

    const countCol = container.createEl("div", { cls: "stnd-account-stat-col" });
    countCol.createEl("div", {
      cls: "stnd-account-stat-value stnd-stat-published",
      text: String(data.notesCount ?? 0),
    });
    countCol.createEl("div", {
      cls: "stnd-account-stat-label",
      text: "Published",
    });

    const viewsCol = container.createEl("div", { cls: "stnd-account-stat-col" });
    viewsCol.createEl("div", {
      cls: "stnd-account-stat-value stnd-stat-views",
      text: String(data.totalViews ?? 0),
    });
    viewsCol.createEl("div", {
      cls: "stnd-account-stat-label",
      text: "Views",
    });

    const syncCol = container.createEl("div", { cls: "stnd-account-stat-col wide" });
    let syncText = "Never";
    if (data.lastSync) {
      syncText = new Date(data.lastSync).toLocaleDateString();
    }
    syncCol.createEl("div", {
      cls: "stnd-account-stat-value medium stnd-stat-sync",
      text: syncText,
    });
    syncCol.createEl("div", {
      cls: "stnd-account-stat-label",
      text: "Last Sync",
    });
  }

  _updateStatsValues(container, data, localCount) {
    const localEl = container.querySelector(".stnd-stat-local");
    if (localEl) localEl.setText(String(localCount));

    const pubEl = container.querySelector(".stnd-stat-published");
    if (pubEl) pubEl.setText(String(data.notesCount ?? 0));

    const viewsEl = container.querySelector(".stnd-stat-views");
    if (viewsEl) viewsEl.setText(String(data.totalViews ?? 0));

    const syncEl = container.querySelector(".stnd-stat-sync");
    if (syncEl) {
      let syncText = "Never";
      if (data.lastSync) {
        syncText = new Date(data.lastSync).toLocaleDateString();
      }
      syncEl.setText(syncText);
    }
  }
}

class StandardSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
    this.currentTab = "Compte";
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.style.paddingTop = "24px";

    const headerTitle = containerEl.createEl("h2", { text: "Standard Garden" });
    headerTitle.style.cssText =
      "margin: 0 0 16px 0; font-size: var(--font-ui-large); font-weight: 600; text-align: left;";

    const navEl = containerEl.createEl("div", { cls: "stnd-settings-nav" });
    navEl.style.cssText =
      "display: flex; justify-content: flex-start; gap: 8px; margin-bottom: 20px;";

    const tabs = [
      { id: "Compte", tab: new AccountSettingTab(this.app, this.plugin) },
      { id: "Publication", tab: new GardenSettingTab(this.app, this.plugin) },
      { id: "Apparence", tab: new DesignSystemSettingTab(this.app, this.plugin) },
    ];

    for (const { id } of tabs) {
      const button = navEl.createEl("button", {
        text: id,
        cls: `stnd-settings-nav-btn ${this.currentTab === id ? "active" : ""}`,
      });
      button.style.padding = "6px 16px";
      button.onclick = () => {
        this.currentTab = id;
        this.display();
      };
    }

    const contentEl = containerEl.createEl("div", {
      cls: "stnd-settings-content",
    });

    const active = tabs.find((t) => t.id === this.currentTab) || tabs[0];
    if (active?.tab) {
      active.tab.containerEl = contentEl;
      active.tab.display();
    }
  }
}

module.exports = { StandardSettingTab };
