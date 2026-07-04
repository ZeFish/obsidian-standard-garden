# Standard Garden

The modern web is noisy, chaotic, and sterile. We are constantly bombarded by feeds, notifications, and generic interfaces that treat writing as fleeting content rather than knowledge.

[standard.garden](https://standard.garden) is an antidote to this noise. It is a minimalist, poetic publishing platform designed as a quiet digital ecosystem. By focusing on timeless typography, organic color palettes, and natural connections between ideas, it provides a sanctuary where your thoughts can take root and grow at their own pace.

This plugin is your **local greenhouse**. It transforms your Obsidian vault into an artisan's toolkit that shares the exact same visual DNA and philosophy as the publishing platform, allowing you to sculpt your writing environment and tend to your thoughts before sharing them with the world.

---

## 🪚 The Artisan Tools

Standard Garden bridges your local Obsidian vault with our curated design system. It provides a suite of silent tools designed to help your ideas flourish without distracting you from your writing:

- **The Gatehouse**: Publish your polished notes directly to the web with a single click. Your thoughts remain entirely local until you decide they are ready to bloom.
- **Woodcuts (Design System)**: Instantly change the aesthetic and mood of individual notes. Cultivate different atmospheres depending on what you are writing.
- **The Mycelium Engine**: A quiet companion that uncovers hidden connections and unlinked mentions naturally as you write, encouraging you to weave your ideas together.
- **Seedbeds**: Automate the organization of your vault. When a seedling (note) is planted in a specific folder, its metadata is automatically structured.
- **Smart Snippets**: Manage CSS snippets effortlessly to customize the grain of your vault without restarting.

## 🔒 Privacy & Data Usage

Obsidian is a local-first application, and Garden respects that philosophy. 

- **By Default**: The plugin operates entirely locally. No data leaves your machine. The design system, themes, and CSS injections are all processed directly within your local Obsidian vault.
- **Publishing (Opt-in)**: If you choose to link a `standard.garden` account, the plugin can publish your notes to the web. 
  - **What is sent**: Only the notes you explicitly mark with `publish: true` in their frontmatter, along with any locally embedded images they contain.
  - **Where it is sent**: Data is transmitted securely to the `standard.garden` API.
  - **Control**: You can unpublish a note at any time via the command palette, which removes it from the remote server immediately. Authentication is handled effortlessly via secure tokens.

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

## 📖 Usage

Use the frontmatter of any note to control its appearance and publishing status:

```yaml
---
theme: booky
cssclasses: [my-custom-class]
publish: true
---
```

## 🏗️ Development

Garden relies on the `@stnd/styles` and `@stnd/themes` packages. To build the plugin locally:

```bash
pnpm install
pnpm run build
```

## License

MIT
