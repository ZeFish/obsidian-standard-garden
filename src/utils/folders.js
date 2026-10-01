"use strict";

// Folder ignore lists ("Utopie, Archive") shared by publication and Mycelium.
// Stored as a comma-separated string (settings UI) but accepted as an array too.

function parseFolderList(raw) {
  const items = Array.isArray(raw) ? raw : String(raw || "").split(",");
  return items
    .map((f) => String(f).trim().replace(/^\/+|\/+$/g, ""))
    .filter(Boolean);
}

// True when `path` is one of the folders or lives under one (case-insensitive:
// macOS vaults are, and a stray capital must not silently publish a folder).
function isInFolderList(path, list) {
  const p = String(path || "").replace(/^\/+/, "").toLowerCase();
  return list.some((f) => {
    const n = f.toLowerCase();
    return p === n || p.startsWith(n + "/");
  });
}

// The listed folder that covers `folderPath` (itself or an ancestor), or null.
function coveringFolder(folderPath, list) {
  const p = String(folderPath || "").replace(/^\/+/, "").toLowerCase();
  return (
    list.find((f) => {
      const n = f.toLowerCase();
      return p === n || p.startsWith(n + "/");
    }) || null
  );
}

function addFolder(raw, folder) {
  const list = parseFolderList(raw);
  if (!coveringFolder(folder, list)) list.push(folder);
  return list.join(", ");
}

function removeFolder(raw, folder) {
  const target = String(folder).toLowerCase();
  return parseFolderList(raw)
    .filter((f) => f.toLowerCase() !== target)
    .join(", ");
}

module.exports = {
  parseFolderList,
  isInFolderList,
  coveringFolder,
  addFolder,
  removeFolder,
};
