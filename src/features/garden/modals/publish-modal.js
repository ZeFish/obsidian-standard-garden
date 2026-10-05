"use strict";

const { Modal } = require("obsidian");
const { renderModalHeader } = require("../../../utils/modal.js");

const VISIBILITY_OPTIONS = [
  {
    id: "public",
    icon: "🌐",
    title: "Public",
    desc: "Visible to anyone visiting your garden. Listed in index & search.",
    btnText: "Publish Public",
  },
  {
    id: "unlisted",
    icon: "🔗",
    title: "Unlisted",
    desc: "Secret link only. Hidden from search engines & garden index.",
    btnText: "Publish Unlisted",
  },
  {
    id: "private",
    icon: "🔒",
    title: "Private",
    desc: "Syncs to your garden account for yourself. Inaccessible to visitors.",
    btnText: "Publish Private",
  },
];

class StndPublishModal extends Modal {
  constructor(app, options) {
    super(app);
    this.file = options.file;
    this.username = options.username || "";
    this.slug = options.slug || "";
    this.selectedVisibility = options.initialVisibility || "public";
    this.warnings = options.warnings || [];
    this.onConfirm = options.onConfirm;
    this.onCancel = options.onCancel || (() => {});
    this._settled = false;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("stnd-modal");
    contentEl.addClass("stnd-publish-modal");

    renderModalHeader(contentEl, `Standard Garden: Publish "${this.file.basename}"`);

    // Warning callout banner if note was previously marked not to publish or draft
    if (this.warnings && this.warnings.length > 0) {
      const warnBox = contentEl.createDiv({ cls: "stnd-modal-warning-box" });
      warnBox.style.cssText =
        "margin-bottom: 12px; padding: 10px 14px; border-radius: 6px; background: var(--background-modifier-error-hover, rgba(235, 87, 87, 0.12)); border: 1px solid var(--text-error, #eb5757); font-size: var(--font-ui-smaller); color: var(--text-normal);";
      const warnTitle = warnBox.createEl("div", {
        text: "Note was marked not to publish:",
      });
      warnTitle.style.cssText =
        "font-weight: 600; margin-bottom: 4px; color: var(--text-error, #eb5757);";
      this.warnings.forEach((w) => {
        warnBox.createEl("div", { text: w.replace(/^[•\s-]+/, "") });
      });
    }

    // Intro explanation
    contentEl.createEl("p", {
      text: "Standard Garden is local-first. Notes remain private in your vault until you publish them. Choose the visibility level for this note:",
      cls: "stnd-modal-detail",
    });

    // 3 Visibility option cards
    const optionsContainer = contentEl.createDiv({ cls: "stnd-publish-vis-options" });
    const optionCards = {};

    VISIBILITY_OPTIONS.forEach((opt) => {
      const card = optionsContainer.createDiv({
        cls: `stnd-publish-vis-option ${this.selectedVisibility === opt.id ? "selected" : ""}`,
      });
      optionCards[opt.id] = card;

      const titleRow = card.createDiv({ cls: "stnd-publish-vis-title" });
      titleRow.createSpan({ text: `${opt.icon} ${opt.title}` });

      card.createDiv({
        cls: "stnd-publish-vis-desc",
        text: opt.desc,
      });

      card.addEventListener("click", () => {
        selectVisibility(opt.id);
      });
    });

    // Frontmatter preview block
    const previewHeader = contentEl.createDiv({ cls: "stnd-modal-detail" });
    previewHeader.style.cssText = "margin-bottom: 4px; font-weight: 500;";
    previewHeader.setText("Frontmatter that will be updated in your note:");

    const pre = contentEl.createEl("pre", { cls: "stnd-modal-code" });
    const codeEl = pre.createEl("code");

    const updatePreview = () => {
      codeEl.setText(`---\npublish: true\nvisibility: ${this.selectedVisibility}\n---`);
    };
    updatePreview();

    // Helper text
    const helper = contentEl.createEl("p", {
      cls: "stnd-modal-detail",
      text: "You stay in control: you can update, change visibility, or unpublish at any time from Obsidian.",
    });
    helper.style.cssText = "margin-top: 8px; font-size: var(--font-smallest);";

    // Actions
    const btns = contentEl.createDiv({ cls: "stnd-modal-btns stnd-modal-btns-split" });

    // Cancel on the left: explicitly aborts publishing and keeps draft local
    const cancelBtn = btns.createEl("button", {
      text: "Cancel",
      cls: "stnd-modal-btn-cancel",
    });
    cancelBtn.setAttribute("title", "Abort publishing and keep note local");
    cancelBtn.addEventListener("click", () => {
      this._settled = true;
      this.close();
      this.onCancel();
    });

    // Publish buttons on the right
    const actionGroup = btns.createDiv({ cls: "stnd-modal-btns-group" });
    const actionBtns = {};

    VISIBILITY_OPTIONS.forEach((opt) => {
      const btn = actionGroup.createEl("button", {
        text: opt.btnText,
        cls: opt.id === this.selectedVisibility ? "mod-cta" : "",
      });
      actionBtns[opt.id] = btn;

      btn.addEventListener("click", () => {
        this.selectedVisibility = opt.id;
        this._settled = true;
        this.close();
        this.onConfirm(this.selectedVisibility);
      });
    });

    const selectVisibility = (vis) => {
      this.selectedVisibility = vis;
      VISIBILITY_OPTIONS.forEach((opt) => {
        if (opt.id === vis) {
          optionCards[opt.id]?.addClass("selected");
          actionBtns[opt.id]?.addClass("mod-cta");
        } else {
          optionCards[opt.id]?.removeClass("selected");
          actionBtns[opt.id]?.removeClass("mod-cta");
        }
      });
      updatePreview();
    };
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

