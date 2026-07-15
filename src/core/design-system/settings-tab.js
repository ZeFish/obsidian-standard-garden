"use strict";

const { PluginSettingTab, Setting, Notice, setIcon } = require("obsidian");
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
    containerEl.createEl("h2", { text: "Design System" });
    const desc = containerEl.createEl("p", {
      text: "The Standard Design System is a modern, responsive framework. It parses frontmatter tokens into live CSS variables on the workspace container to dynamically change color schemes, layout densities, and typographies. ",
      cls: "setting-item-description",
    });
    desc.createEl("a", {
      text: "View Design System Manual",
      href: "https://stnd.build/3-archives/obsidian-plugin#3-themes--design-system",
    });

    const designSystemSetting = new Setting(containerEl)
      .setName("Standard Design System")
      .setDesc(
        "Enable the core typography, harmonious color palettes, and fluid vertical rhythm of the Standard framework. You can apply pre-bundled themes (e.g., book, technical) or load custom stylesheet overrides from any note named 'name.md' by declaring 'theme: name' in your frontmatter. "
      );
    designSystemSetting.descEl.createEl("a", {
      text: "Learn about Theme Note Snapping",
      href: "https://stnd.build/3-archives/obsidian-plugin#3-themes--design-system",
    });
    designSystemSetting.addToggle((toggle) =>
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
      .setDesc("Select the theme to apply by default to all notes when no theme is specified in their frontmatter. ")
      .addDropdown((dropdown) => {
        dropdown.addOption("", "None");
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

    const cacheSetting = new Setting(containerEl)
      .setName("Clear theme cache")
      .setDesc("Purges the internal cache and forces the plugin to re-scan and hot-reload all theme stylesheets defined in your markdown files. Useful if you edited your custom theme notes but modifications aren't displaying yet. ")
    cacheSetting.descEl.createEl("a", {
      text: "View Cache troubleshooting",
      href: "https://stnd.build/3-archives/obsidian-plugin#3-themes--design-system",
    });
    cacheSetting.addButton((btn) =>
      btn.setButtonText("Clear Cache").onClick(async () => {
        this.plugin.settings.themeCache = {};
        await this.plugin.saveSettings();
        await this.plugin.design.updateBodyClasses();
        new Notice("Theme cache cleared");
      }),
    );

    // ─── CSS hooks (reference) ─────────────────────────────────────────────────────
    const hooksSetting = new Setting(containerEl)
      .setName("CSS Hooks Reference")
      .setDesc(descWithLinks(
        "The plugin continuously reflects active workspace states (like .stnd-note, .stnd-reading, .stnd-published) onto the application body element, enabling you to target editor view states precisely inside your §.",
        [{ text: "custom snippets", href: "https://stnd.build/2-system/css-hooks" }]
      ));
    hooksSetting.addButton((btn) =>
      btn.setButtonText("View CSS Hooks").onClick(() => {
        window.open("https://stnd.build/2-system/css-hooks", "_blank");
      }),
    );

    // ─── Structural Enhancements ───────────────────────────────────────────
    containerEl.createEl("h3", { text: "📐 Structural Enhancements", cls: "stnd-section-heading" });
    containerEl.createEl("p", {
      text: "Toggle individual architectural and visual tweaks provided by the Standard framework. These are entirely optional.",
      cls: "setting-item-description",
    });

    if (!this.plugin.settings.designSystem) {
      this.plugin.settings.designSystem = {}; // fallback
    }

    const structuralToggles = [
      { id: "enableBetterHighlights", class: "stnd-better-highlights", name: "Better Highlights", desc: "Apply Better Highlights styles" },
      { id: "enableBlurryModals", class: "stnd-blurry-modals", name: "Blurry Modals", desc: "Apply Blurry Modals styles" },
      { id: "enableCallouts", class: "stnd-callouts", name: "Standard Callouts", desc: "Apply Standard Callouts styles" },
      { id: "enableCodeTweaks", class: "stnd-code-tweaks", name: "Code & Source View Tweaks", desc: "Apply Code & Source View Tweaks styles" },
      { id: "enableSubduedLinks", class: "stnd-subdued-links", name: "Subdued Links", desc: "Apply Subdued Links styles" },
      { id: "enableCompactFiletree", class: "stnd-compact-filetree", name: "Compact Filetree", desc: "Apply Compact Filetree styles" },
      { id: "enableCleanFrontmatter", class: "stnd-clean-frontmatter", name: "Clean Frontmatter", desc: "Apply Clean Frontmatter styles" },
      { id: "enableCleanUI", class: "stnd-clean-ui", name: "Clean UI", desc: "Hide titles and headers for a cleaner look" },
      { id: "enableMinimalImages", class: "stnd-minimal-images", name: "Minimal Images", desc: "Shrink images in source view so they don't take up space" },
      { id: "enableTextTrim", class: "stnd-text-trim", name: "Text Trim", desc: "Apply Text Trim styles" },
      { id: "enableBaseTweaks", class: "stnd-base-tweaks", name: "Base Table Tweaks", desc: "Apply Base Table Tweaks styles" },
      { id: "enableSidenotes", class: "stnd-sidenotes", name: "Sidenotes", desc: "Render side notes for blockquotes" },
      { id: "enableCleanTransclusions", class: "stnd-clean-transclusions", name: "Clean Transclusions", desc: "Remove borders and headers from transcluded notes" },
      { id: "enableZoomLargeScreen", class: "stnd-zoom-large-screen", name: "Zoom on Large Screens", desc: "Increase font size on extremely large screens" },
    ];

    structuralToggles.forEach(toggleDef => {
      new Setting(containerEl)
        .setName(toggleDef.name)
        .setDesc(toggleDef.desc)
        .addToggle((toggle) =>
          toggle
            .setValue(this.plugin.settings.designSystem[toggleDef.id] === true)
            .onChange(async (value) => {
              this.plugin.settings.designSystem[toggleDef.id] = value;
              await this.plugin.saveSettings();
              this.plugin.design.updateBodyClasses();
            })
        );
    });
  }
}

module.exports = { DesignSystemSettingTab };
