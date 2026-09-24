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
1. Open Obsidian **Settings** → **Community Plugins**.
2. Search for **Standard Garden**.
3. Click **Install**, then **Enable**.

👉 **Or jump straight into Obsidian: [Install Standard Garden](obsidian://show-plugin?id=standard-garden)**

### Manual Installation
1. Download the latest release (`main.js`, `manifest.json`, `styles.css`) from the [Releases](https://github.com/ZeFish/obsidian-standard-garden/releases) page.
2. Place them inside your vault at `.obsidian/plugins/standard-garden/`.
3. Reload Obsidian and enable the plugin.

## 📖 Usage & Frontmatter

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

## ⌨️ Commandes Obsidian (Command Palette)

Toutes les actions du jardin sont directement accessibles depuis la palette de commande (`Cmd + P` / `Ctrl + P`) :

| Commande | Action |
| :--- | :--- |
| **Standard Garden: Open Garden panel** | Ouvre le volet latéral Garden. |
| **Standard Garden: Open settings** | Ouvre l'onglet de réglages Standard Garden. |
| **Standard Garden: Plant seed (Publish current note)** | Publie ou met à jour la note active dans votre jardin en ligne. |
| **Standard Garden: Uproot seed (Remove from garden)** | Dé-publie la note active du jardin. |
| **Standard Garden: View live version** | Ouvre la version publique de la note dans le navigateur. |
| **Standard Garden: Copy live URL to clipboard** | Copie l'URL publique de la note dans le presse-papiers. |
| **Standard Garden: Copy short URL (garden-short) to clipboard** | Copie le lien court de partage (`stnd.gd/...`). |
| **Standard Garden: Share note (Open share dialog)** | Ouvre la boîte de dialogue de partage (liens Markdown, code iframe, URL directe). |
| **Standard Garden: Check garden publication status** | Vérifie si la note locale est synchronisée, modifiée ou dépassée par rapport au serveur. |
| **Standard Garden: Set visibility: Public** | Définit `visibility: public` sur la note. |
| **Standard Garden: Set visibility: Unlisted** | Définit `visibility: unlisted` sur la note. |
| **Standard Garden: Set visibility: Private** | Définit `visibility: private` sur la note. |
| **Standard Garden: Cycle visibility (Public / Unlisted / Private)** | Alterne séquentiellement la visibilité de la note. |
| **Standard Garden: Tend the garden (Sync all notes)** | Lance une synchronisation complète du coffre avec le jardin. |
| **Standard Garden: Harvest seeds (Download new notes from garden)** | Télécharge les notes créées en ligne absentes de votre coffre local. |
| **Standard Garden: Prune garden (Clean up unpublished notes)** | Nettoie les notes en ligne dont le fichier local a été supprimé ou dé-publié. |
| **Standard Garden: Ask Hyphe** | Ouvre le modal pour interroger l'IA Hyphe (recherche en ligne parmi vos notes publiées sur standard.garden). |
| **Standard Garden: Set note theme** | Ouvre un sélecteur flou pour choisir l'un des 27 thèmes du design system. |
| **Standard Garden: Reset note styling (Clear design tokens)** | Nettoie les propriétés de tokens CSS de la note pour revenir aux styles par défaut. |
| **Standard Garden: Tend the Mycelium (Link mentions)** | Analyse et propose des liens sémantiques entre concepts non liés. |

## 🔮 Future AI Directions / Development Ideas

Here are additional AI integration ideas made possible by the Cloudflare Workers AI + Vectorize stack:

1. **Editor Writing Copilot**: Shortcuts or commands to generate summaries, brainstorm content, or autocomplete text in the active note.
2. **Automatic Metadata Generation**: Auto-suggested tags and intelligent frontmatter structuring based on text analysis.
3. **Live Link Suggestions (Mycelium Autopilot)**: A panel showing potential semantic links to other notes in your garden in real time while writing.

## 🏗️ Development

Garden relies on the `@stnd/styles` and `@stnd/themes` packages.

Important: Always build the plugin before testing or deploying. Use pnpm (preferred) to ensure workspace-linked packages are resolved correctly.

To build and deploy the plugin locally:

```bash
pnpm install       # install workspace deps
pnpm build         # bundle and deploy to your local Obsidian vault
```

The build script bundles JS/CSS into `dist/` and (when possible) deploys the plugin into the configured vault path (see `build.js`).

### Performance note

Theme/frontmatter refresh is intentionally scoped to the active note (and the currently selected theme note) to avoid visual stutter while typing.
Text Trim is scoped to reading/preview surfaces and does not apply to `markdown-source-view`.

## 💬 Questions & Support

Have a question, feedback, or need help cultivating your garden?
- **Email:** [hello@standard.garden](mailto:hello@standard.garden)
- **Web:** [standard.garden](https://standard.garden) · [Gardener's Guide](https://standard.garden/guide)
- **Issues & Discussions:** [GitHub Issues](https://github.com/ZeFish/obsidian-standard-garden/issues)

## License

MIT

