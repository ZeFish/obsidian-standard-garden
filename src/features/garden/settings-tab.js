"use strict";

const { PluginSettingTab, Setting } = require("obsidian");
const { descWithLinks, DOCS_URLS } = require("../../constants.js");
const { openDoc } = require("../../utils/docs.js");
const { setIcon } = require("obsidian");

class GardenSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    // ─── Garden Publication ──────────────────────────────────────────────────
    const heading = containerEl.createEl("h2", { text: "Publication" });
    const info = heading.createEl("button", {
      cls: "clickable-icon",
      attr: { "aria-label": "Status & colors guide", title: "Status & colors guide" },
    });
    info.style.cssText = "margin-left: 8px; vertical-align: middle;";
    setIcon(info, "info");
    info.addEventListener("click", () => openDoc(this.app, DOCS_URLS.status));

    containerEl.createEl("p", {
      text: "Notes marked with 'publish: true' in their frontmatter appear in your digital garden. Private drafts and notes in excluded folders are never shared online.",
      cls: "setting-item-description",
    });

    // Sync Now
    new Setting(containerEl)
      .setName("Sync all published notes")
      .setDesc(
        descWithLinks(
          "Reconcile notes between your vault and the garden. Local drafts are always preserved. §",
          [{ text: "Learn how sync works →", href: DOCS_URLS.sync }]
        )
      )
      .addButton((btn) =>
        btn
          .setButtonText("Sync Now")
          .setCta()
          .onClick(async () => {
            await this.plugin.garden.syncAllPublished();
          })
      );

    // Automatic background synchronization
    new Setting(containerEl)
      .setName("Automatic synchronization")
      .setDesc(
        descWithLinks(
          "Check for updates in the background every 5 minutes. When disabled, notes are only synced when you manually request it. §",
          [{ text: "Learn more →", href: DOCS_URLS.sync }]
        )
      )
      .addToggle((toggle) =>
        toggle
          .setValue(!!this.plugin.settings.autoSync)
          .onChange(async (enabled) => {
            this.plugin.settings.autoSync = enabled;
            this.plugin.settings.autoSyncStartup = enabled;
            await this.plugin.saveSettings();
            if (this.plugin.garden) {
              this.plugin.garden.setupAutoSyncInterval();
            }
          })
      );

    // Which side wins when both differ — see the guide for the full table.
    new Setting(containerEl)
      .setName("Sync direction")
      .setDesc(
        descWithLinks(
          "Push: your vault always wins — online edits never touch your files. Two-way: the newer side wins, online edits are pulled into your vault, and notes written online are downloaded. §",
          [{ text: "Compare the two →", href: DOCS_URLS.sync }]
        )
      )
      .addDropdown((dropdown) =>
        dropdown
          .addOption("1way", "Push (vault wins)")
          .addOption("2way", "Two-way (newer wins)")
          .setValue(this.plugin.settings.syncDirection === "2way" ? "2way" : "1way")
          .onChange(async (value) => {
            this.plugin.settings.syncDirection = value;
            await this.plugin.saveSettings();
          })
      );

    // Panel top status indicator
    new Setting(containerEl)
      .setName("Panel top status indicator")
      .setDesc(
        descWithLinks(
          "A visual accent on top of the Garden side panel reflecting the active note's publication state. §",
          [{ text: "Learn more →", href: DOCS_URLS.plugin }]
        )
      )
      .addDropdown((dropdown) =>
        dropdown
          .addOption("garden", "Garden (Organic gradient with animation)")
          .addOption("subtle", "Subtle (Minimal accent line)")
          .addOption("hidden", "Disabled")
          .setValue(this.plugin.settings.publishIndicatorStyle || "garden")
          .onChange(async (value) => {
            this.plugin.settings.publishIndicatorStyle = value;
            await this.plugin.saveSettings();
            const { PublishStatusFeature } = require("../../features/publish-status/index.js");
            const feature = this.plugin.features.find((f) => f instanceof PublishStatusFeature);
            if (feature) feature.refreshAll();
            if (this.plugin.panel) this.plugin.panel.render();
          })
      );

    // Open after publish
    new Setting(containerEl)
      .setName("Open in browser after publish")
      .setDesc("Automatically open the live web page in your browser immediately after publishing a note.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.openAfterPublish)
          .onChange(async (value) => {
            this.plugin.settings.openAfterPublish = value;
            await this.plugin.saveSettings();
          })
      );

    // ─── Advanced Settings (Revealed via Alt / ⌥ Option) ─────────────────────
    new Setting(containerEl)
      .setClass("stnd-advanced-setting")
      .setName("Publish status badge location")
      .setDesc(
        descWithLinks(
          "Choose where the garden status icon appears in Obsidian. §",
          [{ text: "Learn more →", href: DOCS_URLS.plugin }]
        )
      )
      .addDropdown((dropdown) =>
        dropdown
          .addOption("auto", "Automatic (status bar, or note header on mobile)")
          .addOption("titlebar", "Title bar (Note header)")
          .addOption("statusbar", "Status bar")
          .addOption("ribbon", "Ribbon bar")
          .addOption("hidden", "Hidden")
          .setValue(this.plugin.settings.publishStatusLocation || "auto")
          .onChange(async (value) => {
            this.plugin.settings.publishStatusLocation = value;
            await this.plugin.saveSettings();
            const { PublishStatusFeature } = require("../../features/publish-status/index.js");
            const feature = this.plugin.features.find((f) => f instanceof PublishStatusFeature);
            if (feature) feature.refreshAll();
          })
      );

    new Setting(containerEl)
      .setName("Ignored folders")
      .setDesc(
        descWithLinks(
          "The Garden ignores these folders entirely: nothing is published or synced, no status badge, and Mycelium neither suggests nor links them (comma-separated, e.g. Utopie, Archive). You can also right-click a folder in the file explorer. §",
          [{ text: "Configuration guide →", href: DOCS_URLS.plugin }]
        )
      )
      .addText((text) =>
        text
          .setPlaceholder("Utopie, Archive")
          .setValue(this.plugin.settings.excludedFolders || "")
          .onChange(async (value) => {
            this.plugin.settings.excludedFolders = value.trim();
            await this.plugin.saveSettings();
          })
      );
  }
}

module.exports = { GardenSettingTab };
