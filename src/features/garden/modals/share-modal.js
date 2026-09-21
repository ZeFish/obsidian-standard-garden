"use strict";

const obsidian_1 = require("obsidian");

// ─── Share Modal ─────────────────────────────────────────────────────────────

class StndShareModal extends obsidian_1.Modal {
  constructor(app, noteTitle, liveUrl) {
    super(app);
    this.noteTitle = noteTitle;
    this.liveUrl = liveUrl;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("stnd-modal");
    contentEl.style.cssText = "max-width: 480px; padding: 20px;";

    const titleEl = contentEl.createEl("h3", { text: "Share Note" });
    titleEl.style.cssText = "margin-bottom: 16px; font-size: var(--font-ui-medium); font-weight: var(--font-semibold);";

    const createShareOption = (label, value) => {
      const field = contentEl.createEl("div");
      field.style.cssText = "margin-bottom: 16px;";

      const header = field.createEl("div");
      header.style.cssText = "display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;";
      header.createEl("span", { text: label, cls: "stnd-panel-meta" });

      const row = field.createEl("div");
      row.style.cssText = "display: flex; gap: 8px; align-items: center;";

      const input = row.createEl("input", {
        cls: "stnd-panel-input",
        type: "text",
        value,
      });
      input.readOnly = true;
      input.style.cssText = "flex: 1; width: 100%; text-align: left; font-size: var(--font-ui-smaller); font-family: var(--font-monospace);";

      const copyBtn = row.createEl("button", {
        text: "Copy",
        cls: "stnd-panel-btn stnd-panel-btn-secondary",
      });
      copyBtn.style.cssText = "flex-shrink: 0; font-size: var(--font-ui-smaller);";

      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(value);
        copyBtn.setText("Copied!");
        setTimeout(() => copyBtn.setText("Copy"), 1500);
      });
    };

    // 1. Direct Web URL
    createShareOption("Direct URL", this.liveUrl);

    // 2. Markdown Link
    const mdLink = `[${this.noteTitle}](${this.liveUrl})`;
    createShareOption("Markdown Link", mdLink);

    // 3. Iframe Embed
    const iframeCode = `<iframe src="${this.liveUrl}" width="100%" height="600" frameborder="0"></iframe>`;
    createShareOption("Embed Iframe", iframeCode);

    const closeRow = contentEl.createEl("div");
    closeRow.style.cssText = "display: flex; justify-content: flex-end; margin-top: 12px;";
    const closeBtn = closeRow.createEl("button", {
      text: "Close",
      cls: "stnd-panel-btn",
    });
    closeBtn.addEventListener("click", () => this.close());
  }

  onClose() {
    this.contentEl.empty();
  }
}

module.exports = { StndShareModal };
