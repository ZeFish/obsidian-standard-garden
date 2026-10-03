# Standard Garden

The modern web is noisy, chaotic, and sterile. We are constantly bombarded by feeds, notifications, and generic interfaces that treat writing as fleeting content rather than knowledge.

[standard.garden](https://standard.garden) is an antidote to this noise. It is a minimalist, poetic publishing platform designed as a quiet digital ecosystem. By focusing on timeless typography, organic color palettes, and natural connections between ideas, it provides a sanctuary where your thoughts can take root and grow at their own pace.

This plugin is your **local greenhouse**. It transforms your Obsidian vault into an artisan's toolkit that shares the exact same visual DNA and philosophy as the publishing platform, allowing you to sculpt your writing environment and tend to your thoughts before sharing them with the world.

---

## 🪚 The Atelier Interface

Standard Garden bridges your local Obsidian vault with our curated design system. The right sidebar panel provides an artisan's greenhouse organized into 4 collapsible sections:

- **1. Garden (Publishing Engine):** Instant note lifecycle status (*Local Draft*, *Public*, *Unlisted*, *Private*), prominent 1-click **Publish / Sync**, live note URL copy, and browser preview.
- **2. Roots (Privacy & Lifecycles):** Granular visibility controls (Public, Unlisted, Private), Compost expiration timers for ephemeral drafts, and vault-wide default preferences.
- **3. Mycelium (Network & AI):** Interconnected cross-vault backlinks, semantic echoes, and direct consultation with **🦉 Hyphe (AI Thinker)**.
- **4. Design (Aesthetic Atelier):** Curated classical temperaments (Humanist, Construct, Blueprint, Chronicle, Treatise, Exhibit...) with live display mirroring in Obsidian—what you see in your editor is exactly what readers see online.

## 🎨 Live Visual Mirroring: Obsidian as Your Visual Canvas

*Off by default, so enabling the plugin never changes how your notes look. Turn it on in **Settings → Standard Garden → Appearance → Standard Design System**.*

Standard Garden eliminates the gap between local note-taking and web publication:
- **Typographic Mirroring:** Whenever you change the temperament in frontmatter (`theme: humanist`, `theme: blueprint`, `theme: editorial`, `theme: academic`, `theme: international`, `theme: gallery`...) or pick a theme in the Design panel, Obsidian dynamically adopts the authentic fonts (*EB Garamond*, *Söhne*, *Newsreader*, *Instrument Sans*, *MonoLisa*) and typographic hierarchy.
- **Architectural WYSIWYG:** What you compose locally in Obsidian is rendered with the exact same margins, line heights, and atmospheric grace as on [standard.garden](https://standard.garden).

## 🔒 Privacy & Double Guardrail

Obsidian is a local-first application, and Standard Garden treats your Markdown files as sacred soil. 

- **By Default**: The plugin operates entirely locally. No data leaves your machine.
- **Strict Double Guardrail**: For a note to be published, both `publish: true` AND `visibility: public` (or `unlisted`) are required. Personal journals, work notes, and drafts in your excluded folders will never leave your machine.
- **Ask Hyphe (Cloud Assistant)**: Hyphe operates on `standard.garden` and only searches notes that you have explicitly published to your garden (`publish: true`). It has zero access to your unpublished local vault notes or offline drafts.

## 📦 Installation

### From the Obsidian Community Plugins
1. Open Obsidian **Settings** → **Community plugins**.
2. Search for **Standard Garden**.
3. Click **Install**, then **Enable**.

👉 **Or jump straight into Obsidian: [Install Standard Garden](obsidian://show-plugin?id=standard-garden)**

### With BRAT (to follow releases as they come out)
1. Install the **BRAT** plugin from Obsidian's Community Plugins.
2. Open BRAT's settings, choose **Add beta plugin**, and enter `ZeFish/obsidian-standard-garden`.

### Manual installation
1. Download the latest release (`main.js`, `manifest.json`, `styles.css`) from the [Releases](https://github.com/ZeFish/obsidian-standard-garden/releases) page.
2. Place them inside your vault at `.obsidian/plugins/standard-garden/`.
3. Reload Obsidian and enable the plugin in **Settings** → **Community plugins**.

### Then
Open the Garden panel (the four-square Garden mark in the left ribbon), press **Connect to Garden**, sign in in your browser, and you are back in Obsidian, connected.

## 📖 Usage & Frontmatter

> **Editor suggestions** (type `::` in a note to get suggestions for cards, columns, callouts and galleries) are also off by default. Turn them on in **Settings → Standard Garden → Appearance → Editor suggestions**.

### Standard Note Frontmatter
Control publishing and visibility directly from note frontmatter or the Garden panel:

```yaml
---
theme: humanist
publish: true
visibility: public # public | unlisted | private
permalink: my-note-slug
---
```

### Garden Profile Note (`permalink: /`)
The root note of your garden (`permalink: "/"`) acts as your garden homepage and defines garden-wide settings:

```yaml
---
permalink: /
garden-domain: notes.example.com
garden-brand: https://example.com/logo.svg   # or false to hide logo/brand
garden-favicon: https://example.com/icon.png
garden-avatar: https://example.com/avatar.png
garden-display-name: Francis
garden-launcher: true                # command palette for visitors
garden-mycelium: true                # participate in the semantic network
---
```

## ⌨️ Obsidian commands (Command palette)

Every garden action is in the command palette (`Cmd + P` / `Ctrl + P`):

| Command | What it does |
| :--- | :--- |
| **Standard Garden: Open Garden panel** | Opens the Garden side panel. |
| **Standard Garden: Open settings** | Opens the Standard Garden settings. |
| **Standard Garden: Plant seed (Publish current note)** | Publishes or updates the current note in your online garden. |
| **Standard Garden: Uproot seed (Remove from garden)** | Takes the current note offline. |
| **Standard Garden: View live version** | Opens the public version of the note in your browser. |
| **Standard Garden: Copy live URL to clipboard** | Copies the note's public URL. |
| **Standard Garden: Copy short URL (garden-short) to clipboard** | Copies the short share link (`stnd.gd/...`). |
| **Standard Garden: Share note (Open share dialog)** | Opens the share dialog (Markdown links, iframe code, direct URL). |
| **Standard Garden: Check garden publication status** | Tells you whether the local note is in sync, modified, or behind the server. |
| **Standard Garden: Set visibility: Public** | Sets `visibility: public` on the note. |
| **Standard Garden: Set visibility: Unlisted** | Sets `visibility: unlisted` on the note. |
| **Standard Garden: Set visibility: Private** | Sets `visibility: private` on the note. |
| **Standard Garden: Cycle visibility (Public / Unlisted / Private)** | Steps the note through the three visibilities. |
| **Standard Garden: Tend the garden (Sync all notes)** | Runs a full sync of your vault with your garden. |
| **Standard Garden: Harvest seeds (Download new notes from garden)** | Downloads the notes that exist online but not in your vault. |
| **Standard Garden: Prune garden (Clean up unpublished notes)** | Cleans up online notes whose local file was deleted or unpublished. |
| **Standard Garden: Ask Hyphe** | Opens the dialog to question the Hyphe AI (it searches the notes you published on standard.garden). |
| **Standard Garden: Set note theme** | Opens a picker for one of the 27 design system themes. |
| **Standard Garden: Reset note styling (Clear design tokens)** | Clears the note's CSS token properties to go back to the default styles. |
| **Standard Garden: Tend the Mycelium (Link mentions)** | Finds and suggests semantic links between unlinked concepts. |

## 🏗️ Development

Garden relies on the `@stnd/styles` and `@stnd/themes` packages.

Important: Always build the plugin before testing or deploying. Use pnpm (preferred) to ensure workspace-linked packages are resolved correctly.

To build and deploy the plugin locally:

```bash
pnpm install       # install workspace deps
pnpm build         # bundle and deploy to your local Obsidian vault
```

The build script bundles JS/CSS into `dist/` and (when possible) deploys the plugin into the configured vault path (see `build.js`).

## 💬 Questions & Support

Have a question, feedback, or need help cultivating your garden?
- **Email:** [hello@standard.garden](mailto:hello@standard.garden)
- **Web:** [standard.garden](https://standard.garden) · [Gardener's Guide](https://standard.garden/guide)
- **Issues & Discussions:** [GitHub Issues](https://github.com/ZeFish/obsidian-standard-garden/issues)

## License

MIT

