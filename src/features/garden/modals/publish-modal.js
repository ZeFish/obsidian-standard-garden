"use strict";

const { Modal } = require("obsidian");
const { renderModalHeader } = require("../../../utils/modal.js");

class StndPublishModal extends Modal {
  constructor(app, options) {
    super(app);
    this.file = options.file;
    this.username = options.username || "";
    this.slug = options.slug || "";
    this.onConfirm = options.onConfirm;
    this.onCancel = options.onCancel || (() => {});
    this._settled = false;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("stnd-modal");
    contentEl.addClass("stnd-publish-modal");

    renderModalHeader(contentEl, `Standard Garden: Publish "${this.file.basename}"`);

    // Intro explanation
    contentEl.createEl("p", {
      text: "Standard Garden is local-first. Notes remain private in your vault until you choose to publish them. Publishing will update this note's frontmatter:",
      cls: "stnd-modal-detail",
    });

    // Code block preview of frontmatter
    const pre = contentEl.createEl("pre", { cls: "stnd-modal-code" });
    pre.createEl("code", {
      text: `---\npublish: true\nvisibility: public # public | unlisted | private\n---`,
    });

    // Bullets explaining how it works
    const list = contentEl.createEl("ul", { cls: "stnd-modal-list" });
    const urlText = this.username
      ? `standard.garden/@${this.username}/${this.slug || ""}`
      : "your garden domain";

    const item1 = list.createEl("li");
    item1.createEl("strong", { text: "Public address: " });
    item1.createSpan({ text: urlText });

    const item2 = list.createEl("li");
    item2.createEl("strong", { text: "Visibility: " });
    item2.createSpan({
      text: "Use 'unlisted' for link-only access, or 'private' to keep it visible only to you.",
    });

    const item3 = list.createEl("li");
    item3.createEl("strong", { text: "You stay in control: " });
    item3.createSpan({
      text: "You can update, change visibility, or unpublish at any time from Obsidian.",
    });

    // Actions
    const btns = contentEl.createDiv({ cls: "stnd-modal-btns" });
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
      text: "Publish",
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
    if (!this._settled) {
      this._settled = true;
      this.onCancel();
    }
  }
}

module.exports = { StndPublishModal };
