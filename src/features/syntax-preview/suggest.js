"use strict";

const { EditorSuggest, setTooltip } = require("obsidian");

const DIRECTIVES = [
  {
    id: "feed",
    name: "::feed",
    category: "Feeds",
    syntax: "::feed #tag",
    description: "Feed of visual cards with a cover image, relative date and markdown excerpt.",
    insertText: "::feed #",
    cursorOffset: 8,
  },
  {
    id: "list",
    name: "::list",
    category: "Feeds",
    syntax: "::list #tag",
    description: "Compact bulleted list of the notes with the given tag.",
    insertText: "::list #",
    cursorOffset: 8,
  },
  {
    id: "callout",
    name: "::callout",
    category: "Blocks",
    syntax: "::callout note\n...\n::end",
    description: "Styled callout block with an icon (note, tip, info, warning, danger, success...).",
    insertText: "::callout note\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "toggle",
    name: "::toggle",
    category: "Blocks",
    syntax: "::toggle Title\n...\n::end",
    description: "Collapsible accordion section (<details>) with a clickable title.",
    insertText: "::toggle Title\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "columns",
    name: "::columns",
    category: "Layout",
    syntax: "::columns 2\nColumn 1\n---\nColumn 2\n::end",
    description: "Responsive columns separated by horizontal rules (---).",
    insertText: "::columns 2\nColumn 1\n---\nColumn 2\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "cards",
    name: "::cards",
    category: "Layout",
    syntax: "::cards\nCard 1\n---\nCard 2\n::end",
    description: "Grid of independent framed cards separated by ---.",
    insertText: "::cards\nCard 1\n---\nCard 2\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "grid",
    name: "::grid",
    category: "Layout",
    syntax: "::grid\nItem 1\n---\nItem 2\n::end",
    description: "Fluid grid that adapts to the number of cells separated by ---.",
    insertText: "::grid\nItem 1\n---\nItem 2\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "split",
    name: "::split",
    category: "Layout",
    syntax: "::split 8/4\nWidth 8\n---\nWidth 4\n::end",
    description: "Asymmetric layout on a 12-column grid (e.g. 8/4, 6/6, 4/8).",
    insertText: "::split 8/4\nWidth 8\n---\nWidth 4\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "hero",
    name: "::hero",
    category: "Smart",
    syntax: "::hero\nEnlarged paragraph",
    description: "Sets the next paragraph in large Hero type.",
    insertText: "::hero\n",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "hero-block",
    name: "::hero-block",
    category: "Blocks",
    syntax: "::hero-block center\n...\n::end",
    description: "Hero container block with text alignment (center, left, right).",
    insertText: "::hero-block center\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "feature",
    name: "::feature",
    category: "Smart",
    syntax: "::feature\nFeatured paragraph",
    description: "Highlights the next paragraph in a featured style.",
    insertText: "::feature\n",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "feature-block",
    name: "::feature-block",
    category: "Blocks",
    syntax: "::feature-block\n...\n::end",
    description: "Highlighted container block with a contrasting background and a light border.",
    insertText: "::feature-block\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "editorial",
    name: "::editorial",
    category: "Smart",
    syntax: "::editorial\nEditorial paragraph",
    description: "Editorial feature-article typography for the next paragraph.",
    insertText: "::editorial\n",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "excerpt",
    name: "::excerpt",
    category: "Smart",
    syntax: "::excerpt\nLead-in text",
    description: "Introductory excerpt or lead-in text, set off from the body.",
    insertText: "::excerpt\n",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "card",
    name: "::card",
    category: "Blocks",
    syntax: "::card\n...\n::end",
    description: "Wraps the content in a surface card with a background and border.",
    insertText: "::card\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "small",
    name: "::small",
    category: "Blocks",
    syntax: "::small\n...\n::end",
    description: "Smaller text for footnotes or secondary remarks.",
    insertText: "::small\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "video",
    name: "::video",
    category: "Media",
    syntax: "::video https://...",
    description: "Responsive video player (YouTube, Vimeo, or a direct MP4 file).",
    insertText: "::video ",
    cursorOffset: 8,
  },
  {
    id: "image",
    name: "::image",
    category: "Media",
    syntax: "::image\n![Photo](url)\nCaption\n::end",
    description: "Figure with an image and a built-in typeset caption.",
    insertText: "::image\n![Image](url)\nCaption\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 8,
  },
  {
    id: "gallery",
    name: "::gallery",
    category: "Media",
    syntax: "::gallery\n...\n---\n...\n::end",
    description: "Responsive image gallery laid out in columns.",
    insertText: "::gallery\n![Image 1](url)\n---\n![Image 2](url)\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "button",
    name: "::button",
    category: "Action",
    syntax: "::button primary\n[Text](https://)\n::end",
    description: "Turns a markdown link into a clickable call-to-action button.",
    insertText: "::button primary\n[Button](https://)\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 1,
  },
  {
    id: "download",
    name: "::download",
    category: "Action",
    syntax: "::download Label",
    description: "Download button for a document or attachment.",
    insertText: "::download Download",
    cursorOffset: 11,
  },
  {
    id: "space",
    name: "::space",
    category: "Layout",
    syntax: "::space medium",
    description: "Vertical spacing (small, medium, large, xlarge).",
    insertText: "::space medium",
    cursorOffset: 14,
  },
  {
    id: "note",
    name: "::note",
    category: "Alerts",
    syntax: "::note Message",
    description: "Discreet informational note in a side box (aside).",
    insertText: "::note ",
    cursorOffset: 7,
  },
  {
    id: "alert",
    name: "::alert",
    category: "Alerts",
    syntax: "::alert Message",
    description: "Framed contextual alert message.",
    insertText: "::alert ",
    cursorOffset: 8,
  },
  {
    id: "warning",
    name: "::warning",
    category: "Alerts",
    syntax: "::warning Message",
    description: "Warning or recommended precaution.",
    insertText: "::warning ",
    cursorOffset: 10,
  },
  {
    id: "error",
    name: "::error",
    category: "Alerts",
    syntax: "::error Message",
    description: "Critical error message or failure notice.",
    insertText: "::error ",
    cursorOffset: 8,
  },
  {
    id: "success",
    name: "::success",
    category: "Alerts",
    syntax: "::success Message",
    description: "Confirmation or success message.",
    insertText: "::success ",
    cursorOffset: 10,
  },
  {
    id: "muted",
    name: "::muted",
    category: "Text",
    syntax: "::muted Text",
    description: "Faded text in a muted secondary color.",
    insertText: "::muted ",
    cursorOffset: 8,
  },
  {
    id: "subtle",
    name: "::subtle",
    category: "Text",
    syntax: "::subtle Text",
    description: "Understated text with subtle transparency.",
    insertText: "::subtle ",
    cursorOffset: 9,
  },
  {
    id: "widget",
    name: "::widget",
    category: "Components",
    syntax: "::widget WidgetName",
    description: "Embeds an interactive web widget.",
    insertText: "::widget ",
    cursorOffset: 9,
  },
  {
    id: "form",
    name: "::form",
    category: "Components",
    syntax: "::form contact\nName\nEmail\nMessage\n::end",
    description: "Interactive form with fields and a submit button.",
    insertText: "::form contact\nName\nEmail\nMessage\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
];

class StandardDirectiveSuggest extends EditorSuggest {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }

  onTrigger(cursor, editor, file) {
    const line = editor.getLine(cursor.line);
    const beforeCursor = line.slice(0, cursor.ch);

    // Matches `::` or `::query` preceded by line start, space, or blockquote `>`
    const match = beforeCursor.match(/(?:^|[\s>])(::([a-zA-Z0-9_-]*))$/);
    if (!match) return null;

    const fullTrigger = match[1]; // e.g. `::` or `::fe`
    const query = match[2];       // e.g. `` or `fe`
    const startCh = cursor.ch - fullTrigger.length;

    const info = {
      start: { line: cursor.line, ch: startCh },
      end: { line: cursor.line, ch: cursor.ch },
      query: query,
    };
    this.latestTriggerInfo = info;
    return info;
  }

  getSuggestions(context) {
    const query = (context.query || "").toLowerCase().trim();
    let results;

    if (!query) {
      results = DIRECTIVES;
    } else {
      results = DIRECTIVES.filter((d) =>
        d.id.toLowerCase().includes(query) ||
        d.name.toLowerCase().includes(query) ||
        d.category.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
      );
    }

    // Attach context so selectSuggestion always has access
    return results.map((item) => ({ ...item, context }));
  }

  renderSuggestion(item, el) {
    el.addClass("stnd-suggest-item");

    const header = el.createDiv({ cls: "stnd-suggest-header" });
    header.createSpan({ cls: "stnd-suggest-name", text: item.name });

    const badgeCls = `stnd-suggest-badge badge-${item.category.toLowerCase().replace(/[^a-z]/g, "")}`;
    header.createSpan({ cls: badgeCls, text: item.category });

    if (item.syntax) {
      header.createSpan({ cls: "stnd-suggest-syntax", text: item.syntax });
    }

    el.createDiv({ cls: "stnd-suggest-desc", text: item.description });

    const tooltipText = `${item.name} (${item.category})\nSyntax: ${item.syntax}\n${item.description}`;
    try {
      setTooltip(el, tooltipText, { placement: "right" });
    } catch {
      el.setAttribute("title", tooltipText);
    }
  }

  selectSuggestion(item, evt) {
    const context = item.context || this.context || this.latestTriggerInfo;
    const editor = this.app.workspace.activeEditor?.editor || this.context?.editor;
    if (!editor || !context) return;

    const { start, end } = context;

    // Replace `::query` with the insertion text
    editor.replaceRange(item.insertText, start, end);

    // Cursor position calculation
    if (item.cursorOffset !== undefined) {
      editor.setCursor({
        line: start.line,
        ch: start.ch + item.cursorOffset,
      });
    } else if (item.cursorLineOffset !== undefined) {
      editor.setCursor({
        line: start.line + item.cursorLineOffset,
        ch: item.cursorChOffset || 0,
      });
    }

    this.close();
  }
}

module.exports = {
  StandardDirectiveSuggest,
  DIRECTIVES,
};
