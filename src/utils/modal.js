"use strict";

const { setIcon } = require("obsidian");

/**
 * Renders a unified Standard Garden modal header with the brand logo and title.
 * @param {HTMLElement} containerEl - The modal's contentEl (or container)
 * @param {string} titleText - The title to display
 * @returns {{ headerEl: HTMLElement, iconEl: HTMLElement, titleEl: HTMLElement }}
 */
function renderModalHeader(containerEl, titleText) {
  const headerEl = containerEl.createDiv({ cls: "stnd-modal-header" });
  const iconEl = headerEl.createSpan({ cls: "stnd-modal-icon" });
  setIcon(iconEl, "stnd-garden");
  const titleEl = headerEl.createEl("h3", {
    text: titleText,
    cls: "stnd-modal-title",
  });
  return { headerEl, iconEl, titleEl };
}

module.exports = { renderModalHeader };
