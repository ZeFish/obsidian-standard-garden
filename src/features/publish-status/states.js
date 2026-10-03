"use strict";

// The Garden status vocabulary, shared by the title-bar icon, its menu and the
// legend. One mark for every state — the four squares (see ../../brand.js), so
// it reads as "the Garden" at a glance — and the squares AND the COLOUR say
// where the note stands: filled squares are planted, outlined ones are not. `desc` is the
// plain-language line shown in grey at the top of the menu and in the legend;
// `attention` marks the states that ask the person to do something, which get
// a small dot as well, so the signal does not rest on colour alone.

const ICON = "stnd-garden";

const STATES = {
  disconnected: {
    icon: "stnd-garden-local",
    color: "var(--stnd-status-local)",
    label: "Not connected",
    desc: "Connect your Standard Garden account to publish notes from here.",
  },
  unpublished: {
    icon: "stnd-garden-local",
    color: "var(--stnd-status-local)",
    label: "Local",
    desc: "This note lives only in your vault. Publish it to put it in your garden.",
  },
  pending: {
    icon: "stnd-garden-queued",
    color: "var(--stnd-status-pending)",
    label: "Queued",
    desc: "Marked to publish. It goes online at the next sync, or publish it now.",
  },
  synced: {
    icon: "stnd-garden",
    color: "var(--stnd-status-synced)",
    label: "Synced",
    desc: "Live in your garden, identical to this note.",
  },
  changed: {
    icon: "stnd-garden-changed",
    color: "var(--stnd-status-modified)",
    label: "Modified",
    desc: "You edited this note since it was published. Publish to update the online copy.",
    attention: true,
  },
  outdated: {
    icon: "stnd-garden-outdated",
    color: "var(--stnd-status-outdated)",
    label: "Outdated",
    desc: "The online version is newer than this note. Pull it, or publish yours over it.",
    attention: true,
  },
  desynced: {
    icon: "stnd-garden-unpublished",
    color: "var(--stnd-status-desynced)",
    label: "Unpublished (online)",
    desc: "Publishing is off for this note, but it is still live. Remove it, or publish again.",
    attention: true,
  },
};

// Older frontmatter-derived keys that can still reach the renderers.
STATES.local = STATES.unpublished;
STATES.public = STATES.synced;
STATES.unlisted = STATES.synced;
STATES.private = STATES.synced;

// What the legend lists, in the order a note usually travels through them.
const LEGEND_ORDER = ["unpublished", "pending", "synced", "changed", "outdated", "desynced"];

// How a published note's visibility changes what "Published" means.
const VISIBILITY_DESC = {
  public: "Live in your garden, identical to this note.",
  unlisted: "Live, but reachable only through its direct link.",
  private: "Live, but visible only to you.",
};

module.exports = { STATES, LEGEND_ORDER, VISIBILITY_DESC, ICON };
