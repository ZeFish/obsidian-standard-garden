"use strict";var $t=Object.defineProperty;var pi=Object.getOwnPropertyDescriptor;var ui=Object.getOwnPropertyNames;var hi=Object.prototype.hasOwnProperty;var mi=(o,e,t)=>e in o?$t(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var E=(o,e,t)=>()=>{if(t)throw t[0];try{return o&&(e=o(o=0)),e}catch(n){throw t=[n],n}};var _=(o,e)=>()=>{try{return e||o((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},ia=(o,e)=>{for(var t in e)$t(o,t,{get:e[t],enumerable:!0})},gi=(o,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of ui(e))!hi.call(o,a)&&a!==t&&$t(o,a,{get:()=>e[a],enumerable:!(n=pi(e,a))||n.enumerable});return o};var yi=o=>gi($t({},"__esModule",{value:!0}),o);var Go=(o,e,t)=>mi(o,typeof e!="symbol"?e+"":e,t);var le=_((sc,zo)=>{"use strict";var bi=new Set(["color-light-background","color-light-foreground","color-light-accent","color-light-red","color-light-orange","color-light-yellow","color-light-green","color-light-cyan","color-light-blue","color-light-purple","color-light-pink","color-light-bold","color-light-italic","color-dark-background","color-dark-foreground","color-dark-accent","color-dark-red","color-dark-orange","color-dark-yellow","color-dark-green","color-dark-cyan","color-dark-blue","color-dark-purple","color-dark-pink","color-dark-bold","color-dark-italic","font-header-weight","font-header-letter-spacing","font-header-line-height","font-header-style","font-header-feature","font-header-variation","font-weight","font-weight-bold","font-feature","font-variation","font-monospace-feature","font-monospace-variation","font-interface-feature","font-interface-variation","optical-ratio","font-density","color-header","color-bold","color-italic","color-accent","line-width","margin","margin-block","font-header","font-text","font-interface","font-monospace"]),wi=new Set(["font-header","font-text","font-interface","font-monospace"]),ki={enableDesignSystem:!0,defaultTheme:"",startupSnapshot:{cssClasses:[],theme:"",customCss:""},themeCache:{},apiKey:"",apiUsername:"",apiUrl:"https://standard.garden/api",openAfterPublish:!1,publishStatusLocation:"titlebar",publishIndicatorStyle:"garden",autoSync:!1,autoSyncStartup:!1,syncDirection:"2way",excludedFolders:"Utopie",enableMycelium:!1,panelOpenedOnInstall:!1,mycelium:{enableGhostLinks:!1,enableLinkingCommand:!0,enableCompostFooter:!1}},vi={plugin:"https://standard.garden/guide/getting-started/obsidian",sync:"https://standard.garden/guide/getting-started/obsidian#sync",tokens:"https://standard.garden/guide/getting-started/tokens",cssHooks:"https://standard.garden/guide/getting-started/css-hooks",typography:"https://standard.garden/guide/getting-started/tokens#typography",frontmatter:"https://standard.garden/guide/getting-started/customization#frontmatter",syntax:"https://standard.garden/guide/getting-started/customization#syntax"};function Si(o,e=[]){let t=document.createDocumentFragment();return o.split("\xA7").forEach((a,s)=>{if(a&&t.appendText(a),s<e.length){let r=e[s],i=t.createEl("a",{text:r.text,href:r.href});i.setAttribute("target","_blank"),i.setAttribute("rel","noopener noreferrer"),i.style.color="var(--link-color, var(--interactive-accent))",i.style.textDecoration="underline",i.style.textUnderlineOffset="2px"}}),t}function Wo(o){if(o==null)return!1;if(typeof o=="object"&&!(o instanceof Date)){if(o.publish!==void 0)return Wo(o.publish);if(typeof o.status=="string"){let e=o.status.trim().toLowerCase();if(e==="public"||e==="published")return!0;if(e==="draft"||e==="private"||e==="internal"||e==="archived")return!1}return!1}if(o===!0)return!0;if(o===!1||o==="")return!1;if(o instanceof Date)return!isNaN(o.getTime());if(typeof o=="string"){let e=o.trim().toLowerCase();return e==="true"?!0:e==="false"?!1:e==="public"||e==="published"?!0:e==="draft"||e==="private"||e==="archived"?!1:!isNaN(new Date(o).getTime())}return!1}function xi(o){return/\.(png|jpe?g|gif|webp|svg|avif)$/i.test(o)}function Ti(o){return/\.pdf$/i.test(o)}function Ni(o){return!o||!/\.[a-z0-9]+$/i.test(o)?!1:!/\.(md|markdown|canvas)$/i.test(o)}function Ei(o){let e=(o.split(".").pop()||"").toLowerCase();return{png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",avif:"image/avif",pdf:"application/pdf",zip:"application/zip",gz:"application/gzip",tar:"application/x-tar",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",mp4:"video/mp4",mov:"video/quicktime",webm:"video/webm",txt:"text/plain",csv:"text/csv",json:"application/json",epub:"application/epub+zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}[e]||"application/octet-stream"}var Ci=new Set(["garden-domain","garden-brand","garden-favicon","garden-launcher","garden-mycelium","garden-avatar","garden-display-name","garden-url","garden-short"]),Li=new Set(["garden-domain","garden-brand","garden-favicon","garden-launcher","garden-mycelium"]);zo.exports={KNOWN_TOKENS:bi,FONT_TOKENS:wi,GARDEN_FRONTMATTER_KEYS:Ci,STRUCTURAL_KEYS:Li,DEFAULT_SETTINGS:ki,isPublishIntent:Wo,isImageFile:xi,isPdfFile:Ti,isAttachmentFile:Ni,getMimeType:Ei,descWithLinks:Si,DOCS_URLS:vi}});var en=_((rc,Jo)=>{"use strict";Jo.exports={2064:`body.stnd-adapter[data-stnd-theme="2064"] {
  --color-light-background: #efefef;
  --color-light-foreground: #4F4F33;
  --color-light-accent: #e0b727;
  --color-light-red: #af2323;
  --color-light-orange: #c06c2b;
  --color-light-yellow: #e0b727;
  --color-light-green: #61a155;
  --color-light-cyan: #549b88;
  --color-light-blue: #2e94bb;
  --color-light-magenta: #7a5ba8;
  --color-dark-background: #1c1c1a;
  --color-dark-foreground: #DBCD93;
  --color-dark-accent: #C7A540;
  --color-dark-red: #971d1d;
  --color-dark-orange: #C48745;
  --color-dark-yellow: #C7A540;
  --color-dark-green: #919300;
  --color-dark-cyan: #549b88;
  --color-dark-blue: #277d9e;
  --color-dark-magenta: #7a5ba8;
  --font-text: "Berkeley Mono";
  --font-header: "Avant Garde Pro";
  --font-monospace: "Berkeley Mono";
  --optical-ratio: 1.414;
  --line-height: 1.5;
  --line-width: 45rem;
  --font-weight: 400;
  --font-weight-bold: 600;
  --radius: 2px;
  --stroke-width: 1px;
  --font-header-weight: 700;
  --font-interface: "Berkeley Mono";
  --font-density: 1.45;
  --font-line-width: 45rem;
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
}
body.stnd-adapter[data-stnd-theme="2064"] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2)) {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 1px solid var(--color-accent);
  padding-bottom: 1rlh;
  margin-bottom: 1rlh;
  font-family: var(--font-header);
}
body.stnd-adapter[data-stnd-theme="2064"] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  border-left: 4px solid var(--color-accent);
  background: color-mix(in oklch, var(--color-background), var(--color-accent) 5%);
  font-family: var(--font-monospace);
  font-size: 0.9em;
}`,academic:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=academic] {
  --color-light-background: #f7f6f4;
  --color-light-foreground: #292827;
  --color-accent: #0f5a7d;
  --font-text: "Source Serif 4", "Georgia", "Times New Roman", serif;
  --font-header: "Source Serif 4", "Georgia", "Times New Roman", serif;
  --font-monospace: "IBM Plex Mono", "Menlo", monospace;
  --sidenote-width: 18rem;
  --color-light-accent: #0f5a7d;
  --color-dark-background: #211f1d;
  --color-dark-foreground: #e6e2db;
  --color-dark-accent: #7fb4cc;
  --optical-ratio: 1.225;
  --font-header-weight: 600;
  --font-feature: "onum", "pnum";
  --line-height: 1.55;
  --line-width: 30rlh;
  --font-size: 1.125rem;
  --font-ratio: 1.25;
  --font-density: 1.68;
  --font-line-width: 40rem;
}
body.stnd-adapter[data-stnd-theme=academic] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #f7f6f4;
  --color-light-foreground: #292827;
  --color-accent: #0f5a7d;
  --font-text: "Source Serif 4", "Georgia", "Times New Roman", serif;
  --font-header: "Source Serif 4", "Georgia", "Times New Roman", serif;
  --font-monospace: "IBM Plex Mono", "Menlo", monospace;
  --sidenote-width: 18rem;
  --color-light-accent: #0f5a7d;
  --color-dark-background: #211f1d;
  --color-dark-foreground: #e6e2db;
  --color-dark-accent: #7fb4cc;
  --optical-ratio: 1.225;
  --font-header-weight: 600;
  --font-feature: "onum", "pnum";
  --line-height: 1.55;
  --line-width: 30rlh;
  /* \u2500\u2500\u2500 Custom rules for Academic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=academic] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  margin-inline: auto;
  text-align: center;
  text-wrap: balance;
}
body.stnd-adapter[data-stnd-theme=academic] {
  /* Numbered sections \u2014 1. / 1.1 \u2014 the journal convention */
}
body.stnd-adapter[data-stnd-theme=academic] .prose {
  counter-reset: sec;
}
body.stnd-adapter[data-stnd-theme=academic] .prose :is(.markdown-reading-view h2, .HyperMD-header-2) {
  counter-increment: sec;
  counter-reset: subsec;
}
body.stnd-adapter[data-stnd-theme=academic] .prose :is(.markdown-reading-view h2, .HyperMD-header-2)::before {
  content: counter(sec) ".\u2002";
  color: var(--color-accent);
  font-variant-numeric: lining-nums;
}
body.stnd-adapter[data-stnd-theme=academic] .prose :is(.markdown-reading-view h3, .HyperMD-header-3) {
  counter-increment: subsec;
}
body.stnd-adapter[data-stnd-theme=academic] .prose :is(.markdown-reading-view h3, .HyperMD-header-3)::before {
  content: counter(sec) "." counter(subsec) "\u2002";
  color: var(--color-accent);
  font-variant-numeric: lining-nums;
}
body.stnd-adapter[data-stnd-theme=academic] p {
  text-align: left;
  text-align-last: left;
  hyphens: auto;
  -webkit-hyphens: auto;
  text-wrap: pretty;
}
body.stnd-adapter[data-stnd-theme=academic] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  border-left: var(--stroke-width-lg) solid var(--color-accent);
  padding-block: var(--space-2);
  margin-block: var(--space-3) var(--space-2);
  margin-inline: var(--space);
  font-size: var(--size);
  font-family: var(--font-serif);
}
body.stnd-adapter[data-stnd-theme=academic] {
  /* The abstract: an opening :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) reads as the epigraph/abstract */
}
body.stnd-adapter[data-stnd-theme=academic] .prose > :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote):first-of-type {
  border: 0;
  font-style: italic;
  font-size: var(--size-sm);
  padding-inline: var(--space-4);
}
body.stnd-adapter[data-stnd-theme=academic] {
  /* Sidenote voice for asides */
}
body.stnd-adapter[data-stnd-theme=academic] aside {
  font-size: var(--size-sm);
  line-height: 1.4;
  border-left: 2px solid var(--color-accent);
  background: none;
}
body.stnd-adapter[data-stnd-theme=academic] {
  /* Footnote references in accent, lining figures */
}
body.stnd-adapter[data-stnd-theme=academic] sup {
  color: var(--color-accent);
  font-variant-numeric: lining-nums;
}
body.stnd-adapter[data-stnd-theme=academic] figcaption {
  font-size: var(--size-xs);
  text-align: center;
  font-style: italic;
}
body.stnd-adapter[data-stnd-theme=academic] {
  /* Tables read as data, captions above per journal style */
}
body.stnd-adapter[data-stnd-theme=academic] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) {
  font-variant-numeric: lining-nums tabular-nums;
}`,apex:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=apex] {
  --color-light-foreground: #3b3b3b;
  --color-light-background: #e4e0d6;
  --color-light-accent: var(--color-light-red);
  --color-light-red: #d14230;
  --color-light-orange: #d14230;
  --color-light-yellow: #d14230;
  --color-light-blue: #d14230;
  --color-light-green: #d14230;
  --color-dark-foreground: #e4e0d6;
  --color-dark-background: #1b1b1b;
  --color-dark-accent: var(--color-dark-red);
  --color-dark-red: #e4e0d6;
  --color-dark-orange: #e4e0d6;
  --color-dark-blue: #e4e0d6;
  --color-dark-green: #e4e0d6;
  --color-dark-yellow: #e4e0d6;
  --font-text: "Herbus", sans-serif;
  --font-header: "Herbus", sans-serif;
  --font-interface: "MonoLisa", monospace;
  --font-monospace: "MonoLisa", monospace;
  --font-header-weight: 400;
  --font-header-letter-spacing: -0.006em;
  --font-header-line-height: 1;
  --font-weight-bold: 600;
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.45;
  --font-line-width: 42rem;
}
body.stnd-adapter[data-stnd-theme=apex] {
  /* \u2500\u2500\u2500 Foreground & Background \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-foreground: #3b3b3b;
  --color-light-background: #e4e0d6;
  --color-dark-foreground: #e4e0d6;
  --color-dark-background: #1b1b1b;
  /* \u2500\u2500\u2500 Light Palette \u2014 Volcanic Tonal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /*
      Everything radiates from the brick red at the apex.
      Hues desaturate progressively as they cool away from red \u2014
      like lava hardening into stone. The red still dominates.
  */
  --color-light-red: oklch(53% 0.185 28); /* brick vermillion \u2014 the apex */
  --color-light-orange: oklch(59% 0.148 38); /* warm terra cotta            */
  --color-light-yellow: oklch(65% 0.110 55); /* ochre clay                  */
  --color-light-green: oklch(50% 0.048 130); /* warm ash green              */
  --color-light-cyan: oklch(53% 0.030 190); /* stone grey                  */
  --color-light-blue: oklch(44% 0.058 240); /* dark slate                  */
  --color-light-purple: oklch(41% 0.082 310); /* deep aubergine              */
  --color-light-pink: oklch(54% 0.118 12); /* deep rose                   */
  /* \u2500\u2500\u2500 Dark Palette \u2014 same hues, +10% luminance \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-dark-red: oklch(63% 0.185 28); /* ember red                   */
  --color-dark-orange: oklch(69% 0.148 38); /* burnt sienna                */
  --color-dark-yellow: oklch(74% 0.110 55); /* warm sand                   */
  --color-dark-green: oklch(60% 0.048 130); /* sage ash                    */
  --color-dark-cyan: oklch(63% 0.030 190); /* warm stone                  */
  --color-dark-blue: oklch(54% 0.058 240); /* blue slate                  */
  --color-dark-purple: oklch(52% 0.082 310); /* deep violet                 */
  --color-dark-pink: oklch(64% 0.118 12); /* ember rose                  */
  /* \u2500\u2500\u2500 Semantic assignments \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-accent: var(--color-red);
  --color-light-accent: var(--color-red);
  --color-bold: var(--color-foreground);
  --color-italic: var(--color-muted, color-mix(in oklab, var(--color-foreground) 70%, transparent));
  /* \u2500\u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --bold-weight: 600;
  --font-ratio: 1.6;
  --font-text: "MonoLisa";
  --font-feature: "liga", "salt", "clig", "kern", "calt", "zero";
  --font-variation: "wght" 400;
  --font-header: "Herbus Apex";
  --font-monospace: "MonoLisa";
  --font-interface: "MonoLisa";
  --font-header-weight: 400;
  --font-header-letter-spacing: -0.006em;
  --font-header-line-height: 1;
  /* \u2500\u2500\u2500 Dark mode font swap \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=apex].theme-dark {
  --font-text: "Sohne Mono";
  --font-monospace: "Sohne Mono";
  --font-interface: "Sohne Mono";
}
body.stnd-adapter[data-stnd-theme=apex] {
  /* \u2500\u2500\u2500 Body text \u2014 subtle emboss shadow \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  color: color-mix(in oklab, var(--color-foreground) 90%, transparent);
  --shadow-color: color-mix(in oklab, currentcolor 10%, transparent);
  --shadow-distance: 0px;
  --shadow-depth: 0.5px;
  text-shadow: var(--shadow-depth) 0px var(--shadow-depth) var(--shadow-color), calc(var(--shadow-depth) * -1) 0px var(--shadow-depth) var(--shadow-color), 0px var(--shadow-depth) var(--shadow-depth) var(--shadow-color);
  /* \u2500\u2500\u2500 Links \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=apex] a {
  text-decoration: underline !important;
}
body.stnd-adapter[data-stnd-theme=apex] {
  /* \u2500\u2500\u2500 Headers \u2014 sharp emboss shadow \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=apex] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6)) {
  color: color-mix(in oklab, currentcolor 90%, var(--color-background));
  --shadow-color: color-mix(
      in oklab,
      currentcolor 100%,
      var(--color-background)
  );
  --shadow-distance: 0px;
  --shadow-depth: 0.75px;
  text-shadow: var(--shadow-depth) 0px var(--shadow-depth) var(--shadow-color), calc(var(--shadow-depth) * -1) 0px var(--shadow-depth) var(--shadow-color), 0px var(--shadow-depth) var(--shadow-depth) var(--shadow-color);
}
body.stnd-adapter[data-stnd-theme=apex] {
  /* \u2500\u2500\u2500 Light mode headers \u2014 red tint \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=apex].theme-light :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6)), body.stnd-adapter[data-stnd-theme=apex][data-theme-mode=light] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6)) {
  color: color-mix(in oklab, var(--color-red) 90%, var(--color-background));
}
body.stnd-adapter[data-stnd-theme=apex] {
  /* \u2500\u2500\u2500 Light mode :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) \u2014 embossed against background \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=apex] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  --color: color-mix(in oklab, var(--color-background) 75%, black);
  text-shadow: -1px -1px 1px var(--color), 1px -1px 1px var(--color), -1px 1px 1px var(--color), 1px 1px 1px var(--color) !important;
}
body.stnd-adapter[data-stnd-theme=apex] {
  /* \u2500\u2500\u2500 Dark mode :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) \u2014 red ghost \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=apex].theme-dark :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), body.stnd-adapter[data-stnd-theme=apex][data-theme-mode=dark] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  --color: color-mix(in oklab, var(--color-background) 0%, var(--color-red));
  text-shadow: -1px -1px 0px var(--color), 1px -1px 0px var(--color), -1px 1px 0px var(--color), 1px 1px 0px var(--color) !important;
}`,avantgarde:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=avantgarde] {
  --color-light-foreground: #393633;
  --color-light-background: #e7e8e7;
  --color-light-accent: var(--color-light-orange);
  --color-light-orange: #ff7535;
  --color-light-blue: #393633;
  --color-light-red: #393633;
  --color-light-yellow: #c09f81;
  --color-dark-foreground: #dcdad6;
  --color-dark-background: #262421;
  --color-dark-accent: var(--color-dark-orange);
  --color-dark-orange: #d0a215;
  --color-dark-blue: #dcdad6;
  --color-dark-red: #dcdad6;
  --font-text: "Sohne Mono", monospace;
  --font-header: "Avant Garde Pro", sans-serif;
  --font-interface: "Sohne Mono", monospace;
  --font-monospace: "Sohne Mono", monospace;
  --font-header-weight: 700;
  --font-header-letter-spacing: -0.05em;
  --font-header-line-height: 1;
  --font-weight-bold: 600;
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.45;
  --font-line-width: 44rem;
}
body.stnd-adapter[data-stnd-theme=avantgarde] {
  /* \u2500\u2500\u2500 Foreground & Background \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-foreground: #393633;
  --color-light-background: #e7e8e7;
  --color-dark-foreground: #dcdad6;
  --color-dark-background: #262421;
  /* \u2500\u2500\u2500 Light Palette \u2014 Bauhaus Editorial \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /*
      Reference: ITC Avant Garde Magazine, Push Pin Studios, 1970s
      offset lithography. Warm, assertive, geometric \u2014 not web-primaries.
      Each hue sits at a perceptually even luminance (~48\u201365%) so the
      Color Div swatches read as equally weighted on the warm grey ground.
  */
  --color-light-red: oklch(50% 0.188 22); /* deep vermillion     */
  --color-light-orange: oklch(64% 0.172 45); /* warm amber-orange   */
  --color-light-yellow: oklch(72% 0.158 78); /* Bauhaus ochre       */
  --color-light-green: oklch(52% 0.118 150); /* olive-sage          */
  --color-light-cyan: oklch(60% 0.096 200); /* Kodachrome teal     */
  --color-light-blue: oklch(47% 0.130 242); /* cobalt              */
  --color-light-purple: oklch(47% 0.142 305); /* deep grape          */
  --color-light-pink: oklch(57% 0.158 350); /* warm rose           */
  /* \u2500\u2500\u2500 Dark Palette \u2014 same hues, lifted luminance \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-dark-red: oklch(61% 0.188 22); /* ember red           */
  --color-dark-orange: oklch(71% 0.168 47); /* warm amber          */
  --color-dark-yellow: oklch(80% 0.158 80); /* candlelight         */
  --color-dark-green: oklch(63% 0.118 150); /* sage                */
  --color-dark-cyan: oklch(68% 0.096 200); /* teal mist           */
  --color-dark-blue: oklch(58% 0.130 242); /* midnight blue       */
  --color-dark-purple: oklch(59% 0.142 305); /* smoky violet        */
  --color-dark-pink: oklch(67% 0.158 350); /* rose quartz         */
  /* \u2500\u2500\u2500 Semantic assignments \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-accent: var(--color-orange);
  --color-dark-accent: var(--color-orange);
  /* \u2500\u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --bold-weight: 600;
  --font-ratio: 1.6;
  --font-text: "Sohne Mono";
  --font-header: "Avant Garde Pro";
  --font-monospace: "Sohne Mono";
  --font-interface: "Sohne Mono";
  --font-header-weight: 700;
  --font-header-letter-spacing: -0.05em;
  --font-header-line-height: 1;
  /* \u2500\u2500\u2500 Links \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=avantgarde] a {
  text-decoration: none !important;
  font-weight: 500;
}
body.stnd-adapter[data-stnd-theme=avantgarde] a:hover {
  text-decoration: none !important;
}
body.stnd-adapter[data-stnd-theme=avantgarde] {
  /* \u2500\u2500\u2500 Headers \u2014 ghost text with foreground shadow \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=avantgarde] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6)) {
  text-shadow: 0px 0px 0.7px color-mix(in oklab, var(--color-foreground) 95%, transparent);
  color: transparent;
  text-align: left;
}
body.stnd-adapter[data-stnd-theme=avantgarde] {
  /* \u2500\u2500\u2500 Main header \u2014 orange ghost \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=avantgarde] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  font-feature-settings: "dlig" on;
  font-weight: 600;
  text-transform: uppercase;
  text-shadow: 0px 0px 0.01em color-mix(in oklab, var(--color-orange) 95%, transparent);
  color: transparent;
}
body.stnd-adapter[data-stnd-theme=avantgarde] {
  /* \u2500\u2500\u2500 Images & lists \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=avantgarde] img {
  filter: none !important;
  mix-blend-mode: normal !important;
}
body.stnd-adapter[data-stnd-theme=avantgarde] :is(ul, ol) {
  padding: 0rlh 1rlh;
  margin: 1rlh 0rlh;
}`,blueprint:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=blueprint] {
  --color-light-background: #1a4d7a;
  --color-light-foreground: #f0f4f8;
  --color-dark-foreground: var(--color-light-foreground);
  --color-dark-background: var(--color-light-background);
  --color-light-red: rgba(255, 28, 0, 0.493);
  --color-light-orange: rgba(188, 82, 21, 0.574);
  --color-light-yellow: rgba(173, 131, 1, 0.794);
  --color-light-green: rgba(102, 128, 11, 0.576);
  --color-light-cyan: rgba(36, 131, 123, 0.641);
  --color-light-blue: rgba(32, 94, 166, 0.614);
  --color-light-purple: #5e409d;
  --color-light-pink: #a02f6f;
  --color-accent: var(--color-orange);
  --color-code: var(--color-foreground);
  --color-bold: var(--color-red);
  --color-italic: var(--color-green);
  --color-dark-accent: var(--color-magenta);
  --color-dark-bold: var(--color-magenta);
  --font-monospace: "MonoLisa";
  --font-monospace-feature: "liga", "zero", "calt", "ss02", "ss03", "ss07", "ss10", "ss15";
  --optical-ratio: 1.425;
  --blueprint-opacity: 20%;
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.45;
  --font-line-width: 44rem;
}
body.stnd-adapter[data-stnd-theme=blueprint] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #1a4d7a;
  --color-light-foreground: #f0f4f8;
  --color-dark-foreground: var(--color-light-foreground);
  --color-dark-background: var(--color-light-background);
  --color-light-red: rgba(255, 28, 0, 0.493);
  --color-light-orange: rgba(188, 82, 21, 0.574);
  --color-light-yellow: rgba(173, 131, 1, 0.794);
  --color-light-green: rgba(102, 128, 11, 0.576);
  --color-light-cyan: rgba(36, 131, 123, 0.641);
  --color-light-blue: rgba(32, 94, 166, 0.614);
  --color-light-purple: #5e409d;
  --color-light-pink: #a02f6f;
  --color-accent: var(--color-orange);
  --color-code: var(--color-foreground);
  --color-bold: var(--color-red);
  --color-italic: var(--color-green);
  --color-dark-accent: var(--color-magenta);
  --color-dark-bold: var(--color-magenta);
  --font-monospace: "MonoLisa";
  --font-monospace-feature: "liga", "zero", "calt", "ss02", "ss03", "ss07", "ss10", "ss15";
  --optical-ratio: 1.425;
  --blueprint-opacity: 20%;
  /* \u2500\u2500\u2500 Custom rules for Blueprint \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Accent system */
  /* warning, highlight */
  /* attention blocks */
  /* vintage punchcard yellow */
  /* success, approval */
  /* teal-y terminal feel */
  /* link, info */
  /* utility, label tags */
  /* softer technical touch */
  /* Accent system
    --color-dark-red: #d14d41;
    --color-dark-orange: #da702c;
    --color-dark-yellow: #ad8301;
    --color-dark-green: #879a39;
    --color-dark-cyan: #24837b;
    --color-dark-blue: #4385be;
    --color-dark-purple: #8b7ec8;
    --color-dark-pink: #ce5d97;
    */
  /* Code and UI extras */
  /*--color-header: color-mix(in srgb, var(--color-foreground) 75%, var(--color-background));*/
}
body.stnd-adapter[data-stnd-theme=blueprint] .dark {
  --color-accent: var(--color-magenta);
  --color-bold: var(--color-magenta);
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6)) {
  position: relative;
  border: none;
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6))::before {
  content: "";
  opacity: var(--blueprint-opacity);
  font-size: var(--size-sm);
  color: var(--color-foreground);
  font-style: italic;
  font-weight: 400;
  font-family: var(--font-monospace);
  position: absolute;
  top: 0;
  left: calc(var(--space) * -1);
  transform: translateX(-100%);
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title)::before {
  content: "h1";
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(.markdown-reading-view h2, .HyperMD-header-2)::before {
  content: "h2";
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(.markdown-reading-view h3, .HyperMD-header-3)::before {
  content: "h3";
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(.markdown-reading-view h4, .HyperMD-header-4)::before {
  content: "h4";
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(.markdown-reading-view h5, .HyperMD-header-5)::before {
  content: "h5";
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(.markdown-reading-view h6, .HyperMD-header-6)::before {
  content: "h6";
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(:is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre))) {
  position: relative;
  border: none;
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(:is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)))::before {
  content: "pre";
  opacity: var(--blueprint-opacity);
  font-size: var(--size-sm);
  color: var(--color-foreground);
  font-style: italic;
  font-weight: 400;
  font-family: var(--font-monospace);
  position: absolute;
  top: calc(var(--space) * -1);
  left: calc(var(--space) * -3);
  transform: translateX(-100%);
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(p) {
  position: relative;
  border: none;
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(p)::before {
  content: "p";
  opacity: var(--blueprint-opacity);
  font-size: var(--size-sm);
  color: var(--color-foreground);
  font-style: italic;
  font-weight: 400;
  font-family: var(--font-monospace);
  position: absolute;
  top: calc(var(--space) * -1);
  left: calc(var(--space) * -3);
  transform: translateX(-100%);
}
body.stnd-adapter[data-stnd-theme=blueprint] :is(p:has(img))::before {
  content: "Medias" !important;
}
body.stnd-adapter[data-stnd-theme=blueprint] .grid-debug-overlay {
  position: absolute !important;
  inset: 0;
  display: grid;
  grid-template-columns: inherit;
  pointer-events: none;
  z-index: 9999;
  grid-column: hero;
}
body.stnd-adapter[data-stnd-theme=blueprint] .grid-debug-overlay span:nth-child(1) {
  grid-column: hero-start/feature-start;
}
body.stnd-adapter[data-stnd-theme=blueprint] .grid-debug-overlay span:nth-child(2) {
  grid-column: feature-start/accent-start;
  border-inline-start: 1px dashed color-mix(in srgb, var(--color-foreground) 15%, transparent);
}
body.stnd-adapter[data-stnd-theme=blueprint] .grid-debug-overlay span:nth-child(3) {
  grid-column: accent-start/content-start;
  border-inline-start: 1px dashed color-mix(in srgb, var(--color-foreground) 15%, transparent);
}
body.stnd-adapter[data-stnd-theme=blueprint] .grid-debug-overlay span:nth-child(4) {
  grid-column: content;
  outline: 1px dashed color-mix(in srgb, var(--color-foreground) 15%, transparent);
}
body.stnd-adapter[data-stnd-theme=blueprint] .grid-debug-overlay span:nth-child(5) {
  grid-column: content-end/accent-end;
  border-inline-end: 1px dashed color-mix(in srgb, var(--color-foreground) 15%, transparent);
}
body.stnd-adapter[data-stnd-theme=blueprint] .grid-debug-overlay span:nth-child(6) {
  grid-column: accent-end/feature-end;
  border-inline-end: 1px dashed color-mix(in srgb, var(--color-foreground) 15%, transparent);
}
body.stnd-adapter[data-stnd-theme=blueprint] .grid-debug-overlay span:nth-child(7) {
  grid-column: feature-end/hero-end;
}
body.stnd-adapter[data-stnd-theme=blueprint] body::before {
  --color-grid: var(--color-foreground);
  --percent-grid: 5%;
  --grid-unit: var(--space);
  --dot-size: 1px;
  content: "";
  position: fixed;
  inset: 0;
  mix-blend-mode: normal;
  opacity: 1;
  background-image: radial-gradient(circle, color-mix(in srgb, var(--color-grid) var(--percent-grid), transparent) var(--dot-size), transparent var(--dot-size));
  background-size: var(--grid-unit) var(--grid-unit);
  background-position: 0 0;
  pointer-events: none;
  z-index: 10000;
}`,book:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=book] {
  --color-light-background: #fefdf9;
  --color-light-foreground: #282726;
  --color-dark-background: oklch(19.28% 0.0101 70.89);
  --color-dark-foreground: oklch(80% 0.0227 74.79);
  --color-light-red: #a12314;
  --color-light-orange: #c86a3d;
  --color-light-yellow: #c2a84a;
  --color-light-green: #5e9d80;
  --color-light-cyan: #6ba4b6;
  --color-light-blue: #3b6d90;
  --color-light-purple: #7a6c91;
  --color-light-pink: #b97aa0;
  --color-dark-red: #d95547;
  --color-dark-orange: #b35f37;
  --color-dark-yellow: #e0c168;
  --color-dark-green: #7eb79c;
  --color-dark-cyan: #84c3d6;
  --color-dark-blue: #5a86a5;
  --color-dark-purple: #a58fc0;
  --color-dark-pink: #e6a3d1;
  --color-light-accent: var(--color-red);
  --color-dark-accent: var(--color-red);
  --color-light-link: var(--color-red);
  --color-dark-link: var(--color-red);
  --font-size: 1.15rem;
  --font-ratio: 1.2;
  --marge-block: 1.5;
  --font-density: 1.5;
  --font-line-width: 38rem;
  --font-text: "Fern", "Graveur Variable", Bookerly;
  --font-weight: 450;
  --font-feature: "liga", "onum", "kern";
  --font-variation: "";
  --font-interface: "Fern";
  --font-monospace: "Monolisa";
  --font-mono-feature: "onum" off;
  --font-mono-variation: "";
  --font-header: "Fern";
  --font-header-feature: "liga", "onum", "kern";
  --font-header-variation: "";
  --font-header-weight: 400;
  --font-header-line-height: 1;
  --color-bold: var(--color-red);
  --bold-weight: 550;
  --border: 0;
  --callout-default: var(--color-base-30);
}
body.stnd-adapter[data-stnd-theme=book] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #fefdf9;
  --color-light-foreground: #282726;
  --color-dark-background: oklch(19.28% 0.0101 70.89);
  --color-dark-foreground: oklch(80% 0.0227 74.79);
  --color-light-red: #a12314;
  --color-light-orange: #c86a3d;
  --color-light-yellow: #c2a84a;
  --color-light-green: #5e9d80;
  --color-light-cyan: #6ba4b6;
  --color-light-blue: #3b6d90;
  --color-light-purple: #7a6c91;
  --color-light-pink: #b97aa0;
  --color-dark-red: #d95547;
  --color-dark-orange: #b35f37;
  --color-dark-yellow: #e0c168;
  --color-dark-green: #7eb79c;
  --color-dark-cyan: #84c3d6;
  --color-dark-blue: #5a86a5;
  --color-dark-purple: #a58fc0;
  --color-dark-pink: #e6a3d1;
  --color-light-accent: var(--color-red);
  --color-dark-accent: var(--color-red);
  --color-light-link: var(--color-red);
  --color-dark-link: var(--color-red);
  --font-ratio: 1.2;
  --marge-block: 1.5;
  --font-density: 1.5;
  --font-line-width: 35rem;
  --font-text: "Fern", "Graveur Variable", Bookerly;
  --font-weight: 450;
  --font-feature: "liga", "onum", "kern";
  --font-variation: "";
  --font-interface: "Fern";
  --font-monospace: "Monolisa";
  --font-mono-feature: "onum" off;
  --font-mono-variation: "";
  --font-header: "Fern";
  --font-header-feature: "liga", "onum", "kern";
  --font-header-variation: "";
  --font-header-weight: 400;
  --font-header-line-height: 1;
  --color-bold: var(--color-red);
  --bold-weight: 550;
  --border: 0;
  --callout-default: var(--color-base-30);
  /* \u2500\u2500\u2500 Custom rules for Book \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Light Mode Accent Colors */ /* like aged brick or red clay */ /* terra cotta */ /* mustard parchment */ /* sage green */ /* antique blue-grey */ /* faded denim */ /* dusk lavender */ /* soft mauve rose */
  /* Dark Mode Accent Colors */ /* warm ember glow */ /* baked clay at dusk */ /* candlelight gold */ /* moonlit sage */ /* cool teal mist */ /* twilight lake */ /* smoky lilac */ /* fading rose light */
}
body.stnd-adapter[data-stnd-theme=book] p {
  text-align: justify;
  text-align-last: left;
  /* Don't justify the last line */
  /* Enable hyphenation */
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  /* Improve word spacing */
  word-spacing: -0.05em;
  text-box-edge: cap ex;
}
body.stnd-adapter[data-stnd-theme=book] {
  /*
  p:not(:has(img)) + p {
    text-indent: var(--space);
  }

  p + p {
    margin-block-start: var(--space-d2);
  }

  :is(:is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3)) + p::first-letter {
    --drop-cap-size: 3.25;
    float: inline-start;
    line-height: 1;
    margin-block-start: 0.05lh;
    margin-inline-end: 0.05lh;
    font-size: calc((var(--font-size) * var(--drop-cap-size)) + var(--leading));
    text-box-trim: trim-both;
    text-box-edge: cap alphabetic;
    font-family: "Fern";
    font-weight: 200;

    display: flex;
    align-self: flex-start;
  }
   */
}
body.stnd-adapter[data-stnd-theme=book] .prose {
  margin-left: 10vw;
  transition: margin-left var(--transition);
}
body.stnd-adapter[data-stnd-theme=book] .prose {
  display: block;
}
body.stnd-adapter[data-stnd-theme=book] .prose > * {
  max-width: var(--line-width);
  margin-inline: 0;
}
body.stnd-adapter[data-stnd-theme=book] .token {
  color: var(--color-subtle) !important;
}
body.stnd-adapter[data-stnd-theme=book] a:hover {
  color: var(--color-foreground);
}
body.stnd-adapter[data-stnd-theme=book] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  font-family: "Fern";
  font-weight: 450;
  letter-spacing: -0.01em;
  color: var(--color-muted);
  border-left: var(--stroke-width-lg) solid var(--color-accent);
  padding-block: var(--space-2);
  margin-block: var(--space-3) var(--space-2) var(--space-4) var(--space-2);
  margin-inline: var(--space);
  font-size: var(--size-base);
}
body.stnd-adapter[data-stnd-theme=book] :is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)) {
  padding: var(--trim) var(--leading);
  border: 0;
  border-left: 1px solid var(--color-subtle);
  background: transparent;
  color: var(--color-muted);
}
body.stnd-adapter[data-stnd-theme=book] :is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)) .copy-button {
  position: absolute;
  top: 0;
  right: 0;
}
body.stnd-adapter[data-stnd-theme=book] :is(hr, .HyperMD-hr),
body.stnd-adapter[data-stnd-theme=book] :is(hr, .HyperMD-hr):not(:first-child) {
  font-size: var(--size-base);
  line-height: var(--space);
  padding: 0;
  border: 0;
  background: transparent;
}
body.stnd-adapter[data-stnd-theme=book] :is(hr, .HyperMD-hr)::after {
  content: "\u2619\u2015\u2767";
  text-align: center;
  display: block;
  font-family: "Graveur";
  position: relative;
  top: var(--space);
  color: var(--color-border);
}
body.stnd-adapter[data-stnd-theme=book] aside.note {
  display: inline;
  position: relative;
  top: calc(var(--space) * -1);
  left: calc(var(--space) + var(--line-width));
  margin-top: calc(var(--space) * -1);
  margin-bottom: calc(var(--space) * -2);
  font-size: var(--size-sm);
  color: var(--color-muted);
  line-height: var(--line-height-s);
  max-width: 33%;
  border-left: var(--border);
  padding-left: var(--leading);
  padding-block: var(--leading);
}
body.stnd-adapter[data-stnd-theme=book] .prose > :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title):first-child {
  text-align: left;
  grid-column: feature;
  margin-block-end: var(--space-6);
  font-size: calc(var(--font-size) * pow(var(--optical-ratio), 3));
}
body.stnd-adapter[data-stnd-theme=book] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  text-align: left;
  letter-spacing: 0.15em;
  /* /*text-transform: uppercase;* */
  font-feature-settings: "liga", "onum", "kern", "smcp";
}
@media (max-width: 768px) {
  body.stnd-adapter[data-stnd-theme=book] p {
    text-align: left;
  }
}
@media (min-width: 1200px) {
  body.stnd-adapter[data-stnd-theme=book] .prose {
    margin-left: 15vw;
  }
}
@media (max-width: 1000px) {
  body.stnd-adapter[data-stnd-theme=book] .prose {
    margin-left: 0;
    max-width: 100%;
    display: grid;
  }
  body.stnd-adapter[data-stnd-theme=book] aside.note {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    margin-block: var(--space);
    border: 0;
    background: transparent;
    border-left: 1px solid var(--color-subtle);
  }
}`,calm:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=calm] {
  --color-light-background: #eeebe5;
  --color-light-foreground: #4a4743;
  --color-dark-background: #1e1d1b;
  --color-dark-foreground: #cdcac4;
  --color-accent: #6f8c7e;
  --color-border: transparent;
  --color-subtle: color-mix(in srgb, var(--color-foreground) 4%, transparent);
  --font-text: "Quicksand", sans-serif;
  --font-header: "Quicksand", sans-serif;
  --font-weight-text: 400;
  --font-header-weight: 600;
  --font-header-letter-spacing: 0em;
  --line-height: 1.6;
  --optical-ratio: 1.333;
  --radius-base: 16px;
  --radius-md: 24px;
  --radius-lg: 32px;
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.5;
  --font-line-width: 40rem;
}
body.stnd-adapter[data-stnd-theme=calm] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #eeebe5;
  --color-light-foreground: #4a4743;
  --color-dark-background: #1e1d1b;
  --color-dark-foreground: #cdcac4;
  --color-accent: #6f8c7e;
  --color-border: transparent;
  --color-subtle: color-mix(in srgb, var(--color-foreground) 4%, transparent);
  --font-text: "Quicksand", sans-serif;
  --font-header: "Quicksand", sans-serif;
  --font-weight-text: 400;
  --font-header-weight: 600;
  --font-header-letter-spacing: 0em;
  --line-height: 1.6;
  --optical-ratio: 1.333;
  --radius-base: 16px;
  --radius-md: 24px;
  --radius-lg: 32px;
  /* \u2500\u2500\u2500 Custom rules for Calme (Anti-Surcharge) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Soft, earthy, desaturated pastel tokens to reduce visual fatigue */
  /* Soft taupe/sand */
  /* Warm, low-contrast dark gray */
  /* Soft warm dark */
  /* Muted light gray */
  /* Desaturated sage green */
  /* Remove harsh lines */
  /* Soft, rounded typography */
  /* Avoid aggressive boldness */
  /* Softer scale increment limit */
  /* Override structural tokens */
  /* Universal overstimulation reducers */
}
body.stnd-adapter[data-stnd-theme=calm] * {
  /* Globally soften transitions and shadows */
  box-shadow: none !important;
  transition-duration: 0.8s !important;
  /* Make what little animation exists feel relaxed, or just slow it */
}
body.stnd-adapter[data-stnd-theme=calm] button,
body.stnd-adapter[data-stnd-theme=calm] .module-card,
body.stnd-adapter[data-stnd-theme=calm] a {
  /* No sharp borders, rely purely on soft surface backgrounds */
  border: none !important;
}
body.stnd-adapter[data-stnd-theme=calm] {
  /* Specific softening for cards */
}
body.stnd-adapter[data-stnd-theme=calm] .module-card {
  background: var(--color-subtle) !important;
}`,chalky:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=chalky] {
  --color-light-background: oklch(0.98 0.01 95.1);
  --color-light-foreground: oklch(0.34 0.03 95.72);
  --color-dark-foreground: var(--color-light-background);
  --color-dark-background: var(--color-light-foreground);
  --color-light-red: #b64b4b;
  --color-light-orange: #d08a49;
  --color-light-yellow: #d9b44a;
  --color-light-green: #6aa06a;
  --color-light-cyan: #6fc2b8;
  --color-light-blue: #5b7fb5;
  --color-light-purple: #9b6fb3;
  --color-light-pink: #d99db2;
  --color-accent: var(--color-light-orange);
  --color-bold: var(--color-red);
  --color-italic: var(--color-green);
  --font-text: "Jimmy Serif Pro";
  --font-header: "Fern";
  --font-monospace: "Monaspace Xenon";
  --optical-ratio: 1.414;
  --font-size: 1.125rem;
  --font-ratio: 1.25;
  --font-density: 1.5;
  --font-line-width: 38rem;
}
body.stnd-adapter[data-stnd-theme=chalky] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #fffdf6;
  --color-light-foreground: #28201b;
  --color-dark-foreground: var(--color-light-background);
  --color-dark-background: var(--color-light-foreground);
  --color-light-red: #b64b4b;
  --color-light-orange: #d08a49;
  --color-light-yellow: #d9b44a;
  --color-light-green: #6aa06a;
  --color-light-cyan: #6fc2b8;
  --color-light-blue: #5b7fb5;
  --color-light-purple: #9b6fb3;
  --color-light-pink: #d99db2;
  --color-bold: var(--color-red);
  --color-italic: var(--color-green);
  --font-text: "Jimmy Serif Pro";
  --font-header: "Fern";
  --font-monospace: "Monaspace Xenon";
  --optical-ratio: 1.414;
  /* \u2500\u2500\u2500 Custom rules for Chalky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* soft chalk paper */
  /* deep charcoal writing */
  /* Accent system */
  /* Typography */
}`,claude:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=claude] {
  --color-light-background: oklch(0.98 0.01 95.1);
  --color-light-foreground: oklch(0.34 0.03 95.72);
  --color-light-accent: oklch(0.62 0.14 39.04);
  --color-dark-foreground: oklch(0.81 0.01 93.01);
  --color-dark-background: oklch(0.27 0 106.64);
  --color-dark-accent: oklch(0.67 0.13 38.76);
  --color-accent: var(--color-light-accent);
  --color-code: var(--color-foreground);
  --color-bold: var(--color-light-accent);
  --color-italic: color-mix( in srgb, var(--color-accent) 65%, var(--color-foreground) );
  --font-serif: "Ibarra Real Nova", Georgia, "Times New Roman", serif;
  --font-monospace: "MonoLisa", ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace;
  --optical-ratio: 1.414;
  --claude-opacity: 18%;
  --color-border: color-mix(in srgb, var(--color-foreground) 6%, transparent);
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.5;
  --font-line-width: 42rem;
}
body.stnd-adapter[data-stnd-theme=claude] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: oklch(0.98 0.01 95.1);
  --color-light-foreground: oklch(0.34 0.03 95.72);
  --color-light-accent: oklch(0.62 0.14 39.04);
  --color-dark-foreground: oklch(0.81 0.01 93.01);
  --color-dark-background: oklch(0.27 0 106.64);
  --color-dark-accent: oklch(0.67 0.13 38.76);
  --color-accent: var(--color-light-accent);
  --color-code: var(--color-foreground);
  --color-bold: var(--color-light-accent);
  --color-italic: color-mix( in srgb, var(--color-accent) 65%, var(--color-foreground) );
  --font-serif: "Ibarra Real Nova", Georgia, "Times New Roman", serif;
  --font-monospace: "MonoLisa", ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace;
  --optical-ratio: 1.414;
  --claude-opacity: 18%;
  --color-border: color-mix(in srgb, var(--color-foreground) 6%, transparent);
  /* \u2500\u2500\u2500 Custom rules for Claude \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Light theme foundations (OKLCH tuned) */
  /* Dark theme counterparts (kept expressive, slightly muted) */
  /* Semantic / alias tokens */
  /* Typographic voice */
  /* Utility */
}
body.stnd-adapter[data-stnd-theme=claude] .dark {
  --color-accent: var(--color-dark-accent);
  --color-bold: var(--color-dark-accent);
}
body.stnd-adapter[data-stnd-theme=claude] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6)) {
  border: none;
}
body.stnd-adapter[data-stnd-theme=claude] {
  /* Prose niceties */
}
body.stnd-adapter[data-stnd-theme=claude] :is(article, .prose) {
  background: transparent;
  color: var(--color-foreground);
  line-height: calc(var(--optical-ratio) + 0.25);
}
body.stnd-adapter[data-stnd-theme=claude] {
  /* Small interactive touches */
}
body.stnd-adapter[data-stnd-theme=claude] a {
  color: var(--color-accent);
  text-decoration: underline dotted;
}
body.stnd-adapter[data-stnd-theme=claude] a:hover {
  text-decoration-style: solid;
}`,contrast:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=contrast] {
  --color-light-background: #ffffff;
  --color-light-foreground: #000000;
  --color-dark-background: #000000;
  --color-dark-foreground: #ffffff;
  --color-light-accent: #0050ff;
  --color-dark-accent: #ffff00;
  --color-border: var(--color-foreground);
  --font-text: "Sohne", sans-serif;
  --font-header: "Inter", sans-serif;
  --font-weight-text: 500;
  --font-header-weight: 800;
  --font-header-letter-spacing: 0.02em;
  --line-height: 1.5;
  --optical-ratio: 1.414;
  --color-muted: var(--color-foreground);
  --color-subtle: var(--color-foreground);
  --font-size: 1.0625rem;
  --font-ratio: 1.333;
  --font-density: 1.45;
  --font-line-width: 42rem;
}
body.stnd-adapter[data-stnd-theme=contrast] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #ffffff;
  --color-light-foreground: #000000;
  --color-dark-background: #000000;
  --color-dark-foreground: #ffffff;
  --color-light-accent: #0050ff;
  --color-dark-accent: #ffff00;
  --color-border: var(--color-foreground);
  --font-text: "Sohne", sans-serif;
  --font-header: "Inter", sans-serif;
  --font-weight-text: 500;
  --font-header-weight: 800;
  --font-header-letter-spacing: 0.02em;
  --line-height: 1.5;
  --optical-ratio: 1.414;
  --color-muted: var(--color-foreground);
  --color-subtle: var(--color-foreground);
  /* \u2500\u2500\u2500 Custom rules for Contraste \xC9lev\xE9 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* High contrast strictly limits grayscales and relies on #000 and #fff */
  /* Use bright, pure colors for accents for maximum visibility */
  /* Bright Blue */
  /* Pure Yellow */
  /* Borders match text! */
  /* Highly legible font pairings */
  /* Slightly thicker base weight */
  /* Max boldness */
  /* High contrast elements must have distinct outlines */
}
body.stnd-adapter[data-stnd-theme=contrast] :focus-visible {
  outline: calc(var(--stroke-width) * 4) solid var(--color-accent);
  outline-offset: calc(var(--stroke-width) * 4);
  border-radius: calc(var(--stroke-width) * 4);
}
body.stnd-adapter[data-stnd-theme=contrast] button,
body.stnd-adapter[data-stnd-theme=contrast] input,
body.stnd-adapter[data-stnd-theme=contrast] select,
body.stnd-adapter[data-stnd-theme=contrast] textarea,
body.stnd-adapter[data-stnd-theme=contrast] .module-card,
body.stnd-adapter[data-stnd-theme=contrast] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote),
body.stnd-adapter[data-stnd-theme=contrast] :is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)) {
  border: var(--stroke-width) solid var(--color-foreground) !important;
  border-radius: var(--radius-sm);
}
body.stnd-adapter[data-stnd-theme=contrast] {
  /* Text elements get stronger treatment */
}
body.stnd-adapter[data-stnd-theme=contrast] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title),
body.stnd-adapter[data-stnd-theme=contrast] :is(.markdown-reading-view h2, .HyperMD-header-2),
body.stnd-adapter[data-stnd-theme=contrast] :is(.markdown-reading-view h3, .HyperMD-header-3),
body.stnd-adapter[data-stnd-theme=contrast] :is(.markdown-reading-view h4, .HyperMD-header-4),
body.stnd-adapter[data-stnd-theme=contrast] :is(.markdown-reading-view h5, .HyperMD-header-5),
body.stnd-adapter[data-stnd-theme=contrast] :is(.markdown-reading-view h6, .HyperMD-header-6) {
  text-decoration-thickness: calc(var(--stroke-width) * 3);
  text-underline-offset: calc(var(--stroke-width) * 3);
}
body.stnd-adapter[data-stnd-theme=contrast] img {
  filter: contrast(1.2);
  /* Slightly increase image contrast */
}
body.stnd-adapter[data-stnd-theme=contrast] a {
  color: var(--color-accent);
  text-decoration: underline;
  text-decoration-thickness: 3px;
  font-weight: 700;
}
body.stnd-adapter[data-stnd-theme=contrast] {
  /* Ensure text over accent background is readable (like buttons) */
}
body.stnd-adapter[data-stnd-theme=contrast] .action-button.primary,
body.stnd-adapter[data-stnd-theme=contrast] button.primary {
  background: var(--color-accent);
  color: var(--color-background);
  border: calc(var(--stroke-width) * 4) solid var(--color-background) !important;
  box-shadow: 0 0 0 calc(var(--stroke-width) * 4) var(--color-accent);
}`,dev:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=dev] {
  --color-light-background: #fff;
  --color-light-foreground: #000;
  --color-dark-background: #1c1c1b;
  --color-dark-foreground: #dbcd93;
  --color-dark-red: #971d1d;
  --color-dark-orange: #c48745;
  --color-dark-yellow: #c7a540;
  --color-dark-green: #919300;
  --color-dark-cyan: #549b88;
  --color-dark-blue: #277d9e;
  --color-dark-magenta: #7a5ba8;
  --color-accent: var(--color-dark-yellow);
  --optical-ratio: 1.414;
  --font-serif: "Merriweather", Georgia, "Times New Roman", serif;
  --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  --font-monospace: "Berkeley Mono", "MonoLisa", ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace;
  --border: 2px solid red;
  --color-shadow: green;
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.45;
  --font-line-width: 44rem;
}
body.stnd-adapter[data-stnd-theme=dev] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #fff;
  --color-light-foreground: #000;
  --color-dark-background: #1c1c1b;
  --color-dark-foreground: #dbcd93;
  --color-dark-red: #971d1d;
  --color-dark-orange: #c48745;
  --color-dark-yellow: #c7a540;
  --color-dark-green: #919300;
  --color-dark-cyan: #549b88;
  --color-dark-blue: #277d9e;
  --color-dark-magenta: #7a5ba8;
  --optical-ratio: 1.414;
  --font-serif: "Merriweather", Georgia, "Times New Roman", serif;
  --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  --font-monospace: "Berkeley Mono", "MonoLisa", ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace;
  --border: 2px solid red;
  --color-shadow: green;
  /* \u2500\u2500\u2500 Custom rules for Dev \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Core palette */ /* newsprint hint */ /* deep ink */ /* newsprint hint */ /* deep ink */
  /* Fonts */
}
body.stnd-adapter[data-stnd-theme=dev] img {
  mix-blend-mode: normal;
}`,documentation:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=documentation] {
  --color-light-background: hsla(50, 25%, 96%, 1);
  --color-light-foreground: hsl(220, 13%, 34%);
  --color-light-accent: hsl(220, 92%, 42%);
  --color-light-border: hsl(220, 13%, 80%);
  --color-light-surface: hsla(50, 25%, 94%, 1);
  --color-light-surface-low: hsla(50, 25%, 92%, 1);
  --color-light-subtle: hsl(220, 13%, 50%);
  --color-light-muted: hsl(220, 13%, 70%);
  --color-light-link: hsl(220, 92%, 42%);
  --color-dark-background: hsl(220, 13%, 7.5%);
  --color-dark-foreground: hsl(220, 14%, 70%);
  --color-dark-accent: hsl(220, 92%, 80%);
  --color-dark-border: hsl(220, 13%, 20%);
  --color-dark-surface: hsl(220, 13%, 6.5%);
  --color-dark-surface-low: hsl(220, 13%, 5%);
  --color-dark-subtle: hsl(220, 14%, 50%);
  --color-dark-muted: hsl(220, 13%, 30%);
  --color-dark-link: hsl(220, 93%, 75%);
  --color-code: color-mix(in srgb, var(--color-foreground) 70%, var(--color-orange) 30%);
  --font-text: "iA Writer Quattro", system-ui, sans-serif;
  --font-interface: "iA Writer Quattro", system-ui, sans-serif;
  --font-header: "IBM Plex Serif", Georgia, serif;
  --font-header-weight: 500;
  --font-monospace: "Berkeley Mono", "IBM Plex Mono", Menlo, monospace;
  --line-height: 1.6;
  --line-width: 43rem;
  --optical-ratio: 1.25;
  --font-size: 1.125rem;
  --font-ratio: 1.25;
  --font-density: 1.5;
  --font-line-width: 42rem;
}
body.stnd-adapter[data-stnd-theme=documentation] {
  /* \u2500\u2500 Headings \u2014 IBM Plex Serif, blue page title, ruled sections \u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=documentation] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  color: var(--color-accent);
}
body.stnd-adapter[data-stnd-theme=documentation] :is(.markdown-reading-view h2, .HyperMD-header-2) {
  padding-bottom: 0.3em;
  border-bottom: 1px solid color-mix(in srgb, var(--color-accent) 12%, transparent);
}
body.stnd-adapter[data-stnd-theme=documentation] {
  /* \u2500\u2500 Links \u2014 accent with translucent underline \u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=documentation] a:not(.btn) {
  color: var(--color-link, var(--color-accent));
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 25%, transparent);
  text-underline-offset: 3px;
}
body.stnd-adapter[data-stnd-theme=documentation] a:not(.btn):hover {
  text-decoration-color: color-mix(in srgb, currentColor 55%, transparent);
}
body.stnd-adapter[data-stnd-theme=documentation] {
  /* \u2500\u2500 Inline :is(code, .cm-inline-code) \u2014 blue-tinted chip, warm ink \u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=documentation] :not(:is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre))) > :is(code, .cm-inline-code) {
  background: color-mix(in srgb, var(--color-accent) 10%, transparent);
  color: var(--color-code);
  border-radius: 4px;
  padding: 0.1em 0.35em;
  font-size: 0.875em;
}
body.stnd-adapter[data-stnd-theme=documentation] {
  /* \u2500\u2500 Keybinding chips \u2014 flat, bordered, no raised effect \u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=documentation] kbd {
  background: var(--color-surface);
  background-image: none;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-shadow: none;
  padding: 0.1em 0.4em;
  font-size: 0.8em;
}
body.stnd-adapter[data-stnd-theme=documentation] {
  /* \u2500\u2500 Code blocks \u2014 elevated panel, accent-tinted border + soft shadow \u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=documentation] :is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)) {
  background: var(--color-surface-high);
  border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
  border-radius: 8px;
  box-shadow: 0 2px 8px color-mix(in srgb, var(--color-accent) 7%, transparent);
}
body.stnd-adapter[data-stnd-theme=documentation] {
  /* \u2500\u2500 Tables \u2014 tinted header, hairline borders, zebra rows \u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=documentation] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) th {
  background: color-mix(in srgb, var(--color-accent) 10%, transparent);
}
body.stnd-adapter[data-stnd-theme=documentation] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) th,
body.stnd-adapter[data-stnd-theme=documentation] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) td {
  border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent);
}
body.stnd-adapter[data-stnd-theme=documentation] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) tbody tr:nth-child(even) {
  background: color-mix(in srgb, var(--color-foreground) 4%, transparent);
}
body.stnd-adapter[data-stnd-theme=documentation] {
  /* \u2500\u2500 Blockquotes \u2014 boxed cyan-tinted note, Zed style \u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=documentation] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  background: color-mix(in srgb, var(--color-cyan) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-cyan) 30%, transparent);
  border-radius: 6px;
  padding: var(--space-d2) var(--space);
}
body.stnd-adapter[data-stnd-theme=documentation] {
  /* \u2500\u2500 Rules \u2014 the faint blue divider \u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=documentation] :is(hr, .HyperMD-hr) {
  border: 0;
  border-top: 1px solid color-mix(in srgb, var(--color-accent) 10%, transparent);
  background: transparent;
}
body.stnd-adapter[data-stnd-theme=documentation] .doc-card {
  margin-top: 0px !important;
}`,dyslexia:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=dyslexia] {
  --color-light-background: #fdfaf6;
  --color-light-foreground: #2b2b2b;
  --color-dark-background: #242526;
  --color-dark-foreground: #e4e2de;
  --color-accent: #1f6690;
  --font-text: "Atkinson Hyperlegible Next", sans-serif;
  --font-header: "Atkinson Hyperlegible Next", sans-serif;
  --font-mono: "Atkinson Hyperlegible Mono", monospace;
  --font-weight-text: 400;
  --font-header-weight: 700;
  --font-header-letter-spacing: 0.03em;
  --line-height: 1.6;
  --optical-ratio: 1.414;
  --line-width: var(--line-width-base);
  --font-size: 1.15rem;
  --font-ratio: 1.25;
  --font-density: 1.6;
  --font-line-width: 38rem;
}
body.stnd-adapter[data-stnd-theme=dyslexia] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #fdfaf6;
  --color-light-foreground: #2b2b2b;
  --color-dark-background: #242526;
  --color-dark-foreground: #e4e2de;
  --color-accent: #1f6690;
  --font-text: "Atkinson Hyperlegible Next", sans-serif;
  --font-header: "Atkinson Hyperlegible Next", sans-serif;
  --font-mono: "Atkinson Hyperlegible Mono", monospace;
  --font-weight-text: 400;
  --font-header-weight: 700;
  --font-header-letter-spacing: 0.03em;
  --line-height: 1.6;
  --optical-ratio: 1.414;
  --line-width: var(--line-width-base);
  /* \u2500\u2500\u2500 Custom rules for Dyslexie \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Reduce visual stress: Never pure white or pure black */
  /* Warm off-white/cream */
  /* Dark charcoal instead of black */
  /* Soft dark */
  /* Soft light */
  /* Accessible, calm blue */
  /* Dedicated highly-legible fonts */
  /* Typographic tweaks for Dyslexia */
  /* Increased spacing to prevent letters/sentences from crowding */
  /* Higher leading for better tracking */
  /* Ratios */
  /* Mixins or utilities can use these to force better reading patterns */
}
body.stnd-adapter[data-stnd-theme=dyslexia] p,
body.stnd-adapter[data-stnd-theme=dyslexia] li,
body.stnd-adapter[data-stnd-theme=dyslexia] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  letter-spacing: 0.02em;
  word-spacing: 0.05em;
  text-align: left;
  /* Never justify text for dyslexia */
}
body.stnd-adapter[data-stnd-theme=dyslexia] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title),
body.stnd-adapter[data-stnd-theme=dyslexia] :is(.markdown-reading-view h2, .HyperMD-header-2),
body.stnd-adapter[data-stnd-theme=dyslexia] :is(.markdown-reading-view h3, .HyperMD-header-3),
body.stnd-adapter[data-stnd-theme=dyslexia] :is(.markdown-reading-view h4, .HyperMD-header-4),
body.stnd-adapter[data-stnd-theme=dyslexia] :is(.markdown-reading-view h5, .HyperMD-header-5),
body.stnd-adapter[data-stnd-theme=dyslexia] :is(.markdown-reading-view h6, .HyperMD-header-6) {
  margin-block-start: var(--space-6);
  margin-block-end: var(--space-4);
  letter-spacing: 0.05em;
}
body.stnd-adapter[data-stnd-theme=dyslexia] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  border-left: 4px solid var(--color-accent);
  padding-inline-start: var(--space-3);
  background: color-mix(in srgb, var(--color-accent) 5%, transparent);
  padding-block: var(--space-2);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}
body.stnd-adapter[data-stnd-theme=dyslexia] {
  /* Make links very explicit, not just a subtle color change */
}
body.stnd-adapter[data-stnd-theme=dyslexia] a {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  font-weight: 600;
}`,editorial:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=editorial] {
  --color-light-foreground: #292827;
  --color-light-background: #f7f6f4;
  --color-light-accent: #1f4f82;
  --shadow: none;
  --optical-ratio: 1.414;
  --color-dark-background: #292827;
  --color-dark-foreground: #f7f6f4;
  --color-dark-accent: #8fb4ff;
  --font-text: "Literata", "Georgia", serif;
  --font-header: "Tiempos Headline", "Georgia", serif;
  --font-header-weight: 600;
  --font-header-letter-spacing: 0em;
  --font-display: "Tiempos Headline", "Georgia", serif;
  --font-interface: "Instrument Sans";
  --font-size: 1.15rem;
  --line-height: 1.5;
  --line-width: 27rlh;
  --gap-body-mobile: var(--space);
  --mobile-line-height: 1.2;
  --gap-nl: var(--leading);
  --color-muted: color-mix( in srgb, var(--color-foreground) 75%, var(--color-background) );
  --font-ratio: 1.25;
  --font-density: 1.55;
  --font-line-width: 38rem;
}
body.stnd-adapter[data-stnd-theme=editorial] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-foreground: #292827;
  --color-light-background: #f7f6f4;
  --color-light-accent: #1f4f82;
  --shadow: none;
  --optical-ratio: 1.414;
  --color-dark-background: #292827;
  --color-dark-foreground: #f7f6f4;
  --color-dark-accent: #8fb4ff;
  --font-text: "Literata", "Georgia", serif;
  --font-header: "Tiempos Headline", "Georgia", serif;
  --font-header-weight: 600;
  --font-header-letter-spacing: 0em;
  --font-display: "Tiempos Headline", "Georgia", serif;
  --font-interface: "Instrument Sans";
  --font-size: 1.1rem;
  --line-height: 1.5;
  --line-width: 27rlh;
  --gap-body-mobile: var(--space);
  --mobile-line-height: 1.2;
  --gap-nl: var(--leading);
  --color-muted: color-mix( in srgb, var(--color-foreground) 75%, var(--color-background) );
  /* \u2500\u2500\u2500 Custom rules for Editorial \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=editorial] p {
  text-align: justify;
  text-align-last: left; /* don't justify the last line */
  text-justify: inter-word;
  hyphens: auto;
  -webkit-hyphens: auto;
  word-spacing: -0.1em;
  text-box-edge: cap ex;
  text-wrap: pretty;
  overflow-wrap: anywhere;
}
body.stnd-adapter[data-stnd-theme=editorial] p:not(:has(img)) + p {
  text-indent: 0;
}
body.stnd-adapter[data-stnd-theme=editorial] {
  /* The drop cap \u2014 the Chronicle's signature. initial-letter where supported,
     a float fallback elsewhere. Skips ledes that start with an image. */
}
body.stnd-adapter[data-stnd-theme=editorial] .prose > p:first-of-type:not(:has(img))::first-letter {
  font-family: var(--font-display);
  font-weight: 700;
  float: left;
  font-size: 3.2em;
  line-height: 0.85;
  padding-right: 0.08em;
  margin-top: 0.04em;
  color: var(--color-accent);
}
@supports (initial-letter: 3) {
  body.stnd-adapter[data-stnd-theme=editorial] .prose > p:first-of-type:not(:has(img))::first-letter {
    float: none;
    font-size: inherit;
    line-height: inherit;
    margin-top: 0;
    initial-letter: 3;
    padding-right: 0.12em;
  }
}
body.stnd-adapter[data-stnd-theme=editorial] header {
  grid-column: feature;
  border-bottom: 1px solid var(--color-foreground);
  padding-block-end: var(--trim);
}
body.stnd-adapter[data-stnd-theme=editorial] header * {
  margin-block-end: var(--leading);
}
body.stnd-adapter[data-stnd-theme=editorial] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
  letter-spacing: 0em;
  font-family: var(--font-display);
  text-wrap: balance;
}
body.stnd-adapter[data-stnd-theme=editorial] {
  /* Section heads ruled like a broadsheet */
}
body.stnd-adapter[data-stnd-theme=editorial] :is(.markdown-reading-view h2, .HyperMD-header-2),
body.stnd-adapter[data-stnd-theme=editorial] :is(.markdown-reading-view h3, .HyperMD-header-3) {
  margin-block-start: var(--space-10);
}
body.stnd-adapter[data-stnd-theme=editorial] :is(.markdown-reading-view h2, .HyperMD-header-2) {
  border-top: 3px double var(--color-foreground);
  padding-block-start: var(--leading);
}
body.stnd-adapter[data-stnd-theme=editorial] :is(.markdown-reading-view h4, .HyperMD-header-4),
body.stnd-adapter[data-stnd-theme=editorial] :is(.markdown-reading-view h5, .HyperMD-header-5),
body.stnd-adapter[data-stnd-theme=editorial] :is(.markdown-reading-view h6, .HyperMD-header-6) {
  margin-block-start: var(--space-4);
  margin-block-end: var(--leading);
}
body.stnd-adapter[data-stnd-theme=editorial] {
  /* Pull quote, magazine style */
}
body.stnd-adapter[data-stnd-theme=editorial] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  border: 0;
  padding-inline: var(--space-2);
  text-align: center;
  font-family: var(--font-display);
  font-size: var(--size-xl);
  line-height: 1.25;
  font-style: italic;
}
body.stnd-adapter[data-stnd-theme=editorial] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) p {
  text-align: center;
  text-align-last: center;
}
body.stnd-adapter[data-stnd-theme=editorial] figcaption {
  font-family: var(--font-interface);
  font-size: var(--size-xs);
  color: var(--color-muted);
}
body.stnd-adapter[data-stnd-theme=editorial] footer * {
  color: var(--color-subtle) !important;
}
body.stnd-adapter[data-stnd-theme=editorial] {
  /* Lede paragraph and byline \u2014 folded in from the retired newspaper theme */
}
body.stnd-adapter[data-stnd-theme=editorial] .lede {
  font-family: var(--font-text);
  font-size: calc(var(--size-md) * 1.05);
  color: color-mix(in srgb, var(--color-foreground) 70%, transparent);
  margin-bottom: var(--space);
}
body.stnd-adapter[data-stnd-theme=editorial] .byline {
  font-family: var(--font-interface);
  font-size: var(--size-sm);
  color: color-mix(in srgb, var(--color-foreground) 60%, transparent);
}`,federal:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=federal] {
  --color-light-background: hsl(45, 25%, 94%);
  --color-light-foreground: oklch(0.26 0.012 15);
  --color-light-accent: oklch(0.55 0.185 32);
  --color-light-border: hsl(45, 12%, 76%);
  --color-light-surface: hsl(45, 22%, 89%);
  --color-light-surface-low: hsl(45, 22%, 91%);
  --color-light-subtle: oklch(0.45 0.015 30);
  --color-light-muted: oklch(0.62 0.012 35);
  --color-dark-background: hsl(220, 10%, 10%);
  --color-dark-foreground: oklch(0.88 0.02 65);
  --color-dark-accent: oklch(0.68 0.17 36);
  --color-dark-border: hsl(220, 8%, 24%);
  --color-dark-surface: hsl(220, 10%, 13%);
  --color-dark-surface-low: hsl(220, 10%, 12%);
  --color-dark-subtle: oklch(0.65 0.02 50);
  --color-dark-muted: oklch(0.5 0.015 45);
  --font-text: "IBM Plex Sans", "Helvetica Now", system-ui, sans-serif;
  --font-header: "Helvetica Now", system-ui, sans-serif;
  --font-monospace: "IBM Plex Mono", monospace;
  --font-interface: "IBM Plex Mono", monospace;
  --radius: 0;
  --shadow: none;
  --shadow-inset: none;
  --shadow-raised: none;
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.45;
  --font-line-width: 42rem;
}
body.stnd-adapter[data-stnd-theme=federal] {
  /* \u{1F319} Active Mapping (Dark Mode) */
}
body.stnd-adapter[data-stnd-theme=federal][data-mode=dark], .dark body.stnd-adapter[data-stnd-theme=federal] {
  --color-background: var(--color-dark-background);
  --color-foreground: var(--color-dark-foreground);
  --color-accent: var(--color-dark-accent);
  --color-border: var(--color-dark-border);
  --color-surface: var(--color-dark-surface);
  --color-surface-low: var(--color-dark-surface-low);
  --color-subtle: var(--color-dark-subtle);
  --color-muted: var(--color-dark-muted);
}
body.stnd-adapter[data-stnd-theme=federal] {
  /* The theme selector sits on <html> \u2014 paint its own background so the
     sheet extends past the body's measure with no cold gray margins. */
  background: var(--color-background);
  /* Headings take the ink, not the base prose engine's heading color. */
}
body.stnd-adapter[data-stnd-theme=federal] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title),
body.stnd-adapter[data-stnd-theme=federal] :is(.markdown-reading-view h2, .HyperMD-header-2),
body.stnd-adapter[data-stnd-theme=federal] :is(.markdown-reading-view h3, .HyperMD-header-3),
body.stnd-adapter[data-stnd-theme=federal] :is(.markdown-reading-view h4, .HyperMD-header-4) {
  color: var(--color-foreground);
  text-align: left;
  padding: 0 0;
}
body.stnd-adapter[data-stnd-theme=federal] {
  /* \u2500\u2500\u2500 The spec voice: Berkeley Mono, small, engineering-flat \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=federal] .spec {
  font-family: var(--font-monospace);
  font-size: var(--scale-d3);
  letter-spacing: 0.02em;
  line-height: 1.5;
  margin: 0;
}
body.stnd-adapter[data-stnd-theme=federal] .spec.label {
  color: var(--color-subtle);
  text-transform: uppercase;
  font-size: var(--scale-d4);
  margin-block-end: 0.3em;
}
body.stnd-adapter[data-stnd-theme=federal] {
  /* \u2500\u2500\u2500 The federal bar: the one heavy element \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=federal] .bar {
  height: calc(var(--space-d2) * 1.2);
  background: var(--color-accent);
  display: none;
  margin-block: 0;
}`,forest:`body.stnd-adapter[data-stnd-theme=forest] {
  --color-light-background: #f7f3ee;
  --color-light-foreground: oklch(0.392 0.0488 67.4);
  --color-light-accent: var(--color-yellow);
  --color-light-header: var(--color-light-foreground);
  --color-light-red: oklch(0.5123 0.1555 30.78);
  --color-light-orange: oklch(0.6803 0.1692 45.57);
  --color-light-yellow: oklch(0.6879 0.1635 72.21);
  --color-light-green: oklch(0.5788 0.1848 142.16);
  --color-light-cyan: oklch(0.6578 0.105 196.53);
  --color-light-blue: oklch(0.5859 0.1292 231);
  --color-light-purple: oklch(0.5978 0.1058 303.66);
  --color-light-pink: oklch(0.657 0.169 350.57);
  --color-dark-background: #231e1a;
  --color-dark-foreground: #dcc7b2;
  --color-dark-accent: var(--color-yellow);
  --color-dark-header: var(--color-dark-foreground);
  --color-dark-red: #ac2016;
  --color-dark-orange: #ce6325;
  --color-dark-yellow: oklch(0.7879 0.1635 72.21);
  --color-dark-green: #2e9066;
  --color-dark-cyan: #4dadd5;
  --color-dark-blue: #256ea2;
  --color-dark-purple: #8e6ac7;
  --color-dark-pink: #dd78db;
  --font-weight-h1: 900;
  --font-weight-h2: 850;
  --font-weight-h3: 850;
  --font-weight-h4: 800;
  --font-weight-h5: 700;
  --font-weight-h6: 600;
  --font-text: "Forrest";
  --font-header: "Forrest";
  --font-monospace: "Monosten";
  --font-interface: "Monosten";
  --font-interface-weight: 600;
  --color-accent: var(--color-yellow);
  --color-code: var(--color-orange);
  --color-bold: var(--color-orange);
  --color-italic: var(--color-blue);
  --optical-ratio: var(--ratio-golden);
  --line-height: var(--optical-ratio);
  --font-weight: 400;
  --font-weight-bold: 500;
  --radius: var(--space);
  --stroke-width: 1.5px;
  --font-header-letter-spacing: 0em;
  --font-header-line-height: 1;
  --font-feature: "";
  --font-variation: "";
  --font-ratio: 1.25;
  --font-density: 1.55;
  --bold-weight: 700;
  --font-header-feature: "";
  --font-header-variation: "";
  --font-header-style: none;
  --font-header-weight: 900;
  --font-mono-feature: "salt";
  --font-mono-variation: "";
  --font-interface-feature: "salt";
  --font-interface-variation: "";
  --h2-size: calc(var(--font-text-size) * pow(var(--font-ratio), 2));
  --h3-size: calc(var(--font-text-size) * pow(var(--font-ratio), 1.5));
  --font-smallest: calc(var(--font-size) * pow(var(--font-ratio), -0.75));
  --font-smaller: calc(var(--font-size) * pow(var(--font-ratio), -0.5));
  --font-small: calc(var(--font-size) * pow(var(--font-ratio), -0.25));
  --font-size: 1.125rem;
  --font-line-width: 38rem;
}
body.stnd-adapter[data-stnd-theme=forest].theme-dark, body.stnd-adapter[data-stnd-theme=forest][data-theme-mode=dark] {
  --color-base-05: #2a241d;
  --color-base-00: #231e1a;
}
body.stnd-adapter[data-stnd-theme=forest] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  --color: color-mix(
    in oklab,
    var(--color-background) 25%,
    var(--color-accent)
  );
  text-shadow: -1px -1px 1px var(--color), 1px -1px 1px var(--color), -1px 1px 1px var(--color), 1px 1px 1px var(--color) !important;
  text-align: center;
  font-feature-settings: "liga", "onum", "kern", "smcp";
}
body.stnd-adapter[data-stnd-theme=forest].theme-dark :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), body.stnd-adapter[data-stnd-theme=forest][data-theme-mode=dark] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  --color: color-mix(
    in oklab,
    var(--color-background) 50%,
    var(--color-accent)
  );
  text-shadow: -1px -1px 1px var(--color), 1px -1px 1px var(--color), -1px 1px 1px var(--color), 1px 1px 1px var(--color) !important;
}
body.stnd-adapter[data-stnd-theme=forest] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6)) {
  color: color-mix(in oklab, var(--color-foreground) 95%, var(--color-background));
}
body.stnd-adapter[data-stnd-theme=forest] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title),
body.stnd-adapter[data-stnd-theme=forest] :is(:is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6))::first-letter {
  font-feature-settings: "swsh" off, "onum" on;
}
body.stnd-adapter[data-stnd-theme=forest] :is(.callout-title, .callout-title-inner) {
  font-family: var(--font-header);
  font-feature-settings: var(--font-header-feature);
  font-variation-settings: var(--font-header-variation);
  overflow-wrap: normal;
  letter-spacing: var(--font-header-letter-spacing, normal);
  line-height: var(--font-header-line-height, 1em);
  text-wrap: balance;
  font-style: var(--font-header-style, normal);
  font-weight: var(--font-header-weight);
}
body.stnd-adapter[data-stnd-theme=forest] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  position: relative;
  border-radius: calc(var(--radius-s) * 2);
  border: none;
  box-shadow: var(--shadow-inset);
}
body.stnd-adapter[data-stnd-theme=forest] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote)::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* https://www.transparenttextures.com/ - Arabesque */
  background-image: url("data:image/png;base64,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");
  mix-blend-mode: multiply;
  opacity: 0.3;
}
body.stnd-adapter[data-stnd-theme=forest] :is(hr, .HyperMD-hr) {
  font-size: calc(var(--h1-size) * 1);
  line-height: 0.75em;
  padding: 0;
  border: 0;
}
body.stnd-adapter[data-stnd-theme=forest] :is(hr, .HyperMD-hr)::after {
  content: "R";
  text-align: center;
  display: block;
  font-family: "Type Embellishments One";
  position: relative;
  top: 6px;
  opacity: 0.2;
}
body.stnd-adapter[data-stnd-theme=forest] {
  /* Type Embellishments One  (:is(hr, .HyperMD-hr) glyph) */
}
@font-face {
  font-family: "Type Embellishments One";
  src: url("data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAJTkAA4AAAAA9xQAAJSGAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GVgCFOBEICoOxRILsXwuDSAABNgIkA4cMBCAFpDkHg2sMFRvt0RdEvW5cAnVXRWMUn/05P6KadjSiKOGszuz//48JMg5RQi+Pac3DqOALMwk9tbLbRNbvdJRdMpUIQsfLmPeLyWycSDpmy9aSW1I1YNtfafatjSI48ODAQQPztX+1op/dTmkpsnAzLp7eQ3L1nxn0UBaC4mtcoa8kgvvu0ukrC8xt89uD9rL0Th5z6klpd8jyP16XFgePOUJjn+QeT3P283bfvtVkd2OIbRbTkP6rWBCvAQ11oGJUET/np4Wj4s5Rqn7nnCk5s5rC87Z7Xwdb6jHXZdih7l+lVZewTgpO0UkhMP3/CgD2cwmXib1aYwWB1VCGlYel6X+AcY8DsM3CDARsUgUkBIkOaSmje2XMpetb3iLittsut9vV6iLir3//V0utW75VyTmZaUQ4ACTNB5sHBAFW8qyZytJVfvelK5wCCDZXVyUsWKD5t9PrsGdcXD8hdSjVASvx52rPz2m+fS8kVJWv8B0IOTsJdPYukWNQQGwDQpbnsdv3Az0weBdwB0FbFgRxW1scJbX+/9rkDduk9RBv/Zs5hJovv0nZwOkOdj3MDGTQMMpgQVTvva8qFulMq5WrJAcCmw9MIBM88uztV2lquqYqo+uwc5665JS6uZSSbA96JFyQAsichm3OUE6t0T2l29dZkiF2CrIlY8hhbFKc0exygLqEsXX0vn4NgZYDhhA4wKUAS6M7LvzvSs0yxb4F37qIUsQ/OSrIVIoyJdmie4DFdAPLwQBLgsCSBLF7rF2Af7XEUi9y+WYpS120kg8/fGUXKiR59473jndyxmSfKVMQK0pdnslHCp1JQwVBJv9zWs4cSi8ANQHAd9/Xt/L9TnZK8/oqSmuASFuuFwZDYCaIBKBQXAkI4/e3n9a8CtgiQwxxrQTQz73rm00rlWyvxzjgBWEUowiDkz7/Gxly5RqqNT+Jc6W0FDcVkEAgWPqyyJ6/EwBQAd+RmNk3d527R/XtnNdXtSulhDXbIgVIZRcw/mbADHYCWgLMfZh1jBOg++FrBW2BKbQ6n5jzJQAWvnH3U80ZnqaBC7T/KLwLAAcw36LyZJ9+9AJjU+gYo+gGjFYFMPzejxcDFngVdsIBOAon4DR8AN/Av/AcupEDFaI6tIw6RV2nvqG303vpC5pF89eCNV2L0JK0PnZdp3Siy7pV99eD9Vg9Wy/VJ4ff+o/q7g5osAV2wyF4G07BefgIvofbgJcX3HqN+uIFzZqvFqhpL9v7Sr/aJAMezx07cmjfWacieTx8fdu8aUJ3tJuev3h+97n3edBz3+dUMHgRTsBx2IA1OAQL9TRYg3twDo6ggG2QBL8HdiD7QSh1mpxhDWfgX3/R6TGxT7YjECcXNw+vBo9fQFBIVk5eQVFJWUVVTZuOwNH8marhcwBEllyEKMcYv8M5p2jMEHbD4mxinJ3NXxvs+oAFhUVoDLYYhycQS0jkUgqVRmcwWWwOl8cXCEViiVQmVyhVao1WpzcY1/4ms8Vqs5c5nC63x+sr9weCgKHhUaPDG4pGYol4Mj2VmZ6Zm51fyOZzhVKxVl1cunmXVFnzuijMKXtLQH+i832+9/tHFT6EvuMvpvRGqiKf2PjexjewZG8QFINrV9dOepdXZ+dlkFmHoscnKLfii+sHlUnpMVhtdovLDWlZ0L+ydcA9vbsnaTecOwUAqLvb6ku8JrpmUj9szmkAmPoURqw9z1FO3mdBBrJl2r1voOCIa7COkgmS6yWZJfY3qngp5VlM8umRr7RIiRF0JEOXUaiQkgEAHGMCglpJpiMW3w3eIpbjAoXEBpPxfo5TSkaZxYpt3xmDwZ+v7p8IMLZeVTwmk6jIQpTIl+Nn45QGmUx+km2NbL0uk0bH/5KiUqxYLP0381arn6LgYj6wT4Os2kRJ8lg5P1uFUbFKkthDt0m+wUEhZQlttkhGFc8GiCrXalO1Fqsp5CWF03hNViWb6qdEKQI3YWaoPXBSXsCLDMuxooGV7LoncFT/+hmmWFhhgpY8KsRglESeFzhLWK0e1svXF/tKUuK4uL79Siw3ZE+miIevkMSmuPAnINgaK2u2OGOb5B/ie9jgp1lHmceYphpnGMuaEDJnlCySGSSGhRk4nmdF7qIEUqQKfUPi/AOFPiExfkFCv6C458dJ8A9WjEqo6Q0/1WZ7lX8ofW2jBR9ZErmkMKsUEBRonykYpVFZYpqaazJbzJYLtnSLopoVm1kp0Vn2pQA1RZGsgtEoGY+XGCca5ityUpAgWzleNPG8TfAPqrBah/EFQqkiDzT4RRuDxhX0tgYbhirWc8p5tZDwRF1OtmbFCGUHDT4zBv7HKVlW5Pm5uSSpBsNgk8lfso71b+XmTXajxBkF0Xpd8cRinBMQ6xu+RsbRN1GjWq801qu5ld2+SKLefgMRvSzjV4joGRaw59AS2blylMoXKcjNk9LCiNZaKc1zqFqQuJhiFAf8vgpX5/eaFL3AAKuslDWIoKrjiACIW32LjYSRXHQKQ4Vm1pOZeFmxWyA4rL4B09rSqiGiSbmVVAALJiw5UG8MTBRgY2imK2c+2fbVJ0yFlpAoNjrlBxbF2BmCf/HneFggcOeJmRgHFGe5wpkw60LqzFGgBzFJFPRB1jwOIA0mqSDR3MjWNjGXTAb4g80IlfcOd+g/MJ11DfQwWBmtA2tVAITcgQAgSMuPQ5lNCtEh/heIsga3oXhQ5GW6NLtneM/FBs3DQVjFxSXecDmnwd73u6a54ReDZg/TqzSirKY3SDXhf6qWf/+uRAQNnUtnJ/Sz38quhRPCIL5nERKz4FlCbzLk5592268Sd1O9FrEybz4tL1xClCzxfIJqPKT7zTE2aBGpjrD0m0T1FnxpgNp1osZ5WqMQhaELxIwd/jOjEYYtRqyfQ3Z7DwjRvWEE4e1W+FeaX7hpFPR3lNywEFHx/JHT519J1RcZ3XJGuGrSjmUWTY6IEzc9Q/7soACCuYwTQbOrbwSDGqN0iudjK2429ND8rkLzdF3zpLADZt/FKDhje1EFpkCyAE+gG/+yow6gpLaKm7QPQYCc0GeoIhVXXLAeG8fKIiKt8FpgEwCqkMgBNBoXE7//1w+qq/YLKDT8o59zajrYgJCThlCziOcBRhytbNMyxX4YylmaUsmxGnouQIxzvFlU/ZY71rAxBuQ+g71ZQ6kqMd0HpfJaJOQOzJTiS6iwf7NKRUOkrpMk01thzgQv8HFj7TA/92Q12u0FMnXuOMbzaOVfVMmWgkjN2uTlwjoo3wNTRIwb5NjqB75cioFZI5URDtvMMpIZYTb3Lh6anZFRclviCfakdHsmbenVERkHXto9mmxMmvO0xIxRmIYnQ8BvlFrmx/g75BmJ6CEZClF4qpBAM9ofnGSg8ycKOEXBTBsijNk77psbStSD2vIbDg4Wn1tbPR3WaDoWrKW58ZE8EYhzCuYg31VcHBvrM6ceH3nlIkCgjmRkgqBlXpXCcbm6Q9vNVF0pM1s/z9/3cGhd5CkRF1GR0dtFWwXnjUEJZ3iJ6Q7424zzlYVVQYWxSIFmRYvNDwlfJlRTh15lTOQkyY4gYEIkIqp81lgyZ8qOIxV8pCc1hzxWPousbsBLtIihzF3XyF32aFg+jGKOkfYnXUzotjXMuKkjxhuNp/PyBbs27n4kEtxCXB1apIp1pU1YMdFnGUP95kWorhWuqhQcfwvwc8kLkJcwFm50wcy3kcrXf+ve3NT6lOW5RO/I3fajjiEy1Y1gyvgoDcn1ADBDFAbKhjsJ1/uLZjZQarUrgWA4djAw9IgK6kHNEzKkx427VIQo333BYs7FMSqOg+RSDZ9mxwWxa/ixjZJHGA/MVPIRrrKSZ0KAC7Pzv9rpcTyAt0JbcDL7t8aUZdt+JLHnwNlOUBk9oranjrmVRZ6C/d3GGMKK4QS/21gbIcMj6IeCFG/2fNp4Gi8JnzALT9ZpW8sNulOKSeXS+cMeBzQ34R4RYhZQVJYBZLe8PmCPWohSlT1g4KPQs0234pjW7JcqrEI8lnZhhmXG4u5uIco7o7zP2jzIhbfCeXsJAvoBa4GmP0TB1pf6Mc8o/9/LBlW055gSZTsfpkFTwyys2y1ZtglPDpu6ncgLjBFcXRh+Qfwj2AL4AVVea2l9xjZI9rRqmJVzfYt/EDUrblRDKtMEoTAVXfYAgRNdjDUYnh4xykQCff4Vd0PLlkTtwWF01fh09s2PVveZ3yL/cumJuoYu1lhRFiGwPKLeOvzszf9tpW5gsvfaTAZNNmxsxwyDK10fkAt46zUZCusP6o486hZgXRyNJTfglVeW1nJoSnYJWH0scEqW+OiNYDptsq3tQMrf01OQPltuOjfjAILLbjtBhi/E7xlmtgFM87eO60hG/QWI1s/oB9V2DnOsozVxp+Ga577xSKvBpvgDe2TaPadik4tmnO12fo4M5RtWpABdZt4Q4kPVaOyYJl36fR8j2Vm3i3O7KTZSjL/yg+KSWh/N4lXGbRjGwAfmkPLnIMXI7RXjeRMBCLD2l5y08f4NtOlS9I7GyRqhhWHpeN4ctnBDClv9PZ3uCf6//QtyUUSBoSngHfwNewGW637TP/9n632JTLSZWdGDpUkvnu/Ff6Alyw5IeRIFAsNvEVvXWL1doGwYLYd4vgctyoQydcLAPErn3uwNt0HBZr1C9EBO5hgnS33voK/M0HMdTa7aRN54OOXFpp576N56ZIOrnvYnhN0OEYUOz2IILnXLfk9CHNC5qs/akWBYBXhTmkWXxtG9UXBx/ZLDE+XfE21egrwGrQ9QZcWFb1n6INdXg5/rtWfxlzDLCasQ5T3E8ghb6btUXKORSNjpHwU+aN1GbKnIyHsL2mo3xEsOCtqoOeabA1j/T7E6IwadnXRjdsFBwtqggWbN/UMdDY0D66+IW/7elDRTimDrI3rGEa3LUgiwxx5/mHm/ZdXx/pH1Fqv5jddk2WK1AjN+yGa+5vj4WxaLnH1y7d3Pv5xltcpyc+lV1VK5W+4m5a7sfjB7meIbE47mEUfZssD9hyQhh5ISWcmCy83oNXqlEl6ILgkaKJ2F0SgEpZdZHLRT7ggikiGER+DeuazGbMI1oLmsSRJvldjeBqO032nNJC3lIfRa7fHpLwNIkChWrNo685HO3+QfSw8lJ8mu7t4scPvo4kenjFJaxSIUOLHWT17/7mwkASB6YDfaxiootVVoNKpNa1fM4b9Ep4Q6hFFCxKLh7epu0aVwWyhR3IOZ6OFwER5DiAF0TNwLAMSYmfkSEBBGGOSsI+5f9cu5/1oDiiPWff7cxuZ8YK391bjy3tKOOdKKa2pZONZWeykxSb5Zas+ey1pzBhS8+6qN3Pp9iAO9ldPmG1+hg7Qqjt60BjKfPuj+H97Y1BN5v5MCsXguQi/EBZjlf2BdaJ1+SB5GQCXrrCTUfXH/wZwAZFcCvekxe82ytFDE6Ii3Hzdqw1hsXg09csfR9v0DlQ1iBjoQxqTf0U+xpmtH6jVh021MzV3NXpTUJbEawHVGE4O+x/FWY5Z36dRqWGSMAZxQb1WjHHTSrcD73HD0OeJ2xPKnq4Z1JqfOv74IqHU1DTAohRRhaChK4DTJmPuFrpfsIgQPPOScUYWPdGImSo8PJAINhGQ+juCGlr3cQi6uPIvh+UVDOjbsl2JAobxgH985GpmZcHLrzvmTYaRoJ8KemC4SkSu8nLPyilIdBSaCEJ+ZEw6brkYecde5L+DHZzvCjNxdWxuYXnJGHDR60VkGhod7jjBw38g83TqDfi76oY1HzzAwEFZYKADbk2k1rfw7jfRU3uHjKFUcloGgn/aaNnsvh1Jv29a0JDHaFGGUwSvtxG7NPBtC6bBSqHpI+Nq6AL+qG1N/V8ebyBUyuGS4RNe+ZtNt71dWkYm670rlSaUEj3oCUT3Yra7ydK5ybIolWIKI01aFBPmES0oVjPwyKms7q2NjIrtAJEE4gxX9yKfqp4WDJQzII/Z/S6GydhQxG7zdCWGRafvlb5ta5b0KPpFgbiME5ZPl5CQig+ca5SX1hL7slLWKqDRI3rHMQTiBoMvPI+qSr5IXMb561nri+P7IicZHPWaIEWeGY1mWnev6w5eEO/ewyx50vcmOZ8ja5azzuc/tos4qWw1JBShM+FFO0Eox2lGJWXpW1VIlwbmRp6Vpp5cjHo30XGXco9wZYce7BB+czuuq/+G1qx1B6cBjSeRc1pCz030HzVNSNtllq97bRBLc2ErpoWIbxKiCELYVvX2AhVSDDKZopzdnKB+sAVjO4OrsRCVUVf5Qm9LdF1tNXExv/ydnThQx85x1vfGa6yQe27UJxtOhaUI3A5auPlfrrBf7s7JJBS4bGfxd3Yz0rUY7HuNOnHEuH1TlHGme0eWHV7eC8+ey+0LzrDVw4DpxOyQlPq9+5ymJ3UEFIUepzI+iNVXx0M9gx2psrgpHi1YOo+zxMyp3nKv7hwMsrfHNNup8RNblxaXmArkbHdeo/7hff77LEzxWWW+rczyxeaBoCzPJth2bELqfaHg8jILIQU1eLw89ZEsAjgZfOyLDdXl+6MnTp4/cMd0pgpTE/qrbjREIY2Sv+jjise8Hnddl7/1y2z88oOWUxkMOnqAMVDcKdWXseW0rkWZEYrPuKkSR4RmFyoIMwsdSnpYPXjbSmMEEyTx5ZBAB45mRIrEYMcYIxdnHUh4xugnHPOuimcwjxQM/CmGsVQ+N1WJTEnb7lNZklvOxoNp8CvKJIPgYGM6fv3z6xM3edRnZx+B+HPshSDzaxkdPXhhiiGjjO5lvZzP0SBGocx+U44AjVz/u+lVvvI6MeU+HO+7kPp2mMY8UTfEneJvEz6raLursU0ldvXjz/2jQp/Kt47f0/ZcuXXo+Z1kTLLl7d8CfPb3qvNlZDsS2JanFqkdC4y94CnIC2TaPPPKjUJMp7Ki2i7JbTa9zcPabehQv8c/J5vHNDytXqzqJ/3727adq0HrT5/72yutVYN+58kECT/En/Imoi5iBf+F4HthSusSYytwedjxfu8WPD86BHlFdoo/f82P59gA/aCkf0irvhW2F/wQxNgUsnFPYSRFuxJaQipVf3lFS0Orkv4iQYHDY+wGhu9sKIXNs6KysLsHPVi8kYfbr6p3Czz4I6o9YvoHZyWsBvsa2tvjr9vVO/AYJOtPt42kKgKgG115lpSEjU7SqcxNA44kex7gInUreAWA+9jrL0MGDC+Z6pmKnCZrxJ+sq7Le0deQif6DAQ/C03KtWRlG3ngvCEUBYG0ckXYsY+mj9AOFMnDPmlsCMc+5PlhldhNQEgMonZTzlT8320J+Z3tzzGReDG5OERV3b28REnj6MdGNEsIjIUkTax98SWLgpvibyyIOodyVJ8n7QP8yIuuE+enhXep2GTNlMN4s4Pygu/e3N6j5kIZlSjdtLHdcec+5E5SRr41K6dhNn1LiaPWrDbMbSG8ZFKixQdOEEV9Cr5KPIZSFOb41S5iH2ubFfWqURVB6wib54GP7bBalW0qKgOHHNX9JARrgcexLFJh+Jsz7d9LU19DIh3+ssxewrOf0N7MHTxJxyFQttKFH5rfjamCjubMFIc5ZIDy5m4j7rgwb+3Se2UoeGf+ZD2yNJbf2VR7Txvd2GMNDnc+6P/jczVlfdjEc7JCg1QJ6/3nVdBoUfDoRV2DIrkTnngVCuI8RrbER0gVwEom9cM/RLu4NnAOE14gXGGXLsqlx8nL0E65p3fmpPX1LACkABFaWOmewwM15VjzFW9YofFb/ITfyoPGM3ShKxT1f+kR6rROTiibzVnNROe0ReLeam0zJUOG7EnZvXxrkRVtIQNX3oVT3X94avAEMyQVtN9RfIzQFpzeMdvw8W9UV1KMU58k7GBnW0cyqugnJs3naZ3M7h0LiBp5DTLMq5bUOIhBxh2UmIHulpf8v5OY0kHzK1jwDg06arekzgmU6nL0ZWpWyPBjYdYeuar6jvJ+rkR7rB0KVyEU2/q1KIUaFt9zALv5sU1kdAsE2sjTMQ7u/wdqZ+kyDxtxPg25CR++S1KR6k81v0AwqafGa5DQioT+LYAUQfI+N5eHZNmCtVUNxJi+2Op6wDccZ3bG3D9wOLjKmxCBQeGVr3Wm2PNu/ymNFiRVj4UM8nT+77RWqUFFrj05X5VycbhVuPL6CU2ZSrUJAq+ivijwFYgfWzmuZsecG2gFCOwTAM09iRwhxNuabCGksyiGJ3ysBqkpEFezJta/5wlkse6QOTYs9ZKjSbPTSLGgQo1bEaFqZbfKDaLkB40vTcMVd4ec5cAG1YyAGaKgJwd0vQjCm1xOkaAu1VaXHxdggJO6/ujQCCjA9apRAYGLPL1BCW4o08r+Ed0Bu1jxzLjEQlr+5qc2sva3isyRWaW47bod1vbF0xT+87WuNVuXG5Z4AR37+3SQAR6jkUjup+f0hVCa4S8pNHq3cYktQ6GEJUngWulV8Ny84RwHVgr2DG7oamvgqHj5eZjBUjOW9Vp6rG5E2Z7x0vaVmeB1YYR7QE4w28OwRQ4I7VmcBVRC8Y+/spqwDhRjKjsRKcc6ExTnmL5h1cCtAWQD/WXBU9dWQSMty+2T15osFOgqpuvTa5GW2SE0AkPovO89ktjWHACxq61h7PO0/hxseTqp61wyg70dPiMAGkaRZQJMplSP5Pgv5kEl+01frBUZ41YG+neFemQ+eJDPvn0W1fM/rdWWaLKsDfuDfWt9IF5Z5ZJxuqORWSNVFLGCqsav8WGNONX9sCab9ZXmbN54VikXHHpzpPot6bWtBtAxPdNWF7IEOSPx7lhyADi/wYJIYvnxL4/vfkHFPCKWWcn3/V9pVz+40gVsQHf2v7w/lXbF8+/wJnFHNStdogXfbVsQ9gXDl2bqsZEm0Mwtw2YO654MdrUMEoQbruLDJa+MQP3ACWBQlnX3YScka2PeEskTd2lOzatLF3nUqNXs6khgWDrtds+3FBr7zf88MPnd0933T3dP3Y+WPPVzJGHwX3d2zCrwL5u6UW9D+erry7pR78fjlJjrm/3eRff/tq3xvPcajGAy4Qxh0R/0hnGjQsAAmJG+dNjuSclL0mKqtfc7CMirtYLT9xtR14i2SVXQFc9T+els7oVyX24dDGYWYlYUQdneT2uS+xXQpJPmh8T8xmx2SLu/pN6P5GAZtV/TF5ZCnssXBgc/HunCC3TocyUlyp+Zhwo22tq4fIeJYqNlbKf4Dur8oAxwIJO6VftxeiDAGnckJBbewTCXu2tncalCA9daFC4tgWK5A3tsDMHk6GWCLD96rnKVgthh2lvss4zC77hYLTlxevUg3MulxfjI3xFRpHBb4PK6IazKWASi7emzIY9gLksjdo5ge5JIUbaocOZJ4lkXeEHonnwvbzox7aggpiE0ctKUaojnCASG0aqiRBTwBDaU3Doj/EfzdLqDZKEmBzWJFnaL0CtrzIHWZ562bzg4OSbJ6GterRo4ETpJ0AKOnNoBtr/lfwyRs3uajNG/YyQVbDsgd+XyqCCyUNHq6ELn6Wz/3zAipp2lwF3N7RfIkmNxCEPqceBzwe+/hB7cW1aaCQp3BHSFq6LmRqa2nh+8aihRP2K5CbCfNKYzAbssDrIUPGmsDio60pZ0mzKiedDjse8zUI6z1CKI2dcQvFOA99PZC8Egdu6UjXlMbZKmFit4YuXRu/QanSsSsWBtFOFXaoleYnYwLsa9x2w67f3DIbpIov7NEO4Zn+aW+BmjbiaT0BbAGrfrkTOl08m0AOPTMPrQaxvg80Jx1T+TBU7I1Ry5llFNS8X3rWzGIIkovb4bcrcuOFu2WkEohNad16sg6fvmEaf2SajDwKHHL4mjfC3JyiH3N58v5kRCJEs4is60XT0Eq+/x7MH6zrkP3eScrVSiF1otV9BFva61DXG9LyQszGwokqdKRmOWhwferMSze74+gqhAdmZtB2/+mXUy5sjYEAisTjtU0dHt+SiYfS1L6hGac8ShmF9uH59xzWiij7G4gr8w2wKaru36tRTO+77V1EFJ9rAYW9XizO+7hs2QZYYKHHPxzk/ENlz25D3sz6U5scntlaz4hTlq8HTXmX2qT+NGNWh6JgMJ12hdhuUltclJ2Qd+q3lJpVydlkoqPyL/znVWGccMrr5Sl5SxL8GaBugtvj4bnpCUP8p/Z51eFkna+rXuOX7VUU3lnBvD5LSbIWLea/NamdDlX1oKVb32E6Gi6nUOHC7M9/plmeoL3Z9hrqLBc3SaXKQs1Quzb3C8qVt7RXRXGj6u0HQi5G+QR362y9xSN2RQKb7O+ZLd/kC59NyrmFxDpyAl61drZh46Sp9holgbSlXSMtVfo03QhGVBs/tcRljxHkycv5YzeQpEGciyNGgJGnpJs+wnrafX6/S6FnLGSye+JrUgf4rjOWc3LIRq2rUkFWSPAh7aZChME3hRYwqYOevEFSp0bXXwRaKkV5XtiNFb6RwRWfyVtb1V1bFWlFfHbg5C4ZFrKlEeJdNt5h5E09OAaugAKcz+/k4g9vkYG+Wqo3wqwnFxEwN2x+KkLNN8y5Nce1B0ZM/n3NiYsOLyT5SbdC34FtR9AxkQNSnYlCTsGgA1JJwjfDW4uLRRMJ/lI9rNRjfQ/tEEMsklNUr2k+syuIPXvbYBlFnDXmpn/E5oCyVzHpcJjrvKlkIRrbjZEPF/6OG6t6Q41gvuNBVQ8hO2rcx5HBI9bu1xMiaO/ax3IOmTiThvm9k1aE/jR5MSsiB/aHyP7sIlenJWR7/bykMRJxgXJtgctB4eJF3GWwBWlOhDhVEEPQe4lsS4cjWeFTekYQBTmeRJkttGQ12vJDhfuJqKhDOnJ92Iqro3jiRlU/LUq6XhTqul+dVjeFWW37GL41Cx6U2TtNG+ObpGKrpAfL3mAEcQ4dndQEA5o/LaZVvWAZSI9GNW8aAJaISNA97+FuPCTGgVrN32yUYHiip8X8qGKCWHO/Y5bZ487Zqot0j33R3OoMID6sa4GyJhvKFK8GFKaCmhAnMFFTQJVwWHbnYMl0dWaXYYMWhLGzTTRGQSxeUwnIDYVKRY057oPdGJLINREz09IzdTpxccm9DAOMNsxPnTGSUBmZ4AF66KlzCDnBM2zwCL0w0XY/qxxqHKDkPJg9SjCeLg+kFSwzFFvkNIvd2Tw4kwlffv4MtFy7OkzDscxNBryfrEpZ1SGqCpINhmJD60XB7RNDkbr2kEMQLurHQhmtg8jXNYj481RLuRFboNoRVX3Wywnhu0tO1N4OaNQpHD/KKXlK/ckOmZmKmjahYUvAHGwffJe8kyWvI5BDc2lfs/gacO65deFPPprg0uZjox5EZQj0R8+CG6M4iliqzfDwPPTOm96lWZZyX5OI3Oz8hLZfecNkEtjNJ+F+6LjkUA9sOYULhFMUSKuDs71Ca7PnISOhPDLdtw2RkJWRs7ACDy+vi2KrBgcsTSe/d8PnialWcGQiW9dh3/P19Ip/WJ5LzungdWyd0bAVnFgtN2gJy3XB2s9TGAab8YE696CfgvZKRqKZl1DhWPPPzSHFJpTFVmQyT7AuGx9GipjlWkP3+OqA4dZ1GB7I7cBpamFshW+whsNsKMNmsUHzfNdRom4D/KQUzBJ9uFkzaDEwz1yRp9KKe69jRf5Fao47oPOxY2ER7aWj6RWVfbOXdwEQF2aS1QvrDl6kpIkhk7WhdmbPdQ3KXbGqPNaOThUfKvYmhdHsqZjgdLfRkhtrUmnTBw2RtbA5w+OstXe0CoibiVK5ZChbRO855oj2O4ZquUgUFc7Iqa2YmRykkGGOZ15VvPjy7kTEdrocYeM5zVUSjR0EvZNJ36nAF3euAAzp21BurzjMouFoWAbDR9MDPGpfCTAdCvhQSShxsvt4BFvUyIQgXEhuwlnRwz02jhTVnZ/TGx0COFhbe+qDrbOd5ndjsXZET6FiyyY4A8CwqHlaJ+UUeih1ZGkiZ68pQYgzPIv0XG9xYzb8Bi61/a/VpfNb+tZJiTZ6jP0j/HrwA79JtbL5y6cY8ijNVp0Au0rR8CcIrPp9G+ceTiraGEoXZKqksmBiJ8GWnJilULePlkGyr4Qqws0y/WuvJy0XQTI1SU6dei562eZ+JXIs+4+YVIsJbmwTmObyR3N6n/pNtH0xS8fxAEnLNwEATJcRbiCQjfqZCcfgriG9l8NszKHlmLi1jLMXYhFPmaFURrj+rIIODwANmxW+VfZAbROUMvUgySsEydLDAfRHrI8wGqPmzTFFzNxALsG9PmZg/Bq5anYlHgwg37/T5FjwYWsKlUc86CiQIN/Vq+GmSn+NdZcGVmZjyhiHI1TgnezYaXVoV4e+hbHQG8kt8tDg94S5L0uxDldeF07DX9eQU5tn9fS+SjKKcSbqOb9qxpLkgDVq0EYi4Gw6EI+cFjeff8h6m+Zlxns4HpW3Arj2iVy2kp6c5wIkdxCxkIwPThxV8M64aOnjrRpJJ0VhF7rPtJUiXP4pjPVWvsfBNwAuwjSPFfVZy7O3eP3EEgyZQOUcfCfMv3iLbSnixM3BpeX/d0xmig1x+h/922DtFeOkBT5GPy2IE8Q3Yzjm+G5PMDWnelMBYeVZjJNCkK2IJ2EBM0BHX0YDxk6bvEXMWiuEp8ANWXaE2kp6PaYnpIZV8chdFz4AbmSExdYSrI3ESgV2U/9SlmIhQxvM5I1Cjm1vZHD+0cL4XD4/d8DCTyysbooNIs6vis/43bAn4gvGxZzrmozTbCftD3RKz1fd2knuG/pAcZv3pjZtI+PTxMHJnmMeutRwOdj1nHiJyNxhp1GYvcRAnHEyTagVivH75Q7DrD/8WdoUhe4x/alzsBFY8euUa6SDdtUKyoXV9tLwwG2eGTm/i8b2W6jLJalFcbEcOr1mpU9DfE9yeX7JKlVRnrkcmHDucWXJMvTK1ehcMVO3cWxlctbLNTbr6Hgtd+XsP/LZCS6MmCV4fUMu5wjfyNhIdjtJsdVSFJx9lbXYhtpID+bYkhOOBUtl88a64rH8yRL6NZyJGU/moOFEgJYd02/VdgmhpaCCqYuQFRWwSysHmIbwXF5Z5WX3GpLFi+r0A5eHNkSAXqWJuymqAg3ERHF7iMoXP4POj3FNTXOgWAfpsMWHbmIDUKTLKazEIqKxBWsENNBVJp5rjYb4sqX1SjKmTN6ARsItzzQ0XFlGl0oWXglNuRHvORXDrlNCtza+IwQqz9chbSLXKcQGbSngG/kXOTR5mCqo4oK8w9ypByzz42sFAz8Kr8Pp7iInbYhXHZz1lf7DPKwDZvoe6QbcAqdyOszKsK3FAjFZdLjkd2MoOVttQb1kvkT/U05O18zBhTvs7mknomwN2WrZm8qF5l5y5ssJOeW7DZB155GBJIyTckanEMgX8wW6H17MPodj+HKvaEaj1AOAfwiO/lKH8wYYUFx0a3aWsfny4yBv3Tw5rPhVlETvj3zuGqK7aFmgSVsdoUfXPTGSxS2nSX5090d0lPgMhR5w1BhaH+oy3CpT6nycLsnlBoERnH8d2zEJ0NZmDuGdtxh9EqfaHyV4Q3Uy/6dWADvkxc0FoOs2mkvZNxq/q0IsFfaDmgKj5TI7Hp1f5d6D0FnMha4DkrPuvscyNpZcVFwJYlk4yxLAH6NpsSPKUye8vHdYZGRKTLRkEc1uhoPexR+x+eR4cM4s3yHF6B3BIeh/svcS8K5etSi3npaGAXQO6roQAbDvD7OpANLFHBReYHs/YkHzfymwL6pUb+nqjKrhBC8rtLmohvZmcgLQ20JrS7PQSp/uhTsHx2vezNtxvNZHVB/KpLftSzsafmGydO3YxJu1q5nsTNki7HpDXkqdDTFMM6zNN0OOYmIs7QZpDrCltyUHXSIbple30l3HLnl4ZcAgPGtz9OrcbsoZXQ/D7UukOOZo4ZnIjiJBihXE2xTgiO5TerbCXtxmkSfEfcHQ8F1CCchmpb/X7PkmCvlpAsm6oPO2NFZxVaBkok8ptMim6TeDRpIfCqM4jgMw3GziJrIwUScbrFqsqejCvBju2ywNN+RS0urLhM1jEm3Um5YsL02tgXTjhKL0aMBHb+Ip/9/3jye7yxPfzksCwjasLItTXtDpitte2xvRFy4HrmR0bgLIveZ3ogg82b14bR5G9+djK3mTvzkWPhU22NJKF3j0zrny1Fx6dsjSlAZ7gfT8bHYWrpxlB5Fc5YSkAny6yXWF2zvJeihPoNCeo8Ys+Csb0mtNYSO3hiSdJh5hQzAWTsSw8P/kzwtMlA1Zj13prGC30e3QJIyycE4Rw9hv6VzoN3fuCw4JEsL3whHh2tuvm/PYfe7DihcX6BNaYAAEjNctFk7zDlxYWoYqRoClZSQqqkBWCr//fJSWF3mJomFWD22WkoFrDgrUBdPu1j3pll79do0aLscg64cb085tdPIgNy6T1avdPaEXQRqs6utobYZuFrGlHd+g8Xeu+1QKJnyuHUWICjeThZmwE5VwOW1e68VE9EpB2DLDzcUpu+md8tbsHb3bLmScSBVyxDQT6ii8Y5lS+/2x9cVHu4EqNtxb9q9qTlcA1CDNkPhu01tHWHCyGRxdB/KKdSs3Ja2ymy5Hs84btc+1CT7C/SKqzy1g5uQcMuWkwp0rTGmWegy9Teq8WUkfUNE91fBdSaUEgNLqPXNKD5W18cI2DQQMb+9rA4G8l59x3xumFTvEk2DhndwevesD0rJNjSOiPb+Yj9AN7WrYXZMzFNLr11ZkPZ0OrkYt+BBAhsxvy4gddQDiysEdwlByKKN7SyansMkhJUOXy+VxaVCV56GXWkTX9vrVeI02Q0ggDY/WCTOmXdRzZfDGhFuAG2AdKX+hhW2J7wkZShJ3R98v6oPGxVmHltDJ+dndw06SdalDPpI2A1+EI0htVCfJjAs6bpX8lc8RB3ezOKFcQwQGtH9zNX7qJ5jYdXTBUcon2gWrSWXD54AmroU0IMHKdTlbUmXMVXLHd6pXrWvqFagaHs90MVo+G5bsrwmcNIjtwRDlti/XAnnTxNJ4WzmZwZdYpWVfN9ik3oiP2jevTSmNaFUA7NTLbBxSZuBZbR3B7/C7nT+ISGq46Aju6PgqH/o+VnDsC+ERzqoZmPxXP998a8TVf8CIZzKM2jrTXvwv+8iqbOWt0zGjYWhrSzspwSJy+UMiWFN5FVc/Mn8IbK2n6AGK99L7Xli7xtwoZH+7+jqxNBx7gV7WxN2Go3WgsJxU69iGj4bqJUs4kGOjkrrmir+RXZ+vKmqyVFFCE4gNIsqqtMIhJuO+tKJJBjI+v9Ztvfau1N2XRakM2ziU25c6qOW4UX50CUZ7URlVqpdSnlUUHT06d2RwqjCXN9OqV4N9rCWMAh/R10Gi3i7BZlRLILmdV/JqqtG64l8arghKAsbp3vPMGLE1XFTbC1RO2BavxrY8j3bZrWVWwNmVLgfIs98OHKMWk7gRttpGbQ/9+EVbjmWwkWfvVRFMcgMNAvDZ6XXFeK2I79OWk3d6LR4qpekgR2j18vbBccDkwcIbZVxFp4kazrTbFmroQjnet+MT6DT1WLKCAgyPH+M57cuJTHDvd9eiIWK2sANOEAZ8t//cFEWrb8Za/Z4w2SgljwB/FxSfliHxXrbpFl97KQVN2GWCw+/3hQ1tLf+5Y90D73d/2HBbXUHcUQ++oPRkY03Acm8orrCBrNHm2GqEmKmgL/yME7MOs+523he4mvqdUaYtBX3XtdGgN8mF4/dd28az5KgjU/Dk6L3XQ6+SurLpXFyozfmtZuq+utr3AmL5omv6aAscchNpHzqHg0JHzka0ZTAcATHrFgu0ZdTmbovNe8mKi/Hy1jc5eBEC8IPmmqrwuyUdv6q9ZZOkd99RhZZfnCrvKl0eBF2/ZLuZ9pUL++/XYEGv1XFeA0EYu9RKuhgKLQqwYyauDL88YBLP3iRh7M6oHmuQLOOOcO9frqWEEGjmUd9z+4ssuwsEVlEyvhFB5J8oTwvXt8e7lsRnFGy5Xg00FKCj/Hu7rJ1znJ+hiw1iqJkXSoFONiJysM2Cn9OYAtux6JK6f+nWXDZqX2rjXVwYxL6ytgAjsd8O9cVuujubSIGY0P8ZwkdJ8XLq9dQ6Soup+qzgpj4YaXTtpXA2A+POnVcAVA/s6eOiorjm25/q3FC4B4M/L9/u3VHuBmDUm4eVp4pi4dEjPjQ0xO9toT9ifXzHQxs/ONh7pV1hfGmV+QyboAn60cusHT0PdGcnP0TPoW94VX635OeWyv4wuD5PaGOw5VwDDjBC1kWxhtq2fyA2AQsl/NjcYrulN3wd9fiWiRqEnrCbuPqgpeE//uFe/FIlG/Wtzl7GBhZOpX0iE18gta0SLxFz5v2XctXzOjC5fky43QuICXePXCYAYqKE35WDUfT6bhXivcyxZ0AJS87VX0hXqVMHdTwlR5LxjxMgtzBOzjlKDtev3DAY7e4oanpGyKpe/EzadbLEXlP50tg5blVos9oxZmIyPOU0tqLdTs35OBt8F4yaG1SgCepAQMVh+7Jfh0Uxkr/OPP1UCiMLlhmrPe8dzB2qDmS4BEJpTHD3JFMqrGcJfDQqV4/J+jsTfACcm/w85sdSG7/LSQZtu29EfltQW9uj1JtQ1zearkZXHIYkL71hVLHQW97IB10CZr6RjdWzqXS/kFErlLImsdF6xCivDBwu4a9Lc3G8q1mbOPBT/TVFB9zWCPjVY34uUx0IqYkY5e8HEOmvgXP+y0OJaGg7ydnZZzePOFTbQuvncp58PolEnHHGBrBVTJVKjtYCZbGpQWkAauUG8TfQxiHIlULi84SYA1hsPDsPte7n3CyOBLwRKI7oOadFF4C2giDUKAgwK9+aX5RGsvS3eYyVdOd/gc2nYb9WDrRktQyew4ZOzR4EWu+Py+WoMWhkLDkLysnMzXfAiDyXhMDTB0kMY+/XnP0NZ5hef0tIckScYT95uuKSZHCdrjnIKXx5MPmAbauDINEW4rPSUbg7V1wV5DCChNqUA/gDDi2EwqCwvPANoC7xs8tvqiHJdSc8ybHfw+MJE2h5R+Klquz0nb9GuhK0SQoawB3Go18kAX0Hw5EAeurxpqZnWZnPfgBnfdDUaNUPmfjS90GQ5zObGup/zg76Zn6fqCfreQX+PvwFWciHeQ9/h7jKjczKIcWNGzdvDMggjTJPtqdpLlqYbfRVM1QjN66/dEvZX5/lkXN3ZvohxkANWzl288bNl6QDDRCPJJy9dj4WHPQZGVVjypvXbt0YUGY3yT1jHtq2/+u+sLgsCaqP/uU0xFk/0373D2UH7dBn+q6r9jj9B2/M/WxPoGx87Y1P4nRbS2vJqqeq1zfTZc+VmTnmx+1YbPuPDkg4FQJOPJoYTvJly0TYjnasVA70JPsY6Qnc+IRSsEcm78KiO/7vzVfEZWUlXknQJ7uyxEJ0exf2tWxrUm1WVibobSAVmKpIT61KBVoBwq3TEGr7mtSB6tn4OlCGFemfMmHWv1tQhGYXpVNei4un4zEKVTHJK7Kbs8WECqozvEV/NRurC9cY3CPtYU23VN6lzIR+xye2ptC1airPqlJAHjCj8zARMbqAxAlGRrrXNA6lDqZ00G2IFkX/UWVmgijlBJKeUN8Fx39I5FrCc1zjULW2AawKjbjllCgqBAhH5e0uoBtDHk5L8vZN5RxmsJzFVlY4RTSZjE4Qf+wI5NbArTQUvh+ndrBmRJmNFsldBOxOQWE5dpJ7MfIarRMtqk8OAWUpWdBDgOr7xJamknq8EgItVsNAf/2V5r8dCR3JBPVPpea8yjDdEunpPQY7ajUyX54z2Z0/lWp8vG2DJu6K7mjdm1aVwRv64PTjFpvheevpBcoe/qBhubYN25xyBKxUGYnYHAQ0ue0fDYWMkaGLJGhpfdUTzkpxCZj+wtQ33tVbnBSaLG2ESjASiUYcEDokPQHoRH4EBu+S5SB/QOLELBLHY6QteNV5m3nbMVLLUpnRF4k5lY7UF6VpVQ7nYERHYqRqSs4f+1gcKUSmu3DOplGvLwvYCaKstznUgzQA8N70Azni3XTGni+FbM03qep74yi3jvsg/LPMwBibCuD39dRm6jRWf0ZBejoNYzh/arTbeopkNxsWGhZVq+GqwIqqbNTEZPjKaWySHW1E5X6UDXoEQsz5FZgSVTCoYjM9+MfwCPaGH9IS0xAkwUbWuvLFI7l9lcEMhwiD0JEtc0yxsI4p8NGpbD026x8I+DwI+ngThq3Q/8dOhlxA6mD9xQ1VXXKDueiK+fhYZDSOijoETt6VIjKo2Ji++XzwDBj8USbayKUyfEJGrVDMnMP4Y+RCkSMjVNGbd5TtW83axKVAxQ/qRduXIuCHR8p5rFIdEa8nE7Cqd+7AQFtBOfAcmq1D6ezoKzONOFXbQxtmwU++GkeW/htfgqlgqhWsarQ3/q3iOCrA0XFbnqBZYJcO4+uKlg2TtWI1EyRpcu4FA2EqThHs3+IyEr7UPVPkyitdgyvmNZ72HZlTFHJ0JYwLWPkkW3TIIYPv+jIzJusOFPbRnxw3i88LACPdAT4xPNZdaB1vDtovCSz0/9AqQxbBQQXm/jMcC2nOSFZnGd1Z/xRKLDXyrHhpoXaYYvDnrkEXooSFnKCFM6VPgGzfEGbNrlceD7a53t5/pkcuxZyWvU29ndUwN5oZL8tcefKRHpUP/7ryG2VF9ydYJPEgSHSns3F/uHPpUh9anAySa2goR4aECp4EwdIGuhLQzN3fBZQyN2DzhLORx7nNC0np6TmvPaVdAITGfYNdlnKxRye2+JymYO0IT+oze8d7h90h2sWnl/PS0pN3spqjjovwn3ZyRtss8RmpacJpsTjLE0bcLSzLASZWhjMa8tqw300LQzKHew50OzFdAiYrJkpra98dXCvZ+fjehOteMU6sb2FvRtobT7KqApyiBngusoqOEbEIEl+d1l6/5k75eFpN2+f1c+0rJb+nKKkZ/wXl0VF9OkCNyOLH7XeqjoR27w5WlRlWql9+v62+Dt4BYkdTHux9DEzNSCzaWtI291VDZeto2t3yhtVlWm+dhPgnhhUG5iAGC7nV/pOshsaX2K1BVvFXuHsTj3atlgzuOVw7ViqXvZGdknh1KsPlqVBO8Z52YGtzwyBbEjDT/nJhNSLXIxA/i09TUp099mq4dJ9DjQGobKMDgk+Yw69UrXn76wm3c2mLw0c1TVnfljfP1ePQR6pLxngDmxqzvJ2zL6ore5612+sqjNuUrxCm3AdzO4pzhDk4aY2g3FnXfeytqgG+OlWXYnApihBrxB77nm3Dryqab1AfxuKy4APwTOMS7X50DrQ3v6jrrkCJPzALRl4AYBaMUALcpQBMkbsU0OT+XUd9/byrC3qazf/1HewXnXGluEeGmaJy6L74qKyhwHBjxGVD7vg7rWVPOjoeTR9bn5b91F72tPWt6Y86Op6U+bceTv/t5PSHaLle8oeSc3YO2aKhtJWuvFME8t8d9YU602+/ZiWfFOenItJvFKWa9feFN35CRNavdJfszi9snJ6enWrAZjzBJ3dfe/v1SSMOYcOqT5aA/4XkgmGsNoeK66KTfUKt56jVLu8y9KMZC6WrAUc3YFJe3D7x7cD+p4g1pTV6mCgn83AmqBcCNBC05KKpICpgn0VFlZ8gyvn0cc0Hs7MtIuupPeTpX4DJJSQ18WNzEvgAGPJ6Zu4vMAxZYsGUOtq63GbvkTLbiRdXTiCPlUb1hD4/cPS9cMfYz6P7Ps2aLJCycFBTHuQahESKiiaDs6phAy1nI34Z8s+n3dbVHrGiSAV+n+Th2b7N+/jLJpVq3ZO8sKXzelnGsJIRyYbcrTz0gfxOCq2Wv1tBnvF2P9mQl/foH0jWt4sw2NYEJDTmBT0KwT8FR54W5Obl/pqf+/iGTqcDNL1kSo9Pt8xEiv+cHK/726ke1Qva6GxTY7NdYh6zinyqb4OI0oNLiPUOiE7cnl1f4pN/SRMVFLOhcfQYlbSlS2CsmGuz8OQ6FvkVSuwJIJQBK9QXF4uxRUoCTxzsZGhWt7vU9OEXGFKp65HZJ+X+UitvlLbLZJ3SngvPd0+eMO+i9RRSbjIMhu+2/b/fDwErFwrb3uts33Hs5wVguq5iKSkDCPpal6QeNyP+ycAsG7ZBl7kTZ+LjM00rOqG8DtdkLzCblCWwOhuB8l5jXiXTWfd7VUJJhqRcLSNX9O2cPiVzNzZ6WwWN9jmhrkG2tEJNpzoZtHKmtP41TF5WeoCvvF/WMPBNO4Bjz7tRHj+TdjavA9KTyecd2AsdA+sSFsCDB7HKo12KXHBuZio4dcNwUnEzbq/oWetqYEUyoVSRShfG0zfrbjk/DTTH7dmTIFmbtVj/Xv5tVjPZi93jnausKhQ7oCasrdPRKJrLX8VYpb9vFvqmmJg3aII2qLZgQeRyzWCKSNRxxrAri0cXT1cssMUEP1ZbXx6yJTe1GJx6qar9UEDplV3xXKPaXNMMZZW0Zvm9xVoNY7t7o/jJtFRVzhiFhKdGszL3QgX6LWOrJEiCMrKKemPryiV+a9mjzOxPson1G3y2sOOjNbZZ4pHVqte8lahpUhzb3SHMVe4Oi2LGKuN6uzL2U94VDxXDVPD8YF7+MpS/BIH0Q8AzGZBzoIwpjzQNmAa0A1ND6enrAWFsqXrz7cEIXdKmBIms0cLfWL1feLlOgZ6TFIQpDSs+vXlQg4Y7wTWmsteulgmv02vXXe2kbpJ+QF9GfMjux7v7RzfKzdwAduZPqbS7u7JrUa/75timPWVPWi93X7HVb/AYdeOTemPLpjVVXE5lmMui2chUE1ni9vNZBh2DyBTjUM8Q+AIYPPk/iVWzC6F+FOEZgarUMYoJchWGoKtv0pevGqqSd8tl3TJbzdwZfeu2ir3Htp3aQe6VgCM+x4FE4CVFM23Fa+Um1xK22lrIw0POPg65bfORs+X0wTQqEdKkfQ8jl/4T843LBV+H1o/Pe2QEkSpY0R1t9tgcAZdCckbb1WJrObK8+RhLEuyqndz37ZraMw47x6s1CGQcaXXDW3tWp6duImoWwWPo/kZW3y4bFrBpad5nwq8PLNYuv1dTs71nRrwmf462aBKXhlVtB1Uyt87YEt8YtteXa4sNePEie6aCLubFjrnHGVRiEWbGYl+WzYk7qc+w9PIZi3DNomWGNpcvbmx32LBQk9iF2rMnf2iPEic4vLA6K1lyy9IWN3rLeXOrLpFOESpSSZRw0mpg6we7RW14bMzexUhwSWZOVB4tXH5a9Sl2YnABrEsYAe2DnefyyhWk3P+2fClDjcwatwqgZ7Iga2fhq8v3Rayvwj5bFXL6LI0bS7I/yc38rsCzNyFuoxE2cd76UKTJWl/wNbs2bsEcKzXGkIQd3hj2NOmsKH769btR8cFQ6HJ+bggGYy3WAyczQOcgwF4Q+JCrNn0iPY2aBrQDkYBRquIVkaSqmKMmlHKNrQJtOt152z25Flfz54mFt6sOvpaqi/sOeY+SveRXjRkE3S1ShUGDBNk2Hvtw4bm94+eWDWzO+ditDZoJT+2c/CdmBblB3YkxlIYFVfgLz2VFxHXG3N50OzNHpwup0kCxFRdbei4nN3NVhBJCl/2N9yv3kUh2xSy2wvLGlfnW5U6J3jSN35/XlBXqbSwztdnaJcIGXzsqyQ9u8vE5TQonRZMXLNXzgz4VwmT308uFDYEOA5/XWn9N0CAsRiErqTfuS6Qca6Y45SEqURYVx90gcgu7Gx6k1lGN+MxUuZ6tZYIzcnqyw+EPFWvQs9leyYBbIQK2StJn08PGItFo3JqU5rV72wvvEBN+HfYCy00DCC+J9Fe3FuqBzvXRPXhtISYiywVShI3KBMD8b6QR7x6KneKotYogAKjlapzkwYn4YjQcFlNcvJl3zPlxy9ciRrJcG46rB1uhr8CAUJFF1kKUKWsyU54zxqGVjjkzaxNd23rG33wkoU0ib2EpnHNG45xz+FjSjrZOa34nh3dw7Dnma7WZ+kkmFA4cud5dJ1jn4EYUbvW81tA2UKL7xvRjaiN3obbGXRLBnxGT2jGa1odsu7XZzGVV6NSs9iJQkkf8l7e9zy3sEJetf/wOj979bSowOfmtW44dZ5b2r9aIezokatWY7McpckduW/4QbV5TtT3/zeTMteu/JUxd728vvnPsOcDeL+3ta44VU8zBU5fewJZH2M+AzShNSreR9pUo7WPo8XpK1JFUbdInxl/tBQW/fT9iqG390Su+gabCnApPoiDlryrQr7wvUW/UV6EevLwlwWx15ZvvlGxJKAEWnqq5C6neb0684zNWCU8YBtIqzYK3esgO8YD1B2wyqnosZWFtjoLcx00Rw7zs0kL1TgpbxFNmtZM64sUM5oCwINJAcZFvrym3+9XiS2Mhjmazt56y8Dt+w5YoX35tVF/sJ+aklsLts5JMeyBiuSfBtU284/Obr9qjajuhset+v+oiq6NcQU/pn1alQkM4/aB6TenOAgeutkXfVdJ+nLDjRzj6fh5MSX96GkhKefT73wuoX7+PbKbWJ4rd8hxzOOUt64C2vaT14/jUcGR/Vmu2AxK7xpEk7kd/Y2c8KE+Sb+EcQX/NCXG+TWF4EaJg7nnBG2ZWzy1dxjEj8drDr17csPVvRd0D+MGwKOt0xVkZwEmP/UuVwoGltfUOxgPSH7BzKU9sOeL6W+HvZCd83ATxUvctE3ysNb0lZnOCAfx0FCOmxEszB4DX61JwVQyX/Qfg/zqGwqgv64bsrdcrpY6SzRJz/vcXG6y8BY9+KIabt3TSq193L9Xa04N4Nb1Lrdirp6mlPrQjgWYev9agXdyZXD6HUhI2ZS8vcNGXIEpSvTAFdMRTc5fll86kbGOiOrKfiGuVC4RzIPSjzwW5xs+sF+gu+s/+yhn53jAljXtChBIYaY38HyccyI+Xbr73+xGGhGK+hSMrXY1iygcRT9NfmtMbQzjf2kpjnou8ZI3fcMLTvoty1LMULfuMNBFx/VNg1hDKGjP67doFV0NNMv+3ogHyiaVS+do6hVjS6tpLsdyTox24Q8rsd/4rQKzfBFz38h/hbLk5/Gt636frcMeIbYXncMuujIuMcvt/EV4dYGrHvWtsPUSGxyVItyEtNYsn7ZW+VtYfiQGoHKQlzLGcrDMRttjQz9VmocRaJuWqQyMsw/m9Q/hXqSJuODXJP601pebFJ7tH3eUQBTAMRpcFfQf4iaBcmmKa+3hy4vwI6mHSkOW896+f8mHPbxysvN2H1jmlYq9aREpIMxVSxLUzt8DWqz5JJ9z8Gd+AH9bzXSGmkiKilc9qSBIG9JQSBD6V65jrLjRlF4ESg6ZDoNtfn6WV0WsscoPpbFyqNR9BbP9XVfeku1/ERNzPdRfzPCeNTf2SgrzE5w2S1z07kOvfN934PCETFB/LrY1N/f5pgUypskLNGU+Sc7IQ42x571A7LzUzLYaD2LfvvZoIKjJlF3Y75vQjGRDMQyiDJNHMltNJImdLW70eb8Z/zDcjKlFrjoaDics6mpwiLsxIS0jUiTxihxSjW+R+4JmyA/M/+mtbd/vw1w9RI+cfT04UK6eYuaDEfcKgz4muhEjSyyFuQUdRh72yj+n4pz09N4ld62j5SM89J3F37xpwS+wOkXjmtTitHGPOtx6vY1s4Fj4KmvRyK8tXdcJeM29DbutiisjlnvvGfLRo4EmPshZQMhuZfC0hPe7yWI+pjH6WtgBfn3p+fQ14B2NI9e1zya9A0jxwwuDhunCm3ckxHGuwRvAH2/pI3tx7kKyc5CcZ9sgGJSX0/IwxPSMKCUoB+N7et1b1boj0suQqwj7xrfzYaPnBMJlzKrjJUDNy2dIbH1d9eHhr2cfMz/zN8rgWVtoW7QPfSd5YNm/iWcPIpXZ7SflL5gOWiunrgdlcgNbRsUtQ475b/Nj82pcvGInPhxOSx2yCuuHBDR2RQSa/J5P9R3KgcsXS2OcmfNb4yZeQl3rUc5Tm/qPluba+lPO26gmtMtxvhm42vz60QZ+tzkqt3d41vGeZ16ctaqW8/7kh4hR8P11ZuErYUD8elrZSdnapfdy/JYW7FHMlM7mMnpX6rHDa9YCwPLfE4qjrOfqgsk+1BK8sWOZUUZbV9mIRQjJyD2xf8NUqtxRUFs/QJZgBN1leJMob52cryDe7/kxHZrd7yLPrBaOqNxv+fP6gv72y/dzUbTcTDtKhpS5sa9FOD+Nj33uzMsn79+/Hhf64+ulwk5jmYVgBP6z6Xg0z1s5yF91DSqQY8dCEMz04tZNpQjv+d/5i38ayVwwJeub8ke01+mdEddcQ0I/HoX3eXft7nklHdr8v7cdw3thAe4ALoT/+0OldVWo7Bp/mwe9US5T/DNYzjEXmNpnM1qxDFehoD1gf1nlyxDEpY5YbmjW7CVbcfidblP/jW1XX47tVI5Uoo7QP5qXz1UBDKXQVQjkiygngnOgPz7aXdDfpOmgS3y/sP2aJvPIBb4ppoeD0LzSw/pC/U1+WGRSCbID74W6A2h+RHbV8KjLd0h4bURTnObLHlQkSJ9iToh2nAMiG5xuXRkfUHIuTFUduTlgr3Zwusb6HYv5hsY8+rK4GWMyfRem/DR7e8x7rQhlMudHvtt9HBmaYZnq8Y7NKAPZ2/nAq2hXm26tv/dolmWOzd2Lgbqpt5C6qIz/jpQyu7LwYtSrJAFHmrZ58J5MmKeUZ6KupdSkdWFjTa0GHBdpI4QTHwOqfPekWP82FOxlQw/cs91hAmMg7COtYLlAp+ayJIknKzst3oc2pz3KpNHNpMudlt6sCWfIf6/51q1XaKd8Vfgx10YqG6CTF4QTzss/88N2bcPBF2idPIawGhubSHnzdg8Omv+hE9K5dE661fVbDk9ty/8Gv/9teWT7aTJRW/c0O+H1etbv60/cH+tSi4IcLy2NHppDyO53LywqeRCWU31x5adcKC5hDqTb6a9wkLvF8f2EJ56+txQRjezMEoXCK1I7dLmvD0Bvw2SS8FFeq6CGfQXdeDq504puoaNgSzlDZTqiWgSuBUt1XOpZlxZZer+LT+L3lquR2Fm41Gh2eFBYPSyIuW5KLYvnCJhiHCDXR/PmUbY3f6rgTHdifgdvCUlwV6GrqwRRDwG/qr2naqDAq1JF/ZdTigkpzmNJGqRMrrZHtlDOv2K+ccRBLDpPcEv/ya1kvGt+BHuF99KXvrh3B9n9m/n82y9jT1JW7e7WhV8oBKDd75nArKXqrb34wtCWFv/RJ+QRpis9HdvDedri0Y6YjRxkhk8rnuXKSbzYrwxA40N3tlan60jTs0rg3Q+lRv6CzyYXhRaZK9SSuR6sb5o9211//6sU86FlYQViR9mDGg46iJbj7+rBWYC8oUNEZ/Rinui+Fe7LBqXtoA9T+6no4wzmXo8Km+x3CzMweSRVU67r+juO5bvxXFgCnXj33CHWPdJNi98EV9M1Lj7HnVlocQydTDMuIKu3HogAT5YPezi8O44TpTE/fDIbNclNNeLOvB/9vsH47493lItUx0Rw+L9QVfEqPpFapFL01P3n3rlW5qtJTY3bt9f7aw6DKY9ZLFbMKg0nm+3G7e342Zbw0VPUJGmCd6dqoRqd/1pTlRIX4ZuZa0+eTdij4j1CEtI+ZUlNGrSH4zWA1zb4Tetp7Cicn/9a06LjykFxPtdnfOPV3uBp5x7tVyj/oW6H3zfOf8EtKYKtwsjMZOx2qfaKCrzqqHSS2uX05/vnxvMWL1a9WFnI4o2ij8wSN1drUib2Sp0VODksxOQrR0tfFfHq7h/nSSjm98xUKFzNVakV+W4U9PjbcFm2PPx8TXYgCfLKSHRtbG+MZfgEl3ZPmTej4Or5zz4r5j7e1bEAF8sNIudHPFJulVuXsh/gXXp/dOPydrCWh/O2gtfUY7A/Co7O/44dsfLxOslhcFaMCVxWr8191fVPHfOpqwEsyNsUftYn4Q7bf8Gee/Uo4DrO1vh0sb06QdT6Cv8x7XO8XvYD/cMauMkolLL0/Uv4X7t0Q3lSJPy82lGW7V6PaTfQAMU5tkZS2e3I/JL0C+zbLAmA0AnKD8eyewuiOP6fzFfH3R9aP/BTb0sMUpI8a8oI64zF+E8mJWYk9LyIbbXf+Y4dY/W/1FuLZ2bABgMIM+DbrLuxJybFTn/QwZ3/4F7nuxylm8wGzl7a8sMpQqQw2d1RV+TpG6iI9L3yPM71cORXs3eosk4vZDq2rzqyWtsXMjWklO32rJQYyviBQBBvbm4j+H0zWObPeVeH6aM19va6s1SEh0sRF6Dl5AZKXtYxClyglpUJ3SM4Ql3VQlKadhbsVB2td6lp9z5S0vbJZrFFIrm2bVlLM7DpycclLccI4opElKazMa6P9v7q74Sin8tyrftEUm1N4CAbLfp8LwH9aKionDIhK5KWj5uVl8/rRwWzk4JrbTJXUIOyXcHdWHdHvxylrpxvsck9AzNApSzNWSo7/kpOS6CcgkFdRFT2O8tN/bazia0UfnJCKyJvg2V5ElucnLOpvOLmaZ9bsJzKCf3z5evjFvx/sjmye2OTqXr6IHN94w14TUmIm+ss4iLojy1HLl8webYO/rG1fz6ynV98QGPRUhquDrN4pGdtreyAxd7WJWViCcd2Hp7sMN4b2AuepN+q7fb0Bp+nc428vzB3+DbR2q3XsWMRLZUKT8ZHJ4A3wFAY3URold7dM6Ix254k9sHs6vctb9/9vpiu/7ZHUoA6OFGxqVAzUtDdp9GUeZ01vXJZ09I2xI0b92sPNEyzJa/UpHzYFPZs/n1foLg+/pgb49uPyn3kCrKoSkaylTSSD1/e07wSb2tmuijYLFSsoUocxo/DEWPYLZG4+Mt97dp3UpnQ67V4rSQRaBiJfdqS6dRz9Gtv+nBM5G7EHtTT7wdC+9z97i6vln3ffIVY4/VmQtOq/PLGPsiCP15PxPhkXmfUMAvwj+IKMTA38WePOqCDgZH41e6ypSpEvqx0TtFMtDmK7fMfY9pTBby3Kxa9WyXIbMgMp/aDO/FwOz8fMm7msFY41aURyr4mVmWXIFMuVorlz9yLiCNBpQ+eIU7NhyK6je8h0CxkPF19z+ng1HCFVPh+doZpJqKn2KyWmI4CKQh1UirUdWv7ZmXk0RcM4tN9eIy3LuI55SdFbZXF58KO29ipgrcTpDlmtJE+j2qMulDYNbzVJXtxILCtttoQ0ClFp+brjdVX/nbp4sIm5o3qVx6Sv1D1+9R/BnRr3mZenquprIG+XHNDmPci0pqTGXMvbg3slehLTkVSTtTFVHgCHhOAmTnzq8uJNNbmSegLG++m/Utlo76+3DnQCz/Zo1juU6DWVH+92uXHjiMwa+oqnispd0rw67GCUc99v0js+P46gmm4S4BUZpjfz/oyq+LVaNmqD5lZCv3Js6qjRHB0oP1qrPNa9Tjuw/6RB3jAut/04Kt52aBENNKSOJtXHDP2W8sOYZlvSxrGDe8tP/FnGMFM/PrLU6FYA/tVi/SX0nF1x+rSkdMR/ErZaXVMfXpbPmOrsigErYihbixq4KAJFWa2Zhd1JD/IW6l5TKit9TL+t+CRo7sTmgWDMmbh9cSe+K9CgVPsXxddlXTh7UjPmuP68fX1zBgAzfGUc+rkiM4zpweoqyjdEOr0FBVpj/mOaIeHtA95eDxQCsr7ogI5tKKCArxoNzLNWh4KJJK9Hyyf2bL8uhkuPDxDFWbLI4lqR0fteu/q9coVNeDFuCWF8JVpWKt87WRKbsV57Yg6TlRf8IR+0cSDcckcJvi28RLd2wA9DWWDvEbqnEiNSWOTM/YJqmqshiiM5+eS1QLE6ufixiE7cQA7Ephx8NpFByCRW9G+WEch+jKrgabxeRcs1d+HN6ZJEQ5QuWmrC7CVqKOZCR/YA/lSA16VshMbmZGkzqZeYRczbDchGyQ8tjDPSnhCqPYO8PQ+8Y1LIa930mRFqJP8Kgx0hJf7qHAj/9EI76/UOeSX0NpsSRZFnQRHLHahmaXRpNcuC8OUASiuo7LbIiWn/dP5IpvfJrtDO0I7QkdATN2R3bsSUd3qiLVKF68J1qFI8O2/EVO4psPuDI4EdgZ2BXYEPvJCF/A6G30RsYtfC1UHayI4V2sigR4rb6dnhMeI8a2hDV/PEtKE1TiNhh2+nT0r4soIyVKxEaDS8/K/e5Kx1JvIXX7uXh9fwkejcFBo2iPNKceD0M3T1EYytUSJcWcwxxtifKiRfg4deuMxf/J2OW5+bO4nHLufmrgd+XlL8J/8AUfTtmsYl7CO6hsQpYsxd5X6+ml+cCx47KgVPFFI8DfYSzE+5RRyYCpj5bfr4/xlCxUz9BmNd0RCeXbqgN4+ElJl/Dmeuanw56yHltFyM6ZEfOOt+rymoOrlqKcTsctP6RwUrNh6qhmfWk4oLhSh04ZGccoqhtUgTJ1FmWaulCFJ5NsTATsmWvXfiUXZGQdKMMUuJSbHQLwvKAuPN1uKxCWIYRlanRfQN8thslwgLgAa/ey4RlLVLBj9wXcVzyQLK70bY2Pem5pNgxXgKSOJA0aVqKVTUg1661Blu2He3K0O0n4j8EFvdnZlX+Q0sX48C0NMkjdloLapURkA6kaCT6lwm5mph5l975c1KjaKjRyALvFjeWy/nKQpLXCkF3xKLPidR7Ua1cdkT8ngdDIgwNWUcHwjqyyXoWl7htmqHWh8rWAskjqxHqGrXlbd2yTBbcfluzklg/vFiaY2JW3AkGp/TCE4n6VNgmHwRcvJirakGz9CWGamI//6XSfgXlZ49sngIxqs0qY1DDR7Dknq9Tn523Ut0nIomiDmdmX4/NmntJo2VJvRoRWVzk1H9AIusrZZLV5YZuRStfeZeXBaS8UqcSE4pZp5eVRvYu6AyeAYbjOpKE6/EyNh/bjxg6zRLshQ5Su+UQd/Yf8ncMG20KmU54swBq9u6ADDKpjEFOtWD8Qc6rpL9kTI9XfuYrWKpgeKq9D9kcJrkYU3D4BXu+SpV8YjGW0vlsXxMWpCtsrYzclNzQZeA8LOfY5XEUoJORyQzA9yFy/AIqydcfxImLuWyNvlW4aDHQj13C0wAlbA8Jos9KxEyav1COsXAwWS/kQm8AMq7sQXNMqhSRAvJ4IvBOM7GKe2bBUalqbqrvniVGla6BZycI0pR6tnY/Ym5oHMQyD9ZWI6BQhf46plCyTRjKSYolDpEoYzeiqN5p1d7N7IEZCnisejZhlRaTP7rHKaXrfH7NUQ5ZngOAb4Lzv44h9puV7DLaQwf01Q2ukUVUq6CL6nmqlw2+2mStTvw2TmMiZqeDoJ49dbg0ZV+4ovSXWszkIme+Bq0gtWBloOdnORSJAA/6TQrsNPTVnHQ1LGcGbIWOn3blb4eNSrGIgJNs+Z/Qxf+emqFiVhq11y/1nRRATuRkz/GQ5S/DZ0pmzhD++CuJ0Dc13lg9Xz/6YBdVUdN6q6e386eKd5QZhMdHruw2jS53zoGDXIfXvjUPvIo/KHoy4Eu54tjkS/dKdFBenOGD+6urW6ulxRk/i/F9AI8ySNleD0bAmSXCuVo6aeUF5ytmQvcnBhzvGOuc4xQP/pFkafGKAcIObn0tl7yI/GkBfRLakiZqTCBHSVwVG7mujmyjMbp7Ox8ym3M7N0Na6/LMmzzz2/P3Tl91pVSCpBaDgVZOM2pDgW5dTBj0EOfTYVYsyhVh1vjDyVZMMX9ZJEt0rfuzEPNFE1wn7yC+vT1hqlp9N1D3E9m9vg/zz6b1b9dbH4+qxCFV9SXU8eYbSkogHGGKAxyPtVVib5aVIB74fcjAI28TEY5/MX9TXbGJjE2x8q8JcGqrIxfxOh2OwMpwr5gZ9gRgD/dAYCL6RYBfE47AmBn7BFhkQ5Gqxj7vYMhlqCv2Jlpf7b+oCEvyjYxKRg6Cqz8YVkWOgTQkWVIoZlQB6tn34W7evUj8i0KqgUuTg7RvTblRsZe2Zvd9/0GMyjhz0PJ+k6jXA38s5jrp34D29TwaKnNZne6UgPYMm1V9Y6Ljk7X5tL5Oo21yGcwqTI4xRnA1/LcgBHQR32J3gfwSdmt+/TR12sBvQB5TMY78GKOKsNkKvBprPN1m0tdXecdVTuqiGniUHLA7bKP3vqP9OXf5VRe8Z/ak2wZz3U8+Q/ObC7X9bwle5OxV7nRawvRPemNvCtFmp58cY5U+EHxonYSEO6IYvyMjqA1df2Ifpr7E6Hh7vuw77BPchs6fsTGkI28HQdpuneet7mruWttV0tXs7dZ7Zrn92m+pv/U/FOLt2X/Kc2L4t5IWbk/Ub3OWItDvd57E7dc0yb4/ufi4VoP1mdAetw1/1w06YsbkieGr1hlLqwRjKy8N0hoUXZcqJcxWv1ijsyjY+H/f6h+WKYwpNk41X8gi3R4Y9N8LTZNi7VIJo+fnW1vSRUb+MXoP/tFMSZllipFaTVwNXJTXrrYGHYUF2UxrXqqL1wmQnAbiOX9mXSFiiZ/bTvYJQiSyGZTaQnH7hMQyWYjmYiVFhfJAAw7fe//8YVHlCgSxy9mtMqUtPGadjXRBB3vVG4pG1jc13q34n3QCy/EyAiCnLWzI8fPTiqxeqAKr6C2lompxQ1FyD/41ea0TJFEJh3vYbjA21cUVLWaFt9LLG9gSxDhMh/FamBmQ5w4U0gckyBlmFR8mylZDlFaVJ/Xf4XGaXmS1CN4kc0pJBrJZDNRZPfwSkylZDOA3JRcr+c2aRdWJ5ZGyUHGdUaG+m68f62r07aB31QrWmtwkQM9zh52pR5Izvgv0JKHykODSIS0kt0lHixSh9FLjf9DZL4CygB6knNA6WtAcWh0jETY2iqUlulL+BXtCoouk2ds8UoRC1/kIT2Fpvmkp1xZQMfJ738rL0f7NzrmoR+S/kWSGq2nC1UNg0Kl51i3ALobiX/l14jQwTyyz8BGqqAYhiwlMUDqybaDJARFAAaUZItBeFZAwGwQG3aeg5fQZShwx4CCgiWw3m5Jtf0+SO6brYGamXtCs5KSEr9JIR3vDp/cZ8hNZT0AF2lOpaVNvYywkEl8hDJRVxOW0cqHnO2fatNnoPnYuyuc1WQRGbj93xIqS3rqfNH7mnnVIThS2pwFTwGnr76STjFJeDdpRmpULL/p6epVZy+17gcUpSUb+npLtAmG1l//LMHJKB8BEKE0WQn83HWDmNkQFDDJpxTZKYgWu5RoBXmypXln6BKGDAN1opgBAzl3e2HEr7eiC3ZDsWb7EJOrGBSqGoSMQh3Ng8zxPIzhmFiYvLemkJyATs47nDgvKtIh8r5Qf1idLmn1GXi6zFCPmhvUlJTVrFtVE4NGx4EG0yA5URURGaBXwAVfiIyGYg8K4y19SMw9gSgiILOXJLBSfTqnssfRUxJ0GoSr2xqWeZa2eVec/y5VvWA0gei8gtXaBW6T+6Ya0hmSTsmKIWXrHleuYuw15wUXINeGaPLqingtVCkoJYUQ0eDkh3WFkAfxwBzF7O5Tu4dAiFnVLeb76OrfolfmlxBezyiF070nHqMp2nQNkI7v3n/n9qdpf/olUmmmG3yjmJp/oiE9GwAt3PID1kwvLS5Xa9w4Uqmcjc3+NCvLWRmdGpaetxeOfh6RrJVVYj0FZicf9/4TeeOklbm3ck7L+v9eip04yzuT236vueNKY8i2dcnhUfVy5LUCfVWNni4uRedbEKnVcXpWAUVUIiq3aCUtCkmXwla3dMS1rUqSIiuRCg0wA0K46i9iP0raPBBQ/S7mAZCVW5ST1GqHoFOkkHQ3yyUan1lMeh7WO0avTIdT84pEFKqhqkYvkNf2ctSeJad1S6ix8+q9pra8vbxZ4oWxoIpRvZq516qCNXle/QrHNzm8hfI8LTEaiX4eGbw3Lw2SFpOhys56mI2VsSlkL16pxvoodIyldX2OjOKVX2OIxQVz+X+rWw0IPUwuLJEB+qzpIJNkdaXfbvXY6l1VGw87q1ttLFsRfr0Sp8VzSRoRi8fJJoCzXs/MfhNKMoq5huY2m691561gc/OrZSsrjpeby9Uvr7riN/SaBQaGQkBhkC6n5ohymSg1Ui1jsCmHrdtbTtTIC0dhJFGDaomuKNWY5ULoXI4IQYwsLo0vNrt01SNxJd2V6t37GvdzDpv3+prTtYZJN3RfDABdiBwP9eucBHN8Ke5XAiJHVIkSmuRaOXkDQ1VLET27qSisO7q9xfKMxJYwCtQoNTNXlJN62cggq0S0YhNC3+vVr7qivlve7Ly3ZcsrZU0tNwNtu3wssttOpXOsYlLeg+ysZ1lgQi5HwNCISFwtPulLDLxowslqqj7qrNroqvE6HNbHzFGhIlPHPlYf3B/thk5qMwzljfvN3MMN+3ftrdRgQ/qEIb1T+H4rxGUeMuEyOV4PHWNxFfsuMwO9icuoKb1LB+Tl+qePQCJ1wbVwo+l6mj4g6miCfVry04jo22PNqwcdGebzttkM9tDXqWUQXzL6M2cbPYBaSW4aGLszFSLXWPrizW0bgOKIW1EML9fEfivGnIh74VyqHuTOUWL3kOGclgiUyK5lr43ArIcMRk/HNeTmT0YBvk9YCUlFbL+I2SJzhntUbK2RS27CAP0piU95oywOoFwhYp4hDVRXeFDBKeOXNiklyeWRIYoVoNx1Ns6fUt2rwxTasFXdqdkBwZb/rs8PxNTF7Lozm8TbMU1WEotNLFqhU0TDFKGKEEBI4huJCT8kRt7dkZ4DzS4RehVipY1patzcIoFZX8B9vvbtvLLc8l/3cn6Cq+Dai8mZatmul7avAS40RWboR/l8f9J84mKM1DuasGlMP/aWwuiNaItaiDoSV2+KNMfEsJMjK8L2yNHzkFX5rz0Zyn/GOv7ad2/P8uqRcnWRH6BbSka5iTTYzk4t0D6wPr5JebwC5DmezzaFCXkoGMcaJuWfOFF6AE91iNTlcleTli2bv4Au1TJVXl2w086W5M3UXUhJDhXKslWSc2+eoGwiUMqEWv/gBJb0+KNCys2aYPe+HHOImAOCYtDKqwj5DHqylcdtIMVOk8NfKQUnFelb15iuJ+1os1PSi+X3dbukamJmRn7rU9LC+/PanpYsyP4pAyqvBQEZ/CUWthW8rDqeFJ99PH7YZRFoT8poKunV7frSMN0srGYyZFW2Har5+Pjs+aThcotQKqM1KgoUL8hpan95ta/arwqZ40ULTi4/YNeX9Vzh56OiOPJ/8VSpeI25SUMmkJL2Zzy3ArnqWuvlCK6BhimWLFFFSjKO+GP5W/PfmOl4ak/LF6KodeUiAamy5DqKWdpibbVRFEIrwGodFEEoHA+V4uJJxS0tUilTLSXmHs/KCKWmBQUSsqAodoDNCnIJKPX7hcJmfmug3jUdCsiWuIbNloFZBK+ayS9nBbasrqUrOcXQD/OK0cA/GtMy6gro1RxxgCoPBZT8arJXreO8tHr9mLWOGySDVRyRCamHTTnm62uNy1ZXPk8SxIbRa13j4TfWA8A7vot7suMhxYFTKcy52t/iuQCNUVTD49aKVLp9Cs0XjXimqoSRTJTIjtu0odHhUGGOFdsYHxP7QVnFEEvfYsMi7WckI24TuF2f1NQQLa/Mn+6WX4gaLgpUVnTujvt1BW/cn0EV1BRxZFjiViIosz060cA2LFvxZKXTq5R7O7aLg4u8608g0dEE19NRz5KB79ys4LIJKogOlXIjdNRXOvGKCr9KocMqkZF9B3efK6/VsMuV7D3Hq0dFJrvnGKpUa1bGFKHVcGjch18iOO1d0YmyJoXNJudwMOquphmqOOtNPqiRtG/ZedJrFgw0qZQlbuQ3r8TGi1HNa/ol+ulT7+4e7H76yX6AA/ydqdZSUFjg9mt3vvrI5oN27K5oKHTFXFv+ZBM+RtbcaEjK7HQZRk5LylBl2Oa2Q/3AAD4+eiM2x1oYGh0O6k/YRVLSN8ySXgZu+9nrwnpUA1nEqavmCk0aaGy8sfPconKDf4fY2yFXO91qkhm3ry8uRWAqYzNKthKxHFlNkZDmzxhnBLqEWhO5NGAO9lWPHDwrpjVZhfbwnpN9R83wDv6KqfWVnFbuKd8v3SwVO8j59HNgsunvJVN6PWYxRWdczgzK8G9Orp+TEzHGn7v5QjcKuGZiH0dqbl7otxmBLXOTa8PbZ81blb63uKzgwNLxo/JeSx/TudgicuTUzWI9YfqCTXV+eFp1+7/9WoC62lptUqhwFMfDYRHvPZsf3rGjMlQUjhqSX5rtDedFyZsaDcmHqN7ksTMie8bHFlxb28F+cAAfEz+rOMdSGB4ZCpNbC1uVh93VJWoGvuFLuVp/QBkamwghFZCTsLh4o/fcVvWa0HaJp0OmcvqUpVbCVF9ckoArM0GEwwTRqC1g6cUy5juEGgsFdcLmERmqR/ccV7K9Qxp1w/ZjQ8dOzSp7eB7mK0fLSztmVK5iBVyfTWRV8B68A0p+4gBspWIJlXHN5iyYpXU2qIo5OSn9/xZ+Ehdd084ji9XaAujXT5spraibnQOr5cd8deYX50NOQ5947V+NqSkceVfBCdbNbe/yOk/vW24kARzpNX98v/lTcnv5gcDqogqCElZzOXUihe6gRH12O45eR6py97Wp2wopoZGhcGGOpXhbdHzsVXt4nK1us+IegMtOi8Zc5sw2Y0pTQ4x8I37DZzHXCr21le074j5dTO7FWoOjNhHhMDEjtj0mUVRzo3mG2unRyDyXSv7PEBURRRGWWi9ZmXk1GfT5L0Eui2DMlsJthWv1rdycVyzkUem0/HN+2eyBMj9HIhbcahDTDp6tHhEZbJ4TKLLWrIiBbJHlPdOiJBoyL9wVHfdx8o7LlxJyPVhVd+McVQ69x/x1r+plgLt6zY6aEi/i68ux8QbT0GebNBxXPsW1ELQcriuXHx6dv94OKF+C/kx8sopD6LOt8bXtoXfo6hUfKpR0POVXS97LNX5xrcG2oIfeL3AWhqeNE97ehydk+KHmwWae0pHXI61gqOhfbnCs6K5JjcMtfTWfmrbs9dzIFM1fVDddudLIoCqwWKacaeQ5+aL6YlzQZxfNthrlklazeMLS0viswrNpTX47bLFQR6cagvXa08MbSRQxrlPVSK7W5b1RELweANhQKi69t/1MD9eZO471S5HqUBJq7NiJhFQzWAP9rYxbvj+0qcnZeEp13/7lFwoywVyBMKeokSZXgjom1XePNTLp68Qk+9MSES495fktY4hjgbzDUqcTGN2oAcYhbR23ulBN0JEqCijWVXbzBge5KDXxlvSYM5+HGE/qTQXZBwv3Ria8m5DJqNJXjacnpwzHNsfHmooiy50nNy9etwVUjVREnrRWwrfuh4c+/ip5K81cLaxQsHo0Ss6+2iVx6c0scGrspq61u93BJSMcc4W1eq4oPun26zj3wOrKgbXHK03rTJYZMcA00GOi5iUuQen+pq1hog9z82ZKwaqpD92D2792keyEPNCY3Pte7r7lr7a2+JOyCohUexkZILikUsMDy1JHWCDNgzfQlGN/LGz9LrIPMpwYHdWMtaUkK6Mdx4syMyPeGSy0QzpTp5Ngvnppvm4uBVnlMC+vLrPQgig9WU2oKeTV79f20/sKaKnRC8qz22E2CDdgNj43KLmvISKS+HeTI523MjPkMa4EC1JtTEFYiVaS+tb/3iw6pWpscm7yBw7Zubd0MEh6asrZvo2owbXS11bjy3KGBO0T1M5PKlMVenhwg2NXx7otiammnN3i0tolzj5l8+AWH19NqJi/pNNaZtaYTJJWs3jaWjm82oUbkV+fKZS+Gxja/oF7kmsBpaVc2unLNYSIzVsCRPmmmDyqebDn24OUMjLVTizISvC3bP1qecPgC0kbxkC5diLgxPPqZBvQ38Ts8/aPeCxv3HgYFX6fYW2u1JGEhbBz+bAVt/UzadzbMkGZTajwVJnVhokxgzquPS7A7z4PT9IOPvv4Y2O+xKuiY5JQRH3ZEEPy1a/d62JenG3gCRskVDV9lZ5TNcCYkMWmKEvHzUejK/jSbJCs4P2MjOr0CCPAxONWthCoM/+tGrchgXYQvL6YrpZR0b8HUVMZ4ngL9nZjmWuNSV1TW5Zy16XFJ5+Iu1CTTgMYU6uqM3lg11Y79QEuLqfUzkRk7MsuEbMO1QF8HFhKOkzFAVyZGNLP1k16NMre3tcUfRx2y4Zft1gX//jSr1WP1Net2tA+5lctZVPuIf/Vx91NPVgz/9ZvJ3A16yCNp7ryRxqU8mF3SGj8KFqPMc9XmAl97uzYgaSG3usXm8PRVmW6MaTNYabbe3P1WPGQqOiDgyFcpdBMaUOrmyCfC/a/UNZZl1eZ34TbP20W6pebl9dfsryBrXjRKiOVtIVAQIqzQcHh1fsCkE9xnWNmcqmfVvT/YlHDdWFbLV/QpQ80lAuDDFthA3zNjl/y9Y27TBlMtlYvT87J6zQW09MeNHRH8wnvgxVfoR6KUyyZMk5szJcM9wss8qkU4p32wvkDSQ38ewRrehi8qlHkz2lZjV6VGyR0cBwz/tCJ8JNMUa2V4qDYSfZavZSA3Zker6w0AhVZrggM2IuL6XJu0AGrn/daZBABED+30uZeLSo4Bc/J34nChQ/m0BGjf396IB1Fzv4LAq1sjwQrMnImwGXjb70Vcz0v2pTYBINm7oaPxyYOXUkQ6miL8Z3x6xJHE5HG6KWE1yN1sTMp/diKPTe8WRWa9REtrw8Iq2Du+Gh3VBv89Zu/LNsKu6BFBzVI4shrsPxvYs95t3xUlGJMT3eAsEmnUsO/12WkLVW3QHaA4yLWL66VEwqSXJxfg7AkQGfFaY+9mhrAmXXcphe1pLLbMS8dHDszY1+z4V33SObUwxB3HGo5YJo6v+rFsYnwmz7Xzur5jf/UUjW2s8F1fXvmDveW4+96ntGmztgYe46GjvMKsbvzqCJF4/mbN1vUSwjmyq3IInT0sLonQyyOhze+trLWYSvMDLWvP2iuaN3lRnf7g5I2JH/tnQ3Fs+9Q8nOo4EpZBtO7meuoFETQTYUOWGpLjAb99MjOXnIrPTf9ugtMLKpV5Z0EDFJditUFy9oy9s2JoHTS2scV5fRSWh0KVNXFyz4RgwJGLoLyiUVq8dpGcorri/Vy5JmZfYCKl0YveG603pWvDDr2u7HrLm7IXdqcq04V9N+v6j5W5+F55PWYHGMetiPkKouQ3nQey7XXPW3vrXxR3Tmb5Q0qH9a9zrSVVKOP1OPmNAuwrXILDcHwbnW4lp2T73xVteaV4U+YMV/JPnqpCNYNzYmm3d8nAMMH4NmAdT+Xxbc4Xp7fdNZWqYmfcn0iKTaQDGD5zFvdzuGJ0MXBjyaFjUerS3aLu3GXTqZ8dB62/ePiiquWNcsFgT7ECzM6WubjzTVF3jZFalqOh3+5ccUooNTXdjU/84kboOJRSwl1rG7N1uQxq3Jw6OvLZ/eVH2iFfm1Msp967/OqCdaKKYRVh311MZtI0EZSE39eoqXpmBspq8hjcnTjovCMpwpbZ+C3buDsL1Pn10D29NH1NpLW8hLnHfEnoxtAgyffTR28VaM2CycrnUq1enWHiLGrS4mqvejTubrmBSiji76L2FN4ArxlE/p0STWfGPhyaEY+jBQVyENv1g73v4G+MeR+VM5So9dXkXv1NukPzJ52s7x0NbEyGiTxj25o1gOakRXA9tQkn7aYrTVKUHVuYm5edvigdMEGT16Od8mSOHEqVEor3LVo1GBqWAhoxR94ILpjVZ4xLwcnY4iFoq+S0wrTMhr49nd3YJDphcpEet5jCFHZ2/wwyvhJZRYInZ+8/cD+S/cyoKWsq8Dm+IxcdIE89ats8IygfcgloSYBQYkSjJ+dA0QSFY2sNWCg+fYqJKQ1bmAkA9GCEDNNvVRUclOqY7VelnQiDYNOlzfps/5QRdoyIX+pmyMMkVvZRu4AClKfnvQyyKsv44pa0pD4xAVs9F0N9RQko+1vlpXEmVxyUTmDqTH10amJ2kOo39+dy0+Ml9i+H8lZLU0jyz1760IETysjyZROAIPz8lCNWerkuF93xCcin/iEQVBglJpwJjUbBk/1f3/t28cH4+NlF6baW5CbAwF/3tmKlb3cH/eeUNtqjY4lzAopuYN7OS2LvjseFB9P+KOz0GkNYV1KFhwEx/Rs/TA+TnTxH42jDelZIOAhco/ccvRyfnZWgni+952N9QYl8dbp83EpRvVGz4hnIWyX+hTvbkfZF2IzMqDl7YaSpDjCobuvuFI7r0zGZUGS7z3aXuTBpCSWmxLGCgHZzk8jJ8qwd91cfBNVMerNOWqjYxvJypjVjfkSUp8c4X03S51vcgTc+7YE3JbmSh0xqQjKQcJViIzavMZxfjWT52fzGGavLKZ5No98luoum1OfkDK+LdQoCibcDZQfKIBw04wJLS0qkmAJUwV59Hwki1CeVcg1tRiHeKbCrehSd5MGF4brij0G3Mu1gREmGK9CghF5ECOPE5Gd/+jNbLp6/fjJujdj1zaRYO9n4yLfEVXd/AecmQ/4JKgRvCrtvfdq3c71iu0F9oG3VDrp1erj/l4tOz8mB/LchluyUkkB2WWpgjzQcX7LyX+F625tYAV6zFHTnFUj/oNBvzOkt5dXOAxGLvsnvCqhzCNRVQa1peHc71b2JFdvnUqt3kIfVn0/dGl3g91U65EQhAh0bEW4c8w5IElKy4QdgtdNPOW42A3q3teaRgFNpT/xLzteQo3y29VRma27cHYTSzbZ9aFihCNKOFf/cO6Oha6Xpnem0/o2Vlk75gNm2AWsquqg0N+sKGUY/EReFV90DJv9RmbWz1looawGyxE30YTlTHvP5CP16nnrzx9lJInrDlCDHqZiv2WWcnsVmc/vsGC7Qz2EwZa0aoIAaTTKHFn35CvMqrx/6yWrkebrhxy25LIsO85XpkO3q+Amw3/T6Ji6LmYd0s7XFyKPdpD7yKr5j0+xgrcsNU3EeqCkNqPrrJD+4iThdbvwSc2T6QvnX7yYLrOfce4jrxpCliBZAfAMY2mz84/ywi2nXlZWEjWL/uZ6T6YeXYI/ZQRwIL4OpmVLixAIaXGpsUnIffDyvkaBGmkrVEoAlcj0qoz0qnRMNUtlfiDxMJ3MKxKbp5VRDOwGZigy8oZXBJpd0rDYoi+2cT1MJRYJF6F4qiDsrOZE3me9BPqm11hj0E2YFTC0WrZz0GViOEkMO1lkdwjxnWhYo7sgfSoj/TwQ8V9RiUpMk4Sr5DSBr4op8K5vtL/U2QvYs4EOCK90R1qy226VmNd6LMJaOs/NVIarZAyFqBSdhQDZQYUFsAOvw7B7S/gOj6CUafOQGPJ+XQqhbBVmA2Yxpqq0httb/CUa9NsqoqmEpCXKqyrkkC3JwPTC1DQzMHeRZOluNFAp9jIqOfZ6S2IcnSlqbRPL5d1CSZMkhjqabGqs1Ru7Guw0CQGOgKUBU8FDkWhluUdCxqqMJVG71CAQBDz1DRTMEXgaaILwUH9sVfIhMAQEaYyauGLAaYr5EAi/wBCW6Hjf3Xt+8c8L4/FekQQjzIJAMYUOiLa/O+oYMepYbyAnGM4Wl/jZkpQMFaBffLsr79MhbgiRQ0Oqt3yDsepcHWMi9Zrdfy/NeJcVZQMarkRfiv8QC/IVbcSxrHq+s2PC7/DPn67+h7H84MX6oB53oL85/yNZSYNsylYwM2pslgVVX/WtPp8gov5sQ5BXvUoOHDzZLmDU+rgcvtXALL5b1JaK/w5Pkei5GsfAJoVn8p+ltbvfdlXcxJaRizDvXUGo6fgb5gbRcu6jf/a/XVWvN1v/sa/0m1k6+vb+Td8qtZ32wEvfryLRTCkS7BGK0snnmP0CzYpXzNbrFQgRV29hqV5sENlZBjLfKTtKEWPDPABbaTxtPTH+lqVjySsVtcmZKgl/pGzqhfexvefq3kB7C+5pXt2dErh2iTS8A1mZ4oii+mHVpN7Rm583rnodO6OPg3rbc7XCozJf4GOQnzLNfJT13scPflArfhhQ50kJNnBEZ/M4yYU6jQjNfiUx8vV832HH/FtfuRGZwB7KkJMw4TmTb79IldLvKLsFKtfgktpu28iwcoaqe8SvnnKWFpR1Lu1sqcD2lqzqGLIsUlFhsTteC9OWCE1OGTG7c/9715GPG8GNlPWdW8dbaoQJ8b3pmqxpZ4l8BKi3DT4JMsUvHPRJfvGwFMjJB2pf3Cl81/nDsd5td/ZI/eiVts5luKWKxeXZ2oOiFnndv5bDa7tq8grKJjpKZhcy9tUJe53Cp3fH+VDByOph4aKrJ2lKlSQw7MnbxDiVFFZu0lrd+U1wWVIIdNDHk/9AbRps4Wcf+b2d6+i5H+jb6zfWz/uBmUfsHgILbsUnZ2cWdbc0GMa55INb3BJZ7hxr0966XQszj2uC3fVjNRvOeDCqtMzWtXIXvtP+8HDQfKX3mPowqgIKWFvQmutRZ0cyhr8dzE/dWXU2Z3bXWYUAgcEknRodGYUQlFN1/7APuebTc6Tvj9rPVH2Gimd8QDZHsF9NlMw+Ni2XMdxFx6SzqHbpvRSWSiBqZO/ylIaSbSMx7YdEkO1gaP7uIuQwdntdPVvO8IXoCvR5xOYSFWBnh1/XSV0Nsa2Po+5HNaZ9KZjP8t/8sOmyBpXhmkJ8h9/Euov498OgtcdRirRXsfr04YbVPK5SHL2Y7I7bIE/oA44AvxIlZ+haCm+3p9zLmtm/IXsULEpQgmrgHfjfaiI86bakv5K/J4fapwSATDrSNrZ/63jFPl/5Tp8SajFHjaVQHYlHQOfouAF89TbQaPGv20L2SOOhlPSkChn3UuGb+YakdwjG9X4LQYXE66TzBc7iJwhxaZfX3UmWhibr4JWXfahijDi/xxofNLIwU5gk6lgaVGgz8RRLnkvPl5CjkYzBEJsAayojGyMWPAqu1cyH/2ihJuHsWE5Ab4vP7ZFiilHeK9CKqfqwtLPU7aJ2iZHfFDvXFehkOBSGaF4uJ5o6bMmXc19Hy7gVSYDUQ88NVWWvfzpSvAKqxrPOp9/M+V0TX5VclvD2SIo5CmZWlQd27vOGx/dvZU9U9DUQMZhGcll6CLC+6+gaZXlAiGEPjput0MSHQwJLsUHulzZiZX+hEP2FWbeNYEc8LeGjlP8O3k+byD4LPWZUxJSgv81laG+hOK9XKNiwVY7OBj28IEPGMuGRmAWpk+Pn+NVqZL4fkY/mXbD8Zn5uqkLuPFJLtcZwtA/uJsQ2xbQYTsyptssb+okyLnxfBrecYk49AMfDsCvmUc3fvdnZtnxD1Y6Z1TAUYA8diold/lKzNevWuo5TfWrL/0t9vuNmYbIeqUUSVH1T/oLNQMGCuaV+E79WLLrYp/O0TneVbpeA2x2fTBCaKLf6gh9YVPFt+EWY39NSWlyFMw4PL+qE+PETnePy+fqbjINNo5ux/k7y8EhS5ftnaq+rmceZ1eUXyXtdB9qaRS+VWpYjIlTb3vqQ15IUWGddW6zA/wXYNnVDb57Aq2DB/OhEju/kuTKmZRdQFiIBy0g1NxtoAMBqOiPt1YifzNdGKy2BabdT4x/ZqfOFXjD4J/TFZ0rvsJyyq8rqqimJdDRAyobvH1MPgl9RdUtPrHL4apfXxDmtmlezUqgpKTWoJp5VBfd/kkeGph1Hwil8OZWx/rMHCcCoTHUW7lMKQgnpTkhT01N/PAdB/0pCgIeTMNz1V+suhNnOVuqd6Tn30bLafFv2RlBSrJQ7NovZXHKhbaOrln/1FMLoFCHb2TZtCR4f+i4drc94cRzrHJbmoQG6t17usCVM/CdtVnQjXXyKjcwxmDiyvx+HUCUyuqFuwO1v2/pK2XDVU8anNe36H3c0qa55D+LKDLL8btrwisCI2hE82mphJ4hyXdJ1fWbt5paXPCuq/h92tjg6fQphpV1n7IhUWxxSe+1kU8e6p3+fYFXs2QlwrNseHgCUVvUG46sr7KI/75Q9BRfCrKiqkJm/vrZxXqhzzhqpmf+B8wHUPEyJZtpnWnGJCUMaLRZSm5bt6W6xF/y0v+sprAsvMThYxBCttyXjbQMqJUVF89fPiN0HWjQaKtmaqE3owo19w7VhvBysE2/Vzk4ajUINkqZaqSNm3sxnGoPTTLN5QZht9IwUi4kpqbIXhv4DRRwXmKUiBudq6FwPgKpkeJAZX0T1s6RJigzTkUXITOXphenY500FoT0iX5ucsh78OpwkP56X810OtFQxP1a7PbjbUqImaeLWBuJPuhrGpJnClKSx51Ly0TmoY8VUqZE3/de7HZAI0fdrEza3+QVyzxuRM8mWjFqlJxeSeowmKKte5Dsx0eMU1UCPVBK3K4JbKXDwcKZsOBQcn5aPw+z4HZyWXUDv8gLG8tkAq8LKx0mxxQoslW2sJIhKtMmhrF0Itb4HY6EZ6Cd6OnTdWtVezeG+W5bGJbdneGezOFGGuQvLNfuiFZGSxLU7YCh/DfJh7LnS96e9fJpCQmeSywqkfAjIBYSX6LM9qCFHk5iueb2IliP+SnMQwTbLJXx5rjJLk5EF90CQ6Wnlj9bIVLCnx9kV525dQzE0KgaNVc2oheOLEFZcj3Bo2qx1t++WVEkGstbQtzncgk3dZge/dmihwndi7/AHivGeB6xNlfY1FjHbjsvFQdNP3i8aGJB3SU9uB9QvXe2c9IVzrn1Uf0Wytse4xWOUDPTKtZKaUrabXUoSozLv1LxkrYdKnDOIBYR4zqZFGvqaDvND9d97AXdY0DNZKKKE7BhqqtT1yCWDBqdx29qeq5K6j7Ku+UJTLtumzS2v87qOd0kHZIPIz5bS4PG5xVy7uGnpSGxox/iHyheGPEer5+uGz7l4MpJbUNFkeKXqeImzao/E26ne8NeYCVdYgC9gVpLKoUytko768OFkN3bnq804yZr3gs/tWqYbgRnDKXP5EpOcjTiP/+TTh413P8bRpe4WxEB+uFgOT1eDsiv/JHsodKWEzvFyNiaeeliNKkeRho6KE1WR4sieMBC+/898ngrXWMFu43qaFm9bevcf0my53PNkk46qpwwV67S7EYEsXTJRVElgGal4rFSKxfMUtlpaq+V7b2PoEL+vCWk4X49SiOcRqxEOaTUUEDx56NPoBt9F8tcpSh724B3skS8QsCkYTHcUm38CvUudsFOduA/edLGh/lLzYr3+xsz64y5/Ipc7PfB54MUjgS8Gn8Q3uC6S8QlqAunYdcKpr7CIQ4Xo0DG09kXCF1rgdlmGA2xf5rQ18xfta9at+fmDJT3xDOHMfsTeA/B1i0/+Onv+ja8PAtSgF6QSAUejl0tPl87oZvfkEhS+JpZy//5fft2wuG3lfybnzsIm8xy3u0isUJeUCDi8f0rMFmWhctvK199KZEIBmaCUyyvGZrUzJ07s3atkNfg2oX8fx0vWt3tkEp2WzwOoTp90xEjT3mFKjHhbWkt1ZjiSmzTs6pJ3EKVGMk1co1QeOPJ7E3K5U3TzYN0eHlPrVmc9VuLEyTkiFV8UZ62eKHp1iTgKKm3B9OG+X9w7YT27bYP6zA7hV7fVxtt7NlvPXN2FW+XcrNHl6islXQtymmlDf/ZvjgZcoaihvMPfppe/7yyfIantbDnfHvuthH+eakKxfnimgqU+TlmNalpHE+7fsd5xfXWDjj3JD+LWoHsz9kQtjeqSqdeO4sbiLDEy0i1Z53jeGRRAeoJfW7Swtypo3LM24Ap8IyQaNJNDBt1oRZ3t4jnfdr9ne/mWiXIJ5eI2DdrG1MkH+6RGnhf2+12Hy7601RaqWLQZVlnTyysJH5c0fbC98kygkdrN0uvHJww6ZqBII8M6S/nUareAKi53C9Hxv70dGTOsGPkSrkhGwpoJVL4zSGeG5taGqsZXJllK2GaofetJ0dOagHiqyRx4Qg5Vs9cVQf4BQeKIddhiARa7FyqnqtDNghq1Unlkk50rqlCG9v5D1lWq1f/3+TqwRINHwipZTaS+MK/LTP31SF8S9hFbH0A73nErXtOSx4k6v4yTd+QxFMuw7wJlTmQWBChS7SRlfurQomlOpm+XI4EaYwSePVA9LK4WcmtEUnm3rCTWlC5T0db4F1mlDSZDDZFfPteTEe6e6pA0ingtSiPZ2QUwovtLew4dHmqamushKWA6dqiKQBYVZMRDgFmUPxdRxX+SBCq7mgW3A2Ti/6UODocFeAm66b//hvrU2py3me2r7iQee0VU+ut3/bU9F/Kp7xBK5CIqaZpVL97oCZZgJBPhIj2I42sySynekmXPzQ43Q8YrKTlXCnuG9djlqUra4dSQYl9/UE2/aCyo5E5W8uUBuiBQnqoDpUO6+9OHc6At9Rn3k2IG2WvYEpGCmiACKTS5nMDxVLOdEgDRwg4LlC/O9mnTuJXzCK49HG8+cRP4TXtu/kBr2ipsOECpV2oCS+cVDZmqLIWwEoBM2+TYZF0/osQjU0doD3MfLjEheE/0Lvo86UWsPBJiWlNcibBc66mOzgWmlchJ5nvnYvMCbpGFjyO3CQ5twErEMZL1E/EtmbtjLunLOOEKovHnyEpBv7zAFFlH+2BBoBoo3pWqimzVTUZKsUaB6s+O8grB+q8oucZ1nzNihWVX9q5jnenmKnaCFLwMYNWrozr3t8j/9zZKivozhGqWj+wnOHid7RIfsLiC6d9NcGI+flokfTvWhIhrCCXzJF/YqWS2Ea38lrCm6u2s5IHOGM1O+l+y7I2wBxAlgH0Z7LrbF+DIeioqpe1c0h6xnfLvi8f/9/YUIaTiHVnD3KH+4VDlj7ea3ijjDmrDvlqZgMI7SNRMUkXidSsMsc5TNnDrh0Z9iVUx1vTRRzwzbRu/VCivr6xR9IhK9Ygq3BirodGiTfv4PAKlM2KkbRsOciXl1aDuaYqducLhrXnTmo7nB+AabGvbhaDNuP+cUNG5Rb17CrfGwDFLpaxXr3Rs5KWmDhCh3hOwXOP9QVovtqmwe8ON9NSP0RWM1/BF77GHbTj2WwceXe4pqEGVkF4RjYeK3+DrkYL0VIP5YUTUcqgaVotqJ9sGe9046hWA67OdAucmr50fIrHsDEMg6VuKqsKnn+ncUynYNTm1QrZa1/VecFat2yGHfZDbnHqh7tI79YfKZvASUGhovhq2atj6LK3pfmNCzVamUmLrapEWA0G64p3GHXWr/+itRjYsswxJef502afrvvpp/FFRroW0CW8Zeq9x6FJT6+p9LZmZjoQ5n3azu2f83ofdY4cv+ZNkt6MXU1637ruJOHJoby5i5/HF76omznV0Tp1sguZYgaOVqvW2oflXo1p3jr6pLtdr+HVb6acDVx4wmk499V5GnBUALi8/K2h86/64uVr8pSeOviG+crJdZaR9IjWl/rKm9PTZwald1zdFn0TLPPF/dU2OaO2NCA7s2mwkPNzN2p9rWV5HYFXceXXAfKbzSOn7wsuxUmPQLQ4KLnCrUw+ltdi+rW1i26MaZvVR//z0nwUgxQAMAHbPS390Nc5fr4jtAZeBD5ccNq6WatWnb8N14n5oC4v79f6/GwmLAF2A+EJdda34TlkPtCl3O/TTqIXmluEI5VR9BLqqJa6WZdmaKI6oiEIgNFFBXvkkwgRgagV8PeCnP/nOE+G4PXkbMffaiR+tlqpujE8YbOk+Um/CCehRWgBzx17r2s9dmenmGtH9I4B/puQxVEEMKrIwL54bkaG0qblw3O6ClNYYdxDKz1QpOrul6vBIu5tOMFtIpQU1H2zVB51hClFizhLZfSWqYqyCmAp5jZoOURcVgd69nsckBC2aioI60HRc9eBc6gMGLSLCQy248SwpM+ajvhaVDU7vGEwZTF3byH9RVaoYclWqasEV2mHTLNcS5pa8QYD/L/FPHEMiYeCJMh22lONjsQLc8p2bmpPdHFOIXjCWXwRPU0OMkNv3HCy8uh6PstJq4MHcGl4dNUuWUgmsSRZi7VO+C5HT3HJsIeoODHYRMHQzXVu8ljMGFXZfcTVsD/LJrQ5bC1HcwjdjvsPgKrBYH5GudY8ytKE9Pt+eYNi/+0w7gL/+7M+U2szN2Pd50oxr1J+4Z2BmwybQGoQ8d+H84vyhN4ANP5pjYh3/yESKrWmb/+Y6b/6r1/ik28jtPAVOLW1Yb+TqCyrp2uIkEab11Fjr7Pqad5c+jiK7jVl5/jXki8xyyK/sA/lX+/YTNq++RrABT5JOUGsQ9tyLzDnZNM+WCDDuNwbrHK0DAZWsv0OpoCckIiFHMNykEXCrZdxOeZ/Drc/S1+qlot46FYekI+Md9Ly5U848gamMoagccy+048MFyLzsmdK1WC/d0zxoYPoE1CZZYqSYgi1NuBIDYl4tIjiHRry6QKW6nuPHiNKzEPAX0lX0KfVow9HkQcZmWYCObDSi0Ei8yMmRKLMr0wvN7uv1Znd9a2RoINEOF+UqzUTUsqOorUBcY/yo8CT40z2d4zWHUsRBlW7N0FTUpwDMSzt7ZDnqVU+bT73FvBxinKzbquF79G+pR3dGtCy8NmRVLo9UWoE5KnCTjzulax8//13VwsQ3vkP7yj8aOXILYd33emr0sq9Ag5f8x8InFON96h1Ot3bzrK8sIVOV2m4XDGmbhi690zhi3kSwlNATH/08vvDVpzJ/ulaXxFoubOyqcpvGbqverYigSou7WiS21kXTnE8+sfz+1h1WRqL8t4WawKCh5XjjsfP3L9Q1pea+oYY3fbr22ujT9RH4U3xbn0Guq/apSp4HTNCZ++rK7Zt9gIjPpIoYc9GOA98d3wnmTlRnnurnexUFiy3pTSpLPDxj3hWz0k9vEMG95ZwBQTxwyNCo4tXFtcRQctqrO+PL7rZaHwy0S+vGtByVa5BsBtjb9ia50a7OVbEtccqYw9c3pt4p0HqwipgR4IW68zCzLGfbdpE2nrGhW1JeRqIfcUZOcvW1UZK+2sDdl9qt5IRb8aKofmwkiIb8p3RBxOC8kj1OlMbOxy0nWZv6RZ3Ake64uE7Kkgvh+V94Lz+2JSZyd79Amlod+7swWSf9N/dJQhKp44aT6vgiqbMDFK8stJ+1lEfenSxy7qjJfpK6/vjjHafWlFbEV5rMyZYv4T5/NxMAezdGLzP/HJZkKDn1QIAmVXGPa2TJwZI326PuqJE0ytubtq7K3hhSbRtxmOydfU6lrY2W9/9s8OEM2N3PMSqCOhBSs8q5647CI5ZWbyi6DpOXEhDNzHp1aDjFIVwkZoREDrIJFcViTEmEjFqfkIF6hZ+T+REYPAuBbuvDsA2qD/YkQ1aicVFRaN+/V4oscm1NT13BEyvy+GVwMvt7pYGVeeijp1DQBVDm31kYjo5GE5TXMYWSGVaQjDJFfWwvUg/XHMg5va58mSEgSWHJltq77Cjk43i2j6MIhZREJdo3hwI9AmX/mEdrsykd3e02XmmNR99frNmYObdts+1kSZf091arJpiRbo3w6eya7Noe/D7R/kxaHPodWawWKEermEpMdXzAQEAC1BNZ5AeJPd+XXVyhhE2kwDZbeGyt19hcoy6KhNm9xSoSzkJyNLTb8dOsUUub6iS7ofSuKDjW0nn5tfreGxNr3yXJy/Q8CkUVLpIk7YpKrDrEFHFSpGPknONZwPBjVvtcoNYwxFYFhSVYpRxbwvWaIEp2wK/k9dd6VtPMzp2q7gnV/D2x9pG993b+WOqKrZE3rd2vw09KFwmGjoMtxNq22gRQTgZCzzPXyscKdN4TxU/9m627XRPSDtoIcxvGwq9JaysCRMvLDgNiyg4/WweI4awDrPn4c2/xoWKJv5k2sKZ6sXFc+7Qd17b/94bh32JeO6z9Uup17aGWOynFXEnmUwNb2S7xN3zo8kUqtfZJnsZW3QOvs2WL4xcj9cXVSHsBm2ooUf8rtsCdM6x1aMWG3a6n7Q7BTsPWAnPrBFo1H8s/OadLy29WBdmrBmuriqX+jwILoY9xN7EXc32CMBAgXb3xxpnBZ7zV08KPLLPUeyFbYZ9FXLoUXvzWagrdcdnVg3L4cNJsCp+XogHGxZv4Uf3JhASrk6IMqWjT/iRkbIwsx0b+UcsziEewdqQRY7Zh1QUeAqabUQObRldTwkCEPyd3vLpkHXb/axcpMfzuJMPMl+puo5zQ1SDQGLKGMlltP/GGEVMwbVzJ0b4aJWAwcxK9q8SXPQyt8VRkVUqOsqvWAWbiSOLIG2P5KaSMyI7EiFccTq3qNSsWBjyF8UUala6tGClve95mtZc67zGxySImHnWlMNO2Cwz5ENV5HDAshQJlwbCC0VKJqnCu3vKNd+oFOhiG+/qfoSq+zSIoVZFT2pKhohyshahUHAM3pmC0vSSZjTqwR7BAuTT8H/v71kZrmXjVhqYjzG0KHY76Zt3RK1pt/MqGx6ap1K78SUVOPrK/wN5jMDJuCE2MV3NSp1pTMkfykcdy0v761QpnFUM1mTW4phKuWSRhj9KVziUbRURmt9mv/xtjZxc5ya9o/fq63Xno/DkfnL3fWSL3u8+JHPzO5hvTXyyWpzHfkuTAzlDf1hM5gHxzWM/A9e670osBCtJ5lx/vRkxQyuwxXpjkQcCTWDMZ1aZ81RQ+miKDjFbTEH0NqQ34D8B4b4qMNj66hvvclEaa/K+BfHPpb4JismtrTDLJkIixQ0b8NvhAELB3DIr57HANEwpqk9/RYqKHl429hv7rGrzN5H82hR+njK10zrwFL++UMesaPjHCRXgjfMok2BTwY8ndghG9GNOU0GTEB/K5xQgxpcZI6DlWhoIak/WZEtJrIwGXMTri/xmZbPEUqZQUGEdM7uuAKSVPomKGFA3F5EEgngCrFmgHVQsvpsHoaeAL2gnpBif98vnP8hHcS8u848UI1PsU8PVgcD9V4G46EBW138ksWPLpEPggzlHAoiRHQxCqMpw/fckxIKF7joCVincsvEqnOA50TJwAmbjDieDDJJgEp2ucgV4jXfjYCPFKO9DmPOYnFwEMHYIE+MJRYESao6EP6uUwJKBljgFf9JUjEEMhx8IzKs1xkE5fcAIswNFOhAT84ph0mcl0BjaJWfRtRhitfGV+SE8skdGkUMSinnx5++iaCXVokI4GeFOK7Za+tZdJTKhxIoUxbfCcaJqn1qnGLDFA880wHkd7qAVVNQneERJXcukCCCsM4USkPfuhASB0yyvz572tCbJPqYE7ZmD8lWRE20mkrpsVhSXJt0cHd7kHrTSR/OdZQ1fq1LaZJpTeewc00r0RP1dCJvZ6qBZqBjIAdtKixn4R1DySGg0DYLTxtH0kMkxePHntdlHDR2nUZyKTtayU1yoz5XcDoK0pFqR4r167wn8QEzUP8N3JAgNgywDIfL1jiMCDE5MptcljkxZE1y5S0bMAaw5bmtq6kgr1zytURoJ4NQhTHMGREVZt0gtBSScaaBgteWiv608qaJWkVK8IWbu108BQd+zRnej4Y6TAdWtwoqokb+VSNJRzChUtM3g+Hpmtbr75/qQzj6YtrgeijS/lnXANDsKLfh0gBaiU4gefgBVdDpEVPWm5ojRdl7KWpNCVkFx+kcnXywqWVvYmhqHt6Xy2K8umY8OJc5UNDrZDrFZfjWwNkAuF7RUQeKz31b20dQNV6XJrE3ojcAyh9ys1wFhdVS6sNcYoPUJM6xOZQctMlSITqhY+GufxlEEUUCsyu6Pg9T4FvkfwUAEjzhCgRm903Is/htoImEDmijV7NbdSS19prrpA57cQI9oUI3zwFlDBY/BmmwkE/zXdeIzHlnSjhX2SbdyBDDYQA7+FRtYyqf11QB9j3FmTW4xkYFQhVQHFMp7LDDSb+m0+XMDSicwzkM4wW87CtgdKA4me45x0ZST3xCBEzdCQbjxBYcPI7JLGCJ8AWhiaxPoGBObOnO+a1E3NqB00pXM0aoCMd+jCgRbHAFTfqkQJi5SCtuqtjdA5Ba8cZ+2IQhVwyZhOacm2YmtdtVbN5Y5erAdNAQiKfPfPu+Fgxxra3txpbJIcyOwxEHD7S4H/sAZV01Gtc5dSLC2lGQmwsE/eeaN28NpodPdQKG2jETlYGLQ+HQ9mGmQpenAkrTy068DTUkDwmgl8ObUcxUGSOCuIUgML7w7Cb72RNkEFHIdZB6AIK9WwwhZHEnTLYUtZnGwfgAkaszVl0VzSmJErtXQtLNKlfGzQP0TKddJvn6yG/41koQfwId1SBNRUdqumsxR/NsRRd8veVCf7Xm3nTP8ZAyDZJsoeUhDBMnICEiOERxc6JdJ+rkDSTCF6arFFV8iW8eHMFf0ejIOHzbEWTRTSp32lnMrVkVJ0XImYkEPt0RIyYliBPCzfs1xBU7t6pspKnvXJXyE7Z8DCitTOTkkZZktEbfkO3pMQcRK5/jmWRBarzH+maPe0Q25Wr/pWC+1ST3yLAB2InQoKFJmkyjXgyPT0aC7UVdXHqK+YDROxqNOgssAxE7lkYkoWQ8ZeVH+6bTqIDOgUvWY7VhSMUqkILjANiyKUdwUCzN8UYoTSP3LNlmXbyYTWvWEu5CCSuSVQJ10mXgygBN2EBew5ZCF0bQc2z+hfbyjb9vBamBl9D+S37MwHv7/N1lZplD6QsA0g285Lmamc3u8vfExv0OowoB6Y5IjQCHfVvxSoIiSonpxjKUdDUUl5a6eN5YeffhEkRUukMrmKqpq6hqaWNsNyvI6unr6BoZGxiamZucLC0sraxtbO3sHRyRkSChoGFk6jJs1atGrTvi9wtHXq0q1Hrz79BgwagjdsxKgx4yZMKptjYrYnwsLDKa1gnsM3oyC3KJsTQEbRrIorF6oIiHxIbpBduvbg1p17FC8ePamh8nv36g2NHQMdExsLxzQuPjsUbiN8r4SUjIKckprKphlaGjp62z5C5/lxdmTVffr349cf2Je4KUnLVqzbcGrVmjMGx6xKzu074BKTl7BrQUBKjldI2JZnh45CUdlwIefTzKKYoOzls7vNIxf9AAAAAA==") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`,frank:`body.stnd-adapter[data-stnd-theme=frank] {
  --color-dark-foreground: oklch( 84% 0.0276 80.72 );
  --color-dark-background: oklch( 9.76% 0.012 90.93 );
  --font-text: "Cargo Diatype";
  --font-header: "Inter";
  --font-header-weight: 900;
  --font-header-letter-spacing: -0.065em;
  --font-header-line-height: 1;
  --gap-body: var(--space-2);
  --gap-header: var(--space-6);
  --optical-ratio: var(--ratio-golden);
  --font-size: 1.0625rem;
  --line-height: 1.5;
  --color-link: var(--color-green);
  --font-ratio: 1.25;
  --font-density: 1.45;
  --marge-block: 1;
  --font-feature: "liga", "salt", "clig", "kern", "calt", "zero";
  --font-header-feature: "liga";
  --font-header-variation: "SOFT" 75, "WONK" 0;
  --font-interface: "Inter";
  --font-interface-feature: "tnum";
  --color-light-foreground: oklch(25.20% 0.0000 0.00);
  --color-light-background: oklch(100.00% 0.0000 0.00);
  --color-light-red: oklch(48.37% 0.1896 27.22);
  --color-light-orange: oklch(70.28% 0.1537 51.89);
  --color-light-yellow: oklch(76.15% 0.1465 73.14);
  --color-light-green: oklch(64.49% 0.0991 163.23);
  --color-light-cyan: oklch(65.79% 0.0866 200.53);
  --color-light-blue: oklch(48.22% 0.1064 240.38);
  --color-light-purple: oklch(49.92% 0.1415 320);
  --color-light-pink: oklch(71.70% 0.1537 360);
  --color-light-accent: var(--color-blue);
  --color-light-bold: var(--color-red);
  --color-light-italic: var(--color-blue);
  --font-line-width: 40rem;
}
body.stnd-adapter[data-stnd-theme=frank] {
  /* Dark */
  --color-dark-foreground: oklch(0.7721 0.0228 96.47);
  --color-dark-background: oklch(0.2308 0.0023 67.73);
  --color-dark-accent: var(--color-yellow);
  --color-dark-red: oklch(48.37% 0.1896 27.22);
  --color-dark-orange: oklch(68.30% 0.1638 52.74);
  --color-dark-yellow: oklch(77.36% 0.1572 70.09);
  --color-dark-green: oklch(48.45% 0.0792 169.07);
  --color-dark-cyan: oklch(55.79% 0.0866 200.53);
  --color-dark-blue: oklch(51.36% 0.0974 225.11);
  --color-dark-purple: oklch(52.98% 0.1621 332.34);
  --color-dark-pink: oklch(54.70% 0.1628 360);
  --color-dark-accent: var(--color-yellow);
  --color-dark-bold: var(--color-orange);
  --color-dark-italic: var(--color-blue);
}
body.stnd-adapter[data-stnd-theme=frank] .callout[data-callout=caption] {
  margin: -1rlh 33% 0 0 !important;
  padding: 0;
  border-radius: 0;
  text-wrap: balance;
}
body.stnd-adapter[data-stnd-theme=frank] .callout[data-callout=caption] .callout-content {
  text-align: left;
  padding: 0;
  color: var(--color-foreground);
  border-radius: 0;
}
body.stnd-adapter[data-stnd-theme=frank] .vertical-rhythm :is(hr, .HyperMD-hr) {
  display: none !important;
}
body.stnd-adapter[data-stnd-theme=frank] :is(:is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote), :is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)), figure, .callout, p:has(img)) {
  margin-inline: 0 !important;
  padding-inline: 0 !important;
  box-shadow: 0 !important;
}
body.stnd-adapter[data-stnd-theme=frank] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  text-align: left;
  color: var(--color-foreground);
}`,gallery:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=gallery] {
  --color-dark-foreground: #ccc;
  --color-dark-background: #101010;
  --color-light-background: #fafafa;
  --color-light-foreground: #1c1c1c;
  --color-accent: #c1443c;
  --optical-ratio: var(--ratio-golden);
  --mobile-font-ratio: var(--ratio-golden);
  --shadow: none;
  --radius: 0;
  --font-monospace: monospace;
  --font-text: "Cargo Diatype";
  --font-header: "Cargo Diatype";
  --font-header-letter-spacing: -0.065em;
  --line-height: 1.2;
  --gap-body: var(--space);
  --font-size: 1.0625rem;
  --font-ratio: 1.333;
  --font-density: 1.5;
  --font-line-width: 42rem;
}
body.stnd-adapter[data-stnd-theme=gallery] {
  /* \u2500\u2500\u2500 Custom rules for Gallery \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=gallery] .prose {
  display: block;
}
body.stnd-adapter[data-stnd-theme=gallery] body {
  max-width: 100%;
}
body.stnd-adapter[data-stnd-theme=gallery] {
  /* The work gets the wall */
}
body.stnd-adapter[data-stnd-theme=gallery] .prose img {
  display: block;
  margin-inline: auto;
  margin-block: var(--space-8);
  max-width: min(100%, 72rem);
}
body.stnd-adapter[data-stnd-theme=gallery] {
  /* The placard: narrow, quiet, beside the work in spirit */
}
body.stnd-adapter[data-stnd-theme=gallery] .prose :is(p, ul, ol, :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote)) {
  max-width: 26rem;
  margin-inline: auto;
}
body.stnd-adapter[data-stnd-theme=gallery] {
  /* Captions recede like wall labels */
}
body.stnd-adapter[data-stnd-theme=gallery] figcaption,
body.stnd-adapter[data-stnd-theme=gallery] .prose img + em {
  display: block;
  text-align: center;
  font-size: var(--size-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.55;
  margin-block-start: calc(var(--space-8) * -0.6);
  margin-block-end: var(--space-8);
}
body.stnd-adapter[data-stnd-theme=gallery] {
  /* Exhibition titles: present, never loud */
}
body.stnd-adapter[data-stnd-theme=gallery] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title),
body.stnd-adapter[data-stnd-theme=gallery] :is(.markdown-reading-view h2, .HyperMD-header-2),
body.stnd-adapter[data-stnd-theme=gallery] :is(.markdown-reading-view h3, .HyperMD-header-3) {
  text-align: left;
  font-weight: 500;
  text-wrap: balance;
  margin-inline: var(--space);
}
body.stnd-adapter[data-stnd-theme=gallery] :is(.markdown-reading-view h2, .HyperMD-header-2),
body.stnd-adapter[data-stnd-theme=gallery] :is(.markdown-reading-view h3, .HyperMD-header-3) {
  margin-block-start: var(--space-10);
}
body.stnd-adapter[data-stnd-theme=gallery] {
  /* A horizontal rule is a walk to the next room */
}
body.stnd-adapter[data-stnd-theme=gallery] :is(hr, .HyperMD-hr) {
  border: 0;
  background: none;
  height: 0;
  margin-block: var(--space-12);
}
body.stnd-adapter[data-stnd-theme=gallery] footer {
  max-width: 100% !important;
}`,humanist:`body.stnd-adapter[data-stnd-theme=humanist] {
  --color-light-background: oklch(0.98 0.01 95.1);
  --color-light-foreground: #2b2b2b;
  --color-light-accent: #d65d0e;
  --color-accent: #d65d0e;
  --color-dark-foreground: oklch(0.81 0.01 93.01);
  --color-dark-background: oklch(0.27 0 106.64);
  --color-dark-accent: oklch(0.67 0.13 38.76);
  --color-italic: var(--color-blue);
  --font-sans: "National Park";
  --font-text: "National Park";
  --font-feature: "ss01", "ss02";
  --font-serif: Kalice;
  --font-header: Kalice, Newsreader;
  --font-interface: "Kalice";
  --font-header-weight: 400;
  --font-header-line-height: 1.1;
  --font-header-letter-spacing: 0em;
  --font-weight-bold: 600;
  --stroke-width: 0;
  --gap-body: var(--space-3);
  --color-light-italic: var(--color-blue);
  --color-light-bold: var(--color-accent);
  --color-dark-italic: var(--color-blue);
  --color-dark-bold: var(--color-accent);
  --font-monospace: "MonoLisa";
  --bold-weight: 500;
  --font-density: 1.5;
  --font-ratio: 1.333;
  --font-line-width: 38rem;
  --font-size: 1.125rem;
}
body.stnd-adapter[data-stnd-theme=humanist] .prose {
  display: block;
}
body.stnd-adapter[data-stnd-theme=humanist] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  text-align: center;
  color: var(--color-foreground);
}
body.stnd-adapter[data-stnd-theme=humanist] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  border-left: 4px solid var(--color-accent);
  padding-block: var(--space-2);
  margin-block: var(--space-2) var(--space);
  margin-inline: var(--space);
  font-size: var(--size-lg);
  font-family: var(--font-header);
}`,international:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=international] {
  --color-light-background: #ffffff;
  --color-dark-background: #111111;
  --color-light-red: #e03030;
  --color-dark-red: #db6057;
  --color-green: var(--color-red);
  --color-blue: #2b5aa0;
  --color-yellow: var(--color-red);
  --color-magenta: var(--color-red);
  --color-orange: var(--color-red);
  --color-accent: var(--color-red);
  --color-link: var(--color-red);
  --shadow: none;
  --radius: 0;
  --color-border: none;
  --color-muted: var(--color-foreground);
  --color-dark-foreground: #ccc;
  --optical-ratio: var(--ratio-golden);
  --mobile-font-ratio: var(--ratio-golden);
  --font-monospace: "Sohne Mono", monospace;
  --font-text: "Cargo Diatype";
  --font-header-weight: 900;
  --font-header-letter-spacing: -0.065em;
  --line-height: 1.2;
  --body-padding: var(--space);
  --color-surface: var(--color-background);
  --font-header: Inter;
  --font-interface: Inter;
  --line-width: var(--line-width-xs);
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.45;
  --font-line-width: 42rem;
}
body.stnd-adapter[data-stnd-theme=international] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-red: #e03030;
  --color-dark-red: #db6057;
  --color-green: var(--color-red);
  --color-blue: #2b5aa0;
  --color-yellow: var(--color-red);
  --color-magenta: var(--color-red);
  --color-orange: var(--color-red);
  --color-accent: var(--color-red);
  --color-link: var(--color-red);
  --shadow: none;
  --radius: 0;
  --color-border: none;
  --color-muted: var(--color-foreground);
  --color-dark-foreground: #ccc;
  --optical-ratio: var(--ratio-golden);
  --mobile-font-ratio: var(--ratio-golden);
  --font-monospace: "Sohne Mono", monospace;
  --font-text: "Cargo Diatype";
  --font-header-weight: 900;
  --font-header-letter-spacing: -0.065em;
  --line-height: 1.2;
  --body-padding: var(--space);
  --color-surface: var(--color-background);
  --font-header: Inter;
  --font-interface: Inter;
  --line-width: var(--line-width-xs);
  /* \u2500\u2500\u2500 Custom rules for International \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  letter-spacing: -0.065em;
  font-weight: 900;
  line-height: 0.965;
  text-align: left;
  margin-block-end: var(--space-6);
}
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view h2, .HyperMD-header-2),
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view h3, .HyperMD-header-3) {
  font-size: var(--size-2xl);
  margin-block-start: var(--space-8);
  margin-block-end: var(--space-4);
  font-weight: 800;
  letter-spacing: -0.065em;
}
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view h4, .HyperMD-header-4),
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view h5, .HyperMD-header-5),
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view h6, .HyperMD-header-6) {
  margin-block-end: var(--space);
}
body.stnd-adapter[data-stnd-theme=international] .font-interface {
  font-size: 12px;
}
body.stnd-adapter[data-stnd-theme=international] :is(hr, .HyperMD-hr) {
  background: var(--color-foreground);
}
body.stnd-adapter[data-stnd-theme=international] .callout-content {
  background: none;
}
body.stnd-adapter[data-stnd-theme=international] strong {
  color: var(--color-accent);
  font-weight: normal;
}
body.stnd-adapter[data-stnd-theme=international] em {
  background-color: var(--color-accent);
  color: var(--color-background);
}
body.stnd-adapter[data-stnd-theme=international] .callout {
  background: none;
  border: 0;
  font-size: var(--size-sm);
  padding-inline: var(--space);
}
body.stnd-adapter[data-stnd-theme=international] :is(.callout-title, .callout-title-inner) {
  color: var(--color-foreground);
  border: none;
  margin-block-start: var(--leading);
  padding: 0;
}
body.stnd-adapter[data-stnd-theme=international] .callout-content {
  padding: 0;
}
body.stnd-adapter[data-stnd-theme=international] :is(code, .cm-inline-code),
body.stnd-adapter[data-stnd-theme=international] .token {
  color: var(--color-foreground) !important;
}
body.stnd-adapter[data-stnd-theme=international] .prose {
  display: block;
}
body.stnd-adapter[data-stnd-theme=international] img {
  border: 0;
}
body.stnd-adapter[data-stnd-theme=international] .prose :is(p, :is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)), details, li, :is(hr, .HyperMD-hr), .scroll, .callout, aside) {
  max-width: 30rem;
  margin-inline: 0;
}
body.stnd-adapter[data-stnd-theme=international] .prose :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) p {
  max-width: none !important;
  margin-block: var(--space);
  color: var(--color-foreground);
  border-left: var(--border);
  padding: var(--space) var(--space);
  font-size: var(--size-lg);
}
body.stnd-adapter[data-stnd-theme=international] aside {
  background: none;
  border: 0;
}
body.stnd-adapter[data-stnd-theme=international] body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  max-width: 1400px;
}
body.stnd-adapter[data-stnd-theme=international] header {
  display: block;
}
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)) {
  padding: 0;
  padding-block: var(--leading);
  margin-block: var(--leading);
  border: 0;
  background-color: var(--color-background);
}
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)) :is(code, .cm-inline-code) {
  opacity: 1;
}
body.stnd-adapter[data-stnd-theme=international] footer {
  max-width: 100% !important;
}
body.stnd-adapter[data-stnd-theme=international] .comment {
  opacity: 0.2;
}
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  border: 0;
  padding-block: var(--space);
  padding-inline: 0;
  font-size: var(--size-xl);
  font-family: var(--font-header);
  font-weight: var(--font-header-weight);
  letter-spacing: var(--font-header-letter-spacing);
  font-style: normal;
}
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) {
  grid-column: content;
}
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)),
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) th,
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) td,
body.stnd-adapter[data-stnd-theme=international] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) td :is(code, .cm-inline-code) {
  font-size: var(--size-xs);
  font-family: var(--font-monospace);
  word-break: keep-all;
}`,kernel:`body.stnd-adapter[data-stnd-theme=kernel] {
  --color-light-background: #f7f3ee;
  --color-light-foreground: #4a341c;
  --color-light-red: #df453a;
  --color-light-orange: #e08e1f;
  --color-light-yellow: #d69a00;
  --color-light-green: #4ca06b;
  --color-light-cyan: #2aa198;
  --color-light-blue: #2882c3;
  --color-light-purple: #d16d92;
  --color-light-pink: #ea76cb;
  --color-dark-background: #231e1a;
  --color-dark-foreground: #e6cfb3;
  --color-dark-red: #d0483e;
  --color-dark-orange: #da702c;
  --color-dark-yellow: #d69a00;
  --color-dark-green: #27a06c;
  --color-dark-cyan: #81c8be;
  --color-dark-blue: #8caaee;
  --color-dark-purple: #8b7ec8;
  --color-dark-pink: #f4b8e4;
  --color-accent: var(--color-yellow);
  --color-code: var(--color-foreground);
  --color-bold: var(--color-blue);
  --color-italic: var(--color-green);
  --color-dark-accent: var(--color-magenta);
  --color-dark-bold: var(--color-magenta);
  --color-header: var(--color-foreground);
  --radius: var(--leading);
  --font-text: "MonoLisa";
  --font-feature: "onum", "liga", "clig", "calt", "zero";
  --font-variation: "";
  --font-header: "Fraunces";
  --font-monospace: "MonoLisa";
  --font-monospace-feature: "liga", "zero", "calt", "ss02", "ss03", "ss07", "ss10", "ss15", "ss16";
  --font-interface: "Monolisa";
  --font-header-weight: 400;
  --font-header-feature: "";
  --font-header-variation: "SOFT" 100, "WONK" 1;
  --font-header-letter-spacing: -0.065em;
  --stroke-width: 1.5px;
  --line-height: 1.3;
  --line-width: var(--line-width-sm);
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.45;
  --font-line-width: 44rem;
}
body.stnd-adapter[data-stnd-theme=kernel] {
  /* Accent system */
  --color-light-red: #df453a; /* warning, highlight */
  --color-light-orange: #e08e1f; /* attention blocks */
  --color-light-yellow: #d69a00; /* vintage punchcard yellow */
  --color-light-green: #4ca06b; /* success, approval */
  --color-light-cyan: #2aa198; /* teal-y terminal feel */
  --color-light-blue: #2882c3; /* link, info */
  --color-light-purple: #d16d92; /* utility, label tags */
  --color-light-pink: #ea76cb; /* softer */
  --color-dark-background: #231e1a; /* dark terminal feel */
  --color-dark-foreground: #e6cfb3;
  /* Accent system */
  --color-dark-red: #d0483e;
  --color-dark-orange: #da702c;
  --color-dark-yellow: #d69a00;
  --color-dark-green: #27a06c;
  --color-dark-cyan: #81c8be;
  --color-dark-blue: #8caaee;
  --color-dark-purple: #8b7ec8;
  --color-dark-pink: #f4b8e4;
  /* Code and UI extras */
  --color-light-accent: var(--color-blue);
  --color-dark-accent: var(--color-purple);
  --color-bold-default: var(--color-red);
  --color-italic-default: var(--color-blue);
  --font-density: 1.5;
  --font-ratio: 1.5;
  --font-line-width: 55ch;
  --font-text: "MonoLisa";
  --font-weight: 400;
  --bold-weight: 500;
  --font-feature: "";
  --font-variation: "";
  --font-header: "Fraunces";
  --font-header-weight: 400;
  --font-header-feature: "";
  --font-header-variation: "SOFT" 100, "WONK" 1;
  --font-header-letter-spacing: -0.065em;
  --font-monospace: "MonoLisa";
  --font-mono-feature: "";
  --font-mono-variation: "";
  --font-interface: "MonoLisa";
  --code-function: var(--color-pink);
}
body.stnd-adapter[data-stnd-theme=kernel][data-theme-mode=dark] {
  --color-accent: var(--color-purple);
  --color-bold: var(--color-pink);
}
body.stnd-adapter[data-stnd-theme=kernel] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  text-align: left;
}
body.stnd-adapter[data-stnd-theme=kernel] .token.comment {
  color: color-mix(in oklab, var(--color-base-100) 40%, var(--color-base-00));
  font-style: italic;
}`,manifeste:`body.stnd-adapter[data-stnd-theme=manifeste] {
  --color-light-background: #f4f1e9;
  --color-light-foreground: #191911;
  --color-light-accent: #a14e3d;
  --color-light-bold: #a14e3d;
  --color-dark-background: #1b1a18;
  --color-dark-foreground: oklch(0.825 0.0153 90.24);
  --color-dark-accent: #9ecaa3;
  --font-header: "Tiempos Headline", serif;
  --font-text: "Fern", "Joly", serif;
  --font-variation: 'TITL' 0.0;
  --font-interface: "Futura Now Var";
  --font-monospace: "Sohne Mono";
  --font-header-weight: 300;
  --font-header-letter-spacing: 0.01em;
  --font-header-line-height: 1.2;
  --font-ratio: 1.333;
  --font-density: 1.6;
  --font-text-size: 1.1em !important;
  --margin: 3rlh;
  --font-weight: 500;
  --font-size: 1.15rem;
  --font-line-width: 38rem;
}
body.stnd-adapter[data-stnd-theme=manifeste] {
  --color-dark-bold: color-mix(
      in oklab,
      #de7260 85%,
      var(--color-background)
  );
}
body.stnd-adapter[data-stnd-theme=manifeste] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  text-align: center;
  padding: 3rlh 0;
  color: var(--color-foreground);
}
body.stnd-adapter[data-stnd-theme=manifeste] .callout {
  border-color: color-mix(in oklab, var(--callout-color) 20%, var(--color-surface, var(--color-background)));
  background-color: color-mix(in oklab, var(--callout-color) 2%, var(--color-surface, var(--color-background)));
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-left-width: 0.25rlh;
}
body.stnd-adapter[data-stnd-theme=manifeste] .callout-icon {
  color: var(--callout-color);
}
body.stnd-adapter[data-stnd-theme=manifeste] :is(.callout-title, .callout-title-inner) {
  color: var(--color-foreground);
}
body.stnd-adapter[data-stnd-theme=manifeste] .callout-content {
  border: 0;
  background: transparent;
  box-shadow: none;
}
body.stnd-adapter[data-stnd-theme=manifeste] .vertical-rhythm :is(ol, ul) > li {
  margin: 0;
}`,mono:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=mono] {
  --color-light-foreground: #0a0a0a;
  --color-light-background: #f7f5f0;
  --color-light-red: #af3029;
  --color-light-orange: #bc5215;
  --color-light-yellow: #ad8301;
  --color-light-green: #66800b;
  --color-light-cyan: oklch(45.26% 0.0839 191.25);
  --color-light-blue: #205ea6;
  --color-light-purple: #5e409d;
  --color-light-pink: #a02f6f;
  --color-dark-foreground: #f7f5f0;
  --color-dark-background: #0a0a0a;
  --color-light-accent: #ff3300;
  --color-dark-accent: #ff5a1f;
  --font-monospace: "Sohne Mono";
  --color-bold: var(--color-accent);
  --color-italic: var(--color-foreground);
  --font-text: "Sohne Mono";
  --font-header: "Sohne Mono";
  --font-interface: "Sohne Mono";
  --font-density: 1.45;
  --bold-weight: 700;
  --font-feature: "zero", "calt", "cv01", "cv07", "cv10", "cv11", "cv14", "cv16", "cv17", "cv18", "ss01";
  --font-header-feature: "liga", "calt", "case", "kern", "cv01", "cv02", "cv03", "cv04", "cv06", "cv09", "cv10", "cv11", "cv12", "cv13";
  --font-header-weight: 700;
  --font-header-line-height: 1;
  --font-header-letter-spacing: 0.08em;
  --font-size: 1.0625rem;
  --font-ratio: 1.2;
  --font-line-width: 44rem;
  /* \u2500\u2500\u2500 Custom rules for Mono \u2014 NYC street-fashion spec-sheet \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
     Every element reads like a garment tag: monospace throughout, tracked-out
     caps for headers, a hazard-orange accent doing the work a hangtag would. */
}
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title),
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view h2, .HyperMD-header-2),
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view h3, .HyperMD-header-3),
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view h4, .HyperMD-header-4),
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view h5, .HyperMD-header-5),
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view h6, .HyperMD-header-6) {
  text-transform: uppercase;
  font-weight: var(--font-header-weight);
  letter-spacing: var(--font-header-letter-spacing);
}
body.stnd-adapter[data-stnd-theme=mono] {
  /* Barcode rule under the title \u2014 thick/thin like a tag scan line */
}
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  padding-bottom: var(--space-half);
  border-bottom: 4px solid var(--color-foreground);
  box-shadow: 0 6px 0 -3px var(--color-foreground);
  margin-block-end: var(--space-4);
}
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view h2, .HyperMD-header-2)::before,
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view h3, .HyperMD-header-3)::before {
  content: "// ";
  color: var(--color-accent);
}
body.stnd-adapter[data-stnd-theme=mono] strong {
  color: var(--color-accent);
  font-weight: var(--bold-weight);
}
body.stnd-adapter[data-stnd-theme=mono] {
  /* Off-White-style quotation marks around emphasis */
}
body.stnd-adapter[data-stnd-theme=mono] em {
  font-style: normal;
  color: var(--color-foreground);
}
body.stnd-adapter[data-stnd-theme=mono] em::before {
  content: "\u201C";
}
body.stnd-adapter[data-stnd-theme=mono] em::after {
  content: "\u201D";
}
body.stnd-adapter[data-stnd-theme=mono] a {
  color: var(--color-foreground);
  text-decoration-color: var(--color-accent);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}
body.stnd-adapter[data-stnd-theme=mono] {
  /* Care-label block quote */
}
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  border: 1px dashed var(--color-foreground);
  padding: var(--space) var(--space-2);
  position: relative;
}
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote)::before {
  content: "SIZE / NOTE";
  position: absolute;
  top: -0.6em;
  left: var(--space);
  background: var(--color-background);
  padding-inline: var(--space-d4);
  font-size: var(--size-3xs);
  letter-spacing: 0.15em;
  color: var(--color-accent);
}
body.stnd-adapter[data-stnd-theme=mono] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)),
body.stnd-adapter[data-stnd-theme=mono] th,
body.stnd-adapter[data-stnd-theme=mono] td {
  font-family: var(--font-monospace);
  border-color: var(--color-foreground);
}
body.stnd-adapter[data-stnd-theme=mono] th {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent);
}
body.stnd-adapter[data-stnd-theme=mono] :is(code, .cm-inline-code) {
  background: color-mix(in srgb, var(--color-foreground) 8%, transparent);
}
body.stnd-adapter[data-stnd-theme=mono] img {
  filter: none !important;
  mix-blend-mode: normal !important;
}`,occult:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=occult] {
  --color-light-background: #f8f5f1;
  --color-light-foreground: #1c1c1b;
  --color-light-accent: #be9c63;
  --color-light-red: #8a3324;
  --color-light-orange: #c1742d;
  --color-light-green: #4a7a49;
  --color-light-cyan: #3b8d8a;
  --color-light-blue: #2f5f87;
  --color-light-purple: #6b4b8a;
  --color-dark-background: #0f0f0f;
  --color-dark-foreground: #efeae3;
  --color-dark-accent: color-mix(in srgb, var(--color-light-accent) 60%, #000 40%);
  --color-bold: var(--color-red);
  --color-italic: var(--color-green);
  --font-text: "Fern";
  --font-header: "Fern";
  --font-monospace: "Monaspace Xenon";
  --font-size: 1.125rem;
  --font-ratio: 1.25;
  --font-density: 1.5;
  --font-line-width: 38rem;
}
body.stnd-adapter[data-stnd-theme=occult] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #f8f5f1;
  --color-light-foreground: #1c1c1b;
  --color-light-accent: #be9c63;
  --color-light-red: #8a3324;
  --color-light-orange: #c1742d;
  --color-light-green: #4a7a49;
  --color-light-cyan: #3b8d8a;
  --color-light-blue: #2f5f87;
  --color-light-purple: #6b4b8a;
  --color-dark-background: #0f0f0f;
  --color-dark-foreground: #efeae3;
  --color-dark-accent: color-mix(in srgb, var(--color-light-accent) 60%, #000 40%);
  --color-bold: var(--color-red);
  --color-italic: var(--color-green);
  --font-text: "Fern";
  --font-header: "Fern";
  --font-monospace: "Monaspace Xenon";
  /* \u2500\u2500\u2500 Custom rules for Occult \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* === Core palette (light) === */
  /* warm paper */
  /* faded ink */
  /* antique gold */
  /* Ancillary accents */
  /* dried blood / sealing wax */
  /* === Dark mode counterparts === */
  /* Semantic aliases */
  /* Typography & tokens */
}
body.stnd-adapter[data-stnd-theme=occult] .dark {
  --color-accent: var(--color-dark-accent);
  --color-bold: var(--color-dark-accent);
}
body.stnd-adapter[data-stnd-theme=occult] {
  /* Pre/code treatment \u2014 keep it readable against the parchment */
}
body.stnd-adapter[data-stnd-theme=occult] :is(:is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)), :is(code, .cm-inline-code)) {
  font-family: var(--font-monospace);
  background: color-mix(in srgb, var(--color-foreground) 3%, transparent);
  color: var(--color-foreground);
  border-radius: var(--radius);
  padding: calc(var(--space) * 0.75);
}
body.stnd-adapter[data-stnd-theme=occult] {
  /* Media blocks stand out softly on the parchment */
}
body.stnd-adapter[data-stnd-theme=occult] :is(p:has(img), figure) {
  background: color-mix(in srgb, var(--color-light-accent) 3%, transparent);
  padding: var(--space);
  border-radius: calc(var(--radius) + var(--space-2));
}`,reveal:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=reveal] {
  --color-light-background: #fdfdfc;
  --color-light-foreground: #212121;
  --color-light-border: rgba(33, 33, 33, 0.14);
  --color-dark-background: #1f1f1e;
  --color-dark-foreground: #ebebeb;
  --color-dark-border: rgba(235, 235, 235, 0.14);
  --color-accent: #d6202c;
  --color-light-elevated: #ffffff;
  --color-dark-elevated: #2d2d2d;
  --color-light-photoFrame: #ffffff;
  --color-dark-photoFrame: #171717;
  --font-text: "Inter", system-ui, sans-serif;
  --font-header: "DIN Condensed", Impact, "Arial Narrow", sans-serif;
  --font-monospace: "IBM Plex Mono", "SF Mono", monospace;
  --font-serif: "Newsreader", Georgia, serif;
  --line-height: 1.2;
  --font-size: 1.125rem;
  --font-ratio: 1.333;
  --font-density: 1.4;
  --font-line-width: 45rem;
}
@media (prefers-color-scheme: dark) {
  body.stnd-adapter[data-stnd-theme=reveal] {
    --color-photo-frame: var(--color-surface-high);
  }
}
body.stnd-adapter[data-stnd-theme=reveal] {
  /* \u2500\u2500\u2500 Foreground & Background \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-background: #fdfdfc;
  --color-light-foreground: #212121;
  --color-light-border: rgba(33, 33, 33, 0.14);
  --color-dark-background: #1f1f1e;
  --color-dark-foreground: #ebebeb;
  --color-dark-border: rgba(235, 235, 235, 0.14);
  /* \u2500\u2500\u2500 Accent \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-accent: #d6202c;
  --color-dark-accent: #d6202c;
  --color-accent: #d6202c;
  /* \u2500\u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --font-text: "Inter", system-ui, sans-serif;
  --font-header: "DIN Condensed", Impact, "Arial Narrow", sans-serif;
  --font-monospace: "IBM Plex Mono", "SF Mono", monospace;
  --font-interface: "IBM Plex Mono";
  --font-serif: "Newsreader", Georgia, serif;
  --font-density: 1.2;
  /* \u2500\u2500\u2500 Custom rules for Reveal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=reveal] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6)) {
  font-family: var(--font-header) !important;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}
body.stnd-adapter[data-stnd-theme=reveal] :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  font-size: var(--size-2xl);
  letter-spacing: 0.12em;
  padding-block-end: var(--space-2);
}
body.stnd-adapter[data-stnd-theme=reveal] :is(.markdown-reading-view h2, .HyperMD-header-2) {
  font-size: var(--size-xl);
  border-bottom: var(--border);
  padding-block-end: var(--space);
}
body.stnd-adapter[data-stnd-theme=reveal] :is(.markdown-reading-view h3, .HyperMD-header-3) {
  font-size: var(--size-lg);
}
body.stnd-adapter[data-stnd-theme=reveal] {
  /* Leica safety styling */
}
body.stnd-adapter[data-stnd-theme=reveal] .callout {
  border-left: 3px solid var(--color-accent) !important;
  background: var(--color-surface-low) !important;
}
body.stnd-adapter[data-stnd-theme=reveal] {
  /* Technical tables */
}
body.stnd-adapter[data-stnd-theme=reveal] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) th {
  font-family: var(--font-header);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: var(--size-xs);
}
body.stnd-adapter[data-stnd-theme=reveal] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) {
  font-variant-numeric: tabular-nums;
}
body.stnd-adapter[data-stnd-theme=reveal] {
  /* Code tags as camera engravings */
}
body.stnd-adapter[data-stnd-theme=reveal] :is(code, .cm-inline-code):not(:is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)) :is(code, .cm-inline-code)) {
  background: var(--color-surface) !important;
  color: var(--color-foreground) !important;
  border: var(--border) !important;
  padding-inline: 0.3em !important;
  border-radius: var(--radius) !important;
  font-size: var(--size-xs) !important;
}`,technical:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=technical] {
  --color-light-foreground: #241b10;
  --color-light-background: #fffbe9;
  --color-dark-foreground: #9e7f5b;
  --color-dark-background: #1d2027;
  --color-light-border: #aed0ff;
  --color-dark-border: #333333;
  --color-light-red: #df453a;
  --color-light-orange: #e08e1f;
  --color-light-yellow: #d69a00;
  --color-light-green: #4ca06b;
  --color-light-cyan: #2aa198;
  --color-light-blue: #2882c3;
  --color-light-purple: #d16d92;
  --color-light-pink: #ea76cb;
  --color-dark-red: #d0483e;
  --color-dark-orange: #da702c;
  --color-dark-yellow: #d69a00;
  --color-dark-green: #27a06c;
  --color-dark-cyan: #81c8be;
  --color-dark-blue: #8caaee;
  --color-dark-purple: #8b7ec8;
  --color-dark-pink: #f4b8e4;
  --color-light-accent: var(--color-yellow);
  --color-dark-accent: var(--color-magenta);
  --color-bold: var(--color-blue);
  --color-italic: var(--color-green);
  --color-dark-bold: var(--color-magenta);
  --optical-ratio: 1.6;
  --line-height: 1.2;
  --mobile-line-height: 1.2;
  --font-text: "Courier Prime";
  --font-interface: var(--font-text);
  --font-monospace: "Berkeley Mono", "IBM Plex Mono", "Menlo", "Consolas", monospace;
  --font-header: "Monosten", "Gorton Perfected", "Futura Now Var";
  --font-header-feature: "onum", "salt", "calt";
  --font-header-variation: "wght" 400, "wdth" 100;
  --font-header-line-height: 0.9;
  --font-header-letter-spacing: 0em;
  --line-height-normal: 1.7em;
  --font-size: 1.0625rem;
  --font-ratio: 1.2;
  --font-density: 1.45;
  --font-line-width: 44rem;
}
body.stnd-adapter[data-stnd-theme=technical] {
  /* \u2500\u2500\u2500 Custom rules for Technical \u2014 NASA/EPA spec-sheet \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  background: var(--color-surface);
}
body.stnd-adapter[data-stnd-theme=technical] body {
  max-width: calc(var(--line-width) + var(--space-4));
  margin-inline: auto;
  background: var(--color-background);
  box-shadow: var(--shadow-lg);
  padding-top: 0 !important;
}
body.stnd-adapter[data-stnd-theme=technical] main {
  padding-block: var(--space-10);
  margin-top: 0 !important;
  border: 0;
  padding-inline: 0;
}
body.stnd-adapter[data-stnd-theme=technical] main :is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title) {
  text-align: left;
}
body.stnd-adapter[data-stnd-theme=technical] main :is(.markdown-reading-view h2, .HyperMD-header-2) {
  border-bottom: var(--border);
  padding-block-end: var(--space);
}
body.stnd-adapter[data-stnd-theme=technical] {
  /* Spec-sheet numbering: 1.0, 2.0 \u2026 2.1, 2.2 */
}
body.stnd-adapter[data-stnd-theme=technical] .prose {
  counter-reset: spec;
}
body.stnd-adapter[data-stnd-theme=technical] .prose :is(.markdown-reading-view h2, .HyperMD-header-2) {
  counter-increment: spec;
  counter-reset: subspec;
}
body.stnd-adapter[data-stnd-theme=technical] .prose :is(.markdown-reading-view h2, .HyperMD-header-2)::before {
  content: counter(spec) ".0\u2002";
  color: var(--color-accent);
}
body.stnd-adapter[data-stnd-theme=technical] .prose :is(.markdown-reading-view h3, .HyperMD-header-3) {
  counter-increment: subspec;
}
body.stnd-adapter[data-stnd-theme=technical] .prose :is(.markdown-reading-view h3, .HyperMD-header-3)::before {
  content: counter(spec) "." counter(subspec) "\u2002";
  color: var(--color-accent);
}
body.stnd-adapter[data-stnd-theme=technical] {
  /* Inline :is(code, .cm-inline-code) as machined parts */
}
body.stnd-adapter[data-stnd-theme=technical] .prose :is(code, .cm-inline-code):not(:is(.markdown-reading-view pre, .markdown-rendered pre, .markdown-preview-view pre, .cm-embed-block:has(pre)) :is(code, .cm-inline-code)) {
  border: 1px solid var(--color-border);
  padding-inline: 0.3em;
}
body.stnd-adapter[data-stnd-theme=technical] {
  /* Data tables: labelled like a parts list */
}
body.stnd-adapter[data-stnd-theme=technical] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) th {
  font-size: var(--size-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
body.stnd-adapter[data-stnd-theme=technical] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) {
  font-variant-numeric: tabular-nums;
}
body.stnd-adapter[data-stnd-theme=technical] {
  /* Callouts carry the safety stripe */
}
body.stnd-adapter[data-stnd-theme=technical] .callout {
  border-left: 3px solid var(--color-accent);
}
body.stnd-adapter[data-stnd-theme=technical] footer {
  margin-top: 0 !important;
  border-top: 0;
}
body.stnd-adapter[data-stnd-theme=technical] {
  /* \u2500\u2500\u2500 Obsidian-specific hooks \u2014 carried over from the retired "paper" theme
     (feeds the vault-sync/Obsidian export pipeline) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
}
body.stnd-adapter[data-stnd-theme=technical].theme-dark {
  --font-text: "JetBrains Mono";
  --font-monospace: "Voyager Mono";
  --font-interface: "Futura Now";
}
body.stnd-adapter[data-stnd-theme=technical].theme-light a, body.stnd-adapter[data-stnd-theme=technical][data-theme-mode=light] a {
  text-decoration: underline !important;
  --shadow-color: color-mix(in oklab, currentcolor 20%, transparent);
  --shadow-distance: 0px;
  --shadow-depth: 0.5px;
  text-shadow: var(--shadow-depth) 0px var(--shadow-depth) var(--shadow-color), calc(var(--shadow-depth) * -1) 0px var(--shadow-depth) var(--shadow-color), 0px var(--shadow-depth) var(--shadow-depth) var(--shadow-color);
}
body.stnd-adapter[data-stnd-theme=technical] :is(:is(.markdown-reading-view h1, .HyperMD-header-1, .inline-title), :is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3), :is(.markdown-reading-view h4, .HyperMD-header-4), :is(.markdown-reading-view h5, .HyperMD-header-5), :is(.markdown-reading-view h6, .HyperMD-header-6)) {
  text-align: left;
  color: color-mix(in oklab, currentcolor 90%, var(--color-background));
  --shadow-color: color-mix(in oklab, currentcolor 30%, var(--color-background));
  --shadow-distance: 0px;
  --shadow-depth: 0.5px;
  text-shadow: var(--shadow-depth) 0px var(--shadow-depth) var(--shadow-color), calc(var(--shadow-depth) * -1) 0px var(--shadow-depth) var(--shadow-color), 0px var(--shadow-depth) var(--shadow-depth) var(--shadow-color);
}`,venetian:`@charset "UTF-8";
body.stnd-adapter[data-stnd-theme=venetian] {
  --color-light-background: #f2e8d5;
  --color-light-foreground: #2b1d12;
  --color-dark-background: #1c120a;
  --color-dark-foreground: #e8d9bd;
  --color-light-accent: #7b3f00;
  --color-blue: #2f4e6e;
  --color-yellow: #c2a94b;
  --color-dark-accent: color-mix( in srgb, var(--color-dark-foreground) 25%, #b08a4b );
  --font-header: "adobe-jenson-pro";
  --font-text: "adobe-jenson-pro";
  --gap-body: var(--space-2);
  --gap-block: var(--space-2);
  --monile-gap-body: var(--space-2);
  --gap-mobile-block: var(--space-2);
  --line-height: 1.55;
  --line-width: var(--line-width-sm);
  --font-size: 1.15rem;
  --font-ratio: 1.2;
  --font-density: 1.55;
  --font-line-width: 38rem;
}
body.stnd-adapter[data-stnd-theme=venetian] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --color-light-accent: #7b3f00;
  --color-blue: #2f4e6e;
  --color-yellow: #c2a94b;
  --color-dark-accent: color-mix( in srgb, var(--color-dark-foreground) 25%, #b08a4b );
  --font-header: "adobe-jenson-pro";
  --font-text: "adobe-jenson-pro";
  --gap-body: var(--space-2);
  --gap-block: var(--space-2);
  --monile-gap-body: var(--space-2);
  --gap-mobile-block: var(--space-2);
  --line-height: 1.55;
  --line-width: var(--line-width-sm);
  /* \u2500\u2500\u2500 Custom rules for Venetian \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* burnt umber */ /* lapis-like */
  letter-spacing: 0.004em;
}`}});var Xo=_(()=>{(function(o){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var t=o.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism)});var Zo=_(()=>{(function(o){o.languages.typescript=o.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),o.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete o.languages.typescript.parameter,delete o.languages.typescript["literal-property"];var e=o.languages.extend("typescript",{});delete e["class-name"],o.languages.typescript["class-name"].inside=e,o.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),o.languages.ts=o.languages.typescript})(Prism)});var Yo=_(()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json});var Qo=_(()=>{(function(o){var e=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+t.source+"(?:[ 	]+"+e.source+")?|"+e.source+"(?:[ 	]+"+t.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function r(i,l){l=(l||"").replace(/m/g,"")+"m";var c=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<value>>/g,function(){return i});return RegExp(c,l)}o.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return n})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<key>>/g,function(){return"(?:"+a+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:r(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:r(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:r(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:r(s),lookbehind:!0,greedy:!0},number:{pattern:r(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:e,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},o.languages.yml=o.languages.yaml})(Prism)});var $o=_(()=>{(function(o){var e="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:t,environment:{pattern:RegExp("\\$"+e),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+e),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};o.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+e),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:t}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+e),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},t.inside=o.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=n.variable[1].inside,r=0;r<a.length;r++)s[a[r]]=o.languages.bash[a[r]];o.languages.sh=o.languages.bash,o.languages.shell=o.languages.bash})(Prism)});var ts=_((yc,es)=>{"use strict";es.exports=`/* --- Font: adobe-jenson-pro --- */
/* 
 * Adobe Jenson Pro
 * Description : Serifs humanistes Renaissance de Robert Slimbach (Adobe), declines en quatre optiques.
 * Pourquoi : Reference historique du serifs edition, ideale pour textes longs et hierarchies typographiques.
 * Optiques : Regular (corps) Caption (tres petit) Subhead (intertitre) Display (titre) - chacune 300/400/600/700
 */

/* \u2500\u2500 Adobe Jenson Pro --------------------------------------------  */

@font-face {
  font-family: "Adobe Jenson Pro";
  src: url("STND_FONT_URL:adobe-jenson-pro-light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-italic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-semibold-italic.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro";
  src: url("STND_FONT_URL:adobe-jenson-pro-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro";
  src: url("STND_FONT_URL:adobe-jenson-pro-italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro";
  src: url("STND_FONT_URL:adobe-jenson-pro-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro";
  src: url("STND_FONT_URL:adobe-jenson-pro-bold-italic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

/* \u2500\u2500 Adobe Jenson Pro Caption ------------------------------------  */

@font-face {
  font-family: "Adobe Jenson Pro Caption";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-capt-regular.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Caption";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-capt-italic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Caption";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-capt-semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Caption";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-capt-semibold-italic.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Caption";
  src: url("STND_FONT_URL:adobe-jenson-pro-capt-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Caption";
  src: url("STND_FONT_URL:adobe-jenson-pro-capt-italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Caption";
  src: url("STND_FONT_URL:adobe-jenson-pro-capt-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Caption";
  src: url("STND_FONT_URL:adobe-jenson-pro-capt-bold-italic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

/* \u2500\u2500 Adobe Jenson Pro Subhead ------------------------------------  */

@font-face {
  font-family: "Adobe Jenson Pro Subhead";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-subh-regular.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Subhead";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-subh-italic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Subhead";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-subh-semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Subhead";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-subh-semibold-italic.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Subhead";
  src: url("STND_FONT_URL:adobe-jenson-pro-subh-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Subhead";
  src: url("STND_FONT_URL:adobe-jenson-pro-subh-italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Subhead";
  src: url("STND_FONT_URL:adobe-jenson-pro-subh-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Subhead";
  src: url("STND_FONT_URL:adobe-jenson-pro-subh-bold-italic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

/* \u2500\u2500 Adobe Jenson Pro Display ------------------------------------  */

@font-face {
  font-family: "Adobe Jenson Pro Display";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-disp-regular.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Display";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-disp-italic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Display";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-disp-semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Display";
  src: url("STND_FONT_URL:adobe-jenson-pro-light-disp-semibold-italic.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Display";
  src: url("STND_FONT_URL:adobe-jenson-pro-disp-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Display";
  src: url("STND_FONT_URL:adobe-jenson-pro-disp-italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Display";
  src: url("STND_FONT_URL:adobe-jenson-pro-disp-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Adobe Jenson Pro Display";
  src: url("STND_FONT_URL:adobe-jenson-pro-disp-bold-italic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}


/* --- Font: andika --- */
/* 
 * Andika
 * Description : Famille de police Andika.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Andika";
  src: url("STND_FONT_URL:Andika-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Andika";
  src: url("STND_FONT_URL:Andika-Italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Andika";
  src: url("STND_FONT_URL:Andika-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Andika";
  src: url("STND_FONT_URL:Andika-BoldItalic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}


/* --- Font: atkinson-hyperlegible-mono --- */
/*
 * Atkinson Hyperlegible Mono
 * Description : Con\xE7ue par le Braille Institute pour une lisibilit\xE9 maximale.
 * Pourquoi : R\xE9f\xE9rence absolue pour l'accessibilit\xE9 et les interfaces techniques.
 * Range : 100-900 (Variable)
 */

@font-face {
  font-family: "Atkinson Hyperlegible Mono";
  src: url("STND_FONT_URL:atkinson-hyperlegible-mono-regular-variable.woff2")
    format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Atkinson Hyperlegible Mono";
  src: url("STND_FONT_URL:atkinson-hyperlegible-mono-italic-variable.woff2")
    format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}


/* --- Font: atkinson-hyperlegible-next --- */
/*
 * Atkinson Hyperlegible Next
 * Description : \xC9volution moderne de la version originale, plus \xE9quilibr\xE9e et versatile.
 * Pourquoi : Id\xE9ale pour les th\xE8mes \xE9ditoriaux tout en restant ultra-lisible.
 * Range : 100-900 (Variable)
 */

@font-face {
  font-family: "Atkinson Hyperlegible Next";
  src: url("STND_FONT_URL:atkinson-hyperlegible-next-regular-variable.woff2")
    format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Atkinson Hyperlegible Next";
  src: url("STND_FONT_URL:atkinson-hyperlegible-next-italic-variable.woff2")
    format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}


/* --- Font: avant-garde-pro --- */
/*
 * Avant Garde Pro
 * Description : Typographie g\xE9om\xE9trique classique, iconique des ann\xE9es 70.
 * Pourquoi : Parfaite pour des titres forts, g\xE9om\xE9triques et avec beaucoup de caract\xE8re.
 * Range : 200-700 (5 weights, + italics)
 */

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-XLt.woff2") format("woff2");
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-XLtObl.woff2") format("woff2");
  font-weight: 200;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-Bk.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-BkObl.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-Md.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-MdObl.woff2") format("woff2");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-Demi.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-DemiObl.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Avant Garde Pro";
  src: url("STND_FONT_URL:ITCAvantGardePro-BoldObl.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}


/* --- Font: avenir-next --- */
/* 
 * Avenir Next
 * Description : Famille de police Avenir Next.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Avenir Next Font Family */

@font-face {
    font-family: "Avenir Next";
    src: url("STND_FONT_URL:AvenirNextVariable-Roman.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Avenir Next";
    src: url("STND_FONT_URL:AvenirNextVariable-Italic.woff2") format("woff2");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: baskerville --- */
/* 
 * Baskerville
 * Description : Famille de police Baskerville.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Baskerville Font Family */

@font-face {
  font-family: "Baskerville";
  src: url("STND_FONT_URL:libre-baskerville-italic-variable.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Baskerville";
  src: url("STND_FONT_URL:libre-baskerville-regular-variable.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}


/* --- Font: bauhaus-pro --- */
/* 
 * Bauhaus Pro
 * Description : Famille de police Bauhaus Pro.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Bauhaus Pro Font Family */

@font-face {
    font-family: "Bauhaus Pro";
    src: url("STND_FONT_URL:BauhausPro-Light-1196070.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Bauhaus Pro";
    src: url("STND_FONT_URL:BauhausPro-Medium-1196205.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Bauhaus Pro";
    src: url("STND_FONT_URL:BauhausPro-Demi-1196206.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Bauhaus Pro";
    src: url("STND_FONT_URL:BauhausPro-Bold-1196079.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Bauhaus Pro";
    src: url("STND_FONT_URL:BauhausPro-Heavy-1196208.woff2") format("woff2");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

/* --- Font: berkeley-mono --- */
/*
 * Berkeley Mono
 * Description : Typographie \xE0 chasse fixe con\xE7ue pour la programmation et la lecture de donn\xE9es.
 * Pourquoi : Excellente lisibilit\xE9 du code, design \xE9pur\xE9, version variable ultra flexible. Id\xE9ale pour le th\xE8me "Technical".
 * Range : 100-900 (Variable)
 */

@font-face {
  font-family: "Berkeley Mono";
  src: url("STND_FONT_URL:berkeley-mono-variable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}


/* --- Font: bookerly --- */
/* 
 * Bookerly
 * Description : Famille de police Bookerly.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Bookerly Font Family */

/* Bookerly Standard */
@font-face {
    font-family: "Bookerly";
    src: url("STND_FONT_URL:Bookerly-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Bookerly";
    src: url("STND_FONT_URL:Bookerly-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Bookerly";
    src: url("STND_FONT_URL:Bookerly-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Bookerly";
    src: url("STND_FONT_URL:Bookerly-BoldItalic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

/* Bookerly Display */
@font-face {
    font-family: "Bookerly Display";
    src: url("STND_FONT_URL:BookerlyLCD_Rg.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Bookerly Display";
    src: url("STND_FONT_URL:BookerlyLCD_It.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Bookerly Display";
    src: url("STND_FONT_URL:BookerlyLCD_Bd.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Bookerly Display";
    src: url("STND_FONT_URL:BookerlyLCD_BdIt.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

/* --- Font: bright-morning --- */
/*
 * Bright Morning
 * Description : Typographie manuscrite \xE9l\xE9gante et expressive.
 * Pourquoi : Apporte une touche tr\xE8s personnelle, organique et artistique, id\xE9ale pour les accents dans des th\xE8mes artistiques ou naturels.
 * Range : 400 (Regular)
 */

@font-face {
  font-family: "Bright Morning";
  src: url("STND_FONT_URL:bright-morning.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}


/* --- Font: brixton --- */
/*
 * Brixton
 * Description : Famille de polices dessin\xE9es \xE0 la main (Hand) et de polices Pro (Serif, Sans, Condensed) au style chaleureux et authentique.
 * Pourquoi : Id\xE9ale pour des accents organiques, des titres au style artisanal et le th\xE8me "Botanist" ou "Chalky".
 * Range : Multiples familles et poids (100-900, statiques)
 */

/* Brixton Hand */
@font-face {
    font-family: "Brixton Hand";
    src: url("STND_FONT_URL:Brixton Hand.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Hand Extras";
    src: url("STND_FONT_URL:Brixton Hand Extras.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Hand Sans";
    src: url("STND_FONT_URL:Brixton Hand Sans.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Hand Words";
    src: url("STND_FONT_URL:Brixton Hand Words.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

/* Brixton Pro */
@font-face {
    font-family: "Brixton Pro";
    src: url("STND_FONT_URL:Brixton Pro Thin.woff2") format("woff2");
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro";
    src: url("STND_FONT_URL:Brixton Pro Thin Oblique.woff2") format("woff2");
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro";
    src: url("STND_FONT_URL:Brixton Pro Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro";
    src: url("STND_FONT_URL:Brixton Pro Regular Oblique.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro";
    src: url("STND_FONT_URL:Brixton Pro Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro";
    src: url("STND_FONT_URL:Brixton Pro Bold Oblique.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro";
    src: url("STND_FONT_URL:Brixton Pro Heavy.woff2") format("woff2");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro";
    src: url("STND_FONT_URL:Brixton Pro Heavy Oblique.woff2") format("woff2");
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

/* Brixton Pro Condensed */
@font-face {
    font-family: "Brixton Pro Condensed";
    src: url("STND_FONT_URL:Brixton Pro Condensed Thin.woff2") format("woff2");
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro Condensed";
    src: url("STND_FONT_URL:Brixton Pro Condensed Thin Oblique.woff2") format("woff2");
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro Condensed";
    src: url("STND_FONT_URL:Brixton Pro Condensed Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro Condensed";
    src: url("STND_FONT_URL:Brixton Pro Condensed Regular Oblique.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro Condensed";
    src: url("STND_FONT_URL:Brixton Pro Condensed Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro Condensed";
    src: url("STND_FONT_URL:Brixton Pro Condensed Bold Oblique.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro Condensed";
    src: url("STND_FONT_URL:Brixton Pro Condensed Heavy.woff2") format("woff2");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Pro Condensed";
    src: url("STND_FONT_URL:Brixton Pro Condensed Heavy Oblique.woff2") format("woff2");
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

/* Brixton Sans Pro */
@font-face {
    font-family: "Brixton Sans Pro";
    src: url("STND_FONT_URL:Brixton Sans Pro Thin.woff2") format("woff2");
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Sans Pro";
    src: url("STND_FONT_URL:Brixton Sans Pro Thin Oblique.woff2") format("woff2");
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Sans Pro";
    src: url("STND_FONT_URL:Brixton Sans Pro Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Sans Pro";
    src: url("STND_FONT_URL:Brixton Sans Pro Regular Oblique.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Sans Pro";
    src: url("STND_FONT_URL:Brixton Sans Pro Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Sans Pro";
    src: url("STND_FONT_URL:Brixton Sans Pro Bold Oblique.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Sans Pro";
    src: url("STND_FONT_URL:Brixton Sans Pro Heavy.woff2") format("woff2");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Brixton Sans Pro";
    src: url("STND_FONT_URL:Brixton Sans Pro Heavy Oblique.woff2") format("woff2");
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: calsans --- */
/*
 * CalSans
 * Description : Typographie sans-serif g\xE9om\xE9trique, id\xE9ale pour les gros titres modernes.
 * Pourquoi : Tr\xE8s populaire pour les sites vitrines et landing pages, elle offre une forte personnalit\xE9 en version "Display" et une version "UI" variable pour les interfaces.
 * Range : Regular (400) + UI Variable (300-700)
 */

@font-face {
  font-family: "CalSans";
  src: url("STND_FONT_URL:CalSans-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "CalSans UI";
  src: url("STND_FONT_URL:CalSansUI-Variable.woff2") format("woff2");
  font-weight: 300 700;
  font-style: normal;
  font-display: swap;
}


/* --- Font: cargo-arizona --- */
/* 
 * Cargo Arizona
 * Description : Famille de police Cargo Arizona.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Cargo Arizona";
  src: url("STND_FONT_URL:CargoArizonaPlusVariable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Cargo Arizona";
  src: url("STND_FONT_URL:CargoArizonaPlusItalicVariable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}


/* --- Font: cargo-diatype --- */
/*
 * Cargo Diatype
 * Description : Police n\xE9o-grotesque suisse moderne, pr\xE9cise et technique.
 * Pourquoi : Pilier du design system Utopie (th\xE8me "Swiss"), excellente lisibilit\xE9 et aspect tr\xE8s \xE9pur\xE9.
 * Range : 100-900 (Variable)
 */

@font-face {
  font-family: "Cargo Diatype";
  src: url("STND_FONT_URL:Cargo-DiatypePlusVariable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Cargo Diatype";
  src: url("STND_FONT_URL:Cargo-DiatypePlusVariable-Italic.woff2") format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}


/* --- Font: cargo-diatype-widths --- */
/* 
 * Cargo Diatype Widths
 * Description : Famille de police Cargo Diatype Widths.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Cargo Diatype Widths";
  src: url("STND_FONT_URL:CargoDiatypeWidthsVariable.woff2") format("woff2");
  font-weight: 100 900;
  font-stretch: 50% 125%;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Cargo Diatype Widths";
  src: url("STND_FONT_URL:CargoDiatypeItalicWidthsVariable.woff2") format("woff2");
  font-weight: 100 900;
  font-stretch: 50% 125%;
  font-style: italic;
  font-display: swap;
}


/* --- Font: cargo-marist --- */
/* 
 * Cargo Marist
 * Description : Famille de police Cargo Marist.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Cargo Marist";
  src: url("STND_FONT_URL:CargoMaristVariable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}


/* --- Font: cargo-monument-grotesk --- */
/* 
 * Cargo Monument Grotesk
 * Description : Famille de police Cargo Monument Grotesk.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Cargo Monument Grotesk";
  src: url("STND_FONT_URL:CargoMonumentGroteskMono-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}


/* --- Font: cargo-synt --- */
/* 
 * Cargo Synt
 * Description : Famille de police Cargo Synt.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Cargo Synt";
  src: url("STND_FONT_URL:CargoSyntVariableVF.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}


/* --- Font: century-expanded --- */
/* 
 * Century Expanded
 * Description : Famille de police Century Expanded.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Century Expanded Font Family */

@font-face {
  font-family: "Century Expanded";
  src: url("STND_FONT_URL:Century Expanded Regular.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}


/* --- Font: courier-prime --- */
/* 
 * Courier Prime
 * Description : Famille de police Courier Prime.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Courier Prime */

@font-face {
    font-family: "Courier Prime";
    src: url("STND_FONT_URL:CourierPrime.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Courier Prime";
    src: url("STND_FONT_URL:CourierPrime-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Courier Prime";
    src: url("STND_FONT_URL:CourierPrime-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Courier Prime";
    src: url("STND_FONT_URL:CourierPrime-SemiBold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Courier Prime";
    src: url("STND_FONT_URL:CourierPrime-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Courier Prime";
    src: url("STND_FONT_URL:CourierPrime-BoldItalic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

/* Courier Prime Code */

@font-face {
    font-family: "Courier Prime Code";
    src: url("STND_FONT_URL:CourierPrimeCode-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Courier Prime Code";
    src: url("STND_FONT_URL:CourierPrimeCode-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

/* Courier Prime Sans */

@font-face {
    font-family: "Courier Prime Sans";
    src: url("STND_FONT_URL:CourierPrimeSans-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Courier Prime Sans";
    src: url("STND_FONT_URL:CourierPrimeSans-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Courier Prime Sans";
    src: url("STND_FONT_URL:CourierPrimeSans-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Courier Prime Sans";
    src: url("STND_FONT_URL:CourierPrimeSans-BoldItalic.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

/* --- Font: din-condensed --- */
/* 
 * DIN Condensed
 * Description : Technical sans-serif condensed typeface from macOS.
 * Pourquoi : Ideal for technical labels and the Reveal theme.
 * Range : Regular (400), Bold (700)
 */

@font-face {
  font-family: "DIN Condensed";
  src: url("STND_FONT_URL:din-condensed-regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "DIN Condensed";
  src: url("STND_FONT_URL:din-condensed-bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}


/* --- Font: eb-garamond --- */
/* 
 * EB Garamond
 * Description : Famille de police EB Garamond.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "EB Garamond";
    src: url("STND_FONT_URL:eb-garamond-regular-variable.woff2") format("woff2");
    font-weight: 400 800;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "EB Garamond";
    src: url("STND_FONT_URL:eb-garamond-italic-variable.woff2") format("woff2");
    font-weight: 400 800;
    font-style: italic;
    font-display: swap;
}

/* --- Font: fern --- */
/* 
 * Fern
 * Description : Famille de police Fern.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Fern Variable Font */

@font-face {
    font-family: "Fern";
    src: url("STND_FONT_URL:FernVariable-Roman-VF.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Fern";
    src: url("STND_FONT_URL:FernVariable-Italic-VF.woff2") format("woff2");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: forrest --- */
/*
 * Forrest
 * Description : Typographie sans-serif avec un caract\xE8re chaleureux, l\xE9g\xE8rement organique.
 * Pourquoi : Tr\xE8s importante pour l'identit\xE9, elle apporte une touche humaine et naturelle aux designs (th\xE8me "Botanist" ou "Forest").
 * Range : Light (300) \xE0 Heavy (900), statiques.
 */

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-Light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-LightItalic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-RegularItalic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-MediumItalic.woff2") format("woff2");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-BoldItalic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-Extrabold.woff2") format("woff2");
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-ExtraboldItalic.woff2") format("woff2");
  font-weight: 800;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-Heavy.woff2") format("woff2");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Forrest";
  src: url("STND_FONT_URL:Forrest-HeavyItalic.woff2") format("woff2");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}


/* --- Font: fraunces --- */
/*
 * Fraunces
 * Description : Typographie serif "Old Style" inspir\xE9e des caract\xE8res du 20e si\xE8cle, avec un c\xF4t\xE9 rebelle et chaleureux.
 * Pourquoi : Parfaite pour le th\xE8me "Kernel", elle apporte beaucoup de personnalit\xE9 aux titres et citations tout en restant tr\xE8s lisible.
 * Range : 400-900 (Variable) avec axes optiques (SOFT, WONK).
 */

@font-face {
  font-family: "Fraunces";
  src: url("STND_FONT_URL:Fraunces-Variable.woff2") format("woff2");
  font-weight: 400 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Fraunces";
  src: url("STND_FONT_URL:Fraunces-Variable-Italic.woff2") format("woff2");
  font-weight: 400 900;
  font-style: italic;
  font-display: swap;
}


/* --- Font: futura-now --- */
/* 
 * Futura Now
 * Description : Famille de police Futura Now.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Futura Now Variable Font */

@font-face {
    font-family: "Futura Now";
    src: url("STND_FONT_URL:Futura-Now-Roman-Var.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Futura Now";
    src: url("STND_FONT_URL:Futura-Now-Italic-Var.woff2") format("woff2");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Futura Now Display";
    src: url("STND_FONT_URL:Futura-Now-Display-Roman-Var.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Futura Now Display";
    src: url("STND_FONT_URL:Futura-Now-Display-Italic-Var.woff2") format("woff2");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Futura Now Script";
    src: url("STND_FONT_URL:Futura-Now-Script-Var.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

/* --- Font: gnomon --- */
/* 
 * Gnomon
 * Description : Famille de police Gnomon.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Gnomon";
    src: url("STND_FONT_URL:Gnomon-Foreground.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Gnomon";
    src: url("STND_FONT_URL:Gnomon-Simple.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

/* --- Font: gorton-perfected --- */
/* 
 * Gorton Perfected
 * Description : Famille de police Gorton Perfected.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Gorton Perfected Font Family */

@font-face {
  font-family: "Gorton Perfected";
  src: url("STND_FONT_URL:GortonPerfectedVF.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}


/* --- Font: graveur --- */
/* 
 * Graveur
 * Description : Famille de police Graveur.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Graveur Variable Font */

@font-face {
    font-family: "Graveur";
    src: url("STND_FONT_URL:Graveur-VAR.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Graveur";
    src: url("STND_FONT_URL:Graveur-VAR-Italic.woff2") format("woff2");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: hello-headline --- */
/* 
 * Hello Headline
 * Description : Famille de police Hello Headline.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Hello Headline";
  src: url("STND_FONT_URL:Hello_Headline_W00_Regular.woff2") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}


/* --- Font: helvetica-mono --- */
/* 
 * Helvetica Monospaced Pro
 * Description : Famille de police Helvetica Monospaced Pro.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Helvetica Monospaced Pro Font */

@font-face {
    font-family: "Helvetica Monospaced Pro";
    src: url("STND_FONT_URL:HelveticaMonospacedPro-Rg.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Helvetica Monospaced Pro";
    src: url("STND_FONT_URL:HelveticaMonospacedPro-It.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Helvetica Monospaced Pro";
    src: url("STND_FONT_URL:HelveticaMonospacedPro-Bd.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Helvetica Monospaced Pro";
    src: url("STND_FONT_URL:HelveticaMonospacedPro-BdIt.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

/* --- Font: helvetica-now --- */
/* 
 * Helvetica Now
 * Description : Famille de police Helvetica Now.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Helvetica Now";
  src: url("STND_FONT_URL:HelveticaNowVar.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Helvetica Now";
  src: url("STND_FONT_URL:HelveticaNowVar-Italic.woff2") format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}


/* --- Font: herbus --- */
/* 
 * Herbus Apex
 * Description : Famille de police Herbus Apex.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Herbus Font Family */

@font-face {
  font-family: "Herbus Apex";
  src: url("STND_FONT_URL:Herbus Bold Apex.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Herbus";
  src: url("STND_FONT_URL:Herbus Pointy.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Herbus";
  src: url("STND_FONT_URL:Herbus Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}


/* --- Font: heyam --- */
/* 
 * Heyam
 * Description : Famille de police Heyam.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Heyam";
  src: url("STND_FONT_URL:Heyam-2O96W.woff2") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}


/* --- Font: ia-writer --- */
/* 
 * iA Writer Mono
 * Description : Famille de police iA Writer Mono.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* iA Writer Mono Variable */
@font-face {
    font-family: "iA Writer Mono";
    src: url("STND_FONT_URL:iAWriterMonoV.woff2") format("truetype");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "iA Writer Mono";
    src: url("STND_FONT_URL:iAWriterMonoV-Italic.woff2") format("truetype");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

/* iA Writer Duo Variable */
@font-face {
    font-family: "iA Writer Duo";
    src: url("STND_FONT_URL:iAWriterDuoV.woff2") format("truetype");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "iA Writer Duo";
    src: url("STND_FONT_URL:iAWriterDuoV-Italic.woff2") format("truetype");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

/* iA Writer Quattro Variable */
@font-face {
    font-family: "iA Writer Quattro";
    src: url("STND_FONT_URL:iAWriterQuattroV.woff2") format("truetype");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "iA Writer Quattro";
    src: url("STND_FONT_URL:iAWriterQuattroV-Italic.woff2") format("truetype");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}


/* --- Font: ibm-plex --- */
/* 
 * IBM Plex Sans
 * Description : Famille de police IBM Plex Sans.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* IBM Plex Sans Variable */
@font-face {
  font-family: "IBM Plex Sans";
  src: url("STND_FONT_URL:IBM Plex Sans Var-Roman.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Sans";
  src: url("STND_FONT_URL:IBM Plex Sans Var-Italic.woff2") format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}

/* IBM Plex Serif Variable */
@font-face {
  font-family: "IBM Plex Serif";
  src: url("STND_FONT_URL:IBM Plex Serif Var-Roman.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Serif";
  src: url("STND_FONT_URL:IBM Plex Serif Var-Italic.woff2") format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}

/* IBM Plex Mono (Static) */
@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-Thin.woff2") format("woff2");
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-ThinItalic.woff2") format("woff2");
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-ExtraLight.woff2") format("woff2");
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-ExtraLightItalic.woff2") format("woff2");
  font-weight: 200;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-Light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-LightItalic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-Italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-Text.woff2") format("woff2");
  font-weight: 450;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-TextItalic.woff2") format("woff2");
  font-weight: 450;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-MediumItalic.woff2") format("woff2");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-SemiBold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-SemiBoldItalic.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "IBM Plex Mono";
  src: url("STND_FONT_URL:IBMPlexMono-BoldItalic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}


/* --- Font: inferi-roman --- */
/* 
 * Inferi Roman
 * Description : Famille de police Inferi Roman.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Inferi Roman Font Family */

@font-face {
  font-family: "Inferi Roman";
  src: url("STND_FONT_URL:inferi-italic-variable-wght.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inferi Roman";
  src: url("STND_FONT_URL:inferi-roman-variable-wght.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}


/* --- Font: instrument-sans --- */
/* 
 * Instrument Sans
 * Description : Famille de police Instrument Sans.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Instrument Sans";
    src: url("STND_FONT_URL:InstrumentSans-wdth-wght.woff2") format("woff2");
    font-weight: 300 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Instrument Sans";
    src: url("STND_FONT_URL:InstrumentSans-Italic-wdth-wght.woff2") format("woff2");
    font-weight: 300 700;
    font-style: italic;
    font-display: swap;
}

/* --- Font: instrument-serif --- */
/* 
 * Instrument Serif
 * Description : Famille de police Instrument Serif.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Instrument Serif";
    src: url("STND_FONT_URL:InstrumentSerif-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Instrument Serif";
    src: url("STND_FONT_URL:InstrumentSerif-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

/* --- Font: inter --- */
/*
 * Inter
 * Description : Typographie sans-serif de classe mondiale, neutre et ultra-lisible.
 * Pourquoi : Le standard absolu pour les interfaces utilisateur (UI). Extr\xEAmement polyvalente.
 * Range : 100-900 (Variable)
 */

@font-face {
  font-family: "Inter";
  src: url("STND_FONT_URL:InterVariable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("STND_FONT_URL:InterVariable-Italic.woff2") format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}


/* --- Font: jetbrains-mono --- */
/* 
 * Jetbrains Mono
 * Description : Famille de police Jetbrains Mono.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Jetbrains Mono Font Family */

@font-face {
  font-family: "Jetbrains Mono";
  src: url("STND_FONT_URL:JetBrainsMono-Italic-wght-.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jetbrains Mono";
  src: url("STND_FONT_URL:JetBrainsMono-wght-.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}


/* --- Font: jimmy --- */
/* 
 * Jimmy Sans Pro
 * Description : Famille de police Jimmy Sans Pro.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Jimmy Sans Pro";
  src: url("STND_FONT_URL:TCJimmySansPro-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jimmy Sans Pro";
  src: url("STND_FONT_URL:TCJimmySansPro-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jimmy Serif Pro";
  src: url("STND_FONT_URL:TCJimmySerifPro-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jimmy Serif Pro";
  src: url("STND_FONT_URL:TCJimmySerifPro-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* --- Font: joly --- */
/* 
 * Joly
 * Description : Famille de police Joly.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Joly";
    src: url("STND_FONT_URL:Joly-Variable--TITL-.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Joly";
    src: url("STND_FONT_URL:Joly-Italic-variable--TITL-.woff2") format("woff2");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: kalice --- */
/* 
 * Kalice
 * Description : Famille de police Kalice.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Kalice";
    src: url("STND_FONT_URL:Kalice-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Kalice";
    src: url("STND_FONT_URL:Kalice-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Kalice";
    src: url("STND_FONT_URL:Kalice-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Kalice";
    src: url("STND_FONT_URL:Kalice-ExtraBold.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Kalice";
    src: url("STND_FONT_URL:Kalice-Black.woff2") format("woff2");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Kalice";
    src: url("STND_FONT_URL:Kalice-Italic.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

/* --- Font: lexend --- */
/* 
 * Lexend
 * Description : Famille de police Lexend.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Lexend";
  src: url("STND_FONT_URL:lexend-variable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}


/* --- Font: literata --- */
/* 
 * Literata
 * Description : Famille de police Literata.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Literata";
    src: url("STND_FONT_URL:literata-regular-variable.woff2") format("woff2");
    font-weight: 200 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Literata";
    src: url("STND_FONT_URL:literata-italic-variable.woff2") format("woff2");
    font-weight: 200 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: maine --- */
/*
 * Maine
 * Description : Typographie serif \xE9l\xE9gante pour l'\xE9ditorial.
 * Pourquoi : Id\xE9ale pour les longs articles et le th\xE8me lecture.
 * Range : Multiples poids statiques
 */

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-Bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-BoldItalic.otf") format("opentype");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-Book.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-BookItalic.otf") format("opentype");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-ExtraBold.otf") format("opentype");
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-ExtraBoldItalic.otf") format("opentype");
  font-weight: 800;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-Light.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-LightItalic.otf") format("opentype");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-Medium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-MediumItalic.otf") format("opentype");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Maine";
  src: url("STND_FONT_URL:Maine-RegularItalic.otf") format("opentype");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}



/* --- Font: maple --- */
/* 
 * Maple Mono
 * Description : Famille de police Maple Mono.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Maple Mono";
    src: url("STND_FONT_URL:MapleMono-wght--VF.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Maple Mono";
    src: url("STND_FONT_URL:MapleMono-Italic-wght--VF.woff2") format("woff2");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: marauder --- */
/* 
 * Marauder
 * Description : Famille de police Marauder.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Marauder Font Family */

@font-face {
    font-family: "Marauder";
    src: url("STND_FONT_URL:Marauder-wght-.woff2") format("woff2-variations");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Marauder";
    src: url("STND_FONT_URL:Marauder-Italic-wght-.woff2") format("woff2-variations");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: miller --- */
/* 
 * Miller
 * Description : Famille de s\xE9rifs classiques de Matthew Carter (Font Bureau), d\xE9clin\xE9e en quatre optiques : Text, Banner, Display, Headline.
 * Pourquoi : Typographie d'\xE9dition raffin\xE9e, id\xE9ale pour les longs textes, les titres hi\xE9rarchis\xE9s et les contextes \xE9ditoriaux exigeants.
 * Optiques : Text (corps, 400\u2013700) \xB7 Banner (affiches, 300\u2013900) \xB7 Display (titres, 300\u2013700) \xB7 Headline (sous-titres, 300\u2013700)
 */

/* \u2500\u2500 Miller Text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

@font-face {
  font-family: "Miller Text";
  src: url("STND_FONT_URL:miller-text-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Text";
  src: url("STND_FONT_URL:miller-text-italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Text";
  src: url("STND_FONT_URL:miller-text-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Text";
  src: url("STND_FONT_URL:miller-text-bold-italic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

/* \u2500\u2500 Miller Banner \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-light-italic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-semibold-italic.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-bold-italic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-black.woff2") format("woff2");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Banner";
  src: url("STND_FONT_URL:miller-banner-black-italic.woff2") format("woff2");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}

/* \u2500\u2500 Miller Display \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

@font-face {
  font-family: "Miller Display";
  src: url("STND_FONT_URL:miller-display-light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Display";
  src: url("STND_FONT_URL:miller-display-light-italic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Display";
  src: url("STND_FONT_URL:miller-display-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Display";
  src: url("STND_FONT_URL:miller-display-italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Display";
  src: url("STND_FONT_URL:miller-display-semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Display";
  src: url("STND_FONT_URL:miller-display-semibold-italic.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Display";
  src: url("STND_FONT_URL:miller-display-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* \u2500\u2500 Miller Headline \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

@font-face {
  font-family: "Miller Headline";
  src: url("STND_FONT_URL:miller-headline-light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("STND_FONT_URL:miller-headline-light-italic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("STND_FONT_URL:miller-headline-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("STND_FONT_URL:miller-headline-italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("STND_FONT_URL:miller-headline-semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("STND_FONT_URL:miller-headline-semibold-italic.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("STND_FONT_URL:miller-headline-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Miller Headline";
  src: url("STND_FONT_URL:miller-headline-bold-italic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}


/* --- Font: monaspace-xenon --- */
/* 
 * Monaspace Xenon
 * Description : Famille de police Monaspace Xenon.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Monaspace Xenon Font Family */

@font-face {
  font-family: "Monaspace Xenon";
  src: url("STND_FONT_URL:MonaspaceXenonVarVF-wght-wdth-slnt-.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}


/* --- Font: monolisa --- */
/*
 * MonoLisa
 * Description : Typographie \xE0 chasse fixe con\xE7ue par des d\xE9veloppeurs pour des d\xE9veloppeurs.
 * Pourquoi : Excellente lisibilit\xE9 du code, design amical, optimis\xE9e pour r\xE9duire la fatigue visuelle.
 * Range : 100-1000 (Variable)
 */

@font-face {
  font-family: "MonoLisa";
  src: url("STND_FONT_URL:MonoLisa-Regular-Variable.woff2") format("woff2");
  font-weight: 100 1000;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "MonoLisa";
  src: url("STND_FONT_URL:MonoLisa-RegularItalic-Variable.woff2") format("woff2");
  font-weight: 100 1000;
  font-style: italic;
  font-display: swap;
}


/* --- Font: monosten --- */
/* 
 * Monosten
 * Description : Famille de police Monosten.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Monosten Pro Variable Font */

@font-face {
  font-family: "Monosten";
  src: url("STND_FONT_URL:MonostenProVar.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}


/* --- Font: montserrat --- */
/* 
 * Montserrat
 * Description : Famille de police Montserrat.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Montserrat Font Family */

@font-face {
  font-family: "Montserrat";
  src: url("STND_FONT_URL:Montserrat-Italic-VariableFont_wght.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Montserrat";
  src: url("STND_FONT_URL:Montserrat-VariableFont_wght.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}


/* --- Font: national-park --- */
/* 
 * National Park
 * Description : Famille de police National Park.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* National Park Variable Font */

@font-face {
    font-family: "National Park";
    src: url("STND_FONT_URL:NationalPark-VariableVF.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

/* --- Font: new-burns --- */
/* 
 * New Burns
 * Description : Famille de police New Burns.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* New Burns Font Family */

@font-face {
  font-family: "New Burns";
  src: url("STND_FONT_URL:NewBurns Regular.woff2") format("woff2");
  font-weight: 400; /* Auto-generated, please adjust */
  font-style: normal;
  font-display: swap;
}


/* --- Font: newsreader --- */
/* 
 * Newsreader
 * Description : Famille de police Newsreader.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Newsreader";
    src: url("STND_FONT_URL:Newsreader-opsz-wght.woff2") format("woff2");
    font-weight: 200 800;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Newsreader";
    src: url("STND_FONT_URL:Newsreader-Italic-opsz-wght.woff2") format("woff2");
    font-weight: 200 800;
    font-style: italic;
    font-display: swap;
}

/* --- Font: oktah --- */
/* 
 * Oktah
 * Description : Famille de police Oktah.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Oktah";
  src: url("STND_FONT_URL:Oktah Neue Variable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Oktah Round";
  src: url("STND_FONT_URL:Oktah Round Variable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}


/* --- Font: opendyslexic --- */
/* 
 * OpenDyslexic
 * Description : Famille de police OpenDyslexic.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "OpenDyslexic";
  src: url("STND_FONT_URL:OpenDyslexic-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "OpenDyslexic";
  src: url("STND_FONT_URL:OpenDyslexic-Italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "OpenDyslexic";
  src: url("STND_FONT_URL:OpenDyslexic-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "OpenDyslexic";
  src: url("STND_FONT_URL:OpenDyslexic-BoldItalic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}


/* --- Font: quicksand --- */
/* 
 * Quicksand
 * Description : Famille de police Quicksand.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
  font-family: "Quicksand";
  src: url("STND_FONT_URL:quicksand-variable.woff2") format("woff2");
  font-weight: 300 700;
  font-style: normal;
  font-display: swap;
}


/* --- Font: reckless-neue --- */
/*
 * Reckless Neue
 * Description : Famille de police display serif Reckless Neue (7 graisses, romain + italique).
 * Pourquoi : Wordmark / display type \u2014 utilis\xE9e par utopie.studio.
 */

@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-Thin.woff2") format("woff2");
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-ThinItalic.woff2") format("woff2");
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-Light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-LightItalic.woff2") format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-RegularItalic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-MediumItalic.woff2") format("woff2");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-SemiBold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-SemiBoldItalic.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-BoldItalic.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-Heavy.woff2") format("woff2");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Reckless Neue";
  src: url("STND_FONT_URL:RecklessNeue-HeavyItalic.woff2") format("woff2");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}


/* --- Font: sohne --- */
/* 
 * Sohne
 * Description : Famille de police Sohne.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* S\xF6hne Collections */

/* S\xF6hne Standard */
@font-face {
    font-family: "Sohne";
    src: url("STND_FONT_URL:S\xF6hne-Buch.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Sohne";
    src: url("STND_FONT_URL:S\xF6hne-BuchKursiv.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Sohne";
    src: url("STND_FONT_URL:S\xF6hne-Halbfett.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Sohne";
    src: url("STND_FONT_URL:S\xF6hne-HalbfettKursiv.woff2") format("woff2");
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Sohne";
    src: url("STND_FONT_URL:S\xF6hne-Kr\xE4ftig.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Sohne";
    src: url("STND_FONT_URL:S\xF6hne-Kr\xE4ftigKursiv.woff2") format("woff2");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

/* S\xF6hne Breit (Wide) */
@font-face {
    font-family: "Sohne Breit";
    src: url("STND_FONT_URL:S\xF6hneBreit-Buch.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Sohne Breit";
    src: url("STND_FONT_URL:S\xF6hneBreit-BuchKursiv.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Sohne Breit";
    src: url("STND_FONT_URL:S\xF6hneBreit-Halbfett.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Sohne Breit";
    src: url("STND_FONT_URL:S\xF6hneBreit-Fett.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

/* S\xF6hne Mono */
@font-face {
    font-family: "Sohne Mono";
    src: url("STND_FONT_URL:S\xF6hneMono-Buch.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Sohne Mono";
    src: url("STND_FONT_URL:S\xF6hneMono-BuchKursiv.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Sohne Mono";
    src: url("STND_FONT_URL:S\xF6hneMono-Halbfett.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Sohne Mono";
    src: url("STND_FONT_URL:S\xF6hneMono-Fett.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

/* --- Font: source-serif-4 --- */
/* 
 * Source Serif 4
 * Description : Famille de police Source Serif 4.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Source Serif 4";
    src: url("STND_FONT_URL:SourceSerif4Variable-Roman.ttf.woff2") format("woff2");
    font-weight: 200 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Source Serif 4";
    src: url("STND_FONT_URL:SourceSerif4Variable-Italic.ttf.woff2") format("woff2");
    font-weight: 200 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: souvenir-mono --- */
/* 
 * Souvenir Mono
 * Description : Famille de police Souvenir Mono.
 * Pourquoi : Fait partie du design system Utopie.
 */

@font-face {
    font-family: "Souvenir Mono";
    src: url("STND_FONT_URL:SouvenirMonospcdITCCom-Reg.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Souvenir Mono";
    src: url("STND_FONT_URL:SouvenirMonospcdITCCom-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

/* --- Font: tiempos-headline --- */
/* 
 * Tiempos Headline
 * Description : Famille de police Tiempos Headline.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Tiempos Headline Font Family */

@font-face {
    font-family: "Tiempos Headline";
    src: url("STND_FONT_URL:TiemposHeadline-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Tiempos Headline";
    src: url("STND_FONT_URL:TiemposHeadline-Black.woff2") format("woff2");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

/* --- Font: tmagnite --- */
/*
 * Tmagnite
 * Description : Typographie exp\xE9rimentale aux formes atypiques et g\xE9om\xE9triques.
 * Pourquoi : Parfaite pour des exp\xE9rimentations graphiques et des accents visuels tr\xE8s marqu\xE9s.
 * Range : Regular, Italic (Statique)
 */

@font-face {
  font-family: "Tmagnite";
  src: url("STND_FONT_URL:tmagnite-regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Tmagnite";
  src: url("STND_FONT_URL:tmagnite-italic.otf") format("opentype");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}


/* --- Font: univers-next --- */
/* 
 * Univers Next
 * Description : Famille de police Univers Next.
 * Pourquoi : Fait partie du design system Utopie.
 */

/* Univers Next Font Family */

@font-face {
    font-family: "Univers Next";
    src: url("STND_FONT_URL:UniversNextVariable.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Univers Next";
    src: url("STND_FONT_URL:UniversNextVariable-Italic.woff2") format("woff2");
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
}

/* --- Font: wonder --- */
/*
 * Wonder
 * Description : Typographie avec beaucoup d'allure.
 * Pourquoi : Parfaite pour des designs originaux.
 * Range : Multiples poids statiques
 */

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-Bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-BoldItalic.otf") format("opentype");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-Extrabold.otf") format("opentype");
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-ExtraboldItalic.otf") format("opentype");
  font-weight: 800;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-Extralight.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-ExtralightItalic.otf") format("opentype");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-Light.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-LightItalic.otf") format("opentype");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-Medium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-MediumItalic.otf") format("opentype");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Wonder";
  src: url("STND_FONT_URL:Wonder-RegularItalic.otf") format("opentype");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}



`});var ss=_((bc,os)=>{"use strict";var ns=require("obsidian"),{KNOWN_TOKENS:Fi,FONT_TOKENS:as}=le(),Di=en();function Ai(o){let e=window.Prism;window.Prism=o;try{o.languages.css||Xo(),o.languages.typescript||Zo(),o.languages.json||Yo(),o.languages.yaml||Qo(),o.languages.bash||$o()}catch(t){console.error("[Standard] Failed to load bundled Prism languages:",t)}finally{e&&(window.Prism=e)}}var la=class{constructor(e,t){this.app=e,this.plugin=t,this.appliedClasses=new Set,this.appliedSnippetViewClasses=new Set,this.hasAppliedStartupSnapshot=!1,this.stndFrontmatterElement=null,this.stndThemeElement=null,this.lastAppliedCustomCss="",this.lastAppliedThemeSnippetCss="",this.lastAppliedThemePath="",this.lastAppliedThemeMtime=0,this.frontmatterUpdateTimeout=null,this.snapshotSaveTimeout=null,this.workspaceReadyTimeout=null,this.startupRetryCount=0,this.themeCache={}}getCurrentThemeInfo(){let e=this.app.workspace.getActiveFile(),t=e?this.app.metadataCache.getFileCache(e)?.frontmatter??null:null,n=t&&t.theme!=null?String(t.theme).trim():"";!n&&this.plugin.settings.defaultTheme&&(n=this.plugin.settings.defaultTheme);let a=n?this.app.metadataCache.getFirstLinkpathDest(n,""):null;return{activeFile:e,themeNote:a}}shouldRefreshForChangedFile(e){if(!e)return!0;let{activeFile:t,themeNote:n}=this.getCurrentThemeInfo();return!!(t&&e.path===t.path||n&&e.path===n.path)}async load(){await this.loadThemeCacheFromFile(),this.ensureThemeElement(),this.ensureFontsElement(),this.plugin.registerMarkdownPostProcessor(async e=>{let t=e.querySelectorAll('pre > code[class*="language-"]:not(.is-highlighted)');if(!t.length)return;let n;try{n=await ns.loadPrism()}catch{return}!n||typeof n.highlight!="function"||(Ai(n),t.forEach(a=>{if(a.querySelector(".token")){a.classList.add("is-highlighted");return}let s=a.className.match(/language-(\S+)/);if(!s)return;let r=n.languages[s[1]];if(r)try{a.innerHTML=n.highlight(a.textContent,r,s[1]),a.classList.add("is-highlighted")}catch{}}))}),this.plugin.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.updateBodyClasses(),this.updateModeClasses()})),this.plugin.registerEvent(this.app.metadataCache.on("changed",e=>{this.shouldRefreshForChangedFile(e)&&(clearTimeout(this.frontmatterUpdateTimeout),this.frontmatterUpdateTimeout=setTimeout(()=>{this.updateBodyClasses()},50))})),this.plugin.registerEvent(this.app.metadataCache.on("resolve",e=>{this.shouldRefreshForChangedFile(e)&&(this.hasAppliedStartupSnapshot||this.applyStartupSnapshotSynchronously(),clearTimeout(this.frontmatterUpdateTimeout),this.frontmatterUpdateTimeout=setTimeout(()=>{this.updateBodyClasses()},50))})),this.plugin.registerEvent(this.app.workspace.on("layout-change",()=>{this.updateModeClasses()})),this.updateModeClasses(),this.app?.workspace?.onLayoutReady?this.app.workspace.onLayoutReady(()=>{this.onWorkspaceReady()}):this.app.workspace.on("layout-ready",()=>{this.onWorkspaceReady()})}async unload(){this.frontmatterUpdateTimeout&&clearTimeout(this.frontmatterUpdateTimeout),this.workspaceReadyTimeout&&clearTimeout(this.workspaceReadyTimeout),this.snapshotSaveTimeout&&clearTimeout(this.snapshotSaveTimeout),document.body.removeAttribute("data-stnd-theme"),this.stndThemeElement&&this.stndThemeElement.remove(),this.cleanup(),this.clearModeClasses()}onWorkspaceReady(){this.workspaceReadyTimeout=setTimeout(()=>{this.updateBodyClasses(),this.applyStartupSnapshotSynchronously()},50)}ensureThemeElement(){let e=document.getElementById("stnd-theme");e||(e=document.createElement("style"),e.id="stnd-theme",document.head.appendChild(e)),this.stndThemeElement=e}ensureFontsElement(){let e=document.getElementById("stnd-fonts");e||(e=document.createElement("style"),e.id="stnd-fonts",document.head.appendChild(e));try{let t=ts(),n=`${this.plugin.manifest.dir}/fonts`,a=this.app.vault.adapter,s=t.replace(/STND_FONT_URL:([\w.-]+)/g,(r,i)=>a.getResourcePath(`${n}/${i}`));e.textContent!==s&&(e.textContent=s)}catch(t){console.warn("[Standard] Failed to load generated fonts:",t)}}applyThemeCss(e,t){if(!this.stndThemeElement)return;let n=e&&Di[e]||"";n&&(n=n.replace(/\[data-theme="/g,'body.stnd-adapter[data-stnd-theme="'));let a=[n,t].filter(Boolean).join(`

`);this.stndThemeElement.textContent!==a&&(this.stndThemeElement.textContent=a)}async loadThemeCacheFromFile(){let e=`${this.plugin.manifest.dir}/cache-themes.json`;try{if(await this.app.vault.adapter.exists(e)){let t=await this.app.vault.adapter.read(e);this.themeCache=JSON.parse(t)||{}}}catch(t){console.warn("[Standard] Failed to load theme cache:",t)}}async saveThemeCacheToFile(){let e=`${this.plugin.manifest.dir}/cache-themes.json`;try{await this.app.vault.adapter.write(e,JSON.stringify(this.themeCache,null,2))}catch(t){console.warn("[Standard] Failed to save theme cache:",t)}}createStyleElements(){this.ensureThemeElement();let e=document.getElementById("stnd-frontmatter");e||(e=document.createElement("style"),e.id="stnd-frontmatter",this.stndThemeElement&&this.stndThemeElement.nextSibling?document.head.insertBefore(e,this.stndThemeElement.nextSibling):document.head.appendChild(e)),this.stndFrontmatterElement=e}cleanup(){this.clearAllClasses(),this.clearSnippetViewClasses(),this.clearFrontmatterProperties(),this.clearThemeSnippet();let e=document.getElementById("stnd-fonts");e&&e.remove()}saveStartupSnapshot(e,t){clearTimeout(this.snapshotSaveTimeout),this.snapshotSaveTimeout=setTimeout(async()=>{let n=t&&t.theme!=null?String(t.theme).trim():"";this.plugin.settings.startupSnapshot={cssClasses:Array.from(e).map(a=>a.replace("cssclass-","")),theme:n,customCss:this.lastAppliedCustomCss},await this.plugin.saveSettings()},1e3)}getStructuralClasses(){return["stnd-callouts","stnd-better-highlights","stnd-code-tweaks","stnd-subdued-links","stnd-clean-frontmatter","stnd-text-trim","stnd-base-tweaks","stnd-clean-transclusions"]}async updateBodyClasses(){let e=this.app.workspace.getActiveFile(),t=new Set,n=null;if(this.plugin.settings.enableDesignSystem&&(t.add("stnd-adapter"),this.getStructuralClasses().forEach(s=>t.add(s))),e&&(n=this.app.metadataCache.getFileCache(e)?.frontmatter??null,n)){let s=n.cssclasses||n.cssClasses;s&&(Array.isArray(s)?s:[s]).forEach(f=>{typeof f=="string"&&f.trim().length>0&&t.add("cssclass-"+f.trim().replace(/\s+/g,"-"))});let r=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey,i=n[r];if(i===!0||i==="true"||i==="public"||i==="unlisted"||i==="private"){t.add("stnd-note-published");let c=String(n.visibility||i||"").toLowerCase().trim();c==="public"?t.add("stnd-note-public"):c==="unlisted"?t.add("stnd-note-unlisted"):c==="private"&&t.add("stnd-note-private")}}let a=document.body.classList;this.appliedClasses.forEach(s=>{t.has(s)||a.remove(s)}),t.forEach(s=>{if(!this.appliedClasses.has(s))try{a.add(s)}catch(r){if(r instanceof DOMException)new ns.Notice(`Stnd: Invalid CSS class found: "${s}". Check your frontmatter for classes with spaces or special characters.`);else throw r}}),this.appliedClasses=t,this.plugin.settings.enableDesignSystem?e&&(n?(this.applyFrontmatter(n),await this.applyTheme(n)):await this.applyTheme(null)):(this.clearFrontmatterProperties(),this.clearThemeSnippet(),document.body.removeAttribute("data-stnd-theme"),this.applyThemeCss(null,"")),this.saveStartupSnapshot(t,n)}async applyTheme(e){let t=e&&e.theme!=null?String(e.theme).trim():"";if(!t&&this.plugin.settings.defaultTheme&&(t=this.plugin.settings.defaultTheme),t?document.body.setAttribute("data-stnd-theme",t):document.body.removeAttribute("data-stnd-theme"),!t){this.clearThemeSnippet(),this.applyThemeCss(null,"");return}let n=this.themeCache[t];if(n){let s=n.replace(/body\.stnd-color\b/g,`body.stnd-adapter[data-stnd-theme="${t}"]`);this.lastAppliedThemeSnippetCss=s,this.applyThemeCss(t,s)}else this.lastAppliedThemeSnippetCss&&this.clearThemeSnippet(),this.applyThemeCss(t,"");let a=this.app.metadataCache.getFirstLinkpathDest(t,"");if(!a){cachedCss||this.clearThemeSnippet();return}if(!(this.lastAppliedThemePath===a.path&&this.lastAppliedThemeMtime===a.stat.mtime))try{let s=await this.app.vault.read(a),r=/```css\b.*?\n([\s\S]*?)```/gi,i=[...s.matchAll(r)].map(l=>l[1]).join(`
`);if(i=i.replace(/body\.stnd-color\b/g,`body.stnd-adapter[data-stnd-theme="${t}"]`),i!==this.lastAppliedThemeSnippetCss){this.lastAppliedThemeSnippetCss=i,this.lastAppliedThemePath=a.path,this.lastAppliedThemeMtime=a.stat.mtime,this.applyThemeCss(t,i),this.themeCache[t]=i;let l=Object.keys(this.themeCache);l.length>5&&delete this.themeCache[l[0]],await this.saveThemeCacheToFile()}else this.lastAppliedThemePath=a.path,this.lastAppliedThemeMtime=a.stat.mtime}catch(s){console.error(`Standard: Error loading theme note "${a.path}":`,s),cachedCss||this.clearThemeSnippet()}}clearThemeSnippet(){this.lastAppliedThemeSnippetCss="",this.lastAppliedThemePath="",this.lastAppliedThemeMtime=0}clearAllClasses(){this.appliedClasses.forEach(e=>{document.body.classList.remove(e)}),this.appliedClasses.clear()}clearSnippetViewClasses(){if(!this.appliedSnippetViewClasses||this.appliedSnippetViewClasses.size===0)return;let e=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!e){this.appliedSnippetViewClasses.clear();return}let t=e.querySelectorAll(".markdown-source-view, .markdown-preview-view");this.appliedSnippetViewClasses.forEach(n=>{t.forEach(a=>a.classList.remove(n))}),this.appliedSnippetViewClasses.clear()}addClassToViews(e){let t=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!t)return;t.querySelectorAll(".markdown-source-view, .markdown-preview-view").forEach(a=>a.classList.add(e)),this.appliedSnippetViewClasses.add(e)}applyStartupSnapshotSynchronously(){if(this.hasAppliedStartupSnapshot)return;let e=this.plugin.settings?.startupSnapshot;if(!e){this.hasAppliedStartupSnapshot=!0;return}if(Array.isArray(e.cssClasses)&&e.cssClasses.forEach(t=>{if(typeof t=="string"&&t.trim().length>0){let n="cssclass-"+t.trim();document.body.classList.add(n),this.appliedClasses.add(n)}}),this.plugin.settings.enableDesignSystem&&(document.body.classList.add("stnd-adapter"),this.appliedClasses.add("stnd-adapter"),this.getStructuralClasses().forEach(t=>{document.body.classList.add(t),this.appliedClasses.add(t)})),this.plugin.settings.enableDesignSystem){let t=e.theme||this.plugin.settings.defaultTheme||"";t&&document.body.setAttribute("data-stnd-theme",t),this.createStyleElements(),this.ensureFontsElement();let n=t&&this.themeCache[t]||"";n&&(n=n.replace(/body\.stnd-color\b/g,`body.stnd-adapter[data-stnd-theme="${t}"]`)),this.applyThemeCss(t,n),this.lastAppliedThemeSnippetCss=n,e.customCss&&this.stndFrontmatterElement&&(this.stndFrontmatterElement.textContent=e.customCss,this.lastAppliedCustomCss=e.customCss)}else this.createStyleElements();this.hasAppliedStartupSnapshot=!0}clearModeViewClasses(){let e=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!e)return;let t=e.querySelectorAll(".markdown-source-view, .markdown-preview-view");["stnd-reading","stnd-editing","stnd-source","stnd-canvas","stnd-empty","stnd-base","stnd-webviewer","stnd-note"].forEach(a=>{t.forEach(s=>s.classList.remove(a)),this.appliedSnippetViewClasses&&this.appliedSnippetViewClasses.delete(a)})}applyFrontmatter(e){let t={},n=new Set;for(let[a,s]of Object.entries(e))if(Fi.has(a)){let r="--"+a;t[r]=s,as.has(a)&&String(s).split(",").map(l=>l.trim().replace(/['"]/g,"")).forEach(l=>n.add(l))}if(Object.keys(t).length>0){if(!this.stndFrontmatterElement||!document.getElementById("stnd-frontmatter")){this.stndFrontmatterElement=document.createElement("style"),this.stndFrontmatterElement.id="stnd-frontmatter";let l=document.getElementById("stnd-theme");l&&l.nextSibling?document.head.insertBefore(this.stndFrontmatterElement,l.nextSibling):document.head.appendChild(this.stndFrontmatterElement)}let a=this.stndFrontmatterElement,s=Array.from(n).map(l=>`@import url('https://fonts.googleapis.com/css2?family=${l.replace(/\s+/g,"+")}&display=swap');`).join(`
`),r=Object.entries(t).map(([l,c])=>{let f=l.slice(2),p=as.has(f)&&typeof c=="string"&&c.includes(" ")&&!c.startsWith("'")&&!c.startsWith('"')?"'"+c+"'":c;return`  ${l}: ${p} !important;`}).join(`
`),i=[s,`html body {
${r}
}`].filter(Boolean).join(`

`);if(i===this.lastAppliedCustomCss)return;a.textContent=i,this.lastAppliedCustomCss=i}else this.clearFrontmatterProperties()}clearFrontmatterProperties(){this.stndFrontmatterElement&&(this.stndFrontmatterElement.textContent="",this.lastAppliedCustomCss="")}updateModeClasses(){let e=document.body,t=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!t)return;let n=t.getAttribute("data-type"),a=t.getAttribute("data-mode"),s=t.querySelector(".markdown-source-view"),r=s?s.classList.contains("is-live-preview"):!1,i=`${n}|${a}|${r}`;if(t===this._lastModeLeafEl&&i===this._lastModeSignature)return;this._lastModeLeafEl=t,this._lastModeSignature=i,this.clearModeClasses(),this.clearModeViewClasses();let l=null;switch(n){case"markdown":e.classList.add("stnd-note"),this.addClassToViews("stnd-note"),a==="preview"?(l="reading",e.classList.add("stnd-reading"),this.addClassToViews("stnd-reading")):a==="source"&&(l="editing",e.classList.add("stnd-editing"),this.addClassToViews("stnd-editing"),s&&!r&&(e.classList.add("stnd-source"),this.addClassToViews("stnd-source")));break;case"canvas":l="canvas",e.classList.add("stnd-canvas"),this.addClassToViews("stnd-canvas");break;case"empty":l="empty",e.classList.add("stnd-empty"),this.addClassToViews("stnd-empty");break;case"webviewer":l="webviewer",e.classList.add("stnd-webviewer"),this.addClassToViews("stnd-webviewer");break;case"bases":l="base",e.classList.add("stnd-base"),this.addClassToViews("stnd-base");break}}clearModeClasses(){["stnd-reading","stnd-editing","stnd-source","stnd-canvas","stnd-empty","stnd-base","stnd-webviewer","stnd-note"].forEach(t=>{document.body.classList.remove(t),this.appliedClasses.delete(t)})}};os.exports={DesignSystemFeature:la}});var da=_((wc,rs)=>{"use strict";var Mi=require("obsidian"),ca=class extends Mi.Modal{constructor(e,t,n,a,s){super(e),this.message=t,this.confirmText=n,this.onConfirm=a,this.onCancel=s||(()=>{})}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),this.message.split(`
`).forEach((s,r)=>{let i=e.createEl("p",{text:s,cls:r===0?"stnd-modal-message":"stnd-modal-detail"})});let t=e.createEl("div",{cls:"stnd-modal-btns"});t.createEl("button",{text:"Cancel",cls:"stnd-modal-btn-cancel"}).addEventListener("click",()=>{this.close(),this.onCancel()}),t.createEl("button",{text:this.confirmText,cls:"mod-cta"}).addEventListener("click",()=>{this.close(),this.onConfirm()})}onClose(){this.contentEl.empty()}};rs.exports={StndConfirmModal:ca}});var ls=_((kc,is)=>{"use strict";var gt=require("obsidian"),fa=class extends gt.Modal{constructor(e,t){super(e),this.plugin=t}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),e.addClass("stnd-ask-modal"),e.createEl("h2",{text:"\u2728 Ask Hyphe",cls:"stnd-modal-title"}),e.createEl("p",{text:"Ask Hyphe a question about your digital garden. Hyphe runs in the cloud on standard.garden and searches only across your published notes.",cls:"stnd-modal-detail"});let t=e.createEl("div",{cls:"stnd-ask-cloud-notice"});t.setText("\u{1F310} Online AI \xB7 Only searches notes published to standard.garden. Local drafts remain strictly private."),t.style.fontSize="11px",t.style.color="var(--text-muted)",t.style.marginBottom="14px",t.style.display="inline-flex",t.style.alignItems="center",t.style.gap="6px",t.style.padding="4px 8px",t.style.borderRadius="4px",t.style.background="var(--background-secondary)",t.style.border="1px solid var(--background-modifier-border)";let n=e.createEl("textarea",{cls:"stnd-modal-textarea",placeholder:"e.g., What did I learn about permaculture recently?"});n.style.width="100%",n.style.height="100px",n.style.marginBottom="15px",n.style.padding="10px",n.style.borderRadius="4px",n.style.border="1px solid var(--background-modifier-border)",n.style.background="var(--background-primary)",n.style.color="var(--text-normal)";let a=e.createEl("div",{cls:"stnd-modal-result-container"});a.style.display="none",a.style.marginTop="15px",a.style.padding="15px",a.style.borderRadius="4px",a.style.background="var(--background-secondary)",a.style.borderLeft="4px solid var(--interactive-accent)",a.style.maxHeight="300px",a.style.overflowY="auto";let s=a.createEl("div",{cls:"stnd-modal-result-text"});s.style.lineHeight="1.5",s.style.color="var(--text-normal)";let r=e.createEl("div",{cls:"stnd-modal-btns"});r.createEl("button",{text:"Close",cls:"stnd-modal-btn-cancel"}).addEventListener("click",()=>{this.close()});let l=r.createEl("button",{text:"Ask Hyphe",cls:"mod-cta"}),c=e.createEl("div",{cls:"stnd-ask-horizon"});c.setAttribute("aria-hidden","true"),c.innerHTML=`
      <svg viewBox="0 0 400 44" preserveAspectRatio="xMidYMax meet">
        <path d="M18,44 Q20,26 14,12" />
        <path d="M34,44 Q33,32 38,24" />
        <path d="M92,44 Q95,22 90,6" />
        <path d="M108,44 Q106,34 112,28" />
        <path d="M170,44 Q173,30 168,18" />
        <path d="M232,44 Q229,24 236,10" />
        <path d="M247,44 Q248,36 244,30" />
        <path d="M310,44 Q312,28 306,16" />
        <path d="M368,44 Q365,34 370,22" />
        <path d="M383,44 Q384,38 380,32" />
      </svg>
    `;let f=async(d,p="garden")=>{let h=this.plugin.settings.apiKey;if(!h){new gt.Notice("Please connect your standard.garden account in Settings first."),a.style.display="block",s.empty(),s.style.fontStyle="normal",s.setText("Please connect your standard.garden account in Settings first to query Hyphe.");return}a.querySelectorAll(".stnd-modal-mycelium-prompt").forEach(m=>m.remove()),l.disabled=!0,n.disabled=!0,l.text=p==="mycelium"?"Searching Mycelium...":"Hyphe is searching...",a.style.display="block",s.empty(),s.setText(p==="mycelium"?"Hyphe is exploring the public Mycelium and weaving an answer...":"Hyphe is searching your published notes and generating an answer..."),s.style.fontStyle="italic";try{let m=await gt.requestUrl({url:`${this.plugin.settings.apiUrl}/ai/ask`,method:"POST",headers:{"Content-Type":"application/json","x-api-key":h},body:JSON.stringify({question:d,scope:p}),throw:!1});if(m.status<200||m.status>=300){let g=m.text;try{let y=JSON.parse(m.text||"{}");y.error&&(g=y.error)}catch{}throw new Error(g||`Server error (${m.status})`)}let u=m.json;if(s.style.fontStyle="normal",u.answer){if(s.empty(),await gt.MarkdownRenderer.renderMarkdown(u.answer,s,"",this),s.querySelectorAll("a").forEach(g=>{g.addEventListener("click",y=>{let b=g.getAttribute("href");if(b&&b.startsWith("/")){y.preventDefault();let w=b.replace(/^\/+|\/+$/g,""),S=this.plugin.garden?.bySlug?.get(w)||this.plugin.garden?.byTitleSlug?.get(w)||this.plugin.garden?.byBasenameSlug?.get(w);S?(this.app.workspace.getLeaf(!1).openFile(S),this.close()):this.plugin.settings.apiUsername&&window.open(`https://standard.garden${b}`,"_blank")}})}),u.mycelium_hints?.count>0&&u.scope!=="mycelium"){let g=u.mycelium_hints.count,y=u.mycelium_hints.authors?.length?` (${u.mycelium_hints.authors.join(", ")})`:"",b=a.createEl("div",{cls:"stnd-modal-mycelium-prompt"});b.style.marginTop="14px",b.style.paddingTop="10px",b.style.borderTop="1px dashed var(--background-modifier-border)",b.style.display="flex",b.style.alignItems="center",b.style.justifyContent="space-between",b.style.gap="8px";let w=b.createEl("span",{text:`\u{1F344} Le Myc\xE9lium public a ${g} note${g>1?"s":""} connexe${g>1?"s":""}${y}`});w.style.fontSize="11px",w.style.color="var(--text-muted)";let S=b.createEl("button",{cls:"mod-cta",text:"Explorer le Myc\xE9lium \u2192"});S.style.fontSize="11px",S.style.padding="3px 8px",S.style.cursor="pointer",S.addEventListener("click",()=>{f(d,"mycelium")})}}else s.setText("No response was returned by Hyphe.")}catch(m){s.style.fontStyle="normal",s.setText(`Error: ${m.message}`),console.error("Error during Hyphe query:",m)}finally{l.disabled=!1,n.disabled=!1,l.text="Ask Hyphe"}};l.addEventListener("click",()=>{let d=n.value.trim();if(!d){new gt.Notice("Please enter a question.");return}f(d,"garden")})}onClose(){this.contentEl.empty()}};is.exports={StndAskModal:fa}});var ua=_((vc,cs)=>{"use strict";var Oi=require("obsidian"),pa=class extends Oi.Modal{constructor(e,t,n){super(e),this.noteTitle=t,this.liveUrl=n}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),e.style.cssText="max-width: 480px; padding: 20px;";let t=e.createEl("h3",{text:"Share Note"});t.style.cssText="margin-bottom: 16px; font-size: var(--font-ui-medium); font-weight: var(--font-semibold);";let n=(l,c)=>{let f=e.createEl("div");f.style.cssText="margin-bottom: 16px;";let d=f.createEl("div");d.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;",d.createEl("span",{text:l,cls:"stnd-panel-meta"});let p=f.createEl("div");p.style.cssText="display: flex; gap: 8px; align-items: center;";let h=p.createEl("input",{cls:"stnd-panel-input",type:"text",value:c});h.readOnly=!0,h.style.cssText="flex: 1; width: 100%; text-align: left; font-size: var(--font-ui-smaller); font-family: var(--font-monospace);";let m=p.createEl("button",{text:"Copy",cls:"stnd-panel-btn stnd-panel-btn-secondary"});m.style.cssText="flex-shrink: 0; font-size: var(--font-ui-smaller);",m.addEventListener("click",()=>{navigator.clipboard.writeText(c),m.setText("Copied!"),setTimeout(()=>m.setText("Copy"),1500)})};n("Direct URL",this.liveUrl);let a=`[${this.noteTitle}](${this.liveUrl})`;n("Markdown Link",a);let s=`<iframe src="${this.liveUrl}" width="100%" height="600" frameborder="0"></iframe>`;n("Embed Iframe",s);let r=e.createEl("div");r.style.cssText="display: flex; justify-content: flex-end; margin-top: 12px;",r.createEl("button",{text:"Close",cls:"stnd-panel-btn"}).addEventListener("click",()=>this.close())}onClose(){this.contentEl.empty()}};cs.exports={StndShareModal:pa}});function H(o){if(o&&typeof o=="object")switch(o[Z]){case ce:case xe:return!0}return!1}function P(o){if(o&&typeof o=="object")switch(o[Z]){case tn:case ce:case ee:case xe:return!0}return!1}var tn,nn,ce,ha,ee,xe,Z,te,ne,ae,R,A,oe,an,q=E(()=>{tn=Symbol.for("yaml.alias"),nn=Symbol.for("yaml.document"),ce=Symbol.for("yaml.map"),ha=Symbol.for("yaml.pair"),ee=Symbol.for("yaml.scalar"),xe=Symbol.for("yaml.seq"),Z=Symbol.for("yaml.node.type"),te=o=>!!o&&typeof o=="object"&&o[Z]===tn,ne=o=>!!o&&typeof o=="object"&&o[Z]===nn,ae=o=>!!o&&typeof o=="object"&&o[Z]===ce,R=o=>!!o&&typeof o=="object"&&o[Z]===ha,A=o=>!!o&&typeof o=="object"&&o[Z]===ee,oe=o=>!!o&&typeof o=="object"&&o[Z]===xe;an=o=>(A(o)||H(o))&&!!o.anchor});function se(o,e){let t=fs(e);ne(o)?Je(null,o.contents,t,Object.freeze([o]))===ye&&(o.contents=null):Je(null,o,t,Object.freeze([]))}function Je(o,e,t,n){let a=ps(o,e,t,n);if(P(a)||R(a))return us(o,n,a),Je(o,a,t,n);if(typeof a!="symbol"){if(H(e)){n=Object.freeze(n.concat(e));for(let s=0;s<e.items.length;++s){let r=Je(s,e.items[s],t,n);if(typeof r=="number")s=r-1;else{if(r===Y)return Y;r===ye&&(e.items.splice(s,1),s-=1)}}}else if(R(e)){n=Object.freeze(n.concat(e));let s=Je("key",e.key,t,n);if(s===Y)return Y;s===ye&&(e.key=null);let r=Je("value",e.value,t,n);if(r===Y)return Y;r===ye&&(e.value=null)}}return a}async function Ze(o,e){let t=fs(e);ne(o)?await Xe(null,o.contents,t,Object.freeze([o]))===ye&&(o.contents=null):await Xe(null,o,t,Object.freeze([]))}async function Xe(o,e,t,n){let a=await ps(o,e,t,n);if(P(a)||R(a))return us(o,n,a),Xe(o,a,t,n);if(typeof a!="symbol"){if(H(e)){n=Object.freeze(n.concat(e));for(let s=0;s<e.items.length;++s){let r=await Xe(s,e.items[s],t,n);if(typeof r=="number")s=r-1;else{if(r===Y)return Y;r===ye&&(e.items.splice(s,1),s-=1)}}}else if(R(e)){n=Object.freeze(n.concat(e));let s=await Xe("key",e.key,t,n);if(s===Y)return Y;s===ye&&(e.key=null);let r=await Xe("value",e.value,t,n);if(r===Y)return Y;r===ye&&(e.value=null)}}return a}function fs(o){return typeof o=="object"&&(o.Collection||o.Node||o.Value)?Object.assign({Alias:o.Node,Map:o.Node,Scalar:o.Node,Seq:o.Node},o.Value&&{Map:o.Value,Scalar:o.Value,Seq:o.Value},o.Collection&&{Map:o.Collection,Seq:o.Collection},o):o}function ps(o,e,t,n){if(typeof t=="function")return t(o,e,n);if(ae(e))return t.Map?.(o,e,n);if(oe(e))return t.Seq?.(o,e,n);if(R(e))return t.Pair?.(o,e,n);if(A(e))return t.Scalar?.(o,e,n);if(te(e))return t.Alias?.(o,e,n)}function us(o,e,t){let n=e[e.length-1];if(H(n))n.items[o]=t;else if(R(n))o==="key"?n.key=t:n.value=t;else if(ne(n))n.contents=t;else{let a=te(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${a} parent`)}}var Y,ds,ye,yt=E(()=>{q();Y=Symbol("break visit"),ds=Symbol("skip children"),ye=Symbol("remove node");se.BREAK=Y;se.SKIP=ds;se.REMOVE=ye;Ze.BREAK=Y;Ze.SKIP=ds;Ze.REMOVE=ye});var Ii,Ri,be,ma=E(()=>{q();yt();Ii={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Ri=o=>o.replace(/[!,[\]{}]/g,e=>Ii[e]),be=class o{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},o.defaultYaml,e),this.tags=Object.assign({},o.defaultTags,t)}clone(){let e=new o(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){let e=new o(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:o.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},o.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:o.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},o.defaultTags),this.atNextDocument=!1);let n=e.trim().split(/[ \t]+/),a=n.shift();switch(a){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;let[s,r]=n;return this.tags[s]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;let[s]=n;if(s==="1.1"||s==="1.2")return this.yaml.version=s,!0;{let r=/^\d+\.\d+$/.test(s);return t(6,`Unsupported YAML version ${s}`,r),!1}}default:return t(0,`Unknown directive ${a}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){let r=e.slice(2,-1);return r==="!"||r==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),r)}let[,n,a]=e.match(/^(.*!)([^!]*)$/s);a||t(`The ${e} tag has no suffix`);let s=this.tags[n];if(s)try{return s+decodeURIComponent(a)}catch(r){return t(String(r)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+Ri(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){let t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags),a;if(e&&n.length>0&&P(e.contents)){let s={};se(e.contents,(r,i)=>{P(i)&&i.tag&&(s[i.tag]=!0)}),a=Object.keys(s)}else a=[];for(let[s,r]of n)s==="!!"&&r==="tag:yaml.org,2002:"||(!e||a.some(i=>i.startsWith(r)))&&t.push(`%TAG ${s} ${r}`);return t.join(`
`)}};be.defaultYaml={explicit:!1,version:"1.2"};be.defaultTags={"!!":"tag:yaml.org,2002:"}});function on(o){if(/[\x00-\x19\s,[\]{}]/.test(o)){let t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(o)}`;throw new Error(t)}return!0}function ga(o){let e=new Set;return se(o,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function ya(o,e){for(let t=1;;++t){let n=`${o}${t}`;if(!e.has(n))return n}}function hs(o,e){let t=[],n=new Map,a=null;return{onAnchor:s=>{t.push(s),a??(a=ga(o));let r=ya(e,a);return a.add(r),r},setAnchors:()=>{for(let s of t){let r=n.get(s);if(typeof r=="object"&&r.anchor&&(A(r.node)||H(r.node)))r.node.anchor=r.anchor;else{let i=new Error("Failed to resolve repeated object (this should not happen)");throw i.source=s,i}}},sourceObjects:n}}var sn=E(()=>{q();yt()});function Le(o,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let a=0,s=n.length;a<s;++a){let r=n[a],i=Le(o,n,String(a),r);i===void 0?delete n[a]:i!==r&&(n[a]=i)}else if(n instanceof Map)for(let a of Array.from(n.keys())){let s=n.get(a),r=Le(o,n,a,s);r===void 0?n.delete(a):r!==s&&n.set(a,r)}else if(n instanceof Set)for(let a of Array.from(n)){let s=Le(o,n,a,a);s===void 0?n.delete(a):s!==a&&(n.delete(a),n.add(s))}else for(let[a,s]of Object.entries(n)){let r=Le(o,n,a,s);r===void 0?delete n[a]:r!==s&&(n[a]=r)}return o.call(e,t,n)}var ba=E(()=>{});function G(o,e,t){if(Array.isArray(o))return o.map((n,a)=>G(n,String(a),t));if(o&&typeof o.toJSON=="function"){if(!t||!an(o))return o.toJSON(e,t);let n={aliasCount:0,count:1,res:void 0};t.anchors.set(o,n),t.onCreate=s=>{n.res=s,delete t.onCreate};let a=o.toJSON(e,t);return t.onCreate&&t.onCreate(a),a}return typeof o=="bigint"&&!t?.keep?Number(o):o}var Fe=E(()=>{q()});var De,rn=E(()=>{ba();q();Fe();De=class{constructor(e){Object.defineProperty(this,Z,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:a,reviver:s}={}){if(!ne(e))throw new TypeError("A document argument is required");let r={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},i=G(this,"",r);if(typeof a=="function")for(let{count:l,res:c}of r.anchors.values())a(c,l);return typeof s=="function"?Le(s,{"":i},"",i):i}}});function ln(o,e,t){if(te(e)){let n=e.resolve(o),a=t&&n&&t.get(n);return a?a.count*a.aliasCount:0}else if(H(e)){let n=0;for(let a of e.items){let s=ln(o,a,t);s>n&&(n=s)}return n}else if(R(e)){let n=ln(o,e.key,t),a=ln(o,e.value,t);return Math.max(n,a)}return 1}var de,bt=E(()=>{sn();yt();q();rn();Fe();de=class extends De{constructor(e){super(tn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if(t?.maxAliasCount===0)throw new ReferenceError("Alias resolution is disabled");let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],se(e,{Node:(s,r)=>{(te(r)||an(r))&&n.push(r)}}),t&&(t.aliasResolveCache=n));let a;for(let s of n){if(s===this)break;s.anchor===this.source&&(a=s)}return a}toJSON(e,t){if(!t)return{source:this.source};let{anchors:n,doc:a,maxAliasCount:s}=t,r=this.resolve(a,t);if(!r){let l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let i=n.get(r);if(i||(G(r,null,t),i=n.get(r)),i?.res===void 0){let l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(s>=0&&(i.count+=1,i.aliasCount===0&&(i.aliasCount=ln(a,r,n)),i.count*i.aliasCount>s)){let l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return i.res}toString(e,t,n){let a=`*${this.source}`;if(e){if(on(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(s)}if(e.implicitKey)return`${a} `}return a}}});var cn,C,K=E(()=>{q();rn();Fe();cn=o=>!o||typeof o!="function"&&typeof o!="object",C=class extends De{constructor(e){super(ee),this.value=e}toJSON(e,t){return t?.keep?this.value:G(this.value,e,t)}toString(){return String(this.value)}};C.BLOCK_FOLDED="BLOCK_FOLDED";C.BLOCK_LITERAL="BLOCK_LITERAL";C.PLAIN="PLAIN";C.QUOTE_DOUBLE="QUOTE_DOUBLE";C.QUOTE_SINGLE="QUOTE_SINGLE"});function Ui(o,e,t){if(e){let n=t.filter(s=>s.tag===e),a=n.find(s=>!s.format)??n[0];if(!a)throw new Error(`Tag ${e} not found`);return a}return t.find(n=>n.identify?.(o)&&!n.format)}function Te(o,e,t){if(ne(o)&&(o=o.contents),P(o))return o;if(R(o)){let d=t.schema[ce].createNode?.(t.schema,null,t);return d.items.push(o),d}(o instanceof String||o instanceof Number||o instanceof Boolean||typeof BigInt<"u"&&o instanceof BigInt)&&(o=o.valueOf());let{aliasDuplicateObjects:n,onAnchor:a,onTagObj:s,schema:r,sourceObjects:i}=t,l;if(n&&o&&typeof o=="object"){if(l=i.get(o),l)return l.anchor??(l.anchor=a(o)),new de(l.anchor);l={anchor:null,node:null},i.set(o,l)}e?.startsWith("!!")&&(e=Pi+e.slice(2));let c=Ui(o,e,r.tags);if(!c){if(o&&typeof o.toJSON=="function"&&(o=o.toJSON()),!o||typeof o!="object"){let d=new C(o);return l&&(l.node=d),d}c=o instanceof Map?r[ce]:Symbol.iterator in Object(o)?r[xe]:r[ce]}s&&(s(c),delete t.onTagObj);let f=c?.createNode?c.createNode(t.schema,o,t):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(t.schema,o,t):new C(o);return e?f.tag=e:c.default||(f.tag=c.tag),l&&(l.node=f),f}var Pi,wt=E(()=>{bt();q();K();Pi="tag:yaml.org,2002:"});function kt(o,e,t){let n=t;for(let a=e.length-1;a>=0;--a){let s=e[a];if(typeof s=="number"&&Number.isInteger(s)&&s>=0){let r=[];r[s]=n,n=r}else n=new Map([[s,n]])}return Te(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:o,sourceObjects:new Map})}var Qe,Ye,dn=E(()=>{wt();q();rn();Qe=o=>o==null||typeof o=="object"&&!!o[Symbol.iterator]().next().done,Ye=class extends De{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){let t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>P(n)||R(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Qe(e))this.add(t);else{let[n,...a]=e,s=this.get(n,!0);if(H(s))s.addIn(a,t);else if(s===void 0&&this.schema)this.set(n,kt(this.schema,a,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${a}`)}}deleteIn(e){let[t,...n]=e;if(n.length===0)return this.delete(t);let a=this.get(t,!0);if(H(a))return a.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){let[n,...a]=e,s=this.get(n,!0);return a.length===0?!t&&A(s)?s.value:s:H(s)?s.getIn(a,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!R(t))return!1;let n=t.value;return n==null||e&&A(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){let[t,...n]=e;if(n.length===0)return this.has(t);let a=this.get(t,!0);return H(a)?a.hasIn(n):!1}setIn(e,t){let[n,...a]=e;if(a.length===0)this.set(n,t);else{let s=this.get(n,!0);if(H(s))s.setIn(a,t);else if(s===void 0&&this.schema)this.set(n,kt(this.schema,a,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${a}`)}}}});function re(o,e){return/^\n+$/.test(o)?o.substring(1):e?o.replace(/^(?! *$)/gm,e):o}var ms,we,vt=E(()=>{ms=o=>o.replace(/^(?!$)(?: $)?/gm,"#");we=(o,e,t)=>o.endsWith(`
`)?re(t,e):t.includes(`
`)?`
`+re(t,e):(o.endsWith(" ")?"":" ")+t});function xt(o,e,t="flow",{indentAtStart:n,lineWidth:a=80,minContentWidth:s=20,onFold:r,onOverflow:i}={}){if(!a||a<0)return o;a<s&&(s=0);let l=Math.max(1+s,1+a-e.length);if(o.length<=l)return o;let c=[],f={},d=a-e.length;typeof n=="number"&&(n>a-Math.max(2,s)?c.push(0):d=a-n);let p,h,m=!1,u=-1,g=-1,y=-1;t===fn&&(u=gs(o,u,e.length),u!==-1&&(d=u+l));for(let w;w=o[u+=1];){if(t===St&&w==="\\"){switch(g=u,o[u+1]){case"x":u+=3;break;case"u":u+=5;break;case"U":u+=9;break;default:u+=1}y=u}if(w===`
`)t===fn&&(u=gs(o,u,e.length)),d=u+e.length+l,p=void 0;else{if(w===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){let S=o[u+1];S&&S!==" "&&S!==`
`&&S!=="	"&&(p=u)}if(u>=d)if(p)c.push(p),d=p+l,p=void 0;else if(t===St){for(;h===" "||h==="	";)h=w,w=o[u+=1],m=!0;let S=u>y+1?u-2:g-1;if(f[S])return o;c.push(S),f[S]=!0,d=S+l,p=void 0}else m=!0}h=w}if(m&&i&&i(),c.length===0)return o;r&&r();let b=o.slice(0,c[0]);for(let w=0;w<c.length;++w){let S=c[w],v=c[w+1]||o.length;S===0?b=`
${e}${o.slice(0,v)}`:(t===St&&f[S]&&(b+=`${o[S]}\\`),b+=`
${e}${o.slice(S+1,v)}`)}return b}function gs(o,e,t){let n=e,a=e+1,s=o[a];for(;s===" "||s==="	";)if(e<a+t)s=o[++e];else{do s=o[++e];while(s&&s!==`
`);n=e,a=e+1,s=o[a]}return n}var wa,fn,St,ys=E(()=>{wa="flow",fn="block",St="quoted"});function Bi(o,e,t){if(!e||e<0)return!1;let n=e-t,a=o.length;if(a<=n)return!1;for(let s=0,r=0;s<a;++s)if(o[s]===`
`){if(s-r>n)return!0;if(r=s+1,a-r<=n)return!1}return!0}function Tt(o,e){let t=JSON.stringify(o);if(e.options.doubleQuotedAsJSON)return t;let{implicitKey:n}=e,a=e.options.doubleQuotedMinMultiLineLength,s=e.indent||(hn(o)?"  ":""),r="",i=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(r+=t.slice(i,l)+"\\ ",l+=1,i=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{r+=t.slice(i,l);let f=t.substr(l+2,4);switch(f){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:f.substr(0,2)==="00"?r+="\\x"+f.substr(2):r+=t.substr(l,6)}l+=5,i=l+1}break;case"n":if(n||t[l+2]==='"'||t.length<a)l+=1;else{for(r+=t.slice(i,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)r+=`
`,l+=2;r+=s,t[l+2]===" "&&(r+="\\"),l+=1,i=l+1}break;default:l+=1}return r=i?r+t.slice(i):t,n?r:xt(r,s,St,un(e,!1))}function ka(o,e){if(e.options.singleQuote===!1||e.implicitKey&&o.includes(`
`)||/[ \t]\n|\n[ \t]/.test(o))return Tt(o,e);let t=e.indent||(hn(o)?"  ":""),n="'"+o.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:xt(n,t,wa,un(e,!1))}function $e(o,e){let{singleQuote:t}=e.options,n;if(t===!1)n=Tt;else{let a=o.includes('"'),s=o.includes("'");a&&!s?n=ka:s&&!a?n=Tt:n=t?ka:Tt}return n(o,e)}function pn({comment:o,type:e,value:t},n,a,s){let{blockQuote:r,commentString:i,lineWidth:l}=n.options;if(!r||/\n[\t ]+$/.test(t))return $e(t,n);let c=n.indent||(n.forceBlockIndent||hn(t)?"  ":""),f=r==="literal"?!0:r==="folded"||e===C.BLOCK_FOLDED?!1:e===C.BLOCK_LITERAL?!0:!Bi(t,l,c.length);if(!t)return f?`|
`:`>
`;let d,p;for(p=t.length;p>0;--p){let v=t[p-1];if(v!==`
`&&v!=="	"&&v!==" ")break}let h=t.substring(p),m=h.indexOf(`
`);m===-1?d="-":t===h||m!==h.length-1?(d="+",s&&s()):d="",h&&(t=t.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(va,`$&${c}`));let u=!1,g,y=-1;for(g=0;g<t.length;++g){let v=t[g];if(v===" ")u=!0;else if(v===`
`)y=g;else break}let b=t.substring(0,y<g?y+1:g);b&&(t=t.substring(b.length),b=b.replace(/\n+/g,`$&${c}`));let S=(u?c?"2":"1":"")+d;if(o&&(S+=" "+i(o.replace(/ ?[\r\n]+/g," ")),a&&a()),!f){let v=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`),x=!1,N=un(n,!0);r!=="folded"&&e!==C.BLOCK_FOLDED&&(N.onOverflow=()=>{x=!0});let k=xt(`${b}${v}${h}`,c,fn,N);if(!x)return`>${S}
${c}${k}`}return t=t.replace(/\n+/g,`$&${c}`),`|${S}
${c}${b}${t}${h}`}function qi(o,e,t,n){let{type:a,value:s}=o,{actualString:r,implicitKey:i,indent:l,indentStep:c,inFlow:f}=e;if(i&&s.includes(`
`)||f&&/[[\]{},]/.test(s))return $e(s,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s))return i||f||!s.includes(`
`)?$e(s,e):pn(o,e,t,n);if(!i&&!f&&a!==C.PLAIN&&s.includes(`
`))return pn(o,e,t,n);if(hn(s)){if(l==="")return e.forceBlockIndent=!0,pn(o,e,t,n);if(i&&l===c)return $e(s,e)}let d=s.replace(/\n+/g,`$&
${l}`);if(r){let p=u=>u.default&&u.tag!=="tag:yaml.org,2002:str"&&u.test?.test(d),{compat:h,tags:m}=e.doc.schema;if(m.some(p)||h?.some(p))return $e(s,e)}return i?d:xt(d,l,wa,un(e,!1))}function Ne(o,e,t,n){let{implicitKey:a,inFlow:s}=e,r=typeof o.value=="string"?o:Object.assign({},o,{value:String(o.value)}),{type:i}=o;i!==C.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(i=C.QUOTE_DOUBLE);let l=f=>{switch(f){case C.BLOCK_FOLDED:case C.BLOCK_LITERAL:return a||s?$e(r.value,e):pn(r,e,t,n);case C.QUOTE_DOUBLE:return Tt(r.value,e);case C.QUOTE_SINGLE:return ka(r.value,e);case C.PLAIN:return qi(r,e,t,n);default:return null}},c=l(i);if(c===null){let{defaultKeyType:f,defaultStringType:d}=e.options,p=a&&f||d;if(c=l(p),c===null)throw new Error(`Unsupported default string type ${p}`)}return c}var un,hn,va,Nt=E(()=>{K();ys();un=(o,e)=>({indentAtStart:e?o.indent.length:o.indentAtStart,lineWidth:o.options.lineWidth,minContentWidth:o.options.minContentWidth}),hn=o=>/^(%|---|\.\.\.)/m.test(o);try{va=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{va=/\n+(?!\n|$)/g}});function mn(o,e){let t=Object.assign({blockQuote:!0,commentString:ms,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},o.schema.toStringOptions,e),n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:o,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function Hi(o,e){if(e.tag){let a=o.filter(s=>s.tag===e.tag);if(a.length>0)return a.find(s=>s.format===e.format)??a[0]}let t,n;if(A(e)){n=e.value;let a=o.filter(s=>s.identify?.(n));if(a.length>1){let s=a.filter(r=>r.test);s.length>0&&(a=s)}t=a.find(s=>s.format===e.format)??a.find(s=>!s.format)}else n=e,t=o.find(a=>a.nodeClass&&n instanceof a.nodeClass);if(!t){let a=n?.constructor?.name??(n===null?"null":typeof n);throw new Error(`Tag not resolved for ${a} value`)}return t}function _i(o,e,{anchors:t,doc:n}){if(!n.directives)return"";let a=[],s=(A(o)||H(o))&&o.anchor;s&&on(s)&&(t.add(s),a.push(`&${s}`));let r=o.tag??(e.default?null:e.tag);return r&&a.push(n.directives.tagString(r)),a.join(" ")}function Ee(o,e,t,n){if(R(o))return o.toString(e,t,n);if(te(o)){if(e.doc.directives)return o.toString(e);if(e.resolvedAliases?.has(o))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(o):e.resolvedAliases=new Set([o]),o=o.resolve(e.doc)}let a,s=P(o)?o:e.doc.createNode(o,{onTagObj:l=>a=l});a??(a=Hi(e.doc.schema.tags,s));let r=_i(s,a,e);r.length>0&&(e.indentAtStart=(e.indentAtStart??0)+r.length+1);let i=typeof a.stringify=="function"?a.stringify(s,e,t,n):A(s)?Ne(s,e,t,n):s.toString(e,t,n);return r?A(s)||i[0]==="{"||i[0]==="["?`${r} ${i}`:`${r}
${e.indent}${i}`:i}var Et=E(()=>{sn();q();vt();Nt()});function bs({key:o,value:e},t,n,a){let{allNullValues:s,doc:r,indent:i,indentStep:l,options:{commentString:c,indentSeq:f,simpleKeys:d}}=t,p=P(o)&&o.comment||null;if(d){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(H(o)||!P(o)&&typeof o=="object"){let N="With simple keys, collection cannot be used as a key value";throw new Error(N)}}let h=!d&&(!o||p&&e==null&&!t.inFlow||H(o)||(A(o)?o.type===C.BLOCK_FOLDED||o.type===C.BLOCK_LITERAL:typeof o=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!h&&(d||!s),indent:i+l});let m=!1,u=!1,g=Ee(o,t,()=>m=!0,()=>u=!0);if(!h&&!t.inFlow&&g.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(t.inFlow){if(s||e==null)return m&&n&&n(),g===""?"?":h?`? ${g}`:g}else if(s&&!d||e==null&&h)return g=`? ${g}`,p&&!m?g+=we(g,t.indent,c(p)):u&&a&&a(),g;m&&(p=null),h?(p&&(g+=we(g,t.indent,c(p))),g=`? ${g}
${i}:`):(g=`${g}:`,p&&(g+=we(g,t.indent,c(p))));let y,b,w;P(e)?(y=!!e.spaceBefore,b=e.commentBefore,w=e.comment):(y=!1,b=null,w=null,e&&typeof e=="object"&&(e=r.createNode(e))),t.implicitKey=!1,!h&&!p&&A(e)&&(t.indentAtStart=g.length+1),u=!1,!f&&l.length>=2&&!t.inFlow&&!h&&oe(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let S=!1,v=Ee(e,t,()=>S=!0,()=>u=!0),x=" ";if(p||y||b){if(x=y?`
`:"",b){let N=c(b);x+=`
${re(N,t.indent)}`}v===""&&!t.inFlow?x===`
`&&w&&(x=`

`):x+=`
${t.indent}`}else if(!h&&H(e)){let N=v[0],k=v.indexOf(`
`),T=k!==-1,D=t.inFlow??e.flow??e.items.length===0;if(T||!D){let O=!1;if(T&&(N==="&"||N==="!")){let F=v.indexOf(" ");N==="&"&&F!==-1&&F<k&&v[F+1]==="!"&&(F=v.indexOf(" ",F+1)),(F===-1||k<F)&&(O=!0)}O||(x=`
${t.indent}`)}}else(v===""||v[0]===`
`)&&(x="");return g+=x+v,t.inFlow?S&&n&&n():w&&!S?g+=we(g,t.indent,c(w)):u&&a&&a(),g}var ws=E(()=>{q();K();Et();vt()});function gn(o,e){(o==="debug"||o==="warn")&&console.warn(e)}var Sa=E(()=>{});function Ta(o,e,t){let n=vs(o,t);if(oe(n))for(let a of n.items)xa(o,e,a);else if(Array.isArray(n))for(let a of n)xa(o,e,a);else xa(o,e,n)}function xa(o,e,t){let n=vs(o,t);if(!ae(n))throw new Error("Merge sources must be maps or map aliases");let a=n.toJSON(null,o,Map);for(let[s,r]of a)e instanceof Map?e.has(s)||e.set(s,r):e instanceof Set?e.add(s):Object.prototype.hasOwnProperty.call(e,s)||Object.defineProperty(e,s,{value:r,writable:!0,enumerable:!0,configurable:!0});return e}function vs(o,e){return o&&te(e)?e.resolve(o.doc,o):e}var yn,fe,ks,bn=E(()=>{q();K();yn="<<",fe={identify:o=>o===yn||typeof o=="symbol"&&o.description===yn,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new C(Symbol(yn)),{addToJSMap:Ta}),stringify:()=>yn},ks=(o,e)=>(fe.identify(e)||A(e)&&(!e.type||e.type===C.PLAIN)&&fe.identify(e.value))&&o?.doc.schema.tags.some(t=>t.tag===fe.tag&&t.default)});function wn(o,e,{key:t,value:n}){if(P(t)&&t.addToJSMap)t.addToJSMap(o,e,n);else if(ks(o,t))Ta(o,e,n);else{let a=G(t,"",o);if(e instanceof Map)e.set(a,G(n,a,o));else if(e instanceof Set)e.add(a);else{let s=ji(t,a,o),r=G(n,s,o);s in e?Object.defineProperty(e,s,{value:r,writable:!0,enumerable:!0,configurable:!0}):e[s]=r}}return e}function ji(o,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(P(o)&&t?.doc){let n=mn(t.doc,{});n.anchors=new Set;for(let s of t.anchors.keys())n.anchors.add(s.anchor);n.inFlow=!0,n.inStringifyKey=!0;let a=o.toString(n);if(!t.mapKeyWarned){let s=JSON.stringify(a);s.length>40&&(s=s.substring(0,36)+'..."'),gn(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${s}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return a}return JSON.stringify(e)}var Na=E(()=>{Sa();bn();Et();q();Fe()});function et(o,e,t){let n=Te(o,void 0,t),a=Te(e,void 0,t);return new j(n,a)}var j,Ae=E(()=>{wt();ws();Na();q();j=class o{constructor(e,t=null){Object.defineProperty(this,Z,{value:ha}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return P(t)&&(t=t.clone(e)),P(n)&&(n=n.clone(e)),new o(t,n)}toJSON(e,t){let n=t?.mapAsMap?new Map:{};return wn(t,n,this)}toString(e,t,n){return e?.doc?bs(this,e,t,n):JSON.stringify(this)}}});function vn(o,e,t){return(e.inFlow??o.flow?Ki:Vi)(o,e,t)}function Vi({comment:o,items:e},t,{blockItemPrefix:n,flowChars:a,itemIndent:s,onChompKeep:r,onComment:i}){let{indent:l,options:{commentString:c}}=t,f=Object.assign({},t,{indent:s,type:null}),d=!1,p=[];for(let m=0;m<e.length;++m){let u=e[m],g=null;if(P(u))!d&&u.spaceBefore&&p.push(""),kn(t,p,u.commentBefore,d),u.comment&&(g=u.comment);else if(R(u)){let b=P(u.key)?u.key:null;b&&(!d&&b.spaceBefore&&p.push(""),kn(t,p,b.commentBefore,d))}d=!1;let y=Ee(u,f,()=>g=null,()=>d=!0);g&&(y+=we(y,s,c(g))),d&&g&&(d=!1),p.push(n+y)}let h;if(p.length===0)h=a.start+a.end;else{h=p[0];for(let m=1;m<p.length;++m){let u=p[m];h+=u?`
${l}${u}`:`
`}}return o?(h+=`
`+re(c(o),l),i&&i()):d&&r&&r(),h}function Ki({items:o},e,{flowChars:t,itemIndent:n}){let{indent:a,indentStep:s,flowCollectionPadding:r,options:{commentString:i}}=e;n+=s;let l=Object.assign({},e,{indent:n,inFlow:!0,type:null}),c=!1,f=0,d=[];for(let m=0;m<o.length;++m){let u=o[m],g=null;if(P(u))u.spaceBefore&&d.push(""),kn(e,d,u.commentBefore,!1),u.comment&&(g=u.comment);else if(R(u)){let b=P(u.key)?u.key:null;b&&(b.spaceBefore&&d.push(""),kn(e,d,b.commentBefore,!1),b.comment&&(c=!0));let w=P(u.value)?u.value:null;w?(w.comment&&(g=w.comment),w.commentBefore&&(c=!0)):u.value==null&&b?.comment&&(g=b.comment)}g&&(c=!0);let y=Ee(u,l,()=>g=null);c||(c=d.length>f||y.includes(`
`)),m<o.length-1?y+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(c||(c=d.reduce((b,w)=>b+w.length+2,2)+(y.length+2)>e.options.lineWidth)),c&&(y+=",")),g&&(y+=we(y,n,i(g))),d.push(y),f=d.length}let{start:p,end:h}=t;if(d.length===0)return p+h;if(!c){let m=d.reduce((u,g)=>u+g.length+2,2);c=e.options.lineWidth>0&&m>e.options.lineWidth}if(c){let m=p;for(let u of d)m+=u?`
${s}${a}${u}`:`
`;return`${m}
${a}${h}`}else return`${p}${r}${d.join(" ")}${r}${h}`}function kn({indent:o,options:{commentString:e}},t,n,a){if(n&&a&&(n=n.replace(/^\n+/,"")),n){let s=re(e(n),o);t.push(s.trimStart())}}var Ea=E(()=>{q();Et();vt()});function Me(o,e){let t=A(e)?e.value:e;for(let n of o)if(R(n)&&(n.key===e||n.key===t||A(n.key)&&n.key.value===t))return n}var V,Oe=E(()=>{Ea();Na();dn();q();Ae();K();V=class extends Ye{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(ce,e),this.items=[]}static from(e,t,n){let{keepUndefined:a,replacer:s}=n,r=new this(e),i=(l,c)=>{if(typeof s=="function")c=s.call(t,l,c);else if(Array.isArray(s)&&!s.includes(l))return;(c!==void 0||a)&&r.items.push(et(l,c,n))};if(t instanceof Map)for(let[l,c]of t)i(l,c);else if(t&&typeof t=="object")for(let l of Object.keys(t))i(l,t[l]);return typeof e.sortMapEntries=="function"&&r.items.sort(e.sortMapEntries),r}add(e,t){let n;R(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new j(e,e?.value):n=new j(e.key,e.value);let a=Me(this.items,n.key),s=this.schema?.sortMapEntries;if(a){if(!t)throw new Error(`Key ${n.key} already set`);A(a.value)&&cn(n.value)?a.value.value=n.value:a.value=n.value}else if(s){let r=this.items.findIndex(i=>s(n,i)<0);r===-1?this.items.push(n):this.items.splice(r,0,n)}else this.items.push(n)}delete(e){let t=Me(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){let a=Me(this.items,e)?.value;return(!t&&A(a)?a.value:a)??void 0}has(e){return!!Me(this.items,e)}set(e,t){this.add(new j(e,t),!0)}toJSON(e,t,n){let a=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(a);for(let s of this.items)wn(t,a,s);return a}toString(e,t,n){if(!e)return JSON.stringify(this);for(let a of this.items)if(!R(a))throw new Error(`Map items must all be pairs; found ${JSON.stringify(a)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),vn(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}});var pe,tt=E(()=>{q();Oe();pe={collection:"map",default:!0,nodeClass:V,tag:"tag:yaml.org,2002:map",resolve(o,e){return ae(o)||e("Expected a mapping for this tag"),o},createNode:(o,e,t)=>V.from(o,e,t)}});function Sn(o){let e=A(o)?o.value:o;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}var z,Ie=E(()=>{wt();Ea();dn();q();K();Fe();z=class extends Ye{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(xe,e),this.items=[]}add(e){this.items.push(e)}delete(e){let t=Sn(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){let n=Sn(e);if(typeof n!="number")return;let a=this.items[n];return!t&&A(a)?a.value:a}has(e){let t=Sn(e);return typeof t=="number"&&t<this.items.length}set(e,t){let n=Sn(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);let a=this.items[n];A(a)&&cn(t)?a.value=t:this.items[n]=t}toJSON(e,t){let n=[];t?.onCreate&&t.onCreate(n);let a=0;for(let s of this.items)n.push(G(s,String(a++),t));return n}toString(e,t,n){return e?vn(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){let{replacer:a}=n,s=new this(e);if(t&&Symbol.iterator in Object(t)){let r=0;for(let i of t){if(typeof a=="function"){let l=t instanceof Set?i:String(r++);i=a.call(t,l,i)}s.items.push(Te(i,void 0,n))}}return s}}});var ue,nt=E(()=>{q();Ie();ue={collection:"seq",default:!0,nodeClass:z,tag:"tag:yaml.org,2002:seq",resolve(o,e){return oe(o)||e("Expected a sequence for this tag"),o},createNode:(o,e,t)=>z.from(o,e,t)}});var Re,Ct=E(()=>{Nt();Re={identify:o=>typeof o=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:o=>o,stringify(o,e,t,n){return e=Object.assign({actualString:!0},e),Ne(o,e,t,n)}}});var je,xn=E(()=>{K();je={identify:o=>o==null,createNode:()=>new C(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new C(null),stringify:({source:o},e)=>typeof o=="string"&&je.test.test(o)?o:e.options.nullStr}});var Lt,Ca=E(()=>{K();Lt={identify:o=>typeof o=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:o=>new C(o[0]==="t"||o[0]==="T"),stringify({source:o,value:e},t){if(o&&Lt.test.test(o)){let n=o[0]==="t"||o[0]==="T";if(e===n)return o}return e?t.options.trueStr:t.options.falseStr}}});function X({format:o,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);let a=typeof n=="number"?n:Number(n);if(!isFinite(a))return isNaN(a)?".nan":a<0?"-.inf":".inf";let s=Object.is(n,-0)?"-0":JSON.stringify(n);if(!o&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(s)&&!s.includes("e")){let r=s.indexOf(".");r<0&&(r=s.length,s+=".");let i=e-(s.length-r-1);for(;i-- >0;)s+="0"}return s}var at=E(()=>{});var Tn,Nn,En,La=E(()=>{K();at();Tn={identify:o=>typeof o=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:o=>o.slice(-3).toLowerCase()==="nan"?NaN:o[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:X},Nn={identify:o=>typeof o=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:o=>parseFloat(o),stringify(o){let e=Number(o.value);return isFinite(e)?e.toExponential():X(o)}},En={identify:o=>typeof o=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(o){let e=new C(parseFloat(o)),t=o.indexOf(".");return t!==-1&&o[o.length-1]==="0"&&(e.minFractionDigits=o.length-t-1),e},stringify:X}});function Ss(o,e,t){let{value:n}=o;return Cn(n)&&n>=0?t+n.toString(e):X(o)}var Cn,Fa,Ln,Fn,Dn,Da=E(()=>{at();Cn=o=>typeof o=="bigint"||Number.isInteger(o),Fa=(o,e,t,{intAsBigInt:n})=>n?BigInt(o):parseInt(o.substring(e),t);Ln={identify:o=>Cn(o)&&o>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(o,e,t)=>Fa(o,2,8,t),stringify:o=>Ss(o,8,"0o")},Fn={identify:Cn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(o,e,t)=>Fa(o,0,10,t),stringify:X},Dn={identify:o=>Cn(o)&&o>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(o,e,t)=>Fa(o,2,16,t),stringify:o=>Ss(o,16,"0x")}});var xs,Ts=E(()=>{tt();xn();nt();Ct();Ca();La();Da();xs=[pe,ue,Re,je,Lt,Ln,Fn,Dn,Tn,Nn,En]});function Ns(o){return typeof o=="bigint"||Number.isInteger(o)}var An,Gi,Wi,Es,Cs=E(()=>{K();tt();nt();An=({value:o})=>JSON.stringify(o),Gi=[{identify:o=>typeof o=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:o=>o,stringify:An},{identify:o=>o==null,createNode:()=>new C(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:An},{identify:o=>typeof o=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:o=>o==="true",stringify:An},{identify:Ns,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(o,e,{intAsBigInt:t})=>t?BigInt(o):parseInt(o,10),stringify:({value:o})=>Ns(o)?o.toString():JSON.stringify(o)},{identify:o=>typeof o=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:o=>parseFloat(o),stringify:An}],Wi={default:!0,tag:"",test:/^/,resolve(o,e){return e(`Unresolved plain scalar ${JSON.stringify(o)}`),o}},Es=[pe,ue].concat(Gi,Wi)});var Ft,Aa=E(()=>{K();Nt();Ft={identify:o=>o instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(o,e){if(typeof atob=="function"){let t=atob(o.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let a=0;a<t.length;++a)n[a]=t.charCodeAt(a);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),o},stringify({comment:o,type:e,value:t},n,a,s){if(!t)return"";let r=t,i;if(typeof btoa=="function"){let l="";for(let c=0;c<r.length;++c)l+=String.fromCharCode(r[c]);i=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=C.BLOCK_LITERAL),e!==C.QUOTE_DOUBLE){let l=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),c=Math.ceil(i.length/l),f=new Array(c);for(let d=0,p=0;d<c;++d,p+=l)f[d]=i.substr(p,l);i=f.join(e===C.BLOCK_LITERAL?`
`:" ")}return Ne({comment:o,type:e,value:i},n,a,s)}}});function Ma(o,e){if(oe(o))for(let t=0;t<o.items.length;++t){let n=o.items[t];if(!R(n)){if(ae(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");let a=n.items[0]||new j(new C(null));if(n.commentBefore&&(a.key.commentBefore=a.key.commentBefore?`${n.commentBefore}
${a.key.commentBefore}`:n.commentBefore),n.comment){let s=a.value??a.key;s.comment=s.comment?`${n.comment}
${s.comment}`:n.comment}n=a}o.items[t]=R(n)?n:new j(n)}}else e("Expected a sequence for this tag");return o}function Oa(o,e,t){let{replacer:n}=t,a=new z(o);a.tag="tag:yaml.org,2002:pairs";let s=0;if(e&&Symbol.iterator in Object(e))for(let r of e){typeof n=="function"&&(r=n.call(e,String(s++),r));let i,l;if(Array.isArray(r))if(r.length===2)i=r[0],l=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){let c=Object.keys(r);if(c.length===1)i=c[0],l=r[i];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else i=r;a.items.push(et(i,l,t))}return a}var Dt,Mn=E(()=>{q();Ae();K();Ie();Dt={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Ma,createNode:Oa}});var ot,At,Ia=E(()=>{q();Fe();Oe();Ie();Mn();ot=class o extends z{constructor(){super(),this.add=V.prototype.add.bind(this),this.delete=V.prototype.delete.bind(this),this.get=V.prototype.get.bind(this),this.has=V.prototype.has.bind(this),this.set=V.prototype.set.bind(this),this.tag=o.tag}toJSON(e,t){if(!t)return super.toJSON(e);let n=new Map;t?.onCreate&&t.onCreate(n);for(let a of this.items){let s,r;if(R(a)?(s=G(a.key,"",t),r=G(a.value,s,t)):s=G(a,"",t),n.has(s))throw new Error("Ordered maps must not include duplicate keys");n.set(s,r)}return n}static from(e,t,n){let a=Oa(e,t,n),s=new this;return s.items=a.items,s}};ot.tag="tag:yaml.org,2002:omap";At={collection:"seq",identify:o=>o instanceof Map,nodeClass:ot,default:!1,tag:"tag:yaml.org,2002:omap",resolve(o,e){let t=Ma(o,e),n=[];for(let{key:a}of t.items)A(a)&&(n.includes(a.value)?e(`Ordered maps must not include duplicate keys: ${a.value}`):n.push(a.value));return Object.assign(new ot,t)},createNode:(o,e,t)=>ot.from(o,e,t)}});function Ls({value:o,source:e},t){return e&&(o?Ra:Pa).test.test(e)?e:o?t.options.trueStr:t.options.falseStr}var Ra,Pa,Fs=E(()=>{K();Ra={identify:o=>o===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new C(!0),stringify:Ls},Pa={identify:o=>o===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new C(!1),stringify:Ls}});var Ds,As,Ms,Os=E(()=>{K();at();Ds={identify:o=>typeof o=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:o=>o.slice(-3).toLowerCase()==="nan"?NaN:o[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:X},As={identify:o=>typeof o=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:o=>parseFloat(o.replace(/_/g,"")),stringify(o){let e=Number(o.value);return isFinite(e)?e.toExponential():X(o)}},Ms={identify:o=>typeof o=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(o){let e=new C(parseFloat(o.replace(/_/g,""))),t=o.indexOf(".");if(t!==-1){let n=o.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:X}});function On(o,e,t,{intAsBigInt:n}){let a=o[0];if((a==="-"||a==="+")&&(e+=1),o=o.substring(e).replace(/_/g,""),n){switch(t){case 2:o=`0b${o}`;break;case 8:o=`0o${o}`;break;case 16:o=`0x${o}`;break}let r=BigInt(o);return a==="-"?BigInt(-1)*r:r}let s=parseInt(o,t);return a==="-"?-1*s:s}function Ua(o,e,t){let{value:n}=o;if(Mt(n)){let a=n.toString(e);return n<0?"-"+t+a.substr(1):t+a}return X(o)}var Mt,Is,Rs,Ps,Us,Bs=E(()=>{at();Mt=o=>typeof o=="bigint"||Number.isInteger(o);Is={identify:Mt,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(o,e,t)=>On(o,2,2,t),stringify:o=>Ua(o,2,"0b")},Rs={identify:Mt,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(o,e,t)=>On(o,1,8,t),stringify:o=>Ua(o,8,"0")},Ps={identify:Mt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(o,e,t)=>On(o,0,10,t),stringify:X},Us={identify:Mt,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(o,e,t)=>On(o,2,16,t),stringify:o=>Ua(o,16,"0x")}});var st,Ot,Ba=E(()=>{q();Ae();Oe();st=class o extends V{constructor(e){super(e),this.tag=o.tag}add(e){let t;R(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new j(e.key,null):t=new j(e,null),Me(this.items,t.key)||this.items.push(t)}get(e,t){let n=Me(this.items,e);return!t&&R(n)?A(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);let n=Me(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new j(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){let{replacer:a}=n,s=new this(e);if(t&&Symbol.iterator in Object(t))for(let r of t)typeof a=="function"&&(r=a.call(t,r,r)),s.items.push(et(r,null,n));return s}};st.tag="tag:yaml.org,2002:set";Ot={collection:"map",identify:o=>o instanceof Set,nodeClass:st,default:!1,tag:"tag:yaml.org,2002:set",createNode:(o,e,t)=>st.from(o,e,t),resolve(o,e){if(ae(o)){if(o.hasAllNullValues(!0))return Object.assign(new st,o);e("Set items must all have null values")}else e("Expected a mapping for this tag");return o}}});function qa(o,e){let t=o[0],n=t==="-"||t==="+"?o.substring(1):o,a=r=>e?BigInt(r):Number(r),s=n.replace(/_/g,"").split(":").reduce((r,i)=>r*a(60)+a(i),a(0));return t==="-"?a(-1)*s:s}function qs(o){let{value:e}=o,t=r=>r;if(typeof e=="bigint")t=r=>BigInt(r);else if(isNaN(e)||!isFinite(e))return X(o);let n="";e<0&&(n="-",e*=t(-1));let a=t(60),s=[e%a];return e<60?s.unshift(0):(e=(e-s[0])/a,s.unshift(e%a),e>=60&&(e=(e-s[0])/a,s.unshift(e))),n+s.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}var In,Rn,rt,Ha=E(()=>{at();In={identify:o=>typeof o=="bigint"||Number.isInteger(o),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(o,e,{intAsBigInt:t})=>qa(o,t),stringify:qs},Rn={identify:o=>typeof o=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:o=>qa(o,!1),stringify:qs},rt={identify:o=>o instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(o){let e=o.match(rt.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");let[,t,n,a,s,r,i]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0,c=Date.UTC(t,n-1,a,s||0,r||0,i||0,l),f=e[8];if(f&&f!=="Z"){let d=qa(f,!1);Math.abs(d)<30&&(d*=60),c-=6e4*d}return new Date(c)},stringify:({value:o})=>o?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""}});var _a,Hs=E(()=>{tt();xn();nt();Ct();Aa();Fs();Os();Bs();bn();Ia();Mn();Ba();Ha();_a=[pe,ue,Re,je,Ra,Pa,Is,Rs,Ps,Us,Ds,As,Ms,Ft,fe,At,Dt,Ot,In,Rn,rt]});function Pn(o,e,t){let n=_s.get(e);if(n&&!o)return t&&!n.includes(fe)?n.concat(fe):n.slice();let a=n;if(!a)if(Array.isArray(o))a=[];else{let s=Array.from(_s.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${s} or define customTags array`)}if(Array.isArray(o))for(let s of o)a=a.concat(s);else typeof o=="function"&&(a=o(a.slice()));return t&&(a=a.concat(fe)),a.reduce((s,r)=>{let i=typeof r=="string"?js[r]:r;if(!i){let l=JSON.stringify(r),c=Object.keys(js).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return s.includes(i)||s.push(i),s},[])}var _s,js,Vs,Ks=E(()=>{tt();xn();nt();Ct();Ca();La();Da();Ts();Cs();Aa();bn();Ia();Mn();Hs();Ba();Ha();_s=new Map([["core",xs],["failsafe",[pe,ue,Re]],["json",Es],["yaml11",_a],["yaml-1.1",_a]]),js={binary:Ft,bool:Lt,float:En,floatExp:Nn,floatNaN:Tn,floatTime:Rn,int:Fn,intHex:Dn,intOct:Ln,intTime:In,map:pe,merge:fe,null:je,omap:At,pairs:Dt,seq:ue,set:Ot,timestamp:rt},Vs={"tag:yaml.org,2002:binary":Ft,"tag:yaml.org,2002:merge":fe,"tag:yaml.org,2002:omap":At,"tag:yaml.org,2002:pairs":Dt,"tag:yaml.org,2002:set":Ot,"tag:yaml.org,2002:timestamp":rt}});var zi,Ve,ja=E(()=>{q();tt();nt();Ct();Ks();zi=(o,e)=>o.key<e.key?-1:o.key>e.key?1:0,Ve=class o{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:a,schema:s,sortMapEntries:r,toStringDefaults:i}){this.compat=Array.isArray(e)?Pn(e,"compat"):e?Pn(null,e):null,this.name=typeof s=="string"&&s||"core",this.knownTags=a?Vs:{},this.tags=Pn(t,this.name,n),this.toStringOptions=i??null,Object.defineProperty(this,ce,{value:pe}),Object.defineProperty(this,ee,{value:Re}),Object.defineProperty(this,xe,{value:ue}),this.sortMapEntries=typeof r=="function"?r:r===!0?zi:null}clone(){let e=Object.create(o.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}});function Gs(o,e){let t=[],n=e.directives===!0;if(e.directives!==!1&&o.directives){let l=o.directives.toString(o);l?(t.push(l),n=!0):o.directives.docStart&&(n=!0)}n&&t.push("---");let a=mn(o,e),{commentString:s}=a.options;if(o.commentBefore){t.length!==1&&t.unshift("");let l=s(o.commentBefore);t.unshift(re(l,""))}let r=!1,i=null;if(o.contents){if(P(o.contents)){if(o.contents.spaceBefore&&n&&t.push(""),o.contents.commentBefore){let f=s(o.contents.commentBefore);t.push(re(f,""))}a.forceBlockIndent=!!o.comment,i=o.contents.comment}let l=i?void 0:()=>r=!0,c=Ee(o.contents,a,()=>i=null,l);i&&(c+=we(c,"",s(i))),(c[0]==="|"||c[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${c}`:t.push(c)}else t.push(Ee(o.contents,a));if(o.directives?.docEnd)if(o.comment){let l=s(o.comment);l.includes(`
`)?(t.push("..."),t.push(re(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=o.comment;l&&r&&(l=l.replace(/^\n+/,"")),l&&((!r||i)&&t[t.length-1]!==""&&t.push(""),t.push(re(s(l),"")))}return t.join(`
`)+`
`}var Ws=E(()=>{q();Et();vt()});function it(o){if(H(o))return!0;throw new Error("Expected a YAML collection as document contents")}var he,It=E(()=>{bt();dn();q();Ae();Fe();ja();Ws();sn();ba();wt();ma();he=class o{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Z,{value:nn});let a=null;typeof t=="function"||Array.isArray(t)?a=t:n===void 0&&t&&(n=t,t=void 0);let s=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=s;let{version:r}=s;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new be({version:r}),this.setSchema(r,n),this.contents=e===void 0?null:this.createNode(e,a,n)}clone(){let e=Object.create(o.prototype,{[Z]:{value:nn}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=P(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){it(this.contents)&&this.contents.add(e)}addIn(e,t){it(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){let n=ga(this);e.anchor=!t||n.has(t)?ya(t||"a",n):t}return new de(e.anchor)}createNode(e,t,n){let a;if(typeof t=="function")e=t.call({"":e},"",e),a=t;else if(Array.isArray(t)){let g=b=>typeof b=="number"||b instanceof String||b instanceof Number,y=t.filter(g).map(String);y.length>0&&(t=t.concat(y)),a=t}else n===void 0&&t&&(n=t,t=void 0);let{aliasDuplicateObjects:s,anchorPrefix:r,flow:i,keepUndefined:l,onTagObj:c,tag:f}=n??{},{onAnchor:d,setAnchors:p,sourceObjects:h}=hs(this,r||"a"),m={aliasDuplicateObjects:s??!0,keepUndefined:l??!1,onAnchor:d,onTagObj:c,replacer:a,schema:this.schema,sourceObjects:h},u=Te(e,f,m);return i&&H(u)&&(u.flow=!0),p(),u}createPair(e,t,n={}){let a=this.createNode(e,null,n),s=this.createNode(t,null,n);return new j(a,s)}delete(e){return it(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Qe(e)?this.contents==null?!1:(this.contents=null,!0):it(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return H(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Qe(e)?!t&&A(this.contents)?this.contents.value:this.contents:H(this.contents)?this.contents.getIn(e,t):void 0}has(e){return H(this.contents)?this.contents.has(e):!1}hasIn(e){return Qe(e)?this.contents!==void 0:H(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=kt(this.schema,[e],t):it(this.contents)&&this.contents.set(e,t)}setIn(e,t){Qe(e)?this.contents=t:this.contents==null?this.contents=kt(this.schema,Array.from(e),t):it(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new be({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new be({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{let a=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${a}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new Ve(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:a,onAnchor:s,reviver:r}={}){let i={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof a=="number"?a:100},l=G(this.contents,t??"",i);if(typeof s=="function")for(let{count:c,res:f}of i.anchors.values())s(f,c);return typeof r=="function"?Le(r,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Gs(this,e)}}});var Ke,Q,Ge,Rt,Pt=E(()=>{Ke=class extends Error{constructor(e,t,n,a){super(),this.name=e,this.code=n,this.message=a,this.pos=t}},Q=class extends Ke{constructor(e,t,n){super("YAMLParseError",e,t,n)}},Ge=class extends Ke{constructor(e,t,n){super("YAMLWarning",e,t,n)}},Rt=(o,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(i=>e.linePos(i));let{line:n,col:a}=t.linePos[0];t.message+=` at line ${n}, column ${a}`;let s=a-1,r=o.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(s>=60&&r.length>80){let i=Math.min(s-39,r.length-79);r="\u2026"+r.substring(i),s-=i-1}if(r.length>80&&(r=r.substring(0,79)+"\u2026"),n>1&&/^ *$/.test(r.substring(0,s))){let i=o.substring(e.lineStarts[n-2],e.lineStarts[n-1]);i.length>80&&(i=i.substring(0,79)+`\u2026
`),r=i+r}if(/[^ ]/.test(r)){let i=1,l=t.linePos[1];l?.line===n&&l.col>a&&(i=Math.max(1,Math.min(l.col-a,80-s)));let c=" ".repeat(s)+"^".repeat(i);t.message+=`:

${r}
${c}
`}}});function ke(o,{flow:e,indicator:t,next:n,offset:a,onError:s,parentIndent:r,startOnNewline:i}){let l=!1,c=i,f=i,d="",p="",h=!1,m=!1,u=null,g=null,y=null,b=null,w=null,S=null,v=null;for(let k of o)switch(m&&(k.type!=="space"&&k.type!=="newline"&&k.type!=="comma"&&s(k.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),m=!1),u&&(c&&k.type!=="comment"&&k.type!=="newline"&&s(u,"TAB_AS_INDENT","Tabs are not allowed as indentation"),u=null),k.type){case"space":!e&&(t!=="doc-start"||n?.type!=="flow-collection")&&k.source.includes("	")&&(u=k),f=!0;break;case"comment":{f||s(k,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");let T=k.source.substring(1)||" ";d?d+=p+T:d=T,p="",c=!1;break}case"newline":c?d?d+=k.source:(!S||t!=="seq-item-ind")&&(l=!0):p+=k.source,c=!0,h=!0,(g||y)&&(b=k),f=!0;break;case"anchor":g&&s(k,"MULTIPLE_ANCHORS","A node can have at most one anchor"),k.source.endsWith(":")&&s(k.offset+k.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=k,v??(v=k.offset),c=!1,f=!1,m=!0;break;case"tag":{y&&s(k,"MULTIPLE_TAGS","A node can have at most one tag"),y=k,v??(v=k.offset),c=!1,f=!1,m=!0;break}case t:(g||y)&&s(k,"BAD_PROP_ORDER",`Anchors and tags must be after the ${k.source} indicator`),S&&s(k,"UNEXPECTED_TOKEN",`Unexpected ${k.source} in ${e??"collection"}`),S=k,c=t==="seq-item-ind"||t==="explicit-key-ind",f=!1;break;case"comma":if(e){w&&s(k,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),w=k,c=!1,f=!1;break}default:s(k,"UNEXPECTED_TOKEN",`Unexpected ${k.type} token`),c=!1,f=!1}let x=o[o.length-1],N=x?x.offset+x.source.length:a;return m&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&s(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),u&&(c&&u.indent<=r||n?.type==="block-map"||n?.type==="block-seq")&&s(u,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:w,found:S,spaceBefore:l,comment:d,hasNewline:h,anchor:g,tag:y,newlineAfterProp:b,end:N,start:v??N}}var Ut=E(()=>{});function Pe(o){if(!o)return null;switch(o.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(o.source.includes(`
`))return!0;if(o.end){for(let e of o.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(let e of o.items){for(let t of e.start)if(t.type==="newline")return!0;if(e.sep){for(let t of e.sep)if(t.type==="newline")return!0}if(Pe(e.key)||Pe(e.value))return!0}return!1;default:return!0}}var Un=E(()=>{});function Bt(o,e,t){if(e?.type==="flow-collection"){let n=e.end[0];n.indent===o&&(n.source==="]"||n.source==="}")&&Pe(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}var Va=E(()=>{Un()});function Bn(o,e,t){let{uniqueKeys:n}=o.options;if(n===!1)return!1;let a=typeof n=="function"?n:(s,r)=>s===r||A(s)&&A(r)&&s.value===r.value;return e.some(s=>a(s.key,t))}var Ka=E(()=>{q()});function Js({composeNode:o,composeEmptyNode:e},t,n,a,s){let r=s?.nodeClass??V,i=new r(t.schema);t.atRoot&&(t.atRoot=!1);let l=n.offset,c=null;for(let f of n.items){let{start:d,key:p,sep:h,value:m}=f,u=ke(d,{indicator:"explicit-key-ind",next:p??h?.[0],offset:l,onError:a,parentIndent:n.indent,startOnNewline:!0}),g=!u.found;if(g){if(p&&(p.type==="block-seq"?a(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==n.indent&&a(l,"BAD_INDENT",zs)),!u.anchor&&!u.tag&&!h){c=u.end,u.comment&&(i.comment?i.comment+=`
`+u.comment:i.comment=u.comment);continue}(u.newlineAfterProp||Pe(p))&&a(p??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else u.found?.indent!==n.indent&&a(l,"BAD_INDENT",zs);t.atKey=!0;let y=u.end,b=p?o(t,p,u,a):e(t,y,d,null,u,a);t.schema.compat&&Bt(n.indent,p,a),t.atKey=!1,Bn(t,i.items,b)&&a(y,"DUPLICATE_KEY","Map keys must be unique");let w=ke(h??[],{indicator:"map-value-ind",next:m,offset:b.range[2],onError:a,parentIndent:n.indent,startOnNewline:!p||p.type==="block-scalar"});if(l=w.end,w.found){g&&(m?.type==="block-map"&&!w.hasNewline&&a(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&u.start<w.found.offset-1024&&a(b.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));let S=m?o(t,m,w,a):e(t,l,h,null,w,a);t.schema.compat&&Bt(n.indent,m,a),l=S.range[2];let v=new j(b,S);t.options.keepSourceTokens&&(v.srcToken=f),i.items.push(v)}else{g&&a(b.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),w.comment&&(b.comment?b.comment+=`
`+w.comment:b.comment=w.comment);let S=new j(b);t.options.keepSourceTokens&&(S.srcToken=f),i.items.push(S)}}return c&&c<l&&a(c,"IMPOSSIBLE","Map comment with trailing content"),i.range=[n.offset,l,c??l],i}var zs,Xs=E(()=>{Ae();Oe();Ut();Un();Va();Ka();zs="All mapping items must start at the same column"});function Zs({composeNode:o,composeEmptyNode:e},t,n,a,s){let r=s?.nodeClass??z,i=new r(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=n.offset,c=null;for(let{start:f,value:d}of n.items){let p=ke(f,{indicator:"seq-item-ind",next:d,offset:l,onError:a,parentIndent:n.indent,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||d)d?.type==="block-seq"?a(p.end,"BAD_INDENT","All sequence items must start at the same column"):a(l,"MISSING_CHAR","Sequence item without - indicator");else{c=p.end,p.comment&&(i.comment=p.comment);continue}let h=d?o(t,d,p,a):e(t,p.end,f,null,p,a);t.schema.compat&&Bt(n.indent,d,a),l=h.range[2],i.items.push(h)}return i.range=[n.offset,l,c??l],i}var Ys=E(()=>{Ie();Ut();Va()});function ve(o,e,t,n){let a="";if(o){let s=!1,r="";for(let i of o){let{source:l,type:c}=i;switch(c){case"space":s=!0;break;case"comment":{t&&!s&&n(i,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");let f=l.substring(1)||" ";a?a+=r+f:a=f,r="";break}case"newline":a&&(r+=l),s=!0;break;default:n(i,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:a,offset:e}}var lt=E(()=>{});function Qs({composeNode:o,composeEmptyNode:e},t,n,a,s){let r=n.start.source==="{",i=r?"flow map":"flow sequence",l=s?.nodeClass??(r?V:z),c=new l(t.schema);c.flow=!0;let f=t.atRoot;f&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let d=n.offset+n.start.source.length;for(let g=0;g<n.items.length;++g){let y=n.items[g],{start:b,key:w,sep:S,value:v}=y,x=ke(b,{flow:i,indicator:"explicit-key-ind",next:w??S?.[0],offset:d,onError:a,parentIndent:n.indent,startOnNewline:!1});if(!x.found){if(!x.anchor&&!x.tag&&!S&&!v){g===0&&x.comma?a(x.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${i}`):g<n.items.length-1&&a(x.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${i}`),x.comment&&(c.comment?c.comment+=`
`+x.comment:c.comment=x.comment),d=x.end;continue}!r&&t.options.strict&&Pe(w)&&a(w,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(g===0)x.comma&&a(x.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${i}`);else if(x.comma||a(x.start,"MISSING_CHAR",`Missing , between ${i} items`),x.comment){let N="";e:for(let k of b)switch(k.type){case"comma":case"space":break;case"comment":N=k.source.substring(1);break e;default:break e}if(N){let k=c.items[c.items.length-1];R(k)&&(k=k.value??k.key),k.comment?k.comment+=`
`+N:k.comment=N,x.comment=x.comment.substring(N.length+1)}}if(!r&&!S&&!x.found){let N=v?o(t,v,x,a):e(t,x.end,S,null,x,a);c.items.push(N),d=N.range[2],Wa(v)&&a(N.range,"BLOCK_IN_FLOW",Ga)}else{t.atKey=!0;let N=x.end,k=w?o(t,w,x,a):e(t,N,b,null,x,a);Wa(w)&&a(k.range,"BLOCK_IN_FLOW",Ga),t.atKey=!1;let T=ke(S??[],{flow:i,indicator:"map-value-ind",next:v,offset:k.range[2],onError:a,parentIndent:n.indent,startOnNewline:!1});if(T.found){if(!r&&!x.found&&t.options.strict){if(S)for(let F of S){if(F===T.found)break;if(F.type==="newline"){a(F,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}x.start<T.found.offset-1024&&a(T.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else v&&("source"in v&&v.source?.[0]===":"?a(v,"MISSING_CHAR",`Missing space after : in ${i}`):a(T.start,"MISSING_CHAR",`Missing , or : between ${i} items`));let D=v?o(t,v,T,a):T.found?e(t,T.end,S,null,T,a):null;D?Wa(v)&&a(D.range,"BLOCK_IN_FLOW",Ga):T.comment&&(k.comment?k.comment+=`
`+T.comment:k.comment=T.comment);let O=new j(k,D);if(t.options.keepSourceTokens&&(O.srcToken=y),r){let F=c;Bn(t,F.items,k)&&a(N,"DUPLICATE_KEY","Map keys must be unique"),F.items.push(O)}else{let F=new V(t.schema);F.flow=!0,F.items.push(O);let U=(D??k).range;F.range=[k.range[0],U[1],U[2]],c.items.push(F)}d=D?D.range[2]:T.end}}let p=r?"}":"]",[h,...m]=n.end,u=d;if(h?.source===p)u=h.offset+h.source.length;else{let g=i[0].toUpperCase()+i.substring(1),y=f?`${g} must end with a ${p}`:`${g} in block collection must be sufficiently indented and end with a ${p}`;a(d,f?"MISSING_CHAR":"BAD_INDENT",y),h&&h.source.length!==1&&m.unshift(h)}if(m.length>0){let g=ve(m,u,t.options.strict,a);g.comment&&(c.comment?c.comment+=`
`+g.comment:c.comment=g.comment),c.range=[n.offset,u,g.offset]}else c.range=[n.offset,u,u];return c}var Ga,Wa,$s=E(()=>{q();Ae();Oe();Ie();lt();Ut();Un();Ka();Ga="Block collections are not allowed within flow collections",Wa=o=>o&&(o.type==="block-map"||o.type==="block-seq")});function za(o,e,t,n,a,s){let r=t.type==="block-map"?Js(o,e,t,n,s):t.type==="block-seq"?Zs(o,e,t,n,s):Qs(o,e,t,n,s),i=r.constructor;return a==="!"||a===i.tagName?(r.tag=i.tagName,r):(a&&(r.tag=a),r)}function er(o,e,t,n,a){let s=n.tag,r=s?e.directives.tagName(s.source,p=>a(s,"TAG_RESOLVE_FAILED",p)):null;if(t.type==="block-seq"){let{anchor:p,newlineAfterProp:h}=n,m=p&&s?p.offset>s.offset?p:s:p??s;m&&(!h||h.offset<m.offset)&&a(m,"MISSING_CHAR","Missing newline after block sequence props")}let i=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!s||!r||r==="!"||r===V.tagName&&i==="map"||r===z.tagName&&i==="seq")return za(o,e,t,a,r);let l=e.schema.tags.find(p=>p.tag===r&&p.collection===i);if(!l){let p=e.schema.knownTags[r];if(p?.collection===i)e.schema.tags.push(Object.assign({},p,{default:!1})),l=p;else return p?a(s,"BAD_COLLECTION_TYPE",`${p.tag} used for ${i} collection, but expects ${p.collection??"scalar"}`,!0):a(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),za(o,e,t,a,r)}let c=za(o,e,t,a,r,l),f=l.resolve?.(c,p=>a(s,"TAG_RESOLVE_FAILED",p),e.options)??c,d=P(f)?f:new C(f);return d.range=c.range,d.tag=r,l?.format&&(d.format=l.format),d}var tr=E(()=>{q();K();Oe();Ie();Xs();Ys();$s()});function qn(o,e,t){let n=e.offset,a=Ji(e,o.options.strict,t);if(!a)return{value:"",type:null,comment:"",range:[n,n,n]};let s=a.mode===">"?C.BLOCK_FOLDED:C.BLOCK_LITERAL,r=e.source?Xi(e.source):[],i=r.length;for(let u=r.length-1;u>=0;--u){let g=r[u][1];if(g===""||g==="\r")i=u;else break}if(i===0){let u=a.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"",g=n+a.length;return e.source&&(g+=e.source.length),{value:u,type:s,comment:a.comment,range:[n,g,g]}}let l=e.indent+a.indent,c=e.offset+a.length,f=0;for(let u=0;u<i;++u){let[g,y]=r[u];if(y===""||y==="\r")a.indent===0&&g.length>l&&(l=g.length);else{g.length<l&&t(c+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),a.indent===0&&(l=g.length),f=u,l===0&&!o.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=g.length+y.length+1}for(let u=r.length-1;u>=i;--u)r[u][0].length>l&&(i=u+1);let d="",p="",h=!1;for(let u=0;u<f;++u)d+=r[u][0].slice(l)+`
`;for(let u=f;u<i;++u){let[g,y]=r[u];c+=g.length+y.length+1;let b=y[y.length-1]==="\r";if(b&&(y=y.slice(0,-1)),y&&g.length<l){let S=`Block scalar lines must not be less indented than their ${a.indent?"explicit indentation indicator":"first line"}`;t(c-y.length-(b?2:1),"BAD_INDENT",S),g=""}s===C.BLOCK_LITERAL?(d+=p+g.slice(l)+y,p=`
`):g.length>l||y[0]==="	"?(p===" "?p=`
`:!h&&p===`
`&&(p=`

`),d+=p+g.slice(l)+y,p=`
`,h=!0):y===""?p===`
`?d+=`
`:p=`
`:(d+=p+y,p=" ",h=!1)}switch(a.chomp){case"-":break;case"+":for(let u=i;u<r.length;++u)d+=`
`+r[u][0].slice(l);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}let m=n+a.length+e.source.length;return{value:d,type:s,comment:a.comment,range:[n,m,m]}}function Ji({offset:o,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;let{source:a}=e[0],s=a[0],r=0,i="",l=-1;for(let p=1;p<a.length;++p){let h=a[p];if(!i&&(h==="-"||h==="+"))i=h;else{let m=Number(h);!r&&m?r=m:l===-1&&(l=o+p)}}l!==-1&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${a}`);let c=!1,f="",d=a.length;for(let p=1;p<e.length;++p){let h=e[p];switch(h.type){case"space":c=!0;case"newline":d+=h.source.length;break;case"comment":t&&!c&&n(h,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=h.source.length,f=h.source.substring(1);break;case"error":n(h,"UNEXPECTED_TOKEN",h.message),d+=h.source.length;break;default:{let m=`Unexpected token in block scalar header: ${h.type}`;n(h,"UNEXPECTED_TOKEN",m);let u=h.source;u&&typeof u=="string"&&(d+=u.length)}}}return{mode:s,indent:r,chomp:i,comment:f,length:d}}function Xi(o){let e=o.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),s=[n?.[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let r=1;r<e.length;r+=2)s.push([e[r],e[r+1]]);return s}var Ja=E(()=>{K()});function Hn(o,e,t){let{offset:n,type:a,source:s,end:r}=o,i,l,c=(p,h,m)=>t(n+p,h,m);switch(a){case"scalar":i=C.PLAIN,l=Zi(s,c);break;case"single-quoted-scalar":i=C.QUOTE_SINGLE,l=Yi(s,c);break;case"double-quoted-scalar":i=C.QUOTE_DOUBLE,l=Qi(s,c);break;default:return t(o,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${a}`),{value:"",type:null,comment:"",range:[n,n+s.length,n+s.length]}}let f=n+s.length,d=ve(r,f,e,t);return{value:l,type:i,comment:d.comment,range:[n,f,d.offset]}}function Zi(o,e){let t="";switch(o[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${o[0]}`;break}case"@":case"`":{t=`reserved character ${o[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),nr(o)}function Yi(o,e){return(o[o.length-1]!=="'"||o.length===1)&&e(o.length,"MISSING_CHAR","Missing closing 'quote"),nr(o.slice(1,-1)).replace(/''/g,"'")}function nr(o){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(o);if(!n)return o;let a=n[1],s=" ",r=e.lastIndex;for(t.lastIndex=r;n=t.exec(o);)n[1]===""?s===`
`?a+=s:s=`
`:(a+=s+n[1],s=" "),r=t.lastIndex;let i=/[ \t]*(.*)/sy;return i.lastIndex=r,n=i.exec(o),a+s+(n?.[1]??"")}function Qi(o,e){let t="";for(let n=1;n<o.length-1;++n){let a=o[n];if(!(a==="\r"&&o[n+1]===`
`))if(a===`
`){let{fold:s,offset:r}=$i(o,n);t+=s,n=r}else if(a==="\\"){let s=o[++n],r=el[s];if(r)t+=r;else if(s===`
`)for(s=o[n+1];s===" "||s==="	";)s=o[++n+1];else if(s==="\r"&&o[n+1]===`
`)for(s=o[++n+1];s===" "||s==="	";)s=o[++n+1];else if(s==="x"||s==="u"||s==="U"){let i=s==="x"?2:s==="u"?4:8;t+=tl(o,n+1,i,e),n+=i}else{let i=o.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${i}`),t+=i}}else if(a===" "||a==="	"){let s=n,r=o[n+1];for(;r===" "||r==="	";)r=o[++n+1];r!==`
`&&!(r==="\r"&&o[n+2]===`
`)&&(t+=n>s?o.slice(s,n+1):a)}else t+=a}return(o[o.length-1]!=='"'||o.length===1)&&e(o.length,"MISSING_CHAR",'Missing closing "quote'),t}function $i(o,e){let t="",n=o[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&o[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=o[e+1];return t||(t=" "),{fold:t,offset:e}}function tl(o,e,t,n){let a=o.substr(e,t),r=a.length===t&&/^[0-9a-fA-F]+$/.test(a)?parseInt(a,16):NaN;try{return String.fromCodePoint(r)}catch{let i=o.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${i}`),i}}var el,Xa=E(()=>{K();lt();el={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"\x85",_:"\xA0",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"}});function Za(o,e,t,n){let{value:a,type:s,comment:r,range:i}=e.type==="block-scalar"?qn(o,e,n):Hn(e,o.options.strict,n),l=t?o.directives.tagName(t.source,d=>n(t,"TAG_RESOLVE_FAILED",d)):null,c;o.options.stringKeys&&o.atKey?c=o.schema[ee]:l?c=nl(o.schema,a,l,t,n):e.type==="scalar"?c=al(o,a,e,n):c=o.schema[ee];let f;try{let d=c.resolve(a,p=>n(t??e,"TAG_RESOLVE_FAILED",p),o.options);f=A(d)?d:new C(d)}catch(d){let p=d instanceof Error?d.message:String(d);n(t??e,"TAG_RESOLVE_FAILED",p),f=new C(a)}return f.range=i,f.source=a,s&&(f.type=s),l&&(f.tag=l),c.format&&(f.format=c.format),r&&(f.comment=r),f}function nl(o,e,t,n,a){if(t==="!")return o[ee];let s=[];for(let i of o.tags)if(!i.collection&&i.tag===t)if(i.default&&i.test)s.push(i);else return i;for(let i of s)if(i.test?.test(e))return i;let r=o.knownTags[t];return r&&!r.collection?(o.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(a(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),o[ee])}function al({atKey:o,directives:e,schema:t},n,a,s){let r=t.tags.find(i=>(i.default===!0||o&&i.default==="key")&&i.test?.test(n))||t[ee];if(t.compat){let i=t.compat.find(l=>l.default&&l.test?.test(n))??t[ee];if(r.tag!==i.tag){let l=e.tagString(r.tag),c=e.tagString(i.tag),f=`Value may be parsed as either ${l} or ${c}`;s(a,"TAG_RESOLVE_FAILED",f,!0)}}return r}var ar=E(()=>{q();K();Ja();Xa()});function or(o,e,t){if(e){t??(t=e.length);for(let n=t-1;n>=0;--n){let a=e[n];switch(a.type){case"space":case"comment":case"newline":o-=a.source.length;continue}for(a=e[++n];a?.type==="space";)o+=a.source.length,a=e[++n];break}}return o}var sr=E(()=>{});function Ya(o,e,t,n){let a=o.atKey,{spaceBefore:s,comment:r,anchor:i,tag:l}=t,c,f=!0;switch(e.type){case"alias":c=sl(o,e,n),(i||l)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Za(o,e,l,n),i&&(c.anchor=i.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=er(ol,o,e,t,n),i&&(c.anchor=i.source.substring(1))}catch(d){let p=d instanceof Error?d.message:String(d);n(e,"RESOURCE_EXHAUSTION",p)}break;default:{let d=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",d),f=!1}}return c??(c=_n(o,e.offset,void 0,null,t,n)),i&&c.anchor===""&&n(i,"BAD_ALIAS","Anchor cannot be an empty string"),a&&o.options.stringKeys&&(!A(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&n(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),s&&(c.spaceBefore=!0),r&&(e.type==="scalar"&&e.source===""?c.comment=r:c.commentBefore=r),o.options.keepSourceTokens&&f&&(c.srcToken=e),c}function _n(o,e,t,n,{spaceBefore:a,comment:s,anchor:r,tag:i,end:l},c){let f={type:"scalar",offset:or(e,t,n),indent:-1,source:""},d=Za(o,f,i,c);return r&&(d.anchor=r.source.substring(1),d.anchor===""&&c(r,"BAD_ALIAS","Anchor cannot be an empty string")),a&&(d.spaceBefore=!0),s&&(d.comment=s,d.range[2]=l),d}function sl({options:o},{offset:e,source:t,end:n},a){let s=new de(t.substring(1));s.source===""&&a(e,"BAD_ALIAS","Alias cannot be an empty string"),s.source.endsWith(":")&&a(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);let r=e+t.length,i=ve(n,r,o.strict,a);return s.range=[e,r,i.offset],i.comment&&(s.comment=i.comment),s}var ol,rr=E(()=>{bt();q();tr();ar();lt();sr();ol={composeNode:Ya,composeEmptyNode:_n}});function ir(o,e,{offset:t,start:n,value:a,end:s},r){let i=Object.assign({_directives:e},o),l=new he(void 0,i),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},f=ke(n,{indicator:"doc-start",next:a??s?.[0],offset:t,onError:r,parentIndent:0,startOnNewline:!0});f.found&&(l.directives.docStart=!0,a&&(a.type==="block-map"||a.type==="block-seq")&&!f.hasNewline&&r(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=a?Ya(c,a,f,r):_n(c,f.end,n,null,f,r);let d=l.contents.range[2],p=ve(s,d,!1,r);return p.comment&&(l.comment=p.comment),l.range=[t,d,p.offset],l}var lr=E(()=>{It();rr();lt();Ut()});function qt(o){if(typeof o=="number")return[o,o+1];if(Array.isArray(o))return o.length===2?o:[o[0],o[1]];let{offset:e,source:t}=o;return[e,e+(typeof t=="string"?t.length:1)]}function cr(o){let e="",t=!1,n=!1;for(let a=0;a<o.length;++a){let s=o[a];switch(s[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(s.substring(1)||" "),t=!0,n=!1;break;case"%":o[a+1]?.[0]!=="#"&&(a+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}var Ue,Qa=E(()=>{ma();It();Pt();q();lr();lt();Ue=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,a,s)=>{let r=qt(t);s?this.warnings.push(new Ge(r,n,a)):this.errors.push(new Q(r,n,a))},this.directives=new be({version:e.version||"1.2"}),this.options=e}decorate(e,t){let{comment:n,afterEmptyLine:a}=cr(this.prelude);if(n){let s=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(a||e.directives.docStart||!s)e.commentBefore=n;else if(H(s)&&!s.flow&&s.items.length>0){let r=s.items[0];R(r)&&(r=r.key);let i=r.commentBefore;r.commentBefore=i?`${n}
${i}`:n}else{let r=s.commentBefore;s.commentBefore=r?`${n}
${r}`:n}}if(t){for(let s=0;s<this.errors.length;++s)e.errors.push(this.errors[s]);for(let s=0;s<this.warnings.length;++s)e.warnings.push(this.warnings[s])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:cr(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(let a of e)yield*this.next(a);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,a)=>{let s=qt(e);s[0]+=t,this.onError(s,"BAD_DIRECTIVE",n,a)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{let t=ir(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{let t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Q(qt(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){let n="Unexpected doc-end without preceding document";this.errors.push(new Q(qt(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;let t=ve(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){let n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new Q(qt(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let n=Object.assign({_directives:this.directives},this.options),a=new he(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),a.range=[0,t,t],this.decorate(a,!1),yield a}}}});function dr(o,e=!0,t){if(o){let n=(a,s,r)=>{let i=typeof a=="number"?a:Array.isArray(a)?a[0]:a.offset;if(t)t(i,s,r);else throw new Q([i,i+1],s,r)};switch(o.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Hn(o,e,n);case"block-scalar":return qn({options:{strict:e}},o,n)}}return null}function fr(o,e){let{implicitKey:t=!1,indent:n,inFlow:a=!1,offset:s=-1,type:r="PLAIN"}=e,i=Ne({type:r,value:o},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:a,options:{blockQuote:!0,lineWidth:-1}}),l=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(i[0]){case"|":case">":{let c=i.indexOf(`
`),f=i.substring(0,c),d=i.substring(c+1)+`
`,p=[{type:"block-scalar-header",offset:s,indent:n,source:f}];return ur(p,l)||p.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:s,indent:n,props:p,source:d}}case'"':return{type:"double-quoted-scalar",offset:s,indent:n,source:i,end:l};case"'":return{type:"single-quoted-scalar",offset:s,indent:n,source:i,end:l};default:return{type:"scalar",offset:s,indent:n,source:i,end:l}}}function pr(o,e,t={}){let{afterKey:n=!1,implicitKey:a=!1,inFlow:s=!1,type:r}=t,i="indent"in o?o.indent:null;if(n&&typeof i=="number"&&(i+=2),!r)switch(o.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{let c=o.props[0];if(c.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r=c.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}let l=Ne({type:r,value:e},{implicitKey:a||i===null,indent:i!==null&&i>0?" ".repeat(i):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}});switch(l[0]){case"|":case">":rl(o,l);break;case'"':$a(o,l,"double-quoted-scalar");break;case"'":$a(o,l,"single-quoted-scalar");break;default:$a(o,l,"scalar")}}function rl(o,e){let t=e.indexOf(`
`),n=e.substring(0,t),a=e.substring(t+1)+`
`;if(o.type==="block-scalar"){let s=o.props[0];if(s.type!=="block-scalar-header")throw new Error("Invalid block scalar header");s.source=n,o.source=a}else{let{offset:s}=o,r="indent"in o?o.indent:-1,i=[{type:"block-scalar-header",offset:s,indent:r,source:n}];ur(i,"end"in o?o.end:void 0)||i.push({type:"newline",offset:-1,indent:r,source:`
`});for(let l of Object.keys(o))l!=="type"&&l!=="offset"&&delete o[l];Object.assign(o,{type:"block-scalar",indent:r,props:i,source:a})}}function ur(o,e){if(e)for(let t of e)switch(t.type){case"space":case"comment":o.push(t);break;case"newline":return o.push(t),!0}return!1}function $a(o,e,t){switch(o.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":o.type=t,o.source=e;break;case"block-scalar":{let n=o.props.slice(1),a=e.length;o.props[0].type==="block-scalar-header"&&(a-=o.props[0].source.length);for(let s of n)s.offset+=a;delete o.props,Object.assign(o,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{let a={type:"newline",offset:o.offset+e.length,indent:o.indent,source:`
`};delete o.items,Object.assign(o,{type:t,source:e,end:[a]});break}default:{let n="indent"in o?o.indent:-1,a="end"in o&&Array.isArray(o.end)?o.end.filter(s=>s.type==="space"||s.type==="comment"||s.type==="newline"):[];for(let s of Object.keys(o))s!=="type"&&s!=="offset"&&delete o[s];Object.assign(o,{type:t,indent:n,source:e,end:a})}}}var hr=E(()=>{Ja();Xa();Pt();Nt()});function Vn(o){switch(o.type){case"block-scalar":{let e="";for(let t of o.props)e+=Vn(t);return e+o.source}case"block-map":case"block-seq":{let e="";for(let t of o.items)e+=jn(t);return e}case"flow-collection":{let e=o.start.source;for(let t of o.items)e+=jn(t);for(let t of o.end)e+=t.source;return e}case"document":{let e=jn(o);if(o.end)for(let t of o.end)e+=t.source;return e}default:{let e=o.source;if("end"in o&&o.end)for(let t of o.end)e+=t.source;return e}}}function jn({start:o,key:e,sep:t,value:n}){let a="";for(let s of o)a+=s.source;if(e&&(a+=Vn(e)),t)for(let s of t)a+=s.source;return n&&(a+=Vn(n)),a}var mr,gr=E(()=>{mr=o=>"type"in o?Vn(o):jn(o)});function Be(o,e){"type"in o&&o.type==="document"&&(o={start:o.start,value:o.value}),br(Object.freeze([]),o,e)}function br(o,e,t){let n=t(e,o);if(typeof n=="symbol")return n;for(let a of["key","value"]){let s=e[a];if(s&&"items"in s){for(let r=0;r<s.items.length;++r){let i=br(Object.freeze(o.concat([[a,r]])),s.items[r],t);if(typeof i=="number")r=i-1;else{if(i===eo)return eo;i===yr&&(s.items.splice(r,1),r-=1)}}typeof n=="function"&&a==="key"&&(n=n(e,o))}}return typeof n=="function"?n(e,o):n}var eo,il,yr,wr=E(()=>{eo=Symbol("break visit"),il=Symbol("skip children"),yr=Symbol("remove item");Be.BREAK=eo;Be.SKIP=il;Be.REMOVE=yr;Be.itemAtPath=(o,e)=>{let t=o;for(let[n,a]of e){let s=t?.[n];if(s&&"items"in s)t=s.items[a];else return}return t};Be.parentCollection=(o,e)=>{let t=Be.itemAtPath(o,e.slice(0,-1)),n=e[e.length-1][0],a=t?.[n];if(a&&"items"in a)return a;throw new Error("Parent collection not found")}});var Kn={};ia(Kn,{BOM:()=>Ht,DOCUMENT:()=>_t,FLOW_END:()=>jt,SCALAR:()=>ct,createScalarToken:()=>fr,isCollection:()=>ll,isScalar:()=>cl,prettyToken:()=>dl,resolveAsScalar:()=>dr,setScalarValue:()=>pr,stringify:()=>mr,tokenType:()=>to,visit:()=>Be});function dl(o){switch(o){case Ht:return"<BOM>";case _t:return"<DOC>";case jt:return"<FLOW_END>";case ct:return"<SCALAR>";default:return JSON.stringify(o)}}function to(o){switch(o){case Ht:return"byte-order-mark";case _t:return"doc-mode";case jt:return"flow-error-end";case ct:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(o[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}var Ht,_t,jt,ct,ll,cl,Gn=E(()=>{hr();gr();wr();Ht="\uFEFF",_t="",jt="",ct="",ll=o=>!!o&&"items"in o,cl=o=>!!o&&(o.type==="scalar"||o.type==="single-quoted-scalar"||o.type==="double-quoted-scalar"||o.type==="block-scalar")});function me(o){switch(o){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}var kr,fl,Wn,pl,no,We,ao=E(()=>{Gn();kr=new Set("0123456789ABCDEFabcdef"),fl=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Wn=new Set(",[]{}"),pl=new Set(` ,[]{}
\r	`),no=o=>!o||pl.has(o),We=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){let a=this.buffer[n+e+1];if(a===`
`||!a&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){let n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&me(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Ht&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){let s=e[n-1];if(s===" "||s==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){let s=e[t-1];if(s===" "||s==="	")t-=1;else break}let a=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-a),this.pushNewline(),"stream"}if(this.atLineEnd()){let t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield _t,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");let t=this.peek(3);if((t==="---"||t==="...")&&me(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!me(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&me(t)){let n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(no),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);let a=this.getLine();if(a===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&a[0]!=="#"||n===0&&(a.startsWith("---")||a.startsWith("..."))&&me(a[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(a[0]==="]"||a[0]==="}")))return this.flowLevel=0,yield jt,yield*this.parseLineStart();let s=0;for(;a[s]===",";)s+=yield*this.pushCount(1),s+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(s+=yield*this.pushIndicators(),a[s]){case void 0:return"flow";case"#":return yield*this.pushCount(a.length-s),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(no),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{let r=this.charAt(1);if(this.flowKey||me(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let s=0;for(;this.buffer[t-1-s]==="\\";)s+=1;if(s%2===0)break;t=this.buffer.indexOf('"',t+1)}let n=this.buffer.substring(0,t),a=n.indexOf(`
`,this.pos);if(a!==-1){for(;a!==-1;){let s=this.continueScalar(a+1);if(s===-1)break;a=n.indexOf(`
`,s)}a!==-1&&(t=a-(n[a-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>me(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let s=this.pos;n=this.buffer[s];++s)switch(n){case" ":t+=1;break;case`
`:e=s,t=0;break;case"\r":{let r=this.buffer[s+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let s=this.continueScalar(e+1);if(s===-1)break;e=this.buffer.indexOf(`
`,s)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let a=e+1;for(n=this.buffer[a];n===" ";)n=this.buffer[++a];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++a];e=a-1}else if(!this.blockScalarKeep)do{let s=e-1,r=this.buffer[s];r==="\r"&&(r=this.buffer[--s]);let i=s;for(;r===" ";)r=this.buffer[--s];if(r===`
`&&s>=this.pos&&s+1+t>i)e=s;else break}while(!0);return yield ct,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,t=this.pos-1,n=this.pos-1,a;for(;a=this.buffer[++n];)if(a===":"){let s=this.buffer[n+1];if(me(s)||e&&Wn.has(s))break;t=n}else if(me(a)){let s=this.buffer[n+1];if(a==="\r"&&(s===`
`?(n+=1,a=`
`,s=this.buffer[n+1]):t=n),s==="#"||e&&Wn.has(s))break;if(a===`
`){let r=this.continueScalar(n+1);if(r===-1)break;n=Math.max(n,r-2)}}else{if(e&&Wn.has(a))break;t=n}return!a&&!this.atEnd?this.setNext("plain-scalar"):(yield ct,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){let n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(no),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{let t=this.flowLevel>0,n=this.charAt(1);if(me(n)||t&&Wn.has(n)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!me(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(fl.has(t))t=this.buffer[++e];else if(t==="%"&&kr.has(this.buffer[e+1])&&kr.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");let a=t-this.pos;return a>0&&(yield this.buffer.substr(this.pos,a),this.pos=t),a}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}});var ze,oo=E(()=>{ze=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){let s=t+n>>1;this.lineStarts[s]<e?t=s+1:n=s}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};let a=this.lineStarts[t-1];return{line:t,col:e-a+1}}}}});function qe(o,e){for(let t=0;t<o.length;++t)if(o[t].type===e)return!0;return!1}function vr(o){for(let e=0;e<o.length;++e)switch(o[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function xr(o){switch(o?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function zn(o){switch(o.type){case"document":return o.start;case"block-map":{let e=o.items[o.items.length-1];return e.sep??e.start}case"block-seq":return o.items[o.items.length-1].start;default:return[]}}function dt(o){if(o.length===0)return[];let e=o.length;e:for(;--e>=0;)switch(o[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;o[++e]?.type==="space";);return o.splice(e,o.length)}function Jn(o,e){if(e.length<1e5)Array.prototype.push.apply(o,e);else for(let t=0;t<e.length;++t)o.push(e[t])}function Sr(o){if(o.start.type==="flow-seq-start")for(let e of o.items)e.sep&&!e.value&&!qe(e.start,"explicit-key-ind")&&!qe(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,xr(e.value)?e.value.end?Jn(e.value.end,e.sep):e.value.end=e.sep:Jn(e.start,e.sep),delete e.sep)}var He,so=E(()=>{Gn();ao();He=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new We,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let t=to(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{let n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){let t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{let n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Sr(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{let a=n.items[n.items.length-1];if(a.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(a.sep)a.value=t;else{Object.assign(a,{key:t,sep:[]}),this.onKeyLine=!a.explicitKey;return}break}case"block-seq":{let a=n.items[n.items.length-1];a.value?n.items.push({start:[],value:t}):a.value=t;break}case"flow-collection":{let a=n.items[n.items.length-1];!a||a.value?n.items.push({start:[],key:t,sep:[]}):a.sep?a.value=t:Object.assign(a,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){let a=t.items[t.items.length-1];a&&!a.sep&&!a.value&&a.start.length>0&&vr(a.start)===-1&&(t.indent===0||a.start.every(s=>s.type!=="comment"||s.indent<t.indent))&&(n.type==="document"?n.end=a.start:n.items.push({start:a.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{let e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{vr(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}let t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){let t=zn(this.peek(2)),n=dt(t),a;e.end?(a=e.end,a.push(this.sourceToken),delete e.end):a=[this.sourceToken];let s={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){let t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){let n="end"in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type==="comment"?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){let a=e.items[e.items.length-2]?.value?.end;if(Array.isArray(a)){Jn(a,t.start),a.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let n=!this.onKeyLine&&this.indent===e.indent,a=n&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind",s=[];if(a&&t.sep&&!t.value){let r=[];for(let i=0;i<t.sep.length;++i){let l=t.sep[i];switch(l.type){case"newline":r.push(i);break;case"space":break;case"comment":l.indent>e.indent&&(r.length=0);break;default:r.length=0}}r.length>=2&&(s=t.sep.splice(r[1]))}switch(this.type){case"anchor":case"tag":a||t.value?(s.push(this.sourceToken),e.items.push({start:s}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):a||t.value?(s.push(this.sourceToken),e.items.push({start:s,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(qe(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]});else if(xr(t.key)&&!qe(t.sep,"newline")){let r=dt(t.start),i=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:i,sep:l}]})}else s.length>0?t.sep=t.sep.concat(s,this.sourceToken):t.sep.push(this.sourceToken);else if(qe(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{let r=dt(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||a?e.items.push({start:s,key:null,sep:[this.sourceToken]}):qe(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{let r=this.flowScalar(this.type);a||t.value?(e.items.push({start:s,key:r,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(r):(Object.assign(t,{key:r,sep:[]}),this.onKeyLine=!0);return}default:{let r=this.startBlockValue(e);if(r){if(r.type==="block-seq"){if(!t.explicitKey&&t.sep&&!qe(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else n&&e.items.push({start:s});this.stack.push(r);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){let t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){let n="end"in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type==="comment"?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){let a=e.items[e.items.length-2]?.value?.end;if(Array.isArray(a)){Jn(a,t.start),a.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||qe(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){let n=this.startBlockValue(e);if(n){this.stack.push(n);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{let a=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:a,sep:[]}):t.sep?this.stack.push(a):Object.assign(t,{key:a,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}let n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{let n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){let a=zn(n),s=dt(a);Sr(e);let r=e.end.splice(1,e.end.length);r.push(this.sourceToken);let i={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;let t=zn(e),n=dt(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;let t=zn(e),n=dt(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}});function Tr(o){let e=o.prettyErrors!==!1;return{lineCounter:o.lineCounter||e&&new ze||null,prettyErrors:e}}function ro(o,e={}){let{lineCounter:t,prettyErrors:n}=Tr(e),a=new He(t?.addNewLine),s=new Ue(e),r=Array.from(s.compose(a.parse(o)));if(n&&t)for(let i of r)i.errors.forEach(Rt(o,t)),i.warnings.forEach(Rt(o,t));return r.length>0?r:Object.assign([],{empty:!0},s.streamInfo())}function Xn(o,e={}){let{lineCounter:t,prettyErrors:n}=Tr(e),a=new He(t?.addNewLine),s=new Ue(e),r=null;for(let i of s.compose(a.parse(o),!0,o.length))if(!r)r=i;else if(r.options.logLevel!=="silent"){r.errors.push(new Q(i.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(r.errors.forEach(Rt(o,t)),r.warnings.forEach(Rt(o,t))),r}function io(o,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);let a=Xn(o,t);if(!a)return null;if(a.warnings.forEach(s=>gn(a.options.logLevel,s)),a.errors.length>0){if(a.options.logLevel!=="silent")throw a.errors[0];a.errors=[]}return a.toJS(Object.assign({reviver:n},t))}function lo(o,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){let a=Math.round(t);t=a<1?void 0:a>8?{indent:8}:{indent:a}}if(o===void 0){let{keepUndefined:a}=t??e??{};if(!a)return}return ne(o)&&!n?o.toString(t):new he(o,n,t).toString(t)}var Nr=E(()=>{Qa();It();Pt();Sa();q();oo();so()});var co={};ia(co,{Alias:()=>de,CST:()=>Kn,Composer:()=>Ue,Document:()=>he,Lexer:()=>We,LineCounter:()=>ze,Pair:()=>j,Parser:()=>He,Scalar:()=>C,Schema:()=>Ve,YAMLError:()=>Ke,YAMLMap:()=>V,YAMLParseError:()=>Q,YAMLSeq:()=>z,YAMLWarning:()=>Ge,isAlias:()=>te,isCollection:()=>H,isDocument:()=>ne,isMap:()=>ae,isNode:()=>P,isPair:()=>R,isScalar:()=>A,isSeq:()=>oe,parse:()=>io,parseAllDocuments:()=>ro,parseDocument:()=>Xn,stringify:()=>lo,visit:()=>se,visitAsync:()=>Ze});var fo=E(()=>{Qa();It();ja();Pt();bt();q();Ae();K();Oe();Ie();Gn();ao();oo();so();Nr();yt()});var Er={};ia(Er,{Alias:()=>de,CST:()=>Kn,Composer:()=>Ue,Document:()=>he,Lexer:()=>We,LineCounter:()=>ze,Pair:()=>j,Parser:()=>He,Scalar:()=>C,Schema:()=>Ve,YAMLError:()=>Ke,YAMLMap:()=>V,YAMLParseError:()=>Q,YAMLSeq:()=>z,YAMLWarning:()=>Ge,default:()=>ul,isAlias:()=>te,isCollection:()=>H,isDocument:()=>ne,isMap:()=>ae,isNode:()=>P,isPair:()=>R,isScalar:()=>A,isSeq:()=>oe,parse:()=>io,parseAllDocuments:()=>ro,parseDocument:()=>Xn,stringify:()=>lo,visit:()=>se,visitAsync:()=>Ze});var ul,Cr=E(()=>{fo();fo();ul=co});var Zn=_((Yh,Dr)=>{"use strict";var Lr=require("obsidian"),Vt=new Map;function po(o){if(!o)return null;let e=o.match(/^---\r?\n([\s\S]*?)\r?\n---/);return e?e[1]:null}function uo(o){if(!o||!o.trim())return{};try{if(typeof Lr.parseYaml=="function"){let n=Lr.parseYaml(o);if(n&&typeof n=="object")return n}}catch{}try{let a=(Cr(),yi(Er)).parse(o);if(a&&typeof a=="object")return a}catch{}let e={},t=o.split(/\r?\n/);for(let n of t){let a=n.indexOf(":");if(a>0&&!n.startsWith(" ")&&!n.startsWith("	")){let s=n.slice(0,a).trim(),r=n.slice(a+1).trim();r==="true"?r=!0:r==="false"?r=!1:/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),e[s]=r}}return e}function Fr(o,e){if(!e)return{};let t=o?.metadataCache?.getFileCache(e)?.frontmatter;if(t&&typeof t=="object"&&Object.keys(t).length>0)return Vt.set(e.path,{mtime:e.stat?.mtime||0,frontmatter:t}),t;let n=Vt.get(e.path);if(n&&e.stat&&n.mtime===e.stat.mtime)return n.frontmatter;if(o?.workspace){let a=o.workspace.getLeavesOfType("markdown");for(let s of a)if(s.view&&s.view.file&&s.view.file.path===e.path&&typeof s.view.getViewData=="function"){let r=s.view.getViewData(),i=po(r);if(i!==null){let l=uo(i);return Vt.set(e.path,{mtime:e.stat?.mtime||0,frontmatter:l}),l}}}return n&&n.frontmatter?n.frontmatter:{}}async function hl(o,e){if(!e)return{};let t=Fr(o,e);if(t&&Object.keys(t).length>0)return t;try{let n=typeof o.vault.cachedRead=="function"?await o.vault.cachedRead(e):await o.vault.read(e),a=po(n),s=a!==null?uo(a):{};return Vt.set(e.path,{mtime:e.stat?.mtime||0,frontmatter:s}),s}catch{return t||{}}}function ml(o){o&&Vt.delete(o)}Dr.exports={getNoteFrontmatter:Fr,getNoteFrontmatterAsync:hl,invalidateFrontmatterCache:ml,extractFrontmatterString:po,parseFrontmatterText:uo}});var Gt=_((Qh,Or)=>{"use strict";var Se=require("obsidian"),{isPublishIntent:Ar}=le(),{getNoteFrontmatter:Kt,getNoteFrontmatterAsync:gl,invalidateFrontmatterCache:Yn}=Zn(),Mr={unpublished:{icon:"cloud-off",color:"var(--stnd-status-local)",label:"Local"},local:{icon:"cloud-off",color:"var(--stnd-status-local)",label:"Local"},pending:{icon:"upload-cloud",color:"var(--stnd-status-pending)",label:"Queued"},synced:{icon:"check-circle",color:"var(--stnd-status-synced)",label:"Synced"},changed:{icon:"upload-cloud",color:"var(--stnd-status-modified)",label:"Modified"},outdated:{icon:"arrow-down-circle",color:"var(--stnd-status-outdated)",label:"Outdated"},desynced:{icon:"alert-circle",color:"var(--stnd-status-desynced)",label:"Unpublished (online)"},public:{icon:"globe",color:"var(--stnd-status-synced)",label:"Synced"},unlisted:{icon:"eye-off",color:"var(--stnd-status-synced)",label:"Synced (unlisted)"},private:{icon:"lock",color:"var(--stnd-status-synced)",label:"Synced (private)"}},ho=class{constructor(e,t){this.app=e,this.plugin=t,this.statusBarEl=null,this.ribbonEl=null,this.noteStatuses=new Map,this.checkingFiles=new Set}async load(){let e=()=>this.refreshAll();this.plugin.registerEvent(this.app.workspace.on("file-open",e)),this.plugin.registerEvent(this.app.workspace.on("active-leaf-change",e)),this.plugin.registerEvent(this.app.workspace.on("layout-change",e)),this.plugin.registerEvent(this.app.metadataCache.on("changed",t=>{Yn(t.path),this.refreshForFile(t)})),this.plugin.registerEvent(this.app.metadataCache.on("resolve",t=>{Yn(t.path),this.refreshForFile(t)})),this.plugin.registerEvent(this.app.vault.on("modify",t=>{Yn(t.path),this.refreshForFile(t)})),this.plugin.registerEvent(this.app.vault.on("delete",t=>{Yn(t.path),this.noteStatuses.delete(t.path)})),this.app.workspace.onLayoutReady(e)}async unload(){this.cleanupAll()}cleanupAll(){this.app.workspace.getLeavesOfType("markdown").forEach(e=>{let t=e.view&&e.view._stndPublishAction;t&&(t.remove(),delete e.view._stndPublishAction);let n=e.view&&e.view._stndBottomIndicator;n&&(n.remove(),delete e.view._stndBottomIndicator)}),this.statusBarEl&&(this.statusBarEl.remove(),this.statusBarEl=null),this.ribbonEl&&(this.ribbonEl.remove(),this.ribbonEl=null)}stateKey(e,t,n){let a=e||{},s=Ar(a),r=!!a["garden-url"]||!!a.url_public||a.published===!0||a.published==="true";if(!s)return r?"desynced":"unpublished";if(!r)return"pending";if(t&&this.noteStatuses){let l=this.noteStatuses.get(t);if(l&&(l.status==="outdated"||l.status==="changed"))return l.status}let i=this.plugin?.garden?.noteStatsCache||this.plugin?.panel?.noteStatsCache;if(i&&t){let l=i.get(t),c=l?.updated_at?new Date(l.updated_at).getTime():0,f=n?.stat?.mtime||0;if(c>0&&f>c+3e3)return"changed"}return"synced"}getStateInfo(e,t,n){let a=e||{},s=this.stateKey(a,t,n),r=Mr[s]||Mr.unpublished,i=Object.assign({},r),l=String(a.visibility||"public").toLowerCase().trim();return s==="synced"?l==="private"?(i.icon="lock",i.label="Synced (private)"):l==="unlisted"?(i.icon="eye-off",i.label="Synced (unlisted)"):(i.icon="globe",i.label="Synced (public)"):s==="changed"?i.label=l==="private"?"Modified (private)":l==="unlisted"?"Modified (unlisted)":"Modified":s==="outdated"?i.label="Outdated":s==="desynced"&&(i.icon="alert-circle",i.color="var(--stnd-status-desynced)",i.label="Unpublished locally (still online)"),{key:s,state:i,visibility:l}}async triggerStatusCheck(e){if(!(!e||this.checkingFiles.has(e.path)||!this.plugin.settings.apiKey)){this.checkingFiles.add(e.path);try{let n=await gl(this.app,e),a=Ar(n),s=n["garden-url"]!=null||n.url_public!=null||n.published===!0||n.published==="true";if(!s&&!a){this.noteStatuses.delete(e.path);return}if(!a&&s){this.noteStatuses.set(e.path,{status:"desynced",timestamp:Date.now()}),this.renderCurrentWidgets();return}let r=this.noteStatuses.get(e.path),i=Date.now(),l=this.plugin?.garden?.noteStatsCache||this.plugin?.panel?.noteStatsCache;if(l){let d=l.get(e.path),p=d?.updated_at?new Date(d.updated_at).getTime():0,h=e.stat?.mtime||0;p>0&&h>p+3e3&&(!r||r.status!=="changed")&&(this.noteStatuses.set(e.path,{status:"changed",remoteContent:r?r.remoteContent:null,timestamp:i}),this.renderCurrentWidgets())}if(r&&i-r.timestamp<1e4&&e.stat?.mtime<=r.timestamp)return;this.noteStatuses.has(e.path)||this.noteStatuses.set(e.path,{status:r?r.status:this.stateKey(n,e.path,e),remoteContent:r?r.remoteContent:null,timestamp:i});let c=this.plugin.garden;if(!c)return;let f=await c.checkNoteStatus(e);this.noteStatuses.set(e.path,{status:f.status,remoteContent:f.remoteContent,timestamp:Date.now()}),this.renderCurrentWidgets(),this.plugin.panel&&typeof this.plugin.panel.updateTopIndicator=="function"&&this.plugin.panel.updateTopIndicator(!0)}catch(n){console.error("Standard : Erreur lors de la v\xE9rification asynchrone du statut :",n)}finally{this.checkingFiles.delete(e.path)}}}refreshAll(){let e=!!this.plugin.settings.apiKey,t=this.plugin.settings.publishIndicatorStyle||"garden";if(!e&&t==="hidden"){this.cleanupAll();return}let n=this.app.workspace.getActiveFile();n&&e&&this.triggerStatusCheck(n),this.renderCurrentWidgets()}renderCurrentWidgets(){let e=!!this.plugin.settings.apiKey,t=this.plugin.settings.publishStatusLocation||"titlebar",n=this.plugin.settings.publishIndicatorStyle||"garden";if(!e&&n==="hidden"){this.cleanupAll();return}(t!=="titlebar"||!e||t==="hidden")&&this.app.workspace.getLeavesOfType("markdown").forEach(a=>{let s=a.view&&a.view._stndPublishAction;s&&(s.remove(),delete a.view._stndPublishAction)}),(t!=="statusbar"||!e||t==="hidden")&&this.statusBarEl&&(this.statusBarEl.remove(),this.statusBarEl=null),(t!=="ribbon"||!e||t==="hidden")&&this.ribbonEl&&(this.ribbonEl.remove(),this.ribbonEl=null),e&&t!=="hidden"&&(t==="titlebar"?this.app.workspace.getLeavesOfType("markdown").forEach(a=>this.refreshLeaf(a)):t==="statusbar"?this.refreshStatusBar():t==="ribbon"&&this.refreshRibbon()),this.app.workspace.getLeavesOfType("markdown").forEach(a=>{let s=a.view?._stndBottomIndicator||a.view?.containerEl?.querySelector(".stnd-bottom-indicator");s&&(s.remove(),a.view&&delete a.view._stndBottomIndicator)}),this.plugin.panel&&typeof this.plugin.panel.updateTopIndicator=="function"&&this.plugin.panel.updateTopIndicator(!1)}refreshForFile(e){let t=this.app.workspace.getActiveFile();t&&t.path===e.path?this.refreshAll():(this.app.workspace.getLeavesOfType("markdown").forEach(n=>{n.view&&n.view.file&&n.view.file.path===e.path&&this.plugin.settings.publishStatusLocation==="titlebar"&&this.refreshLeaf(n)}),this.plugin.panel&&typeof this.plugin.panel.updateTopIndicator=="function"&&this.plugin.panel.updateTopIndicator(!1))}refreshBottomIndicator(e,t,n=!1){let a=e?.view;if(!a||!a.containerEl||!a.file)return;let s=a._stndBottomIndicator;if(t==="hidden"){s&&(s.remove(),delete a._stndBottomIndicator);return}let r=Kt(this.app,a.file),{key:i,state:l}=this.getStateInfo(r,a.file.path,a.file);if(!s||!s.isConnected||!a.containerEl.contains(s)){let f=a.containerEl.querySelector(".stnd-bottom-indicator");f?s=f:(s=document.createElement("div"),s.className="stnd-bottom-indicator",a.containerEl.appendChild(s)),a._stndBottomIndicator=s}a.containerEl.style.position!=="relative"&&getComputedStyle(a.containerEl).position==="static"&&(a.containerEl.style.position="relative"),s.className=`stnd-bottom-indicator stnd-style-${t} stnd-state-${i}`;let c=l?.label||i;s.setAttribute("title",`Garden: ${c}`),n&&t==="garden"&&(s.classList.remove("stnd-growing"),s.offsetWidth,s.classList.add("stnd-growing"))}refreshLeaf(e){let t=e.view;if(!t||typeof t.addAction!="function"||!t.file)return;let n=Kt(this.app,t.file),{key:a,state:s}=this.getStateInfo(n,t.file.path,t.file),r=t._stndPublishAction;if(!r||!r.isConnected||!t.containerEl.contains(r)){let i=t.containerEl.querySelector(".stnd-publish-status");i?r=i:(r=t.addAction(s.icon,"Garden Status",l=>this.onClick(t,l)),r.addClass("stnd-publish-status")),t._stndPublishAction=r}Se.setIcon(r,s.icon),r.style.color=s.color,r.setAttribute("aria-label",`Garden Status \u2014 ${s.label}`),r.dataset.stndState=a}refreshStatusBar(){let e=this.app.workspace.getActiveFile();if(!e){this.statusBarEl&&(this.statusBarEl.style.display="none");return}let t=Kt(this.app,e),{key:n,state:a}=this.getStateInfo(t,e.path,e);this.statusBarEl||(this.statusBarEl=this.plugin.addStatusBarItem(),this.statusBarEl.addClass("stnd-publish-status-statusbar"),this.statusBarEl.style.cursor="pointer",this.statusBarEl.addEventListener("click",r=>{let i=this.app.workspace.getActiveViewOfType(Se.MarkdownView);i&&this.onClick(i,r)})),this.statusBarEl.style.display="",this.statusBarEl.empty();let s=this.statusBarEl.createSpan();Se.setIcon(s,a.icon),s.style.color=a.color,s.style.marginRight="6px",s.style.display="inline-flex",s.style.alignItems="center",this.statusBarEl.createSpan({text:`Garden: ${a.label}`}),this.statusBarEl.setAttribute("aria-label",`Garden Status \u2014 ${a.label}`)}refreshRibbon(){let e=this.app.workspace.getActiveFile();if(!e){this.ribbonEl&&(this.ribbonEl.style.display="none");return}let t=Kt(this.app,e),{key:n,state:a}=this.getStateInfo(t,e.path,e);this.ribbonEl||(this.ribbonEl=this.plugin.addRibbonIcon(a.icon,"Garden Status",s=>{let r=this.app.workspace.getActiveViewOfType(Se.MarkdownView);r&&this.onClick(r,s)}),this.ribbonEl.addClass("stnd-publish-status-ribbon")),this.ribbonEl.style.display="",Se.setIcon(this.ribbonEl,a.icon),this.ribbonEl.style.color=a.color,this.ribbonEl.setAttribute("aria-label",`Garden Status \u2014 ${a.label}`)}onClick(e,t){let n=e.file;if(!n)return;let a=this.plugin.garden;if(!a)return;let s=Kt(this.app,n),r=this.stateKey(s,n.path,n),i=new Se.Menu,l=async()=>{if(!a.checkApiKeyAndShowModal())return;let c=await a.publishWithCheck(n);if(c!==null){if(new Se.Notice(c?`Standard: "${n.basename}" published.`:`Standard: Failed to publish "${n.basename}".`),c){let f=e.leaf||{view:e},d=this.plugin.settings.publishIndicatorStyle||"garden";this.refreshBottomIndicator(f,d,!0)}c&&a.plugin.settings.openAfterPublish&&a.viewLiveVersion(n)}this.refreshAll()};if(r==="desynced")i.addItem(c=>c.setTitle("Remove from Garden (delete online note)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await a.deleteOnlineVersion(n),this.refreshAll()})),i.addItem(c=>c.setTitle("Republish (set publish: true)").setIcon("upload-cloud").onClick(async()=>{await this.app.fileManager.processFrontMatter(n,f=>{f.publish=!0,"status"in f&&delete f.status}),await l()})),i.addItem(c=>c.setTitle("View live version").setIcon("external-link").onClick(()=>a.viewLiveVersion(n)));else if(r==="unpublished"||r==="pending")i.addItem(c=>c.setTitle("Publish to Garden").setIcon("upload-cloud").onClick(()=>l()));else if(r==="outdated"){let f=this.noteStatuses.get(n.path)?.remoteContent||"";i.addItem(d=>d.setTitle("Pull remote changes (overwrite local)").setIcon("arrow-down-circle").onClick(async()=>{f?(await this.app.vault.modify(n,f),new Se.Notice("Standard: Local file updated with remote version."),this.noteStatuses.set(n.path,{status:"synced",timestamp:Date.now()}),this.refreshAll()):new Se.Notice("Standard: Remote content not found.")})),i.addItem(d=>d.setTitle("Force publish local").setIcon("refresh-cw").onClick(()=>l())),i.addItem(d=>d.setTitle("View online").setIcon("external-link").onClick(()=>a.viewLiveVersion(n))),i.addSeparator(),i.addItem(d=>d.setTitle("Remove from Garden (unpublish)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await a.deleteOnlineVersion(n),this.refreshAll()}))}else r==="changed"?(i.addItem(c=>c.setTitle("Publish local changes").setIcon("upload-cloud").onClick(()=>l())),i.addItem(c=>c.setTitle("View online").setIcon("external-link").onClick(()=>a.viewLiveVersion(n))),i.addSeparator(),i.addItem(c=>c.setTitle("Remove from Garden (unpublish)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await a.deleteOnlineVersion(n),this.refreshAll()}))):(i.addItem(c=>c.setTitle("View online").setIcon("external-link").onClick(()=>a.viewLiveVersion(n))),i.addItem(c=>c.setTitle("Re-publish").setIcon("refresh-cw").onClick(()=>l())),i.addSeparator(),i.addItem(c=>c.setTitle("Remove from Garden (unpublish)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await a.deleteOnlineVersion(n),this.refreshAll()})));i.addSeparator(),i.addItem(c=>c.setTitle("Sync all notes").setIcon("folder-sync").onClick(async()=>{await a.syncAllPublished();let f=this.app.workspace.getActiveViewOfType(Se.MarkdownView);if(f){let d=f.leaf||{view:f},p=this.plugin.settings.publishIndicatorStyle||"garden";this.refreshBottomIndicator(d,p,!0)}})),i.showAtMouseEvent(t)}};Or.exports={PublishStatusFeature:ho}});var Pr=_(($h,Rr)=>{"use strict";var M=require("obsidian"),{KNOWN_TOKENS:yl,isPublishIntent:_e,isImageFile:Qn,isPdfFile:Ir,isAttachmentFile:mo,getMimeType:bl}=le(),{StndConfirmModal:go}=da(),{StndAskModal:wl}=ls(),{StndShareModal:kl}=ua(),{getNoteFrontmatter:vl,getNoteFrontmatterAsync:yo}=Zn();function $(o){return String(o).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[æ]/gi,"ae").replace(/[œ]/gi,"oe").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}var Wt=class{constructor(e,t){this.app=e,this.files=t,this.byNanoId=new Map,this.bySlug=new Map,this.byTitleSlug=new Map,this.byBasenameSlug=new Map,this.byGardenUrl=new Map;for(let n of t){let a=vl(e,n);if(a["garden-short"]){let i=String(a["garden-short"]).match(/stnd\.gd\/([a-zA-Z0-9_-]+)/);i&&this.byNanoId.set(i[1],n)}let s=a.permalink??a.slug;if(s!=null){let i=String(s).replace(/^\/+|\/+$/g,""),l=i===""?"~root":i;this.bySlug.set(l,n)}if(a.title){let i=$(a.title);i&&this.byTitleSlug.set(i,n)}let r=$(n.basename);if(r&&this.byBasenameSlug.set(r,n),a["garden-url"]){let i=String(a["garden-url"]).toLowerCase().trim().replace(/\/$/,"");this.byGardenUrl.set(i,n)}}}findMatchForRemote(e){if(!e)return null;if(e.nano_id&&this.byNanoId.has(e.nano_id))return this.byNanoId.get(e.nano_id);if(e.slug&&this.bySlug.has(e.slug))return this.bySlug.get(e.slug);if(e.slug&&this.byTitleSlug.has(e.slug))return this.byTitleSlug.get(e.slug);if(e.slug&&this.byBasenameSlug.has(e.slug))return this.byBasenameSlug.get(e.slug);if(e.title){let t=$(e.title);if(t){if(this.bySlug.has(t))return this.bySlug.get(t);if(this.byTitleSlug.has(t))return this.byTitleSlug.get(t);if(this.byBasenameSlug.has(t))return this.byBasenameSlug.get(t)}}return null}},bo=class extends M.Modal{constructor(e,t,n){super(e),this.total=t,this.breakdown=n||{},this.cancelled=!1,this.finished=!1,this.syncedNotes=[],this.pulledNotes=[],this.createdNotes=[],this.unpublishedNotes=[],this.skippedNotes=[],this.failedNotes=[],this.logs=[],this.startTime=Date.now()}onOpen(){let{contentEl:e,titleEl:t}=this;e.addClass("stnd-modal"),t.setText("Standard \u2014 Synchronisation du jardin"),this.statusEl=e.createEl("p",{text:`Pr\xE9paration... 0 / ${this.total}`,cls:"stnd-modal-message"});let n=e.createDiv();n.style.cssText="height:8px;border-radius:4px;background:var(--background-modifier-border);overflow:hidden;margin:0.5em 0;",this.barEl=n.createDiv(),this.barEl.style.cssText="height:100%;width:0%;background:var(--interactive-accent);transition:width .15s ease;";let a=this.breakdown,s=e.createDiv();s.style.cssText="display:flex;flex-wrap:wrap;gap:6px;margin:0.5em 0 0.75em;";let r=(c,f,d)=>{if(!f)return;let p=s.createEl("span");p.style.cssText=`display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:12px;font-size:var(--font-ui-smaller);background:var(--background-secondary);color:${d};border:1px solid currentColor;opacity:.85;`,p.setText(`${c} ${f}`)};r("\u2191 \xC0 publier",a.toPublish,"var(--color-green)"),r("\u2212 \xC0 d\xE9publier",a.toUnpublish,"var(--color-orange)"),r("\u2193 \xC0 t\xE9l\xE9charger",a.toCreate,"var(--color-blue)"),this.currentEl=e.createEl("div",{cls:"stnd-modal-detail",text:"V\xE9rification des notes existantes..."}),this.currentEl.style.cssText="opacity:.7;font-size:var(--font-ui-smaller);min-height:1.4em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;";let i=e.createEl("div",{text:"Journal de synchronisation :",cls:"stnd-modal-detail"});i.style.cssText="margin-top: 0.75em; margin-bottom: 0.25em; font-weight: 600; font-size: var(--font-ui-smaller);",this.logContainer=e.createDiv(),this.logContainer.style.cssText="height: 160px; overflow-y: auto; background: var(--background-primary-alt); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 6px 10px; font-family: var(--font-monospace); font-size: 11px; line-height: 1.5;",this.reconciliationEl=e.createEl("div"),this.reconciliationEl.style.cssText="margin-top: 0.75em; max-height: 180px; overflow-y: auto; font-size: var(--font-ui-smaller);";let l=e.createEl("div",{cls:"stnd-modal-btns"});this.copyBtn=l.createEl("button",{text:"Copier le log",cls:"stnd-modal-btn-cancel"}),this.copyBtn.addEventListener("click",()=>{if(this.logs.length===0){new M.Notice("Le journal est vide pour le moment.");return}let c=this.logs.map(f=>`[${f.time}] [${f.tag}] ${f.name}${f.detail?" \u2014 "+f.detail:""}`).join(`
`);navigator.clipboard.writeText(c),new M.Notice(`Journal copi\xE9 (${this.logs.length} entr\xE9es) !`)}),this.actionBtn=l.createEl("button",{text:"Annuler",cls:"mod-warning"}),this.actionBtn.addEventListener("click",()=>{if(this.finished)return this.close();this.cancelled=!0,this.actionBtn.disabled=!0,this.actionBtn.setText("Annulation...")})}update({index:e,current:t,synced:n,pulled:a,created:s,unpublished:r,skipped:i,failed:l}){if(!this.barEl)return;let c=this.total?Math.round(e/this.total*100):0;this.barEl.style.width=c+"%";let f=n+a+s+r;this.statusEl.setText(`${e} / ${this.total} (${c}%) \u2014 ${f} action(s), ${i} identique(s)`+(l?`, ${l} \xE9chou\xE9(s)`:"")),this.currentEl.setText(t?`Traitement : ${t}`:"")}recordResult(e,t,n=""){let a=new Date().toLocaleTimeString(),s="INFO",r="var(--text-muted)",i="var(--text-normal)";if(e==="synced"?(this.syncedNotes.push(t),s="\u2191 PUBLI\xC9",r="var(--color-green)"):e==="pulled"?(this.pulledNotes.push(t),s="\u2193 T\xC9L\xC9CHARG\xC9",r="var(--color-blue)"):e==="created"?(this.createdNotes.push(t),s="+ CR\xC9\xC9",r="var(--color-blue)"):e==="unpublished"?(this.unpublishedNotes.push(t),s="\u2212 D\xC9PUBLI\xC9",r="var(--color-orange)"):e==="skipped"?(this.skippedNotes.push(t),s="\u25CB IDENTIQUE",r="var(--text-faint)",i="var(--text-muted)"):e==="failed"&&(this.failedNotes.push({name:t,detail:n}),s="\u2717 \xC9CHEC",r="var(--color-red)",i="var(--color-red)"),this.logs.push({time:a,tag:s,type:e,name:t,detail:n}),this.logContainer){let l=this.logContainer.createDiv();l.style.cssText="display: flex; gap: 6px; align-items: baseline; word-break: break-all; margin-bottom: 2px;";let c=l.createSpan();c.style.cssText="color: var(--text-faint); font-size: 10px; flex-shrink: 0;",c.setText(a);let f=l.createSpan();f.style.cssText=`color: ${r}; font-weight: 600; flex-shrink: 0; font-size: 10px;`,f.setText(s);let d=l.createSpan();d.style.cssText=`color: ${i}; flex: 1;`,d.setText(t+(n?` \u2014 ${n}`:"")),this.logContainer.scrollTop=this.logContainer.scrollHeight}}done({synced:e,pulled:t,created:n,unpublished:a,skipped:s,failed:r,notesOnline:i,stats:l}){if(this.finished=!0,!this.barEl)return;let c=Math.round((Date.now()-this.startTime)/1e3);this.barEl.style.width="100%";let f=this.cancelled?"Annul\xE9e":"Termin\xE9e";this.statusEl.setText(`Synchronisation ${f.toLowerCase()} \xB7 ${c}s`),this.currentEl.setText(""),this.reconciliationEl.empty();let d=this.reconciliationEl.createEl("h4",{text:"Rapport de r\xE9conciliation :",cls:"stnd-reconciliation-title"});d.style.cssText="margin: 0 0 0.5em 0;";let p=i??e+s,h=l?.imagesReused||0,m=l?.imagesUploaded||0,u=l?.imagesFailed||0,g=h+m,y=r||0,b=y+u,w=l&&l.imagesChecked>0?` + ${g} image(s) en ligne${h>0?` (${h} d\xE9dupliqu\xE9e(s))`:""}`:"",S=this.reconciliationEl.createDiv({cls:"stnd-reconciliation-summary"});if(S.style.cssText="padding: 10px 14px; border-radius: 8px; background: var(--background-secondary-alt); border: 1px solid var(--background-modifier-border); margin-bottom: 12px; font-weight: 500; font-size: var(--font-ui-small);",b===0)S.setText(`\u2713 ${p} note(s)${w}, 0 manquante.`);else{let N=[];y>0&&N.push(`${y} note(s) manquante(s)`),u>0&&N.push(`${u} image(s) non t\xE9l\xE9vers\xE9e(s)`),S.setText(`\u26A0 ${p} note(s)${w}, ${N.join(", ")}.`)}let v=this.reconciliationEl.createEl("ul");v.style.cssText="list-style-type: none; padding-left: 0; margin: 0;";let x=(N,k,T,D)=>{if(N.length===0)return;let O=v.createEl("li");O.style.cssText=`${T} font-weight: bold; margin-bottom: 0.25em;`,O.setText(`${D} ${k} (${N.length}) :`);let F=v.createEl("ul");F.style.cssText="padding-left: 1.5em; margin-bottom: 0.5em; list-style-type: circle;";for(let U of N){let I=typeof U=="object"?`${U.name}${U.detail?" \u2014 "+U.detail:""}`:U;F.createEl("li",{text:I})}};x(this.syncedNotes,"Envoy\xE9e(s) / Mise(s) \xE0 jour \xE0 distance","color: var(--text-success);","\u2191"),x(this.pulledNotes,"T\xE9l\xE9charg\xE9e(s) / Mise(s) \xE0 jour localement","color: var(--text-success);","\u2193"),x(this.createdNotes,"Cr\xE9\xE9e(s) localement","color: var(--text-success);","+"),x(this.unpublishedNotes,"D\xE9-publi\xE9e(s) localement (pass\xE9e en brouillon)","color: var(--text-warning);","-"),x(this.skippedNotes,"D\xE9j\xE0 \xE0 jour (identiques)","color: var(--text-muted);","\u25CB"),x(this.failedNotes,"\xC9chec(s) de synchronisation","color: var(--text-error);","\u2717"),l?.failedImages?.length>0&&x(l.failedImages,"Image(s) non t\xE9l\xE9vers\xE9e(s)","color: var(--text-error);","\u2717"),this.actionBtn.disabled=!1,this.actionBtn.setText("Fermer"),this.actionBtn.removeClass("mod-warning"),this.actionBtn.addClass("mod-cta")}onClose(){this.finished||(this.cancelled=!0),this.contentEl.empty()}},wo=class extends M.Modal{constructor(e,t,n){super(e),this.garden=t,this.items=n,this.cancelled=!1,this.inProgress=!1}onOpen(){let{contentEl:e,titleEl:t}=this;e.addClass("stnd-modal"),t.setText("Standard \u2014 Nettoyage des notes d\xE9publi\xE9es"),e.createEl("p",{text:`Les ${this.items.length} note(s) suivante(s) sont encore en ligne sur votre jardin ou poss\xE8dent des m\xE9tadonn\xE9es de publication obsol\xE8tes, mais ne sont plus publiques localement :`,cls:"stnd-modal-detail"});let n=e.createDiv();n.style.cssText="max-height: 220px; overflow-y: auto; border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px 12px; margin: 12px 0; background: var(--background-primary-alt);";let a=n.createEl("ul");a.style.cssText="list-style-type: none; padding: 0; margin: 0;";for(let i of this.items){let l=a.createEl("li");l.style.cssText="display: flex; justify-content: space-between; align-items: center; padding: 4px 0; border-bottom: 1px solid var(--background-modifier-border-focus); font-size: var(--font-ui-smaller);";let c=l.createEl("span",{text:i.title});c.style.cssText="font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 68%;";let f="Brouillon local";i.reason==="orphan"?f="Orpheline en ligne":i.reason==="stale_local"&&(f="Lien local r\xE9siduel");let d=l.createEl("span",{text:f});d.style.cssText="color: var(--text-warning); font-size: 11px; padding: 2px 6px; border-radius: 4px; background: var(--background-modifier-hover); flex-shrink: 0;"}this.progressContainer=e.createDiv(),this.progressContainer.style.display="none",this.progressContainer.style.margin="12px 0";let s=this.progressContainer.createDiv();s.style.cssText="height: 8px; border-radius: 4px; background: var(--background-modifier-border); overflow: hidden;",this.barEl=s.createDiv(),this.barEl.style.cssText="height: 100%; width: 0%; background: var(--interactive-accent); transition: width .15s ease;",this.progressText=this.progressContainer.createEl("div",{cls:"stnd-modal-detail",text:"Traitement..."}),this.progressText.style.cssText="margin-top: 6px; font-size: var(--font-ui-smaller);";let r=e.createEl("div",{cls:"stnd-modal-btns"});this.cancelBtn=r.createEl("button",{text:"Annuler",cls:"stnd-modal-btn-cancel"}),this.cancelBtn.addEventListener("click",()=>{this.close()}),this.confirmBtn=r.createEl("button",{text:`Supprimer du jardin (${this.items.length})`,cls:"mod-warning"}),this.confirmBtn.addEventListener("click",async()=>{await this.runPrune()})}async runPrune(){this.inProgress=!0,this.confirmBtn.disabled=!0,this.cancelBtn.disabled=!0,this.confirmBtn.setText("Nettoyage en cours..."),this.progressContainer.style.display="block";let e=0,t=0,n=this.items.length;for(let a=0;a<n&&!this.cancelled;a++){let s=this.items[a],r=Math.round((a+1)/n*100);this.barEl.style.width=r+"%",this.progressText.setText(`${a+1} / ${n} : ${s.title}`);try{await this.garden.unpublishNote(s.file,s.slug)?e++:t++}catch{t++}}this.progressText.setText(`Termin\xE9 : ${e} note(s) nettoy\xE9e(s)${t>0?`, ${t} en \xE9chec`:""}.`),this.confirmBtn.style.display="none",this.cancelBtn.disabled=!1,this.cancelBtn.setText("Fermer"),this.cancelBtn.removeClass("stnd-modal-btn-cancel"),this.cancelBtn.addClass("mod-cta"),new M.Notice(`Standard : ${e} note(s) d\xE9publi\xE9e(s) du jardin.`)}onClose(){this.cancelled=!0,this.contentEl.empty()}};async function Ce(o,e={},t=5){let n=0,a=2e3;for(;;){n++;try{let s=await M.requestUrl({url:o,method:e.method||"GET",headers:e.headers||{},body:e.body,throw:!1}),r=()=>{try{return JSON.parse(s.text||"{}")}catch{return null}};if(s.status===429){if(n>=t)return{...s,ok:!1,json:async()=>r()};let i=s.headers&&(s.headers["retry-after"]||s.headers["Retry-After"]),l=0;if(i){let c=parseInt(i,10);l=isNaN(c)?a:c*1e3}else l=a+Math.random()*1e3,a*=2;console.warn(`Standard: Rate limited (429). Retrying in ${l}ms (attempt ${n}/${t})...`),await new Promise(c=>setTimeout(c,l));continue}return{...s,ok:s.status>=200&&s.status<300,json:async()=>r()}}catch(s){if(n>=t)throw s;let r=a+Math.random()*1e3;a*=2,console.warn(`Standard: Network error. Retrying in ${r}ms (attempt ${n}/${t})...`,s),await new Promise(i=>setTimeout(i,r))}}}async function ft(o,e=null){if(o<=0)return;let t=Date.now();for(;Date.now()-t<o&&!(e&&e.cancelled);){let n=o-(Date.now()-t);await new Promise(a=>setTimeout(a,Math.min(50,n)))}}var ko=class{constructor(e,t){this.app=e,this.plugin=t,this.syncIntervalTimer=null,this.attachmentCache=new Map,this.noteStatsCache=new Map,this.lastAttachmentUploadTime=0,this.lastPublishTime=0}isPathExcluded(e){let t=this.plugin.settings.excludedFolders;if(!t)return!1;let n=Array.isArray(t)?t:String(t).split(",").map(s=>s.trim().replace(/^\/+|\/+$/g,"")).filter(Boolean);if(n.length===0)return!1;let a=e.replace(/^\/+/,"");return n.some(s=>a.startsWith(s+"/")||a===s)}getPublishableFiles(){return this.app.vault.getMarkdownFiles().filter(t=>!this.isPathExcluded(t.path))}async load(){this.plugin.settings.autoSync&&this.plugin.settings.apiKey&&setTimeout(()=>{this.pollRemoteChanges()},5e3),this.setupAutoSyncInterval()}unload(){this.syncIntervalTimer&&(clearInterval(this.syncIntervalTimer),this.syncIntervalTimer=null)}setupAutoSyncInterval(){if(this.syncIntervalTimer&&(clearInterval(this.syncIntervalTimer),this.syncIntervalTimer=null),!!this.plugin.settings.autoSync&&this.plugin.settings.apiKey){let t=window.setInterval(()=>{this.pollRemoteChanges()},3e5);this.syncIntervalTimer=t,this.plugin.registerInterval(t)}}async pollRemoteChanges(){if(this.plugin.settings.apiKey)try{let e=this.app.workspace.getActiveFile(),{PublishStatusFeature:t}=Gt(),n=this.plugin.features.find(a=>a instanceof t);n&&e&&await n.triggerStatusCheck(e)}catch{}}checkApiKeyAndShowModal(){return this.plugin.settings.apiKey?!0:(new go(this.app,`No API key configured.
To publish or edit a post, you must link your account.`,"Connect",()=>this.startConnect()).open(),!1)}async verifyApiKey(e,t){if(!this.plugin.settings.apiKey){this.plugin.settings.apiUsername="",await this.plugin.saveSettings(),this.plugin.updateRibbonIconsVisibility(),t&&t();return}try{let n=await M.requestUrl({url:`${this.plugin.settings.apiUrl}/me`,headers:{"x-api-key":this.plugin.settings.apiKey},throw:!1});if(n.status>=200&&n.status<300){let a=n.json;this.plugin.settings.apiUsername=a.username||"",await this.plugin.saveSettings(),this.plugin.updateRibbonIconsVisibility(),e&&e.setText(`\u2713 @${a.username}`)}else this.plugin.settings.apiUsername="",await this.plugin.saveSettings(),this.plugin.updateRibbonIconsVisibility(),e&&e.setText("\u2717 Invalid key")}catch{e&&e.setText("\u2717 Could not connect")}t&&t()}startConnect(){let e=(this.plugin.settings.apiUrl||"https://standard.garden/api").replace(/\/api\/?$/,""),t=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2);this._connectState=t;let n=`${e}/connect/obsidian?state=${encodeURIComponent(t)}`;this._openExternal(n),new M.Notice("Standard : connexion ouverte dans le navigateur\u2026")}_openExternal(e){if(M.Platform.isDesktop)try{require("electron").shell.openExternal(e);return}catch{}window.open(e,"_blank")}async handleConnectCallback(e){let t=e&&e.key,n=e&&e.username||"",a=e&&e.state||"";if(!t){new M.Notice("Garden: connection cancelled (missing key).");return}if(this._connectState&&a!==this._connectState){new M.Notice("Garden: connection skipped (invalid token).");return}this._connectState=null,this.plugin.settings.apiKey=t,this.plugin.settings.apiUsername=n,await this.plugin.saveSettings(),await this.verifyApiKey(null,()=>{this.plugin.settingTab&&this.plugin.settingTab.display()});let s=this.plugin.settings.apiUsername||n;new M.Notice(s?`Garden: connected as @${s} \u2713`:"Garden: connected \u2713")}async syncAllPublished(){if(!this.checkApiKeyAndShowModal())return;let e=this.getPublishableFiles(),t=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey;try{let n=await Ce(`${this.plugin.settings.apiUrl}/publish?includeContent=true`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}}),a=[];n.ok?a=(await n.json()).notes||[]:console.warn("Standard : Impossible de r\xE9cup\xE9rer la liste distante pour la r\xE9conciliation.");let s=new Map(a.map(k=>[k.slug,k])),r=new Map(a.filter(k=>k.nano_id).map(k=>[k.nano_id,k])),i=new Map;for(let k of a)if(k.title){let T=$(k.title);T&&!i.has(T)&&i.set(T,k)}let l=new Wt(this.app,e),c=(k,T)=>{if(T["garden-short"]){let F=String(T["garden-short"]).match(/stnd\.gd\/([a-zA-Z0-9_-]+)/);if(F&&r.has(F[1]))return r.get(F[1])}let D=T.permalink??T.slug;if(D!=null){let F=String(D).replace(/^\/+|\/+$/g,""),U=F===""?"~root":F;if(s.has(U))return s.get(U);if(i.has(U))return i.get(U)}let O=$(k.basename);if(s.has(O))return s.get(O);if(i.has(O))return i.get(O);if(T.title){let F=$(T.title);if(s.has(F))return s.get(F);if(i.has(F))return i.get(F)}return null},f=new Set,d=[];for(let k of e){let T=this.app.metadataCache.getFileCache(k)?.frontmatter||{},D=T.permalink??T.slug,O=$(k.basename),F=D!=null?String(D).replace(/^\/+|\/+$/g,""):O,U=F===""?"~root":F,I=_e(T),B=T["garden-url"]!=null,W=c(k,T);W&&f.add(W),I?d.push({type:"local_published",file:k,remoteNote:W,slug:U,name:k.basename}):W?d.push({type:"local_draft_remote_exists",file:k,remoteNote:W,slug:U,name:k.basename}):B&&this.plugin.settings.syncDirection==="2way"&&d.push({type:"local_published",file:k,remoteNote:W,slug:U,name:k.basename})}if(this.plugin.settings.syncDirection==="2way")for(let k of a)!f.has(k)&&!l.findMatchForRemote(k)&&d.push({type:"remote_only",file:null,remoteNote:k,slug:k.slug,name:k.title||k.slug});if(d.length===0){new M.Notice("Standard : Aucune note \xE0 synchroniser.");return}let p={toPublish:d.filter(k=>k.type==="local_published").length,toUnpublish:d.filter(k=>k.type==="local_draft_remote_exists").length,toCreate:d.filter(k=>k.type==="remote_only").length},h=new bo(this.app,d.length,p);h.open();let m=0,u=0,g=0,y=0,b=0,w=0,S=0,v={imagesChecked:0,imagesReused:0,imagesUploaded:0,imagesFailed:0,failedImages:[]},x=new Set;for(let k of d){if(h.cancelled||(h.update({index:S,current:k.name,synced:m,pulled:u,created:g,unpublished:y,skipped:b,failed:w}),h.cancelled))break;try{if(k.type==="local_published"){let{file:T,remoteNote:D}=k,F=(this.app.metadataCache.getFileCache(T)?.frontmatter||{})["garden-url"]!=null;if(D){let U=await this.app.vault.read(T),I=await this.uploadContentImages(U,T,!0,v,h,x),B=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(I)),J=Array.from(new Uint8Array(B)).map(ie=>ie.toString(16).padStart(2,"0")).join("");if(D.hash===J)b++,h.recordResult("skipped",T.basename);else if(this.plugin.settings.syncDirection==="1way"){let ie=Date.now()-this.lastPublishTime;if(ie<1100&&await ft(1100-ie,h),h.cancelled)break;let ra=await this.publishNote(T,!0,I);this.lastPublishTime=Date.now(),ra?(m++,h.recordResult("synced",T.basename)):(w++,h.recordResult("failed",T.basename,this.lastError||"Erreur de publication"))}else{let ie=T.stat?.mtime||0;if((new Date(D.updated_at).getTime()||0)>ie+5e3)await this.app.vault.modify(T,D.content),u++,h.recordResult("pulled",T.basename);else{let Qt=Date.now()-this.lastPublishTime;if(Qt<1100&&await ft(1100-Qt,h),h.cancelled)break;let fi=await this.publishNote(T,!0,I);this.lastPublishTime=Date.now(),fi?(m++,h.recordResult("synced",T.basename)):(w++,h.recordResult("failed",T.basename,this.lastError||"Erreur de publication"))}}}else if(F)if(this.plugin.settings.syncDirection==="1way"){let U=await this.app.vault.read(T),I=await this.uploadContentImages(U,T,!0,v,h,x),B=Date.now()-this.lastPublishTime;if(B<1100&&await ft(1100-B,h),h.cancelled)break;let W=await this.publishNote(T,!0,I);this.lastPublishTime=Date.now(),W?(m++,h.recordResult("synced",T.basename)):(w++,h.recordResult("failed",T.basename,this.lastError||"Erreur de publication"))}else await this.app.fileManager.processFrontMatter(T,U=>{U[t]=!1,delete U["garden-url"],delete U["garden-short"]}),y++,h.recordResult("unpublished",T.basename);else{let U=await this.app.vault.read(T),I=await this.uploadContentImages(U,T,!0,v,h,x),B=Date.now()-this.lastPublishTime;if(B<1100&&await ft(1100-B,h),h.cancelled)break;let W=await this.publishNote(T,!0,I);this.lastPublishTime=Date.now(),W?(m++,h.recordResult("synced",T.basename)):(w++,h.recordResult("failed",T.basename,this.lastError||"Erreur de publication"))}}else if(k.type==="local_draft_remote_exists"){let{file:T,remoteNote:D}=k,O=T.stat?.mtime||0,F=new Date(D.updated_at).getTime()||0;if(this.plugin.settings.syncDirection==="2way"&&F>O+5e3)await this.app.vault.modify(T,D.content),await this.app.fileManager.processFrontMatter(T,I=>{_e(I)||(I.publish=!0),"status"in I&&delete I.status,I["garden-url"]=this.getLiveUrl(T),D.nano_id&&(I["garden-short"]=`https://stnd.gd/${D.nano_id}`),I.created!=null&&D.created_at&&(I.created=D.created_at),I.modified!=null&&D.updated_at&&(I.modified=D.updated_at)}),u++,h.recordResult("pulled",T.basename);else{let I=k.remoteNote?.slug||k.slug,B=Date.now()-this.lastPublishTime;if(B<1100&&await ft(1100-B,h),h.cancelled)break;let W=await this.unpublishNote(T,I);this.lastPublishTime=Date.now(),W?(y++,h.recordResult("unpublished",T.basename)):(w++,h.recordResult("failed",T.basename,this.lastError||"Erreur de d\xE9publication"))}}else if(k.type==="remote_only"){let{remoteNote:T,slug:D}=k,O=(T.title||D).replace(/[\\\/:\*\?"<>\|]/g,"-").trim();O||(O="Sans titre");let F=`${O}.md`,U=1;for(;this.app.vault.getAbstractFileByPath(F);)F=`${O} (${U}).md`,U++;let I=await this.app.vault.create(F,T.content);await this.app.fileManager.processFrontMatter(I,B=>{_e(B)||(B.publish=!0),"status"in B&&delete B.status,B["garden-url"]=this.getLiveUrl(I),B.permalink=T.slug,T.nano_id&&(B["garden-short"]=`https://stnd.gd/${T.nano_id}`),B.created!=null&&T.created_at&&(B.created=T.created_at),B.modified!=null&&T.updated_at&&(B.modified=T.updated_at)}),g++,h.recordResult("created",I.basename)}}catch(T){console.error(`Standard : Erreur lors de la synchronisation de ${k.name}:`,T),w++,h.recordResult("failed",k.name)}S++,h.update({index:S,current:k.name,synced:m,pulled:u,created:g,unpublished:y,skipped:b,failed:w})}let N=a.length+m-y;h.done({synced:m,pulled:u,created:g,unpublished:y,skipped:b,failed:w,notesOnline:N,stats:v}),new M.Notice(`Garden : Synchronisation ${h.cancelled?"annul\xE9e":"termin\xE9e"}. ${m+u+g+y} action(s), ${b} identique(s), ${w} en \xE9chec.`)}catch(n){console.error("Standard : Erreur globale lors de la synchronisation en lot :",n),new M.Notice("Standard : Erreur lors de la synchronisation.")}}async downloadNewOnlineNotes(){if(!this.checkApiKeyAndShowModal())return;let e=this.getPublishableFiles(),t=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey;try{let n=await Ce(`${this.plugin.settings.apiUrl}/publish?includeContent=true`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}}),a=[];if(n.ok)a=(await n.json()).notes||[];else{new M.Notice("Garden: Failed to fetch online notes list.");return}let s=new Wt(this.app,e),r=[],i=[];for(let c of a){let f=s.findMatchForRemote(c);f?i.push({remoteNote:c,file:f}):r.push(c)}for(let{remoteNote:c,file:f}of i)await this.app.fileManager.processFrontMatter(f,d=>{_e(d)||(d.publish=!0),"status"in d&&delete d.status,d["garden-url"]||(d["garden-url"]=this.getLiveUrl(f)),!d.permalink&&c.slug&&c.slug!==$(f.basename)&&(d.permalink=c.slug),c.nano_id&&!d["garden-short"]&&(d["garden-short"]=`https://stnd.gd/${c.nano_id}`),d.created!=null&&c.created_at&&(d.created=c.created_at),d.modified!=null&&c.updated_at&&(d.modified=c.updated_at)});if(r.length===0){new M.Notice(i.length>0?`Garden : Toutes les ${i.length} notes sont d\xE9j\xE0 dans le coffre (m\xE9tadonn\xE9es synchronis\xE9es).`:"Garden : Aucune nouvelle note en ligne \xE0 t\xE9l\xE9charger.");return}let l=0;for(let c of r){let f=(c.title||c.slug).replace(/[\\\/:\*\?"<>\|]/g,"-").trim();f||(f="Untitled");let d=`${f}.md`,p=1;for(;this.app.vault.getAbstractFileByPath(d);)d=`${f} (${p}).md`,p++;let h=await this.app.vault.create(d,c.content);await this.app.fileManager.processFrontMatter(h,m=>{_e(m)||(m.publish=!0),"status"in m&&delete m.status,m["garden-url"]=this.getLiveUrl(h),m.permalink=c.slug,c.nano_id&&(m["garden-short"]=`https://stnd.gd/${c.nano_id}`),m.created!=null&&c.created_at&&(m.created=c.created_at),m.modified!=null&&c.updated_at&&(m.modified=c.updated_at)}),l++}new M.Notice(`Garden: Downloaded ${l} new note(s) successfully!`)}catch(n){console.error("Garden: Error during downloading online notes:",n),new M.Notice("Garden: Failed to download online notes.")}}async publishCurrentNote(){if(!this.checkApiKeyAndShowModal())return;let e=this.app.workspace.getActiveFile();if(!e){new M.Notice("Standard: No active note to publish.");return}if(this.isPathExcluded(e.path)){new M.Notice(`Standard : Cette note se trouve dans un dossier exclu de la publication (${e.path}).`);return}let t=await this.publishWithCheck(e);t===!0?(new M.Notice(`Standard: "${e.basename}" published.`),this.plugin.settings.openAfterPublish&&this.viewLiveVersion(e)):t===!1&&new M.Notice(`Standard: Failed to publish "${e.basename}".`)}async unpublishCurrentNote(){if(!this.checkApiKeyAndShowModal())return;let e=this.app.workspace.getActiveFile();if(!e){new M.Notice("Standard: No active note to unpublish.");return}let t=await this.deleteOnlineVersion(e);t===!0?new M.Notice(`Standard: "${e.basename}" removed from the garden.`):t===!1&&new M.Notice(`Standard: Failed to unpublish "${e.basename}".`)}async cleanUnpublishedNotes(){if(this.checkApiKeyAndShowModal()){new M.Notice("Standard : Recherche des notes \xE0 d\xE9publier...");try{let e=await Ce(`${this.plugin.settings.apiUrl}/publish`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}}),t=[];if(e.ok)t=(await e.json()).notes||[];else{new M.Notice("Standard : Impossible de r\xE9cup\xE9rer les notes distantes.");return}let n=this.getPublishableFiles(),a=new Wt(this.app,n),s=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey,r=[],i=new Set;for(let l of t){let c=a.findMatchForRemote(l),f=l.slug||"~root";if(!c)r.push({slug:f,title:l.title||l.slug||"Sans titre",file:null,reason:"orphan"});else{i.add(c);let d=this.app.metadataCache.getFileCache(c)?.frontmatter||{};_e(d)||r.push({slug:f,title:c.basename,file:c,reason:"draft"})}}for(let l of n){if(i.has(l))continue;let c=this.app.metadataCache.getFileCache(l)?.frontmatter||{};if(!_e(c)&&(c["garden-url"]||c["garden-short"])){let f=c.permalink??c.slug,d=$(l.basename),p=f!=null?String(f).replace(/^\/+|\/+$/g,""):d,h=p===""?"~root":p;r.push({slug:h,title:l.basename,file:l,reason:"stale_local"})}}if(r.length===0){new M.Notice("Standard : Aucune note d\xE9publi\xE9e \xE0 nettoyer. Le jardin est parfaitement synchronis\xE9 !");return}new wo(this.app,this,r).open()}catch(e){console.error("Standard : Erreur lors du nettoyage :",e),new M.Notice("Standard : Erreur lors de la recherche des notes.")}}}getGardenDomain(){try{let e=this.app.vault.getMarkdownFiles();for(let t of e){let a=this.app.metadataCache.getFileCache(t)?.frontmatter||{},s=a["garden-domain"]??a.garden_domain??a.domain;if(a.permalink==="/"&&s)return String(s).trim().replace(/^https?:\/\//,"").replace(/\/$/,"")}}catch(e){console.error("Standard: Error scanning for garden-domain:",e)}return null}getLiveUrl(e){let t=this.app.metadataCache.getFileCache(e)?.frontmatter||{};if(t["garden-url"])return String(t["garden-url"]).trim();let n=t.permalink??t.slug,a=$(e.basename),s=n!=null?String(n).replace(/^\/+|\/+$/g,""):a,r=this.getGardenDomain();if(r)return s===""?`https://${r}`:`https://${r}/${s}`;{let i="https://standard.garden";return s===""?`${i}/@${this.plugin.settings.apiUsername}`:`${i}/@${this.plugin.settings.apiUsername}/${s}`}}viewLiveVersion(e){let t=e||this.app.workspace.getActiveFile();if(!t){new M.Notice("Standard: No active note.");return}let n=this.getLiveUrl(t);this.plugin.settings.openInObsidianWeb?this.app.workspace.getLeaf("split","vertical").setViewState({type:"webviewer",state:{url:n}}):this._openExternal(n)}copyLiveUrl(e){let t=e||this.app.workspace.getActiveFile();if(!t){new M.Notice("Standard : Aucune note active.");return}let n=this.getLiveUrl(t);navigator.clipboard.writeText(n),new M.Notice("Standard : URL publique copi\xE9e dans le presse-papiers.")}copyShortUrl(e){let t=e||this.app.workspace.getActiveFile();if(!t){new M.Notice("Standard : Aucune note active.");return}let n=this.app.metadataCache.getFileCache(t)?.frontmatter||{},a=n["garden-short"]??n.garden_short??n.short_url;a?(navigator.clipboard.writeText(String(a).trim()),new M.Notice("Standard : URL courte copi\xE9e dans le presse-papiers.")):this.copyLiveUrl(t)}shareCurrentNote(e){let t=e||this.app.workspace.getActiveFile();if(!t){new M.Notice("Standard : Aucune note active.");return}let n=this.getLiveUrl(t);new kl(this.app,t.basename,n).open()}async setNoteVisibility(e,t){let n=t||this.app.workspace.getActiveFile();if(!n||n.extension!=="md"){new M.Notice("Standard : Ouvrez une note Markdown.");return}await this.app.fileManager.processFrontMatter(n,a=>{a.visibility=e}),new M.Notice(`Standard : Visibilit\xE9 d\xE9finie sur "${e}".`)}async cycleNoteVisibility(e){let t=e||this.app.workspace.getActiveFile();if(!t||t.extension!=="md"){new M.Notice("Standard : Ouvrez une note Markdown.");return}let n=this.app.metadataCache.getFileCache(t),a=String(n?.frontmatter?.visibility||"public").toLowerCase().trim(),s=["public","unlisted","private"],r=s.indexOf(a),i=s[(r+1)%s.length];await this.setNoteVisibility(i,t)}stripFrontmatter(e){return e?e.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/,""):""}extractMarkdownSubpath(e,t){if(!e||!t)return e;let n=t.trim();if(!n)return e;if(n.startsWith("^")){let c=n.slice(1),f=e.split(`
`),d=[],p=!1;for(let h=0;h<f.length;h++)if(f[h].includes(`^${c}`)){p=!0;let m=h;for(;m>0&&f[m-1].trim()!==""&&!f[m-1].startsWith("#");)m--;let u=h;for(;u<f.length-1&&f[u+1].trim()!==""&&!f[u+1].startsWith("#");)u++;for(let g=m;g<=u;g++)d.push(f[g].replace(new RegExp(`\\s*\\^${c}\\s*$`),""));break}return p?d.join(`
`).trim():e}let a=n.replace(/^#+/,"").trim().toLowerCase(),s=e.split(`
`),r=!1,i=0,l=[];for(let c=0;c<s.length;c++){let f=s[c],d=f.match(/^(#{1,6})\s+(.+)$/);if(d){let p=d[1].length,h=d[2].replace(/[#*`_\[\]]/g,"").trim().toLowerCase();if(r){if(p<=i)break;l.push(f)}else(h===a||h.startsWith(a))&&(r=!0,i=p,l.push(f))}else r&&l.push(f)}return r&&l.length>0?l.join(`
`).trim():e}async resolveNoteTransclusions(e,t,n=0,a=new Set){if(!e||n>5)return e;let s=t?t.path:"",r=new Set(a);s&&r.add(s);let i=/!\[\[([^\]]+)\]\]/g,l=[...e.matchAll(i)];if(l.length===0)return e;let c=e;for(let f of l){let d=f[0],p=f[1],[h]=p.split("|"),m=h.trim();if(mo(m)||Qn(m)||Ir(m))continue;let u=m.indexOf("#"),g=u!==-1?m.slice(0,u).trim():m,y=u!==-1?m.slice(u+1).trim():null,b=null;if(g?b=this.app.metadataCache.getFirstLinkpathDest(g,s):t&&(b=t),!(!b||b.extension!=="md")){if(r.has(b.path)&&n>0&&!y){console.warn(`Standard: Circular transclusion detected for ${b.path}`),c=c.replace(d,"");continue}try{let w=await this.app.vault.read(b),S=this.stripFrontmatter(w);y&&(S=this.extractMarkdownSubpath(S,y));let v=new Set(r);v.add(b.path);let x=await this.resolveNoteTransclusions(S,b,n+1,v);c=c.replace(d,x.trim())}catch(w){console.warn(`Standard: Error resolving transclusion ${d}:`,w)}}}return c}async uploadContentImages(e,t,n=!1,a=null,s=null,r=null){if(!this.plugin.settings.apiKey)return e;let i=await this.resolveNoteTransclusions(e,t),l=new Map,c=async m=>{if(s&&s.cancelled)return null;if(l.has(m.path))return l.get(m.path);try{let u=m.stat?.mtime||0,g=m.stat?.size||0,y=m.name.split(".").pop()?.toLowerCase()||"bin",b="",w="",S=this.attachmentCache?.get(m.path);if(S&&S.mtime===u&&S.size===g&&S.contentHash)b=S.contentHash,w=S.cdnUrl;else{let J=await this.app.vault.readBinary(m),ie=await crypto.subtle.digest("SHA-256",J);b=Array.from(new Uint8Array(ie)).map(Qt=>Qt.toString(16).padStart(2,"0")).join("")}if(r&&r.has(b)&&w)return l.set(m.path,w),a&&(a.imagesChecked=(a.imagesChecked||0)+1,a.imagesReused=(a.imagesReused||0)+1),w;let v=`${this.plugin.settings.apiUrl}/publish/attachment?hash=${b}&ext=${y}`,x=await Ce(v,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(x.status>=200&&x.status<300){let J=await x.json();if(J?.exists&&J.url)return w=new URL(J.url,this.plugin.settings.apiUrl).href,this.attachmentCache&&this.attachmentCache.set(m.path,{mtime:u,size:g,contentHash:b,cdnUrl:w}),r&&r.add(b),l.set(m.path,w),a&&(a.imagesChecked=(a.imagesChecked||0)+1,a.imagesReused=(a.imagesReused||0)+1),w}if(n){let J=Date.now()-this.lastAttachmentUploadTime;if(J<2e3&&await ft(2e3-J,s),s&&s.cancelled)return null}let N=await this.app.vault.readBinary(m),k="----ObsidianBoundary"+Math.random().toString(36).substring(2),T=[`--${k}`,`Content-Disposition: form-data; name="file"; filename="${m.name}"`,`Content-Type: ${bl(m.name)}`,"",""].join(`\r
`),D=`\r
--${k}--`,O=new Uint8Array(N),F=new TextEncoder().encode(T),U=new TextEncoder().encode(D),I=new Uint8Array(F.length+O.byteLength+U.length);I.set(F,0),I.set(O,F.length),I.set(U,F.length+O.byteLength);let B=await Ce(`${this.plugin.settings.apiUrl}/publish/attachment`,{method:"POST",headers:{"x-api-key":this.plugin.settings.apiKey,"Content-Type":`multipart/form-data; boundary=${k}`},body:I.buffer});if(this.lastAttachmentUploadTime=Date.now(),B.status<200||B.status>=300){let J=`HTTP ${B.status}`;try{let ie=await B.json();ie?.error&&(J=ie.error)}catch{}return console.warn(`Standard: Failed to upload ${m.name}: ${J}`,B.status),a&&(a.imagesChecked=(a.imagesChecked||0)+1,a.imagesFailed=(a.imagesFailed||0)+1,a.failedImages&&a.failedImages.push({name:m.name,detail:J})),null}let W=await B.json();return W?.url?(w=new URL(W.url,this.plugin.settings.apiUrl).href,this.attachmentCache&&this.attachmentCache.set(m.path,{mtime:u,size:g,contentHash:b,cdnUrl:w}),r&&r.add(b),l.set(m.path,w),a&&(a.imagesChecked=(a.imagesChecked||0)+1,a.imagesUploaded=(a.imagesUploaded||0)+1),w):(console.warn(`Standard: ${m.name} accept\xE9 par le serveur sans URL en retour`,W),a&&(a.imagesChecked=(a.imagesChecked||0)+1,a.imagesFailed=(a.imagesFailed||0)+1,a.failedImages&&a.failedImages.push({name:m.name,detail:"R\xE9ponse serveur sans URL"})),null)}catch(u){return console.warn(`Standard: Error uploading ${m.name}`,u),a&&(a.imagesChecked=(a.imagesChecked||0)+1,a.imagesFailed=(a.imagesFailed||0)+1,a.failedImages&&a.failedImages.push({name:m.name,detail:u.message||String(u)})),null}},f=i,d=/!\[\[([^\]]+)\]\]/g;for(let m of[...f.matchAll(d)]){let u=m[1],g=u.split("|")[0].trim();if(!mo(g))continue;let y=this.app.metadataCache.getFirstLinkpathDest(g,t.path);if(!y)continue;let b=await c(y);if(!b)continue;let w=u.includes("|")?u.split("|")[1]:y.basename;if(Qn(g))f=f.replaceAll(m[0],`![${w}](${b})`);else if(Ir(g))f=f.replaceAll(m[0],`[${w}](${b} "pdf-embed")`);else{let S=`${b}?download=${encodeURIComponent(y.name)}`;f=f.replaceAll(m[0],`[${w}](${S})`)}}let p=/(^|[^!])\[\[([^\]]+)\]\]/g;for(let m of[...f.matchAll(p)]){let u=m[2],g=u.split("|")[0].trim();if(!mo(g)||Qn(g))continue;let y=this.app.metadataCache.getFirstLinkpathDest(g,t.path);if(!y)continue;let b=await c(y);if(!b)continue;let w=u.includes("|")?u.split("|")[1]:y.name,S=`${b}?download=${encodeURIComponent(y.name)}`;f=f.replaceAll(m[0],`${m[1]}[${w}](${S})`)}let h=/!\[([^\]]*)\]\(([^)]+)\)/g;for(let m of[...f.matchAll(h)]){let u=m[2];if(/^https?:\/\//.test(u)||!Qn(u))continue;let g=decodeURIComponent(u),y=this.app.vault.getFileByPath(g)||this.app.metadataCache.getFirstLinkpathDest(g,t.path);if(!y)continue;let b=await c(y);b&&(f=f.replaceAll(m[0],`![${m[1]}](${b})`))}return f}async publishNote(e,t=!1,n=null){try{let a=n!==null?n:await this.uploadContentImages(await this.app.vault.read(e),e,t),s=this.app.metadataCache.getFileCache(e)?.frontmatter||{},r=s.permalink??s.slug,i=$(e.basename),l=r!=null?String(r).replace(/^\/+|\/+$/g,""):i,c=l===""?"~root":l,f=s.created||(e.stat?.ctime?new Date(e.stat.ctime).toISOString():new Date().toISOString()),d=s.modified||(e.stat?.mtime?new Date(e.stat.mtime).toISOString():new Date().toISOString()),p=await Ce(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(c)}`,{method:"PUT",headers:{"Content-Type":"application/json","x-api-key":this.plugin.settings.apiKey},body:JSON.stringify({title:e.basename,content:a,slug:c,created_at:f,updated_at:d})});if(p.status<200||p.status>=300){let u=`HTTP ${p.status}`;try{let g=JSON.parse(p.text||"{}");g.error&&(u+=`: ${g.error}`)}catch{p.text&&(u+=`: ${p.text.slice(0,80)}`)}return this.lastError=u,console.error(`Standard: Publish failed for ${e.basename}:`,p.status,p.text),!1}let h=await p.json().catch(()=>null),m=this.getLiveUrl(e);return await this.app.fileManager.processFrontMatter(e,u=>{delete u.published,delete u.url_public,u["garden-url"]=m,l!==""&&(u.permalink=l),h&&h.nano_id&&(u["garden-short"]=`https://stnd.gd/${h.nano_id}`),u.modified!=null&&(u.modified=new Date().toISOString())}),!0}catch(a){return this.lastError=a.message||String(a),console.error(`Standard: Publish error for ${e.basename}:`,a),!1}}async unpublishNote(e,t=null){try{let n=t;if(!n&&e){let s=await yo(this.app,e),r=s.permalink??s.slug,i=$(e.basename),l=r!=null?String(r).replace(/^\/+|\/+$/g,""):i;n=l===""?"~root":l}if(!n)return!1;let a=await Ce(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(n)}`,{method:"DELETE",headers:{"x-api-key":this.plugin.settings.apiKey}});if(a.status!==404&&(a.status<200||a.status>=300)){let s=`HTTP ${a.status}`;try{let r=JSON.parse(a.text||"{}");r.error&&(s+=`: ${r.error}`)}catch{a.text&&(s+=`: ${a.text.slice(0,80)}`)}return this.lastError=s,console.error(`Standard: Unpublish failed for ${e?e.basename:n}:`,a.status),!1}return e&&(this.noteStatsCache.delete(e.path),await this.app.fileManager.processFrontMatter(e,s=>{s.publish=!1,"status"in s&&delete s.status,delete s.published,delete s.url_public,delete s["garden-url"],delete s["garden-short"]})),!0}catch(n){return console.error(`Standard: Unpublish error for ${e?e.basename:t}:`,n),!1}}async generateTokens(e,t,n){let a=this.plugin.settings.apiKey;if(!a)throw new Error("Connect your Standard Garden account in settings first.");let s=Object.fromEntries(Object.entries(n).filter(([l])=>yl.has(l))),r=await M.requestUrl({url:`${this.plugin.settings.apiUrl}/ai/theme`,method:"POST",headers:{"Content-Type":"application/json","x-api-key":a},body:JSON.stringify({instruction:e,noteContent:t,currentTokens:s}),throw:!1});if(r.status<200||r.status>=300){let l=r.text;throw new Error(`Standard API ${r.status}: ${l}`)}let i=r.json;if(!i.tokens)throw new Error("No tokens returned from AI service");return i.tokens}async publishWithCheck(e){if(!this.checkApiKeyAndShowModal())return null;let n=this.app.metadataCache.getFileCache(e)?.frontmatter||{},a=async()=>(await this.app.fileManager.processFrontMatter(e,i=>{_e(i)||(i.publish=!0),"status"in i&&delete i.status}),await this.publishNote(e)),s=[];return(n.publish===!1||n.publish==="false"||n.status==="draft")&&s.push("\u2022 publish: false \u2014 it was marked not to publish"),String(n.visibility||"").toLowerCase()==="private"&&s.push("\u2022 visibility: private \u2014 visitors won't see it"),s.length>0?new Promise(r=>{new go(this.app,`\u{1F331} Plant "${e.basename}" in the garden anyway?

${s.join(`
`)}`,"Plant it",async()=>r(await a()),()=>r(null)).open()}):await a()}async checkNoteStatus(e){if(!this.plugin.settings.apiKey||this.isPathExcluded(e.path))return{status:"unpublished"};try{let t=await yo(this.app,e),n=t.permalink??t.slug,a=$(e.basename),s=n!=null?String(n).replace(/^\/+|\/+$/g,""):a,r=s===""?"~root":s,i=await Ce(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(r)}`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(i.status===404)return{status:"unpublished"};if(i.status<200||i.status>=300)throw new Error(`HTTP error ${i.status}`);let l=await i.json(),c=l.content||"",f=l.hash,d=l.updated_at?new Date(l.updated_at).getTime():0;this.noteStatsCache.set(e.path,{views:l.views||0,citations:Array.isArray(l.citations)?l.citations:[],related:Array.isArray(l.related)?l.related:[],created_at:l.created_at,updated_at:l.updated_at,online:!0});let p=await this.app.vault.read(e),h=v=>{if(!v)return"";let x=v.replace(/\r\n/g,`
`);return x=x.replace(/!\[\[([^\]]+)\]\]/g,(N,k)=>{let T=k.split("|"),D=T[0].trim(),O=T[1]?T[1].trim():"";return O?`[IMAGE:${O.toLowerCase()}]`:`[IMAGE:${(D.substring(0,D.lastIndexOf("."))||D).toLowerCase()}]`}),x=x.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(N,k,T)=>{let D=k.trim();if(D)return`[IMAGE:${D.toLowerCase()}]`;let O=T.split("/").pop()||"";return`[IMAGE:${(O.substring(0,O.lastIndexOf("."))||O).toLowerCase()}]`}),x.trim()},m=h(p),u=h(c),g=new TextEncoder().encode(m),y=await crypto.subtle.digest("SHA-256",g),w=Array.from(new Uint8Array(y)).map(v=>v.toString(16).padStart(2,"0")).join("");if(f===w)return{status:"synced"};let S=e.stat.mtime;return d>S+5e3?{status:"outdated",remoteContent:c}:{status:"changed"}}catch(t){return console.error("Standard : Erreur lors de la v\xE9rification du statut de la note :",t),{status:"error"}}}async deleteOnlineVersion(e){return this.checkApiKeyAndShowModal()?new Promise(t=>{new go(this.app,`Remove "${e.basename}" from Standard Garden?

The online version will be permanently deleted.`,"Delete online version",async()=>{let n=await this.unpublishNote(e);t(n)},()=>t(null)).open()}):null}async getNoteStats(e){if(!this.plugin.settings.apiKey||this.isPathExcluded(e.path))return null;try{let t=await yo(this.app,e),n=t.permalink??t.slug,a=$(e.basename),s=n!=null?String(n).replace(/^\/+|\/+$/g,""):a,r=s===""?"~root":s,i=await Ce(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(r)}`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(i.status===200){let l=await i.json(),c={views:l.views||0,citations:Array.isArray(l.citations)?l.citations:[],related:Array.isArray(l.related)?l.related:[],created_at:l.created_at,updated_at:l.updated_at,online:!0};return this.noteStatsCache.set(e.path,c),c}return null}catch(t){return console.error("[Standard] Error fetching note stats:",t),null}}async askHypheInquiry(e,t){if(!this.checkApiKeyAndShowModal())return null;try{let n=e?e.basename:"Untitled",a=await M.requestUrl({url:`${this.plugin.settings.apiUrl}/ai/inquire`,method:"POST",headers:{"Content-Type":"application/json","x-api-key":this.plugin.settings.apiKey},body:JSON.stringify({title:n,content:t}),throw:!1});if(a.status===200){let s=a.json;return Array.isArray(s.questions)?s.questions:[]}else{let s=a.text||"";if(s.trim().startsWith("<")||s.includes("<html"))s=`Endpoint returned HTTP ${a.status} (service updating)`;else try{let r=JSON.parse(s);r.error&&(s=r.error)}catch{}throw new Error(s||`Server error (${a.status})`)}}catch(n){throw console.error("[Standard] Error calling askHypheInquiry:",n),n}}async askGardenAI(){this.checkApiKeyAndShowModal()&&new wl(this.app,this.plugin).open()}};Rr.exports={GardenFeature:ko}});var Br=_((em,Ur)=>{"use strict";var{EditorSuggest:Sl,setTooltip:xl}=require("obsidian"),vo=[{id:"feed",name:"::feed",category:"Flux",syntax:"::feed #tag",description:"Flux de cartes visuelles avec image cover, date relative et extrait markdown.",insertText:"::feed #",cursorOffset:8},{id:"list",name:"::list",category:"Flux",syntax:"::list #tag",description:"Liste compacte \xE0 puces des notes li\xE9es au tag sp\xE9cifi\xE9.",insertText:"::list #",cursorOffset:8},{id:"callout",name:"::callout",category:"Bloc",syntax:`::callout note
...
::end`,description:"Bloc callout stylis\xE9 avec ic\xF4ne (note, tip, info, warning, danger, success...).",insertText:`::callout note

::end`,cursorLineOffset:1,cursorChOffset:0},{id:"toggle",name:"::toggle",category:"Bloc",syntax:`::toggle Titre
...
::end`,description:"Section accord\xE9on d\xE9pliable (<details>) avec titre cliquable.",insertText:`::toggle Titre

::end`,cursorLineOffset:1,cursorChOffset:0},{id:"columns",name:"::columns",category:"Mise en page",syntax:`::columns 2
Colonne 1
---
Colonne 2
::end`,description:"Disposition en colonnes r\xE9actives s\xE9par\xE9es par des lignes horizontales (---).",insertText:`::columns 2
Colonne 1
---
Colonne 2
::end`,cursorLineOffset:1,cursorChOffset:0},{id:"cards",name:"::cards",category:"Mise en page",syntax:`::cards
Carte 1
---
Carte 2
::end`,description:"Grille de cartes encadr\xE9es ind\xE9pendantes s\xE9par\xE9es par ---.",insertText:`::cards
Carte 1
---
Carte 2
::end`,cursorLineOffset:1,cursorChOffset:0},{id:"grid",name:"::grid",category:"Mise en page",syntax:`::grid
\xC9l\xE9ment 1
---
\xC9l\xE9ment 2
::end`,description:"Grille fluide s'adaptant au nombre de cellules s\xE9par\xE9es par ---.",insertText:`::grid
\xC9l\xE9ment 1
---
\xC9l\xE9ment 2
::end`,cursorLineOffset:1,cursorChOffset:0},{id:"split",name:"::split",category:"Mise en page",syntax:`::split 8/4
Largeur 8
---
Largeur 4
::end`,description:"Disposition asym\xE9trique sur une grille de 12 colonnes (ex: 8/4, 6/6, 4/8).",insertText:`::split 8/4
Largeur 8
---
Largeur 4
::end`,cursorLineOffset:1,cursorChOffset:0},{id:"hero",name:"::hero",category:"Smart",syntax:`::hero
Paragraphe agrandi`,description:"Met en valeur le paragraphe suivant en grand format typographique Hero.",insertText:`::hero
`,cursorLineOffset:1,cursorChOffset:0},{id:"hero-block",name:"::hero-block",category:"Bloc",syntax:`::hero-block center
...
::end`,description:"Bloc conteneur Hero avec alignement textuel (center, left, right).",insertText:`::hero-block center

::end`,cursorLineOffset:1,cursorChOffset:0},{id:"feature",name:"::feature",category:"Smart",syntax:`::feature
Paragraphe vedette`,description:"Met en avant le paragraphe suivant avec un style vedette.",insertText:`::feature
`,cursorLineOffset:1,cursorChOffset:0},{id:"feature-block",name:"::feature-block",category:"Bloc",syntax:`::feature-block
...
::end`,description:"Bloc conteneur mis en avant avec fond contrast\xE9 et bordure l\xE9g\xE8re.",insertText:`::feature-block

::end`,cursorLineOffset:1,cursorChOffset:0},{id:"editorial",name:"::editorial",category:"Smart",syntax:`::editorial
Paragraphe \xE9ditorial`,description:"Typographie de style grand article \xE9ditorial pour le paragraphe suivant.",insertText:`::editorial
`,cursorLineOffset:1,cursorChOffset:0},{id:"excerpt",name:"::excerpt",category:"Smart",syntax:`::excerpt
Chapeau du texte`,description:"Extrait introductif ou chapeau de texte mis en valeur.",insertText:`::excerpt
`,cursorLineOffset:1,cursorChOffset:0},{id:"card",name:"::card",category:"Bloc",syntax:`::card
...
::end`,description:"Encadre le contenu dans une carte de surface avec fond et bordure.",insertText:`::card

::end`,cursorLineOffset:1,cursorChOffset:0},{id:"center",name:"::center",category:"Bloc",syntax:`::center
...
::end`,description:"Centre horizontalement le texte et les \xE9l\xE9ments contenus dans le bloc.",insertText:`::center

::end`,cursorLineOffset:1,cursorChOffset:0},{id:"small",name:"::small",category:"Bloc",syntax:`::small
...
::end`,description:"Corps r\xE9duit pour notes de bas de page ou mentions secondaires.",insertText:`::small

::end`,cursorLineOffset:1,cursorChOffset:0},{id:"accent",name:"::accent",category:"Bloc",syntax:`::accent
...
::end`,description:"Bloc teint\xE9 utilisant la couleur d'accentuation du th\xE8me actif.",insertText:`::accent

::end`,cursorLineOffset:1,cursorChOffset:0},{id:"video",name:"::video",category:"M\xE9dia",syntax:"::video https://...",description:"Lecteur vid\xE9o responsive (YouTube, Vimeo, ou fichier MP4 direct).",insertText:"::video ",cursorOffset:8},{id:"image",name:"::image",category:"M\xE9dia",syntax:`::image
![Photo](url)
L\xE9gende
::end`,description:"Figure avec image et l\xE9gende typographi\xE9e int\xE9gr\xE9e.",insertText:`::image
![Image](url)
L\xE9gende
::end`,cursorLineOffset:1,cursorChOffset:8},{id:"gallery",name:"::gallery",category:"M\xE9dia",syntax:`::gallery
...
---
...
::end`,description:"Galerie de visuels r\xE9active organis\xE9e en colonnes.",insertText:`::gallery
![Image 1](url)
---
![Image 2](url)
::end`,cursorLineOffset:1,cursorChOffset:0},{id:"button",name:"::button",category:"Action",syntax:`::button primary
[Texte](https://)
::end`,description:"Transforme un lien markdown en bouton call-to-action cliquable.",insertText:`::button primary
[Bouton](https://)
::end`,cursorLineOffset:1,cursorChOffset:1},{id:"download",name:"::download",category:"Action",syntax:"::download Libell\xE9",description:"Bouton de t\xE9l\xE9chargement pour document ou pi\xE8ces jointes.",insertText:"::download T\xE9l\xE9charger",cursorOffset:11},{id:"space",name:"::space",category:"Mise en page",syntax:"::space medium",description:"Espacement vertical (small, medium, large, xlarge).",insertText:"::space medium",cursorOffset:14},{id:"note",name:"::note",category:"Alerte",syntax:"::note Message",description:"Note informative discr\xE8te en encadr\xE9 lat\xE9ral (aside).",insertText:"::note ",cursorOffset:7},{id:"alert",name:"::alert",category:"Alerte",syntax:"::alert Message",description:"Message d'alerte contextuel encadr\xE9.",insertText:"::alert ",cursorOffset:8},{id:"warning",name:"::warning",category:"Alerte",syntax:"::warning Message",description:"Avertissement ou pr\xE9caution recommand\xE9e.",insertText:"::warning ",cursorOffset:10},{id:"error",name:"::error",category:"Alerte",syntax:"::error Message",description:"Message d'erreur critique ou signalement d'\xE9chec.",insertText:"::error ",cursorOffset:8},{id:"success",name:"::success",category:"Alerte",syntax:"::success Message",description:"Message de validation ou de r\xE9ussite positive.",insertText:"::success ",cursorOffset:10},{id:"muted",name:"::muted",category:"Texte",syntax:"::muted Texte",description:"Texte estomp\xE9 en couleur secondaire att\xE9nu\xE9e.",insertText:"::muted ",cursorOffset:8},{id:"subtle",name:"::subtle",category:"Texte",syntax:"::subtle Texte",description:"Texte discret avec transparence subtile.",insertText:"::subtle ",cursorOffset:9},{id:"widget",name:"::widget",category:"Composant",syntax:"::widget NomDuWidget",description:"Int\xE8gre un widget web interactif.",insertText:"::widget ",cursorOffset:9},{id:"form",name:"::form",category:"Composant",syntax:`::form contact
Nom
Email
Message
::end`,description:"Formulaire interactif avec champs et bouton d'envoi.",insertText:`::form contact
Nom
Email
Message
::end`,cursorLineOffset:1,cursorChOffset:0}],So=class extends Sl{constructor(e,t){super(e),this.plugin=t}onTrigger(e,t,n){let r=t.getLine(e.line).slice(0,e.ch).match(/(?:^|[\s>])(::([a-zA-Z0-9_-]*))$/);if(!r)return null;let i=r[1],l=r[2],c=e.ch-i.length,f={start:{line:e.line,ch:c},end:{line:e.line,ch:e.ch},query:l};return this.latestTriggerInfo=f,f}getSuggestions(e){let t=(e.query||"").toLowerCase().trim(),n;return t?n=vo.filter(a=>a.id.toLowerCase().includes(t)||a.name.toLowerCase().includes(t)||a.category.toLowerCase().includes(t)||a.description.toLowerCase().includes(t)):n=vo,n.map(a=>({...a,context:e}))}renderSuggestion(e,t){t.addClass("stnd-suggest-item");let n=t.createDiv({cls:"stnd-suggest-header"});n.createSpan({cls:"stnd-suggest-name",text:e.name});let a=`stnd-suggest-badge badge-${e.category.toLowerCase().replace(/[^a-z]/g,"")}`;n.createSpan({cls:a,text:e.category}),e.syntax&&n.createSpan({cls:"stnd-suggest-syntax",text:e.syntax}),t.createDiv({cls:"stnd-suggest-desc",text:e.description});let s=`${e.name} (${e.category})
Syntaxe: ${e.syntax}
${e.description}`;try{xl(t,s,{placement:"right"})}catch{t.setAttribute("title",s)}}selectSuggestion(e,t){let n=e.context||this.context||this.latestTriggerInfo,a=this.app.workspace.activeEditor?.editor||this.context?.editor;if(!a||!n)return;let{start:s,end:r}=n;a.replaceRange(e.insertText,s,r),e.cursorOffset!==void 0?a.setCursor({line:s.line,ch:s.ch+e.cursorOffset}):e.cursorLineOffset!==void 0&&a.setCursor({line:s.line+e.cursorLineOffset,ch:e.cursorChOffset||0}),this.close()}};Ur.exports={StandardDirectiveSuggest:So,DIRECTIVES:vo}});var To=_((nm,jr)=>{"use strict";var{BasesView:Tl,MarkdownRenderer:Nl,Setting:tm}=require("obsidian"),Hr="standard-feed",El="atelier-feed",_r={maxItems:50,previewChars:600,showCovers:!0};function qr(o){if(!o)return"";let e=new Date(o);if(isNaN(e.getTime()))return"";let n=Math.floor((new Date().getTime()-e.getTime())/864e5);return n===0?"Aujourd'hui":n===1?"Hier":n>1&&n<7?`Il y a ${n} jours`:e.toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function Cl(o){if(!o)return"";if(o.startsWith("---")){let e=o.indexOf(`
---`,3);if(e!==-1){let t=o.indexOf(`
`,e+1);return t!==-1?o.slice(t+1):""}}return o}function Ll(o,e,t){let n=t?.frontmatter||t||{};for(let r of["cover","image","banner"]){let i=null;if(typeof t?.getValue=="function")try{i=t.getValue(`note.${r}`)}catch{}if(!i&&n[r]&&(i=n[r]),i){let l=String(i).trim();if(/^https?:\/\//i.test(l))return l;let c=l.replace(/^\[\[/,"").replace(/\]\]$/,""),f=o.metadataCache.getFirstLinkpathDest(c,"");if(f)return o.vault.adapter.getResourcePath(f.path)}}let a=e.match(/!\[[^\]]*\]\(([^)]+)\)/);if(a){let r=a[1].trim();if(/^https?:\/\//i.test(r))return r;let i=o.metadataCache.getFirstLinkpathDest(r,"");if(i)return o.vault.adapter.getResourcePath(i.path)}let s=e.match(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/);if(s){let r=s[1].trim(),i=o.metadataCache.getFirstLinkpathDest(r,"");if(i)return o.vault.adapter.getResourcePath(i.path)}return null}var $n=class o{static async renderCard(e,t,n,a={},s=null){let{previewChars:r=600,showCovers:i=!0,token:l=null,getToken:c=()=>null}=a,f=t.createDiv({cls:"stnd-feed-card"}),d=f.createDiv({cls:"stnd-feed-card-header"}),h=e.metadataCache.getFileCache(n)?.frontmatter||{},m=h.title||n.basename;d.createDiv({cls:"stnd-feed-title",text:m});let u=h.publish||h.created||n.stat?.mtime;u&&d.createDiv({cls:"stnd-feed-date",text:qr(u)}),f.addEventListener("click",y=>{y.target.closest("a")||e.workspace.getLeaf(y.metaKey||y.ctrlKey?"tab":!1).openFile(n)});let g=f.createDiv({cls:"stnd-feed-body"});try{let y=await e.vault.cachedRead(n);if(l!==null&&c()!==l)return;let b=Cl(y);if(i){let w=Ll(e,b,h);if(w){let S=g.createEl("img",{cls:"stnd-feed-cover"});S.src=w,S.loading="lazy"}}r>0&&b.length>r&&(b=b.slice(0,r).trimEnd()+"\u2026"),b&&await Nl.render(e,b,g,n.path,s)}catch{}}static renderFeedOrList(e,t,n,a,s,r=null){let i=(a||"").replace(/^#/,"").trim().toLowerCase(),l=e.vault.getMarkdownFiles(),c=[],f=(s?.settings?.keyPrefix||"")+(s?.settings?.publishKey||"publish");for(let d of l){let p=e.metadataCache.getFileCache(d),h=p?.frontmatter||{},u=[...Array.isArray(h.tags)?h.tags:typeof h.tags=="string"?[h.tags]:[],...(p?.tags||[]).map(y=>y.tag)];if((!i||u.some(y=>{let b=String(y).toLowerCase().replace(/^#/,"");return b===i||b.startsWith(i+"/")}))&&(h[f]===!0||typeof h[f]=="string"||h.visibility==="public"||!!h[f])){let b=h.publish?new Date(h.publish).getTime():h.created?new Date(h.created).getTime():d.stat.mtime;c.push({file:d,title:h.title||d.basename,time:isNaN(b)?d.stat.mtime:b,excerpt:h.excerpt||"",fm:h})}}if(c.sort((d,p)=>p.time-d.time),c.length===0){let d=t.createEl("p",{text:i?`Aucune note publique trouv\xE9e pour #${i}`:"Aucune note publique trouv\xE9e.",cls:"stnd-feed-empty"});return}if(n==="list"){let d=t.createEl("ul",{cls:"stnd-feed-list"});c.forEach(p=>{let h=d.createEl("li");h.createEl("a",{text:p.title,cls:"internal-link stnd-feed-link"}).addEventListener("click",u=>{u.preventDefault(),e.workspace.getLeaf().openFile(p.file)}),p.time&&h.createSpan({cls:"stnd-feed-list-date",text:` (${qr(p.time)})`})})}else{let d=t.createDiv({cls:"stnd-feed"});c.forEach(p=>{o.renderCard(e,d,p.file,{previewChars:s?.settings?.feed?.previewChars??600,showCovers:s?.settings?.feed?.showCovers??!0},r)})}}},zt=class extends(Tl||class{}){constructor(t,n,a){super(t);Go(this,"type",Hr);this.feedContainerEl=n,this.settings=a,this.renderToken=0}onload(){this.feedContainerEl.addClass("stnd-feed"),this._render()}onunload(){this.renderToken++,this.feedContainerEl.removeClass("stnd-feed"),this.feedContainerEl.empty()}onDataUpdated(){this._render()}_render(){let t=++this.renderToken,n=this.feedContainerEl;if(!n||(n.empty(),!this.data))return;let a=this.data?.data??[];if(a.length===0){n.createDiv({cls:"stnd-feed-empty",text:"Aucune note dans ce feed."});return}let s=this._option("maxItems",this.settings?.maxItems??50),r=this._option("previewChars",this.settings?.previewChars??600),i=this._option("showCovers",this.settings?.showCovers??!0),l=a.slice(0,s);for(let c of l){let f=c.file;f&&$n.renderCard(this.app,n,f,{previewChars:r,showCovers:i,token:t,getToken:()=>this.renderToken},this)}a.length>l.length&&n.createDiv({cls:"stnd-feed-more",text:`+ ${a.length-l.length} note(s) de plus \u2014 affine le filtre ou augmente la limite.`})}_option(t,n){try{let a=this.config?.get?.(t);return a??n}catch{return n}}},xo=class{constructor(e,t){this.app=e,this.plugin=t,t.settings.feed||(t.settings.feed={..._r}),this.settings=t.settings.feed}async load(){if(typeof this.plugin.registerBasesView=="function"){let e=()=>[{type:"slider",key:"maxItems",displayName:"Max entries",default:this.settings.maxItems,min:5,max:200,step:5},{type:"slider",key:"previewChars",displayName:"Preview length (chars, 0 = full)",default:this.settings.previewChars,min:0,max:2e3,step:100},{type:"toggle",key:"showCovers",displayName:"Show cover images",default:this.settings.showCovers}];this.plugin.registerBasesView(Hr,{name:"Feed",icon:"rss",factory:(t,n)=>new zt(t,n,this.settings),options:e}),this.plugin.registerBasesView(El,{name:"Feed (Legacy)",icon:"rss",factory:(t,n)=>new zt(t,n,this.settings),options:e})}}async unload(){}};jr.exports={FeedFeature:xo,FeedBasesView:zt,FeedCardRenderer:$n,DEFAULT_FEED_SETTINGS:_r}});var Kr=_((rm,Vr)=>{"use strict";var sm=require("obsidian"),{StandardDirectiveSuggest:Fl}=Br(),{FeedCardRenderer:Dl}=To();function Al(o){if(!o)return null;try{let e=new URL(o);if((e.hostname==="www.youtube.com"||e.hostname==="youtube.com")&&e.searchParams.has("v"))return e.searchParams.get("v");if(e.hostname==="youtu.be")return e.pathname.slice(1).split("/")[0]||null;if((e.hostname==="www.youtube.com"||e.hostname==="youtube.com")&&e.pathname.startsWith("/embed/"))return e.pathname.split("/")[2]||null}catch{}return null}function Ml(o){if(!o)return null;try{let e=new URL(o);if(e.hostname==="vimeo.com"||e.hostname==="www.vimeo.com"){let t=e.pathname.split("/").filter(Boolean),n=t[t.length-1];if(n&&/^\d+$/.test(n))return n}if(e.hostname==="player.vimeo.com"&&e.pathname.startsWith("/video/"))return e.pathname.split("/")[2]||null}catch{}return null}var No=class{constructor(e,t){this.app=e,this.plugin=t}async load(){this.plugin.registerMarkdownPostProcessor((e,t)=>{this.processSyntaxDirectives(e,t)}),this.plugin.registerEditorSuggest(new Fl(this.app,this.plugin))}async unload(){}processSyntaxDirectives(e,t){Array.from(e.querySelectorAll("p")).forEach(r=>{let i=r.textContent.trim();if(i.startsWith("::space")){let d=i.substring(7).trim(),h=`space-${{small:"2",medium:"4",large:"6",xlarge:"8"}[d]||"4"}`,m=document.createElement("div");m.className=h,r.replaceWith(m);return}if(i.startsWith("::download")){let d=i.substring(10).trim()||"Download",p=document.createElement("button");p.type="button",p.className="btn note-download",p.textContent=d,r.replaceWith(p);return}let l=i.match(/^::(note|alert|warning|error|success|muted|subtle)\s+([\s\S]+)$/i);if(l){let d=l[1].toLowerCase(),p=l[2].trim(),h;if(d==="note"?(h=document.createElement("aside"),h.className="note",h.textContent=p):["alert","warning","error","success"].includes(d)?(h=document.createElement("div"),h.className=`alert ${d==="alert"?"":d}`,h.textContent=p):["muted","subtle"].includes(d)&&(h=document.createElement("p"),h.className=d,h.textContent=p),h){r.replaceWith(h);return}}let c=i.match(/^::video\s+([^\n]+)/i);if(c){let d=c[1].trim(),p=this.renderVideoEmbed(d);if(p){r.replaceWith(p);return}}let f=i.match(/^::(feed|list)(?:\s+([^\n]+))?$/i);if(f){let d=f[1].toLowerCase(),p=(f[2]||"").trim(),h=document.createElement("div");h.className=`dynamic-feed-container feed-type-${d}`,this.renderFeedOrList(h,d,p,t),r.replaceWith(h);return}});let a=Array.from(e.children),s=0;for(;s<a.length;){let r=a[s];if(r.tagName==="P"){let l=r.textContent.trim().match(/^::(callout|toggle|cards|hero-block|small|accent|feature-block|center|grid|split|columns|card|image|gallery|button|form|hero|full|feature|editorial|excerpt)\s*(.*)$/i);if(l){let c=l[1].toLowerCase(),f=l[2].trim(),d=-1;for(let p=s+1;p<a.length;p++)if(a[p].tagName==="P"&&a[p].textContent.trim()==="::end"){d=p;break}if(d!==-1){let p=a.slice(s+1,d),h=this.renderBlockContainer(c,f,p);if(h){r.replaceWith(h);for(let m of p)m.remove();a[d].remove(),a.splice(s+1,d-s)}}else if(["hero","full","feature","editorial","excerpt","card"].includes(c)){let h=a[s+1];if(h){let m=document.createElement("div");for(m.className=c;h.firstChild;)m.appendChild(h.firstChild);h.replaceWith(m),r.remove(),a.splice(s,1);continue}}}}s++}}renderFeedOrList(e,t,n,a=null){Dl.renderFeedOrList(this.app,e,t,n,this.plugin,a)}splitInnerElements(e){let t=[],n=[];for(let a of e)a.tagName==="HR"?n.length>0&&(t.push(n),n=[]):n.push(a);return n.length>0&&t.push(n),t}renderVideoEmbed(e){if(!e)return null;let t=document.createElement("div");t.className="video-container",t.style.cssText="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1.5rem 0;";let n=Al(e);if(n){let i=t.createEl("iframe");return i.src=`https://www.youtube-nocookie.com/embed/${n}`,i.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;",i.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),i.setAttribute("allowfullscreen","true"),t}let a=Ml(e);if(a){let i=t.createEl("iframe");return i.src=`https://player.vimeo.com/video/${a}`,i.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;",i.setAttribute("allow","autoplay; fullscreen; picture-in-picture"),i.setAttribute("allowfullscreen","true"),t}let s=document.createElement("div");s.className="video-container native-video",s.style.margin="1.5rem 0";let r=s.createEl("video");return r.src=e,r.setAttribute("controls","true"),r.setAttribute("preload","metadata"),r.style.cssText="width: 100%; max-height: 500px; border-radius: var(--radius-m);",s}renderBlockContainer(e,t,n){let a;if(e==="callout"){let s=t.match(/^([+-])?\s*(.+)$/),r=s?s[1]:null,i=s?s[2]:t||"Note",l=r==="+"||r==="-",c=r==="+",f=i.toLowerCase(),d=i.charAt(0).toUpperCase()+i.slice(1),p={note:"\u{1F4DD}",tip:"\u{1F4A1}",info:"\u2139\uFE0F",warning:"\u26A0\uFE0F",danger:"\u26A1",success:"\u2705",question:"\u2753",quote:"\u{1F4AC}",abstract:"\u{1F4CB}",bug:"\u{1F41B}",example:"\u{1F4C4}",failure:"\u274C",todo:"\u2611\uFE0F"},h=p[f]||p.note;if(l){a=document.createElement("details"),a.className="callout",a.setAttribute("data-callout",f),c&&a.setAttribute("open","");let m=a.createEl("summary",{cls:"callout-title"});m.createEl("span",{text:h,cls:"callout-icon"}),m.createEl("span",{text:d,cls:"callout-title-inner"});let u=a.createDiv({cls:"callout-content"});n.forEach(g=>u.appendChild(g.cloneNode(!0)))}else{a=document.createElement("div"),a.className="callout",a.setAttribute("data-callout",f);let m=a.createDiv({cls:"callout-title"});m.createEl("span",{text:h,cls:"callout-icon"}),m.createEl("span",{text:d,cls:"callout-title-inner"});let u=a.createDiv({cls:"callout-content"});n.forEach(g=>u.appendChild(g.cloneNode(!0)))}}else if(e==="toggle"){a=document.createElement("details"),a.className="toggle-block";let s=a.createEl("summary",{text:t||"Details"}),r=a.createDiv({cls:"toggle-content"});n.forEach(i=>r.appendChild(i.cloneNode(!0)))}else if(e==="columns"){let s=t||"2",r=this.splitInnerElements(n);a=document.createElement("div"),a.className=`columns-${s}`,a.style.cssText=`display: grid; grid-template-columns: repeat(${s}, 1fr); gap: 1.5rem; margin: 1.5rem 0;`,r.forEach(i=>{let l=a.createDiv({cls:"column"});i.forEach(c=>l.appendChild(c.cloneNode(!0)))})}else if(e==="grid"||e==="cards"){let s=this.splitInnerElements(n),r=s.length;a=document.createElement("div"),a.className=e==="cards"?`grid-${r}`:`grid-${r}`,a.style.cssText=`display: grid; grid-template-columns: repeat(${r}, 1fr); gap: 1.5rem; margin: 1.5rem 0;`,s.forEach(i=>{let l=a.createDiv({cls:e==="cards"?"sm:row card":"sm:row"});e==="cards"&&(l.style.cssText="border: 1px solid var(--background-modifier-border); padding: 1rem; border-radius: var(--radius-m); background: var(--background-primary);"),i.forEach(c=>l.appendChild(c.cloneNode(!0)))})}else if(e==="split"){let s=t.split("/").map(i=>parseInt(i,10)).filter(i=>!isNaN(i)&&i>0),r=this.splitInnerElements(n);a=document.createElement("div"),a.className="grid",a.style.cssText="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.5rem; margin: 1.5rem 0;",r.forEach((i,l)=>{let c=s[l]||Math.max(1,Math.floor(12/r.length)),f=a.createDiv({cls:`sm:row col-${c}`});f.style.gridColumn=`span ${c}`,i.forEach(d=>f.appendChild(d.cloneNode(!0)))})}else if(e==="gallery"){let s=this.splitInnerElements(n),r=s.length,i=Math.max(1,Math.floor(12/r));a=document.createElement("div"),a.className="gallery grid gap-4",a.style.cssText="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem; margin: 1.5rem 0;",s.forEach(l=>{let c=a.createDiv({cls:`col-12 md:col-${i}`});c.style.gridColumn=`span ${i}`,l.forEach(f=>c.appendChild(f.cloneNode(!0)))})}else if(e==="image"){let s=t||"";a=document.createElement("figure"),a.className=`image-${s}`;let r="",i="";n.forEach(c=>{let f=c.querySelector("img");f?r=f.src:c.tagName==="IMG"?r=c.src:i+=(i?`
`:"")+c.textContent.trim()}),!r&&n.length>0&&(r=n[0].textContent.trim(),i=n.slice(1).map(c=>c.textContent.trim()).join(`
`));let l=a.createEl("img");l.src=r,l.alt=i,i&&a.createEl("figcaption",{text:i})}else if(e==="button"){let s=t||"",r=n.find(i=>i.tagName==="A")||n.reduce((i,l)=>i||l.querySelector("a"),null);r?(a=r.cloneNode(!0),a.className=s?`button button-${s}`:"button",a.style.cssText="display: inline-block; padding: 0.5rem 1rem; border-radius: var(--radius-m); background: var(--interactive-accent); color: var(--text-on-accent); text-decoration: none; font-weight: bold;"):(a=document.createElement("div"),a.className="button-wrapper",n.forEach(i=>a.appendChild(i.cloneNode(!0))))}else if(e==="form"){a=document.createElement("form"),a.className=`form form-${t||"contact"}`,a.style.cssText="display: flex; flex-direction: column; gap: 1rem; border: 1px solid var(--background-modifier-border); padding: 1.5rem; border-radius: var(--radius-m); background: var(--background-primary); max-width: 500px; margin: 1.5rem 0;";let s=n.map(l=>l.textContent.trim()).filter(Boolean),r=[];s.forEach(l=>{l.split(/\n/).forEach(c=>{let f=c.trim();f&&r.push(f)})}),r.forEach(l=>{let c=l.toLowerCase(),f=c==="email"?"email":c==="message"?"textarea":"text",d=a.createDiv({cls:"form-field"});d.style.cssText="display: flex; flex-direction: column; gap: 0.25rem;";let p=d.createEl("label",{text:l});if(p.setAttribute("for",c),p.style.fontWeight="bold",p.style.fontSize="var(--font-ui-small)",f==="textarea"){let h=d.createEl("textarea",{id:c});h.style.cssText="resize: vertical; min-height: 100px; padding: 0.5rem; border: 1px solid var(--background-modifier-border); border-radius: var(--radius-s); background: var(--background-secondary); color: var(--text-normal);"}else{let h=d.createEl("input",{type:f,id:c});h.style.cssText="padding: 0.5rem; border: 1px solid var(--background-modifier-border); border-radius: var(--radius-s); background: var(--background-secondary); color: var(--text-normal);"}});let i=a.createEl("button",{text:"Send",type:"submit",cls:"button button-primary"});i.style.cssText="align-self: flex-start; padding: 0.5rem 1rem; border-radius: var(--radius-s); background: var(--interactive-accent); color: var(--text-on-accent); border: none; font-weight: bold; cursor: pointer;"}else if(e==="card"||e==="small"||e==="accent"||e==="center")a=document.createElement("div"),a.className=e==="card"?"card":`container-${e}`,n.forEach(s=>a.appendChild(s.cloneNode(!0)));else if(e==="hero-block"||e==="feature-block"){a=document.createElement("div");let s=e==="hero-block"?"container-hero":"container-feature",r=t?`text-${t}`:"";a.className=`${s} ${r}`.trim(),n.forEach(i=>a.appendChild(i.cloneNode(!0)))}else a=document.createElement("div"),a.className=`stnd-syntax-block block-type-${e}`,n.forEach(s=>a.appendChild(s.cloneNode(!0)));return a}};Vr.exports={SyntaxPreviewFeature:No}});var ta=_((lm,Jr)=>{"use strict";var{PluginSettingTab:Ol,Setting:Eo,Notice:pt,SuggestModal:Il,MarkdownView:Gr}=require("obsidian"),{Decoration:Jt,ViewPlugin:Rl}=require("@codemirror/view"),{descWithLinks:im}=le();function Pl(o,e){let t=o.metadataCache.getFileCache(e),n=[];if(t?.frontmatter?.aliases){let a=t.frontmatter.aliases;Array.isArray(a)?n.push(...a):typeof a=="string"&&n.push(...a.split(",").map(s=>s.trim()))}if(t?.frontmatter?.alias){let a=t.frontmatter.alias;Array.isArray(a)?n.push(...a):typeof a=="string"&&n.push(...a.split(",").map(s=>s.trim()))}return n.filter(Boolean)}function ut(o){return o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Wr(o){if(!o)return"";let e=o.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);if(!e)return o;let t=o.indexOf(e[1]),n=e[1],a=t+n.length,s=n.replace(/[^\r\n]/g," ");return o.slice(0,t)+s+o.slice(a)}var zr=new Set(["readme","license","licence","changelog","changes","todo","index","private","note","notes","untitled","sans titre","scratchpad","log","logs","journal","template","templates","draft","drafts","archive","archives"]),Ul=new Set(["jour","note","base","page","text","texte","type","item","tout","tous","bien","faire","fait","voir","avec","sans","pour","dans","plus","mais","comme","importe","aura","avoir","etre","peut","dire","mode","meta","info","data","true","false","null"]);function Bl(o,e){if(!o?.path)return!0;let t=o.path.toLowerCase();if(t.startsWith(".trash/")||t.includes("/.trash/")||t.startsWith("templates/")||t.includes("/templates/")||t.startsWith("_templates/")||t.startsWith("archive/")||t.includes("/archive/")||t.startsWith("archives/")||zr.has(o.basename.toLowerCase()))return!0;if(e?.settings?.excludedFolders){let s=e.settings.excludedFolders,r=Array.isArray(s)?s:String(s).split(",").map(l=>l.trim().toLowerCase().replace(/^\/+|\/+$/g,"")).filter(Boolean),i=o.path.toLowerCase().replace(/^\/+/,"");if(r.some(l=>i.startsWith(l+"/")||i===l))return!0}let n=e?.app?.metadataCache?.getFileCache(o),a=[];if(n?.tags&&a.push(...n.tags.map(s=>s.tag.toLowerCase().replace(/^#/,""))),n?.frontmatter?.tags){let s=n.frontmatter.tags;Array.isArray(s)?a.push(...s.map(r=>String(r).toLowerCase().replace(/^#/,""))):typeof s=="string"&&a.push(...s.split(",").map(r=>r.trim().toLowerCase().replace(/^#/,"")))}return!!a.includes("backlink-exclude")}var ql=[/\b(?:mise|mis|mettre|met|mettait|foutre|foutu)\s+à\s+la\s+porte\b/gi,/\b(?:prendre|pris|prend)\s+la\s+porte\b/gi,/\b(?:au\s+bout\s+du\s+compte)\b/gi,/\b(?:de\s+temps\s+en\s+temps)\b/gi,/\b(?:coup\s+de\s+main)\b/gi];async function Co(o,e,t=null){let n=await o.vault.cachedRead(e),a=Wr(n),s=o.vault.getMarkdownFiles(),r=[],i=new Set,l=new Set,c=[];for(let d of ql){d.lastIndex=0;let p;for(;(p=d.exec(a))!==null;)c.push({start:p.index,end:p.index+p[0].length})}for(let d of s){if(d.path===e.path||Bl(d,t))continue;let p=d.basename.toLowerCase();if(i.has(p)||(o.metadataCache.resolvedLinks[e.path]||{}).hasOwnProperty(d.path)||(o.metadataCache.resolvedLinks[d.path]||{}).hasOwnProperty(e.path))continue;let u=[d.basename,...Pl(o,d)],g=!1,y="";for(let b of u){let w=b.toLowerCase().trim();if(w.length<3||Ul.has(w)||zr.has(w)||l.has(w))continue;let S=new RegExp(`\\b${ut(b)}\\b`,"gi"),v,x=0;for(;(v=S.exec(a))!==null;){let N=v.index,k=N+v[0].length,T=Math.max(0,N-100),D=Math.min(a.length,k+100),O=a.slice(T,D),F=N-T,U=F+v[0].length,I=O.slice(0,F),B=O.slice(U);I.lastIndexOf("[[")>I.lastIndexOf("]]")&&B.indexOf("]]")!==-1||I.lastIndexOf("[")>I.lastIndexOf("]")&&B.indexOf(")")!==-1||c.some(J=>N>=J.start&&k<=J.end)||x++}if(x>0){g=!0,y=b;break}}g&&(i.add(p),l.add(y.toLowerCase().trim()),r.push({file:d,term:y}))}let f=[];r.sort((d,p)=>(p.term?.length||0)-(d.term?.length||0));for(let d=0;d<r.length;d++){let p=r[d],h=!1;for(let m of f)if(m.term.toLowerCase().includes(p.term.toLowerCase())){let u=a.replace(new RegExp(`\\b${ut(m.term)}\\b`,"gi")," ");if(!new RegExp(`\\b${ut(p.term)}\\b`,"gi").test(u)){h=!0;break}}h||f.push(p)}return f}async function ht(o,e,t){let n=await o.vault.read(e),a=n,s=Wr(n),r=t.term,i=new RegExp(`\\b${ut(r)}\\b`,"gi"),l,c=[];for(;(l=i.exec(s))!==null;)c.push({start:l.index,end:l.index+l[0].length,text:l[0]});let f=[],d=/(\[\[.*?\]\])|(\[.*?\]\(.*?\))/g,p;for(;(p=d.exec(n))!==null;)f.push({start:p.index,end:p.index+p[0].length});let h=null;for(let m=c.length-1;m>=0;m--){let u=c[m],g=!1;for(let y of f)if(u.start>=y.start&&u.end<=y.end){g=!0;break}if(!g){h=u;break}}if(h){let m=n.substring(0,h.start),u=n.substring(h.end),g=`[[${t.file.basename}]]`;t.file.basename!==h.text&&(g=`[[${t.file.basename}|${h.text}]]`);let y=m+g+u;await o.vault.modify(e,y);let b=new pt("",7e3),w=b.noticeEl;w.empty(),w.createSpan({text:`Li\xE9 : "${r}" \u2192 [[${t.file.basename}]]`});let S=w.createEl("button",{text:"Annuler",cls:"stnd-panel-btn stnd-panel-btn-secondary"});S.style.cssText="margin-left: 8px; padding: 2px 8px; font-size: 11px; height: 22px;",S.addEventListener("click",async()=>{await o.vault.modify(e,a),b.hide(),new pt(`Lien annul\xE9 : "${r}"`),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),typeof window.stndPanelRefreshLinks=="function"&&window.stndPanelRefreshLinks()})}else new pt(`Impossible de trouver une occurrence valide pour "${r}".`)}var ea=0,Hl=Rl.fromClass(class{constructor(o){this.lastRevision=ea,this.decorations=Jt.none,this.view=o,this.buildDecorations(o)}update(o){(o.docChanged||o.viewportChanged||this.lastRevision!==ea)&&(this.lastRevision=ea,this.buildDecorations(o.view))}buildDecorations(o){if(!window.stndMyceliumSettings?.enableGhostLinks){this.decorations=Jt.none;return}let t=window.stndMyceliumCache||[];if(!t||t.length===0){this.decorations=Jt.none;return}let n=[...t].sort((c,f)=>(f.term?.length||0)-(c.term?.length||0)),a=[],s=[],r=-1,i=o.app||window.app,l=i?.workspace?.getActiveFile();if(l&&i?.metadataCache){let c=i.metadataCache.getFileCache(l);c?.frontmatterPosition&&(r=c.frontmatterPosition.end.offset)}for(let{from:c,to:f}of o.visibleRanges){let d=o.state.doc.sliceString(c,f);if(d)for(let p of n){let h=p.term;if(!h||h.length<2)continue;let m=new RegExp(`\\b${ut(h)}\\b`,"gi"),u;for(;(u=m.exec(d))!==null;){let g=c+u.index,y=g+u[0].length;if(r>-1&&g<r)continue;let b=Math.max(0,g-150),w=Math.min(o.state.doc.length,y+150),S=o.state.doc.sliceString(b,w),v=g-b,x=v+u[0].length,N=S.slice(0,v),k=S.slice(x);N.lastIndexOf("[[")>N.lastIndexOf("]]")&&k.indexOf("]]")!==-1||N.lastIndexOf("[")>N.lastIndexOf("]")&&k.indexOf(")")!==-1||s.some(D=>g>=D.start&&g<D.end||y>D.start&&y<=D.end||g<=D.start&&y>=D.end)||(s.push({start:g,end:y}),a.push(Jt.mark({class:"mycelium-ghost-link",attributes:{title:`\u{1F331} Click to open ${p.file.basename} \xB7 Alt+Click to link`,"data-target":p.file.path,"data-term":h,"data-basename":p.file.basename}}).range(g,y)))}}}a.sort((c,f)=>c.from-f.from||c.to-f.to),this.decorations=Jt.set(a)}},{decorations:o=>o.decorations,eventHandlers:{click:(o,e)=>{let t=o.target.closest(".mycelium-ghost-link");if(!t)return!1;let n=t.getAttribute("data-target"),a=t.getAttribute("data-term"),s=t.getAttribute("data-basename")||t.textContent;if(!n||!a)return!1;let r=e.app||window.app,i=r.vault.getAbstractFileByPath(n),l=r.workspace.getActiveFile();if(!i||!l)return!1;if(o.altKey)return o.preventDefault(),o.stopPropagation(),ht(r,l,{file:i,term:a}),!0;let{Menu:c,Platform:f}=require("obsidian");if(f.isMobile){o.preventDefault(),o.stopPropagation();let d=new c;return d.addItem(p=>{p.setTitle(`Lier [[${s}]]`).setIcon("link").onClick(()=>{ht(r,l,{file:i,term:a})})}),d.showAtMouseEvent(o),!0}return o.preventDefault(),o.stopPropagation(),r.workspace.getLeaf(o.ctrlKey||o.metaKey).openFile(i),!0}}}),Lo=class extends Il{constructor(e,t,n){super(e),this.activeFile=t,this.suggestions=n,this.setPlaceholder("Select a concept to link...")}getSuggestions(e){return this.suggestions.filter(t=>t.file.basename.toLowerCase().includes(e.toLowerCase())||t.term.toLowerCase().includes(e.toLowerCase()))}renderSuggestion(e,t){t.createEl("div",{text:e.file.basename,cls:"link-suggest-title"}),t.createEl("small",{text:`Found mention: "${e.term}"`,cls:"link-suggest-desc"})}async onChooseSuggestion(e,t){await ht(this.app,this.activeFile,e)}};function _l(o,e){let t=o.nodeValue,n=[];for(let r of e){let i=new RegExp(`\\b${ut(r.term)}\\b`,"gi"),l;for(;(l=i.exec(t))!==null;){let c=l.index,f=c+l[0].length;n.some(p=>c<p.end&&f>p.start)||n.push({start:c,end:f,sug:r,text:l[0]})}}if(!n.length)return;n.sort((r,i)=>r.start-i.start);let a=document.createDocumentFragment(),s=0;for(let r of n){r.start>s&&a.appendChild(document.createTextNode(t.slice(s,r.start)));let i=document.createElement("span");i.className="mycelium-ghost-link",i.textContent=r.text,i.setAttribute("title",`\u{1F331} Click to open ${r.sug.file.basename}`),i.setAttribute("data-target",r.sug.file.path),i.setAttribute("data-term",r.sug.term),i.setAttribute("data-basename",r.sug.file.basename),a.appendChild(i),s=r.end}s<t.length&&a.appendChild(document.createTextNode(t.slice(s))),o.parentNode.replaceChild(a,o)}function jl(o,e){let t=[...e].filter(r=>r.term&&r.term.length>=2).sort((r,i)=>(i.term?.length||0)-(r.term?.length||0));if(!t.length)return;let n=document.createTreeWalker(o,NodeFilter.SHOW_TEXT,{acceptNode(r){let i=r.nodeValue;if(!i||!i.trim())return NodeFilter.FILTER_REJECT;let l=r.parentElement;for(;l;){let c=l.tagName;if(c==="A"||c==="CODE"||c==="PRE"||c==="BUTTON"||l.classList?.contains("mycelium-ghost-link")||l.classList?.contains("mycelium-compost-footer"))return NodeFilter.FILTER_REJECT;if(l===o)break;l=l.parentElement}return NodeFilter.FILTER_ACCEPT}}),a=[],s;for(;s=n.nextNode();)a.push(s);for(let r of a)_l(r,t)}var Fo=class{constructor(e,t){this.app=e,this.plugin=t,t.settings.mycelium||(t.settings.mycelium={enableGhostLinks:!1,enableLinkingCommand:!0,enableCompostFooter:!1}),this.settings=t.settings.mycelium}async refreshSuggestions(){let e=this.app.workspace.getActiveFile();if(e&&e.extension==="md"){let t=await Co(this.app,e,this.plugin);window.stndMyceliumCache=t}else window.stndMyceliumCache=[];ea++,this.app.workspace.iterateAllLeaves(t=>{if(t.view instanceof Gr){if(t.view.editor?.cm)try{t.view.editor.cm.dispatch({})}catch{}t.view.previewMode&&t.view.previewMode.rerender(!0)}})}async load(){window.stndMyceliumCache=[],window.stndMyceliumSettings=this.settings,window.stndMyceliumFeature=this,window.stndRefreshMycelium=()=>this.refreshSuggestions(),this.refreshSuggestions(),this.plugin.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.refreshSuggestions()})),this.plugin.registerEvent(this.app.metadataCache.on("changed",t=>{let n=this.app.workspace.getActiveFile();n&&t.path===n.path&&(this.cacheTimeout&&clearTimeout(this.cacheTimeout),this.cacheTimeout=setTimeout(()=>this.refreshSuggestions(),1500))})),this.plugin.registerEditorExtension(Hl),(this.settings.enableLinkingCommand??this.settings.enableGraftingCommand)&&this.plugin.addCommand({id:"mycelium-link-mentions",name:"Tend the Mycelium (Link mentions)",callback:async()=>{let t=this.app.workspace.getActiveFile();if(!t||t.extension!=="md"){new pt("Open a markdown note to tend the mycelium.");return}new pt("Scanning for roots...");let n=await Co(this.app,t,this.plugin);if(n.length===0){new pt("No unlinked mentions found.");return}new Lo(this.app,t,n).open()}}),this.plugin.registerMarkdownPostProcessor((t,n)=>{try{if(!this.settings.enableCompostFooter){t.querySelectorAll(".mycelium-compost-footer").forEach(h=>h.remove());return}let a=this.app.workspace.getActiveFile();if(!a||a.path!==n.sourcePath)return;let s=n.getSectionInfo(t);if(!s)return;let r=s.text.split(`
`),i=r.length-1;for(;i>=0&&!r[i].trim();)i--;if(s.lineEnd<i)return;let l=window.stndMyceliumCache||[],c=t.closest(".markdown-preview-section")||t.closest(".markdown-rendered")||t.parentElement;if(c&&c.querySelectorAll(".mycelium-compost-footer").forEach(h=>h.remove()),l.length===0)return;let f=document.createElement("div");f.className="mycelium-compost-footer",t.appendChild(f),f.createEl("hr",{cls:"mycelium-footer-hr"}),f.createEl("h4",{text:"Mycelium finding",cls:"mycelium-footer-title"});let d=f.createEl("div",{cls:"mycelium-footer-grid"});for(let p of l)d.createEl("div",{cls:"mycelium-footer-item"}).createEl("span",{text:p.file.basename,cls:"mycelium-ghost-link",attr:{title:`\u{1F331} Click to open ${p.file.basename} \xB7 Alt+Click to link`,"data-target":p.file.path,"data-term":p.term,"data-basename":p.file.basename}})}catch(a){console.error("[Standard] Mycelium compost footer failed to render",a)}}),this.plugin.registerMarkdownPostProcessor((t,n)=>{try{if(!this.settings.enableGhostLinks)return;let a=this.app.workspace.getActiveFile();if(!a||a.path!==n.sourcePath)return;let s=window.stndMyceliumCache||[];if(!s.length)return;jl(t,s)}catch(a){console.error("[Standard] Mycelium reading-view ghost links failed",a)}}),this.plugin.registerDomEvent(document,"click",t=>{let n=t.target?.closest?.(".mycelium-ghost-link");if(!n||!n.closest(".markdown-reading-view")&&!n.closest(".markdown-preview-view"))return;let a=n.getAttribute("data-target");if(!a)return;let s=this.app.vault.getAbstractFileByPath(a);if(s){if(t.preventDefault(),t.stopPropagation(),t.altKey){let r=n.getAttribute("data-term"),i=this.app.workspace.getActiveFile();r&&i&&ht(this.app,i,{file:s,term:r});return}this.app.workspace.getLeaf(t.ctrlKey||t.metaKey).openFile(s)}})}},Do=class extends Ol{constructor(e,t){super(e,t),this.plugin=t,this.settings=t.settings.mycelium}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"Mycelium (Link Assist)"});let t=e.createEl("p",{text:"The Mycelium engine connects your thoughts by finding unlinked mentions of other notes in your current text. When you link a mention, it connects the LAST occurrence of the word, encouraging the reader to read the whole text before clicking away.",cls:"setting-item-description"});new Eo(e).setName("Enable Ghost Links (Option A)").setDesc("Subtly underlines potential links in the editor. Alt+Click or tap to link them.").addToggle(n=>n.setValue(this.settings.enableGhostLinks).onChange(async a=>{this.settings.enableGhostLinks=a,window.stndMyceliumSettings=this.settings,await this.plugin.saveSettings(),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium()})),new Eo(e).setName("Enable Linking Command").setDesc("Adds a command 'Tend the Mycelium (Link mentions)' to the palette. Opens a modal to link mentions.").addToggle(n=>n.setValue(this.settings.enableLinkingCommand??this.settings.enableGraftingCommand??!0).onChange(async a=>{this.settings.enableLinkingCommand=a,this.settings.enableGraftingCommand=a,await this.plugin.saveSettings()})),new Eo(e).setName("Enable Compost Footer").setDesc("Silently appends a list of potential links at the bottom of the Reading View for passive discovery.").addToggle(n=>n.setValue(this.settings.enableCompostFooter).onChange(async a=>{this.settings.enableCompostFooter=a,window.stndMyceliumSettings=this.settings,await this.plugin.saveSettings();let s=this.plugin.app.workspace.getActiveViewOfType(Gr);s?.previewMode&&s.previewMode.rerender(!0)}))}};Jr.exports={MyceliumFeature:Fo,MyceliumSettingTab:Do,findOutgoingUnlinkedMentions:Co,createMentionLink:ht,graftLink:ht}});var Io=_((dm,Yr)=>{"use strict";var Ao=require("obsidian"),Mo=[{key:"synced",label:"Synced",color:"var(--stnd-status-synced)",icon:"check-circle",summary:"Live & up to date",desc:"The note is published on your garden and the local version matches the online version exactly."},{key:"modified",label:"Modified",color:"var(--stnd-status-modified)",icon:"upload-cloud",summary:"Local edits not published",desc:"The note is already online, but has local changes in Obsidian that have not been republished yet."},{key:"pending",label:"Queued",color:"var(--stnd-status-pending)",icon:"upload-cloud",summary:"Marked for publication",desc:"The note has 'publish: true' in its frontmatter, waiting to be sent to your garden."},{key:"outdated",label:"Outdated",color:"var(--stnd-status-outdated)",icon:"arrow-down-circle",summary:"Remote update available",desc:"A newer version exists online (edited from another device or web). Use 'Pull' to update your local file."},{key:"desynced",label:"Unpublished (Online)",color:"var(--stnd-status-desynced)",icon:"alert-circle",summary:"Unpublished locally, still live online",desc:"The note was marked 'publish: false' locally, but is still published on your garden. Use 'Unpublish' to delete online or 'Republish' to restore."},{key:"local",label:"Local",color:"var(--stnd-status-local)",icon:"cloud-off",summary:"Offline vault note",desc:"Personal note stored strictly in your local vault. Never shared online."}],Xr=[{key:"public",label:"Public",icon:"globe",summary:"Feed & Search",desc:"Included in your garden feed, search index, and accessible to anyone."},{key:"unlisted",label:"Unlisted",icon:"eye-off",summary:"Direct link only",desc:"Hidden from public feeds and search. Accessible only to anyone with the secret URL."},{key:"private",label:"Private",icon:"lock",summary:"Owner only",desc:"Protected behind authentication. Only you can view this note on your garden."}];function Zr(o){let e=o.createEl("div",{cls:"stnd-status-guide-container"}),t=e.createEl("div",{text:"Synchronization States",cls:"stnd-panel-subheading"});t.style.cssText="font-weight: var(--font-semibold); margin-bottom: 8px; color: var(--text-normal); font-size: var(--font-ui-smaller); text-transform: uppercase; letter-spacing: 0.05em;";for(let a of Mo){let s=e.createEl("div",{cls:"stnd-status-guide-item"}),r=s.createEl("div",{cls:"stnd-status-guide-badge"});r.style.color=a.color,Ao.setIcon(r.createEl("span",{cls:"stnd-status-guide-icon"}),a.icon),r.createEl("span",{text:a.label});let i=s.createEl("div",{cls:"stnd-status-guide-content"});i.createEl("div",{cls:"stnd-status-guide-title",text:a.summary}),i.createEl("div",{cls:"stnd-status-guide-desc",text:a.desc})}let n=e.createEl("div",{text:"Note Visibility",cls:"stnd-panel-subheading"});n.style.cssText="font-weight: var(--font-semibold); margin-top: 18px; margin-bottom: 8px; color: var(--text-normal); font-size: var(--font-ui-smaller); text-transform: uppercase; letter-spacing: 0.05em;";for(let a of Xr){let s=e.createEl("div",{cls:"stnd-status-guide-item"}),r=s.createEl("div",{cls:"stnd-status-guide-badge"});Ao.setIcon(r.createEl("span",{cls:"stnd-status-guide-icon"}),a.icon),r.createEl("span",{text:a.label});let i=s.createEl("div",{cls:"stnd-status-guide-content"});i.createEl("div",{cls:"stnd-status-guide-title",text:a.summary}),i.createEl("div",{cls:"stnd-status-guide-desc",text:a.desc})}return e}var Oo=class extends Ao.Modal{constructor(e){super(e)}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),e.style.cssText="max-width: 520px; padding: 20px;";let t=e.createEl("h3",{text:"Garden Status & Colors Guide"});t.style.cssText="margin-bottom: 8px; font-size: var(--font-ui-medium); font-weight: var(--font-semibold);";let n=e.createEl("p",{text:"Standard Garden uses this unified color code across the titlebar icon, side panel badge, and panel top indicator:",cls:"stnd-panel-meta"});n.style.cssText="margin-bottom: 16px;",Zr(e);let a=e.createEl("div",{cls:"stnd-modal-btns"});a.style.cssText="display: flex; justify-content: flex-end; margin-top: 16px;",a.createEl("button",{text:"Close",cls:"mod-cta"}).addEventListener("click",()=>this.close())}onClose(){this.contentEl.empty()}};Yr.exports={StndStatusGuideModal:Oo,SYNC_GUIDE_ITEMS:Mo,STATUS_GUIDE_ITEMS:Mo,VISIBILITY_GUIDE_ITEMS:Xr,renderStatusGuide:Zr}});var oa=_((fm,ei)=>{"use strict";var L=require("obsidian"),{KNOWN_TOKENS:na,isPublishIntent:Vl}=le(),{StndConfirmModal:Ro}=da(),{StndShareModal:Qr}=ua(),{StndStatusGuideModal:Po}=Io(),{findOutgoingUnlinkedMentions:Kl,createMentionLink:Gl}=ta(),{getNoteFrontmatter:aa}=Zn(),$r="stnd-garden-panel",Uo=class extends L.ItemView{constructor(e,t){super(e),this.plugin=t,this._onFileChange=null,this._onMetaChange=null,this._debounceTimers={},this._lastRenderedFile=null,this.activeTab="note",this.auditData=null,this.isAuditing=!1,this.searchingCandidates={},this.linksData=null,this.isLoadingLinks=!1,this.noteStatsCache=t?.garden?.noteStatsCache||new Map,this.isLoadingStats=!1,this.inquiryCache=new Map,this._collapsedSections=new Set(["roots","design"])}async triggerHypheInquiry(e){if(!e)return;let t=this.inquiryCache.get(e.path)||{};this.inquiryCache.set(e.path,{...t,isLoading:!0,error:null}),this.render();try{let n=await this.plugin.app.vault.read(e),a=await this.plugin.garden.askHypheInquiry(e,n);this.inquiryCache.set(e.path,{questions:a||[],isLoading:!1,error:null})}catch(n){this.inquiryCache.set(e.path,{questions:[],isLoading:!1,error:n.message||"Failed to generate inquiry"})}finally{this.render()}}async appendInquiryToNote(e,t){if(!(!e||!t))try{await this.plugin.app.vault.process(e,n=>{let a=`

> [!quote] \u{1F989} Hyphe's Inquiry
> ${t}

`;return n.trimEnd()+a}),new L.Notice("Inquiry added to note.")}catch(n){new L.Notice(`Error adding inquiry: ${n.message}`)}}async loadNoteStats(e){if(!(!e||this.isLoadingStats)){this.isLoadingStats=!0;try{let t=await this.plugin.garden.getNoteStats(e);t&&(this.plugin.garden?.noteStatsCache&&this.plugin.garden.noteStatsCache.set(e.path,t),this.noteStatsCache.set(e.path,t))}catch(t){console.error("[Standard] Error loading note stats:",t)}finally{this.isLoadingStats=!1,this.render(),this.plugin.publishStatus&&this.plugin.publishStatus.refreshForFile(e)}}}getViewType(){return $r}getDisplayText(){return"Garden"}getIcon(){return"flower"}async onOpen(){this._onFileChange=()=>{this.render()},this._onMetaChange=e=>{if(this._writing)return;let t=this.plugin.app.workspace.getActiveFile();t&&e&&(e===t||e.path&&t.path&&e.path===t.path)&&(this.linksData=null,this.render())},this.plugin.app.workspace.on("file-open",this._onFileChange),this.plugin.app.workspace.on("active-leaf-change",this._onFileChange),this.plugin.app.metadataCache.on("changed",this._onMetaChange),this.plugin.app.metadataCache.on("resolve",this._onMetaChange),this.render()}async onClose(){this._onFileChange&&(this.plugin.app.workspace.off("file-open",this._onFileChange),this.plugin.app.workspace.off("active-leaf-change",this._onFileChange)),this._onMetaChange&&(this.plugin.app.metadataCache.off("changed",this._onMetaChange),this.plugin.app.metadataCache.off("resolve",this._onMetaChange));for(let e of Object.values(this._debounceTimers))clearTimeout(e)}_setFrontmatter(e,t,n){clearTimeout(this._debounceTimers[t]),this._debounceTimers[t]=setTimeout(()=>{this._writing=!0,this.plugin.app.fileManager.processFrontMatter(e,a=>{n===""||n===null||n===void 0?delete a[t]:a[t]=n}).finally(()=>{setTimeout(()=>{this._writing=!1},300)})},400)}updateTopIndicator(e=!1){if(!this.topIndicatorEl)return;let t=this.plugin?.settings?.publishIndicatorStyle||"garden";if(t==="hidden"){this.topIndicatorEl.style.display="none";return}this.topIndicatorEl.style.display="";let n=this.plugin.app.workspace.getActiveFile(),a="unpublished",s="Unpublished";if(n&&this.plugin.publishStatus){let i=aa(this.plugin.app,n),l=this.plugin.publishStatus.getStateInfo(i,n.path,n);a=l.key,a==="synced"&&(l.visibility==="private"||l.visibility==="unlisted")&&(a=l.visibility),s=l.state?.label||a}let r=this.topIndicatorEl.querySelector(".stnd-panel-top-indicator")||this.topIndicatorEl;r.className=`stnd-panel-top-indicator stnd-style-${t} stnd-state-${a}`,this.topIndicatorEl.setAttribute("title",`Garden: ${s}`),e&&t==="garden"&&(r.classList.remove("stnd-growing"),r.offsetWidth,r.classList.add("stnd-growing"))}_createCollapsibleSection(e,t,n,a={}){let s=e.createEl("details",{cls:`stnd-panel-group stnd-panel-${t}-group`});this._collapsedSections||(this._collapsedSections=new Set(["design"])),this._collapsedSections.has(t)||s.setAttribute("open",""),s.addEventListener("toggle",()=>{s.open?this._collapsedSections.delete(t):this._collapsedSections.add(t)});let i=s.createEl("summary",{cls:"stnd-panel-group-summary"}),l=i.createEl("div",{cls:"stnd-panel-group-summary-left"});if(l.createSpan({text:n,cls:"stnd-panel-group-title"}),a.badge!=null&&a.badge!==""&&l.createSpan({text:String(a.badge),cls:"stnd-panel-group-badge"}),a.onRefresh){let f=i.createEl("button",{cls:"stnd-panel-header-btn",attr:{"aria-label":`Refresh ${n.toLowerCase()}`,title:`Refresh ${n.toLowerCase()}`}});f.style.padding="2px",L.setIcon(f,"refresh-cw"),f.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),a.onRefresh()})}let c=s.createEl("div",{cls:"stnd-panel-group-body"});return{details:s,summary:i,body:c}}render(){let e=this.containerEl.children[1];if(e.empty(),e.addClass("stnd-panel"),e.style.overflowY="auto",e.style.touchAction="pan-y",e.style.webkitOverflowScrolling="touch",(this.plugin?.settings?.publishIndicatorStyle||"garden")!=="hidden"){let c=e.createEl("div",{cls:"stnd-panel-top-bar"});c.createEl("div",{cls:"stnd-panel-top-indicator"}),this.topIndicatorEl=c,this.updateTopIndicator(!1)}else this.topIndicatorEl=null;let n=e.createEl("div",{cls:"stnd-panel-global-header"});n.createEl("div",{cls:"stnd-panel-global-title",text:"Garden"});let a=n.createEl("div",{cls:"stnd-panel-global-header-right"});if(this.plugin?.settings?.apiKey){let c=a.createEl("button",{cls:"stnd-panel-header-btn",attr:{"aria-label":"Sync all published notes with Garden",title:"Sync all published notes with Garden"}});L.setIcon(c,"folder-sync"),c.addEventListener("click",async()=>{this.plugin.garden&&(await this.plugin.garden.syncAllPublished(),this.render())})}let s=this.plugin?.settings?.apiUsername||"",r=a.createEl("div",{cls:"stnd-panel-global-username",text:s?`@${s}`:""});s&&(r.style.cursor="pointer",r.title=`View @${s} on Standard Garden`,r.addEventListener("click",()=>{window.open(`https://standard.garden/@${s}`,"_blank")}),r.addEventListener("mouseenter",()=>{r.style.color="var(--text-normal)"}),r.addEventListener("mouseleave",()=>{r.style.color="var(--text-faint)"}));let i=this.plugin.app.workspace.getActiveFile();if(!i){e.createEl("div",{cls:"stnd-panel-empty"}).createEl("p",{text:"No active note.",cls:"stnd-panel-muted"});return}this._lastRenderedFile=i;let l=aa(this.plugin.app,i);this._renderFileInfo(e,i,l),this._renderGardenSettings(e,i,l),(!this.linksData||this.linksData.file!==i)&&!this.isLoadingLinks&&this.refreshLinksData(),this._renderRootsSection(e,i),this._renderMyceliumSection(e,i),this._renderDesignSection(e,i,l)}_showNoteActionMenu(e,t,n,a={}){let{isConfirmedOnline:s,isDesynced:r,isOutdated:i,isModifiedLocally:l,remoteContent:c,liveUrl:f=s&&this.plugin.garden?this.plugin.garden.getLiveUrl(e):null}=a,d=this.plugin.garden,p=new L.Menu,h=async()=>{if(!d||!d.checkApiKeyAndShowModal())return;let u=await d.publishWithCheck(e);u===!0?(new L.Notice(`Standard: "${e.basename}" published.`),this.plugin.settings.openAfterPublish&&d.viewLiveVersion(e),this.render()):u===!1&&(new L.Notice(`Standard: Failed to publish "${e.basename}".`),this.render())},m=async()=>{let u=c;!u&&d&&(u=(await d.checkNoteStatus(e))?.remoteContent),u?(await this.plugin.app.vault.modify(e,u),new L.Notice("Standard: Local file updated with remote version."),this.plugin.publishStatus?.noteStatuses?.set(e.path,{status:"synced",timestamp:Date.now()}),this.plugin.publishStatus?.refreshAll(),this.render()):new L.Notice("Standard: Remote content not found.")};if(r?(p.addItem(u=>u.setTitle("Remove from Garden (delete online note)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await d.deleteOnlineVersion(e),this.render()})),p.addItem(u=>u.setTitle("Republish (set publish: true)").setIcon("upload-cloud").onClick(async()=>{await this.plugin.app.fileManager.processFrontMatter(e,g=>{g.publish=!0,"status"in g&&delete g.status}),await h()}))):s?(i?(p.addItem(u=>u.setTitle("Pull remote changes (overwrite local)").setIcon("arrow-down-circle").onClick(()=>m())),p.addItem(u=>u.setTitle("Force publish local").setIcon("refresh-cw").onClick(()=>h()))):l?p.addItem(u=>u.setTitle("Publish local changes").setIcon("upload-cloud").onClick(()=>h())):p.addItem(u=>u.setTitle("Re-publish").setIcon("refresh-cw").onClick(()=>h())),f&&(p.addItem(u=>u.setTitle("View online").setIcon("external-link").onClick(()=>d.viewLiveVersion(e))),p.addItem(u=>u.setTitle("Share note").setIcon("share-2").onClick(()=>{new Qr(this.plugin.app,e.basename,f).open()})),p.addItem(u=>u.setTitle("Copy public link").setIcon("copy").onClick(()=>{navigator.clipboard.writeText(f),new L.Notice("Public URL copied to clipboard.")}))),p.addSeparator(),p.addItem(u=>u.setTitle("Sync all notes").setIcon("folder-sync").onClick(async()=>{d&&(await d.syncAllPublished(),this.render())})),p.addSeparator(),p.addItem(u=>u.setTitle("Remove from Garden (unpublish)").setIcon("trash-2").setWarning(!0).onClick(async()=>{let g=await d.deleteOnlineVersion(e);g===!0?(new L.Notice(`Standard: "${e.basename}" removed from Garden.`),this.render()):g===!1&&(new L.Notice(`Standard: Failed to remove "${e.basename}".`),this.render())}))):(p.addItem(u=>u.setTitle("Publish to Garden").setIcon("upload-cloud").onClick(()=>h())),p.addSeparator(),p.addItem(u=>u.setTitle("Sync all notes").setIcon("folder-sync").onClick(async()=>{d&&(await d.syncAllPublished(),this.render())}))),p.addSeparator(),p.addItem(u=>u.setTitle("Status & color guide...").setIcon("help-circle").onClick(()=>{new Po(this.plugin.app).open()})),n&&n.clientX!=null&&n.clientY!=null&&n.clientX>0&&n.clientY>0)p.showAtMouseEvent(n);else{let g=(n?.target?.closest?n.target.closest("button")||n.target.closest(".stnd-panel-badge"):n?.target)?.getBoundingClientRect?.();g?p.showAtPosition({x:Math.round(g.left),y:Math.round(g.bottom+4)}):p.showAtMouseEvent(n)}}_renderFileInfo(e,t,n){let a=e.createEl("div",{cls:"stnd-panel-card stnd-panel-note-card"});this.plugin.settings.apiKey&&t&&this.plugin.publishStatus&&this.plugin.publishStatus.triggerStatusCheck(t);let s=Vl(n),r=!!n["garden-url"]||!!n.url_public||n.published===!0||n.published==="true",i=!s&&r,l=a.createEl("div",{cls:"stnd-panel-status-row"}),c=this.plugin?.publishStatus?.noteStatuses?.get(t.path),f=c?.status==="outdated",d=c?.remoteContent,p=this.noteStatsCache.get(t.path),h=p?.updated_at?new Date(p.updated_at).getTime():0,m=t.stat?.mtime||0,u=h>0&&m>h+3e3||c?.status==="changed";if(this.plugin.settings.apiKey){let g=l.createEl("div",{cls:"stnd-panel-status-left"}),y;i?(y=g.createEl("span",{text:"Unpublished (Online)",cls:"stnd-panel-badge stnd-panel-badge-desynced is-clickable"}),y.title="Unpublished locally, but note is still live online \u2014 click for actions"):r?f?(y=g.createEl("span",{text:"Outdated",cls:"stnd-panel-badge stnd-panel-badge-outdated is-clickable"}),y.title="Update available online \u2014 click for actions"):u?(y=g.createEl("span",{text:"Modified",cls:"stnd-panel-badge stnd-panel-badge-modified is-clickable"}),y.title="Local edits not yet synced to Garden \u2014 click for actions"):(y=g.createEl("span",{text:"Synced",cls:"stnd-panel-badge stnd-panel-badge-online is-clickable"}),y.title="Up to date with Garden \u2014 click for actions"):s?(y=g.createEl("span",{text:"Queued",cls:"stnd-panel-badge stnd-panel-badge-pending is-clickable"}),y.title="Queued for publication \u2014 click for actions"):(y=g.createEl("span",{text:"Draft",cls:"stnd-panel-badge stnd-panel-badge-local is-clickable"}),y.title="Draft note (local only) \u2014 click for actions"),y.addEventListener("click",k=>{this._showNoteActionMenu(t,n,k,{isConfirmedOnline:r,isDesynced:i,isOutdated:f,isModifiedLocally:u,remoteContent:d})});let b=g.createEl("button",{cls:"stnd-panel-header-btn",attr:{"aria-label":"Status & color guide",title:"Status & color guide"}});b.style.padding="2px",L.setIcon(b,"help-circle"),b.addEventListener("click",()=>{new Po(this.plugin.app).open()});let w=l.createEl("select",{cls:"dropdown stnd-panel-select stnd-panel-vis-select"}),S=w.createEl("option",{value:"public",text:"Public"});S.title="Public (visible in feed & search)";let v=w.createEl("option",{value:"unlisted",text:"Unlisted"});v.title="Unlisted (accessible via link only)";let x=w.createEl("option",{value:"private",text:"Private"});x.title="Private (visible to you only)";let N=String(n.visibility||"public").toLowerCase().trim();w.value=["public","unlisted","private"].includes(N)?N:"public",w.addEventListener("change",()=>{this._setFrontmatter(t,"visibility",w.value)})}else{let g=l.createEl("span",{text:"Add an API key in settings to plant seeds.",cls:"stnd-panel-meta"});g.style.fontStyle="italic"}if(this.plugin.settings.apiKey){let g=a.createEl("div",{cls:"stnd-panel-primary-action"}),y=async v=>{v&&(v.disabled=!0,v.textContent="...");let x=await this.plugin.garden.publishWithCheck(t);x===!0?(new L.Notice(`Standard: "${t.basename}" published.`),this.plugin.settings.openAfterPublish&&this.plugin.garden.viewLiveVersion(t),this.render()):x===!1?(new L.Notice(`Standard: Failed to publish "${t.basename}".`),this.render()):v&&(v.disabled=!1,this.render())},b=async v=>{v&&(v.disabled=!0,v.textContent="...");try{let x=d;x||(x=(await this.plugin.garden.checkNoteStatus(t))?.remoteContent),x?(await this.plugin.app.vault.modify(t,x),new L.Notice("Standard: Local file updated with remote version."),this.plugin.publishStatus?.noteStatuses?.set(t.path,{status:"synced",timestamp:Date.now()}),this.plugin.publishStatus?.refreshAll(),this.render()):(new L.Notice("Standard: Remote content not found."),v&&(v.disabled=!1,this.render()))}catch(x){console.error("Standard: Error pulling remote content:",x),new L.Notice("Standard: Error updating local file."),v&&(v.disabled=!1,this.render())}};if(f){let v=g.createEl("div",{cls:"stnd-panel-btn-split"}),x=v.createEl("button",{cls:"btn stnd-panel-btn-primary"});L.setIcon(x.createSpan({cls:"stnd-btn-icon"}),"arrow-down-circle"),x.createSpan({text:"Pull remote changes"}),x.title="Pull remote version (overwrite local)",x.addEventListener("click",()=>b(x));let N=v.createEl("button",{cls:"btn stnd-panel-btn-secondary"});L.setIcon(N.createSpan({cls:"stnd-btn-icon"}),"refresh-cw"),N.createSpan({text:"Force"}),N.title="Force publish local version",N.addEventListener("click",()=>y(N))}else{let v=g.createEl("button",{cls:"btn stnd-panel-btn-primary"+(i?" is-warning":"")}),x=i?"alert-circle":u?"upload-cloud":r?"refresh-cw":"upload-cloud",N=i?"Republish to Garden":u?"Publish changes":r?"Update note":"Publish to Garden";L.setIcon(v.createSpan({cls:"stnd-btn-icon"}),x),v.createSpan({text:N}),v.addEventListener("click",()=>y(v))}let w=null;r&&this.plugin.settings.apiUsername&&(w=this.plugin.garden.getLiveUrl(t));let S=a.createEl("div",{cls:"stnd-panel-toolbar"});if(r&&w){let v=S.createEl("button",{cls:"btn stnd-panel-btn"});L.setIcon(v.createSpan({cls:"stnd-btn-icon"}),"external-link"),v.createSpan({text:"Open"}),v.title="View note online in browser",v.addEventListener("click",()=>this.plugin.garden.viewLiveVersion(t));let x=S.createEl("button",{cls:"btn stnd-panel-btn"});L.setIcon(x.createSpan({cls:"stnd-btn-icon"}),"share-2"),x.createSpan({text:"Share"}),x.title="Share public link",x.addEventListener("click",()=>{new Qr(this.plugin.app,t.basename,w).open()});let N=S.createEl("button",{cls:"btn stnd-panel-btn"});L.setIcon(N.createSpan({cls:"stnd-btn-icon"}),"copy"),N.createSpan({text:"Copy"}),N.title="Copy public URL to clipboard",N.addEventListener("click",()=>{navigator.clipboard.writeText(w),new L.Notice("Public URL copied to clipboard.")});let k=S.createEl("button",{cls:"btn stnd-panel-btn stnd-panel-btn-icon"});k.title="More note actions",k.setAttribute("aria-label","More note actions"),L.setIcon(k,"more-horizontal"),k.addEventListener("click",T=>{this._showNoteActionMenu(t,n,T,{isConfirmedOnline:r,isDesynced:i,isOutdated:f,isModifiedLocally:u,remoteContent:d,liveUrl:w,publishAction:y,pullAction:b})})}else{let v=S.createEl("button",{cls:"btn stnd-panel-btn"});L.setIcon(v.createSpan({cls:"stnd-btn-icon"}),"more-horizontal"),v.createSpan({text:"Options"}),v.title="More note actions",v.addEventListener("click",N=>{this._showNoteActionMenu(t,n,N,{isConfirmedOnline:r,isDesynced:i,isOutdated:f,isModifiedLocally:u,remoteContent:d,liveUrl:w,publishAction:y,pullAction:b})});let x=S.createEl("button",{cls:"btn stnd-panel-btn"});L.setIcon(x.createSpan({cls:"stnd-btn-icon"}),"help-circle"),x.createSpan({text:"Guide"}),x.title="Status and publishing guide",x.addEventListener("click",()=>{new Po(this.plugin.app).open()})}}if(r){let g=a.createEl("div",{cls:"stnd-panel-stats-box"});g.style.cssText="margin-top: var(--size-4-3); padding-top: var(--size-4-2); border-top: 1px solid var(--background-modifier-border);";let y=this.noteStatsCache.get(t.path);!y&&!this.isLoadingStats&&this.loadNoteStats(t);let b=g.createEl("div",{cls:"stnd-panel-stats-row"});b.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--size-4-2); font-size: var(--font-ui-smaller); color: var(--text-muted);";let w=b.createEl("div",{cls:"stnd-panel-views-count"});w.style.cssText="display: flex; align-items: center; gap: 4px;";let S=w.createEl("span");L.setIcon(S,"eye");let v=y?y.views:this.isLoadingStats?"...":0;if(w.createEl("span",{text:`${v} ${v===1?"view":"views"}`}),y?.updated_at){let N=new Date(y.updated_at).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"});b.createEl("span",{text:`Updated ${N}`,cls:"stnd-panel-meta"})}}}_renderGardenSettings(e,t,n){if(!(n.permalink==="/"))return;let s=e.createEl("div",{cls:"stnd-panel-section stnd-panel-garden-profile"}),r=s.createEl("div",{cls:"stnd-panel-section-header"});r.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-semibold); color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--size-4-2);",r.createEl("span",{text:"Garden Profile Settings"});let i=[{key:"garden-display-name",label:"Display name",type:"text",placeholder:this.plugin?.settings?.apiUsername||"Gardener"},{key:"garden-domain",label:"Custom domain",type:"text",placeholder:"notes.example.com"},{key:"garden-brand",label:"Brand logo",type:"text",placeholder:"URL or false to hide"},{key:"garden-favicon",label:"Favicon",type:"text",placeholder:"https://.../favicon.png"},{key:"garden-avatar",label:"Avatar",type:"text",placeholder:"URL or image path"},{key:"garden-launcher",label:"Command Launcher",type:"toggle",default:!0},{key:"garden-mycelium",label:"Mycelium Network",type:"toggle",default:!0}];for(let l of i)this._renderField(s,t,n,l)}_renderAIGenerate(e,t,n){let a=e.createEl("div",{cls:"stnd-panel-section stnd-panel-ai"}),s=Object.keys(n).some(f=>na.has(f)||f.startsWith("stnd-")||f.startsWith("stnd_")),r=a.createEl("div",{cls:"stnd-panel-ai-row"});if(r.style.display="flex",r.style.gap="var(--size-4-2)",r.style.marginTop="0",s){let f=r.createEl("button",{cls:"btn stnd-panel-btn stnd-panel-btn-secondary"});L.setIcon(f.createSpan({cls:"stnd-btn-icon"}),"rotate-ccw"),f.createSpan({text:"Reset"}),f.style.flex="1",f.title="Clear custom design tokens",f.addEventListener("click",()=>{new Ro(this.plugin.app,`Remove all design tokens from "${t.basename}"?

This will delete fonts, colors, rhythm and layout tokens from frontmatter.`,"Reset",async()=>{let d=0;await this.plugin.app.fileManager.processFrontMatter(t,p=>{for(let h of Object.keys(p))!h.startsWith("garden-")&&!h.startsWith("garden_")&&(na.has(h)||h.startsWith("stnd-")||h.startsWith("stnd_"))&&(delete p[h],d++)}),new L.Notice(d>0?`Cleared ${d} design token${d>1?"s":""}.`:"No design tokens found."),this.plugin.design.updateBodyClasses(),this.render()},()=>{}).open()})}let i=r.createEl("button",{cls:"btn stnd-panel-btn stnd-panel-btn-ai"});L.setIcon(i.createSpan({cls:"stnd-btn-icon"}),"sparkles");let l=i.createSpan({text:"Let's Hyphe design this"});i.style.flex="2",i.title="Generate harmonious design tokens with Hyphe AI";let c=this;i.addEventListener("click",async()=>{i.disabled=!0,l.textContent="Hyphe is designing\u2026";try{let f=await c.plugin.app.vault.cachedRead(t),d=await c.plugin.garden.generateTokens("",f,n);if(d&&typeof d=="object"){let p=new Set(["margin","margin-block"]);await c.plugin.app.fileManager.processFrontMatter(t,h=>{for(let[m,u]of Object.entries(d))na.has(m)&&!p.has(m)&&(h[m]=u)}),new L.Notice(`Hyphe styled this note with ${Object.keys(d).length} tokens.`)}else new L.Notice("No tokens returned.")}catch(f){let d=f.message||"Failed to generate design";try{let p=d.indexOf("{");if(p!==-1){let h=JSON.parse(d.slice(p));h.error&&(d=h.error)}}catch{}new L.Notice(`Design failed: ${d}`)}finally{i.disabled=!1,l.textContent="Let's Hyphe design this"}})}_renderTokenGroups(e,t,n){let a=[{title:"Typography",fields:[{key:"font-text",label:"Body font",type:"text",placeholder:"Inter"},{key:"font-header",label:"Heading font",type:"text",placeholder:"Merriweather"},{key:"font-monospace",label:"Code font",type:"text",placeholder:"Fira Code"},{key:"font-interface",label:"UI font",type:"text",placeholder:"System-UI"},{key:"font-weight-body",label:"Body weight",type:"number",placeholder:"400",step:"50"},{key:"font-weight-header",label:"Heading weight",type:"number",placeholder:"700",step:"50"},{key:"line-height",label:"Line height",type:"number",placeholder:"1.6",step:"0.05"}]},{title:"Colors \u2014 Semantic",fields:[{key:"color-accent",label:"Accent",type:"color"},{key:"color-header",label:"Headings",type:"color"},{key:"color-bold",label:"Bold",type:"color"},{key:"color-italic",label:"Italic",type:"color"}]},{title:"Colors \u2014 Light",fields:[{key:"color-light-foreground",label:"Foreground",type:"color"},{key:"color-light-background",label:"Background",type:"color"},{key:"color-light-accent",label:"Accent",type:"color"},{key:"color-light-red",label:"Red",type:"color"},{key:"color-light-orange",label:"Orange",type:"color"},{key:"color-light-yellow",label:"Yellow",type:"color"},{key:"color-light-green",label:"Green",type:"color"},{key:"color-light-cyan",label:"Cyan",type:"color"},{key:"color-light-blue",label:"Blue",type:"color"},{key:"color-light-purple",label:"Purple",type:"color"},{key:"color-light-pink",label:"Pink",type:"color"}]},{title:"Colors \u2014 Dark",fields:[{key:"color-dark-foreground",label:"Foreground",type:"color"},{key:"color-dark-background",label:"Background",type:"color"},{key:"color-dark-accent",label:"Accent",type:"color"},{key:"color-dark-red",label:"Red",type:"color"},{key:"color-dark-orange",label:"Orange",type:"color"},{key:"color-dark-yellow",label:"Yellow",type:"color"},{key:"color-dark-green",label:"Green",type:"color"},{key:"color-dark-cyan",label:"Cyan",type:"color"},{key:"color-dark-blue",label:"Blue",type:"color"},{key:"color-dark-purple",label:"Purple",type:"color"},{key:"color-dark-pink",label:"Pink",type:"color"}]},{title:"Vertical Rhythm",fields:[{key:"margin",label:"Base unit",type:"text",placeholder:"1rlh"},{key:"margin-block",label:"Block multiplier",type:"number",placeholder:"2",step:"0.5"}]}];for(let s of a){let r=e.createEl("details",{cls:"stnd-panel-group stnd-panel-token-group"});s.open&&r.setAttribute("open",""),r.createEl("summary",{text:s.title});let i=r.createEl("div",{cls:"stnd-panel-fields"});for(let l of s.fields)this._renderField(i,t,n,l)}}_renderDesignSection(e,t,n){let a=Object.keys(n).some(r=>na.has(r)||r.startsWith("stnd-")||r.startsWith("stnd_")),{body:s}=this._createCollapsibleSection(e,"design","Design",{badge:a?"Custom":null});this._renderAIGenerate(s,t,n),this._renderTokenGroups(s,t,n)}_renderField(e,t,n,a){let s=e.createEl("div",{cls:"stnd-panel-field"});s.createEl("label",{text:a.label,cls:"stnd-panel-field-label"});let r=n[a.key];switch(a.type){case"text":{let i=s.createEl("input",{cls:"stnd-panel-input",type:"text"});i.placeholder=a.placeholder||"",i.value=r??"",i.addEventListener("input",()=>{this._setFrontmatter(t,a.key,i.value||null)});break}case"number":{let i=s.createEl("input",{cls:"stnd-panel-input",type:"number"});i.placeholder=a.placeholder||"",i.step=a.step||"1",i.value=r??"",i.addEventListener("input",()=>{let l=i.value===""?null:Number(i.value);this._setFrontmatter(t,a.key,l)});break}case"toggle":{let i=r!==void 0?!!(r&&r!=="false"):a.default??!1,l=s.createEl("div",{cls:"checkbox-container"+(i?" is-enabled":"")});l.addEventListener("click",()=>{let c=!l.hasClass("is-enabled");l.toggleClass("is-enabled",c),this._setFrontmatter(t,a.key,c)});break}case"dropdown":{let i=s.createEl("select",{cls:"dropdown stnd-panel-select"});for(let l of a.options){let c=i.createEl("option",{text:l||"\u2014",value:l});(r??"")===l&&(c.selected=!0)}i.addEventListener("change",()=>{this._setFrontmatter(t,a.key,i.value||null)});break}case"color":{let i=s.createEl("div",{cls:"stnd-panel-color-wrap"}),l=i.createEl("input",{type:"color",cls:"stnd-panel-color"}),c=i.createEl("input",{type:"text",cls:"stnd-panel-input stnd-panel-color-text"});c.placeholder=a.placeholder||"#000000";let f=r??"",d=this._toHex(f);l.value=d||"#000000",c.value=f,l.addEventListener("input",()=>{c.value=l.value,this._setFrontmatter(t,a.key,l.value)}),c.addEventListener("input",()=>{let p=this._toHex(c.value);p&&(l.value=p),this._setFrontmatter(t,a.key,c.value||null)});break}}}_toHex(e){if(!e)return null;let t=String(e).trim().replace(/^["']|["']$/g,"");return/^#[0-9a-f]{6}$/i.test(t)?t:/^#[0-9a-f]{3}$/i.test(t)?"#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]:null}async runScan(){this.isAuditing=!0,this.render();try{this.auditData=await this.plugin.vaultAudit.performAudit()}catch(e){console.error("[Garden] Audit failed:",e)}finally{this.isAuditing=!1,this.render()}}_renderAuditTab(e){let t=e.createEl("div",{cls:"stnd-audit-container"}),n=t.createEl("div",{cls:"stnd-audit-header-row"});n.createEl("h3",{text:"Vault Audit",cls:"stnd-audit-title"});let a=n.createEl("button",{cls:"stnd-audit-refresh-btn"+(this.isAuditing?" is-loading":""),title:"Refresh audit"});if(L.setIcon(a,"refresh-cw"),a.addEventListener("click",()=>this.runScan()),!this.auditData&&!this.isAuditing){this.runScan();return}if(this.isAuditing){let m=t.createEl("div",{cls:"stnd-audit-loading"}),u=m.createEl("div",{cls:"stnd-audit-spinner"});L.setIcon(u,"loader"),m.createEl("p",{text:"Scanning vault...",cls:"stnd-audit-loading-text"});return}let{brokenEmbeds:s,brokenLinks:r,orphanedMedia:i}=this.auditData,l=t.createEl("div",{cls:"stnd-audit-stats-row"}),c=l.createEl("div",{cls:"stnd-audit-stat-card type-embed"});c.createEl("div",{text:String(s.length),cls:"stnd-audit-stat-number"}),c.createEl("div",{text:"Broken Media",cls:"stnd-audit-stat-label"});let f=l.createEl("div",{cls:"stnd-audit-stat-card type-link"});f.createEl("div",{text:String(r.length),cls:"stnd-audit-stat-number"}),f.createEl("div",{text:"Broken Links",cls:"stnd-audit-stat-label"});let d=l.createEl("div",{cls:"stnd-audit-stat-card type-orphan"});d.createEl("div",{text:String(i.length),cls:"stnd-audit-stat-number"}),d.createEl("div",{text:"Orphaned Media",cls:"stnd-audit-stat-label"});let p=0,h=new Set(s.map(m=>m.link.split("/").pop().toLowerCase()));for(let m of i){let u=m.name.match(/^(\d{6}_\d{4}_)(.*)/);u&&h.has(u[2].toLowerCase())&&p++}if(p>0){let m=t.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"}),u=m.createEl("span",{cls:"stnd-audit-banner-icon"});L.setIcon(u,"alert-triangle");let g=m.createEl("div",{cls:"stnd-audit-banner-text"});g.createEl("strong",{text:"Double Timestamps Detected"}),g.createEl("span",{text:`${p} orphaned images match broken links due to double timestamping.`});let y=m.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Auto Repair"});y.addEventListener("click",async()=>{y.disabled=!0,y.textContent="Repairing...";let b=await this.plugin.vaultAudit.fixDoubleTimestamps();new L.Notice(`${b} images successfully repaired!`),this.runScan()})}this._renderAuditSection(t,"Broken Images & Media",s,"image",m=>this._renderBrokenEmbeds(m,s),null,s.length<=50),this._renderAuditSection(t,"Broken Internal Links",r,"link",m=>this._renderBrokenLinks(m,r),null,r.length<=50),this._renderAuditSection(t,"Orphaned Media",i,"folder",m=>this._renderOrphanedMedia(m,i),i.length>0?()=>{new Ro(this.plugin.app,`Delete permanently the ${i.length} orphaned media files?

This action is irreversible.`,"Delete all",async()=>{let m=0;for(let u of i)await this.plugin.vaultAudit.deleteOrphan(u)&&m++;new L.Notice(`${m} files deleted.`),this.runScan()},()=>{}).open()}:null,i.length<=50)}_getFileTags(e){let t=aa(this.plugin.app,e),n=this.plugin.app.metadataCache.getFileCache(e),a=[];if(n?.tags&&a.push(...n.tags.map(s=>s.tag.toLowerCase().replace(/^#/,""))),t?.tags){let s=t.tags;Array.isArray(s)?a.push(...s.map(r=>String(r).toLowerCase().replace(/^#/,""))):typeof s=="string"&&a.push(...s.split(",").map(r=>r.trim().toLowerCase().replace(/^#/,"")))}return a}async _addTagToFile(e,t){let n=t.replace(/^#/,"");await this.plugin.app.fileManager.processFrontMatter(e,a=>{let s=a.tags||[];typeof s=="string"&&(s=s.split(",").map(r=>r.trim())),s.includes(n)||(s.push(n),a.tags=s)})}async _removeTagFromFile(e,t){let n=t.replace(/^#/,"");await this.plugin.app.fileManager.processFrontMatter(e,a=>{let s=a.tags||[];typeof s=="string"&&(s=s.split(",").map(r=>r.trim())),a.tags=s.filter(r=>r!==n)})}async refreshLinksData(){window.stndPanelRefreshLinks=()=>this.refreshLinksData();let e=this.plugin.app.workspace.getActiveFile();if(!e){this.linksData=null;return}this.isLoadingLinks=!0,this.render();try{let t=[],n=this.plugin.app.metadataCache.resolvedLinks||{};for(let[s,r]of Object.entries(n))if(s!==e.path&&r.hasOwnProperty(e.path)){let i=this.plugin.app.vault.getAbstractFileByPath(s);i&&t.push(i)}let a=await Kl(this.plugin.app,e,this.plugin);typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),this.linksData={incoming:t,unlinked:a,file:e}}catch(t){console.error("[Standard] Error loading links data",t)}finally{this.isLoadingLinks=!1,this.render()}}_renderHypheInquiries(e,t){let n=e.createEl("div",{cls:"stnd-resonances-card stnd-inquiries-card"}),a=n.createEl("div",{cls:"stnd-inquiries-header"});a.createEl("span",{cls:"stnd-inquiries-title"}).setText("\u{1F989} Hyphe's Inquiries");let r=this.inquiryCache.get(t.path),i=a.createEl("button",{cls:"stnd-inquiries-btn mod-cta",text:r?.questions?.length?"Re-inquire":"Inquire"});if(r?.isLoading&&(i.disabled=!0,i.setText("Reflecting...")),i.addEventListener("click",async()=>{await this.triggerHypheInquiry(t)}),r?.isLoading){let l=n.createEl("div",{cls:"stnd-inquiry-loading"});l.style.cssText="font-size: var(--font-ui-smaller); color: var(--text-muted); font-style: italic; padding: 6px 0;",l.setText("Hyphe is reading your note and framing questions...");return}if(r?.error){let l=n.createEl("div",{cls:"stnd-inquiry-error"});l.style.cssText="font-size: 11px; color: var(--color-red); margin-top: 4px;",l.setText(`Error: ${r.error}`);return}if(r?.questions?.length>0){let l=n.createEl("div",{cls:"stnd-inquiries-list"});for(let c of r.questions){let f=l.createEl("div",{cls:"stnd-inquiry-box"});f.createEl("span",{cls:"stnd-inquiry-text"}).setText(c),f.createEl("button",{cls:"stnd-inquiry-action-btn",text:"+ Add to note"}).addEventListener("click",async()=>{await this.appendInquiryToNote(t,c)})}}else{let l=n.createEl("p",{cls:"stnd-inquiry-placeholder",text:"Ask Hyphe for Socratic questions to challenge your assumptions and uncover unexamined angles."});l.style.cssText="font-size: 11px; color: var(--text-faint); margin: 4px 0 0 0; line-height: 1.4;"}}_renderPublicResonances(e,t){let n=aa(this.plugin.app,t),a=!!n["garden-url"]||!!n.url_public||n.published===!0||n.published==="true",s=e.createEl("div",{cls:"stnd-resonances-card stnd-network-card"});if(s.createEl("div",{cls:"stnd-inquiries-header"}).createEl("span",{cls:"stnd-inquiries-title"}).setText("\u{1F310} Network Echoes"),!a){let m=s.createEl("p");m.style.cssText="font-size: 11px; color: var(--text-faint); margin: 0; line-height: 1.4;",m.setText("Publish this note to reveal public citations, readership metrics, and semantic connections across standard.garden.");return}let l=this.noteStatsCache.get(t.path);!l&&!this.isLoadingStats&&this.loadNoteStats(t);let c=s.createEl("div",{cls:"stnd-network-stats"}),f=l?l.views:this.isLoadingStats?"...":0,d=l?.citations?.length||0;if(c.createEl("span",{text:`\u{1F441}\uFE0F ${f} ${f===1?"view":"views"} \xB7 \u{1F517} ${d} ${d===1?"citation":"citations"}`}),l?.updated_at){let m=new Date(l.updated_at);c.createEl("span",{text:m.toLocaleDateString(void 0,{month:"short",day:"numeric"}),cls:"stnd-panel-meta"})}let p=l?.citations||[];if(p.length>0){s.createEl("div",{cls:"stnd-network-subheading",text:`Citations & Mentions (${p.length})`});let m=s.createEl("div");m.style.cssText="display: flex; flex-direction: column; gap: 4px;";for(let u of p){let g=m.createEl("div",{cls:"stnd-panel-citation-card"});g.style.cssText="display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; border-radius: var(--radius-s); background: var(--background-primary); cursor: pointer; border: 1px solid var(--background-modifier-border);";let y=g.createEl("div");y.style.cssText="display: flex; flex-direction: column; min-width: 0;";let b=y.createEl("span",{text:u.title||u.slug,cls:"stnd-panel-citation-title"});b.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;";let w=y.createEl("span",{text:`@${u.username}`,cls:"stnd-panel-citation-author"});w.style.cssText="font-size: 10px; color: var(--text-faint);",g.addEventListener("click",()=>{let S=this.plugin.garden?.bySlug?.get(u.slug)||this.plugin.garden?.byTitleSlug?.get(u.slug)||this.plugin.garden?.byBasenameSlug?.get(u.slug);S?this.plugin.app.workspace.getLeaf(!1).openFile(S):u.url&&window.open(u.url,"_blank")})}}let h=l?.related||[];if(h.length>0){s.createEl("div",{cls:"stnd-network-subheading",text:`Related Notes (${h.length})`});let m=s.createEl("div");m.style.cssText="display: flex; flex-direction: column; gap: 4px;";for(let u of h){let g=m.createEl("div",{cls:"stnd-panel-citation-card"});g.style.cssText="display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; border-radius: var(--radius-s); background: var(--background-primary); cursor: pointer; border: 1px solid var(--background-modifier-border);";let y=g.createEl("div");y.style.cssText="display: flex; flex-direction: column; min-width: 0;";let b=y.createEl("span",{text:u.title||u.slug,cls:"stnd-panel-citation-title"});if(b.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",u.username){let w=y.createEl("span",{text:`@${u.username}`,cls:"stnd-panel-citation-author"});w.style.cssText="font-size: 10px; color: var(--text-faint);"}g.addEventListener("click",()=>{let w=this.plugin.garden?.bySlug?.get(u.slug)||this.plugin.garden?.byTitleSlug?.get(u.slug)||this.plugin.garden?.byBasenameSlug?.get(u.slug);w?this.plugin.app.workspace.getLeaf(!1).openFile(w):u.url&&window.open(u.url,"_blank")})}}}_renderRootsSection(e,t){if(!t)return;let n=0;this.linksData?.unlinked&&(n=this.linksData.unlinked.length);let{body:a}=this._createCollapsibleSection(e,"roots","Roots",{badge:n>0?`${n} unlinked`:null,onRefresh:()=>this.refreshLinksData()}),s=a.createEl("div",{cls:"stnd-panel-mycelium-prefs"});s.style.cssText="display: flex; flex-direction: column; gap: 8px; margin: 0 0 var(--size-4-3) 0; padding: 10px 12px; background: var(--background-secondary); border-radius: var(--radius-m); border: 1px solid var(--background-modifier-border);";let r=(u,g,y,b)=>{let w=s.createEl("div");w.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: 8px;";let S=w.createEl("div");S.style.cssText="display: flex; flex-direction: column; min-width: 0;";let v=S.createEl("span",{text:u});v.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal);";let x=S.createEl("span",{text:g});x.style.cssText="font-size: 11px; color: var(--text-faint);";let N=w.createEl("div",{cls:"checkbox-container"+(y?" is-enabled":"")});N.style.cssText="cursor: pointer; flex-shrink: 0;",N.addEventListener("click",async()=>{let k=!N.hasClass("is-enabled");N.toggleClass("is-enabled",k),await b(k)})};this.plugin.settings.mycelium||(this.plugin.settings.mycelium={enableGhostLinks:!1,enableLinkingCommand:!0,enableCompostFooter:!0});let i=this.plugin.settings.mycelium;if(r("Ghost links","Underline mentions in editor (Alt+click or tap to link)",!!i.enableGhostLinks,async u=>{i.enableGhostLinks=u,window.stndMyceliumSettings=i,await this.plugin.saveSettings(),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),new L.Notice(u?"Ghost links enabled in editor.":"Ghost links disabled.")}),r("Compost footer","Show suggested links at bottom of reading view",!!i.enableCompostFooter,async u=>{i.enableCompostFooter=u,window.stndMyceliumSettings=i,await this.plugin.saveSettings(),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),new L.Notice(u?"Compost footer enabled.":"Compost footer hidden.")}),this.isLoadingLinks){let u=a.createEl("div",{cls:"stnd-audit-loading"}),g=u.createEl("div",{cls:"stnd-audit-spinner"});L.setIcon(g,"loader"),u.createEl("p",{text:"Scanning roots & mentions...",cls:"stnd-audit-loading-text"});return}if(!this.linksData)return;let{incoming:l,unlinked:c}=this.linksData,f="backlink-exclude",d=[],p=[],h=new Set;for(let u of l){if(h.has(u.path))continue;h.add(u.path),this._getFileTags(u).includes(f)?p.push(u):d.push(u)}let m=[];for(let u of c){if(h.has(u.file.path))continue;h.add(u.file.path),this._getFileTags(u.file).includes(f)?p.push(u.file):m.push(u)}this._renderAuditSection(a,"Unlinked mentions",m,"link-2",u=>this._renderUnlinkedMentionsList(u,m,t,f),null,m.length>0),this._renderAuditSection(a,"Linked mentions (Backlinks)",d,"link",u=>this._renderLinkedMentionsList(u,d,f),null,d.length>0),p.length>0&&this._renderAuditSection(a,"Active exclusions",p,"eye-off",u=>this._renderExcludedMentionsList(u,p,f),null,!1)}_renderMyceliumSection(e,t){if(!t)return;let{body:n}=this._createCollapsibleSection(e,"mycelium","Mycelium",{onRefresh:()=>{this.noteStatsCache.delete(t.path),this.loadNoteStats(t),this.render()}});this._renderHypheInquiries(n,t),this._renderPublicResonances(n,t)}_renderLinkedMentionsList(e,t,n){t.forEach(a=>{let s=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-row"});s.createEl("div",{cls:"stnd-audit-card-title-wrap"}).createEl("a",{cls:"stnd-audit-note-link",text:a.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(a)});let c=s.createEl("div",{cls:"stnd-audit-card-actions"}).createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",attr:{title:"Hide"}});L.setIcon(c.createEl("span",{cls:"btn-icon"}),"eye-off"),c.addEventListener("click",async()=>{await this._addTagToFile(a,n),new L.Notice(`Hidden: ${a.basename}`),this.refreshLinksData()})})}_renderUnlinkedMentionsList(e,t,n,a){t.forEach(s=>{let r=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-row"}),i=r.createEl("div",{cls:"stnd-audit-card-title-wrap"});i.createEl("a",{cls:"stnd-audit-note-link",text:s.file.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(s.file)}),s.term&&i.createEl("span",{cls:"stnd-panel-meta stnd-audit-card-term",text:`"${s.term}"`});let c=r.createEl("div",{cls:"stnd-audit-card-actions"}),f=c.createEl("button",{cls:"stnd-panel-btn stnd-audit-btn-compact",attr:{title:"Link"}});L.setIcon(f.createEl("span",{cls:"btn-icon"}),"link"),f.addEventListener("click",async()=>{await Gl(this.plugin.app,n,s),this.refreshLinksData()});let d=c.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",attr:{title:"Hide"}});L.setIcon(d.createEl("span",{cls:"btn-icon"}),"eye-off"),d.addEventListener("click",async()=>{await this._addTagToFile(s.file,a),new L.Notice(`Hidden: ${s.file.basename}`),this.refreshLinksData()})})}_renderExcludedMentionsList(e,t,n){t.forEach(a=>{let s=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-row"});s.createEl("div",{cls:"stnd-audit-card-title-wrap"}).createEl("a",{cls:"stnd-audit-note-link",text:a.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(a)});let c=s.createEl("div",{cls:"stnd-audit-card-actions"}).createEl("button",{cls:"stnd-panel-btn stnd-audit-btn-compact",attr:{title:"Restore"}});L.setIcon(c.createEl("span",{cls:"btn-icon"}),"undo"),c.addEventListener("click",async()=>{await this._removeTagFromFile(a,n),new L.Notice(`Restored: ${a.basename}`),this.refreshLinksData()})})}_renderAuditSection(e,t,n,a,s,r=null,i=!0){let l=e.createEl("details",{cls:"stnd-panel-group stnd-audit-section"});n.length>0&&i&&l.setAttribute("open","");let c=l.createEl("summary"),f=c.createEl("div",{cls:"stnd-audit-section-title-wrap"}),d=f.createEl("span",{cls:"stnd-audit-section-icon"});L.setIcon(d,a),f.createEl("span",{text:`${t} (${n.length})`}),r&&c.createEl("button",{cls:"stnd-audit-bulk-btn",text:"Clean"}).addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),r()});let p=l.createEl("div",{cls:"stnd-audit-section-content"});if(n.length===0){let h=p.createEl("div",{cls:"stnd-audit-empty-success"}),m=h.createEl("span",{cls:"stnd-audit-check-icon"});L.setIcon(m,"check"),h.createEl("span",{text:"Everything is in order"})}else s(p)}_renderBrokenEmbeds(e,t){if(t.length>50){let n=e.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"});n.style.margin="0 0 var(--size-4-3) 0";let a=n.createEl("div",{cls:"stnd-audit-banner-text"});a.createEl("strong",{text:"Render Hidden for Safety"}),a.createEl("span",{text:`Displaying the ${t.length} broken media cards is disabled to prevent slowing down Obsidian.`});let s=n.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Show anyway"});s.style.background="var(--interactive-accent)",s.style.color="var(--text-on-accent)",s.addEventListener("click",()=>{n.remove(),this._renderBrokenEmbedsList(e,t)})}else this._renderBrokenEmbedsList(e,t)}_renderBrokenEmbedsList(e,t){t.forEach(n=>{let a=e.createEl("div",{cls:"stnd-audit-card"}),s=a.createEl("div",{cls:"stnd-audit-card-source-row"});s.createEl("a",{cls:"stnd-audit-note-link",text:n.file.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(n.file,{eState:{line:n.line??0}})}),s.createEl("span",{cls:"stnd-audit-badge-type",text:n.isMedia?"media":"note"}),a.createEl("div",{cls:"stnd-audit-card-broken-target",text:`\u21B3 Missing target: ${n.link}`});let i=a.createEl("div",{cls:"stnd-audit-card-actions"}),l=i.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",text:"Search"});L.setIcon(l.createEl("span",{cls:"btn-icon"}),"search");let c=`${n.file.path}::${n.link}`;l.addEventListener("click",async()=>{if(this.searchingCandidates[c]){delete this.searchingCandidates[c],this.render();return}let d=await this.plugin.vaultAudit.findCandidates(n.link);this.searchingCandidates[c]=d,this.render()});let f=i.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-danger stnd-audit-btn-compact",text:"Delete"});if(L.setIcon(f.createEl("span",{cls:"btn-icon"}),"trash"),f.addEventListener("click",async()=>{await this.plugin.vaultAudit.removeBrokenReference(n)&&(new L.Notice("Broken reference deleted."),this.runScan())}),this.searchingCandidates[c]){let d=this.searchingCandidates[c],p=a.createEl("div",{cls:"stnd-audit-candidates-wrap"});d.length===0?p.createEl("div",{text:"No file with this name was found.",cls:"stnd-audit-candidates-empty"}):(p.createEl("div",{text:"Files found (click to link):",cls:"stnd-audit-candidates-title"}),d.forEach(h=>{p.createEl("button",{cls:"stnd-audit-candidate-btn",text:h.path}).addEventListener("click",async()=>{await this.plugin.vaultAudit.resolveBrokenEmbed(n,h.path)&&(new L.Notice("Link successfully repaired!"),delete this.searchingCandidates[c],this.runScan())})}))}})}_renderBrokenLinks(e,t){if(t.length>50){let n=e.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"});n.style.margin="0 0 var(--size-4-3) 0";let a=n.createEl("div",{cls:"stnd-audit-banner-text"});a.createEl("strong",{text:"Rendu masqu\xE9 par s\xE9curit\xE9"}),a.createEl("span",{text:`L'affichage des ${t.length} cartes de liens bris\xE9s est d\xE9sactiv\xE9 pour \xE9viter de ralentir Obsidian. Ces liens pointent g\xE9n\xE9ralement vers des notes futures pr\xE9vues.`});let s=n.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Afficher quand m\xEAme"});s.style.background="var(--interactive-accent)",s.style.color="var(--text-on-accent)",s.addEventListener("click",()=>{n.remove(),this._renderBrokenLinksList(e,t)})}else this._renderBrokenLinksList(e,t)}_renderBrokenLinksList(e,t){t.forEach(n=>{let a=e.createEl("div",{cls:"stnd-audit-card"});a.createEl("div",{cls:"stnd-audit-card-source-row"}).createEl("a",{cls:"stnd-audit-note-link",text:n.file.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(n.file,{eState:{line:n.line??0}})}),a.createEl("div",{cls:"stnd-audit-card-broken-target",text:`\u21B3 Broken link: [[${n.link}]]`});let i=a.createEl("div",{cls:"stnd-audit-card-actions"}),l=i.createEl("button",{cls:"stnd-panel-btn stnd-audit-btn-compact",text:"Create Note"});L.setIcon(l.createEl("span",{cls:"btn-icon"}),"plus"),l.addEventListener("click",async()=>{await this.plugin.vaultAudit.createMissingNote(n)&&(new L.Notice(`Note "${n.link}" created.`),this.runScan())});let c=i.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",text:"Remove Link"});L.setIcon(c.createEl("span",{cls:"btn-icon"}),"link-2"),c.addEventListener("click",async()=>{await this.plugin.vaultAudit.removeBrokenLink(n)&&(new L.Notice("Link converted to plain text."),this.runScan())})})}_renderOrphanedMedia(e,t){if(t.length>50){let n=e.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"});n.style.margin="0 0 var(--size-4-3) 0";let a=n.createEl("div",{cls:"stnd-audit-banner-text"});a.createEl("strong",{text:"Render Hidden for Safety"}),a.createEl("span",{text:`Displaying the ${t.length} orphaned media cards is disabled to prevent slowing down Obsidian.`});let s=n.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Show anyway"});s.style.background="var(--interactive-accent)",s.style.color="var(--text-on-accent)",s.addEventListener("click",()=>{n.remove(),this._renderOrphanedMediaList(e,t)})}else this._renderOrphanedMediaList(e,t)}_renderOrphanedMediaList(e,t){t.forEach(n=>{let a=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-orphan"});if(/\.(png|jpe?g|gif|webp|svg|avif)$/i.test(n.name)){let p=a.createEl("div",{cls:"stnd-audit-orphan-thumb-wrap"}),h=this.app.vault.getResourcePath(n),m=p.createEl("img",{cls:"stnd-audit-orphan-thumb"});m.src=h}let r=a.createEl("div",{cls:"stnd-audit-orphan-info"});r.createEl("div",{text:n.name,cls:"stnd-audit-orphan-name"});let i=Math.round(n.stat.size/102.4)/10,l=i>1e3?`${Math.round(i/102.4)/10} MB`:`${i} KB`;r.createEl("div",{text:`${n.path} (${l})`,cls:"stnd-audit-orphan-path"});let c=a.createEl("div",{cls:"stnd-audit-card-actions"});c.style.marginTop="var(--size-4-2)";let f=c.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",text:"Open"});L.setIcon(f.createEl("span",{cls:"btn-icon"}),"file-text"),f.addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(n)});let d=c.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-danger stnd-audit-btn-compact",text:"Delete"});L.setIcon(d.createEl("span",{cls:"btn-icon"}),"trash"),d.addEventListener("click",()=>{new Ro(this.plugin.app,`Delete permanently the media file "${n.name}"?`,"Delete",async()=>{await this.plugin.vaultAudit.deleteOrphan(n)&&(new L.Notice("Media deleted."),this.runScan())},()=>{}).open()})})}};ei.exports={StandardGardenView:Uo,STND_PANEL_VIEW:$r}});var ni=_((pm,ti)=>{"use strict";var{PluginSettingTab:Wl,Setting:mt}=require("obsidian"),{descWithLinks:Xt,DOCS_URLS:Zt}=le(),{renderStatusGuide:zl}=Io(),Bo=class extends Wl{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"Publication"}),e.createEl("p",{text:"Notes marked with 'publish: true' in their frontmatter appear in your digital garden. Private drafts and notes in excluded folders are never shared online.",cls:"setting-item-description"}),new mt(e).setName("Sync all published notes").setDesc(Xt("Reconcile notes between your vault and the garden. Local drafts are always preserved. \xA7",[{text:"Learn how sync works \u2192",href:Zt.sync}])).addButton(t=>t.setButtonText("Sync Now").setCta().onClick(async()=>{await this.plugin.garden.syncAllPublished()})),new mt(e).setName("Automatic synchronization").setDesc(Xt("Check for updates in the background every 5 minutes. When disabled, notes are only synced when you manually request it. \xA7",[{text:"Learn more \u2192",href:Zt.sync}])).addToggle(t=>t.setValue(!!this.plugin.settings.autoSync).onChange(async n=>{this.plugin.settings.autoSync=n,this.plugin.settings.autoSyncStartup=n,await this.plugin.saveSettings(),this.plugin.garden&&this.plugin.garden.setupAutoSyncInterval()})),new mt(e).setName("Panel top status indicator").setDesc(Xt("A visual accent on top of the Garden side panel reflecting the active note's publication state. \xA7",[{text:"Learn more \u2192",href:Zt.plugin}])).addDropdown(t=>t.addOption("garden","Garden (Organic gradient with animation)").addOption("subtle","Subtle (Minimal accent line)").addOption("hidden","Disabled").setValue(this.plugin.settings.publishIndicatorStyle||"garden").onChange(async n=>{this.plugin.settings.publishIndicatorStyle=n,await this.plugin.saveSettings();let{PublishStatusFeature:a}=Gt(),s=this.plugin.features.find(r=>r instanceof a);s&&s.refreshAll(),this.plugin.panel&&this.plugin.panel.render()})),e.createEl("h3",{text:"Status & Color Guide"}),e.createEl("p",{text:"Standard Garden uses a unified color system across the note titlebar, the side panel badge, and the panel top indicator:",cls:"setting-item-description"}),zl(e),new mt(e).setName("Open in browser after publish").setDesc("Automatically open the live web page in your browser immediately after publishing a note.").addToggle(t=>t.setValue(this.plugin.settings.openAfterPublish).onChange(async n=>{this.plugin.settings.openAfterPublish=n,await this.plugin.saveSettings()})),new mt(e).setClass("stnd-advanced-setting").setName("Publish status badge location").setDesc(Xt("Choose where the garden status icon appears in Obsidian. \xA7",[{text:"Learn more \u2192",href:Zt.plugin}])).addDropdown(t=>t.addOption("titlebar","Title bar (Note header)").addOption("statusbar","Status bar").addOption("ribbon","Ribbon bar").addOption("hidden","Hidden").setValue(this.plugin.settings.publishStatusLocation||"titlebar").onChange(async n=>{this.plugin.settings.publishStatusLocation=n,await this.plugin.saveSettings();let{PublishStatusFeature:a}=Gt(),s=this.plugin.features.find(r=>r instanceof a);s&&s.refreshAll()})),new mt(e).setClass("stnd-advanced-setting").setName("Excluded folders").setDesc(Xt("Folders completely ignored by the publication engine (comma-separated, e.g. Utopie, Archive). \xA7",[{text:"Configuration guide \u2192",href:Zt.plugin}])).addText(t=>t.setPlaceholder("Utopie, Archive").setValue(this.plugin.settings.excludedFolders||"").onChange(async n=>{this.plugin.settings.excludedFolders=n.trim(),await this.plugin.saveSettings()}))}};ti.exports={GardenSettingTab:Bo}});var oi=_((um,ai)=>{"use strict";var{PluginSettingTab:Jl,Setting:sa,Notice:Xl}=require("obsidian"),{descWithLinks:qo,DOCS_URLS:Yt}=le(),Ho=class extends Jl{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"Apparence"}),e.createEl("p",{text:"The Standard Design System guarantees 1:1 typographic fidelity between your local editor and your online garden. Frontmatter tokens and curated typography are rendered directly in the workspace. ",cls:"setting-item-description"}).createEl("a",{text:"View Design System Manual \u2192",href:Yt.tokens}),new sa(e).setName("Standard Design System").setDesc(qo("Apply classical typography, fluid vertical rhythm, callouts, and harmonious color palettes across notes. \xA7",[{text:"Learn more \u2192",href:Yt.typography}])).addToggle(a=>a.setValue(this.plugin.settings.enableDesignSystem).onChange(async s=>{this.plugin.settings.enableDesignSystem=s,await this.plugin.saveSettings(),this.plugin.design.updateBodyClasses()}));let n=en();new sa(e).setName("Default Theme").setDesc(qo("Select the default theme for notes that do not specify a theme in their frontmatter. \xA7",[{text:"Browse themes \u2192",href:Yt.tokens}])).addDropdown(a=>{a.addOption("","None (Default)"),Object.keys(n).forEach(s=>{a.addOption(s,s)}),a.setValue(this.plugin.settings.defaultTheme||"").onChange(async s=>{this.plugin.settings.defaultTheme=s,await this.plugin.saveSettings(),this.plugin.design.updateBodyClasses()})}),new sa(e).setClass("stnd-advanced-setting").setName("Clear theme cache").setDesc("Forces the plugin to re-scan and reload all theme stylesheets defined in your vault.").addButton(a=>a.setButtonText("Clear Cache").onClick(async()=>{this.plugin.settings.themeCache={},await this.plugin.saveSettings(),await this.plugin.design.updateBodyClasses(),new Xl("Theme cache cleared")})),new sa(e).setClass("stnd-advanced-setting").setName("CSS Hooks Reference").setDesc(qo("The plugin continuously reflects active workspace states (such as .stnd-adapter, .stnd-published) onto the workspace. \xA7",[{text:"Read CSS hooks documentation \u2192",href:Yt.cssHooks}])).addButton(a=>a.setButtonText("View CSS Hooks").onClick(()=>{window.open(Yt.cssHooks,"_blank")}))}};ai.exports={DesignSystemSettingTab:Ho}});var ii=_((hm,ri)=>{"use strict";var{PluginSettingTab:Zl,requestUrl:si,setIcon:Yl}=require("obsidian"),{isPublishIntent:Ql}=le(),{GardenSettingTab:$l}=ni(),{DesignSystemSettingTab:ec}=oi(),_o=class{constructor(e,t,n){this.app=e,this.plugin=t,this.rootTab=n}display(){let{containerEl:e}=this;e.empty();let t=this.plugin.settings.apiUsername;if(!t){this._renderDisconnected(e);return}e.createEl("h2",{text:"Compte"});let a=`${(this.plugin.settings.apiUrl||"https://standard.garden/api").replace(/\/api\/?$/,"")}/@${t}`,s=e.createEl("div");s.style.cssText="display:flex;align-items:center;gap:14px;padding:16px;border:1px solid var(--background-modifier-border);border-radius:12px;margin-bottom:16px;";let r=s.createEl("div",{text:t.slice(0,2).toLowerCase()});r.style.cssText="width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;flex:0 0 auto;background:var(--background-secondary);color:var(--interactive-accent);";let i=s.createEl("div");i.style.cssText="flex:1;min-width:0;";let l=i.createEl("div",{text:`@${t}`});l.style.cssText="font-weight:600;font-size:var(--font-ui-medium);";let c=i.createEl("a",{text:a.replace(/^https?:\/\//,""),href:a});c.setAttribute("target","_blank"),c.style.cssText="font-size:var(--font-ui-smaller);color:var(--text-accent);text-decoration:none;";let f=s.createEl("div");f.style.cssText="display:flex;gap:8px;flex:0 0 auto;";let d=f.createEl("button",{text:"Online"});d.classList.add("mod-cta"),d.onclick=()=>window.open(a,"_blank");let p=f.createEl("button",{text:"Sign out"});p.onclick=async()=>{this.plugin.settings.apiKey="",this.plugin.settings.apiUsername="",this.plugin.statsCache=null,await this.plugin.saveSettings(),this.rootTab?this.rootTab.display():this.display()};let m=(this.plugin.garden?.getPublishableFiles?this.plugin.garden.getPublishableFiles():this.app.vault.getMarkdownFiles()).filter(y=>Ql(this.app.metadataCache.getFileCache(y)?.frontmatter)).length,u=e.createEl("div",{cls:"stnd-account-stats-container"}),g=this.plugin.statsCache;g?(this._renderStatsValues(u,g,m),si({url:`${this.plugin.settings.apiUrl}/me`,headers:{"x-api-key":this.plugin.settings.apiKey},throw:!1}).then(y=>{y.status>=200&&y.status<300&&(this.plugin.statsCache=y.json,this._updateStatsValues(u,y.json,m))}).catch(()=>{})):(u.createEl("span",{cls:"stnd-account-stats-loading",text:"Loading garden stats..."}),si({url:`${this.plugin.settings.apiUrl}/me`,headers:{"x-api-key":this.plugin.settings.apiKey},throw:!1}).then(y=>{if(y.status<200||y.status>=300)throw new Error;return y.json}).then(y=>{this.plugin.statsCache=y,u.empty(),this._renderStatsValues(u,y,m)}).catch(()=>{u.empty(),u.createEl("span",{cls:"stnd-account-stats-loading",text:"Failed to load stats."})}))}_renderDisconnected(e){e.createEl("h2",{text:"Compte"});let t=e.createEl("div");t.style.cssText="text-align:center;padding:32px 20px;border:1px solid var(--background-modifier-border);border-radius:12px;margin-top:8px;";let n=t.createEl("div");n.style.cssText="width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;background:var(--background-secondary);color:var(--interactive-accent);",Yl(n,"leaf");let a=t.createEl("div",{text:"Connect your vault to the web"});a.style.cssText="font-size:var(--font-ui-large);font-weight:600;margin-bottom:8px;";let s=t.createEl("div",{text:"Publish notes to your digital garden with a single status: public frontmatter property.",cls:"setting-item-description"});s.style.cssText="max-width:380px;margin:0 auto 20px;line-height:1.5;";let r=t.createEl("button",{text:"Connect to Garden"});r.classList.add("mod-cta"),r.onclick=()=>this.plugin.garden.startConnect()}_renderStatsValues(e,t,n){let a=e.createEl("div",{cls:"stnd-account-stat-col"});a.createEl("div",{cls:"stnd-account-stat-value stnd-stat-local",text:String(n)}),a.createEl("div",{cls:"stnd-account-stat-label",text:"Local"});let s=e.createEl("div",{cls:"stnd-account-stat-col"});s.createEl("div",{cls:"stnd-account-stat-value stnd-stat-published",text:String(t.notesCount??0)}),s.createEl("div",{cls:"stnd-account-stat-label",text:"Published"});let r=e.createEl("div",{cls:"stnd-account-stat-col"});r.createEl("div",{cls:"stnd-account-stat-value stnd-stat-views",text:String(t.totalViews??0)}),r.createEl("div",{cls:"stnd-account-stat-label",text:"Views"});let i=e.createEl("div",{cls:"stnd-account-stat-col wide"}),l="Never";t.lastSync&&(l=new Date(t.lastSync).toLocaleDateString()),i.createEl("div",{cls:"stnd-account-stat-value medium stnd-stat-sync",text:l}),i.createEl("div",{cls:"stnd-account-stat-label",text:"Last Sync"})}_updateStatsValues(e,t,n){let a=e.querySelector(".stnd-stat-local");a&&a.setText(String(n));let s=e.querySelector(".stnd-stat-published");s&&s.setText(String(t.notesCount??0));let r=e.querySelector(".stnd-stat-views");r&&r.setText(String(t.totalViews??0));let i=e.querySelector(".stnd-stat-sync");if(i){let l="Never";t.lastSync&&(l=new Date(t.lastSync).toLocaleDateString()),i.setText(l)}}},jo=class extends Zl{constructor(e,t){super(e,t),this.plugin=t,this._cleanupAltListeners=null}hide(){super.hide(),this._cleanupAltListeners&&(this._cleanupAltListeners(),this._cleanupAltListeners=null)}display(){let{containerEl:e}=this;e.empty(),e.addClass("stnd-settings-flat"),this._cleanupAltListeners&&(this._cleanupAltListeners(),this._cleanupAltListeners=null);let t=f=>{(f.key==="Alt"||f.altKey)&&e.addClass("stnd-show-advanced")},n=f=>{(f.key==="Alt"||!f.altKey)&&e.removeClass("stnd-show-advanced")};window.addEventListener("keydown",t),window.addEventListener("keyup",n),this._cleanupAltListeners=()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)};let a=new _o(this.app,this.plugin,this);a.containerEl=e.createDiv({cls:"stnd-settings-section"}),a.display();let s=new $l(this.app,this.plugin);s.containerEl=e.createDiv({cls:"stnd-settings-section"}),s.display();let r=new ec(this.app,this.plugin);if(r.containerEl=e.createDiv({cls:"stnd-settings-section"}),r.display(),this.plugin.settings.enableMycelium){let{MyceliumSettingTab:f}=ta(),d=new f(this.app,this.plugin);d.containerEl=e.createDiv({cls:"stnd-settings-section"}),d.display()}let l=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/.test(navigator.platform)?"\u2325 Option":"Alt";e.createDiv({cls:"stnd-alt-hint"}).createEl("span",{text:`Maintenez la touche ${l} pour r\xE9v\xE9ler les outils avanc\xE9s de maintenance.`})}};ri.exports={StandardSettingTab:jo}});var ci=_((mm,li)=>{"use strict";var{SuggestModal:tc,Notice:nc}=require("obsidian"),ac=en(),Vo=class extends tc{constructor(e,t,n){super(e),this.plugin=t,this.activeFile=n,this.setPlaceholder("Select a theme for this note..."),this.themes=[{id:"",name:"Default (Inherit / Clear)",desc:"Clear theme property to use vault default"},...Object.keys(ac).sort((a,s)=>a.localeCompare(s)).map(a=>({id:a,name:a.charAt(0).toUpperCase()+a.slice(1),desc:`Standard theme: ${a}`}))]}getSuggestions(e){let t=(e||"").toLowerCase().trim();return t?this.themes.filter(n=>n.name.toLowerCase().includes(t)||n.id.toLowerCase().includes(t)):this.themes}renderSuggestion(e,t){t.createEl("div",{text:e.name}),t.createEl("small",{text:e.desc,cls:"stnd-panel-meta",attr:{style:"color: var(--text-faint); font-size: 0.85em;"}})}async onChooseSuggestion(e){this.activeFile&&(await this.app.fileManager.processFrontMatter(this.activeFile,t=>{e.id?t.theme=e.id:delete t.theme}),new nc(e.id?`Standard : Th\xE8me d\xE9fini sur "${e.name}".`:"Standard : Th\xE8me r\xE9initialis\xE9 sur la valeur par d\xE9faut."))}};li.exports={ThemeSuggestModal:Vo}});Object.defineProperty(exports,"__esModule",{value:!0});var ge=require("obsidian"),{DEFAULT_SETTINGS:di}=le(),Ko=class extends ge.Plugin{constructor(){super(...arguments),this.features=[]}async onload(){let e=performance.now();document.body.classList.add("stnd");let t=()=>{let s=document.body.classList.contains("theme-dark");document.body.setAttribute("data-theme",s?"dark":"light")};t(),this.themeObserver=new MutationObserver(s=>{for(let r of s)r.attributeName==="class"&&t()}),this.themeObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]});let n=await this.loadData();this.isFirstInstall=n===null,this.settings=Object.assign({},di,n);let{DesignSystemFeature:a}=ss();this.features=[],this.settings.enableDesignSystem&&(this.design=new a(this.app,this),this.features.push(this.design)),await Promise.all(this.features.map(s=>s.load())),this.design&&this.design.applyStartupSnapshotSynchronously(),this.app.workspace.onLayoutReady(()=>{this.loadRemainingFeatures(e)})}async loadRemainingFeatures(e){let{GardenFeature:t}=Pr(),{PublishStatusFeature:n}=Gt(),{SyntaxPreviewFeature:a}=Kr(),{MyceliumFeature:s}=ta(),{FeedFeature:r}=To();this.garden=new t(this.app,this),this.features.push(this.garden),this.registerObsidianProtocolHandler("standard-connect",h=>{this.garden.handleConnectCallback(h)});let i=[];this.publishStatus=new n(this.app,this),i.push(this.publishStatus),i.push(new r(this.app,this)),this.settings.enableSyntaxPreview!==!1&&i.push(new a(this.app,this)),this.settings.enableMycelium&&(this.mycelium=new s(this.app,this),i.push(this.mycelium)),this.features.push(...i),await Promise.all(i.map(h=>h.load?h.load():Promise.resolve()));let{StandardGardenView:l,STND_PANEL_VIEW:c}=oa();this.registerView(c,h=>{let m=new l(h,this);return this.panel=m,m});let{StandardSettingTab:f}=ii();this.settingTab=new f(this.app,this),this.addSettingTab(this.settingTab),this.addRibbonIcon("flower","Standard Garden Panel",()=>{this.activatePanel()}),this.isFirstInstall&&!this.settings.panelOpenedOnInstall&&(this.activatePanel(),this.settings.panelOpenedOnInstall=!0,await this.saveSettings());let{STND_PANEL_VIEW:d}=oa();this.addCommand({id:"open-stnd-panel",name:"Open Garden panel",callback:()=>this.activatePanel(d)}),this.addCommand({id:"open-settings",name:"Open settings",callback:()=>{this.app.setting&&(this.app.setting.open(),this.app.setting.openTabById(this.manifest.id))}}),this.addCommand({id:"publish-current-note",name:"Plant seed (Publish current note)",callback:()=>this.garden.publishCurrentNote()}),this.addCommand({id:"unpublish-current-note",name:"Uproot seed (Remove from garden)",callback:()=>this.garden.unpublishCurrentNote()}),this.addCommand({id:"view-live-version",name:"View live version",callback:()=>this.garden.viewLiveVersion()}),this.addCommand({id:"copy-live-url",name:"Copy live URL to clipboard",callback:()=>this.garden.copyLiveUrl()}),this.addCommand({id:"copy-short-url",name:"Copy short URL (garden-short) to clipboard",callback:()=>this.garden.copyShortUrl()}),this.addCommand({id:"share-current-note",name:"Share note (Open share dialog)",callback:()=>this.garden.shareCurrentNote()}),this.addCommand({id:"check-note-status",name:"Check garden publication status",callback:async()=>{let h=this.app.workspace.getActiveFile();if(!h||h.extension!=="md"){new ge.Notice("Standard : Ouvrez une note Markdown.");return}new ge.Notice("Standard : V\xE9rification du statut en ligne...");let m=await this.garden.checkNoteStatus(h);m.status==="synced"?new ge.Notice(`Standard : "${h.basename}" est \xE0 jour en ligne.`):m.status==="outdated"?new ge.Notice(`Standard : Une version plus r\xE9cente de "${h.basename}" existe en ligne.`):m.status==="changed"?new ge.Notice(`Standard : Modifications locales non publi\xE9es pour "${h.basename}".`):m.status==="unpublished"?new ge.Notice(`Standard : "${h.basename}" n'est pas encore publi\xE9e en ligne.`):new ge.Notice(`Standard : Impossible de v\xE9rifier le statut de "${h.basename}".`)}}),this.addCommand({id:"set-visibility-public",name:"Set visibility: Public",callback:()=>this.garden.setNoteVisibility("public")}),this.addCommand({id:"set-visibility-unlisted",name:"Set visibility: Unlisted",callback:()=>this.garden.setNoteVisibility("unlisted")}),this.addCommand({id:"set-visibility-private",name:"Set visibility: Private",callback:()=>this.garden.setNoteVisibility("private")}),this.addCommand({id:"cycle-visibility",name:"Cycle visibility (Public / Unlisted / Private)",callback:()=>this.garden.cycleNoteVisibility()}),this.addCommand({id:"sync-all-published",name:"Tend the garden (Sync all notes)",callback:()=>this.garden.syncAllPublished()}),this.addCommand({id:"download-new-notes",name:"Harvest seeds (Download new notes from garden)",callback:()=>this.garden.downloadNewOnlineNotes()}),this.addCommand({id:"clean-unpublished-notes",name:"Prune garden (Clean up unpublished notes)",callback:()=>this.garden.cleanUnpublishedNotes()}),this.addCommand({id:"ask-garden-ai",name:"Ask Hyphe",callback:()=>this.garden.askGardenAI()}),this.addCommand({id:"set-note-theme",name:"Set note theme",callback:()=>{let h=this.app.workspace.getActiveFile();if(!h||h.extension!=="md"){new ge.Notice("Standard : Ouvrez une note Markdown pour d\xE9finir son th\xE8me.");return}let{ThemeSuggestModal:m}=ci();new m(this.app,this,h).open()}}),this.addCommand({id:"reset-note-tokens",name:"Reset note styling (Clear design tokens)",callback:async()=>{let h=this.app.workspace.getActiveFile();if(!h||h.extension!=="md"){new ge.Notice("Standard : Ouvrez une note Markdown.");return}let{KNOWN_TOKENS:m}=le(),u=0;await this.app.fileManager.processFrontMatter(h,g=>{for(let y of Object.keys(g))!y.startsWith("garden-")&&!y.startsWith("garden_")&&(m.has(y)||y.startsWith("stnd-")||y.startsWith("stnd_"))&&(delete g[y],u++)}),new ge.Notice(u>0?`Standard : ${u} token(s) de design r\xE9initialis\xE9(s).`:"Standard : Aucun token personnalis\xE9 sur cette note.")}});let p=performance.now();console.log(`[Standard] Fully loaded in ${Math.round(p-e)}ms (Visuals ready at ~150ms)`)}async onunload(){for(let e of this.features)e.unload&&await e.unload();this.themeObserver&&this.themeObserver.disconnect(),document.body.classList.remove("stnd")}async activatePanel(e){let{STND_PANEL_VIEW:t}=oa(),n=e||t,a=this.app.workspace.getLeavesOfType(n);if(a.length){this.app.workspace.revealLeaf(a[0]);return}let s=this.app.workspace.getRightLeaf(!1);await s.setViewState({type:n,active:!0}),this.app.workspace.revealLeaf(s)}updateRibbonIconsVisibility(){}async loadSettings(){let e=await this.loadData();this.settings=Object.assign({},di,e);let t=!1;this.settings.themeCache&&(delete this.settings.themeCache,t=!0),this.settings.snippets&&this.settings.snippets.globalCache&&(delete this.settings.snippets.globalCache,t=!0),t&&(console.log("[Standard] Purging heavy caches from data.json..."),await this.saveSettings())}async saveSettings(){await this.saveData(this.settings)}};module.exports=Ko;
