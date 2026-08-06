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
  enableDesignSystem: false,
  defaultTheme: "",
  designSystem: {
    enableBetterHighlights: false,
    enableBlurryModals: false,
    enableCallouts: false,
    enableCodeTweaks: false,
    enableSubduedLinks: false,
    enableCompactFiletree: false,
    enableCleanFrontmatter: false,
    enableCleanUI: false,
    enableMinimalImages: false,
    enableTextTrim: false,
    enableBaseTweaks: false,
    enableSidenotes: false,
    enableCleanTransclusions: false,
    enableZoomLargeScreen: false,
  },
  
  // Artisan Tools (Helpers)
  enableSeedbeds: false,
  enableScrollMap: false,
  enableSnippets: false,
  enableMycelium: false,
  enableBase64Fold: false,
  enableSyntaxPreview: false,
  enableDailyNav: false,
  enableEink: false,

  seedbeds: {
    rules: [
      {
        folder: "Journal/Daily",
        frontmatter: {
          tags: ["daily"],
          status: "log"
        }
      }
    ]
  },
  startupSnapshot: {
    cssClasses: [],
    theme: "",
    customCss: "",
  },
  themeCache: {},
  apiKey: "",
  apiUsername: "",
  publishKey: "publish",
  apiUrl: "https://standard.garden/api",
  openAfterPublish: false,
  publishStatusLocation: "titlebar", // Location of the publish status action: titlebar, statusbar, ribbon, hidden
  autoSyncStartup: false,
  autoSyncInterval: "0",
  syncDirection: "1way",
  mediaManager: {
    enableSmartRename: true,
    mediaFolder: "Kernel/attachments",
    timestampFormat: "YYMMDD_HHmm",
    timestampRegex: "^\\d{6}_\\d{4}_",
    excludeFolders: []
  },
  mycelium: {
    enableGhostLinks: false,
    enableGraftingCommand: true,
    enableCompostFooter: true
  },
  dailyNav: {
    navigationMode: "chronological"
  },
  eink: {
    mode: "auto", // auto, always, never
    interceptVolume: true,
    interceptPageKeys: true,
    interceptArrows: false,
    scrollDistance: 85,
    disableSmoothScroll: true,
    volUpAction: "scroll-up",
    volDownAction: "scroll-down",
    fontWeight: "normal",
    fontFamily: "Fraunces",
    bookModeEnabled: true,
  }
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


// `publish:` accepte deux formes. `true` veut dire « publie-la ». Une date veut
// dire « publie-la, et c'est cette date qui la situe dans le jardin » — elle
// pilote l'affichage et l'ordre côté serveur, qui distingue les deux parce que
// SQLite stocke le booléen en entier et la date en texte.
//
// Seuls `false`, l'absence, et une valeur illisible valent « ne publie pas ».
// Une date qui n'a pas encore eu lieu publie quand même : masquer une note à
// cause d'une coquille de date serait une dépublication silencieuse.
function isPublishIntent(value) {
  if (value === true) return true;
  if (value === false || value == null || value === "") return false;
  if (value instanceof Date) return !isNaN(value.getTime());
  if (typeof value === "string") return !isNaN(new Date(value).getTime());
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

module.exports = {
  KNOWN_TOKENS,
  FONT_TOKENS,
  DEFAULT_SETTINGS,
  isPublishIntent,
  isImageFile,
  isPdfFile,
  isAttachmentFile,
  getMimeType,
  descWithLinks,
};
