"use strict";

const { SuggestModal, Notice } = require("obsidian");
const THEMES = require("../../../themes.generated.js");

class ThemeSuggestModal extends SuggestModal {
  constructor(app, plugin, activeFile) {
    super(app);
    this.plugin = plugin;
    this.activeFile = activeFile;
    this.setPlaceholder("Select a theme for this note...");

    this.themes = [
      {
        id: "",
        name: "Default (Inherit / Clear)",
        desc: "Clear theme property to use vault default",
      },
      ...Object.keys(THEMES)
        .sort((a, b) => a.localeCompare(b))
        .map((key) => ({
          id: key,
          name: key.charAt(0).toUpperCase() + key.slice(1),
          desc: `Standard theme: ${key}`,
        })),
    ];
  }

  getSuggestions(query) {
    const q = (query || "").toLowerCase().trim();
    if (!q) return this.themes;
    return this.themes.filter(
      (t) =>
        t.name.toLowerCase().includes(q) || t.id.toLowerCase().includes(q),
    );
  }

  renderSuggestion(item, el) {
    el.createEl("div", { text: item.name });
    el.createEl("small", {
      text: item.desc,
      cls: "stnd-panel-meta",
      attr: { style: "color: var(--text-faint); font-size: 0.85em;" },
    });
  }

  async onChooseSuggestion(item) {
    if (!this.activeFile) return;
    await this.app.fileManager.processFrontMatter(this.activeFile, (fm) => {
      if (item.id) {
        fm.theme = item.id;
      } else {
        delete fm.theme;
      }
    });
    new Notice(
      item.id
        ? `Standard : Thème défini sur "${item.name}".`
        : "Standard : Thème réinitialisé sur la valeur par défaut.",
    );
  }
}

module.exports = { ThemeSuggestModal };
