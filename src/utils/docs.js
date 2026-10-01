"use strict";

const obsidian_1 = require("obsidian");

// Open a documentation page: in an Obsidian tab through the core Web viewer when
// it is available (desktop, plugin enabled), otherwise in the system browser.
// An already-open guide tab is reused so repeated clicks don't pile up tabs.
async function openDoc(app, url) {
  try {
    const webviewer = app.internalPlugins?.getPluginById?.("webviewer");
    if (obsidian_1.Platform.isDesktopApp && webviewer?.enabled) {
      const host = new URL(url).host;
      const existing = app.workspace
        .getLeavesOfType("webviewer")
        .find((l) => {
          try {
            return new URL(l.getViewState().state?.url).host === host;
          } catch {
            return false;
          }
        });
      const leaf = existing || app.workspace.getLeaf("tab");
      await leaf.setViewState({
        type: "webviewer",
        state: { url, navigate: true },
        active: true,
      });
      app.workspace.revealLeaf(leaf);
      return;
    }
  } catch (e) {
    // Fall through to the browser.
  }
  window.open(url, "_blank");
}

module.exports = { openDoc };
