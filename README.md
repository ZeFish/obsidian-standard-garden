# Standard Garden

The modern web is noisy, chaotic, and sterile. We are constantly bombarded by feeds, notifications, and generic interfaces that treat writing as fleeting content rather than knowledge.

[standard.garden](https://standard.garden) is an antidote to this noise. It is a minimalist, poetic publishing platform designed as a quiet digital ecosystem. By focusing on timeless typography, organic color palettes, and natural connections between ideas, it provides a sanctuary where your thoughts can take root and grow at their own pace.

This plugin is your **local greenhouse**. It transforms your Obsidian vault into an artisan's toolkit that shares the exact same visual DNA and philosophy as the publishing platform, allowing you to sculpt your writing environment and tend to your thoughts before sharing them with the world.

---

## 🪚 The Artisan Tools

Standard Garden bridges your local Obsidian vault with our curated design system. It provides a suite of silent tools designed to help your ideas flourish without distracting you from your writing:

- **The Gatehouse**: Publish your polished notes directly to the web with a single click. Your thoughts remain entirely local until you decide they are ready to bloom.
- **Woodcuts (Design System)**: Instantly change the aesthetic and mood of individual notes. Cultivate different atmospheres depending on what you are writing.
- **Ask Hyphe (Semantic Intelligence)**: Ask questions directly to Hyphe against your published notes. Hyphe runs in the cloud on `standard.garden` and retrieves semantically similar notes from your published digital garden via Cloudflare Vectorize, generating answers grounded only in your published knowledge. Unpublished local notes and offline drafts are strictly private and never sent or indexed.
- **Seedbeds**: Automate the organization of your vault. When a seedling (note) is planted in a specific folder, its metadata is automatically structured.
- **Smart Snippets**: Manage CSS snippets effortlessly to customize the grain of your vault without restarting.
- **E-ink / Boox Support**: Optimize Obsidian for E-ink screens (like Onyx Boox) with custom high-contrast CSS (animations/transitions disabled) and physical button navigation mapping.

## 🔒 Privacy & Data Usage

Obsidian is a local-first application, and Garden respects that philosophy. 

- **By Default**: The plugin operates entirely locally. No data leaves your machine. The design system, themes, and CSS injections are all processed directly within your local Obsidian vault.
- **Publishing (Opt-in)**: If you choose to link a `standard.garden` account, the plugin can publish your notes to the web. 
  - **What is sent**: Only the notes you explicitly mark with `publish: true` in their frontmatter, along with any locally embedded images they contain.
  - **Where it is sent**: Data is transmitted securely to the `standard.garden` API.
  - **Control**: You can unpublish a note at any time via the command palette, which removes it from the remote server immediately. Authentication is handled effortlessly via secure tokens.
- **Ask Hyphe (Cloud Assistant)**: When you query Hyphe, your prompt is sent securely to the `standard.garden` AI service. Hyphe operates in the cloud and only searches notes that have been explicitly published to your garden (`publish: true`). It has zero access to your unpublished local vault notes or offline drafts.

## 🛠️ Architecture

Garden implements the **Standard adapter** for Obsidian. It is one piece of a layered design system that spans the web, IDEs, and Obsidian:

```text
Layer 3: User overrides (frontmatter tokens — per-note escape hatch)
Layer 2: Themes (@stnd/themes — bundled, compiled from tokens.yaml + theme.scss)
Layer 1: Adapter (.stnd-adapter — this plugin — Obsidian DOM mapping only)
Layer 0: Framework (@stnd/styles — the golden ratio, the rules, same everywhere)
```

The body class `.stnd-adapter` activates the adapter. When disabled, the plugin acts purely as a publishing engine (The Gatehouse) with zero visual changes to your workspace.

## 📦 Installation

### From the Obsidian Community Plugins
*(Pending review)*

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

## License

MIT
