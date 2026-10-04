"use strict";

const obsidian_1 = require("obsidian");
const { renderModalHeader } = require("../../../utils/modal.js");

// ─── Confirmation Modal ───────────────────────────────────────────────────────

class StndConfirmModal extends obsidian_1.Modal {
  constructor(app, message, confirmText, onConfirm, onCancel, title = "Standard Garden") {
    super(app);
    this.message = message;
    this.confirmText = confirmText;
    this.onConfirm = onConfirm;
    this.onCancel = onCancel || (() => {});
    this.title = title;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("stnd-modal");

    renderModalHeader(contentEl, this.title);

    // Split on literal \n so callers can use \n for line breaks
    this.message.split("\n").filter(Boolean).forEach((line, i) => {
      const el = contentEl.createEl(i === 0 ? "p" : "p", {
        text: line,
        cls: i === 0 ? "stnd-modal-message" : "stnd-modal-detail",
      });
    });

    const btns = contentEl.createEl("div", { cls: "stnd-modal-btns" });

    const cancelBtn = btns.createEl("button", {
      text: "Cancel",
      cls: "stnd-modal-btn-cancel",
    });
    cancelBtn.addEventListener("click", () => {
      this._settled = true;
      this.close();
      this.onCancel();
    });

    const confirmBtn = btns.createEl("button", {
      text: this.confirmText,
      cls: "mod-cta",
    });
    confirmBtn.addEventListener("click", () => {
      this._settled = true;
      this.close();
      this.onConfirm();
    });
  }

  onClose() {
    this.contentEl.empty();
    // Closed with Escape or the corner button: that is a "no" too. Callers wait on
    // an answer (the Publish button stays disabled until one comes), so silence
    // would leave them waiting forever.
    if (!this._settled) {
      this._settled = true;
      this.onCancel();
    }
  }
}

module.exports = { StndConfirmModal };
