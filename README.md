# Standard Garden

Standard Garden bridges your Obsidian vault with a beautifully crafted design system, bringing timeless typography and cohesive, organic atmospheres to your writing environment.

It provides a suite of silent tools designed to help your thoughts take root without distracting you:
- **The Gatehouse**: Publish your polished notes directly to the web.
- **Woodcuts (Design System)**: Instantly change the aesthetic and mood of individual notes.
- **The Mycelium Engine**: Uncover hidden connections and unlinked mentions naturally as you write.
- **Seedbeds**: Automate the organization and metadata of your notes.
- **Smart Snippets**: Manage CSS snippets effortlessly to customize the grain of your vault.

Craft a sanctuary for your mind, away from the noise of the modern web.

## Architecture — the Adapter model

Garden implements the **Standard adapter** for Obsidian. It is one piece of a layered design
system that spans the web, IDEs, and Obsidian:

```
Layer 3: User overrides (frontmatter tokens — per-note escape hatch)
Layer 2: Themes (@stnd/themes — bundled, compiled from tokens.yaml + theme.scss)
Layer 1: Adapter (.stnd-adapter — this plugin — Obsidian DOM mapping only)
Layer 0: Framework (@stnd/styles — the golden ratio, the rules, same everywhere)
```

**The rule:** the adapter contains **only** DOM mapping — translating Standard variables to
Obsidian-specific selectors (`--file-line-width`, `.markdown-preview-view`, `.workspace-split`,
etc.). No design decisions (colors, font sizes, spacing) live in the adapter. Those belong to
the framework (Layer 0) or the theme (Layer 2).

The body class `.stnd-adapter` (toggled in Settings → Design System) activates the adapter.
When off, the plugin is purely a publishing tool — zero visual changes to the workspace.

Themes are fully bundled from the `@stnd/themes` npm package at build time. The `theme:`
frontmatter key selects a theme at runtime. See the [monorepo README](https://github.com/ZeFish/utopie)
for the theme pipeline and the full architecture spec.



## 🔒 Privacy & Data Usage

Obsidian is a local-first application, and Garden respects that philosophy. 

- **By Default**: Garden operates entirely locally. No data leaves your machine. The design system, themes, and CSS injection are all processed directly within Obsidian.
- **Publishing (Opt-in)**: If you choose to link a `standard.garden` account, the plugin can publish your notes to the web. 
  - **What is sent**: Only the notes you explicitly mark with `publish: true` in their frontmatter, along with any locally embedded images they contain.
  - **Where it is sent**: Data is transmitted securely to the `standard.garden/api` endpoints.
  - **Control**: You can unpublish a note at any time via the command palette, which removes it from the remote server immediately.

## Installation

### From the Obsidian Community Plugins
*(Pending review)*

### Manual Installation
1. Download the latest release (`main.js`, `manifest.json`, `styles.css`) from the [Releases](https://github.com/ZeFish/obsidian-garden/releases) page.
2. Place them inside your vault at `.obsidian/plugins/garden/`.
3. Reload Obsidian and enable the plugin.

## Usage

Use the frontmatter of any note to control its appearance:

```yaml
---
theme: booky
cssclasses: [my-custom-class]
publish: true
---
```

## Development

Garden relies on the `@stnd/styles` and `@stnd/themes` packages. To build the plugin locally:

```bash
pnpm install
pnpm run build
```

## License

MIT
