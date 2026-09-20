"use strict";

const { PluginSettingTab, Setting, Notice } = require("obsidian");
const { descWithLinks } = require("../../constants.js");

class DesignSystemSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    // ─── Design System Section ───────────────────────────────────────────
    containerEl.createEl("h2", { text: "Apparence" });
    const desc = containerEl.createEl("p", {
      text: "The Standard Design System guarantees 1:1 typographic fidelity between your local editor and your online garden. Frontmatter tokens and curated typography are rendered directly in the workspace.",
      cls: "setting-item-description",
    });
    desc.createEl("a", {
      text: "View Design System Manual",
      href: "https://stnd.build/3-archives/obsidian-plugin#3-themes--design-system",
    });

    new Setting(containerEl)
      .setName("Standard Design System")
      .setDesc(
        "Apply classical typography, fluid vertical rhythm, callouts, and harmonious color palettes across notes."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableDesignSystem)
          .onChange(async (value) => {
            this.plugin.settings.enableDesignSystem = value;
            await this.plugin.saveSettings();
            this.plugin.design.updateBodyClasses();
          }),
      );

    const THEMES = require("../../themes.generated.js");
    new Setting(containerEl)
      .setName("Default Theme")
      .setDesc("Select the default theme for notes that do not specify a theme in their frontmatter.")
      .addDropdown((dropdown) => {
        dropdown.addOption("", "None (Default)");
        Object.keys(THEMES).forEach((themeName) => {
          dropdown.addOption(themeName, themeName);
        });
        dropdown
          .setValue(this.plugin.settings.defaultTheme || "")
          .onChange(async (value) => {
            this.plugin.settings.defaultTheme = value;
            await this.plugin.saveSettings();
            this.plugin.design.updateBodyClasses();
          });
      });

    // Cache and hooks settings hidden for now
    /*
    const cacheSetting = new Setting(containerEl)
      .setName("Clear theme cache")
      .setDesc("Forces the plugin to re-scan and reload all theme stylesheets defined in your vault.")
      .addButton((btn) =>
        btn.setButtonText("Clear Cache").onClick(async () => {
          this.plugin.settings.themeCache = {};
          await this.plugin.saveSettings();
          await this.plugin.design.updateBodyClasses();
          new Notice("Theme cache cleared");
        }),
      );

    const hooksSetting = new Setting(containerEl)
      .setName("CSS Hooks Reference")
      .setDesc(descWithLinks(
        "The plugin continuously reflects active workspace states (such as .stnd-adapter, .stnd-published) onto the workspace. §",
        [{ text: "Read CSS hooks documentation", href: "https://stnd.build/2-system/css-hooks" }]
      ))
      .addButton((btn) =>
        btn.setButtonText("View CSS Hooks").onClick(() => {
          window.open("https://stnd.build/2-system/css-hooks", "_blank");
        }),
      );
    */
  }
}

module.exports = { DesignSystemSettingTab };
