"use strict";

const obsidian_1 = require("obsidian");

// Global memory cache for resolved frontmatters
// path -> { mtime: number, frontmatter: object }
const frontmatterCache = new Map();

function extractFrontmatterString(content) {
  if (!content) return null;
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : null;
}

function parseFrontmatterText(yamlText) {
  if (!yamlText || !yamlText.trim()) return {};
  try {
    if (typeof obsidian_1.parseYaml === "function") {
      const parsed = obsidian_1.parseYaml(yamlText);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch (e) {}

  try {
    const yaml = require("yaml");
    const parsed = yaml.parse(yamlText);
    if (parsed && typeof parsed === "object") return parsed;
  } catch (e) {}

  // Basic line-by-line fallback parser for resilience
  const res = {};
  const lines = yamlText.split(/\r?\n/);
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx > 0 && !line.startsWith(" ") && !line.startsWith("\t")) {
      const k = line.slice(0, idx).trim();
      let v = line.slice(idx + 1).trim();
      if (v === "true") v = true;
      else if (v === "false") v = false;
      else if (/^['"].*['"]$/.test(v)) v = v.slice(1, -1);
      res[k] = v;
    }
  }
  return res;
}

/**
 * Synchronously retrieves frontmatter for a file with multiple fallbacks:
 * 1. Obsidian's metadataCache.getFileCache(file)
 * 2. In-memory frontmatterCache matching file.stat.mtime
 * 3. Active open MarkdownView data in workspace
 */
function getNoteFrontmatter(app, file) {
  if (!file) return {};

  // 1. Obsidian's metadataCache
  const nativeCache = app?.metadataCache?.getFileCache(file)?.frontmatter;
  if (nativeCache && typeof nativeCache === "object" && Object.keys(nativeCache).length > 0) {
    frontmatterCache.set(file.path, {
      mtime: file.stat?.mtime || 0,
      frontmatter: nativeCache,
    });
    return nativeCache;
  }

  // 2. In-memory frontmatter cache
  const cached = frontmatterCache.get(file.path);
  if (cached && file.stat && cached.mtime === file.stat.mtime) {
    return cached.frontmatter;
  }

  // 3. Open markdown view leaf data
  if (app?.workspace) {
    const leaves = app.workspace.getLeavesOfType("markdown");
    for (const leaf of leaves) {
      if (
        leaf.view &&
        leaf.view.file &&
        leaf.view.file.path === file.path &&
        typeof leaf.view.getViewData === "function"
      ) {
        const text = leaf.view.getViewData();
        const yamlStr = extractFrontmatterString(text);
        if (yamlStr !== null) {
          const parsed = parseFrontmatterText(yamlStr);
          frontmatterCache.set(file.path, {
            mtime: file.stat?.mtime || 0,
            frontmatter: parsed,
          });
          return parsed;
        }
      }
    }
  }

  // If we had a prior version in cache, return it rather than an empty object
  if (cached && cached.frontmatter) {
    return cached.frontmatter;
  }

  return {};
}

/**
 * Asynchronously retrieves frontmatter for a file, reading from vault if needed.
 */
async function getNoteFrontmatterAsync(app, file) {
  if (!file) return {};
  const syncFm = getNoteFrontmatter(app, file);
  if (syncFm && Object.keys(syncFm).length > 0) {
    return syncFm;
  }

  try {
    const content =
      typeof app.vault.cachedRead === "function"
        ? await app.vault.cachedRead(file)
        : await app.vault.read(file);
    const yamlStr = extractFrontmatterString(content);
    const parsed = yamlStr !== null ? parseFrontmatterText(yamlStr) : {};
    frontmatterCache.set(file.path, {
      mtime: file.stat?.mtime || 0,
      frontmatter: parsed,
    });
    return parsed;
  } catch (err) {
    return syncFm || {};
  }
}

function invalidateFrontmatterCache(path) {
  if (path) frontmatterCache.delete(path);
}

module.exports = {
  getNoteFrontmatter,
  getNoteFrontmatterAsync,
  invalidateFrontmatterCache,
  extractFrontmatterString,
  parseFrontmatterText,
};
