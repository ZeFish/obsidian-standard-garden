"use strict";

const obsidian_1 = require("obsidian");
const { STATES, LEGEND_ORDER } = require("./states.js");
const { DOCS_URLS } = require("../../constants.js");
const { openDoc } = require("../../utils/docs.js");

// "What do these colours mean?" — the same words as the menu's grey line, all
// in one place. Opened from the last item of the status menu.
class StatusLegendModal extends obsidian_1.Modal {
  constructor(app) {
    super(app);
  }

  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText("Garden status");
    contentEl.addClass("stnd-status-legend");

    contentEl.createEl("p", {
      cls: "stnd-status-legend-intro",
      text: "The sprout in a note's title bar is the Garden. Its color tells you where that note stands.",
    });

    const list = contentEl.createDiv({ cls: "stnd-status-legend-list" });
    for (const key of LEGEND_ORDER) {
      const state = STATES[key];
      const row = list.createDiv({ cls: "stnd-status-legend-row" });
      const icon = row.createSpan({ cls: "stnd-status-legend-icon" });
      obsidian_1.setIcon(icon, state.icon);
      icon.style.color = state.color;
      if (state.attention) icon.addClass("stnd-has-attention");
      const text = row.createDiv({ cls: "stnd-status-legend-text" });
      text.createDiv({ cls: "stnd-status-legend-label", text: state.label });
      text.createDiv({ cls: "stnd-status-legend-desc", text: state.desc });
    }

    new obsidian_1.Setting(contentEl)
      .setName("Want the details?")
      .addButton((b) =>
        b.setButtonText("Read the guide").onClick(() => {
          openDoc(this.app, DOCS_URLS.status);
          this.close();
        }),
      );
  }

  onClose() {
    this.contentEl.empty();
  }
}

module.exports = { StatusLegendModal };
