"use strict";

const obsidian_1 = require("obsidian");

const STATUS_GUIDE_ITEMS = [
  {
    key: "synced",
    label: "Synced / Public",
    color: "var(--stnd-status-synced)",
    icon: "globe",
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
    label: "Queued / Pending",
    color: "var(--stnd-status-pending)",
    icon: "upload-cloud",
    summary: "Marked for publication",
    desc: "The note has 'publish: true' in its frontmatter, but has not yet been uploaded to the garden.",
  },
  {
    key: "outdated",
    label: "Outdated",
    color: "var(--stnd-status-outdated)",
    icon: "arrow-down-circle",
    summary: "Remote update available",
    desc: "A newer version exists online (e.g. edited from another device or web). Use 'Pull' to update your local file.",
  },
  {
    key: "private",
    label: "Private",
    color: "var(--stnd-status-private)",
    icon: "lock",
    summary: "Owner only",
    desc: "Published with 'visibility: private'. Only accessible to you when logged in to your garden.",
  },
  {
    key: "unlisted",
    label: "Unlisted",
    color: "var(--stnd-status-unlisted)",
    icon: "eye-off",
    summary: "Direct link only",
    desc: "Published with 'visibility: unlisted'. Hidden from public feeds and search; accessible only via secret URL.",
  },
  {
    key: "local",
    label: "Local / Draft",
    color: "var(--stnd-status-local)",
    icon: "cloud-off",
    summary: "Offline draft",
    desc: "Personal note or draft stored strictly in your local vault. Never shared online.",
  },
];

function renderStatusGuide(containerEl) {
  const guideBox = containerEl.createEl("div", { cls: "stnd-status-guide-container" });

  for (const item of STATUS_GUIDE_ITEMS) {
    const row = guideBox.createEl("div", { cls: "stnd-status-guide-item" });

    const badge = row.createEl("div", { cls: "stnd-status-guide-badge" });
    badge.style.color = item.color;
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
      text: "Standard Garden uses this unified color code across the titlebar icon, side panel badge, and bottom status bar:",
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

module.exports = { StndStatusGuideModal, STATUS_GUIDE_ITEMS, renderStatusGuide };
