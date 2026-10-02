const {
  ALL_TOKEN_NAMES,
  KNOWN_TOKENS_SET,
  QUOTED_TOKEN_SET,
  TOKEN_GROUPS,
  RAW_SANITIZER_MAP,
  buildTokenStyle,
} = require("@stnd/utils/theme-tokens");

const {
  STRUCTURAL_KEYS: CANONICAL_STRUCTURAL_KEYS,
  PROFILE_KEYS,
  PROFILE_FIELD_NAMES,
} = require("@stnd/utils/profile-schema");

// ─── Canonical token names directly from @stnd/utils (single source of truth) ──
const KNOWN_TOKENS = KNOWN_TOKENS_SET;
const FONT_TOKENS = QUOTED_TOKEN_SET;

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
  publishStatusLocation: "auto", // Where the status sprout lives: auto (status bar on desktop, note header on mobile), titlebar, statusbar, ribbon, hidden
  publishIndicatorStyle: "garden", // Panel top indicator: garden (animated organic gradient), subtle (minimal accent line), hidden (disabled)
  autoSync: false, // Automatic background synchronization (disabled by default to protect local drafts)
  autoSyncStartup: false,
  syncDirection: "1way", // Push: the vault wins. "2way" lets the newer side win (online edits are pulled).
  excludedFolders: "Utopie",
  panelOpenedOnInstall: false,
  mycelium: {
    enableGhostLinks: false,
    enableLinkingCommand: true,
    enableCompostFooter: false,
  }
};

const DOCS_URLS = {
  plugin: "https://standard.garden/guide/publish/obsidian",
  sync: "https://standard.garden/guide/publish/sync",
  status: "https://standard.garden/guide/publish/status",
  commands: "https://standard.garden/guide/publish/obsidian-reference#commands",
  tokens: "https://standard.garden/guide/style/themes",
  cssHooks: "https://standard.garden/guide/style/css-hooks",
  typography: "https://standard.garden/guide/style/themes#typography",
  frontmatter: "https://standard.garden/guide/style/frontmatter#frontmatter",
  syntax: "https://standard.garden/guide/style/frontmatter#syntax",
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

// Publication intent detection.
// In Standard Garden, publication is controlled strictly by `publish: true` or a date.
// There is no `status` property in Garden. Legacy `status: public` is handled as read-only fallback.
function isPublishIntent(value) {
  if (value == null) return false;

  // If a full frontmatter object is passed
  if (typeof value === "object" && !(value instanceof Date)) {
    if (value.publish !== undefined) {
      return isPublishIntent(value.publish);
    }
    // Deprecated read-only fallback for legacy vaults
    if (typeof value.status === "string") {
      const s = value.status.trim().toLowerCase();
      if (s === "public" || s === "published") return true;
      if (s === "draft" || s === "private" || s === "internal" || s === "archived") return false;
    }
    return false;
  }

  if (value === true) return true;
  if (value === false || value === "") return false;
  if (value instanceof Date) return !isNaN(value.getTime());
  if (typeof value === "string") {
    const trimmed = value.trim().toLowerCase();
    if (trimmed === "true") return true;
    if (trimmed === "false") return false;
    // Legacy string values
    if (trimmed === "public" || trimmed === "published") return true;
    if (trimmed === "draft" || trimmed === "private" || trimmed === "archived") return false;
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
const STRUCTURAL_KEYS = new Set(CANONICAL_STRUCTURAL_KEYS);

const GARDEN_FRONTMATTER_KEYS = new Set([
  ...CANONICAL_STRUCTURAL_KEYS,
  ...PROFILE_FIELD_NAMES,
  "garden-url",
  "garden-short",
]);

module.exports = {
  ALL_TOKEN_NAMES,
  KNOWN_TOKENS,
  FONT_TOKENS,
  TOKEN_GROUPS,
  RAW_SANITIZER_MAP,
  buildTokenStyle,
  GARDEN_FRONTMATTER_KEYS,
  STRUCTURAL_KEYS,
  PROFILE_KEYS,
  PROFILE_FIELD_NAMES,
  DEFAULT_SETTINGS,
  isPublishIntent,
  isImageFile,
  isPdfFile,
  isAttachmentFile,
  getMimeType,
  descWithLinks,
  DOCS_URLS,
};

