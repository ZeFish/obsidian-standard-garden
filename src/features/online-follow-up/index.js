"use strict";

const obsidian_1 = require("obsidian");
const { isPublishIntent } = require("../../constants.js");
const { parseFolderList, isInFolderList } = require("../../utils/folders.js");
const { fetchWithRetry } = require("../garden/index.js");
const { FollowUpModal } = require("./follow-up-modal.js");

// ─── Online follow-up ─────────────────────────────────────────────────────────
// A note that is live in the garden must not be forgotten there when it leaves
// the vault. This listens for the three ways that happens — the file is deleted,
// moved out (or into an excluded folder), or switched off with `publish: false` —
// and asks, once, whether to remove it online too.
//
// Editing a note's CONTENT is deliberately not followed: that stays the person's
// click on the icon, so an unfinished draft never goes online by itself.
//
// Obsidian says nothing when a file is deleted while it is closed (or moved by
// the Finder), so the plugin keeps a small ledger of the notes it has seen online
// (settings.onlineLedger, keyed by the note's short id) and compares it with the
// vault at start-up. "Keep online" is remembered (settings.declinedFollowUp).

const SETTLE_MS = 2500; // wait for typing to stop before judging a frontmatter change
const FLUSH_MS = 800; // gather a burst of events into one window
const SAVE_MS = 3000;
const START_DELAY_MS = 6000; // let the metadata cache finish indexing the vault

function describe(file, fm) {
  const short = String(fm?.["garden-short"] || "").match(/stnd\.gd\/([A-Za-z0-9_-]+)/);
  const nanoId = short ? short[1] : null;
  const url = String(fm?.["garden-url"] || "");
  const urlMatch = url.match(/\/@[^/]+\/(.+?)\/?$/);
  const fmSlug = fm?.permalink ?? fm?.slug;
  let slug = null;
  if (fmSlug != null) {
    const clean = String(fmSlug).replace(/^\/+|\/+$/g, "");
    slug = clean === "" ? "~root" : clean;
  } else if (urlMatch) {
    try { slug = decodeURIComponent(urlMatch[1]); } catch { slug = urlMatch[1]; }
  }
  const online = !!(nanoId || url);
  const key = nanoId || (slug ? `slug:${slug}` : null);
  return { nanoId, slug, online, key, title: file.basename };
}

class OnlineFollowUpFeature {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
    this.settleTimers = new Map(); // path -> timeout
    this.pending = new Map(); // key -> candidate
    this.flushTimer = null;
    this.saveTimer = null;
    this.asking = false;
  }

  get enabled() {
    return this.plugin.settings.followUpOnline !== false && !!this.plugin.settings.apiKey;
  }
  get ledger() {
    if (!this.plugin.settings.onlineLedger) this.plugin.settings.onlineLedger = {};
    return this.plugin.settings.onlineLedger;
  }
  get declined() {
    if (!this.plugin.settings.declinedFollowUp) this.plugin.settings.declinedFollowUp = {};
    return this.plugin.settings.declinedFollowUp;
  }

  isExcluded(path) {
    return isInFolderList(path, parseFolderList(this.plugin.settings.excludedFolders));
  }
  isNote(file) {
    return file instanceof obsidian_1.TFile && file.extension === "md";
  }
  frontmatterOf(file) {
    return this.app.metadataCache.getFileCache(file)?.frontmatter || {};
  }
  entryByPath(path) {
    for (const [key, entry] of Object.entries(this.ledger)) {
      if (entry.path === path) return { key, entry };
    }
    return null;
  }
  save() {
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => this.plugin.saveSettings(), SAVE_MS);
  }

  async load() {
    const { vault, metadataCache, workspace } = this.app;
    this.plugin.registerEvent(
      metadataCache.on("changed", (file) => {
        if (!this.isNote(file) || !this.enabled) return;
        clearTimeout(this.settleTimers.get(file.path));
        this.settleTimers.set(
          file.path,
          setTimeout(() => this.settle(file.path), SETTLE_MS),
        );
      }),
    );
    this.plugin.registerEvent(
      vault.on("delete", (file) => {
        if (!this.isNote(file) || !this.enabled) return;
        const hit = this.entryByPath(file.path);
        if (hit) this.queue(hit.key, hit.entry, "was deleted from your vault", false);
      }),
    );
    this.plugin.registerEvent(
      vault.on("rename", (file, oldPath) => {
        if (!this.isNote(file) || !this.enabled) return;
        const hit = this.entryByPath(oldPath);
        if (!hit) return;
        if (this.isExcluded(file.path)) {
          this.queue(hit.key, { ...hit.entry, path: oldPath }, "was moved to a folder the garden ignores", false);
        } else {
          hit.entry.path = file.path; // a plain move or rename: same note
          this.save();
        }
      }),
    );
    workspace.onLayoutReady(() => setTimeout(() => this.startupCheck(), START_DELAY_MS));
  }

  unload() {
    for (const t of this.settleTimers.values()) clearTimeout(t);
    clearTimeout(this.flushTimer);
    clearTimeout(this.saveTimer);
  }

  // A note changed and typing stopped: is it still meant to be online?
  settle(path) {
    this.settleTimers.delete(path);
    if (!this.enabled) return;
    const file = this.app.vault.getFileByPath(path);
    if (!file) return;
    const fm = this.frontmatterOf(file);
    const hit = this.entryByPath(path);
    if (hit && !isPublishIntent(fm) && !this.isExcluded(path)) {
      this.queue(hit.key, hit.entry, "is no longer set to publish", false);
      return;
    }
    this.track(file, fm);
  }

  // Remember a note that is online, and forget a refusal once it is wanted again.
  track(file, fm) {
    if (this.isExcluded(file.path)) return;
    const d = describe(file, fm);
    if (!d.online || !d.key) return;
    const known = this.ledger[d.key];
    if (!known || known.path !== file.path || known.slug !== d.slug) {
      this.ledger[d.key] = { slug: d.slug, title: d.title, path: file.path };
      this.save();
    }
    if (isPublishIntent(fm) && this.declined[d.key]) {
      delete this.declined[d.key];
      this.save();
    }
  }

  // Notes seen online that have left the vault while the plugin was not looking.
  startupCheck() {
    if (!this.enabled) return;
    const present = new Set();
    for (const file of this.app.vault.getMarkdownFiles()) {
      if (this.isExcluded(file.path)) continue;
      const fm = this.frontmatterOf(file);
      const d = describe(file, fm);
      if (d.key) present.add(d.key);
      this.track(file, fm); // fill the ledger for notes published before this feature existed
    }
    for (const [key, entry] of Object.entries(this.ledger)) {
      if (present.has(key)) continue;
      const there = this.app.vault.getFileByPath(entry.path);
      const reason = there && this.isExcluded(entry.path)
        ? "was moved to a folder the garden ignores"
        : "is no longer in your vault";
      if (there && !this.isExcluded(entry.path)) continue; // still here, just no short id yet
      this.queue(key, entry, reason, true);
    }
  }

  queue(key, entry, reason, startup) {
    if (this.declined[key]) return;
    this.pending.set(key, { key, slug: entry.slug, title: entry.title, path: entry.path, reason, startup });
    clearTimeout(this.flushTimer);
    this.flushTimer = setTimeout(() => this.ask(), FLUSH_MS);
  }

  async remoteNotes() {
    const res = await fetchWithRetry(`${this.plugin.settings.apiUrl}/publish`, {
      method: "GET",
      headers: { "x-api-key": this.plugin.settings.apiKey },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.notes || [];
  }

  async ask() {
    if (this.asking || !this.pending.size || !this.enabled) return;
    this.asking = true;
    const batch = [...this.pending.values()];
    this.pending.clear();
    try {
      // Only what is really still online is worth a question.
      const remote = await this.remoteNotes();
      if (!remote) return; // offline: the ledger keeps them, start-up asks again
      const byNano = new Map(remote.filter((n) => n.nano_id).map((n) => [n.nano_id, n]));
      const bySlug = new Map(remote.map((n) => [n.slug, n]));
      const live = [];
      for (const c of batch) {
        const hit = (!c.key.startsWith("slug:") && byNano.get(c.key)) || (c.slug != null && bySlug.get(c.slug));
        if (!hit) {
          delete this.ledger[c.key]; // already gone online
          continue;
        }
        live.push({ ...c, slug: hit.slug });
      }
      this.save();
      if (!live.length) return;

      await new Promise((resolve) => {
        const modal = new FollowUpModal(this.app, live, {
          checked: !live[0].startup && live.length <= 5,
          onRemove: async (chosen, kept) => {
            await this.removeOnline(chosen);
            this.keep(kept);
            resolve();
          },
          onKeep: (kept) => {
            this.keep(kept);
            resolve();
          },
        });
        modal.onLater = resolve; // closed with Escape: nothing decided
        modal.open();
      });
    } catch (e) {
      console.error("[Standard] Online follow-up failed:", e);
    } finally {
      this.asking = false;
      if (this.pending.size) this.flushTimer = setTimeout(() => this.ask(), FLUSH_MS);
    }
  }

  keep(items) {
    for (const c of items) this.declined[c.key] = true;
    if (items.length) this.save();
  }

  async removeOnline(items) {
    const garden = this.plugin.garden;
    let removed = 0;
    let failed = 0;
    for (let i = 0; i < items.length; i++) {
      const c = items[i];
      // The file only exists, and is only touched, when the note was switched off:
      // the plugin then clears its publish keys from the frontmatter.
      const file = c.reason === "is no longer set to publish" ? this.app.vault.getFileByPath(c.path) : null;
      let ok = await garden.unpublishNote(file, c.slug);
      if (!ok && /429/.test(String(garden.lastError || ""))) {
        await new Promise((r) => setTimeout(r, 30000)); // the API allows 60 a minute
        ok = await garden.unpublishNote(file, c.slug);
      }
      if (ok) {
        removed++;
        delete this.ledger[c.key];
      } else {
        failed++;
      }
      if (items.length > 20) await new Promise((r) => setTimeout(r, 1100));
    }
    this.save();
    new obsidian_1.Notice(
      failed
        ? `Garden: ${removed} removed online, ${failed} could not be removed. Try again later.`
        : `Garden: ${removed} note${removed === 1 ? "" : "s"} removed from the garden.`,
      failed ? 8000 : 4000,
    );
  }
}

module.exports = { OnlineFollowUpFeature };
