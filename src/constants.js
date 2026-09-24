"use strict";

// ─── Canonical token names ───────────────────────────────────────────────────
// Keep in sync with packages/utils/theme-tokens.js (run sync-tokens.js).
// FM key === CSS property name minus the `--` prefix. No namespace prefix.

const KNOWN_TOKENS = new Set([
  // Light mode
  "color-light-background",
  "color-light-foreground",
  "color-light-accent",
  "color-light-red",
  "color-light-orange",
  "color-light-yellow",
  "color-light-green",
  "color-light-cyan",
  "color-light-blue",
  "color-light-purple",
  "color-light-pink",
  "color-light-bold",
  "color-light-italic",
  // Dark mode
  "color-dark-background",
  "color-dark-foreground",
  "color-dark-accent",
  "color-dark-red",
  "color-dark-orange",
  "color-dark-yellow",
  "color-dark-green",
  "color-dark-cyan",
  "color-dark-blue",
  "color-dark-purple",
  "color-dark-pink",
  "color-dark-bold",
  "color-dark-italic",
  // Typography weights & metrics
  "font-header-weight",
  "font-header-letter-spacing",
  "font-header-line-height",
  "font-header-style",
  "font-header-feature",
  "font-header-variation",
  "font-weight",
  "font-weight-bold",
  "font-feature",
  "font-variation",
  "font-monospace-feature",
  "font-monospace-variation",
  "font-interface-feature",
  "font-interface-variation",
  "optical-ratio",
  "font-density",
  // Fine color control
  "color-header",
  "color-bold",
  "color-italic",
  "color-accent",
  // Layout
  "line-width",
  // Vertical rhythm
  "margin",
  "margin-block",
  // Font families (quoted in CSS output)
  "font-header",
  "font-text",
  "font-interface",
  "font-monospace",
]);

const FONT_TOKENS = new Set([
  "font-header",
  "font-text",
  "font-interface",
  "font-monospace",
]);

// Settings interface
const DEFAULT_SETTINGS = {
  // Design-system layers (frontmatter tokens → CSS variables)
  enableDesignSystem: true,
  defaultTheme: "",
  startupSnapshot: {
    cssClasses: [],
    theme: "",
    customCss: "",
  },
  themeCache: {},
  apiKey: "",
  apiUsername: "",
  apiUrl: "https://standard.garden/api",
  openAfterPublish: false,
  publishStatusLocation: "titlebar", // Location of the publish status action: titlebar, statusbar, ribbon, hidden
  publishIndicatorStyle: "garden", // Bottom view indicator: garden (animated organic gradient), subtle (minimal accent line), hidden (disabled)
  autoSync: false, // Automatic background synchronization (disabled by default to protect local drafts)
  autoSyncStartup: false,
  syncDirection: "2way",
  excludedFolders: "Utopie",
  enableMycelium: false,
  panelOpenedOnInstall: false,
  mycelium: {
    enableGhostLinks: false,
    enableLinkingCommand: true,
    enableCompostFooter: false,
  }
};

const DOCS_URLS = {
  plugin: "https://standard.garden/guide/getting-started/obsidian",
  sync: "https://standard.garden/guide/getting-started/obsidian#sync",
  tokens: "https://standard.garden/guide/getting-started/tokens",
  cssHooks: "https://standard.garden/guide/getting-started/css-hooks",
  typography: "https://standard.garden/guide/getting-started/tokens#typography",
  frontmatter: "https://standard.garden/guide/getting-started/customization#frontmatter",
  syntax: "https://standard.garden/guide/getting-started/customization#syntax",
};

// ─── Settings UI Helpers ─────────────────────────────────────────────────────

/**
 * Build a DocumentFragment for use with Setting.setDesc().
 * Supports inline hyperlinks by using § as a placeholder in the text.
 *
 * @param {string} text   Description text. Each § is replaced in order by the
 *                        next link in the `links` array.
 * @param {Array<{text: string, href: string}>} links  Inline anchor definitions.
 * @returns {DocumentFragment}
 *
 * @example
 * .setDesc(descWithLinks(
 *   "Manage folder rules. § for more details.",
 *   [{ text: "Read the guide", href: "https://stnd.build/3-archives/obsidian-plugin#2-hot-folder" }]
 * ))
 */
function descWithLinks(text, links = []) {
  const frag = document.createDocumentFragment();
  const parts = text.split("§");
  parts.forEach((part, i) => {
    if (part) frag.appendText(part);
    if (i < links.length) {
      const link = links[i];
      const a = frag.createEl("a", { text: link.text, href: link.href });
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
      a.style.color = "var(--link-color, var(--interactive-accent))";
      a.style.textDecoration = "underline";
      a.style.textUnderlineOffset = "2px";
    }
  });
  return frag;
}

// Détection native de l'intention de publication.
// Supporte nativement `status: public` (ou `status: draft`) ainsi que `publish: true` ou date.
function isPublishIntent(value) {
  if (value == null) return false;

  // Si un objet frontmatter complet est passé
  if (typeof value === "object" && !(value instanceof Date)) {
    if (typeof value.status === "string") {
      const s = value.status.trim().toLowerCase();
      if (s === "public" || s === "published") return true;
      if (s === "draft" || s === "private" || s === "internal" || s === "archived") return false;
    }
    if (value.publish !== undefined) {
      return isPublishIntent(value.publish);
    }
    if (value["garden-url"] || value.url_public) {
      return true;
    }
    return false;
  }

  if (value === true) return true;
  if (value === false || value === "") return false;
  if (value instanceof Date) return !isNaN(value.getTime());
  if (typeof value === "string") {
    const trimmed = value.trim().toLowerCase();
    if (trimmed === "public" || trimmed === "published" || trimmed === "true") return true;
    if (trimmed === "draft" || trimmed === "private" || trimmed === "archived" || trimmed === "false") return false;
    return !isNaN(new Date(value).getTime());
  }
  return false;
}

function isImageFile(name) {
  return /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(name);
}

function isPdfFile(name) {
  return /\.pdf$/i.test(name);
}

// Une note peut embarquer autre chose que des images. On exclut le markdown :
// `![[Une autre note]]` est une transclusion, pas une pièce jointe, et la
// téléverser produirait un lien de téléchargement au lieu du contenu attendu.
function isAttachmentFile(name) {
  if (!name || !/\.[a-z0-9]+$/i.test(name)) return false;
  return !/\.(md|markdown|canvas)$/i.test(name);
}

function getMimeType(name) {
  const ext = (name.split(".").pop() || "").toLowerCase();
  const map = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    avif: "image/avif",
    pdf: "application/pdf",
    zip: "application/zip",
    gz: "application/gzip",
    tar: "application/x-tar",
    mp3: "audio/mpeg",
    wav: "audio/wav",
    m4a: "audio/mp4",
    mp4: "video/mp4",
    mov: "video/quicktime",
    webm: "video/webm",
    txt: "text/plain",
    csv: "text/csv",
    json: "application/json",
    epub: "application/epub+zip",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ppt: "application/vnd.ms-powerpoint",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  };
  return map[ext] || "application/octet-stream";
}

// ─── Garden Frontmatter Keys ──────────────────────────────────────────────────
const GARDEN_FRONTMATTER_KEYS = new Set([
  "garden-domain",
  "garden-brand",
  "garden-favicon",
  "garden-launcher",
  "garden-mycelium",
  "garden-avatar",
  "garden-display-name",
  "garden-url",
  "garden-short",
]);

const STRUCTURAL_KEYS = new Set([
  "garden-domain",
  "garden-brand",
  "garden-favicon",
  "garden-launcher",
  "garden-mycelium",
]);

module.exports = {
  KNOWN_TOKENS,
  FONT_TOKENS,
  GARDEN_FRONTMATTER_KEYS,
  STRUCTURAL_KEYS,
  DEFAULT_SETTINGS,
  isPublishIntent,
  isImageFile,
  isPdfFile,
  isAttachmentFile,
  getMimeType,
  descWithLinks,
  DOCS_URLS,
};
