"use strict";

const { EditorSuggest, setTooltip } = require("obsidian");

const DIRECTIVES = [
  {
    id: "feed",
    name: "::feed",
    category: "Flux",
    syntax: "::feed #tag",
    description: "Flux de cartes visuelles avec image cover, date relative et extrait markdown.",
    insertText: "::feed #",
    cursorOffset: 8,
  },
  {
    id: "list",
    name: "::list",
    category: "Flux",
    syntax: "::list #tag",
    description: "Liste compacte à puces des notes liées au tag spécifié.",
    insertText: "::list #",
    cursorOffset: 8,
  },
  {
    id: "callout",
    name: "::callout",
    category: "Bloc",
    syntax: "::callout note\n...\n::end",
    description: "Bloc callout stylisé avec icône (note, tip, info, warning, danger, success...).",
    insertText: "::callout note\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "toggle",
    name: "::toggle",
    category: "Bloc",
    syntax: "::toggle Titre\n...\n::end",
    description: "Section accordéon dépliable (<details>) avec titre cliquable.",
    insertText: "::toggle Titre\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "columns",
    name: "::columns",
    category: "Mise en page",
    syntax: "::columns 2\nColonne 1\n---\nColonne 2\n::end",
    description: "Disposition en colonnes réactives séparées par des lignes horizontales (---).",
    insertText: "::columns 2\nColonne 1\n---\nColonne 2\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "cards",
    name: "::cards",
    category: "Mise en page",
    syntax: "::cards\nCarte 1\n---\nCarte 2\n::end",
    description: "Grille de cartes encadrées indépendantes séparées par ---.",
    insertText: "::cards\nCarte 1\n---\nCarte 2\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "grid",
    name: "::grid",
    category: "Mise en page",
    syntax: "::grid\nÉlément 1\n---\nÉlément 2\n::end",
    description: "Grille fluide s'adaptant au nombre de cellules séparées par ---.",
    insertText: "::grid\nÉlément 1\n---\nÉlément 2\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "split",
    name: "::split",
    category: "Mise en page",
    syntax: "::split 8/4\nLargeur 8\n---\nLargeur 4\n::end",
    description: "Disposition asymétrique sur une grille de 12 colonnes (ex: 8/4, 6/6, 4/8).",
    insertText: "::split 8/4\nLargeur 8\n---\nLargeur 4\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "hero",
    name: "::hero",
    category: "Smart",
    syntax: "::hero\nParagraphe agrandi",
    description: "Met en valeur le paragraphe suivant en grand format typographique Hero.",
    insertText: "::hero\n",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "hero-block",
    name: "::hero-block",
    category: "Bloc",
    syntax: "::hero-block center\n...\n::end",
    description: "Bloc conteneur Hero avec alignement textuel (center, left, right).",
    insertText: "::hero-block center\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "feature",
    name: "::feature",
    category: "Smart",
    syntax: "::feature\nParagraphe vedette",
    description: "Met en avant le paragraphe suivant avec un style vedette.",
    insertText: "::feature\n",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "feature-block",
    name: "::feature-block",
    category: "Bloc",
    syntax: "::feature-block\n...\n::end",
    description: "Bloc conteneur mis en avant avec fond contrasté et bordure légère.",
    insertText: "::feature-block\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "editorial",
    name: "::editorial",
    category: "Smart",
    syntax: "::editorial\nParagraphe éditorial",
    description: "Typographie de style grand article éditorial pour le paragraphe suivant.",
    insertText: "::editorial\n",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "excerpt",
    name: "::excerpt",
    category: "Smart",
    syntax: "::excerpt\nChapeau du texte",
    description: "Extrait introductif ou chapeau de texte mis en valeur.",
    insertText: "::excerpt\n",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "card",
    name: "::card",
    category: "Bloc",
    syntax: "::card\n...\n::end",
    description: "Encadre le contenu dans une carte de surface avec fond et bordure.",
    insertText: "::card\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "center",
    name: "::center",
    category: "Bloc",
    syntax: "::center\n...\n::end",
    description: "Centre horizontalement le texte et les éléments contenus dans le bloc.",
    insertText: "::center\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "small",
    name: "::small",
    category: "Bloc",
    syntax: "::small\n...\n::end",
    description: "Corps réduit pour notes de bas de page ou mentions secondaires.",
    insertText: "::small\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "accent",
    name: "::accent",
    category: "Bloc",
    syntax: "::accent\n...\n::end",
    description: "Bloc teinté utilisant la couleur d'accentuation du thème actif.",
    insertText: "::accent\n\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "video",
    name: "::video",
    category: "Média",
    syntax: "::video https://...",
    description: "Lecteur vidéo responsive (YouTube, Vimeo, ou fichier MP4 direct).",
    insertText: "::video ",
    cursorOffset: 8,
  },
  {
    id: "image",
    name: "::image",
    category: "Média",
    syntax: "::image\n![Photo](url)\nLégende\n::end",
    description: "Figure avec image et légende typographiée intégrée.",
    insertText: "::image\n![Image](url)\nLégende\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 8,
  },
  {
    id: "gallery",
    name: "::gallery",
    category: "Média",
    syntax: "::gallery\n...\n---\n...\n::end",
    description: "Galerie de visuels réactive organisée en colonnes.",
    insertText: "::gallery\n![Image 1](url)\n---\n![Image 2](url)\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 0,
  },
  {
    id: "button",
    name: "::button",
    category: "Action",
    syntax: "::button primary\n[Texte](https://)\n::end",
    description: "Transforme un lien markdown en bouton call-to-action cliquable.",
    insertText: "::button primary\n[Bouton](https://)\n::end",
    cursorLineOffset: 1,
    cursorChOffset: 1,
  },
  {
    id: "download",
    name: "::download",
    category: "Action",
    syntax: "::download Libellé",
    description: "Bouton de téléchargement pour document ou pièces jointes.",
    insertText: "::download Télécharger",
    cursorOffset: 11,
  },
  {
    id: "space",
    name: "::space",
    category: "Mise en page",
    syntax: "::space medium",
    description: "Espacement vertical (small, medium, large, xlarge).",
    insertText: "::space medium",
    cursorOffset: 14,
  },
  {
    id: "note",
    name: "::note",
    category: "Alerte",
    syntax: "::note Message",
    description: "Note informative discrète en encadré latéral (aside).",
    insertText: "::note ",
    cursorOffset: 7,
  },
  {
    id: "alert",
    name: "::alert",
    category: "Alerte",
    syntax: "::alert Message",
    description: "Message d'alerte contextuel encadré.",
    insertText: "::alert ",
    cursorOffset: 8,
  },
  {
    id: "warning",
    name: "::warning",
    category: "Alerte",
    syntax: "::warning Message",
    description: "Avertissement ou précaution recommandée.",
    insertText: "::warning ",
    cursorOffset: 10,
  },
  {
    id: "error",
    name: "::error",
    category: "Alerte",
    syntax: "::error Message",
    description: "Message d'erreur critique ou signalement d'échec.",
    insertText: "::error ",
    cursorOffset: 8,
  },
  {
    id: "success",
    name: "::success",
    category: "Alerte",
    syntax: "::success Message",
    description: "Message de validation ou de réussite positive.",
    insertText: "::success ",
    cursorOffset: 10,
  },
  {
    id: "muted",
    name: "::muted",
    category: "Texte",
    syntax: "::muted Texte",
    description: "Texte estompé en couleur secondaire atténuée.",
    insertText: "::muted ",
    cursorOffset: 8,
  },
  {
    id: "subtle",
    name: "::subtle",
    category: "Texte",
    syntax: "::subtle Texte",
    description: "Texte discret avec transparence subtile.",
    insertText: "::subtle ",
    cursorOffset: 9,
  },
  {
    id: "widget",
    name: "::widget",
    category: "Composant",
    syntax: "::widget NomDuWidget",
    description: "Intègre un widget web interactif.",
    insertText: "::widget ",
    cursorOffset: 9,
  },
  {
    id: "form",
    name: "::form",
    category: "Composant",
    syntax: "::form contact\nNom\nEmail\nMessage\n::end",
    description: "Formulaire interactif avec champs et bouton d'envoi.",
    insertText: "::form contact\nNom\nEmail\nMessage\n::end",
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

    const tooltipText = `${item.name} (${item.category})\nSyntaxe: ${item.syntax}\n${item.description}`;
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
