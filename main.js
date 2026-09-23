"use strict";var Ht=Object.defineProperty;var Vt=(p,e,t)=>e in p?Ht(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t;var O=(p,e)=>()=>{try{return e||p((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var je=(p,e,t)=>Vt(p,typeof e!="symbol"?e+"":e,t);var q=O((Kn,_e)=>{"use strict";var Wt=new Set(["color-light-background","color-light-foreground","color-light-accent","color-light-red","color-light-orange","color-light-yellow","color-light-green","color-light-cyan","color-light-blue","color-light-purple","color-light-pink","color-light-bold","color-light-italic","color-dark-background","color-dark-foreground","color-dark-accent","color-dark-red","color-dark-orange","color-dark-yellow","color-dark-green","color-dark-cyan","color-dark-blue","color-dark-purple","color-dark-pink","color-dark-bold","color-dark-italic","font-header-weight","font-header-letter-spacing","font-header-line-height","font-header-style","font-header-feature","font-header-variation","font-weight","font-weight-bold","font-feature","font-variation","font-monospace-feature","font-monospace-variation","font-interface-feature","font-interface-variation","optical-ratio","font-density","color-header","color-bold","color-italic","color-accent","line-width","margin","margin-block","font-header","font-text","font-interface","font-monospace"]),zt=new Set(["font-header","font-text","font-interface","font-monospace"]),Gt={enableDesignSystem:!0,defaultTheme:"",startupSnapshot:{cssClasses:[],theme:"",customCss:""},themeCache:{},apiKey:"",apiUsername:"",apiUrl:"https://standard.garden/api",openAfterPublish:!1,publishStatusLocation:"titlebar",publishIndicatorStyle:"garden",autoSync:!1,autoSyncStartup:!1,syncDirection:"2way",excludedFolders:"Utopie",enableMycelium:!1,panelOpenedOnInstall:!1,mycelium:{enableGhostLinks:!1,enableLinkingCommand:!0,enableCompostFooter:!1}},jt={plugin:"https://stnd.build/manual/system/obsidian-plugin",sync:"https://stnd.build/manual/system/obsidian-plugin#synchronisation",tokens:"https://stnd.build/manual/system/obsidian-design-tokens",cssHooks:"https://stnd.build/manual/system/css-and-rendering-hooks",typography:"https://stnd.build/manual/standard/typography",frontmatter:"https://stnd.build/manual/standard/frontmatter",syntax:"https://stnd.build/manual/standard/syntax"};function Kt(p,e=[]){let t=document.createDocumentFragment();return p.split("\xA7").forEach((n,o)=>{if(n&&t.appendText(n),o<e.length){let r=e[o],s=t.createEl("a",{text:r.text,href:r.href});s.setAttribute("target","_blank"),s.setAttribute("rel","noopener noreferrer"),s.style.color="var(--link-color, var(--interactive-accent))",s.style.textDecoration="underline",s.style.textUnderlineOffset="2px"}}),t}function Ke(p){if(p==null)return!1;if(typeof p=="object"&&!(p instanceof Date)){if(typeof p.status=="string"){let e=p.status.trim().toLowerCase();if(e==="public"||e==="published")return!0;if(e==="draft"||e==="private"||e==="internal"||e==="archived")return!1}return p.publish!==void 0?Ke(p.publish):!1}if(p===!0)return!0;if(p===!1||p==="")return!1;if(p instanceof Date)return!isNaN(p.getTime());if(typeof p=="string"){let e=p.trim().toLowerCase();return e==="public"||e==="published"||e==="true"?!0:e==="draft"||e==="private"||e==="archived"||e==="false"?!1:!isNaN(new Date(p).getTime())}return!1}function _t(p){return/\.(png|jpe?g|gif|webp|svg|avif)$/i.test(p)}function Xt(p){return/\.pdf$/i.test(p)}function Zt(p){return!p||!/\.[a-z0-9]+$/i.test(p)?!1:!/\.(md|markdown|canvas)$/i.test(p)}function Jt(p){let e=(p.split(".").pop()||"").toLowerCase();return{png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",avif:"image/avif",pdf:"application/pdf",zip:"application/zip",gz:"application/gzip",tar:"application/x-tar",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",mp4:"video/mp4",mov:"video/quicktime",webm:"video/webm",txt:"text/plain",csv:"text/csv",json:"application/json",epub:"application/epub+zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}[e]||"application/octet-stream"}var Yt=new Set(["garden-domain","garden-brand","garden-favicon","garden-launcher","garden-mycelium","garden-avatar","garden-display-name","garden-url","garden-short"]),Qt=new Set(["garden-domain","garden-brand","garden-favicon","garden-launcher","garden-mycelium"]);_e.exports={KNOWN_TOKENS:Wt,FONT_TOKENS:zt,GARDEN_FRONTMATTER_KEYS:Yt,STRUCTURAL_KEYS:Qt,DEFAULT_SETTINGS:Gt,isPublishIntent:Ke,isImageFile:_t,isPdfFile:Xt,isAttachmentFile:Zt,getMimeType:Jt,descWithLinks:Kt,DOCS_URLS:jt}});var oe=O((_n,Xe)=>{"use strict";Xe.exports={2064:`body.stnd-adapter[data-stnd-theme="2064"] {
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
  src: url("data:font/woff2;charset=utf-8;base64,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") format("woff2");
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
}`}});var Ze=O(()=>{(function(p){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;p.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},p.languages.css.atrule.inside.rest=p.languages.css;var t=p.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism)});var Je=O(()=>{(function(p){p.languages.typescript=p.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),p.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete p.languages.typescript.parameter,delete p.languages.typescript["literal-property"];var e=p.languages.extend("typescript",{});delete e["class-name"],p.languages.typescript["class-name"].inside=e,p.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),p.languages.ts=p.languages.typescript})(Prism)});var Ye=O(()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json});var Qe=O(()=>{(function(p){var e=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+t.source+"(?:[ 	]+"+e.source+")?|"+e.source+"(?:[ 	]+"+t.source+")?)",n=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),o=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function r(s,i){i=(i||"").replace(/m/g,"")+"m";var l=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return s});return RegExp(l,i)}p.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+n+"|"+o+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:r(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:r(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:r(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:r(o),lookbehind:!0,greedy:!0},number:{pattern:r(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:e,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},p.languages.yml=p.languages.yaml})(Prism)});var $e=O(()=>{(function(p){var e="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:t,environment:{pattern:RegExp("\\$"+e),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+e),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};p.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+e),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:t}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+e),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},t.inside=p.languages.bash;for(var n=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=a.variable[1].inside,r=0;r<n.length;r++)o[n[r]]=p.languages.bash[n[r]];p.languages.sh=p.languages.bash,p.languages.shell=p.languages.bash})(Prism)});var tt=O((oa,et)=>{"use strict";et.exports=`/* --- Font: adobe-jenson-pro --- */
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



`});var rt=O((ra,ot)=>{"use strict";var nt=require("obsidian"),{KNOWN_TOKENS:$t,FONT_TOKENS:at}=q(),en=oe();function tn(p){let e=window.Prism;window.Prism=p;try{p.languages.css||Ze(),p.languages.typescript||Je(),p.languages.json||Ye(),p.languages.yaml||Qe(),p.languages.bash||$e()}catch(t){console.error("[Standard] Failed to load bundled Prism languages:",t)}finally{e&&(window.Prism=e)}}var he=class{constructor(e,t){this.app=e,this.plugin=t,this.appliedClasses=new Set,this.appliedSnippetViewClasses=new Set,this.hasAppliedStartupSnapshot=!1,this.stndFrontmatterElement=null,this.stndThemeElement=null,this.lastAppliedCustomCss="",this.lastAppliedThemeSnippetCss="",this.lastAppliedThemePath="",this.lastAppliedThemeMtime=0,this.frontmatterUpdateTimeout=null,this.snapshotSaveTimeout=null,this.workspaceReadyTimeout=null,this.startupRetryCount=0,this.themeCache={}}getCurrentThemeInfo(){let e=this.app.workspace.getActiveFile(),t=e?this.app.metadataCache.getFileCache(e)?.frontmatter??null:null,a=t&&t.theme!=null?String(t.theme).trim():"";!a&&this.plugin.settings.defaultTheme&&(a=this.plugin.settings.defaultTheme);let n=a?this.app.metadataCache.getFirstLinkpathDest(a,""):null;return{activeFile:e,themeNote:n}}shouldRefreshForChangedFile(e){if(!e)return!0;let{activeFile:t,themeNote:a}=this.getCurrentThemeInfo();return!!(t&&e.path===t.path||a&&e.path===a.path)}async load(){await this.loadThemeCacheFromFile(),this.ensureThemeElement(),this.ensureFontsElement(),this.plugin.registerMarkdownPostProcessor(async e=>{let t=e.querySelectorAll('pre > code[class*="language-"]:not(.is-highlighted)');if(!t.length)return;let a;try{a=await nt.loadPrism()}catch{return}!a||typeof a.highlight!="function"||(tn(a),t.forEach(n=>{if(n.querySelector(".token")){n.classList.add("is-highlighted");return}let o=n.className.match(/language-(\S+)/);if(!o)return;let r=a.languages[o[1]];if(r)try{n.innerHTML=a.highlight(n.textContent,r,o[1]),n.classList.add("is-highlighted")}catch{}}))}),this.plugin.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.updateBodyClasses(),this.updateModeClasses()})),this.plugin.registerEvent(this.app.metadataCache.on("changed",e=>{this.shouldRefreshForChangedFile(e)&&(clearTimeout(this.frontmatterUpdateTimeout),this.frontmatterUpdateTimeout=setTimeout(()=>{this.updateBodyClasses()},50))})),this.plugin.registerEvent(this.app.metadataCache.on("resolve",e=>{this.shouldRefreshForChangedFile(e)&&(this.hasAppliedStartupSnapshot||this.applyStartupSnapshotSynchronously(),clearTimeout(this.frontmatterUpdateTimeout),this.frontmatterUpdateTimeout=setTimeout(()=>{this.updateBodyClasses()},50))})),this.plugin.registerEvent(this.app.workspace.on("layout-change",()=>{this.updateModeClasses()})),this.updateModeClasses(),this.app?.workspace?.onLayoutReady?this.app.workspace.onLayoutReady(()=>{this.onWorkspaceReady()}):this.app.workspace.on("layout-ready",()=>{this.onWorkspaceReady()})}async unload(){this.frontmatterUpdateTimeout&&clearTimeout(this.frontmatterUpdateTimeout),this.workspaceReadyTimeout&&clearTimeout(this.workspaceReadyTimeout),this.snapshotSaveTimeout&&clearTimeout(this.snapshotSaveTimeout),document.body.removeAttribute("data-stnd-theme"),this.stndThemeElement&&this.stndThemeElement.remove(),this.cleanup(),this.clearModeClasses()}onWorkspaceReady(){this.workspaceReadyTimeout=setTimeout(()=>{this.updateBodyClasses(),this.applyStartupSnapshotSynchronously()},50)}ensureThemeElement(){let e=document.getElementById("stnd-theme");e||(e=document.createElement("style"),e.id="stnd-theme",document.head.appendChild(e)),this.stndThemeElement=e}ensureFontsElement(){let e=document.getElementById("stnd-fonts");e||(e=document.createElement("style"),e.id="stnd-fonts",document.head.appendChild(e));try{let t=tt(),a=`${this.plugin.manifest.dir}/fonts`,n=this.app.vault.adapter,o=t.replace(/STND_FONT_URL:([\w.-]+)/g,(r,s)=>n.getResourcePath(`${a}/${s}`));e.textContent!==o&&(e.textContent=o)}catch(t){console.warn("[Standard] Failed to load generated fonts:",t)}}applyThemeCss(e,t){if(!this.stndThemeElement)return;let a=e&&en[e]||"";a&&(a=a.replace(/\[data-theme="/g,'body.stnd-adapter[data-stnd-theme="'));let n=[a,t].filter(Boolean).join(`

`);this.stndThemeElement.textContent!==n&&(this.stndThemeElement.textContent=n)}async loadThemeCacheFromFile(){let e=`${this.plugin.manifest.dir}/cache-themes.json`;try{if(await this.app.vault.adapter.exists(e)){let t=await this.app.vault.adapter.read(e);this.themeCache=JSON.parse(t)||{}}}catch(t){console.warn("[Standard] Failed to load theme cache:",t)}}async saveThemeCacheToFile(){let e=`${this.plugin.manifest.dir}/cache-themes.json`;try{await this.app.vault.adapter.write(e,JSON.stringify(this.themeCache,null,2))}catch(t){console.warn("[Standard] Failed to save theme cache:",t)}}createStyleElements(){this.ensureThemeElement();let e=document.getElementById("stnd-frontmatter");e||(e=document.createElement("style"),e.id="stnd-frontmatter",this.stndThemeElement&&this.stndThemeElement.nextSibling?document.head.insertBefore(e,this.stndThemeElement.nextSibling):document.head.appendChild(e)),this.stndFrontmatterElement=e}cleanup(){this.clearAllClasses(),this.clearSnippetViewClasses(),this.clearFrontmatterProperties(),this.clearThemeSnippet();let e=document.getElementById("stnd-fonts");e&&e.remove()}saveStartupSnapshot(e,t){clearTimeout(this.snapshotSaveTimeout),this.snapshotSaveTimeout=setTimeout(async()=>{let a=t&&t.theme!=null?String(t.theme).trim():"";this.plugin.settings.startupSnapshot={cssClasses:Array.from(e).map(n=>n.replace("cssclass-","")),theme:a,customCss:this.lastAppliedCustomCss},await this.plugin.saveSettings()},1e3)}getStructuralClasses(){return["stnd-callouts","stnd-better-highlights","stnd-code-tweaks","stnd-subdued-links","stnd-clean-frontmatter","stnd-text-trim","stnd-base-tweaks","stnd-clean-transclusions"]}async updateBodyClasses(){let e=this.app.workspace.getActiveFile(),t=new Set,a=null;if(this.plugin.settings.enableDesignSystem&&(t.add("stnd-adapter"),this.getStructuralClasses().forEach(o=>t.add(o))),e&&(a=this.app.metadataCache.getFileCache(e)?.frontmatter??null,a)){let o=a.cssclasses||a.cssClasses;o&&(Array.isArray(o)?o:[o]).forEach(d=>{typeof d=="string"&&d.trim().length>0&&t.add("cssclass-"+d.trim().replace(/\s+/g,"-"))});let r=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey,s=a[r];if(s===!0||s==="true"||s==="public"||s==="unlisted"||s==="private"){t.add("stnd-note-published");let l=String(a.visibility||s||"").toLowerCase().trim();l==="public"?t.add("stnd-note-public"):l==="unlisted"?t.add("stnd-note-unlisted"):l==="private"&&t.add("stnd-note-private")}}let n=document.body.classList;this.appliedClasses.forEach(o=>{t.has(o)||n.remove(o)}),t.forEach(o=>{if(!this.appliedClasses.has(o))try{n.add(o)}catch(r){if(r instanceof DOMException)new nt.Notice(`Stnd: Invalid CSS class found: "${o}". Check your frontmatter for classes with spaces or special characters.`);else throw r}}),this.appliedClasses=t,this.plugin.settings.enableDesignSystem?e&&(a?(this.applyFrontmatter(a),await this.applyTheme(a)):await this.applyTheme(null)):(this.clearFrontmatterProperties(),this.clearThemeSnippet(),document.body.removeAttribute("data-stnd-theme"),this.applyThemeCss(null,"")),this.saveStartupSnapshot(t,a)}async applyTheme(e){let t=e&&e.theme!=null?String(e.theme).trim():"";if(!t&&this.plugin.settings.defaultTheme&&(t=this.plugin.settings.defaultTheme),t?document.body.setAttribute("data-stnd-theme",t):document.body.removeAttribute("data-stnd-theme"),!t){this.clearThemeSnippet(),this.applyThemeCss(null,"");return}let a=this.themeCache[t];if(a){let o=a.replace(/body\.stnd-color\b/g,`body.stnd-adapter[data-stnd-theme="${t}"]`);this.lastAppliedThemeSnippetCss=o,this.applyThemeCss(t,o)}else this.lastAppliedThemeSnippetCss&&this.clearThemeSnippet(),this.applyThemeCss(t,"");let n=this.app.metadataCache.getFirstLinkpathDest(t,"");if(!n){cachedCss||this.clearThemeSnippet();return}if(!(this.lastAppliedThemePath===n.path&&this.lastAppliedThemeMtime===n.stat.mtime))try{let o=await this.app.vault.read(n),r=/```css\b.*?\n([\s\S]*?)```/gi,s=[...o.matchAll(r)].map(i=>i[1]).join(`
`);if(s=s.replace(/body\.stnd-color\b/g,`body.stnd-adapter[data-stnd-theme="${t}"]`),s!==this.lastAppliedThemeSnippetCss){this.lastAppliedThemeSnippetCss=s,this.lastAppliedThemePath=n.path,this.lastAppliedThemeMtime=n.stat.mtime,this.applyThemeCss(t,s),this.themeCache[t]=s;let i=Object.keys(this.themeCache);i.length>5&&delete this.themeCache[i[0]],await this.saveThemeCacheToFile()}else this.lastAppliedThemePath=n.path,this.lastAppliedThemeMtime=n.stat.mtime}catch(o){console.error(`Standard: Error loading theme note "${n.path}":`,o),cachedCss||this.clearThemeSnippet()}}clearThemeSnippet(){this.lastAppliedThemeSnippetCss="",this.lastAppliedThemePath="",this.lastAppliedThemeMtime=0}clearAllClasses(){this.appliedClasses.forEach(e=>{document.body.classList.remove(e)}),this.appliedClasses.clear()}clearSnippetViewClasses(){if(!this.appliedSnippetViewClasses||this.appliedSnippetViewClasses.size===0)return;let e=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!e){this.appliedSnippetViewClasses.clear();return}let t=e.querySelectorAll(".markdown-source-view, .markdown-preview-view");this.appliedSnippetViewClasses.forEach(a=>{t.forEach(n=>n.classList.remove(a))}),this.appliedSnippetViewClasses.clear()}addClassToViews(e){let t=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!t)return;t.querySelectorAll(".markdown-source-view, .markdown-preview-view").forEach(n=>n.classList.add(e)),this.appliedSnippetViewClasses.add(e)}applyStartupSnapshotSynchronously(){if(this.hasAppliedStartupSnapshot)return;let e=this.plugin.settings?.startupSnapshot;if(!e){this.hasAppliedStartupSnapshot=!0;return}if(Array.isArray(e.cssClasses)&&e.cssClasses.forEach(t=>{if(typeof t=="string"&&t.trim().length>0){let a="cssclass-"+t.trim();document.body.classList.add(a),this.appliedClasses.add(a)}}),this.plugin.settings.enableDesignSystem&&(document.body.classList.add("stnd-adapter"),this.appliedClasses.add("stnd-adapter"),this.getStructuralClasses().forEach(t=>{document.body.classList.add(t),this.appliedClasses.add(t)})),this.plugin.settings.enableDesignSystem){let t=e.theme||this.plugin.settings.defaultTheme||"";t&&document.body.setAttribute("data-stnd-theme",t),this.createStyleElements(),this.ensureFontsElement();let a=t&&this.themeCache[t]||"";a&&(a=a.replace(/body\.stnd-color\b/g,`body.stnd-adapter[data-stnd-theme="${t}"]`)),this.applyThemeCss(t,a),this.lastAppliedThemeSnippetCss=a,e.customCss&&this.stndFrontmatterElement&&(this.stndFrontmatterElement.textContent=e.customCss,this.lastAppliedCustomCss=e.customCss)}else this.createStyleElements();this.hasAppliedStartupSnapshot=!0}clearModeViewClasses(){let e=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!e)return;let t=e.querySelectorAll(".markdown-source-view, .markdown-preview-view");["stnd-reading","stnd-editing","stnd-source","stnd-canvas","stnd-empty","stnd-base","stnd-webviewer","stnd-note"].forEach(n=>{t.forEach(o=>o.classList.remove(n)),this.appliedSnippetViewClasses&&this.appliedSnippetViewClasses.delete(n)})}applyFrontmatter(e){let t={},a=new Set;for(let[n,o]of Object.entries(e))if($t.has(n)){let r="--"+n;t[r]=o,at.has(n)&&String(o).split(",").map(i=>i.trim().replace(/['"]/g,"")).forEach(i=>a.add(i))}if(Object.keys(t).length>0){if(!this.stndFrontmatterElement||!document.getElementById("stnd-frontmatter")){this.stndFrontmatterElement=document.createElement("style"),this.stndFrontmatterElement.id="stnd-frontmatter";let i=document.getElementById("stnd-theme");i&&i.nextSibling?document.head.insertBefore(this.stndFrontmatterElement,i.nextSibling):document.head.appendChild(this.stndFrontmatterElement)}let n=this.stndFrontmatterElement,o=Array.from(a).map(i=>`@import url('https://fonts.googleapis.com/css2?family=${i.replace(/\s+/g,"+")}&display=swap');`).join(`
`),r=Object.entries(t).map(([i,l])=>{let d=i.slice(2),h=at.has(d)&&typeof l=="string"&&l.includes(" ")&&!l.startsWith("'")&&!l.startsWith('"')?"'"+l+"'":l;return`  ${i}: ${h} !important;`}).join(`
`),s=[o,`html body {
${r}
}`].filter(Boolean).join(`

`);if(s===this.lastAppliedCustomCss)return;n.textContent=s,this.lastAppliedCustomCss=s}else this.clearFrontmatterProperties()}clearFrontmatterProperties(){this.stndFrontmatterElement&&(this.stndFrontmatterElement.textContent="",this.lastAppliedCustomCss="")}updateModeClasses(){let e=document.body,t=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!t)return;let a=t.getAttribute("data-type"),n=t.getAttribute("data-mode"),o=t.querySelector(".markdown-source-view"),r=o?o.classList.contains("is-live-preview"):!1,s=`${a}|${n}|${r}`;if(t===this._lastModeLeafEl&&s===this._lastModeSignature)return;this._lastModeLeafEl=t,this._lastModeSignature=s,this.clearModeClasses(),this.clearModeViewClasses();let i=null;switch(a){case"markdown":e.classList.add("stnd-note"),this.addClassToViews("stnd-note"),n==="preview"?(i="reading",e.classList.add("stnd-reading"),this.addClassToViews("stnd-reading")):n==="source"&&(i="editing",e.classList.add("stnd-editing"),this.addClassToViews("stnd-editing"),o&&!r&&(e.classList.add("stnd-source"),this.addClassToViews("stnd-source")));break;case"canvas":i="canvas",e.classList.add("stnd-canvas"),this.addClassToViews("stnd-canvas");break;case"empty":i="empty",e.classList.add("stnd-empty"),this.addClassToViews("stnd-empty");break;case"webviewer":i="webviewer",e.classList.add("stnd-webviewer"),this.addClassToViews("stnd-webviewer");break;case"bases":i="base",e.classList.add("stnd-base"),this.addClassToViews("stnd-base");break}}clearModeClasses(){["stnd-reading","stnd-editing","stnd-source","stnd-canvas","stnd-empty","stnd-base","stnd-webviewer","stnd-note"].forEach(t=>{document.body.classList.remove(t),this.appliedClasses.delete(t)})}};ot.exports={DesignSystemFeature:he}});var me=O((sa,st)=>{"use strict";var nn=require("obsidian"),ue=class extends nn.Modal{constructor(e,t,a,n,o){super(e),this.message=t,this.confirmText=a,this.onConfirm=n,this.onCancel=o||(()=>{})}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),this.message.split(`
`).forEach((o,r)=>{let s=e.createEl("p",{text:o,cls:r===0?"stnd-modal-message":"stnd-modal-detail"})});let t=e.createEl("div",{cls:"stnd-modal-btns"});t.createEl("button",{text:"Cancel",cls:"stnd-modal-btn-cancel"}).addEventListener("click",()=>{this.close(),this.onCancel()}),t.createEl("button",{text:this.confirmText,cls:"mod-cta"}).addEventListener("click",()=>{this.close(),this.onConfirm()})}onClose(){this.contentEl.empty()}};st.exports={StndConfirmModal:ue}});var lt=O((ia,it)=>{"use strict";var Z=require("obsidian"),ge=class extends Z.Modal{constructor(e,t){super(e),this.plugin=t}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),e.addClass("stnd-ask-modal"),e.createEl("h2",{text:"\u2728 Ask Hyphe",cls:"stnd-modal-title"}),e.createEl("p",{text:"Ask Hyphe a question about your digital garden. Hyphe runs in the cloud on standard.garden and searches only across your published notes.",cls:"stnd-modal-detail"});let t=e.createEl("div",{cls:"stnd-ask-cloud-notice"});t.setText("\u{1F310} Online AI \xB7 Only searches notes published to standard.garden. Local drafts remain strictly private."),t.style.fontSize="11px",t.style.color="var(--text-muted)",t.style.marginBottom="14px",t.style.display="inline-flex",t.style.alignItems="center",t.style.gap="6px",t.style.padding="4px 8px",t.style.borderRadius="4px",t.style.background="var(--background-secondary)",t.style.border="1px solid var(--background-modifier-border)";let a=e.createEl("textarea",{cls:"stnd-modal-textarea",placeholder:"e.g., What did I learn about permaculture recently?"});a.style.width="100%",a.style.height="100px",a.style.marginBottom="15px",a.style.padding="10px",a.style.borderRadius="4px",a.style.border="1px solid var(--background-modifier-border)",a.style.background="var(--background-primary)",a.style.color="var(--text-normal)";let n=e.createEl("div",{cls:"stnd-modal-result-container"});n.style.display="none",n.style.marginTop="15px",n.style.padding="15px",n.style.borderRadius="4px",n.style.background="var(--background-secondary)",n.style.borderLeft="4px solid var(--interactive-accent)",n.style.maxHeight="300px",n.style.overflowY="auto";let o=n.createEl("div",{cls:"stnd-modal-result-text"});o.style.lineHeight="1.5",o.style.color="var(--text-normal)";let r=e.createEl("div",{cls:"stnd-modal-btns"});r.createEl("button",{text:"Close",cls:"stnd-modal-btn-cancel"}).addEventListener("click",()=>{this.close()});let i=r.createEl("button",{text:"Ask Hyphe",cls:"mod-cta"}),l=e.createEl("div",{cls:"stnd-ask-horizon"});l.setAttribute("aria-hidden","true"),l.innerHTML=`
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
    `,i.addEventListener("click",async()=>{let d=a.value.trim();if(!d){new Z.Notice("Please enter a question.");return}let f=this.plugin.settings.apiKey;if(!f){new Z.Notice("Please connect your standard.garden account in Settings first."),n.style.display="block",o.empty(),o.style.fontStyle="normal",o.setText("Please connect your standard.garden account in Settings first to query Hyphe.");return}i.disabled=!0,a.disabled=!0,i.text="Hyphe is searching...",n.style.display="block",o.empty(),o.setText("Hyphe is searching your published notes and generating an answer..."),o.style.fontStyle="italic";try{let h=await Z.requestUrl({url:`${this.plugin.settings.apiUrl}/ai/ask`,method:"POST",headers:{"Content-Type":"application/json","x-api-key":f},body:JSON.stringify({question:d}),throw:!1});if(h.status<200||h.status>=300){let u=h.text;try{let m=JSON.parse(h.text||"{}");m.error&&(u=m.error)}catch{}throw new Error(u||`Server error (${h.status})`)}let c=h.json;o.style.fontStyle="normal",c.answer?(o.empty(),await Z.MarkdownRenderer.renderMarkdown(c.answer,o,"",this),o.querySelectorAll("a").forEach(u=>{u.addEventListener("click",m=>{let g=u.getAttribute("href");if(g&&g.startsWith("/")){m.preventDefault();let y=g.replace(/^\/+|\/+$/g,""),v=this.plugin.garden?.bySlug?.get(y)||this.plugin.garden?.byTitleSlug?.get(y)||this.plugin.garden?.byBasenameSlug?.get(y);v?(this.app.workspace.getLeaf(!1).openFile(v),this.close()):this.plugin.settings.apiUsername&&window.open(`https://standard.garden${g}`,"_blank")}})})):o.setText("No response was returned by Hyphe.")}catch(h){o.style.fontStyle="normal",o.setText(`Error: ${h.message}`),console.error("Error during Hyphe query:",h)}finally{i.disabled=!1,a.disabled=!1,i.text="Ask Hyphe"}})}onClose(){this.contentEl.empty()}};it.exports={StndAskModal:ge}});var we=O((la,dt)=>{"use strict";var an=require("obsidian"),ye=class extends an.Modal{constructor(e,t,a){super(e),this.noteTitle=t,this.liveUrl=a}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),e.style.cssText="max-width: 480px; padding: 20px;";let t=e.createEl("h3",{text:"Share Note"});t.style.cssText="margin-bottom: 16px; font-size: var(--font-ui-medium); font-weight: var(--font-semibold);";let a=(i,l)=>{let d=e.createEl("div");d.style.cssText="margin-bottom: 16px;";let f=d.createEl("div");f.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;",f.createEl("span",{text:i,cls:"stnd-panel-meta"});let h=d.createEl("div");h.style.cssText="display: flex; gap: 8px; align-items: center;";let c=h.createEl("input",{cls:"stnd-panel-input",type:"text",value:l});c.readOnly=!0,c.style.cssText="flex: 1; width: 100%; text-align: left; font-size: var(--font-ui-smaller); font-family: var(--font-monospace);";let u=h.createEl("button",{text:"Copy",cls:"stnd-panel-btn stnd-panel-btn-secondary"});u.style.cssText="flex-shrink: 0; font-size: var(--font-ui-smaller);",u.addEventListener("click",()=>{navigator.clipboard.writeText(l),u.setText("Copied!"),setTimeout(()=>u.setText("Copy"),1500)})};a("Direct URL",this.liveUrl);let n=`[${this.noteTitle}](${this.liveUrl})`;a("Markdown Link",n);let o=`<iframe src="${this.liveUrl}" width="100%" height="600" frameborder="0"></iframe>`;a("Embed Iframe",o);let r=e.createEl("div");r.style.cssText="display: flex; justify-content: flex-end; margin-top: 12px;",r.createEl("button",{text:"Close",cls:"stnd-panel-btn"}).addEventListener("click",()=>this.close())}onClose(){this.contentEl.empty()}};dt.exports={StndShareModal:ye}});var J=O((da,ft)=>{"use strict";var V=require("obsidian"),{isPublishIntent:ct}=q(),re={unpublished:{icon:"cloud-off",color:"var(--text-faint)",label:"Non publi\xE9"},pending:{icon:"upload-cloud",color:"var(--color-orange)",label:"\xC0 publier (pas encore en ligne)"},public:{icon:"globe",color:"var(--color-green)",label:"Public"},unlisted:{icon:"eye-off",color:"var(--color-yellow)",label:"Non list\xE9"},private:{icon:"lock",color:"var(--color-blue)",label:"Priv\xE9"},outdated:{icon:"arrow-down-circle",color:"var(--color-orange)",label:"Mise \xE0 jour disponible en ligne"},changed:{icon:"upload-cloud",color:"var(--color-blue)",label:"Modifications locales non publi\xE9es"}},be=class{constructor(e,t){this.app=e,this.plugin=t,this.statusBarEl=null,this.ribbonEl=null,this.noteStatuses=new Map}async load(){let e=()=>this.refreshAll();this.plugin.registerEvent(this.app.workspace.on("active-leaf-change",e)),this.plugin.registerEvent(this.app.workspace.on("layout-change",e)),this.plugin.registerEvent(this.app.metadataCache.on("changed",t=>this.refreshForFile(t))),this.app.workspace.onLayoutReady(e)}async unload(){this.cleanupAll()}cleanupAll(){this.app.workspace.getLeavesOfType("markdown").forEach(e=>{let t=e.view&&e.view._stndPublishAction;t&&(t.remove(),delete e.view._stndPublishAction);let a=e.view&&e.view._stndBottomIndicator;a&&(a.remove(),delete e.view._stndBottomIndicator)}),this.statusBarEl&&(this.statusBarEl.remove(),this.statusBarEl=null),this.ribbonEl&&(this.ribbonEl.remove(),this.ribbonEl=null)}stateKey(e,t){let a=e||{};if(!ct(a))return"unpublished";if(!a["garden-url"]&&!a.url_public)return"pending";if(t&&this.noteStatuses){let r=this.noteStatuses.get(t);if(r&&(r.status==="outdated"||r.status==="changed"))return r.status}let o=String(a.visibility||"").toLowerCase().trim();return o==="private"?"private":o==="unlisted"?"unlisted":"public"}async triggerStatusCheck(e){if(!e||!!!this.plugin.settings.apiKey)return;let a=this.app.metadataCache.getFileCache(e)?.frontmatter||{},n=ct(a),o=a["garden-url"]!=null||a.url_public!=null;if(!n||!o){this.noteStatuses.delete(e.path);return}let r=this.noteStatuses.get(e.path),s=Date.now();if(r&&s-r.timestamp<1e4&&e.stat.mtime<=r.timestamp)return;this.noteStatuses.set(e.path,{status:r?r.status:this.stateKey(a,e.path),remoteContent:r?r.remoteContent:null,timestamp:s});let i=this.plugin.garden;if(i)try{let l=await i.checkNoteStatus(e);this.noteStatuses.set(e.path,{status:l.status,remoteContent:l.remoteContent,timestamp:Date.now()}),this.refreshAll()}catch(l){console.error("Standard : Erreur lors de la v\xE9rification asynchrone du statut :",l)}}refreshAll(){let e=!!this.plugin.settings.apiKey,t=this.plugin.settings.publishStatusLocation||"titlebar",a=this.plugin.settings.publishIndicatorStyle||"garden";if(!e&&a==="hidden"){this.cleanupAll();return}let n=this.app.workspace.getActiveFile();n&&e&&this.triggerStatusCheck(n),(t!=="titlebar"||!e||t==="hidden")&&this.app.workspace.getLeavesOfType("markdown").forEach(o=>{let r=o.view&&o.view._stndPublishAction;r&&(r.remove(),delete o.view._stndPublishAction)}),(t!=="statusbar"||!e||t==="hidden")&&this.statusBarEl&&(this.statusBarEl.remove(),this.statusBarEl=null),(t!=="ribbon"||!e||t==="hidden")&&this.ribbonEl&&(this.ribbonEl.remove(),this.ribbonEl=null),e&&t!=="hidden"&&(t==="titlebar"?this.app.workspace.getLeavesOfType("markdown").forEach(o=>this.refreshLeaf(o)):t==="statusbar"?this.refreshStatusBar():t==="ribbon"&&this.refreshRibbon()),this.app.workspace.getLeavesOfType("markdown").forEach(o=>{this.refreshBottomIndicator(o,a)})}refreshForFile(e){let t=this.app.workspace.getActiveFile();if(t&&t.path===e.path)this.refreshAll();else{let a=this.plugin.settings.publishIndicatorStyle||"garden";this.app.workspace.getLeavesOfType("markdown").forEach(n=>{n.view&&n.view.file&&n.view.file.path===e.path&&(this.plugin.settings.publishStatusLocation==="titlebar"&&this.refreshLeaf(n),this.refreshBottomIndicator(n,a))})}}refreshBottomIndicator(e,t,a=!1){let n=e?.view;if(!n||!n.containerEl||!n.file)return;let o=n._stndBottomIndicator;if(t==="hidden"){o&&(o.remove(),delete n._stndBottomIndicator);return}let r=this.app.metadataCache.getFileCache(n.file)?.frontmatter||null,s=this.stateKey(r,n.file.path);(!o||!o.isConnected)&&(o=document.createElement("div"),o.className="stnd-bottom-indicator",n.containerEl.appendChild(o),n._stndBottomIndicator=o),o.className=`stnd-bottom-indicator stnd-style-${t} stnd-state-${s}`;let i=re[s]?.label||s;o.setAttribute("title",`Garden: ${i}`),a&&t==="garden"&&(o.classList.remove("stnd-growing"),o.offsetWidth,o.classList.add("stnd-growing"))}refreshLeaf(e){let t=e.view;if(!t||typeof t.addAction!="function"||!t.file)return;let a=this.app.metadataCache.getFileCache(t.file)?.frontmatter||null,n=this.stateKey(a,t.file.path),o=re[n],r=t._stndPublishAction;(!r||!r.isConnected)&&(r=t.addAction(o.icon,"Garden Status",s=>this.onClick(t,s)),r.addClass("stnd-publish-status"),t._stndPublishAction=r),V.setIcon(r,o.icon),r.style.color=o.color,r.setAttribute("aria-label",`Garden Status \u2014 ${o.label}`),r.dataset.stndState=n}refreshStatusBar(){let e=this.app.workspace.getActiveFile();if(!e){this.statusBarEl&&(this.statusBarEl.style.display="none");return}let t=this.app.metadataCache.getFileCache(e)?.frontmatter||null,a=this.stateKey(t,e.path),n=re[a];this.statusBarEl||(this.statusBarEl=this.plugin.addStatusBarItem(),this.statusBarEl.addClass("stnd-publish-status-statusbar"),this.statusBarEl.style.cursor="pointer",this.statusBarEl.addEventListener("click",r=>{let s=this.app.workspace.getActiveViewOfType(V.MarkdownView);s&&this.onClick(s,r)})),this.statusBarEl.style.display="",this.statusBarEl.empty();let o=this.statusBarEl.createSpan();V.setIcon(o,n.icon),o.style.color=n.color,o.style.marginRight="6px",o.style.display="inline-flex",o.style.alignItems="center",this.statusBarEl.createSpan({text:`Garden: ${n.label}`}),this.statusBarEl.setAttribute("aria-label",`Garden Status \u2014 ${n.label}`)}refreshRibbon(){let e=this.app.workspace.getActiveFile();if(!e){this.ribbonEl&&(this.ribbonEl.style.display="none");return}let t=this.app.metadataCache.getFileCache(e)?.frontmatter||null,a=this.stateKey(t,e.path),n=re[a];this.ribbonEl||(this.ribbonEl=this.plugin.addRibbonIcon(n.icon,"Garden Status",o=>{let r=this.app.workspace.getActiveViewOfType(V.MarkdownView);r&&this.onClick(r,o)}),this.ribbonEl.addClass("stnd-publish-status-ribbon")),this.ribbonEl.style.display="",V.setIcon(this.ribbonEl,n.icon),this.ribbonEl.style.color=n.color,this.ribbonEl.setAttribute("aria-label",`Garden Status \u2014 ${n.label}`)}onClick(e,t){let a=e.file;if(!a)return;let n=this.plugin.garden;if(!n)return;let o=this.app.metadataCache.getFileCache(a)?.frontmatter||null,r=this.stateKey(o,a.path),s=new V.Menu,i=async()=>{if(!n.checkApiKeyAndShowModal())return;let l=await n.publishWithCheck(a);if(l!==null){if(new V.Notice(l?`Standard : "${a.basename}" publi\xE9.`:`Standard : \xC9chec de la publication de "${a.basename}".`),l){let d=e.leaf||{view:e},f=this.plugin.settings.publishIndicatorStyle||"garden";this.refreshBottomIndicator(d,f,!0)}l&&n.plugin.settings.openAfterPublish&&n.viewLiveVersion(a)}this.refreshAll()};if(r==="unpublished"||r==="pending")s.addItem(l=>l.setTitle("Publier dans le jardin").setIcon("upload-cloud").onClick(()=>i()));else if(r==="outdated"){let d=this.noteStatuses.get(a.path)?.remoteContent||"";s.addItem(f=>f.setTitle("T\xE9l\xE9charger la mise \xE0 jour (\xE9craser le fichier local)").setIcon("arrow-down-circle").onClick(async()=>{d?(await this.app.vault.modify(a,d),new V.Notice("Standard : Fichier local mis \xE0 jour avec la version en ligne."),this.noteStatuses.set(a.path,{status:"synced",timestamp:Date.now()}),this.refreshAll()):new V.Notice("Standard : Contenu distant introuvable.")})),s.addItem(f=>f.setTitle("Forcer la publication locale").setIcon("refresh-cw").onClick(()=>i())),s.addItem(f=>f.setTitle("Voir en ligne").setIcon("external-link").onClick(()=>n.viewLiveVersion(a))),s.addSeparator(),s.addItem(f=>f.setTitle("Retirer du jardin (d\xE9-publier)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await n.deleteOnlineVersion(a),this.refreshAll()}))}else r==="changed"?(s.addItem(l=>l.setTitle("Publier les modifications locales").setIcon("upload-cloud").onClick(()=>i())),s.addItem(l=>l.setTitle("Voir en ligne").setIcon("external-link").onClick(()=>n.viewLiveVersion(a))),s.addSeparator(),s.addItem(l=>l.setTitle("Retirer du jardin (d\xE9-publier)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await n.deleteOnlineVersion(a),this.refreshAll()}))):(s.addItem(l=>l.setTitle("Voir en ligne").setIcon("external-link").onClick(()=>n.viewLiveVersion(a))),s.addItem(l=>l.setTitle("Re-publier").setIcon("refresh-cw").onClick(()=>i())),s.addSeparator(),s.addItem(l=>l.setTitle("Retirer du jardin (d\xE9-publier)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await n.deleteOnlineVersion(a),this.refreshAll()})));s.addSeparator(),s.addItem(l=>l.setTitle("Synchroniser toutes les notes").setIcon("folder-sync").onClick(async()=>{await n.syncAllPublished();let d=this.app.workspace.getActiveViewOfType(V.MarkdownView);if(d){let f=d.leaf||{view:d},h=this.plugin.settings.publishIndicatorStyle||"garden";this.refreshBottomIndicator(f,h,!0)}})),s.showAtMouseEvent(t)}};ft.exports={PublishStatusFeature:be}});var ut=O((ca,ht)=>{"use strict";var N=require("obsidian"),{KNOWN_TOKENS:on,isPublishIntent:z,isImageFile:se,isPdfFile:pt,isAttachmentFile:ve,getMimeType:rn}=q(),{StndConfirmModal:ke}=me(),{StndAskModal:sn}=lt(),{StndShareModal:ln}=we();function I(p){return String(p).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[æ]/gi,"ae").replace(/[œ]/gi,"oe").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}var Y=class{constructor(e,t){this.app=e,this.files=t,this.byNanoId=new Map,this.bySlug=new Map,this.byTitleSlug=new Map,this.byBasenameSlug=new Map,this.byGardenUrl=new Map;for(let a of t){let n=e.metadataCache.getFileCache(a)?.frontmatter||{};if(n["garden-short"]){let s=String(n["garden-short"]).match(/stnd\.gd\/([a-zA-Z0-9_-]+)/);s&&this.byNanoId.set(s[1],a)}let o=n.permalink??n.slug;if(o!=null){let s=String(o).replace(/^\/+|\/+$/g,""),i=s===""?"~root":s;this.bySlug.set(i,a)}if(n.title){let s=I(n.title);s&&this.byTitleSlug.set(s,a)}let r=I(a.basename);if(r&&this.byBasenameSlug.set(r,a),n["garden-url"]){let s=String(n["garden-url"]).toLowerCase().trim().replace(/\/$/,"");this.byGardenUrl.set(s,a)}}}findMatchForRemote(e){if(!e)return null;if(e.nano_id&&this.byNanoId.has(e.nano_id))return this.byNanoId.get(e.nano_id);if(e.slug&&this.bySlug.has(e.slug))return this.bySlug.get(e.slug);if(e.slug&&this.byTitleSlug.has(e.slug))return this.byTitleSlug.get(e.slug);if(e.slug&&this.byBasenameSlug.has(e.slug))return this.byBasenameSlug.get(e.slug);if(e.title){let t=I(e.title);if(t){if(this.bySlug.has(t))return this.bySlug.get(t);if(this.byTitleSlug.has(t))return this.byTitleSlug.get(t);if(this.byBasenameSlug.has(t))return this.byBasenameSlug.get(t)}}return null}},xe=class extends N.Modal{constructor(e,t,a){super(e),this.total=t,this.breakdown=a||{},this.cancelled=!1,this.finished=!1,this.syncedNotes=[],this.pulledNotes=[],this.createdNotes=[],this.unpublishedNotes=[],this.skippedNotes=[],this.failedNotes=[],this.logs=[],this.startTime=Date.now()}onOpen(){let{contentEl:e,titleEl:t}=this;e.addClass("stnd-modal"),t.setText("Standard \u2014 Synchronisation du jardin"),this.statusEl=e.createEl("p",{text:`Pr\xE9paration... 0 / ${this.total}`,cls:"stnd-modal-message"});let a=e.createDiv();a.style.cssText="height:8px;border-radius:4px;background:var(--background-modifier-border);overflow:hidden;margin:0.5em 0;",this.barEl=a.createDiv(),this.barEl.style.cssText="height:100%;width:0%;background:var(--interactive-accent);transition:width .15s ease;";let n=this.breakdown,o=e.createDiv();o.style.cssText="display:flex;flex-wrap:wrap;gap:6px;margin:0.5em 0 0.75em;";let r=(l,d,f)=>{if(!d)return;let h=o.createEl("span");h.style.cssText=`display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:12px;font-size:var(--font-ui-smaller);background:var(--background-secondary);color:${f};border:1px solid currentColor;opacity:.85;`,h.setText(`${l} ${d}`)};r("\u2191 \xC0 publier",n.toPublish,"var(--color-green)"),r("\u2212 \xC0 d\xE9publier",n.toUnpublish,"var(--color-orange)"),r("\u2193 \xC0 t\xE9l\xE9charger",n.toCreate,"var(--color-blue)"),this.currentEl=e.createEl("div",{cls:"stnd-modal-detail",text:"V\xE9rification des notes existantes..."}),this.currentEl.style.cssText="opacity:.7;font-size:var(--font-ui-smaller);min-height:1.4em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;";let s=e.createEl("div",{text:"Journal de synchronisation :",cls:"stnd-modal-detail"});s.style.cssText="margin-top: 0.75em; margin-bottom: 0.25em; font-weight: 600; font-size: var(--font-ui-smaller);",this.logContainer=e.createDiv(),this.logContainer.style.cssText="height: 160px; overflow-y: auto; background: var(--background-primary-alt); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 6px 10px; font-family: var(--font-monospace); font-size: 11px; line-height: 1.5;",this.reconciliationEl=e.createEl("div"),this.reconciliationEl.style.cssText="margin-top: 0.75em; max-height: 180px; overflow-y: auto; font-size: var(--font-ui-smaller);";let i=e.createEl("div",{cls:"stnd-modal-btns"});this.copyBtn=i.createEl("button",{text:"Copier le log",cls:"stnd-modal-btn-cancel"}),this.copyBtn.addEventListener("click",()=>{if(this.logs.length===0){new N.Notice("Le journal est vide pour le moment.");return}let l=this.logs.map(d=>`[${d.time}] [${d.tag}] ${d.name}${d.detail?" \u2014 "+d.detail:""}`).join(`
`);navigator.clipboard.writeText(l),new N.Notice(`Journal copi\xE9 (${this.logs.length} entr\xE9es) !`)}),this.actionBtn=i.createEl("button",{text:"Annuler",cls:"mod-warning"}),this.actionBtn.addEventListener("click",()=>{if(this.finished)return this.close();this.cancelled=!0,this.actionBtn.disabled=!0,this.actionBtn.setText("Annulation...")})}update({index:e,current:t,synced:a,pulled:n,created:o,unpublished:r,skipped:s,failed:i}){if(!this.barEl)return;let l=this.total?Math.round(e/this.total*100):0;this.barEl.style.width=l+"%";let d=a+n+o+r;this.statusEl.setText(`${e} / ${this.total} (${l}%) \u2014 ${d} action(s), ${s} identique(s)`+(i?`, ${i} \xE9chou\xE9(s)`:"")),this.currentEl.setText(t?`Traitement : ${t}`:"")}recordResult(e,t,a=""){let n=new Date().toLocaleTimeString(),o="INFO",r="var(--text-muted)",s="var(--text-normal)";if(e==="synced"?(this.syncedNotes.push(t),o="\u2191 PUBLI\xC9",r="var(--color-green)"):e==="pulled"?(this.pulledNotes.push(t),o="\u2193 T\xC9L\xC9CHARG\xC9",r="var(--color-blue)"):e==="created"?(this.createdNotes.push(t),o="+ CR\xC9\xC9",r="var(--color-blue)"):e==="unpublished"?(this.unpublishedNotes.push(t),o="\u2212 D\xC9PUBLI\xC9",r="var(--color-orange)"):e==="skipped"?(this.skippedNotes.push(t),o="\u25CB IDENTIQUE",r="var(--text-faint)",s="var(--text-muted)"):e==="failed"&&(this.failedNotes.push({name:t,detail:a}),o="\u2717 \xC9CHEC",r="var(--color-red)",s="var(--color-red)"),this.logs.push({time:n,tag:o,type:e,name:t,detail:a}),this.logContainer){let i=this.logContainer.createDiv();i.style.cssText="display: flex; gap: 6px; align-items: baseline; word-break: break-all; margin-bottom: 2px;";let l=i.createSpan();l.style.cssText="color: var(--text-faint); font-size: 10px; flex-shrink: 0;",l.setText(n);let d=i.createSpan();d.style.cssText=`color: ${r}; font-weight: 600; flex-shrink: 0; font-size: 10px;`,d.setText(o);let f=i.createSpan();f.style.cssText=`color: ${s}; flex: 1;`,f.setText(t+(a?` \u2014 ${a}`:"")),this.logContainer.scrollTop=this.logContainer.scrollHeight}}done({synced:e,pulled:t,created:a,unpublished:n,skipped:o,failed:r,notesOnline:s,stats:i}){if(this.finished=!0,!this.barEl)return;let l=Math.round((Date.now()-this.startTime)/1e3);this.barEl.style.width="100%";let d=this.cancelled?"Annul\xE9e":"Termin\xE9e";this.statusEl.setText(`Synchronisation ${d.toLowerCase()} \xB7 ${l}s`),this.currentEl.setText(""),this.reconciliationEl.empty();let f=this.reconciliationEl.createEl("h4",{text:"Rapport de r\xE9conciliation :",cls:"stnd-reconciliation-title"});f.style.cssText="margin: 0 0 0.5em 0;";let h=s??e+o,c=i?.imagesReused||0,u=i?.imagesUploaded||0,m=i?.imagesFailed||0,g=c+u,y=r||0,v=y+m,k=i&&i.imagesChecked>0?` + ${g} image(s) en ligne${c>0?` (${c} d\xE9dupliqu\xE9e(s))`:""}`:"",x=this.reconciliationEl.createDiv({cls:"stnd-reconciliation-summary"});if(x.style.cssText="padding: 10px 14px; border-radius: 8px; background: var(--background-secondary-alt); border: 1px solid var(--background-modifier-border); margin-bottom: 12px; font-weight: 500; font-size: var(--font-ui-small);",v===0)x.setText(`\u2713 ${h} note(s)${k}, 0 manquante.`);else{let E=[];y>0&&E.push(`${y} note(s) manquante(s)`),m>0&&E.push(`${m} image(s) non t\xE9l\xE9vers\xE9e(s)`),x.setText(`\u26A0 ${h} note(s)${k}, ${E.join(", ")}.`)}let L=this.reconciliationEl.createEl("ul");L.style.cssText="list-style-type: none; padding-left: 0; margin: 0;";let D=(E,b,w,T)=>{if(E.length===0)return;let M=L.createEl("li");M.style.cssText=`${w} font-weight: bold; margin-bottom: 0.25em;`,M.setText(`${T} ${b} (${E.length}) :`);let F=L.createEl("ul");F.style.cssText="padding-left: 1.5em; margin-bottom: 0.5em; list-style-type: circle;";for(let A of E){let C=typeof A=="object"?`${A.name}${A.detail?" \u2014 "+A.detail:""}`:A;F.createEl("li",{text:C})}};D(this.syncedNotes,"Envoy\xE9e(s) / Mise(s) \xE0 jour \xE0 distance","color: var(--text-success);","\u2191"),D(this.pulledNotes,"T\xE9l\xE9charg\xE9e(s) / Mise(s) \xE0 jour localement","color: var(--text-success);","\u2193"),D(this.createdNotes,"Cr\xE9\xE9e(s) localement","color: var(--text-success);","+"),D(this.unpublishedNotes,"D\xE9-publi\xE9e(s) localement (pass\xE9e en brouillon)","color: var(--text-warning);","-"),D(this.skippedNotes,"D\xE9j\xE0 \xE0 jour (identiques)","color: var(--text-muted);","\u25CB"),D(this.failedNotes,"\xC9chec(s) de synchronisation","color: var(--text-error);","\u2717"),i?.failedImages?.length>0&&D(i.failedImages,"Image(s) non t\xE9l\xE9vers\xE9e(s)","color: var(--text-error);","\u2717"),this.actionBtn.disabled=!1,this.actionBtn.setText("Fermer"),this.actionBtn.removeClass("mod-warning"),this.actionBtn.addClass("mod-cta")}onClose(){this.finished||(this.cancelled=!0),this.contentEl.empty()}},Te=class extends N.Modal{constructor(e,t,a){super(e),this.garden=t,this.items=a,this.cancelled=!1,this.inProgress=!1}onOpen(){let{contentEl:e,titleEl:t}=this;e.addClass("stnd-modal"),t.setText("Standard \u2014 Nettoyage des notes d\xE9publi\xE9es"),e.createEl("p",{text:`Les ${this.items.length} note(s) suivante(s) sont encore en ligne sur votre jardin ou poss\xE8dent des m\xE9tadonn\xE9es de publication obsol\xE8tes, mais ne sont plus publiques localement :`,cls:"stnd-modal-detail"});let a=e.createDiv();a.style.cssText="max-height: 220px; overflow-y: auto; border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px 12px; margin: 12px 0; background: var(--background-primary-alt);";let n=a.createEl("ul");n.style.cssText="list-style-type: none; padding: 0; margin: 0;";for(let s of this.items){let i=n.createEl("li");i.style.cssText="display: flex; justify-content: space-between; align-items: center; padding: 4px 0; border-bottom: 1px solid var(--background-modifier-border-focus); font-size: var(--font-ui-smaller);";let l=i.createEl("span",{text:s.title});l.style.cssText="font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 68%;";let d="Brouillon local";s.reason==="orphan"?d="Orpheline en ligne":s.reason==="stale_local"&&(d="Lien local r\xE9siduel");let f=i.createEl("span",{text:d});f.style.cssText="color: var(--text-warning); font-size: 11px; padding: 2px 6px; border-radius: 4px; background: var(--background-modifier-hover); flex-shrink: 0;"}this.progressContainer=e.createDiv(),this.progressContainer.style.display="none",this.progressContainer.style.margin="12px 0";let o=this.progressContainer.createDiv();o.style.cssText="height: 8px; border-radius: 4px; background: var(--background-modifier-border); overflow: hidden;",this.barEl=o.createDiv(),this.barEl.style.cssText="height: 100%; width: 0%; background: var(--interactive-accent); transition: width .15s ease;",this.progressText=this.progressContainer.createEl("div",{cls:"stnd-modal-detail",text:"Traitement..."}),this.progressText.style.cssText="margin-top: 6px; font-size: var(--font-ui-smaller);";let r=e.createEl("div",{cls:"stnd-modal-btns"});this.cancelBtn=r.createEl("button",{text:"Annuler",cls:"stnd-modal-btn-cancel"}),this.cancelBtn.addEventListener("click",()=>{this.close()}),this.confirmBtn=r.createEl("button",{text:`Supprimer du jardin (${this.items.length})`,cls:"mod-warning"}),this.confirmBtn.addEventListener("click",async()=>{await this.runPrune()})}async runPrune(){this.inProgress=!0,this.confirmBtn.disabled=!0,this.cancelBtn.disabled=!0,this.confirmBtn.setText("Nettoyage en cours..."),this.progressContainer.style.display="block";let e=0,t=0,a=this.items.length;for(let n=0;n<a&&!this.cancelled;n++){let o=this.items[n],r=Math.round((n+1)/a*100);this.barEl.style.width=r+"%",this.progressText.setText(`${n+1} / ${a} : ${o.title}`);try{await this.garden.unpublishNote(o.file,o.slug)?e++:t++}catch{t++}}this.progressText.setText(`Termin\xE9 : ${e} note(s) nettoy\xE9e(s)${t>0?`, ${t} en \xE9chec`:""}.`),this.confirmBtn.style.display="none",this.cancelBtn.disabled=!1,this.cancelBtn.setText("Fermer"),this.cancelBtn.removeClass("stnd-modal-btn-cancel"),this.cancelBtn.addClass("mod-cta"),new N.Notice(`Standard : ${e} note(s) d\xE9publi\xE9e(s) du jardin.`)}onClose(){this.cancelled=!0,this.contentEl.empty()}};async function W(p,e={},t=5){let a=0,n=2e3;for(;;){a++;try{let o=await N.requestUrl({url:p,method:e.method||"GET",headers:e.headers||{},body:e.body,throw:!1}),r=()=>{try{return JSON.parse(o.text||"{}")}catch{return null}};if(o.status===429){if(a>=t)return{...o,ok:!1,json:async()=>r()};let s=o.headers&&(o.headers["retry-after"]||o.headers["Retry-After"]),i=0;if(s){let l=parseInt(s,10);i=isNaN(l)?n:l*1e3}else i=n+Math.random()*1e3,n*=2;console.warn(`Standard: Rate limited (429). Retrying in ${i}ms (attempt ${a}/${t})...`),await new Promise(l=>setTimeout(l,i));continue}return{...o,ok:o.status>=200&&o.status<300,json:async()=>r()}}catch(o){if(a>=t)throw o;let r=n+Math.random()*1e3;n*=2,console.warn(`Standard: Network error. Retrying in ${r}ms (attempt ${a}/${t})...`,o),await new Promise(s=>setTimeout(s,r))}}}async function G(p,e=null){if(p<=0)return;let t=Date.now();for(;Date.now()-t<p&&!(e&&e.cancelled);){let a=p-(Date.now()-t);await new Promise(n=>setTimeout(n,Math.min(50,a)))}}var Se=class{constructor(e,t){this.app=e,this.plugin=t,this.syncIntervalTimer=null,this.attachmentCache=new Map,this.lastAttachmentUploadTime=0,this.lastPublishTime=0}isPathExcluded(e){let t=this.plugin.settings.excludedFolders;if(!t)return!1;let a=Array.isArray(t)?t:String(t).split(",").map(o=>o.trim().replace(/^\/+|\/+$/g,"")).filter(Boolean);if(a.length===0)return!1;let n=e.replace(/^\/+/,"");return a.some(o=>n.startsWith(o+"/")||n===o)}getPublishableFiles(){return this.app.vault.getMarkdownFiles().filter(t=>!this.isPathExcluded(t.path))}async load(){this.plugin.settings.autoSync&&this.plugin.settings.apiKey&&setTimeout(()=>{this.pollRemoteChanges()},5e3),this.setupAutoSyncInterval()}unload(){this.syncIntervalTimer&&(clearInterval(this.syncIntervalTimer),this.syncIntervalTimer=null)}setupAutoSyncInterval(){if(this.syncIntervalTimer&&(clearInterval(this.syncIntervalTimer),this.syncIntervalTimer=null),!!this.plugin.settings.autoSync&&this.plugin.settings.apiKey){let t=window.setInterval(()=>{this.pollRemoteChanges()},3e5);this.syncIntervalTimer=t,this.plugin.registerInterval(t)}}async pollRemoteChanges(){if(this.plugin.settings.apiKey)try{let e=this.app.workspace.getActiveFile(),{PublishStatusFeature:t}=J(),a=this.plugin.features.find(n=>n instanceof t);a&&e&&await a.triggerStatusCheck(e)}catch{}}checkApiKeyAndShowModal(){return this.plugin.settings.apiKey?!0:(new ke(this.app,`No API key configured.
To publish or edit a post, you must link your account.`,"Connect",()=>this.startConnect()).open(),!1)}async verifyApiKey(e,t){if(!this.plugin.settings.apiKey){this.plugin.settings.apiUsername="",await this.plugin.saveSettings(),this.plugin.updateRibbonIconsVisibility(),t&&t();return}try{let a=await N.requestUrl({url:`${this.plugin.settings.apiUrl}/me`,headers:{"x-api-key":this.plugin.settings.apiKey},throw:!1});if(a.status>=200&&a.status<300){let n=a.json;this.plugin.settings.apiUsername=n.username||"",await this.plugin.saveSettings(),this.plugin.updateRibbonIconsVisibility(),e&&e.setText(`\u2713 @${n.username}`)}else this.plugin.settings.apiUsername="",await this.plugin.saveSettings(),this.plugin.updateRibbonIconsVisibility(),e&&e.setText("\u2717 Invalid key")}catch{e&&e.setText("\u2717 Could not connect")}t&&t()}startConnect(){let e=(this.plugin.settings.apiUrl||"https://standard.garden/api").replace(/\/api\/?$/,""),t=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2);this._connectState=t;let a=`${e}/connect/obsidian?state=${encodeURIComponent(t)}`;this._openExternal(a),new N.Notice("Standard : connexion ouverte dans le navigateur\u2026")}_openExternal(e){if(N.Platform.isDesktop)try{require("electron").shell.openExternal(e);return}catch{}window.open(e,"_blank")}async handleConnectCallback(e){let t=e&&e.key,a=e&&e.username||"",n=e&&e.state||"";if(!t){new N.Notice("Garden: connection cancelled (missing key).");return}if(this._connectState&&n!==this._connectState){new N.Notice("Garden: connection skipped (invalid token).");return}this._connectState=null,this.plugin.settings.apiKey=t,this.plugin.settings.apiUsername=a,await this.plugin.saveSettings(),await this.verifyApiKey(null,()=>{this.plugin.settingTab&&this.plugin.settingTab.display()});let o=this.plugin.settings.apiUsername||a;new N.Notice(o?`Garden: connected as @${o} \u2713`:"Garden: connected \u2713")}async syncAllPublished(){if(!this.checkApiKeyAndShowModal())return;let e=this.getPublishableFiles(),t=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey;try{let a=await W(`${this.plugin.settings.apiUrl}/publish?includeContent=true`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}}),n=[];a.ok?n=(await a.json()).notes||[]:console.warn("Standard : Impossible de r\xE9cup\xE9rer la liste distante pour la r\xE9conciliation.");let o=new Map(n.map(b=>[b.slug,b])),r=new Map(n.filter(b=>b.nano_id).map(b=>[b.nano_id,b])),s=new Map;for(let b of n)if(b.title){let w=I(b.title);w&&!s.has(w)&&s.set(w,b)}let i=new Y(this.app,e),l=(b,w)=>{if(w["garden-short"]){let F=String(w["garden-short"]).match(/stnd\.gd\/([a-zA-Z0-9_-]+)/);if(F&&r.has(F[1]))return r.get(F[1])}let T=w.permalink??w.slug;if(T!=null){let F=String(T).replace(/^\/+|\/+$/g,""),A=F===""?"~root":F;if(o.has(A))return o.get(A);if(s.has(A))return s.get(A)}let M=I(b.basename);if(o.has(M))return o.get(M);if(s.has(M))return s.get(M);if(w.title){let F=I(w.title);if(o.has(F))return o.get(F);if(s.has(F))return s.get(F)}return null},d=new Set,f=[];for(let b of e){let w=this.app.metadataCache.getFileCache(b)?.frontmatter||{},T=w.permalink??w.slug,M=I(b.basename),F=T!=null?String(T).replace(/^\/+|\/+$/g,""):M,A=F===""?"~root":F,C=z(w),R=w["garden-url"]!=null,P=l(b,w);P&&d.add(P),C?f.push({type:"local_published",file:b,remoteNote:P,slug:A,name:b.basename}):P?f.push({type:"local_draft_remote_exists",file:b,remoteNote:P,slug:A,name:b.basename}):R&&this.plugin.settings.syncDirection==="2way"&&f.push({type:"local_published",file:b,remoteNote:P,slug:A,name:b.basename})}if(this.plugin.settings.syncDirection==="2way")for(let b of n)!d.has(b)&&!i.findMatchForRemote(b)&&f.push({type:"remote_only",file:null,remoteNote:b,slug:b.slug,name:b.title||b.slug});if(f.length===0){new N.Notice("Standard : Aucune note \xE0 synchroniser.");return}let h={toPublish:f.filter(b=>b.type==="local_published").length,toUnpublish:f.filter(b=>b.type==="local_draft_remote_exists").length,toCreate:f.filter(b=>b.type==="remote_only").length},c=new xe(this.app,f.length,h);c.open();let u=0,m=0,g=0,y=0,v=0,k=0,x=0,L={imagesChecked:0,imagesReused:0,imagesUploaded:0,imagesFailed:0,failedImages:[]},D=new Set;for(let b of f){if(c.cancelled||(c.update({index:x,current:b.name,synced:u,pulled:m,created:g,unpublished:y,skipped:v,failed:k}),c.cancelled))break;try{if(b.type==="local_published"){let{file:w,remoteNote:T}=b,F=(this.app.metadataCache.getFileCache(w)?.frontmatter||{})["garden-url"]!=null;if(T){let A=await this.app.vault.read(w),C=await this.uploadContentImages(A,w,!0,L,c,D),R=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(C)),U=Array.from(new Uint8Array(R)).map(B=>B.toString(16).padStart(2,"0")).join("");if(T.hash===U)v++,c.recordResult("skipped",w.basename);else if(this.plugin.settings.syncDirection==="1way"){let B=Date.now()-this.lastPublishTime;if(B<1100&&await G(1100-B,c),c.cancelled)break;let pe=await this.publishNote(w,!0,C);this.lastPublishTime=Date.now(),pe?(u++,c.recordResult("synced",w.basename)):(k++,c.recordResult("failed",w.basename,this.lastError||"Erreur de publication"))}else{let B=w.stat?.mtime||0;if((new Date(T.updated_at).getTime()||0)>B+5e3)await this.app.vault.modify(w,T.content),m++,c.recordResult("pulled",w.basename);else{let ae=Date.now()-this.lastPublishTime;if(ae<1100&&await G(1100-ae,c),c.cancelled)break;let qt=await this.publishNote(w,!0,C);this.lastPublishTime=Date.now(),qt?(u++,c.recordResult("synced",w.basename)):(k++,c.recordResult("failed",w.basename,this.lastError||"Erreur de publication"))}}}else if(F)if(this.plugin.settings.syncDirection==="1way"){let A=await this.app.vault.read(w),C=await this.uploadContentImages(A,w,!0,L,c,D),R=Date.now()-this.lastPublishTime;if(R<1100&&await G(1100-R,c),c.cancelled)break;let P=await this.publishNote(w,!0,C);this.lastPublishTime=Date.now(),P?(u++,c.recordResult("synced",w.basename)):(k++,c.recordResult("failed",w.basename,this.lastError||"Erreur de publication"))}else await this.app.fileManager.processFrontMatter(w,A=>{A[t]=!1,delete A["garden-url"],delete A["garden-short"]}),y++,c.recordResult("unpublished",w.basename);else{let A=await this.app.vault.read(w),C=await this.uploadContentImages(A,w,!0,L,c,D),R=Date.now()-this.lastPublishTime;if(R<1100&&await G(1100-R,c),c.cancelled)break;let P=await this.publishNote(w,!0,C);this.lastPublishTime=Date.now(),P?(u++,c.recordResult("synced",w.basename)):(k++,c.recordResult("failed",w.basename,this.lastError||"Erreur de publication"))}}else if(b.type==="local_draft_remote_exists"){let{file:w,remoteNote:T}=b,M=w.stat?.mtime||0,F=new Date(T.updated_at).getTime()||0;if(this.plugin.settings.syncDirection==="2way"&&F>M+5e3)await this.app.vault.modify(w,T.content),await this.app.fileManager.processFrontMatter(w,C=>{z(C)||(C.status="public"),C["garden-url"]=this.getLiveUrl(w),T.nano_id&&(C["garden-short"]=`https://stnd.gd/${T.nano_id}`),C.created!=null&&T.created_at&&(C.created=T.created_at),C.modified!=null&&T.updated_at&&(C.modified=T.updated_at)}),m++,c.recordResult("pulled",w.basename);else{let C=b.remoteNote?.slug||b.slug,R=Date.now()-this.lastPublishTime;if(R<1100&&await G(1100-R,c),c.cancelled)break;let P=await this.unpublishNote(w,C);this.lastPublishTime=Date.now(),P?(y++,c.recordResult("unpublished",w.basename)):(k++,c.recordResult("failed",w.basename,this.lastError||"Erreur de d\xE9publication"))}}else if(b.type==="remote_only"){let{remoteNote:w,slug:T}=b,M=(w.title||T).replace(/[\\\/:\*\?"<>\|]/g,"-").trim();M||(M="Sans titre");let F=`${M}.md`,A=1;for(;this.app.vault.getAbstractFileByPath(F);)F=`${M} (${A}).md`,A++;let C=await this.app.vault.create(F,w.content);await this.app.fileManager.processFrontMatter(C,R=>{z(R)||(R.status="public"),R["garden-url"]=this.getLiveUrl(C),R.permalink=w.slug,w.nano_id&&(R["garden-short"]=`https://stnd.gd/${w.nano_id}`),R.created!=null&&w.created_at&&(R.created=w.created_at),R.modified!=null&&w.updated_at&&(R.modified=w.updated_at)}),g++,c.recordResult("created",C.basename)}}catch(w){console.error(`Standard : Erreur lors de la synchronisation de ${b.name}:`,w),k++,c.recordResult("failed",b.name)}x++,c.update({index:x,current:b.name,synced:u,pulled:m,created:g,unpublished:y,skipped:v,failed:k})}let E=n.length+u-y;c.done({synced:u,pulled:m,created:g,unpublished:y,skipped:v,failed:k,notesOnline:E,stats:L}),new N.Notice(`Garden : Synchronisation ${c.cancelled?"annul\xE9e":"termin\xE9e"}. ${u+m+g+y} action(s), ${v} identique(s), ${k} en \xE9chec.`)}catch(a){console.error("Standard : Erreur globale lors de la synchronisation en lot :",a),new N.Notice("Standard : Erreur lors de la synchronisation.")}}async downloadNewOnlineNotes(){if(!this.checkApiKeyAndShowModal())return;let e=this.getPublishableFiles(),t=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey;try{let a=await W(`${this.plugin.settings.apiUrl}/publish?includeContent=true`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}}),n=[];if(a.ok)n=(await a.json()).notes||[];else{new N.Notice("Garden: Failed to fetch online notes list.");return}let o=new Y(this.app,e),r=[],s=[];for(let l of n){let d=o.findMatchForRemote(l);d?s.push({remoteNote:l,file:d}):r.push(l)}for(let{remoteNote:l,file:d}of s)await this.app.fileManager.processFrontMatter(d,f=>{z(f)||(f.status="public"),f["garden-url"]||(f["garden-url"]=this.getLiveUrl(d)),!f.permalink&&l.slug&&l.slug!==I(d.basename)&&(f.permalink=l.slug),l.nano_id&&!f["garden-short"]&&(f["garden-short"]=`https://stnd.gd/${l.nano_id}`),f.created!=null&&l.created_at&&(f.created=l.created_at),f.modified!=null&&l.updated_at&&(f.modified=l.updated_at)});if(r.length===0){new N.Notice(s.length>0?`Garden : Toutes les ${s.length} notes sont d\xE9j\xE0 dans le coffre (m\xE9tadonn\xE9es synchronis\xE9es).`:"Garden : Aucune nouvelle note en ligne \xE0 t\xE9l\xE9charger.");return}let i=0;for(let l of r){let d=(l.title||l.slug).replace(/[\\\/:\*\?"<>\|]/g,"-").trim();d||(d="Untitled");let f=`${d}.md`,h=1;for(;this.app.vault.getAbstractFileByPath(f);)f=`${d} (${h}).md`,h++;let c=await this.app.vault.create(f,l.content);await this.app.fileManager.processFrontMatter(c,u=>{z(u)||(u.status="public"),u["garden-url"]=this.getLiveUrl(c),u.permalink=l.slug,l.nano_id&&(u["garden-short"]=`https://stnd.gd/${l.nano_id}`),u.created!=null&&l.created_at&&(u.created=l.created_at),u.modified!=null&&l.updated_at&&(u.modified=l.updated_at)}),i++}new N.Notice(`Garden: Downloaded ${i} new note(s) successfully!`)}catch(a){console.error("Garden: Error during downloading online notes:",a),new N.Notice("Garden: Failed to download online notes.")}}async publishCurrentNote(){if(!this.checkApiKeyAndShowModal())return;let e=this.app.workspace.getActiveFile();if(!e){new N.Notice("Standard: No active note to publish.");return}if(this.isPathExcluded(e.path)){new N.Notice(`Standard : Cette note se trouve dans un dossier exclu de la publication (${e.path}).`);return}let t=await this.publishWithCheck(e);t===!0?(new N.Notice(`Standard: "${e.basename}" published.`),this.plugin.settings.openAfterPublish&&this.viewLiveVersion(e)):t===!1&&new N.Notice(`Standard: Failed to publish "${e.basename}".`)}async unpublishCurrentNote(){if(!this.checkApiKeyAndShowModal())return;let e=this.app.workspace.getActiveFile();if(!e){new N.Notice("Standard: No active note to unpublish.");return}let t=await this.deleteOnlineVersion(e);t===!0?new N.Notice(`Standard: "${e.basename}" removed from the garden.`):t===!1&&new N.Notice(`Standard: Failed to unpublish "${e.basename}".`)}async cleanUnpublishedNotes(){if(this.checkApiKeyAndShowModal()){new N.Notice("Standard : Recherche des notes \xE0 d\xE9publier...");try{let e=await W(`${this.plugin.settings.apiUrl}/publish`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}}),t=[];if(e.ok)t=(await e.json()).notes||[];else{new N.Notice("Standard : Impossible de r\xE9cup\xE9rer les notes distantes.");return}let a=this.getPublishableFiles(),n=new Y(this.app,a),o=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey,r=[],s=new Set;for(let i of t){let l=n.findMatchForRemote(i),d=i.slug||"~root";if(!l)r.push({slug:d,title:i.title||i.slug||"Sans titre",file:null,reason:"orphan"});else{s.add(l);let f=this.app.metadataCache.getFileCache(l)?.frontmatter||{};z(f)||r.push({slug:d,title:l.basename,file:l,reason:"draft"})}}for(let i of a){if(s.has(i))continue;let l=this.app.metadataCache.getFileCache(i)?.frontmatter||{};if(!z(l)&&(l["garden-url"]||l["garden-short"])){let d=l.permalink??l.slug,f=I(i.basename),h=d!=null?String(d).replace(/^\/+|\/+$/g,""):f,c=h===""?"~root":h;r.push({slug:c,title:i.basename,file:i,reason:"stale_local"})}}if(r.length===0){new N.Notice("Standard : Aucune note d\xE9publi\xE9e \xE0 nettoyer. Le jardin est parfaitement synchronis\xE9 !");return}new Te(this.app,this,r).open()}catch(e){console.error("Standard : Erreur lors du nettoyage :",e),new N.Notice("Standard : Erreur lors de la recherche des notes.")}}}getGardenDomain(){try{let e=this.app.vault.getMarkdownFiles();for(let t of e){let n=this.app.metadataCache.getFileCache(t)?.frontmatter||{},o=n["garden-domain"]??n.garden_domain??n.domain;if(n.permalink==="/"&&o)return String(o).trim().replace(/^https?:\/\//,"").replace(/\/$/,"")}}catch(e){console.error("Standard: Error scanning for garden-domain:",e)}return null}getLiveUrl(e){let t=this.app.metadataCache.getFileCache(e)?.frontmatter||{};if(t["garden-url"])return String(t["garden-url"]).trim();let a=t.permalink??t.slug,n=I(e.basename),o=a!=null?String(a).replace(/^\/+|\/+$/g,""):n,r=this.getGardenDomain();if(r)return o===""?`https://${r}`:`https://${r}/${o}`;{let s="https://standard.garden";return o===""?`${s}/@${this.plugin.settings.apiUsername}`:`${s}/@${this.plugin.settings.apiUsername}/${o}`}}viewLiveVersion(e){let t=e||this.app.workspace.getActiveFile();if(!t){new N.Notice("Standard: No active note.");return}let a=this.getLiveUrl(t);this.plugin.settings.openInObsidianWeb?this.app.workspace.getLeaf("split","vertical").setViewState({type:"webviewer",state:{url:a}}):this._openExternal(a)}copyLiveUrl(e){let t=e||this.app.workspace.getActiveFile();if(!t){new N.Notice("Standard : Aucune note active.");return}let a=this.getLiveUrl(t);navigator.clipboard.writeText(a),new N.Notice("Standard : URL publique copi\xE9e dans le presse-papiers.")}copyShortUrl(e){let t=e||this.app.workspace.getActiveFile();if(!t){new N.Notice("Standard : Aucune note active.");return}let a=this.app.metadataCache.getFileCache(t)?.frontmatter||{},n=a["garden-short"]??a.garden_short??a.short_url;n?(navigator.clipboard.writeText(String(n).trim()),new N.Notice("Standard : URL courte copi\xE9e dans le presse-papiers.")):this.copyLiveUrl(t)}shareCurrentNote(e){let t=e||this.app.workspace.getActiveFile();if(!t){new N.Notice("Standard : Aucune note active.");return}let a=this.getLiveUrl(t);new ln(this.app,t.basename,a).open()}async setNoteVisibility(e,t){let a=t||this.app.workspace.getActiveFile();if(!a||a.extension!=="md"){new N.Notice("Standard : Ouvrez une note Markdown.");return}await this.app.fileManager.processFrontMatter(a,n=>{n.visibility=e}),new N.Notice(`Standard : Visibilit\xE9 d\xE9finie sur "${e}".`)}async cycleNoteVisibility(e){let t=e||this.app.workspace.getActiveFile();if(!t||t.extension!=="md"){new N.Notice("Standard : Ouvrez une note Markdown.");return}let a=this.app.metadataCache.getFileCache(t),n=String(a?.frontmatter?.visibility||"public").toLowerCase().trim(),o=["public","unlisted","private"],r=o.indexOf(n),s=o[(r+1)%o.length];await this.setNoteVisibility(s,t)}stripFrontmatter(e){return e?e.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/,""):""}extractMarkdownSubpath(e,t){if(!e||!t)return e;let a=t.trim();if(!a)return e;if(a.startsWith("^")){let l=a.slice(1),d=e.split(`
`),f=[],h=!1;for(let c=0;c<d.length;c++)if(d[c].includes(`^${l}`)){h=!0;let u=c;for(;u>0&&d[u-1].trim()!==""&&!d[u-1].startsWith("#");)u--;let m=c;for(;m<d.length-1&&d[m+1].trim()!==""&&!d[m+1].startsWith("#");)m++;for(let g=u;g<=m;g++)f.push(d[g].replace(new RegExp(`\\s*\\^${l}\\s*$`),""));break}return h?f.join(`
`).trim():e}let n=a.replace(/^#+/,"").trim().toLowerCase(),o=e.split(`
`),r=!1,s=0,i=[];for(let l=0;l<o.length;l++){let d=o[l],f=d.match(/^(#{1,6})\s+(.+)$/);if(f){let h=f[1].length,c=f[2].replace(/[#*`_\[\]]/g,"").trim().toLowerCase();if(r){if(h<=s)break;i.push(d)}else(c===n||c.startsWith(n))&&(r=!0,s=h,i.push(d))}else r&&i.push(d)}return r&&i.length>0?i.join(`
`).trim():e}async resolveNoteTransclusions(e,t,a=0,n=new Set){if(!e||a>5)return e;let o=t?t.path:"",r=new Set(n);o&&r.add(o);let s=/!\[\[([^\]]+)\]\]/g,i=[...e.matchAll(s)];if(i.length===0)return e;let l=e;for(let d of i){let f=d[0],h=d[1],[c]=h.split("|"),u=c.trim();if(ve(u)||se(u)||pt(u))continue;let m=u.indexOf("#"),g=m!==-1?u.slice(0,m).trim():u,y=m!==-1?u.slice(m+1).trim():null,v=null;if(g?v=this.app.metadataCache.getFirstLinkpathDest(g,o):t&&(v=t),!(!v||v.extension!=="md")){if(r.has(v.path)&&a>0&&!y){console.warn(`Standard: Circular transclusion detected for ${v.path}`),l=l.replace(f,"");continue}try{let k=await this.app.vault.read(v),x=this.stripFrontmatter(k);y&&(x=this.extractMarkdownSubpath(x,y));let L=new Set(r);L.add(v.path);let D=await this.resolveNoteTransclusions(x,v,a+1,L);l=l.replace(f,D.trim())}catch(k){console.warn(`Standard: Error resolving transclusion ${f}:`,k)}}}return l}async uploadContentImages(e,t,a=!1,n=null,o=null,r=null){if(!this.plugin.settings.apiKey)return e;let s=await this.resolveNoteTransclusions(e,t),i=new Map,l=async u=>{if(o&&o.cancelled)return null;if(i.has(u.path))return i.get(u.path);try{let m=u.stat?.mtime||0,g=u.stat?.size||0,y=u.name.split(".").pop()?.toLowerCase()||"bin",v="",k="",x=this.attachmentCache?.get(u.path);if(x&&x.mtime===m&&x.size===g&&x.contentHash)v=x.contentHash,k=x.cdnUrl;else{let U=await this.app.vault.readBinary(u),B=await crypto.subtle.digest("SHA-256",U);v=Array.from(new Uint8Array(B)).map(ae=>ae.toString(16).padStart(2,"0")).join("")}if(r&&r.has(v)&&k)return i.set(u.path,k),n&&(n.imagesChecked=(n.imagesChecked||0)+1,n.imagesReused=(n.imagesReused||0)+1),k;let L=`${this.plugin.settings.apiUrl}/publish/attachment?hash=${v}&ext=${y}`,D=await W(L,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(D.status>=200&&D.status<300){let U=await D.json();if(U?.exists&&U.url)return k=new URL(U.url,this.plugin.settings.apiUrl).href,this.attachmentCache&&this.attachmentCache.set(u.path,{mtime:m,size:g,contentHash:v,cdnUrl:k}),r&&r.add(v),i.set(u.path,k),n&&(n.imagesChecked=(n.imagesChecked||0)+1,n.imagesReused=(n.imagesReused||0)+1),k}if(a){let U=Date.now()-this.lastAttachmentUploadTime;if(U<2e3&&await G(2e3-U,o),o&&o.cancelled)return null}let E=await this.app.vault.readBinary(u),b="----ObsidianBoundary"+Math.random().toString(36).substring(2),w=[`--${b}`,`Content-Disposition: form-data; name="file"; filename="${u.name}"`,`Content-Type: ${rn(u.name)}`,"",""].join(`\r
`),T=`\r
--${b}--`,M=new Uint8Array(E),F=new TextEncoder().encode(w),A=new TextEncoder().encode(T),C=new Uint8Array(F.length+M.byteLength+A.length);C.set(F,0),C.set(M,F.length),C.set(A,F.length+M.byteLength);let R=await W(`${this.plugin.settings.apiUrl}/publish/attachment`,{method:"POST",headers:{"x-api-key":this.plugin.settings.apiKey,"Content-Type":`multipart/form-data; boundary=${b}`},body:C.buffer});if(this.lastAttachmentUploadTime=Date.now(),R.status<200||R.status>=300){let U=`HTTP ${R.status}`;try{let B=await R.json();B?.error&&(U=B.error)}catch{}return console.warn(`Standard: Failed to upload ${u.name}: ${U}`,R.status),n&&(n.imagesChecked=(n.imagesChecked||0)+1,n.imagesFailed=(n.imagesFailed||0)+1,n.failedImages&&n.failedImages.push({name:u.name,detail:U})),null}let P=await R.json();return P?.url?(k=new URL(P.url,this.plugin.settings.apiUrl).href,this.attachmentCache&&this.attachmentCache.set(u.path,{mtime:m,size:g,contentHash:v,cdnUrl:k}),r&&r.add(v),i.set(u.path,k),n&&(n.imagesChecked=(n.imagesChecked||0)+1,n.imagesUploaded=(n.imagesUploaded||0)+1),k):(console.warn(`Standard: ${u.name} accept\xE9 par le serveur sans URL en retour`,P),n&&(n.imagesChecked=(n.imagesChecked||0)+1,n.imagesFailed=(n.imagesFailed||0)+1,n.failedImages&&n.failedImages.push({name:u.name,detail:"R\xE9ponse serveur sans URL"})),null)}catch(m){return console.warn(`Standard: Error uploading ${u.name}`,m),n&&(n.imagesChecked=(n.imagesChecked||0)+1,n.imagesFailed=(n.imagesFailed||0)+1,n.failedImages&&n.failedImages.push({name:u.name,detail:m.message||String(m)})),null}},d=s,f=/!\[\[([^\]]+)\]\]/g;for(let u of[...d.matchAll(f)]){let m=u[1],g=m.split("|")[0].trim();if(!ve(g))continue;let y=this.app.metadataCache.getFirstLinkpathDest(g,t.path);if(!y)continue;let v=await l(y);if(!v)continue;let k=m.includes("|")?m.split("|")[1]:y.basename;if(se(g))d=d.replaceAll(u[0],`![${k}](${v})`);else if(pt(g))d=d.replaceAll(u[0],`[${k}](${v} "pdf-embed")`);else{let x=`${v}?download=${encodeURIComponent(y.name)}`;d=d.replaceAll(u[0],`[${k}](${x})`)}}let h=/(^|[^!])\[\[([^\]]+)\]\]/g;for(let u of[...d.matchAll(h)]){let m=u[2],g=m.split("|")[0].trim();if(!ve(g)||se(g))continue;let y=this.app.metadataCache.getFirstLinkpathDest(g,t.path);if(!y)continue;let v=await l(y);if(!v)continue;let k=m.includes("|")?m.split("|")[1]:y.name,x=`${v}?download=${encodeURIComponent(y.name)}`;d=d.replaceAll(u[0],`${u[1]}[${k}](${x})`)}let c=/!\[([^\]]*)\]\(([^)]+)\)/g;for(let u of[...d.matchAll(c)]){let m=u[2];if(/^https?:\/\//.test(m)||!se(m))continue;let g=decodeURIComponent(m),y=this.app.vault.getFileByPath(g)||this.app.metadataCache.getFirstLinkpathDest(g,t.path);if(!y)continue;let v=await l(y);v&&(d=d.replaceAll(u[0],`![${u[1]}](${v})`))}return d}async publishNote(e,t=!1,a=null){try{let n=a!==null?a:await this.uploadContentImages(await this.app.vault.read(e),e,t),o=this.app.metadataCache.getFileCache(e)?.frontmatter||{},r=o.permalink??o.slug,s=I(e.basename),i=r!=null?String(r).replace(/^\/+|\/+$/g,""):s,l=i===""?"~root":i,d=o.created||(e.stat?.ctime?new Date(e.stat.ctime).toISOString():new Date().toISOString()),f=o.modified||(e.stat?.mtime?new Date(e.stat.mtime).toISOString():new Date().toISOString()),h=await W(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(l)}`,{method:"PUT",headers:{"Content-Type":"application/json","x-api-key":this.plugin.settings.apiKey},body:JSON.stringify({title:e.basename,content:n,slug:l,created_at:d,updated_at:f})});if(h.status<200||h.status>=300){let m=`HTTP ${h.status}`;try{let g=JSON.parse(h.text||"{}");g.error&&(m+=`: ${g.error}`)}catch{h.text&&(m+=`: ${h.text.slice(0,80)}`)}return this.lastError=m,console.error(`Standard: Publish failed for ${e.basename}:`,h.status,h.text),!1}let c=await h.json().catch(()=>null),u=this.getLiveUrl(e);return await this.app.fileManager.processFrontMatter(e,m=>{delete m.published,delete m.url_public,m["garden-url"]=u,i!==""&&(m.permalink=i),c&&c.nano_id&&(m["garden-short"]=`https://stnd.gd/${c.nano_id}`),m.modified!=null&&(m.modified=new Date().toISOString())}),!0}catch(n){return this.lastError=n.message||String(n),console.error(`Standard: Publish error for ${e.basename}:`,n),!1}}async unpublishNote(e,t=null){try{let a=t;if(!a&&e){let o=this.app.metadataCache.getFileCache(e)?.frontmatter||{},r=o.permalink??o.slug,s=I(e.basename),i=r!=null?String(r).replace(/^\/+|\/+$/g,""):s;a=i===""?"~root":i}if(!a)return!1;let n=await W(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(a)}`,{method:"DELETE",headers:{"x-api-key":this.plugin.settings.apiKey}});if(n.status!==404&&(n.status<200||n.status>=300)){let o=`HTTP ${n.status}`;try{let r=JSON.parse(n.text||"{}");r.error&&(o+=`: ${r.error}`)}catch{n.text&&(o+=`: ${n.text.slice(0,80)}`)}return this.lastError=o,console.error(`Standard: Unpublish failed for ${e?e.basename:a}:`,n.status),!1}return e&&await this.app.fileManager.processFrontMatter(e,o=>{(o.status==="public"||o.status==="published")&&(o.status="draft"),o.publish!==void 0&&(o.publish=!1),delete o.published,delete o.url_public,delete o["garden-url"],delete o["garden-short"]}),!0}catch(a){return console.error(`Standard: Unpublish error for ${e?e.basename:t}:`,a),!1}}async generateTokens(e,t,a){let n=this.plugin.settings.apiKey;if(!n)throw new Error("Connect your Standard Garden account in settings first.");let o=Object.fromEntries(Object.entries(a).filter(([i])=>on.has(i))),r=await N.requestUrl({url:`${this.plugin.settings.apiUrl}/ai/theme`,method:"POST",headers:{"Content-Type":"application/json","x-api-key":n},body:JSON.stringify({instruction:e,noteContent:t,currentTokens:o}),throw:!1});if(r.status<200||r.status>=300){let i=r.text;throw new Error(`Standard API ${r.status}: ${i}`)}let s=r.json;if(!s.tokens)throw new Error("No tokens returned from AI service");return s.tokens}async publishWithCheck(e){if(!this.checkApiKeyAndShowModal())return null;let a=this.app.metadataCache.getFileCache(e)?.frontmatter||{},n=async()=>(await this.app.fileManager.processFrontMatter(e,s=>{z(s)||(s.status="public")}),await this.publishNote(e)),o=[];return(a.status==="draft"||a.publish===!1||a.publish==="false")&&o.push("\u2022 status: draft \u2014 it asked to stay a draft"),String(a.visibility||"").toLowerCase()==="private"&&o.push("\u2022 visibility: private \u2014 visitors won't see it"),o.length>0?new Promise(r=>{new ke(this.app,`\u{1F331} Plant "${e.basename}" in the garden anyway?

${o.join(`
`)}`,"Plant it",async()=>r(await n()),()=>r(null)).open()}):await n()}async checkNoteStatus(e){if(!this.plugin.settings.apiKey||this.isPathExcluded(e.path))return{status:"unpublished"};try{let t=this.app.metadataCache.getFileCache(e)?.frontmatter||{},a=t.permalink??t.slug,n=I(e.basename),o=a!=null?String(a).replace(/^\/+|\/+$/g,""):n,r=o===""?"~root":o,s=await W(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(r)}`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(s.status===404)return{status:"unpublished"};if(s.status<200||s.status>=300)throw new Error(`HTTP error ${s.status}`);let i=await s.json(),l=i.content||"",d=i.hash,f=i.updated_at?new Date(i.updated_at).getTime():0,h=await this.app.vault.read(e),c=L=>{if(!L)return"";let D=L.replace(/\r\n/g,`
`);return D=D.replace(/!\[\[([^\]]+)\]\]/g,(E,b)=>{let w=b.split("|"),T=w[0].trim(),M=w[1]?w[1].trim():"";return M?`[IMAGE:${M.toLowerCase()}]`:`[IMAGE:${(T.substring(0,T.lastIndexOf("."))||T).toLowerCase()}]`}),D=D.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(E,b,w)=>{let T=b.trim();if(T)return`[IMAGE:${T.toLowerCase()}]`;let M=w.split("/").pop()||"";return`[IMAGE:${(M.substring(0,M.lastIndexOf("."))||M).toLowerCase()}]`}),D.trim()},u=c(h),m=c(l),g=new TextEncoder().encode(u),y=await crypto.subtle.digest("SHA-256",g),k=Array.from(new Uint8Array(y)).map(L=>L.toString(16).padStart(2,"0")).join("");if(d===k)return{status:"synced"};let x=e.stat.mtime;return f>x+5e3?{status:"outdated",remoteContent:l}:{status:"changed"}}catch(t){return console.error("Standard : Erreur lors de la v\xE9rification du statut de la note :",t),{status:"error"}}}async deleteOnlineVersion(e){return this.checkApiKeyAndShowModal()?new Promise(t=>{new ke(this.app,`Remove "${e.basename}" from Standard Garden?

The online version will be permanently deleted.`,"Delete online version",async()=>{let a=await this.unpublishNote(e);t(a)},()=>t(null)).open()}):null}async getNoteStats(e){if(!this.plugin.settings.apiKey||this.isPathExcluded(e.path))return null;try{let t=this.app.metadataCache.getFileCache(e)?.frontmatter||{},a=t.permalink??t.slug,n=I(e.basename),o=a!=null?String(a).replace(/^\/+|\/+$/g,""):n,r=o===""?"~root":o,s=await W(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(r)}`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(s.status===200){let i=await s.json();return{views:i.views||0,citations:Array.isArray(i.citations)?i.citations:[],created_at:i.created_at,updated_at:i.updated_at,online:!0}}return null}catch(t){return console.error("[Standard] Error fetching note stats:",t),null}}async askGardenAI(){this.checkApiKeyAndShowModal()&&new sn(this.app,this.plugin).open()}};ht.exports={GardenFeature:Se}});var gt=O((fa,mt)=>{"use strict";var{EditorSuggest:dn,setTooltip:cn}=require("obsidian"),Ne=[{id:"feed",name:"::feed",category:"Flux",syntax:"::feed #tag",description:"Flux de cartes visuelles avec image cover, date relative et extrait markdown.",insertText:"::feed #",cursorOffset:8},{id:"list",name:"::list",category:"Flux",syntax:"::list #tag",description:"Liste compacte \xE0 puces des notes li\xE9es au tag sp\xE9cifi\xE9.",insertText:"::list #",cursorOffset:8},{id:"callout",name:"::callout",category:"Bloc",syntax:`::callout note
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
::end`,cursorLineOffset:1,cursorChOffset:0}],Fe=class extends dn{constructor(e,t){super(e),this.plugin=t}onTrigger(e,t,a){let r=t.getLine(e.line).slice(0,e.ch).match(/(?:^|[\s>])(::([a-zA-Z0-9_-]*))$/);if(!r)return null;let s=r[1],i=r[2],l=e.ch-s.length,d={start:{line:e.line,ch:l},end:{line:e.line,ch:e.ch},query:i};return this.latestTriggerInfo=d,d}getSuggestions(e){let t=(e.query||"").toLowerCase().trim(),a;return t?a=Ne.filter(n=>n.id.toLowerCase().includes(t)||n.name.toLowerCase().includes(t)||n.category.toLowerCase().includes(t)||n.description.toLowerCase().includes(t)):a=Ne,a.map(n=>({...n,context:e}))}renderSuggestion(e,t){t.addClass("stnd-suggest-item");let a=t.createDiv({cls:"stnd-suggest-header"});a.createSpan({cls:"stnd-suggest-name",text:e.name});let n=`stnd-suggest-badge badge-${e.category.toLowerCase().replace(/[^a-z]/g,"")}`;a.createSpan({cls:n,text:e.category}),e.syntax&&a.createSpan({cls:"stnd-suggest-syntax",text:e.syntax}),t.createDiv({cls:"stnd-suggest-desc",text:e.description});let o=`${e.name} (${e.category})
Syntaxe: ${e.syntax}
${e.description}`;try{cn(t,o,{placement:"right"})}catch{t.setAttribute("title",o)}}selectSuggestion(e,t){let a=e.context||this.context||this.latestTriggerInfo,n=this.app.workspace.activeEditor?.editor||this.context?.editor;if(!n||!a)return;let{start:o,end:r}=a;n.replaceRange(e.insertText,o,r),e.cursorOffset!==void 0?n.setCursor({line:o.line,ch:o.ch+e.cursorOffset}):e.cursorLineOffset!==void 0&&n.setCursor({line:o.line+e.cursorLineOffset,ch:e.cursorChOffset||0}),this.close()}};mt.exports={StandardDirectiveSuggest:Fe,DIRECTIVES:Ne}});var Ce=O((ha,vt)=>{"use strict";var{BasesView:fn,MarkdownRenderer:pn,Setting:pa}=require("obsidian"),wt="standard-feed",hn="atelier-feed",bt={maxItems:50,previewChars:600,showCovers:!0};function yt(p){if(!p)return"";let e=new Date(p);if(isNaN(e.getTime()))return"";let a=Math.floor((new Date().getTime()-e.getTime())/864e5);return a===0?"Aujourd'hui":a===1?"Hier":a>1&&a<7?`Il y a ${a} jours`:e.toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function un(p){if(!p)return"";if(p.startsWith("---")){let e=p.indexOf(`
---`,3);if(e!==-1){let t=p.indexOf(`
`,e+1);return t!==-1?p.slice(t+1):""}}return p}function mn(p,e,t){let a=t?.frontmatter||t||{};for(let r of["cover","image","banner"]){let s=null;if(typeof t?.getValue=="function")try{s=t.getValue(`note.${r}`)}catch{}if(!s&&a[r]&&(s=a[r]),s){let i=String(s).trim();if(/^https?:\/\//i.test(i))return i;let l=i.replace(/^\[\[/,"").replace(/\]\]$/,""),d=p.metadataCache.getFirstLinkpathDest(l,"");if(d)return p.vault.adapter.getResourcePath(d.path)}}let n=e.match(/!\[[^\]]*\]\(([^)]+)\)/);if(n){let r=n[1].trim();if(/^https?:\/\//i.test(r))return r;let s=p.metadataCache.getFirstLinkpathDest(r,"");if(s)return p.vault.adapter.getResourcePath(s.path)}let o=e.match(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/);if(o){let r=o[1].trim(),s=p.metadataCache.getFirstLinkpathDest(r,"");if(s)return p.vault.adapter.getResourcePath(s.path)}return null}var ie=class p{static async renderCard(e,t,a,n={},o=null){let{previewChars:r=600,showCovers:s=!0,token:i=null,getToken:l=()=>null}=n,d=t.createDiv({cls:"stnd-feed-card"}),f=d.createDiv({cls:"stnd-feed-card-header"}),c=e.metadataCache.getFileCache(a)?.frontmatter||{},u=c.title||a.basename;f.createDiv({cls:"stnd-feed-title",text:u});let m=c.publish||c.created||a.stat?.mtime;m&&f.createDiv({cls:"stnd-feed-date",text:yt(m)}),d.addEventListener("click",y=>{y.target.closest("a")||e.workspace.getLeaf(y.metaKey||y.ctrlKey?"tab":!1).openFile(a)});let g=d.createDiv({cls:"stnd-feed-body"});try{let y=await e.vault.cachedRead(a);if(i!==null&&l()!==i)return;let v=un(y);if(s){let k=mn(e,v,c);if(k){let x=g.createEl("img",{cls:"stnd-feed-cover"});x.src=k,x.loading="lazy"}}r>0&&v.length>r&&(v=v.slice(0,r).trimEnd()+"\u2026"),v&&await pn.render(e,v,g,a.path,o)}catch{}}static renderFeedOrList(e,t,a,n,o,r=null){let s=(n||"").replace(/^#/,"").trim().toLowerCase(),i=e.vault.getMarkdownFiles(),l=[],d=(o?.settings?.keyPrefix||"")+(o?.settings?.publishKey||"publish");for(let f of i){let h=e.metadataCache.getFileCache(f),c=h?.frontmatter||{},m=[...Array.isArray(c.tags)?c.tags:typeof c.tags=="string"?[c.tags]:[],...(h?.tags||[]).map(y=>y.tag)];if((!s||m.some(y=>{let v=String(y).toLowerCase().replace(/^#/,"");return v===s||v.startsWith(s+"/")}))&&(c[d]===!0||typeof c[d]=="string"||c.visibility==="public"||!!c[d])){let v=c.publish?new Date(c.publish).getTime():c.created?new Date(c.created).getTime():f.stat.mtime;l.push({file:f,title:c.title||f.basename,time:isNaN(v)?f.stat.mtime:v,excerpt:c.excerpt||"",fm:c})}}if(l.sort((f,h)=>h.time-f.time),l.length===0){let f=t.createEl("p",{text:s?`Aucune note publique trouv\xE9e pour #${s}`:"Aucune note publique trouv\xE9e.",cls:"stnd-feed-empty"});return}if(a==="list"){let f=t.createEl("ul",{cls:"stnd-feed-list"});l.forEach(h=>{let c=f.createEl("li");c.createEl("a",{text:h.title,cls:"internal-link stnd-feed-link"}).addEventListener("click",m=>{m.preventDefault(),e.workspace.getLeaf().openFile(h.file)}),h.time&&c.createSpan({cls:"stnd-feed-list-date",text:` (${yt(h.time)})`})})}else{let f=t.createDiv({cls:"stnd-feed"});l.forEach(h=>{p.renderCard(e,f,h.file,{previewChars:o?.settings?.feed?.previewChars??600,showCovers:o?.settings?.feed?.showCovers??!0},r)})}}},Q=class extends(fn||class{}){constructor(t,a,n){super(t);je(this,"type",wt);this.feedContainerEl=a,this.settings=n,this.renderToken=0}onload(){this.feedContainerEl.addClass("stnd-feed"),this._render()}onunload(){this.renderToken++,this.feedContainerEl.removeClass("stnd-feed"),this.feedContainerEl.empty()}onDataUpdated(){this._render()}_render(){let t=++this.renderToken,a=this.feedContainerEl;if(!a||(a.empty(),!this.data))return;let n=this.data?.data??[];if(n.length===0){a.createDiv({cls:"stnd-feed-empty",text:"Aucune note dans ce feed."});return}let o=this._option("maxItems",this.settings?.maxItems??50),r=this._option("previewChars",this.settings?.previewChars??600),s=this._option("showCovers",this.settings?.showCovers??!0),i=n.slice(0,o);for(let l of i){let d=l.file;d&&ie.renderCard(this.app,a,d,{previewChars:r,showCovers:s,token:t,getToken:()=>this.renderToken},this)}n.length>i.length&&a.createDiv({cls:"stnd-feed-more",text:`+ ${n.length-i.length} note(s) de plus \u2014 affine le filtre ou augmente la limite.`})}_option(t,a){try{let n=this.config?.get?.(t);return n??a}catch{return a}}},De=class{constructor(e,t){this.app=e,this.plugin=t,t.settings.feed||(t.settings.feed={...bt}),this.settings=t.settings.feed}async load(){if(typeof this.plugin.registerBasesView=="function"){let e=()=>[{type:"slider",key:"maxItems",displayName:"Max entries",default:this.settings.maxItems,min:5,max:200,step:5},{type:"slider",key:"previewChars",displayName:"Preview length (chars, 0 = full)",default:this.settings.previewChars,min:0,max:2e3,step:100},{type:"toggle",key:"showCovers",displayName:"Show cover images",default:this.settings.showCovers}];this.plugin.registerBasesView(wt,{name:"Feed",icon:"rss",factory:(t,a)=>new Q(t,a,this.settings),options:e}),this.plugin.registerBasesView(hn,{name:"Feed (Legacy)",icon:"rss",factory:(t,a)=>new Q(t,a,this.settings),options:e})}}async unload(){}};vt.exports={FeedFeature:De,FeedBasesView:Q,FeedCardRenderer:ie,DEFAULT_FEED_SETTINGS:bt}});var xt=O((ya,kt)=>{"use strict";var ga=require("obsidian"),{StandardDirectiveSuggest:gn}=gt(),{FeedCardRenderer:yn}=Ce();function wn(p){if(!p)return null;try{let e=new URL(p);if((e.hostname==="www.youtube.com"||e.hostname==="youtube.com")&&e.searchParams.has("v"))return e.searchParams.get("v");if(e.hostname==="youtu.be")return e.pathname.slice(1).split("/")[0]||null;if((e.hostname==="www.youtube.com"||e.hostname==="youtube.com")&&e.pathname.startsWith("/embed/"))return e.pathname.split("/")[2]||null}catch{}return null}function bn(p){if(!p)return null;try{let e=new URL(p);if(e.hostname==="vimeo.com"||e.hostname==="www.vimeo.com"){let t=e.pathname.split("/").filter(Boolean),a=t[t.length-1];if(a&&/^\d+$/.test(a))return a}if(e.hostname==="player.vimeo.com"&&e.pathname.startsWith("/video/"))return e.pathname.split("/")[2]||null}catch{}return null}var Le=class{constructor(e,t){this.app=e,this.plugin=t}async load(){this.plugin.registerMarkdownPostProcessor((e,t)=>{this.processSyntaxDirectives(e,t)}),this.plugin.registerEditorSuggest(new gn(this.app,this.plugin))}async unload(){}processSyntaxDirectives(e,t){Array.from(e.querySelectorAll("p")).forEach(r=>{let s=r.textContent.trim();if(s.startsWith("::space")){let f=s.substring(7).trim(),c=`space-${{small:"2",medium:"4",large:"6",xlarge:"8"}[f]||"4"}`,u=document.createElement("div");u.className=c,r.replaceWith(u);return}if(s.startsWith("::download")){let f=s.substring(10).trim()||"Download",h=document.createElement("button");h.type="button",h.className="btn note-download",h.textContent=f,r.replaceWith(h);return}let i=s.match(/^::(note|alert|warning|error|success|muted|subtle)\s+([\s\S]+)$/i);if(i){let f=i[1].toLowerCase(),h=i[2].trim(),c;if(f==="note"?(c=document.createElement("aside"),c.className="note",c.textContent=h):["alert","warning","error","success"].includes(f)?(c=document.createElement("div"),c.className=`alert ${f==="alert"?"":f}`,c.textContent=h):["muted","subtle"].includes(f)&&(c=document.createElement("p"),c.className=f,c.textContent=h),c){r.replaceWith(c);return}}let l=s.match(/^::video\s+([^\n]+)/i);if(l){let f=l[1].trim(),h=this.renderVideoEmbed(f);if(h){r.replaceWith(h);return}}let d=s.match(/^::(feed|list)(?:\s+([^\n]+))?$/i);if(d){let f=d[1].toLowerCase(),h=(d[2]||"").trim(),c=document.createElement("div");c.className=`dynamic-feed-container feed-type-${f}`,this.renderFeedOrList(c,f,h,t),r.replaceWith(c);return}});let n=Array.from(e.children),o=0;for(;o<n.length;){let r=n[o];if(r.tagName==="P"){let i=r.textContent.trim().match(/^::(callout|toggle|cards|hero-block|small|accent|feature-block|center|grid|split|columns|card|image|gallery|button|form|hero|full|feature|editorial|excerpt)\s*(.*)$/i);if(i){let l=i[1].toLowerCase(),d=i[2].trim(),f=-1;for(let h=o+1;h<n.length;h++)if(n[h].tagName==="P"&&n[h].textContent.trim()==="::end"){f=h;break}if(f!==-1){let h=n.slice(o+1,f),c=this.renderBlockContainer(l,d,h);if(c){r.replaceWith(c);for(let u of h)u.remove();n[f].remove(),n.splice(o+1,f-o)}}else if(["hero","full","feature","editorial","excerpt","card"].includes(l)){let c=n[o+1];if(c){let u=document.createElement("div");for(u.className=l;c.firstChild;)u.appendChild(c.firstChild);c.replaceWith(u),r.remove(),n.splice(o,1);continue}}}}o++}}renderFeedOrList(e,t,a,n=null){yn.renderFeedOrList(this.app,e,t,a,this.plugin,n)}splitInnerElements(e){let t=[],a=[];for(let n of e)n.tagName==="HR"?a.length>0&&(t.push(a),a=[]):a.push(n);return a.length>0&&t.push(a),t}renderVideoEmbed(e){if(!e)return null;let t=document.createElement("div");t.className="video-container",t.style.cssText="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1.5rem 0;";let a=wn(e);if(a){let s=t.createEl("iframe");return s.src=`https://www.youtube-nocookie.com/embed/${a}`,s.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;",s.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),s.setAttribute("allowfullscreen","true"),t}let n=bn(e);if(n){let s=t.createEl("iframe");return s.src=`https://player.vimeo.com/video/${n}`,s.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;",s.setAttribute("allow","autoplay; fullscreen; picture-in-picture"),s.setAttribute("allowfullscreen","true"),t}let o=document.createElement("div");o.className="video-container native-video",o.style.margin="1.5rem 0";let r=o.createEl("video");return r.src=e,r.setAttribute("controls","true"),r.setAttribute("preload","metadata"),r.style.cssText="width: 100%; max-height: 500px; border-radius: var(--radius-m);",o}renderBlockContainer(e,t,a){let n;if(e==="callout"){let o=t.match(/^([+-])?\s*(.+)$/),r=o?o[1]:null,s=o?o[2]:t||"Note",i=r==="+"||r==="-",l=r==="+",d=s.toLowerCase(),f=s.charAt(0).toUpperCase()+s.slice(1),h={note:"\u{1F4DD}",tip:"\u{1F4A1}",info:"\u2139\uFE0F",warning:"\u26A0\uFE0F",danger:"\u26A1",success:"\u2705",question:"\u2753",quote:"\u{1F4AC}",abstract:"\u{1F4CB}",bug:"\u{1F41B}",example:"\u{1F4C4}",failure:"\u274C",todo:"\u2611\uFE0F"},c=h[d]||h.note;if(i){n=document.createElement("details"),n.className="callout",n.setAttribute("data-callout",d),l&&n.setAttribute("open","");let u=n.createEl("summary",{cls:"callout-title"});u.createEl("span",{text:c,cls:"callout-icon"}),u.createEl("span",{text:f,cls:"callout-title-inner"});let m=n.createDiv({cls:"callout-content"});a.forEach(g=>m.appendChild(g.cloneNode(!0)))}else{n=document.createElement("div"),n.className="callout",n.setAttribute("data-callout",d);let u=n.createDiv({cls:"callout-title"});u.createEl("span",{text:c,cls:"callout-icon"}),u.createEl("span",{text:f,cls:"callout-title-inner"});let m=n.createDiv({cls:"callout-content"});a.forEach(g=>m.appendChild(g.cloneNode(!0)))}}else if(e==="toggle"){n=document.createElement("details"),n.className="toggle-block";let o=n.createEl("summary",{text:t||"Details"}),r=n.createDiv({cls:"toggle-content"});a.forEach(s=>r.appendChild(s.cloneNode(!0)))}else if(e==="columns"){let o=t||"2",r=this.splitInnerElements(a);n=document.createElement("div"),n.className=`columns-${o}`,n.style.cssText=`display: grid; grid-template-columns: repeat(${o}, 1fr); gap: 1.5rem; margin: 1.5rem 0;`,r.forEach(s=>{let i=n.createDiv({cls:"column"});s.forEach(l=>i.appendChild(l.cloneNode(!0)))})}else if(e==="grid"||e==="cards"){let o=this.splitInnerElements(a),r=o.length;n=document.createElement("div"),n.className=e==="cards"?`grid-${r}`:`grid-${r}`,n.style.cssText=`display: grid; grid-template-columns: repeat(${r}, 1fr); gap: 1.5rem; margin: 1.5rem 0;`,o.forEach(s=>{let i=n.createDiv({cls:e==="cards"?"sm:row card":"sm:row"});e==="cards"&&(i.style.cssText="border: 1px solid var(--background-modifier-border); padding: 1rem; border-radius: var(--radius-m); background: var(--background-primary);"),s.forEach(l=>i.appendChild(l.cloneNode(!0)))})}else if(e==="split"){let o=t.split("/").map(s=>parseInt(s,10)).filter(s=>!isNaN(s)&&s>0),r=this.splitInnerElements(a);n=document.createElement("div"),n.className="grid",n.style.cssText="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.5rem; margin: 1.5rem 0;",r.forEach((s,i)=>{let l=o[i]||Math.max(1,Math.floor(12/r.length)),d=n.createDiv({cls:`sm:row col-${l}`});d.style.gridColumn=`span ${l}`,s.forEach(f=>d.appendChild(f.cloneNode(!0)))})}else if(e==="gallery"){let o=this.splitInnerElements(a),r=o.length,s=Math.max(1,Math.floor(12/r));n=document.createElement("div"),n.className="gallery grid gap-4",n.style.cssText="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem; margin: 1.5rem 0;",o.forEach(i=>{let l=n.createDiv({cls:`col-12 md:col-${s}`});l.style.gridColumn=`span ${s}`,i.forEach(d=>l.appendChild(d.cloneNode(!0)))})}else if(e==="image"){let o=t||"";n=document.createElement("figure"),n.className=`image-${o}`;let r="",s="";a.forEach(l=>{let d=l.querySelector("img");d?r=d.src:l.tagName==="IMG"?r=l.src:s+=(s?`
`:"")+l.textContent.trim()}),!r&&a.length>0&&(r=a[0].textContent.trim(),s=a.slice(1).map(l=>l.textContent.trim()).join(`
`));let i=n.createEl("img");i.src=r,i.alt=s,s&&n.createEl("figcaption",{text:s})}else if(e==="button"){let o=t||"",r=a.find(s=>s.tagName==="A")||a.reduce((s,i)=>s||i.querySelector("a"),null);r?(n=r.cloneNode(!0),n.className=o?`button button-${o}`:"button",n.style.cssText="display: inline-block; padding: 0.5rem 1rem; border-radius: var(--radius-m); background: var(--interactive-accent); color: var(--text-on-accent); text-decoration: none; font-weight: bold;"):(n=document.createElement("div"),n.className="button-wrapper",a.forEach(s=>n.appendChild(s.cloneNode(!0))))}else if(e==="form"){n=document.createElement("form"),n.className=`form form-${t||"contact"}`,n.style.cssText="display: flex; flex-direction: column; gap: 1rem; border: 1px solid var(--background-modifier-border); padding: 1.5rem; border-radius: var(--radius-m); background: var(--background-primary); max-width: 500px; margin: 1.5rem 0;";let o=a.map(i=>i.textContent.trim()).filter(Boolean),r=[];o.forEach(i=>{i.split(/\n/).forEach(l=>{let d=l.trim();d&&r.push(d)})}),r.forEach(i=>{let l=i.toLowerCase(),d=l==="email"?"email":l==="message"?"textarea":"text",f=n.createDiv({cls:"form-field"});f.style.cssText="display: flex; flex-direction: column; gap: 0.25rem;";let h=f.createEl("label",{text:i});if(h.setAttribute("for",l),h.style.fontWeight="bold",h.style.fontSize="var(--font-ui-small)",d==="textarea"){let c=f.createEl("textarea",{id:l});c.style.cssText="resize: vertical; min-height: 100px; padding: 0.5rem; border: 1px solid var(--background-modifier-border); border-radius: var(--radius-s); background: var(--background-secondary); color: var(--text-normal);"}else{let c=f.createEl("input",{type:d,id:l});c.style.cssText="padding: 0.5rem; border: 1px solid var(--background-modifier-border); border-radius: var(--radius-s); background: var(--background-secondary); color: var(--text-normal);"}});let s=n.createEl("button",{text:"Send",type:"submit",cls:"button button-primary"});s.style.cssText="align-self: flex-start; padding: 0.5rem 1rem; border-radius: var(--radius-s); background: var(--interactive-accent); color: var(--text-on-accent); border: none; font-weight: bold; cursor: pointer;"}else if(e==="card"||e==="small"||e==="accent"||e==="center")n=document.createElement("div"),n.className=e==="card"?"card":`container-${e}`,a.forEach(o=>n.appendChild(o.cloneNode(!0)));else if(e==="hero-block"||e==="feature-block"){n=document.createElement("div");let o=e==="hero-block"?"container-hero":"container-feature",r=t?`text-${t}`:"";n.className=`${o} ${r}`.trim(),a.forEach(s=>n.appendChild(s.cloneNode(!0)))}else n=document.createElement("div"),n.className=`stnd-syntax-block block-type-${e}`,a.forEach(o=>n.appendChild(o.cloneNode(!0)));return n}};kt.exports={SyntaxPreviewFeature:Le}});var de=O((ba,Ft)=>{"use strict";var{PluginSettingTab:vn,Setting:Ee,Notice:j,SuggestModal:kn,MarkdownView:Tt}=require("obsidian"),{Decoration:$,ViewPlugin:xn}=require("@codemirror/view"),{descWithLinks:wa}=q();function Tn(p,e){let t=p.metadataCache.getFileCache(e),a=[];if(t?.frontmatter?.aliases){let n=t.frontmatter.aliases;Array.isArray(n)?a.push(...n):typeof n=="string"&&a.push(...n.split(",").map(o=>o.trim()))}if(t?.frontmatter?.alias){let n=t.frontmatter.alias;Array.isArray(n)?a.push(...n):typeof n=="string"&&a.push(...n.split(",").map(o=>o.trim()))}return a.filter(Boolean)}function K(p){return p.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function St(p){if(!p)return"";let e=p.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);if(!e)return p;let t=p.indexOf(e[1]),a=e[1],n=t+a.length,o=a.replace(/[^\r\n]/g," ");return p.slice(0,t)+o+p.slice(n)}var Nt=new Set(["readme","license","licence","changelog","changes","todo","index","private","note","notes","untitled","sans titre","scratchpad","log","logs","journal","template","templates","draft","drafts","archive","archives"]),Sn=new Set(["jour","note","base","page","text","texte","type","item","tout","tous","bien","faire","fait","voir","avec","sans","pour","dans","plus","mais","comme","importe","aura","avoir","etre","peut","dire","mode","meta","info","data","true","false","null"]);function Nn(p,e){if(!p?.path)return!0;let t=p.path.toLowerCase();if(t.startsWith(".trash/")||t.includes("/.trash/")||t.startsWith("templates/")||t.includes("/templates/")||t.startsWith("_templates/")||t.startsWith("archive/")||t.includes("/archive/")||t.startsWith("archives/")||Nt.has(p.basename.toLowerCase()))return!0;if(e?.settings?.excludedFolders){let o=e.settings.excludedFolders,r=Array.isArray(o)?o:String(o).split(",").map(i=>i.trim().toLowerCase().replace(/^\/+|\/+$/g,"")).filter(Boolean),s=p.path.toLowerCase().replace(/^\/+/,"");if(r.some(i=>s.startsWith(i+"/")||s===i))return!0}let a=e?.app?.metadataCache?.getFileCache(p),n=[];if(a?.tags&&n.push(...a.tags.map(o=>o.tag.toLowerCase().replace(/^#/,""))),a?.frontmatter?.tags){let o=a.frontmatter.tags;Array.isArray(o)?n.push(...o.map(r=>String(r).toLowerCase().replace(/^#/,""))):typeof o=="string"&&n.push(...o.split(",").map(r=>r.trim().toLowerCase().replace(/^#/,"")))}return!!n.includes("backlink-exclude")}var Fn=[/\b(?:mise|mis|mettre|met|mettait|foutre|foutu)\s+à\s+la\s+porte\b/gi,/\b(?:prendre|pris|prend)\s+la\s+porte\b/gi,/\b(?:au\s+bout\s+du\s+compte)\b/gi,/\b(?:de\s+temps\s+en\s+temps)\b/gi,/\b(?:coup\s+de\s+main)\b/gi];async function Me(p,e,t=null){let a=await p.vault.cachedRead(e),n=St(a),o=p.vault.getMarkdownFiles(),r=[],s=new Set,i=new Set,l=[];for(let f of Fn){f.lastIndex=0;let h;for(;(h=f.exec(n))!==null;)l.push({start:h.index,end:h.index+h[0].length})}for(let f of o){if(f.path===e.path||Nn(f,t))continue;let h=f.basename.toLowerCase();if(s.has(h)||(p.metadataCache.resolvedLinks[e.path]||{}).hasOwnProperty(f.path)||(p.metadataCache.resolvedLinks[f.path]||{}).hasOwnProperty(e.path))continue;let m=[f.basename,...Tn(p,f)],g=!1,y="";for(let v of m){let k=v.toLowerCase().trim();if(k.length<3||Sn.has(k)||Nt.has(k)||i.has(k))continue;let x=new RegExp(`\\b${K(v)}\\b`,"gi"),L,D=0;for(;(L=x.exec(n))!==null;){let E=L.index,b=E+L[0].length,w=Math.max(0,E-100),T=Math.min(n.length,b+100),M=n.slice(w,T),F=E-w,A=F+L[0].length,C=M.slice(0,F),R=M.slice(A);C.lastIndexOf("[[")>C.lastIndexOf("]]")&&R.indexOf("]]")!==-1||C.lastIndexOf("[")>C.lastIndexOf("]")&&R.indexOf(")")!==-1||l.some(U=>E>=U.start&&b<=U.end)||D++}if(D>0){g=!0,y=v;break}}g&&(s.add(h),i.add(y.toLowerCase().trim()),r.push({file:f,term:y}))}let d=[];r.sort((f,h)=>(h.term?.length||0)-(f.term?.length||0));for(let f=0;f<r.length;f++){let h=r[f],c=!1;for(let u of d)if(u.term.toLowerCase().includes(h.term.toLowerCase())){let m=n.replace(new RegExp(`\\b${K(u.term)}\\b`,"gi")," ");if(!new RegExp(`\\b${K(h.term)}\\b`,"gi").test(m)){c=!0;break}}c||d.push(h)}return d}async function _(p,e,t){let a=await p.vault.read(e),n=a,o=St(a),r=t.term,s=new RegExp(`\\b${K(r)}\\b`,"gi"),i,l=[];for(;(i=s.exec(o))!==null;)l.push({start:i.index,end:i.index+i[0].length,text:i[0]});let d=[],f=/(\[\[.*?\]\])|(\[.*?\]\(.*?\))/g,h;for(;(h=f.exec(a))!==null;)d.push({start:h.index,end:h.index+h[0].length});let c=null;for(let u=l.length-1;u>=0;u--){let m=l[u],g=!1;for(let y of d)if(m.start>=y.start&&m.end<=y.end){g=!0;break}if(!g){c=m;break}}if(c){let u=a.substring(0,c.start),m=a.substring(c.end),g=`[[${t.file.basename}]]`;t.file.basename!==c.text&&(g=`[[${t.file.basename}|${c.text}]]`);let y=u+g+m;await p.vault.modify(e,y);let v=new j("",7e3),k=v.noticeEl;k.empty(),k.createSpan({text:`Li\xE9 : "${r}" \u2192 [[${t.file.basename}]]`});let x=k.createEl("button",{text:"Annuler",cls:"stnd-panel-btn stnd-panel-btn-secondary"});x.style.cssText="margin-left: 8px; padding: 2px 8px; font-size: 11px; height: 22px;",x.addEventListener("click",async()=>{await p.vault.modify(e,n),v.hide(),new j(`Lien annul\xE9 : "${r}"`),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),typeof window.stndPanelRefreshLinks=="function"&&window.stndPanelRefreshLinks()})}else new j(`Impossible de trouver une occurrence valide pour "${r}".`)}var le=0,Dn=xn.fromClass(class{constructor(p){this.lastRevision=le,this.decorations=$.none,this.view=p,this.buildDecorations(p)}update(p){(p.docChanged||p.viewportChanged||this.lastRevision!==le)&&(this.lastRevision=le,this.buildDecorations(p.view))}buildDecorations(p){if(!window.stndMyceliumSettings?.enableGhostLinks){this.decorations=$.none;return}let t=window.stndMyceliumCache||[];if(!t||t.length===0){this.decorations=$.none;return}let a=[...t].sort((l,d)=>(d.term?.length||0)-(l.term?.length||0)),n=[],o=[],r=-1,s=p.app||window.app,i=s?.workspace?.getActiveFile();if(i&&s?.metadataCache){let l=s.metadataCache.getFileCache(i);l?.frontmatterPosition&&(r=l.frontmatterPosition.end.offset)}for(let{from:l,to:d}of p.visibleRanges){let f=p.state.doc.sliceString(l,d);if(f)for(let h of a){let c=h.term;if(!c||c.length<2)continue;let u=new RegExp(`\\b${K(c)}\\b`,"gi"),m;for(;(m=u.exec(f))!==null;){let g=l+m.index,y=g+m[0].length;if(r>-1&&g<r)continue;let v=Math.max(0,g-150),k=Math.min(p.state.doc.length,y+150),x=p.state.doc.sliceString(v,k),L=g-v,D=L+m[0].length,E=x.slice(0,L),b=x.slice(D);E.lastIndexOf("[[")>E.lastIndexOf("]]")&&b.indexOf("]]")!==-1||E.lastIndexOf("[")>E.lastIndexOf("]")&&b.indexOf(")")!==-1||o.some(T=>g>=T.start&&g<T.end||y>T.start&&y<=T.end||g<=T.start&&y>=T.end)||(o.push({start:g,end:y}),n.push($.mark({class:"mycelium-ghost-link",attributes:{title:`\u{1F331} Click to open ${h.file.basename} \xB7 Alt+Click to link`,"data-target":h.file.path,"data-term":c,"data-basename":h.file.basename}}).range(g,y)))}}}n.sort((l,d)=>l.from-d.from||l.to-d.to),this.decorations=$.set(n)}},{decorations:p=>p.decorations,eventHandlers:{click:(p,e)=>{let t=p.target.closest(".mycelium-ghost-link");if(!t)return!1;let a=t.getAttribute("data-target"),n=t.getAttribute("data-term"),o=t.getAttribute("data-basename")||t.textContent;if(!a||!n)return!1;let r=e.app||window.app,s=r.vault.getAbstractFileByPath(a),i=r.workspace.getActiveFile();if(!s||!i)return!1;if(p.altKey)return p.preventDefault(),p.stopPropagation(),_(r,i,{file:s,term:n}),!0;let{Menu:l,Platform:d}=require("obsidian");if(d.isMobile){p.preventDefault(),p.stopPropagation();let f=new l;return f.addItem(h=>{h.setTitle(`Lier [[${o}]]`).setIcon("link").onClick(()=>{_(r,i,{file:s,term:n})})}),f.showAtMouseEvent(p),!0}return p.preventDefault(),p.stopPropagation(),r.workspace.getLeaf(p.ctrlKey||p.metaKey).openFile(s),!0}}}),Ae=class extends kn{constructor(e,t,a){super(e),this.activeFile=t,this.suggestions=a,this.setPlaceholder("Select a concept to link...")}getSuggestions(e){return this.suggestions.filter(t=>t.file.basename.toLowerCase().includes(e.toLowerCase())||t.term.toLowerCase().includes(e.toLowerCase()))}renderSuggestion(e,t){t.createEl("div",{text:e.file.basename,cls:"link-suggest-title"}),t.createEl("small",{text:`Found mention: "${e.term}"`,cls:"link-suggest-desc"})}async onChooseSuggestion(e,t){await _(this.app,this.activeFile,e)}};function Cn(p,e){let t=p.nodeValue,a=[];for(let r of e){let s=new RegExp(`\\b${K(r.term)}\\b`,"gi"),i;for(;(i=s.exec(t))!==null;){let l=i.index,d=l+i[0].length;a.some(h=>l<h.end&&d>h.start)||a.push({start:l,end:d,sug:r,text:i[0]})}}if(!a.length)return;a.sort((r,s)=>r.start-s.start);let n=document.createDocumentFragment(),o=0;for(let r of a){r.start>o&&n.appendChild(document.createTextNode(t.slice(o,r.start)));let s=document.createElement("span");s.className="mycelium-ghost-link",s.textContent=r.text,s.setAttribute("title",`\u{1F331} Click to open ${r.sug.file.basename}`),s.setAttribute("data-target",r.sug.file.path),s.setAttribute("data-term",r.sug.term),s.setAttribute("data-basename",r.sug.file.basename),n.appendChild(s),o=r.end}o<t.length&&n.appendChild(document.createTextNode(t.slice(o))),p.parentNode.replaceChild(n,p)}function Ln(p,e){let t=[...e].filter(r=>r.term&&r.term.length>=2).sort((r,s)=>(s.term?.length||0)-(r.term?.length||0));if(!t.length)return;let a=document.createTreeWalker(p,NodeFilter.SHOW_TEXT,{acceptNode(r){let s=r.nodeValue;if(!s||!s.trim())return NodeFilter.FILTER_REJECT;let i=r.parentElement;for(;i;){let l=i.tagName;if(l==="A"||l==="CODE"||l==="PRE"||l==="BUTTON"||i.classList?.contains("mycelium-ghost-link")||i.classList?.contains("mycelium-compost-footer"))return NodeFilter.FILTER_REJECT;if(i===p)break;i=i.parentElement}return NodeFilter.FILTER_ACCEPT}}),n=[],o;for(;o=a.nextNode();)n.push(o);for(let r of n)Cn(r,t)}var Re=class{constructor(e,t){this.app=e,this.plugin=t,t.settings.mycelium||(t.settings.mycelium={enableGhostLinks:!1,enableLinkingCommand:!0,enableCompostFooter:!1}),this.settings=t.settings.mycelium}async refreshSuggestions(){let e=this.app.workspace.getActiveFile();if(e&&e.extension==="md"){let t=await Me(this.app,e,this.plugin);window.stndMyceliumCache=t}else window.stndMyceliumCache=[];le++,this.app.workspace.iterateAllLeaves(t=>{if(t.view instanceof Tt){if(t.view.editor?.cm)try{t.view.editor.cm.dispatch({})}catch{}t.view.previewMode&&t.view.previewMode.rerender(!0)}})}async load(){window.stndMyceliumCache=[],window.stndMyceliumSettings=this.settings,window.stndMyceliumFeature=this,window.stndRefreshMycelium=()=>this.refreshSuggestions(),this.refreshSuggestions(),this.plugin.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.refreshSuggestions()})),this.plugin.registerEvent(this.app.metadataCache.on("changed",t=>{let a=this.app.workspace.getActiveFile();a&&t.path===a.path&&(this.cacheTimeout&&clearTimeout(this.cacheTimeout),this.cacheTimeout=setTimeout(()=>this.refreshSuggestions(),1500))})),this.plugin.registerEditorExtension(Dn),(this.settings.enableLinkingCommand??this.settings.enableGraftingCommand)&&this.plugin.addCommand({id:"mycelium-link-mentions",name:"Tend the Mycelium (Link mentions)",callback:async()=>{let t=this.app.workspace.getActiveFile();if(!t||t.extension!=="md"){new j("Open a markdown note to tend the mycelium.");return}new j("Scanning for roots...");let a=await Me(this.app,t,this.plugin);if(a.length===0){new j("No unlinked mentions found.");return}new Ae(this.app,t,a).open()}}),this.plugin.registerMarkdownPostProcessor((t,a)=>{try{if(!this.settings.enableCompostFooter){t.querySelectorAll(".mycelium-compost-footer").forEach(c=>c.remove());return}let n=this.app.workspace.getActiveFile();if(!n||n.path!==a.sourcePath)return;let o=a.getSectionInfo(t);if(!o)return;let r=o.text.split(`
`),s=r.length-1;for(;s>=0&&!r[s].trim();)s--;if(o.lineEnd<s)return;let i=window.stndMyceliumCache||[],l=t.closest(".markdown-preview-section")||t.closest(".markdown-rendered")||t.parentElement;if(l&&l.querySelectorAll(".mycelium-compost-footer").forEach(c=>c.remove()),i.length===0)return;let d=document.createElement("div");d.className="mycelium-compost-footer",t.appendChild(d),d.createEl("hr",{cls:"mycelium-footer-hr"}),d.createEl("h4",{text:"Mycelium finding",cls:"mycelium-footer-title"});let f=d.createEl("div",{cls:"mycelium-footer-grid"});for(let h of i)f.createEl("div",{cls:"mycelium-footer-item"}).createEl("span",{text:h.file.basename,cls:"mycelium-ghost-link",attr:{title:`\u{1F331} Click to open ${h.file.basename} \xB7 Alt+Click to link`,"data-target":h.file.path,"data-term":h.term,"data-basename":h.file.basename}})}catch(n){console.error("[Standard] Mycelium compost footer failed to render",n)}}),this.plugin.registerMarkdownPostProcessor((t,a)=>{try{if(!this.settings.enableGhostLinks)return;let n=this.app.workspace.getActiveFile();if(!n||n.path!==a.sourcePath)return;let o=window.stndMyceliumCache||[];if(!o.length)return;Ln(t,o)}catch(n){console.error("[Standard] Mycelium reading-view ghost links failed",n)}}),this.plugin.registerDomEvent(document,"click",t=>{let a=t.target?.closest?.(".mycelium-ghost-link");if(!a||!a.closest(".markdown-reading-view")&&!a.closest(".markdown-preview-view"))return;let n=a.getAttribute("data-target");if(!n)return;let o=this.app.vault.getAbstractFileByPath(n);if(o){if(t.preventDefault(),t.stopPropagation(),t.altKey){let r=a.getAttribute("data-term"),s=this.app.workspace.getActiveFile();r&&s&&_(this.app,s,{file:o,term:r});return}this.app.workspace.getLeaf(t.ctrlKey||t.metaKey).openFile(o)}})}},Oe=class extends vn{constructor(e,t){super(e,t),this.plugin=t,this.settings=t.settings.mycelium}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"Mycelium (Link Assist)"});let t=e.createEl("p",{text:"The Mycelium engine connects your thoughts by finding unlinked mentions of other notes in your current text. When you link a mention, it connects the LAST occurrence of the word, encouraging the reader to read the whole text before clicking away.",cls:"setting-item-description"});new Ee(e).setName("Enable Ghost Links (Option A)").setDesc("Subtly underlines potential links in the editor. Alt+Click or tap to link them.").addToggle(a=>a.setValue(this.settings.enableGhostLinks).onChange(async n=>{this.settings.enableGhostLinks=n,window.stndMyceliumSettings=this.settings,await this.plugin.saveSettings(),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium()})),new Ee(e).setName("Enable Linking Command").setDesc("Adds a command 'Tend the Mycelium (Link mentions)' to the palette. Opens a modal to link mentions.").addToggle(a=>a.setValue(this.settings.enableLinkingCommand??this.settings.enableGraftingCommand??!0).onChange(async n=>{this.settings.enableLinkingCommand=n,this.settings.enableGraftingCommand=n,await this.plugin.saveSettings()})),new Ee(e).setName("Enable Compost Footer").setDesc("Silently appends a list of potential links at the bottom of the Reading View for passive discovery.").addToggle(a=>a.setValue(this.settings.enableCompostFooter).onChange(async n=>{this.settings.enableCompostFooter=n,window.stndMyceliumSettings=this.settings,await this.plugin.saveSettings();let o=this.plugin.app.workspace.getActiveViewOfType(Tt);o?.previewMode&&o.previewMode.rerender(!0)}))}};Ft.exports={MyceliumFeature:Re,MyceliumSettingTab:Oe,findOutgoingUnlinkedMentions:Me,createMentionLink:_,graftLink:_}});var ce=O((ka,Ct)=>{"use strict";var S=require("obsidian"),{KNOWN_TOKENS:Pe,isPublishIntent:En}=q(),{StndConfirmModal:Ue}=me(),{StndShareModal:Mn}=we(),{findOutgoingUnlinkedMentions:An,createMentionLink:Rn}=de(),Dt="stnd-garden-panel",Ie=class extends S.ItemView{constructor(e,t){super(e),this.plugin=t,this._onFileChange=null,this._onMetaChange=null,this._debounceTimers={},this._lastRenderedFile=null,this.activeTab="note",this.auditData=null,this.isAuditing=!1,this.searchingCandidates={},this.linksData=null,this.isLoadingLinks=!1,this.noteStatsCache=new Map,this.isLoadingStats=!1}async loadNoteStats(e){if(!(!e||this.isLoadingStats)){this.isLoadingStats=!0;try{let t=await this.plugin.garden.getNoteStats(e);t&&this.noteStatsCache.set(e.path,t)}catch(t){console.error("[Standard] Error loading note stats:",t)}finally{this.isLoadingStats=!1,this.render()}}}getViewType(){return Dt}getDisplayText(){return"Garden"}getIcon(){return"flower"}async onOpen(){this._onFileChange=()=>{this.render()},this._onMetaChange=e=>{if(this._writing)return;let t=this.plugin.app.workspace.getActiveFile();t&&e===t&&(this.linksData=null,this.render())},this.plugin.app.workspace.on("active-leaf-change",this._onFileChange),this.plugin.app.metadataCache.on("changed",this._onMetaChange),this.render()}async onClose(){this._onFileChange&&this.plugin.app.workspace.off("active-leaf-change",this._onFileChange),this._onMetaChange&&this.plugin.app.metadataCache.off("changed",this._onMetaChange);for(let e of Object.values(this._debounceTimers))clearTimeout(e)}_setFrontmatter(e,t,a){clearTimeout(this._debounceTimers[t]),this._debounceTimers[t]=setTimeout(()=>{this._writing=!0,this.plugin.app.fileManager.processFrontMatter(e,n=>{a===""||a===null||a===void 0?delete n[t]:n[t]=a}).finally(()=>{setTimeout(()=>{this._writing=!1},300)})},400)}render(){let e=this.containerEl.children[1];e.empty(),e.addClass("stnd-panel");let t=e.createEl("div",{cls:"stnd-panel-global-header"});t.createEl("div",{cls:"stnd-panel-global-title",text:"Garden"});let a=this.plugin?.settings?.apiUsername||"",n=t.createEl("div",{cls:"stnd-panel-global-username",text:a?`@${a}`:""});a&&(n.style.cursor="pointer",n.addEventListener("click",()=>{window.open(`https://standard.garden/@${a}`,"_blank")}),n.addEventListener("mouseenter",()=>{n.style.color="var(--text-normal)"}),n.addEventListener("mouseleave",()=>{n.style.color="var(--text-faint)"}));let o=this.plugin.app.workspace.getActiveFile();if(!o){e.createEl("div",{cls:"stnd-panel-empty"}).createEl("p",{text:"Aucune note ouverte.",cls:"stnd-panel-muted"});return}this._lastRenderedFile=o;let s=this.plugin.app.metadataCache.getFileCache(o)?.frontmatter||{};this._renderFileInfo(e,o,s),this._renderGardenSettings(e,o,s),this._renderAIGenerate(e,o,s),this._renderTokenGroups(e,o,s),(!this.linksData||this.linksData.file!==o)&&!this.isLoadingLinks&&this.refreshLinksData(),this._renderLinksTab(e)}_renderFileInfo(e,t,a){let n=e.createEl("div",{cls:"stnd-panel-section"}),o=En(a),r=!!a["garden-url"]||!!a.url_public||a.published===!0||a.published==="true",s=n.createEl("div",{cls:"stnd-panel-status-row"});if(s.style.marginTop="0",this.plugin.settings.apiKey)if(r){let i=this.noteStatsCache.get(t.path),l=i?.updated_at?new Date(i.updated_at).getTime():0,d=t.stat?.mtime||0;if(l>0&&d>l+3e3){let h=s.createEl("span",{text:"Modified",cls:"stnd-panel-badge stnd-panel-badge-pending"});h.title="Local edits not yet synced to Garden"}else{let h=s.createEl("span",{text:"Synced",cls:"stnd-panel-badge stnd-panel-badge-online"});h.title="Up to date with Garden"}}else o?s.createEl("span",{text:"Queued",cls:"stnd-panel-badge stnd-panel-badge-pending"}):a.status==="draft"||a.publish===!1||a.publish==="false"?s.createEl("span",{text:"Draft",cls:"stnd-panel-badge stnd-panel-badge-excluded"}):s.createEl("span",{text:"Local",cls:"stnd-panel-badge stnd-panel-badge-local"});else{let i=s.createEl("span",{text:"Add an API key in settings to plant seeds.",cls:"stnd-panel-meta"});i.style.fontStyle="italic"}if(this.plugin.settings.apiKey){let i=s.createEl("div",{cls:"stnd-panel-actions"}),l=i.createEl("button",{text:r?"Update":"Publish",cls:"stnd-panel-btn"});if(l.addEventListener("click",async()=>{l.disabled=!0,l.textContent="...";let c=await this.plugin.garden.publishWithCheck(t);c===!0?(new S.Notice(`Standard : "${t.basename}" publi\xE9.`),this.plugin.settings.openAfterPublish&&this.plugin.garden.viewLiveVersion(t),this.render()):c===!1?(new S.Notice(`Standard : \xC9chec de la publication de "${t.basename}".`),this.render()):(l.disabled=!1,l.textContent=r?"Update":"Publish")}),r&&this.plugin.settings.apiUsername){let c=this.plugin.garden.getLiveUrl(t);i.createEl("button",{text:"Open",cls:"stnd-panel-btn stnd-panel-btn-secondary"}).addEventListener("click",()=>this.plugin.garden.viewLiveVersion(t)),i.createEl("button",{text:"Share",cls:"stnd-panel-btn stnd-panel-btn-secondary"}).addEventListener("click",()=>{new Mn(this.plugin.app,t.basename,c).open()}),i.createEl("button",{text:"Copy",cls:"stnd-panel-btn stnd-panel-btn-secondary"}).addEventListener("click",()=>{navigator.clipboard.writeText(c),new S.Notice("Public URL copied to clipboard.")})}if(r){let c=i.createEl("button",{text:"Unpublish",cls:"stnd-panel-btn stnd-panel-btn-danger"});c.addEventListener("click",async()=>{c.disabled=!0,c.textContent="...";let u=await this.plugin.garden.deleteOnlineVersion(t);u===!0?(new S.Notice(`Standard : "${t.basename}" retir\xE9 du jardin.`),this.render()):u===!1?(new S.Notice(`Standard : \xC9chec du retrait de "${t.basename}".`),this.render()):(c.disabled=!1,c.textContent="Unpublish")})}let d=n.createEl("div",{cls:"stnd-panel-vis-row"});d.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-top: var(--size-4-2); font-size: var(--font-ui-smaller);",d.createEl("span",{text:"Visibility",cls:"stnd-panel-meta"});let f=d.createEl("select",{cls:"dropdown stnd-panel-select"});f.createEl("option",{value:"public",text:"Public (feed & search)"}),f.createEl("option",{value:"unlisted",text:"Unlisted (link only)"}),f.createEl("option",{value:"private",text:"Private (owner only)"});let h=String(a.visibility||"public").toLowerCase().trim();if(f.value=["public","unlisted","private"].includes(h)?h:"public",f.addEventListener("change",()=>{this._setFrontmatter(t,"visibility",f.value)}),r){let c=n.createEl("div",{cls:"stnd-panel-stats-box"});c.style.cssText="margin-top: var(--size-4-3); padding-top: var(--size-4-2); border-top: 1px solid var(--background-modifier-border);";let u=this.noteStatsCache.get(t.path);!u&&!this.isLoadingStats&&this.loadNoteStats(t);let m=c.createEl("div",{cls:"stnd-panel-stats-row"});m.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--size-4-2); font-size: var(--font-ui-smaller); color: var(--text-muted);";let g=m.createEl("div",{cls:"stnd-panel-views-count"});g.style.cssText="display: flex; align-items: center; gap: 4px;";let y=g.createEl("span");S.setIcon(y,"eye");let v=u?u.views:this.isLoadingStats?"...":0;if(g.createEl("span",{text:`${v} ${v===1?"view":"views"}`}),u?.updated_at){let E=new Date(u.updated_at).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"});m.createEl("span",{text:`Updated ${E}`,cls:"stnd-panel-meta"})}let k=u?.citations||[],x=c.createEl("div",{cls:"stnd-panel-citations"});x.style.cssText="margin-top: var(--size-4-2);";let L=x.createEl("div",{cls:"stnd-panel-citations-header"});if(L.style.cssText="display: flex; align-items: center; justify-content: space-between; font-size: var(--font-ui-smaller); font-weight: var(--font-semibold); color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--size-4-1);",L.createEl("span",{text:`Citations (${k.length})`}),k.length>0){let D=x.createEl("div",{cls:"stnd-panel-citations-list"});D.style.cssText="display: flex; flex-direction: column; gap: 4px;";for(let E of k){let b=D.createEl("div",{cls:"stnd-panel-citation-card"});b.style.cssText="display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; border-radius: var(--radius-s); background: var(--background-modifier-hover); cursor: pointer; transition: background 0.15s ease;",b.addEventListener("mouseenter",()=>{b.style.background="var(--background-modifier-active-hover)"}),b.addEventListener("mouseleave",()=>{b.style.background="var(--background-modifier-hover)"});let w=b.createEl("div",{cls:"stnd-panel-citation-info"});w.style.cssText="display: flex; flex-direction: column; min-width: 0; overflow: hidden;";let T=w.createEl("span",{text:E.title||E.slug,cls:"stnd-panel-citation-title"});T.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;";let M=w.createEl("span",{text:`@${E.username}`,cls:"stnd-panel-citation-author"});M.style.cssText="font-size: 11px; color: var(--text-faint);";let F=b.createEl("span",{cls:"stnd-panel-citation-icon"});F.style.cssText="color: var(--text-faint); display: flex; align-items: center; flex-shrink: 0; margin-left: 6px;",S.setIcon(F,"external-link"),b.addEventListener("click",()=>{E.url&&window.open(E.url,"_blank")})}}else if(!this.isLoadingStats){let D=x.createEl("div",{cls:"stnd-panel-citations-empty"});D.style.cssText="font-size: var(--font-ui-smaller); color: var(--text-faint); font-style: italic;",D.createEl("span",{text:"No citations yet"})}}}}_renderGardenSettings(e,t,a){if(!(a.permalink==="/"))return;let o=e.createEl("div",{cls:"stnd-panel-section stnd-panel-garden-profile"}),r=o.createEl("div",{cls:"stnd-panel-section-header"});r.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-semibold); color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--size-4-2);",r.createEl("span",{text:"Garden Profile Settings"});let s=[{key:"garden-display-name",label:"Display name",type:"text",placeholder:this.plugin?.settings?.apiUsername||"Gardener"},{key:"garden-domain",label:"Custom domain",type:"text",placeholder:"notes.example.com"},{key:"garden-brand",label:"Brand logo",type:"text",placeholder:"URL or false to hide"},{key:"garden-favicon",label:"Favicon",type:"text",placeholder:"https://.../favicon.png"},{key:"garden-avatar",label:"Avatar",type:"text",placeholder:"URL or image path"},{key:"garden-launcher",label:"Command Launcher",type:"toggle",default:!0},{key:"garden-mycelium",label:"Mycelium Network",type:"toggle",default:!0}];for(let i of s)this._renderField(o,t,a,i)}_renderAIGenerate(e,t,a){let n=e.createEl("div",{cls:"stnd-panel-section stnd-panel-ai"}),o=Object.keys(a).some(l=>Pe.has(l)||l.startsWith("stnd-")||l.startsWith("stnd_")),r=n.createEl("div",{cls:"stnd-panel-ai-row"});if(r.style.display="flex",r.style.gap="var(--size-4-2)",r.style.marginTop="0",o){let l=r.createEl("button",{text:"Reset",cls:"stnd-panel-btn stnd-panel-btn-secondary"});l.style.flex="1",l.addEventListener("click",()=>{new Ue(this.plugin.app,`Remove all design tokens from "${t.basename}"?

This will delete fonts, colors, rhythm and layout tokens from frontmatter.`,"Reset",async()=>{let d=0;await this.plugin.app.fileManager.processFrontMatter(t,f=>{for(let h of Object.keys(f))!h.startsWith("garden-")&&!h.startsWith("garden_")&&(Pe.has(h)||h.startsWith("stnd-")||h.startsWith("stnd_"))&&(delete f[h],d++)}),new S.Notice(d>0?`Cleared ${d} design token${d>1?"s":""}.`:"No design tokens found."),this.plugin.design.updateBodyClasses(),this.render()},()=>{}).open()})}let s=r.createEl("button",{text:"Generate theme with AI",cls:"stnd-panel-btn"});s.style.flex="2";let i=this;s.addEventListener("click",async()=>{s.disabled=!0,s.textContent="Generating\u2026";try{let l=await i.plugin.app.vault.cachedRead(t),d=await i.plugin.garden.generateTokens("",l,a);if(d&&typeof d=="object"){let f=new Set(["margin","margin-block"]);await i.plugin.app.fileManager.processFrontMatter(t,h=>{for(let[c,u]of Object.entries(d))Pe.has(c)&&!f.has(c)&&(h[c]=u)}),new S.Notice(`Applied ${Object.keys(d).length} tokens.`)}else new S.Notice("No tokens returned.")}catch(l){new S.Notice(`Generation failed: ${l.message}`)}finally{s.disabled=!1,s.textContent="Generate theme with AI"}})}_renderTokenGroups(e,t,a){let n=[{title:"Typography",fields:[{key:"font-text",label:"Body font",type:"text",placeholder:"Inter"},{key:"font-header",label:"Heading font",type:"text",placeholder:"Merriweather"},{key:"font-monospace",label:"Code font",type:"text",placeholder:"Fira Code"},{key:"font-interface",label:"UI font",type:"text",placeholder:"System-UI"},{key:"font-weight-body",label:"Body weight",type:"number",placeholder:"400",step:"50"},{key:"font-weight-header",label:"Heading weight",type:"number",placeholder:"700",step:"50"},{key:"line-height",label:"Line height",type:"number",placeholder:"1.6",step:"0.05"}]},{title:"Colors \u2014 Semantic",fields:[{key:"color-accent",label:"Accent",type:"color"},{key:"color-header",label:"Headings",type:"color"},{key:"color-bold",label:"Bold",type:"color"},{key:"color-italic",label:"Italic",type:"color"}]},{title:"Colors \u2014 Light",fields:[{key:"color-light-foreground",label:"Foreground",type:"color"},{key:"color-light-background",label:"Background",type:"color"},{key:"color-light-accent",label:"Accent",type:"color"},{key:"color-light-red",label:"Red",type:"color"},{key:"color-light-orange",label:"Orange",type:"color"},{key:"color-light-yellow",label:"Yellow",type:"color"},{key:"color-light-green",label:"Green",type:"color"},{key:"color-light-cyan",label:"Cyan",type:"color"},{key:"color-light-blue",label:"Blue",type:"color"},{key:"color-light-purple",label:"Purple",type:"color"},{key:"color-light-pink",label:"Pink",type:"color"}]},{title:"Colors \u2014 Dark",fields:[{key:"color-dark-foreground",label:"Foreground",type:"color"},{key:"color-dark-background",label:"Background",type:"color"},{key:"color-dark-accent",label:"Accent",type:"color"},{key:"color-dark-red",label:"Red",type:"color"},{key:"color-dark-orange",label:"Orange",type:"color"},{key:"color-dark-yellow",label:"Yellow",type:"color"},{key:"color-dark-green",label:"Green",type:"color"},{key:"color-dark-cyan",label:"Cyan",type:"color"},{key:"color-dark-blue",label:"Blue",type:"color"},{key:"color-dark-purple",label:"Purple",type:"color"},{key:"color-dark-pink",label:"Pink",type:"color"}]},{title:"Vertical Rhythm",fields:[{key:"margin",label:"Base unit",type:"text",placeholder:"1rlh"},{key:"margin-block",label:"Block multiplier",type:"number",placeholder:"2",step:"0.5"}]}],o=e.createEl("details",{cls:"stnd-panel-group stnd-panel-advanced-design"}),r=o.createEl("summary",{text:"Advanced Design Settings"});r.style.fontWeight="var(--font-medium)";let s=o.createEl("div",{cls:"stnd-panel-advanced-body"});s.style.paddingLeft="var(--size-4-2)";for(let i of n){let l=s.createEl("details",{cls:"stnd-panel-group"});i.open&&l.setAttribute("open",""),l.createEl("summary",{text:i.title});let d=l.createEl("div",{cls:"stnd-panel-fields"});for(let f of i.fields)this._renderField(d,t,a,f)}}_renderField(e,t,a,n){let o=e.createEl("div",{cls:"stnd-panel-field"});o.createEl("label",{text:n.label,cls:"stnd-panel-field-label"});let r=a[n.key];switch(n.type){case"text":{let s=o.createEl("input",{cls:"stnd-panel-input",type:"text"});s.placeholder=n.placeholder||"",s.value=r??"",s.addEventListener("input",()=>{this._setFrontmatter(t,n.key,s.value||null)});break}case"number":{let s=o.createEl("input",{cls:"stnd-panel-input",type:"number"});s.placeholder=n.placeholder||"",s.step=n.step||"1",s.value=r??"",s.addEventListener("input",()=>{let i=s.value===""?null:Number(s.value);this._setFrontmatter(t,n.key,i)});break}case"toggle":{let s=r!==void 0?!!(r&&r!=="false"):n.default??!1,i=o.createEl("div",{cls:"checkbox-container"+(s?" is-enabled":"")});i.addEventListener("click",()=>{let l=!i.hasClass("is-enabled");i.toggleClass("is-enabled",l),this._setFrontmatter(t,n.key,l)});break}case"dropdown":{let s=o.createEl("select",{cls:"dropdown stnd-panel-select"});for(let i of n.options){let l=s.createEl("option",{text:i||"\u2014",value:i});(r??"")===i&&(l.selected=!0)}s.addEventListener("change",()=>{this._setFrontmatter(t,n.key,s.value||null)});break}case"color":{let s=o.createEl("div",{cls:"stnd-panel-color-wrap"}),i=s.createEl("input",{type:"color",cls:"stnd-panel-color"}),l=s.createEl("input",{type:"text",cls:"stnd-panel-input stnd-panel-color-text"});l.placeholder=n.placeholder||"#000000";let d=r??"",f=this._toHex(d);i.value=f||"#000000",l.value=d,i.addEventListener("input",()=>{l.value=i.value,this._setFrontmatter(t,n.key,i.value)}),l.addEventListener("input",()=>{let h=this._toHex(l.value);h&&(i.value=h),this._setFrontmatter(t,n.key,l.value||null)});break}}}_toHex(e){if(!e)return null;let t=String(e).trim().replace(/^["']|["']$/g,"");return/^#[0-9a-f]{6}$/i.test(t)?t:/^#[0-9a-f]{3}$/i.test(t)?"#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]:null}async runScan(){this.isAuditing=!0,this.render();try{this.auditData=await this.plugin.vaultAudit.performAudit()}catch(e){console.error("[Garden] Audit failed:",e)}finally{this.isAuditing=!1,this.render()}}_renderAuditTab(e){let t=e.createEl("div",{cls:"stnd-audit-container"}),a=t.createEl("div",{cls:"stnd-audit-header-row"});a.createEl("h3",{text:"Vault Audit",cls:"stnd-audit-title"});let n=a.createEl("button",{cls:"stnd-audit-refresh-btn"+(this.isAuditing?" is-loading":""),title:"Refresh audit"});if(S.setIcon(n,"refresh-cw"),n.addEventListener("click",()=>this.runScan()),!this.auditData&&!this.isAuditing){this.runScan();return}if(this.isAuditing){let u=t.createEl("div",{cls:"stnd-audit-loading"}),m=u.createEl("div",{cls:"stnd-audit-spinner"});S.setIcon(m,"loader"),u.createEl("p",{text:"Scanning vault...",cls:"stnd-audit-loading-text"});return}let{brokenEmbeds:o,brokenLinks:r,orphanedMedia:s}=this.auditData,i=t.createEl("div",{cls:"stnd-audit-stats-row"}),l=i.createEl("div",{cls:"stnd-audit-stat-card type-embed"});l.createEl("div",{text:String(o.length),cls:"stnd-audit-stat-number"}),l.createEl("div",{text:"Broken Media",cls:"stnd-audit-stat-label"});let d=i.createEl("div",{cls:"stnd-audit-stat-card type-link"});d.createEl("div",{text:String(r.length),cls:"stnd-audit-stat-number"}),d.createEl("div",{text:"Broken Links",cls:"stnd-audit-stat-label"});let f=i.createEl("div",{cls:"stnd-audit-stat-card type-orphan"});f.createEl("div",{text:String(s.length),cls:"stnd-audit-stat-number"}),f.createEl("div",{text:"Orphaned Media",cls:"stnd-audit-stat-label"});let h=0,c=new Set(o.map(u=>u.link.split("/").pop().toLowerCase()));for(let u of s){let m=u.name.match(/^(\d{6}_\d{4}_)(.*)/);m&&c.has(m[2].toLowerCase())&&h++}if(h>0){let u=t.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"}),m=u.createEl("span",{cls:"stnd-audit-banner-icon"});S.setIcon(m,"alert-triangle");let g=u.createEl("div",{cls:"stnd-audit-banner-text"});g.createEl("strong",{text:"Double Timestamps Detected"}),g.createEl("span",{text:`${h} orphaned images match broken links due to double timestamping.`});let y=u.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Auto Repair"});y.addEventListener("click",async()=>{y.disabled=!0,y.textContent="Repairing...";let v=await this.plugin.vaultAudit.fixDoubleTimestamps();new S.Notice(`${v} images successfully repaired!`),this.runScan()})}this._renderAuditSection(t,"Broken Images & Media",o,"image",u=>this._renderBrokenEmbeds(u,o),null,o.length<=50),this._renderAuditSection(t,"Broken Internal Links",r,"link",u=>this._renderBrokenLinks(u,r),null,r.length<=50),this._renderAuditSection(t,"Orphaned Media",s,"folder",u=>this._renderOrphanedMedia(u,s),s.length>0?()=>{new Ue(this.plugin.app,`Delete permanently the ${s.length} orphaned media files?

This action is irreversible.`,"Delete all",async()=>{let u=0;for(let m of s)await this.plugin.vaultAudit.deleteOrphan(m)&&u++;new S.Notice(`${u} files deleted.`),this.runScan()},()=>{}).open()}:null,s.length<=50)}_getFileTags(e){let t=this.plugin.app.metadataCache.getFileCache(e),a=[];if(t?.tags&&a.push(...t.tags.map(n=>n.tag.toLowerCase().replace(/^#/,""))),t?.frontmatter?.tags){let n=t.frontmatter.tags;Array.isArray(n)?a.push(...n.map(o=>String(o).toLowerCase().replace(/^#/,""))):typeof n=="string"&&a.push(...n.split(",").map(o=>o.trim().toLowerCase().replace(/^#/,"")))}return a}async _addTagToFile(e,t){let a=t.replace(/^#/,"");await this.plugin.app.fileManager.processFrontMatter(e,n=>{let o=n.tags||[];typeof o=="string"&&(o=o.split(",").map(r=>r.trim())),o.includes(a)||(o.push(a),n.tags=o)})}async _removeTagFromFile(e,t){let a=t.replace(/^#/,"");await this.plugin.app.fileManager.processFrontMatter(e,n=>{let o=n.tags||[];typeof o=="string"&&(o=o.split(",").map(r=>r.trim())),n.tags=o.filter(r=>r!==a)})}async refreshLinksData(){window.stndPanelRefreshLinks=()=>this.refreshLinksData();let e=this.plugin.app.workspace.getActiveFile();if(!e){this.linksData=null;return}this.isLoadingLinks=!0,this.render();try{let t=[],a=this.plugin.app.metadataCache.resolvedLinks||{};for(let[o,r]of Object.entries(a))if(o!==e.path&&r.hasOwnProperty(e.path)){let s=this.plugin.app.vault.getAbstractFileByPath(o);s&&t.push(s)}let n=await An(this.plugin.app,e,this.plugin);typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),this.linksData={incoming:t,unlinked:n,file:e}}catch(t){console.error("[Standard] Error loading links data",t)}finally{this.isLoadingLinks=!1,this.render()}}_renderLinksTab(e){let t=this.plugin.app.workspace.getActiveFile();if(!t){e.createEl("div",{cls:"stnd-panel-empty"}).createEl("p",{text:"No active note open.",cls:"stnd-panel-muted"});return}let a=e.createEl("div",{cls:"stnd-audit-container"}),n=a.createEl("div",{cls:"stnd-audit-header-row"});n.createEl("h3",{text:"Mycelium & Links",cls:"stnd-audit-title"});let o=n.createEl("button",{cls:"stnd-audit-refresh-btn"+(this.isLoadingLinks?" is-loading":""),title:"Refresh mentions"});S.setIcon(o,"refresh-cw"),o.addEventListener("click",()=>this.refreshLinksData());let r=a.createEl("div",{cls:"stnd-panel-mycelium-prefs"});r.style.cssText="display: flex; flex-direction: column; gap: 8px; margin: 0 0 var(--size-4-3) 0; padding: 10px 12px; background: var(--background-secondary); border-radius: var(--radius-m); border: 1px solid var(--background-modifier-border);";let s=(g,y,v,k)=>{let x=r.createEl("div");x.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: 8px;";let L=x.createEl("div");L.style.cssText="display: flex; flex-direction: column; min-width: 0;";let D=L.createEl("span",{text:g});D.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal);";let E=L.createEl("span",{text:y});E.style.cssText="font-size: 11px; color: var(--text-faint);";let b=x.createEl("div",{cls:"checkbox-container"+(v?" is-enabled":"")});b.style.cssText="cursor: pointer; flex-shrink: 0;",b.addEventListener("click",async()=>{let w=!b.hasClass("is-enabled");b.toggleClass("is-enabled",w),await k(w)})};this.plugin.settings.mycelium||(this.plugin.settings.mycelium={enableGhostLinks:!1,enableLinkingCommand:!0,enableCompostFooter:!0});let i=this.plugin.settings.mycelium;if(s("Ghost links","Underline mentions in editor (Alt+click or tap to link)",!!i.enableGhostLinks,async g=>{i.enableGhostLinks=g,window.stndMyceliumSettings=i,await this.plugin.saveSettings(),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),new S.Notice(g?"Ghost links enabled in editor.":"Ghost links disabled.")}),s("Compost footer","Show suggested links at bottom of reading view",!!i.enableCompostFooter,async g=>{i.enableCompostFooter=g,window.stndMyceliumSettings=i,await this.plugin.saveSettings(),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),new S.Notice(g?"Compost footer enabled.":"Compost footer hidden.")}),this.isLoadingLinks){let g=a.createEl("div",{cls:"stnd-audit-loading"}),y=g.createEl("div",{cls:"stnd-audit-spinner"});S.setIcon(y,"loader"),g.createEl("p",{text:"Scanning mycelium & links...",cls:"stnd-audit-loading-text"});return}if(!this.linksData)return;let{incoming:l,unlinked:d}=this.linksData,f="backlink-exclude",h=[],c=[],u=new Set;for(let g of l){if(u.has(g.path))continue;u.add(g.path),this._getFileTags(g).includes(f)?c.push(g):h.push(g)}let m=[];for(let g of d){if(u.has(g.file.path))continue;u.add(g.file.path),this._getFileTags(g.file).includes(f)?c.push(g.file):m.push(g)}this._renderAuditSection(a,"Unlinked mentions (Mycelium)",m,"link-2",g=>this._renderUnlinkedMentionsList(g,m,t,f),null,m.length>0),this._renderAuditSection(a,"Linked mentions (Backlinks)",h,"link",g=>this._renderLinkedMentionsList(g,h,f),null,h.length>0),this._renderAuditSection(a,"Active exclusions",c,"eye-off",g=>this._renderExcludedMentionsList(g,c,f),null,c.length>0)}_renderLinkedMentionsList(e,t,a){t.forEach(n=>{let o=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-row"});o.createEl("div",{cls:"stnd-audit-card-title-wrap"}).createEl("a",{cls:"stnd-audit-note-link",text:n.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(n)});let l=o.createEl("div",{cls:"stnd-audit-card-actions"}).createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",attr:{title:"Hide"}});S.setIcon(l.createEl("span",{cls:"btn-icon"}),"eye-off"),l.addEventListener("click",async()=>{await this._addTagToFile(n,a),new S.Notice(`Hidden: ${n.basename}`),this.refreshLinksData()})})}_renderUnlinkedMentionsList(e,t,a,n){t.forEach(o=>{let r=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-row"}),s=r.createEl("div",{cls:"stnd-audit-card-title-wrap"});s.createEl("a",{cls:"stnd-audit-note-link",text:o.file.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(o.file)}),o.term&&s.createEl("span",{cls:"stnd-panel-meta stnd-audit-card-term",text:`"${o.term}"`});let l=r.createEl("div",{cls:"stnd-audit-card-actions"}),d=l.createEl("button",{cls:"stnd-panel-btn stnd-audit-btn-compact",attr:{title:"Link"}});S.setIcon(d.createEl("span",{cls:"btn-icon"}),"link"),d.addEventListener("click",async()=>{await Rn(this.plugin.app,a,o),this.refreshLinksData()});let f=l.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",attr:{title:"Hide"}});S.setIcon(f.createEl("span",{cls:"btn-icon"}),"eye-off"),f.addEventListener("click",async()=>{await this._addTagToFile(o.file,n),new S.Notice(`Hidden: ${o.file.basename}`),this.refreshLinksData()})})}_renderExcludedMentionsList(e,t,a){t.forEach(n=>{let o=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-row"});o.createEl("div",{cls:"stnd-audit-card-title-wrap"}).createEl("a",{cls:"stnd-audit-note-link",text:n.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(n)});let l=o.createEl("div",{cls:"stnd-audit-card-actions"}).createEl("button",{cls:"stnd-panel-btn stnd-audit-btn-compact",attr:{title:"Restore"}});S.setIcon(l.createEl("span",{cls:"btn-icon"}),"undo"),l.addEventListener("click",async()=>{await this._removeTagFromFile(n,a),new S.Notice(`Restored: ${n.basename}`),this.refreshLinksData()})})}_renderAuditSection(e,t,a,n,o,r=null,s=!0){let i=e.createEl("details",{cls:"stnd-panel-group stnd-audit-section"});a.length>0&&s&&i.setAttribute("open","");let l=i.createEl("summary"),d=l.createEl("div",{cls:"stnd-audit-section-title-wrap"}),f=d.createEl("span",{cls:"stnd-audit-section-icon"});S.setIcon(f,n),d.createEl("span",{text:`${t} (${a.length})`}),r&&l.createEl("button",{cls:"stnd-audit-bulk-btn",text:"Clean"}).addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),r()});let h=i.createEl("div",{cls:"stnd-audit-section-content"});if(a.length===0){let c=h.createEl("div",{cls:"stnd-audit-empty-success"}),u=c.createEl("span",{cls:"stnd-audit-check-icon"});S.setIcon(u,"check"),c.createEl("span",{text:"Everything is in order"})}else o(h)}_renderBrokenEmbeds(e,t){if(t.length>50){let a=e.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"});a.style.margin="0 0 var(--size-4-3) 0";let n=a.createEl("div",{cls:"stnd-audit-banner-text"});n.createEl("strong",{text:"Render Hidden for Safety"}),n.createEl("span",{text:`Displaying the ${t.length} broken media cards is disabled to prevent slowing down Obsidian.`});let o=a.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Show anyway"});o.style.background="var(--interactive-accent)",o.style.color="var(--text-on-accent)",o.addEventListener("click",()=>{a.remove(),this._renderBrokenEmbedsList(e,t)})}else this._renderBrokenEmbedsList(e,t)}_renderBrokenEmbedsList(e,t){t.forEach(a=>{let n=e.createEl("div",{cls:"stnd-audit-card"}),o=n.createEl("div",{cls:"stnd-audit-card-source-row"});o.createEl("a",{cls:"stnd-audit-note-link",text:a.file.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(a.file,{eState:{line:a.line??0}})}),o.createEl("span",{cls:"stnd-audit-badge-type",text:a.isMedia?"media":"note"}),n.createEl("div",{cls:"stnd-audit-card-broken-target",text:`\u21B3 Missing target: ${a.link}`});let s=n.createEl("div",{cls:"stnd-audit-card-actions"}),i=s.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",text:"Search"});S.setIcon(i.createEl("span",{cls:"btn-icon"}),"search");let l=`${a.file.path}::${a.link}`;i.addEventListener("click",async()=>{if(this.searchingCandidates[l]){delete this.searchingCandidates[l],this.render();return}let f=await this.plugin.vaultAudit.findCandidates(a.link);this.searchingCandidates[l]=f,this.render()});let d=s.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-danger stnd-audit-btn-compact",text:"Delete"});if(S.setIcon(d.createEl("span",{cls:"btn-icon"}),"trash"),d.addEventListener("click",async()=>{await this.plugin.vaultAudit.removeBrokenReference(a)&&(new S.Notice("Broken reference deleted."),this.runScan())}),this.searchingCandidates[l]){let f=this.searchingCandidates[l],h=n.createEl("div",{cls:"stnd-audit-candidates-wrap"});f.length===0?h.createEl("div",{text:"No file with this name was found.",cls:"stnd-audit-candidates-empty"}):(h.createEl("div",{text:"Files found (click to link):",cls:"stnd-audit-candidates-title"}),f.forEach(c=>{h.createEl("button",{cls:"stnd-audit-candidate-btn",text:c.path}).addEventListener("click",async()=>{await this.plugin.vaultAudit.resolveBrokenEmbed(a,c.path)&&(new S.Notice("Link successfully repaired!"),delete this.searchingCandidates[l],this.runScan())})}))}})}_renderBrokenLinks(e,t){if(t.length>50){let a=e.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"});a.style.margin="0 0 var(--size-4-3) 0";let n=a.createEl("div",{cls:"stnd-audit-banner-text"});n.createEl("strong",{text:"Rendu masqu\xE9 par s\xE9curit\xE9"}),n.createEl("span",{text:`L'affichage des ${t.length} cartes de liens bris\xE9s est d\xE9sactiv\xE9 pour \xE9viter de ralentir Obsidian. Ces liens pointent g\xE9n\xE9ralement vers des notes futures pr\xE9vues.`});let o=a.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Afficher quand m\xEAme"});o.style.background="var(--interactive-accent)",o.style.color="var(--text-on-accent)",o.addEventListener("click",()=>{a.remove(),this._renderBrokenLinksList(e,t)})}else this._renderBrokenLinksList(e,t)}_renderBrokenLinksList(e,t){t.forEach(a=>{let n=e.createEl("div",{cls:"stnd-audit-card"});n.createEl("div",{cls:"stnd-audit-card-source-row"}).createEl("a",{cls:"stnd-audit-note-link",text:a.file.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(a.file,{eState:{line:a.line??0}})}),n.createEl("div",{cls:"stnd-audit-card-broken-target",text:`\u21B3 Broken link: [[${a.link}]]`});let s=n.createEl("div",{cls:"stnd-audit-card-actions"}),i=s.createEl("button",{cls:"stnd-panel-btn stnd-audit-btn-compact",text:"Create Note"});S.setIcon(i.createEl("span",{cls:"btn-icon"}),"plus"),i.addEventListener("click",async()=>{await this.plugin.vaultAudit.createMissingNote(a)&&(new S.Notice(`Note "${a.link}" created.`),this.runScan())});let l=s.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",text:"Remove Link"});S.setIcon(l.createEl("span",{cls:"btn-icon"}),"link-2"),l.addEventListener("click",async()=>{await this.plugin.vaultAudit.removeBrokenLink(a)&&(new S.Notice("Link converted to plain text."),this.runScan())})})}_renderOrphanedMedia(e,t){if(t.length>50){let a=e.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"});a.style.margin="0 0 var(--size-4-3) 0";let n=a.createEl("div",{cls:"stnd-audit-banner-text"});n.createEl("strong",{text:"Render Hidden for Safety"}),n.createEl("span",{text:`Displaying the ${t.length} orphaned media cards is disabled to prevent slowing down Obsidian.`});let o=a.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Show anyway"});o.style.background="var(--interactive-accent)",o.style.color="var(--text-on-accent)",o.addEventListener("click",()=>{a.remove(),this._renderOrphanedMediaList(e,t)})}else this._renderOrphanedMediaList(e,t)}_renderOrphanedMediaList(e,t){t.forEach(a=>{let n=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-orphan"});if(/\.(png|jpe?g|gif|webp|svg|avif)$/i.test(a.name)){let h=n.createEl("div",{cls:"stnd-audit-orphan-thumb-wrap"}),c=this.app.vault.getResourcePath(a),u=h.createEl("img",{cls:"stnd-audit-orphan-thumb"});u.src=c}let r=n.createEl("div",{cls:"stnd-audit-orphan-info"});r.createEl("div",{text:a.name,cls:"stnd-audit-orphan-name"});let s=Math.round(a.stat.size/102.4)/10,i=s>1e3?`${Math.round(s/102.4)/10} MB`:`${s} KB`;r.createEl("div",{text:`${a.path} (${i})`,cls:"stnd-audit-orphan-path"});let l=n.createEl("div",{cls:"stnd-audit-card-actions"});l.style.marginTop="var(--size-4-2)";let d=l.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",text:"Open"});S.setIcon(d.createEl("span",{cls:"btn-icon"}),"file-text"),d.addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(a)});let f=l.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-danger stnd-audit-btn-compact",text:"Delete"});S.setIcon(f.createEl("span",{cls:"btn-icon"}),"trash"),f.addEventListener("click",()=>{new Ue(this.plugin.app,`Delete permanently the media file "${a.name}"?`,"Delete",async()=>{await this.plugin.vaultAudit.deleteOrphan(a)&&(new S.Notice("Media deleted."),this.runScan())},()=>{}).open()})})}};Ct.exports={StandardGardenView:Ie,STND_PANEL_VIEW:Dt}});var Et=O((xa,Lt)=>{"use strict";var{PluginSettingTab:On,Setting:X}=require("obsidian"),{descWithLinks:ee,DOCS_URLS:te}=q(),Be=class extends On{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"Publication"}),e.createEl("p",{text:"Notes marked with 'publish: true' in their frontmatter appear in your digital garden. Private drafts and notes in excluded folders are never shared online.",cls:"setting-item-description"}),new X(e).setName("Sync all published notes").setDesc(ee("Reconcile notes between your vault and the garden. Local drafts are always preserved. \xA7",[{text:"Learn how sync works \u2192",href:te.sync}])).addButton(t=>t.setButtonText("Sync Now").setCta().onClick(async()=>{await this.plugin.garden.syncAllPublished()})),new X(e).setName("Automatic synchronization").setDesc(ee("Check for updates in the background every 5 minutes. When disabled, notes are only synced when you manually request it. \xA7",[{text:"Learn more \u2192",href:te.sync}])).addToggle(t=>t.setValue(!!this.plugin.settings.autoSync).onChange(async a=>{this.plugin.settings.autoSync=a,this.plugin.settings.autoSyncStartup=a,await this.plugin.saveSettings(),this.plugin.garden&&this.plugin.garden.setupAutoSyncInterval()})),new X(e).setName("Note bottom status indicator").setDesc(ee("A discreet visual accent at the bottom of the active note reflecting its publication state. \xA7",[{text:"Learn more \u2192",href:te.plugin}])).addDropdown(t=>t.addOption("garden","Garden (Organic gradient with animation)").addOption("subtle","Subtle (Minimal accent line)").addOption("hidden","Disabled").setValue(this.plugin.settings.publishIndicatorStyle||"garden").onChange(async a=>{this.plugin.settings.publishIndicatorStyle=a,await this.plugin.saveSettings();let{PublishStatusFeature:n}=J(),o=this.plugin.features.find(r=>r instanceof n);o&&o.refreshAll()})),new X(e).setName("Open in browser after publish").setDesc("Automatically open the live web page in your browser immediately after publishing a note.").addToggle(t=>t.setValue(this.plugin.settings.openAfterPublish).onChange(async a=>{this.plugin.settings.openAfterPublish=a,await this.plugin.saveSettings()})),new X(e).setClass("stnd-advanced-setting").setName("Publish status badge location").setDesc(ee("Choose where the garden status icon appears in Obsidian. \xA7",[{text:"Learn more \u2192",href:te.plugin}])).addDropdown(t=>t.addOption("titlebar","Title bar (Note header)").addOption("statusbar","Status bar").addOption("ribbon","Ribbon bar").addOption("hidden","Hidden").setValue(this.plugin.settings.publishStatusLocation||"titlebar").onChange(async a=>{this.plugin.settings.publishStatusLocation=a,await this.plugin.saveSettings();let{PublishStatusFeature:n}=J(),o=this.plugin.features.find(r=>r instanceof n);o&&o.refreshAll()})),new X(e).setClass("stnd-advanced-setting").setName("Excluded folders").setDesc(ee("Folders completely ignored by the publication engine (comma-separated, e.g. Utopie, Archive). \xA7",[{text:"Configuration guide \u2192",href:te.plugin}])).addText(t=>t.setPlaceholder("Utopie, Archive").setValue(this.plugin.settings.excludedFolders||"").onChange(async a=>{this.plugin.settings.excludedFolders=a.trim(),await this.plugin.saveSettings()}))}};Lt.exports={GardenSettingTab:Be}});var At=O((Ta,Mt)=>{"use strict";var{PluginSettingTab:Pn,Setting:fe,Notice:Un}=require("obsidian"),{descWithLinks:qe,DOCS_URLS:ne}=q(),He=class extends Pn{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"Apparence"}),e.createEl("p",{text:"The Standard Design System guarantees 1:1 typographic fidelity between your local editor and your online garden. Frontmatter tokens and curated typography are rendered directly in the workspace. ",cls:"setting-item-description"}).createEl("a",{text:"View Design System Manual \u2192",href:ne.tokens}),new fe(e).setName("Standard Design System").setDesc(qe("Apply classical typography, fluid vertical rhythm, callouts, and harmonious color palettes across notes. \xA7",[{text:"Learn more \u2192",href:ne.typography}])).addToggle(n=>n.setValue(this.plugin.settings.enableDesignSystem).onChange(async o=>{this.plugin.settings.enableDesignSystem=o,await this.plugin.saveSettings(),this.plugin.design.updateBodyClasses()}));let a=oe();new fe(e).setName("Default Theme").setDesc(qe("Select the default theme for notes that do not specify a theme in their frontmatter. \xA7",[{text:"Browse themes \u2192",href:ne.tokens}])).addDropdown(n=>{n.addOption("","None (Default)"),Object.keys(a).forEach(o=>{n.addOption(o,o)}),n.setValue(this.plugin.settings.defaultTheme||"").onChange(async o=>{this.plugin.settings.defaultTheme=o,await this.plugin.saveSettings(),this.plugin.design.updateBodyClasses()})}),new fe(e).setClass("stnd-advanced-setting").setName("Clear theme cache").setDesc("Forces the plugin to re-scan and reload all theme stylesheets defined in your vault.").addButton(n=>n.setButtonText("Clear Cache").onClick(async()=>{this.plugin.settings.themeCache={},await this.plugin.saveSettings(),await this.plugin.design.updateBodyClasses(),new Un("Theme cache cleared")})),new fe(e).setClass("stnd-advanced-setting").setName("CSS Hooks Reference").setDesc(qe("The plugin continuously reflects active workspace states (such as .stnd-adapter, .stnd-published) onto the workspace. \xA7",[{text:"Read CSS hooks documentation \u2192",href:ne.cssHooks}])).addButton(n=>n.setButtonText("View CSS Hooks").onClick(()=>{window.open(ne.cssHooks,"_blank")}))}};Mt.exports={DesignSystemSettingTab:He}});var Pt=O((Sa,Ot)=>{"use strict";var{PluginSettingTab:In,requestUrl:Rt,setIcon:Bn}=require("obsidian"),{isPublishIntent:qn}=q(),{GardenSettingTab:Hn}=Et(),{DesignSystemSettingTab:Vn}=At(),Ve=class{constructor(e,t,a){this.app=e,this.plugin=t,this.rootTab=a}display(){let{containerEl:e}=this;e.empty();let t=this.plugin.settings.apiUsername;if(!t){this._renderDisconnected(e);return}e.createEl("h2",{text:"Compte"});let n=`${(this.plugin.settings.apiUrl||"https://standard.garden/api").replace(/\/api\/?$/,"")}/@${t}`,o=e.createEl("div");o.style.cssText="display:flex;align-items:center;gap:14px;padding:16px;border:1px solid var(--background-modifier-border);border-radius:12px;margin-bottom:16px;";let r=o.createEl("div",{text:t.slice(0,2).toLowerCase()});r.style.cssText="width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;flex:0 0 auto;background:var(--background-secondary);color:var(--interactive-accent);";let s=o.createEl("div");s.style.cssText="flex:1;min-width:0;";let i=s.createEl("div",{text:`@${t}`});i.style.cssText="font-weight:600;font-size:var(--font-ui-medium);";let l=s.createEl("a",{text:n.replace(/^https?:\/\//,""),href:n});l.setAttribute("target","_blank"),l.style.cssText="font-size:var(--font-ui-smaller);color:var(--text-accent);text-decoration:none;";let d=o.createEl("div");d.style.cssText="display:flex;gap:8px;flex:0 0 auto;";let f=d.createEl("button",{text:"Online"});f.classList.add("mod-cta"),f.onclick=()=>window.open(n,"_blank");let h=d.createEl("button",{text:"Sign out"});h.onclick=async()=>{this.plugin.settings.apiKey="",this.plugin.settings.apiUsername="",this.plugin.statsCache=null,await this.plugin.saveSettings(),this.rootTab?this.rootTab.display():this.display()};let u=(this.plugin.garden?.getPublishableFiles?this.plugin.garden.getPublishableFiles():this.app.vault.getMarkdownFiles()).filter(y=>qn(this.app.metadataCache.getFileCache(y)?.frontmatter)).length,m=e.createEl("div",{cls:"stnd-account-stats-container"}),g=this.plugin.statsCache;g?(this._renderStatsValues(m,g,u),Rt({url:`${this.plugin.settings.apiUrl}/me`,headers:{"x-api-key":this.plugin.settings.apiKey},throw:!1}).then(y=>{y.status>=200&&y.status<300&&(this.plugin.statsCache=y.json,this._updateStatsValues(m,y.json,u))}).catch(()=>{})):(m.createEl("span",{cls:"stnd-account-stats-loading",text:"Loading garden stats..."}),Rt({url:`${this.plugin.settings.apiUrl}/me`,headers:{"x-api-key":this.plugin.settings.apiKey},throw:!1}).then(y=>{if(y.status<200||y.status>=300)throw new Error;return y.json}).then(y=>{this.plugin.statsCache=y,m.empty(),this._renderStatsValues(m,y,u)}).catch(()=>{m.empty(),m.createEl("span",{cls:"stnd-account-stats-loading",text:"Failed to load stats."})}))}_renderDisconnected(e){e.createEl("h2",{text:"Compte"});let t=e.createEl("div");t.style.cssText="text-align:center;padding:32px 20px;border:1px solid var(--background-modifier-border);border-radius:12px;margin-top:8px;";let a=t.createEl("div");a.style.cssText="width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;background:var(--background-secondary);color:var(--interactive-accent);",Bn(a,"leaf");let n=t.createEl("div",{text:"Connect your vault to the web"});n.style.cssText="font-size:var(--font-ui-large);font-weight:600;margin-bottom:8px;";let o=t.createEl("div",{text:"Publish notes to your digital garden with a single status: public frontmatter property.",cls:"setting-item-description"});o.style.cssText="max-width:380px;margin:0 auto 20px;line-height:1.5;";let r=t.createEl("button",{text:"Connect to Garden"});r.classList.add("mod-cta"),r.onclick=()=>this.plugin.garden.startConnect()}_renderStatsValues(e,t,a){let n=e.createEl("div",{cls:"stnd-account-stat-col"});n.createEl("div",{cls:"stnd-account-stat-value stnd-stat-local",text:String(a)}),n.createEl("div",{cls:"stnd-account-stat-label",text:"Local"});let o=e.createEl("div",{cls:"stnd-account-stat-col"});o.createEl("div",{cls:"stnd-account-stat-value stnd-stat-published",text:String(t.notesCount??0)}),o.createEl("div",{cls:"stnd-account-stat-label",text:"Published"});let r=e.createEl("div",{cls:"stnd-account-stat-col"});r.createEl("div",{cls:"stnd-account-stat-value stnd-stat-views",text:String(t.totalViews??0)}),r.createEl("div",{cls:"stnd-account-stat-label",text:"Views"});let s=e.createEl("div",{cls:"stnd-account-stat-col wide"}),i="Never";t.lastSync&&(i=new Date(t.lastSync).toLocaleDateString()),s.createEl("div",{cls:"stnd-account-stat-value medium stnd-stat-sync",text:i}),s.createEl("div",{cls:"stnd-account-stat-label",text:"Last Sync"})}_updateStatsValues(e,t,a){let n=e.querySelector(".stnd-stat-local");n&&n.setText(String(a));let o=e.querySelector(".stnd-stat-published");o&&o.setText(String(t.notesCount??0));let r=e.querySelector(".stnd-stat-views");r&&r.setText(String(t.totalViews??0));let s=e.querySelector(".stnd-stat-sync");if(s){let i="Never";t.lastSync&&(i=new Date(t.lastSync).toLocaleDateString()),s.setText(i)}}},We=class extends In{constructor(e,t){super(e,t),this.plugin=t,this._cleanupAltListeners=null}hide(){super.hide(),this._cleanupAltListeners&&(this._cleanupAltListeners(),this._cleanupAltListeners=null)}display(){let{containerEl:e}=this;e.empty(),e.addClass("stnd-settings-flat"),this._cleanupAltListeners&&(this._cleanupAltListeners(),this._cleanupAltListeners=null);let t=d=>{(d.key==="Alt"||d.altKey)&&e.addClass("stnd-show-advanced")},a=d=>{(d.key==="Alt"||!d.altKey)&&e.removeClass("stnd-show-advanced")};window.addEventListener("keydown",t),window.addEventListener("keyup",a),this._cleanupAltListeners=()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",a)};let n=new Ve(this.app,this.plugin,this);n.containerEl=e.createDiv({cls:"stnd-settings-section"}),n.display();let o=new Hn(this.app,this.plugin);o.containerEl=e.createDiv({cls:"stnd-settings-section"}),o.display();let r=new Vn(this.app,this.plugin);if(r.containerEl=e.createDiv({cls:"stnd-settings-section"}),r.display(),this.plugin.settings.enableMycelium){let{MyceliumSettingTab:d}=de(),f=new d(this.app,this.plugin);f.containerEl=e.createDiv({cls:"stnd-settings-section"}),f.display()}let i=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/.test(navigator.platform)?"\u2325 Option":"Alt";e.createDiv({cls:"stnd-alt-hint"}).createEl("span",{text:`Maintenez la touche ${i} pour r\xE9v\xE9ler les outils avanc\xE9s de maintenance.`})}};Ot.exports={StandardSettingTab:We}});var It=O((Na,Ut)=>{"use strict";var{SuggestModal:Wn,Notice:zn}=require("obsidian"),Gn=oe(),ze=class extends Wn{constructor(e,t,a){super(e),this.plugin=t,this.activeFile=a,this.setPlaceholder("Select a theme for this note..."),this.themes=[{id:"",name:"Default (Inherit / Clear)",desc:"Clear theme property to use vault default"},...Object.keys(Gn).sort((n,o)=>n.localeCompare(o)).map(n=>({id:n,name:n.charAt(0).toUpperCase()+n.slice(1),desc:`Standard theme: ${n}`}))]}getSuggestions(e){let t=(e||"").toLowerCase().trim();return t?this.themes.filter(a=>a.name.toLowerCase().includes(t)||a.id.toLowerCase().includes(t)):this.themes}renderSuggestion(e,t){t.createEl("div",{text:e.name}),t.createEl("small",{text:e.desc,cls:"stnd-panel-meta",attr:{style:"color: var(--text-faint); font-size: 0.85em;"}})}async onChooseSuggestion(e){this.activeFile&&(await this.app.fileManager.processFrontMatter(this.activeFile,t=>{e.id?t.theme=e.id:delete t.theme}),new zn(e.id?`Standard : Th\xE8me d\xE9fini sur "${e.name}".`:"Standard : Th\xE8me r\xE9initialis\xE9 sur la valeur par d\xE9faut."))}};Ut.exports={ThemeSuggestModal:ze}});Object.defineProperty(exports,"__esModule",{value:!0});var H=require("obsidian"),{DEFAULT_SETTINGS:Bt}=q(),Ge=class extends H.Plugin{constructor(){super(...arguments),this.features=[]}async onload(){let e=performance.now();document.body.classList.add("stnd");let t=()=>{let o=document.body.classList.contains("theme-dark");document.body.setAttribute("data-theme",o?"dark":"light")};t(),this.themeObserver=new MutationObserver(o=>{for(let r of o)r.attributeName==="class"&&t()}),this.themeObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]});let a=await this.loadData();this.isFirstInstall=a===null,this.settings=Object.assign({},Bt,a);let{DesignSystemFeature:n}=rt();this.features=[],this.settings.enableDesignSystem&&(this.design=new n(this.app,this),this.features.push(this.design)),await Promise.all(this.features.map(o=>o.load())),this.design&&this.design.applyStartupSnapshotSynchronously(),this.app.workspace.onLayoutReady(()=>{this.loadRemainingFeatures(e)})}async loadRemainingFeatures(e){let{GardenFeature:t}=ut(),{PublishStatusFeature:a}=J(),{SyntaxPreviewFeature:n}=xt(),{MyceliumFeature:o}=de(),{FeedFeature:r}=Ce();this.garden=new t(this.app,this),this.features.push(this.garden),this.registerObsidianProtocolHandler("standard-connect",c=>{this.garden.handleConnectCallback(c)});let s=[];s.push(new a(this.app,this)),s.push(new r(this.app,this)),this.settings.enableSyntaxPreview!==!1&&s.push(new n(this.app,this)),this.settings.enableMycelium&&(this.mycelium=new o(this.app,this),s.push(this.mycelium)),this.features.push(...s),await Promise.all(s.map(c=>c.load?c.load():Promise.resolve()));let{StandardGardenView:i,STND_PANEL_VIEW:l}=ce();this.registerView(l,c=>new i(c,this));let{StandardSettingTab:d}=Pt();this.settingTab=new d(this.app,this),this.addSettingTab(this.settingTab),this.addRibbonIcon("flower","Standard Garden Panel",()=>{this.activatePanel()}),this.isFirstInstall&&!this.settings.panelOpenedOnInstall&&(this.activatePanel(),this.settings.panelOpenedOnInstall=!0,await this.saveSettings());let{STND_PANEL_VIEW:f}=ce();this.addCommand({id:"open-stnd-panel",name:"Open Garden panel",callback:()=>this.activatePanel(f)}),this.addCommand({id:"open-settings",name:"Open settings",callback:()=>{this.app.setting&&(this.app.setting.open(),this.app.setting.openTabById(this.manifest.id))}}),this.addCommand({id:"publish-current-note",name:"Plant seed (Publish current note)",callback:()=>this.garden.publishCurrentNote()}),this.addCommand({id:"unpublish-current-note",name:"Uproot seed (Remove from garden)",callback:()=>this.garden.unpublishCurrentNote()}),this.addCommand({id:"view-live-version",name:"View live version",callback:()=>this.garden.viewLiveVersion()}),this.addCommand({id:"copy-live-url",name:"Copy live URL to clipboard",callback:()=>this.garden.copyLiveUrl()}),this.addCommand({id:"copy-short-url",name:"Copy short URL (garden-short) to clipboard",callback:()=>this.garden.copyShortUrl()}),this.addCommand({id:"share-current-note",name:"Share note (Open share dialog)",callback:()=>this.garden.shareCurrentNote()}),this.addCommand({id:"check-note-status",name:"Check garden publication status",callback:async()=>{let c=this.app.workspace.getActiveFile();if(!c||c.extension!=="md"){new H.Notice("Standard : Ouvrez une note Markdown.");return}new H.Notice("Standard : V\xE9rification du statut en ligne...");let u=await this.garden.checkNoteStatus(c);u.status==="synced"?new H.Notice(`Standard : "${c.basename}" est \xE0 jour en ligne.`):u.status==="outdated"?new H.Notice(`Standard : Une version plus r\xE9cente de "${c.basename}" existe en ligne.`):u.status==="changed"?new H.Notice(`Standard : Modifications locales non publi\xE9es pour "${c.basename}".`):u.status==="unpublished"?new H.Notice(`Standard : "${c.basename}" n'est pas encore publi\xE9e en ligne.`):new H.Notice(`Standard : Impossible de v\xE9rifier le statut de "${c.basename}".`)}}),this.addCommand({id:"set-visibility-public",name:"Set visibility: Public",callback:()=>this.garden.setNoteVisibility("public")}),this.addCommand({id:"set-visibility-unlisted",name:"Set visibility: Unlisted",callback:()=>this.garden.setNoteVisibility("unlisted")}),this.addCommand({id:"set-visibility-private",name:"Set visibility: Private",callback:()=>this.garden.setNoteVisibility("private")}),this.addCommand({id:"cycle-visibility",name:"Cycle visibility (Public / Unlisted / Private)",callback:()=>this.garden.cycleNoteVisibility()}),this.addCommand({id:"sync-all-published",name:"Tend the garden (Sync all notes)",callback:()=>this.garden.syncAllPublished()}),this.addCommand({id:"download-new-notes",name:"Harvest seeds (Download new notes from garden)",callback:()=>this.garden.downloadNewOnlineNotes()}),this.addCommand({id:"clean-unpublished-notes",name:"Prune garden (Clean up unpublished notes)",callback:()=>this.garden.cleanUnpublishedNotes()}),this.addCommand({id:"ask-garden-ai",name:"Ask Hyphe",callback:()=>this.garden.askGardenAI()}),this.addCommand({id:"set-note-theme",name:"Set note theme",callback:()=>{let c=this.app.workspace.getActiveFile();if(!c||c.extension!=="md"){new H.Notice("Standard : Ouvrez une note Markdown pour d\xE9finir son th\xE8me.");return}let{ThemeSuggestModal:u}=It();new u(this.app,this,c).open()}}),this.addCommand({id:"reset-note-tokens",name:"Reset note styling (Clear design tokens)",callback:async()=>{let c=this.app.workspace.getActiveFile();if(!c||c.extension!=="md"){new H.Notice("Standard : Ouvrez une note Markdown.");return}let{KNOWN_TOKENS:u}=q(),m=0;await this.app.fileManager.processFrontMatter(c,g=>{for(let y of Object.keys(g))!y.startsWith("garden-")&&!y.startsWith("garden_")&&(u.has(y)||y.startsWith("stnd-")||y.startsWith("stnd_"))&&(delete g[y],m++)}),new H.Notice(m>0?`Standard : ${m} token(s) de design r\xE9initialis\xE9(s).`:"Standard : Aucun token personnalis\xE9 sur cette note.")}});let h=performance.now();console.log(`[Standard] Fully loaded in ${Math.round(h-e)}ms (Visuals ready at ~150ms)`)}async onunload(){for(let e of this.features)e.unload&&await e.unload();this.themeObserver&&this.themeObserver.disconnect(),document.body.classList.remove("stnd")}async activatePanel(e){let{STND_PANEL_VIEW:t}=ce(),a=e||t,n=this.app.workspace.getLeavesOfType(a);if(n.length){this.app.workspace.revealLeaf(n[0]);return}let o=this.app.workspace.getRightLeaf(!1);await o.setViewState({type:a,active:!0}),this.app.workspace.revealLeaf(o)}updateRibbonIconsVisibility(){}async loadSettings(){let e=await this.loadData();this.settings=Object.assign({},Bt,e);let t=!1;this.settings.themeCache&&(delete this.settings.themeCache,t=!0),this.settings.snippets&&this.settings.snippets.globalCache&&(delete this.settings.snippets.globalCache,t=!0),t&&(console.log("[Standard] Purging heavy caches from data.json..."),await this.saveSettings())}async saveSettings(){await this.saveData(this.settings)}};module.exports=Ge;
