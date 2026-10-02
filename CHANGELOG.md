# Changelog

All notable changes to the Standard Garden Obsidian plugin.
Backfilled from git history; versions with no user-facing change are omitted. New entries are written by the release workflow.

## 0.1.45 — 2026-10-02

### Added

- The design system and the editor suggestions are off on a new install, and switch on without a restart

## 0.1.44 — 2026-10-02

### Added

- The first publish asks once and shows the result, and a lost connection offers to reconnect

### Fixed

- The remaining French messages are English, and the editor suggestion badges are colored again

## 0.1.43 — 2026-10-02

### Fixed

- Resolve css lint warnings and eliminate !important

## 0.1.41 — 2026-10-02

### Fixed

- Keep the device id only in Obsidian's own device storage

## 0.1.40 — 2026-10-02

### Added

- One sprout icon colored by status, a menu that explains it, and a panel that starts with Connect

### Fixed

- Only accept a connection that Obsidian started, and give each device its own key

## 0.1.35 — 2026-10-01

### Added

- Skip unchanged notes on sync, surface notes to download

### Changed

- Use canonical @stnd/utils tokens and schemas instead of hardcoded duplicates
- Slim top status indicator to 1px with soft ambient glow
- Use full continuous 1px line with ambient glow for status indicator

### Fixed

- Throttle and paginate ::feed and ::list to prevent mobile UI freezes
- Support index in isRootNote and auto-verify admin custom domain

### Performance

- Stop per-file work on metadata events (chisel + garden), fix stacked mycelium footers

## 0.1.32 — 2026-09-24

### Fixed

- Clarify visibility privacy, AI role, vault-wide settings, and remove help button redundancy

## 0.1.31 — 2026-09-24

### Added

- Organize panel into 4 collapsible sections: Garden, Roots, Mycelium, Design

## 0.1.30 — 2026-09-24

### Fixed

- Rename Network Resonances to Network Echoes

## 0.1.28 — 2026-09-24

### Added

- Move gradient indicator from bottom of note to top of panel

## 0.1.27 — 2026-09-24

### Added

- Prominent primary action button on top and tactile utility toolbar

## 0.1.26 — 2026-09-24

### Fixed

- Fix isDesynced variable scope in panel rendering

## 0.1.25 — 2026-09-24

### Added

- Purge fake status, decouple sync state from visibility, and add red desynced alert state

## 0.1.24 — 2026-09-24

### Added

- Add status and color guide in settings and side panel

## 0.1.23 — 2026-09-24

### Added

- Add titlebar menu actions and sync to side panel

## 0.1.22 — 2026-09-24

### Fixed

- Unify status colors across titlebar icon, side panel badge, and bottom bar

## 0.1.21 — 2026-09-24

### Fixed

- Unify publish status detection and resolve null getFileCache desync

## 0.1.20 — 2026-09-24

### Fixed

- Enable mobile touch scrolling and vertical scroll container on panel

## 0.1.18 — 2026-09-24

### Fixed

- Ensure status indicator and panel react reliably to file-open and resolve

## 0.1.11 — 2026-09-23

### Fixed

- Address community review feedback on dependencies, yaml & css

## 0.1.10 — 2026-09-23

### Changed

- Bump theme package versions and fix tab styling

## 0.1.9 — 2026-09-23

### Fixed

- Open panel only once on first install

## 0.1.8 — 2026-09-23

### Added

- Expose all garden actions in command palette

## 0.1.7 — 2026-09-23

### Added

- Support garden-* frontmatter standard and horizon effect in Hyphe modal

## 0.1.5 — 2026-09-23

### Added

- Migrate obsidian-standard-garden to monorepo and add sync workflow
- Document tokens, fix oklch neutral mix & scrollbar styling
- Add Clean up unpublished notes command + modal
- Add live scrolling sync log with detailed error reporting and copy button
- Add excludedFolders filter (excludes Utopie by default)
- Unifier le rendu des cartes de notes, corriger T49/T50 et épurer les liaisons mycéliennes
- Bulk publish résilient — cache, throttle adaptatif, réconciliation exacte

### Changed

- Restructure plugins and status publish flow

### Fixed

- Stop publishing dead image URLs
- Right-size srcset and clean up short links
- Route every slug through slugify
- Stop overwriting the publish date on publish
- Stabilize publish slug via fm.permalink
- Show task breakdown in sync modal
- Prevent SyntaxError crash on HTML responses and encode publish slugs
- Add reading-view ghost links, fix compost footer, merge panel tabs
- Tab/right-split backgrounds, callout spacing
