"use strict";

const obsidian_1 = require("obsidian");

const SYNC_GUIDE_ITEMS = [
  {
    key: "synced",
    label: "Synced",
    color: "var(--stnd-status-synced)",
    icon: "check-circle",
    summary: "Live & up to date",
    desc: "The note is published on your garden and the local version matches the online version exactly.",
  },
  {
    key: "modified",
    label: "Modified",
    color: "var(--stnd-status-modified)",
    icon: "upload-cloud",
    summary: "Local edits not published",
    desc: "The note is already online, but has local changes in Obsidian that have not been republished yet.",
  },
  {
    key: "pending",
    label: "Queued",
    color: "var(--stnd-status-pending)",
    icon: "upload-cloud",
    summary: "Marked for publication",
    desc: "The note has 'publish: true' in its frontmatter, waiting to be sent to your garden.",
  },
  {
    key: "outdated",
    label: "Outdated",
    color: "var(--stnd-status-outdated)",
    icon: "arrow-down-circle",
    summary: "Remote update available",
    desc: "A newer version exists online (edited from another device or web). Use 'Pull' to update your local file.",
  },
  {
    key: "desynced",
    label: "Unpublished (Online)",
    color: "var(--stnd-status-desynced)",
    icon: "alert-circle",
    summary: "Unpublished locally, still live online",
    desc: "The note was marked 'publish: false' locally, but is still published on your garden. Use 'Unpublish' to delete online or 'Republish' to restore.",
  },
  {
    key: "local",
    label: "Local",
    color: "var(--stnd-status-local)",
    icon: "cloud-off",
    summary: "Offline vault note",
    desc: "Personal note stored strictly in your local vault. Never shared online.",
  },
];

const VISIBILITY_GUIDE_ITEMS = [
  {
    key: "public",
    label: "Public",
    icon: "globe",
    summary: "Feed & Search",
    desc: "Included in your garden feed, search index, and accessible to anyone.",
  },
  {
    key: "unlisted",
    label: "Unlisted",
    icon: "eye-off",
    summary: "Direct link only",
    desc: "Hidden from public feeds and search. Accessible only to anyone with the secret URL.",
  },
  {
    key: "private",
    label: "Private",
    icon: "lock",
    summary: "Owner only",
    desc: "Protected behind authentication. Only you can view this note on your garden.",
  },
];

function renderStatusGuide(containerEl) {
  const guideBox = containerEl.createEl("div", { cls: "stnd-status-guide-container" });

  const syncHeading = guideBox.createEl("div", {
    text: "Synchronization States",
    cls: "stnd-panel-subheading",
  });
  syncHeading.style.cssText =
    "font-weight: var(--font-semibold); margin-bottom: 8px; color: var(--text-normal); font-size: var(--font-ui-smaller); text-transform: uppercase; letter-spacing: 0.05em;";

  for (const item of SYNC_GUIDE_ITEMS) {
    const row = guideBox.createEl("div", { cls: "stnd-status-guide-item" });

    const badge = row.createEl("div", { cls: "stnd-status-guide-badge" });
    badge.style.color = item.color;
    obsidian_1.setIcon(badge.createEl("span", { cls: "stnd-status-guide-icon" }), item.icon);
    badge.createEl("span", { text: item.label });

    const content = row.createEl("div", { cls: "stnd-status-guide-content" });
    content.createEl("div", { cls: "stnd-status-guide-title", text: item.summary });
    content.createEl("div", { cls: "stnd-status-guide-desc", text: item.desc });
  }

  const visHeading = guideBox.createEl("div", {
    text: "Note Visibility",
    cls: "stnd-panel-subheading",
  });
  visHeading.style.cssText =
    "font-weight: var(--font-semibold); margin-top: 18px; margin-bottom: 8px; color: var(--text-normal); font-size: var(--font-ui-smaller); text-transform: uppercase; letter-spacing: 0.05em;";

  for (const item of VISIBILITY_GUIDE_ITEMS) {
    const row = guideBox.createEl("div", { cls: "stnd-status-guide-item" });

    const badge = row.createEl("div", { cls: "stnd-status-guide-badge" });
    obsidian_1.setIcon(badge.createEl("span", { cls: "stnd-status-guide-icon" }), item.icon);
    badge.createEl("span", { text: item.label });

    const content = row.createEl("div", { cls: "stnd-status-guide-content" });
    content.createEl("div", { cls: "stnd-status-guide-title", text: item.summary });
    content.createEl("div", { cls: "stnd-status-guide-desc", text: item.desc });
  }

  return guideBox;
}

class StndStatusGuideModal extends obsidian_1.Modal {
  constructor(app) {
    super(app);
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("stnd-modal");
    contentEl.style.cssText = "max-width: 520px; padding: 20px;";

    const titleEl = contentEl.createEl("h3", { text: "Garden Status & Colors Guide" });
    titleEl.style.cssText =
      "margin-bottom: 8px; font-size: var(--font-ui-medium); font-weight: var(--font-semibold);";

    const descEl = contentEl.createEl("p", {
      text: "Standard Garden uses this unified color code across the titlebar icon, side panel badge, and panel top indicator:",
      cls: "stnd-panel-meta",
    });
    descEl.style.cssText = "margin-bottom: 16px;";

    renderStatusGuide(contentEl);

    const btns = contentEl.createEl("div", { cls: "stnd-modal-btns" });
    btns.style.cssText = "display: flex; justify-content: flex-end; margin-top: 16px;";
    const closeBtn = btns.createEl("button", {
      text: "Close",
      cls: "mod-cta",
    });
    closeBtn.addEventListener("click", () => this.close());
  }

  onClose() {
    this.contentEl.empty();
  }
}

module.exports = {
  StndStatusGuideModal,
  SYNC_GUIDE_ITEMS,
  STATUS_GUIDE_ITEMS: SYNC_GUIDE_ITEMS,
  VISIBILITY_GUIDE_ITEMS,
  renderStatusGuide,
};
