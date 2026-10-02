"use strict";

const { PluginSettingTab, Setting, Notice } = require("obsidian");
const { descWithLinks, DOCS_URLS } = require("../../constants.js");

class DesignSystemSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    // ─── Design System Section ───────────────────────────────────────────
    containerEl.createEl("h2", { text: "Appearance" });
    const desc = containerEl.createEl("p", {
      text: "The Standard Design System guarantees 1:1 typographic fidelity between your local editor and your online garden. Frontmatter tokens and curated typography are rendered directly in the workspace. ",
      cls: "setting-item-description",
    });
    desc.createEl("a", {
      text: "View Design System Manual →",
      href: DOCS_URLS.tokens,
    });

    new Setting(containerEl)
      .setName("Standard Design System")
      .setDesc(
        descWithLinks(
          "Restyle your notes in Obsidian with classical typography, fluid vertical rhythm, callouts and harmonious color palettes, so they match your garden. It is off by default because it changes how every note looks. §",
          [{ text: "Learn more →", href: DOCS_URLS.typography }]
        )
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableDesignSystem)
          .onChange(async (value) => {
            this.plugin.settings.enableDesignSystem = value;
            await this.plugin.saveSettings();
            // Off at startup means the feature was never built: build it now.
            if (value) await this.plugin.ensureDesign();
            await this.plugin.design?.updateBodyClasses();
          })
      );

    new Setting(containerEl)
      .setName("Editor suggestions")
      .setDesc("Type :: in a note to get suggestions for Garden syntax: cards, columns, callouts, galleries and more. Off by default. Turning it off takes effect after you restart Obsidian.")
      .addToggle((toggle) =>
        toggle
          .setValue(!!this.plugin.settings.enableSyntaxPreview)
          .onChange(async (value) => {
            this.plugin.settings.enableSyntaxPreview = value;
            await this.plugin.saveSettings();
            if (value) await this.plugin.ensureSyntaxPreview();
            else if (this.plugin.syntaxPreview) new Notice("Restart Obsidian to turn off editor suggestions.");
          })
      );

    const THEMES = require("../../themes.generated.js");
    new Setting(containerEl)
      .setName("Default Theme")
      .setDesc(
        descWithLinks(
          "Select the default theme for notes that do not specify a theme in their frontmatter. §",
          [{ text: "Browse themes →", href: DOCS_URLS.tokens }]
        )
      )
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
            this.plugin.design?.updateBodyClasses();
          });
      });

    // ─── Advanced settings (revealed via Alt / ⌥ Option key) ───────────────────
    new Setting(containerEl)
      .setClass("stnd-advanced-setting")
      .setName("Clear theme cache")
      .setDesc("Forces the plugin to re-scan and reload all theme stylesheets defined in your vault.")
      .addButton((btn) =>
        btn.setButtonText("Clear Cache").onClick(async () => {
          this.plugin.settings.themeCache = {};
          await this.plugin.saveSettings();
          await this.plugin.design?.updateBodyClasses();
          new Notice("Theme cache cleared");
        })
      );

    new Setting(containerEl)
      .setClass("stnd-advanced-setting")
      .setName("CSS Hooks Reference")
      .setDesc(
        descWithLinks(
          "The plugin continuously reflects active workspace states (such as .stnd-adapter, .stnd-published) onto the workspace. §",
          [{ text: "Read CSS hooks documentation →", href: DOCS_URLS.cssHooks }]
        )
      )
      .addButton((btn) =>
        btn.setButtonText("View CSS Hooks").onClick(() => {
          window.open(DOCS_URLS.cssHooks, "_blank");
        })
      );
  }
}

module.exports = { DesignSystemSettingTab };
