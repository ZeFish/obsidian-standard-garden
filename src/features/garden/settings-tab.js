"use strict";

const { PluginSettingTab, Setting } = require("obsidian");
const { descWithLinks, DOCS_URLS } = require("../../constants.js");

class GardenSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    // ─── Garden Publication ──────────────────────────────────────────────────
    containerEl.createEl("h2", { text: "Publication" });

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

    // Note bottom status indicator
    new Setting(containerEl)
      .setName("Note bottom status indicator")
      .setDesc(
        descWithLinks(
          "A discreet visual accent at the bottom of the active note reflecting its publication state. §",
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
          .addOption("titlebar", "Title bar (Note header)")
          .addOption("statusbar", "Status bar")
          .addOption("ribbon", "Ribbon bar")
          .addOption("hidden", "Hidden")
          .setValue(this.plugin.settings.publishStatusLocation || "titlebar")
          .onChange(async (value) => {
            this.plugin.settings.publishStatusLocation = value;
            await this.plugin.saveSettings();
            const { PublishStatusFeature } = require("../../features/publish-status/index.js");
            const feature = this.plugin.features.find((f) => f instanceof PublishStatusFeature);
            if (feature) feature.refreshAll();
          })
      );

    new Setting(containerEl)
      .setClass("stnd-advanced-setting")
      .setName("Excluded folders")
      .setDesc(
        descWithLinks(
          "Folders completely ignored by the publication engine (comma-separated, e.g. Utopie, Archive). §",
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
