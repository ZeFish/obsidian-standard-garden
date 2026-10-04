"use strict";

const obsidian_1 = require("obsidian");

// A note is live in the garden but no longer belongs in the vault (deleted,
// moved out, or switched off). One window for one note or for forty: each row can
// be ticked, "Keep online" is remembered, and closing the window decides nothing.

class FollowUpModal extends obsidian_1.Modal {
  /**
   * @param items [{ key, title, reason }]
   * @param opts { checked, onRemove(items), onKeep(items) }
   */
  constructor(app, items, opts) {
    super(app);
    this.items = items;
    this.checked = new Set(opts.checked ? items.map((i) => i.key) : []);
    this.onRemove = opts.onRemove;
    this.onKeep = opts.onKeep;
    this._settled = false;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("stnd-modal");
    const many = this.items.length > 1;

    contentEl.createEl("p", {
      cls: "stnd-modal-message",
      text: many
        ? `${this.items.length} notes are still live in your garden but are no longer in your vault.`
        : `"${this.items[0].title}" ${this.items[0].reason}.`,
    });
    contentEl.createEl("p", {
      cls: "stnd-modal-detail",
      text: many
        ? "Tick the ones to remove from the garden. Your files are not touched."
        : "It is still live in your garden. Remove it online too?",
    });

    const refreshButtons = () => {
      removeBtn.setText(`Remove ${this.checked.size} online`);
      removeBtn.disabled = this.checked.size === 0;
    };

    if (many) {
      const bar = contentEl.createEl("div", { cls: "stnd-followup-bar" });
      const all = bar.createEl("button", { text: "Select all", cls: "stnd-modal-btn-cancel" });
      const none = bar.createEl("button", { text: "None", cls: "stnd-modal-btn-cancel" });
      const list = contentEl.createEl("div", { cls: "stnd-followup-list" });
      const boxes = [];
      for (const item of this.items) {
        const row = list.createEl("label", { cls: "stnd-followup-row" });
        const box = row.createEl("input", { type: "checkbox" });
        box.checked = this.checked.has(item.key);
        box.addEventListener("change", () => {
          if (box.checked) this.checked.add(item.key);
          else this.checked.delete(item.key);
          refreshButtons();
        });
        boxes.push([item, box]);
        const text = row.createEl("span", { cls: "stnd-followup-text" });
        text.createEl("span", { text: item.title });
        text.createEl("small", { text: item.reason, cls: "stnd-followup-reason" });
      }
      all.addEventListener("click", () => {
        for (const [item, box] of boxes) { box.checked = true; this.checked.add(item.key); }
        refreshButtons();
      });
      none.addEventListener("click", () => {
        for (const [, box] of boxes) box.checked = false;
        this.checked.clear();
        refreshButtons();
      });
    }

    const btns = contentEl.createEl("div", { cls: "stnd-modal-btns" });
    const keepBtn = btns.createEl("button", {
      text: "Keep online",
      cls: "stnd-modal-btn-cancel",
    });
    const removeBtn = btns.createEl("button", { cls: "mod-warning" });
    keepBtn.addEventListener("click", () => {
      this._settled = true;
      this.close();
      this.onKeep(this.items);
    });
    removeBtn.addEventListener("click", () => {
      this._settled = true;
      this.close();
      const chosen = this.items.filter((i) => this.checked.has(i.key));
      this.onRemove(chosen, this.items.filter((i) => !this.checked.has(i.key)));
    });
    refreshButtons();
  }

  onClose() {
    this.contentEl.empty();
    // Escape = "ask me later": nothing is removed and nothing is remembered.
    if (!this._settled) this.onLater && this.onLater();
  }
}

module.exports = { FollowUpModal };
