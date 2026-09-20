"use strict";

const { PluginSettingTab, Setting } = require("obsidian");
const { descWithLinks } = require("../../constants.js");

class GardenSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    // ─── Sync & Publication Section ──────────────────────────────────────────
    containerEl.createEl("h2", { text: "Publication" });

    const desc = containerEl.createEl("p", {
      text: "Notes marked with 'status: public' in their frontmatter are automatically published to your digital garden. Use 'status: draft' to keep private.",
      cls: "setting-item-description",
    });

    // Sync Now
    new Setting(containerEl)
      .setName("Sync all published notes")
      .setDesc(descWithLinks(
        "Reconcile your local public notes with standard.garden. § for details.",
        [{ text: "Learn how reconciliation works", href: "https://stnd.build/3-archives/obsidian-plugin#manual-actions" }]
      ))
      .addButton((btn) =>
        btn
          .setButtonText("Sync Now")
          .setCta()
          .onClick(async () => {
            await this.plugin.garden.syncAllPublished();
          })
      );

    // Sync on startup
    new Setting(containerEl)
      .setName("Sync on startup")
      .setDesc("Silently reconcile changes 5 seconds after Obsidian loads.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.autoSyncStartup)
          .onChange(async (v) => {
            this.plugin.settings.autoSyncStartup = v;
            await this.plugin.saveSettings();
          })
      );

    // Excluded folders
    new Setting(containerEl)
      .setName("Excluded folders")
      .setDesc(descWithLinks(
        "Folders to exclude from publication (comma-separated, e.g. Utopie, Archive). Notes inside will never be published.",
        [{ text: "Configuration guide", href: "https://stnd.build/3-archives/obsidian-plugin#configuration" }]
      ))
      .addText((text) =>
        text
          .setPlaceholder("Utopie")
          .setValue(this.plugin.settings.excludedFolders || "")
          .onChange(async (value) => {
            this.plugin.settings.excludedFolders = value.trim();
            await this.plugin.saveSettings();
          })
      );

    // Open after publish
    new Setting(containerEl)
      .setName("Open after publish")
      .setDesc("Open the live note URL in your browser immediately after publishing.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.openAfterPublish)
          .onChange(async (value) => {
            this.plugin.settings.openAfterPublish = value;
            await this.plugin.saveSettings();
          }),
      );

    // Publish status badge location
    new Setting(containerEl)
      .setName("Publish status location")
      .setDesc("Where the publication status indicator appears in the Obsidian interface.")
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
          }),
      );
  }
}

module.exports = { GardenSettingTab };
