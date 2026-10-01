"use strict";var nn=Object.defineProperty;var Fi=Object.getOwnPropertyDescriptor;var Ai=Object.getOwnPropertyNames;var Di=Object.prototype.hasOwnProperty;var Oi=(a,e,t)=>e in a?nn(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var E=(a,e,t)=>()=>{if(t)throw t[0];try{return a&&(e=a(a=0)),e}catch(n){throw t=[n],n}};var j=(a,e)=>()=>{try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},kt=(a,e)=>{for(var t in e)nn(a,t,{get:e[t],enumerable:!0})},Mi=(a,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Ai(e))!Di.call(a,o)&&o!==t&&nn(a,o,{get:()=>e[o],enumerable:!(n=Fi(e,o))||n.enumerable});return a};var ho=a=>Mi(nn({},"__esModule",{value:!0}),a);var Qa=(a,e,t)=>Oi(a,typeof e!="symbol"?e+"":e,t);var ts={};kt(ts,{ALL_TOKEN_NAMES:()=>vt,KNOWN_TOKENS_SET:()=>Ri,QUOTED_TOKEN_SET:()=>es,RAW_SANITIZER_MAP:()=>Ii,RAW_TOKEN_NAMES:()=>$a,TOKEN_GROUPS:()=>Ui,TOKEN_MAP_QUOTED:()=>an,TOKEN_MAP_RAW:()=>on,buildTokenStyle:()=>Pi});function Pi(a){if(!a||typeof a!="object")return;let e=[],t=new Set,n=(o,s)=>{if(!t.has(o)&&!(s==null||s==="")){if(es.has(o)){let r=String(s).replace(/^["']|["']$/g,"");e.push(`--${o}: "${r}"`)}else e.push(`--${o}: ${s}`);t.add(o)}};for(let[o]of on)n(o,a[o]);for(let o of an)n(o,a[o]);return e.length>0?e.join("; "):void 0}var on,an,$a,vt,Ri,Ii,es,Ui,mo=E(()=>{"use strict";on=[["accent","color"],["foreground","color"],["background","color"],["color-light-background","color"],["color-light-foreground","color"],["color-light-accent","color"],["color-light-red","color"],["color-light-orange","color"],["color-light-yellow","color"],["color-light-green","color"],["color-light-cyan","color"],["color-light-blue","color"],["color-light-purple","color"],["color-light-pink","color"],["color-light-bold","color"],["color-light-italic","color"],["color-dark-background","color"],["color-dark-foreground","color"],["color-dark-accent","color"],["color-dark-red","color"],["color-dark-orange","color"],["color-dark-yellow","color"],["color-dark-green","color"],["color-dark-cyan","color"],["color-dark-blue","color"],["color-dark-purple","color"],["color-dark-pink","color"],["color-dark-bold","color"],["color-dark-italic","color"],["font-header-weight","value"],["font-header-letter-spacing","number"],["font-header-line-height","number"],["font-header-style","value"],["font-header-feature","value"],["font-header-variation","value"],["font-weight","value"],["font-weight-bold","value"],["font-feature","value"],["font-variation","value"],["font-monospace-feature","value"],["font-monospace-variation","value"],["font-interface-feature","value"],["font-interface-variation","value"],["optical-ratio","number"],["font-density","number"],["color-header","color"],["color-bold","color"],["color-italic","color"],["color-accent","color"],["body-max-width","value"],["line-width","number"],["margin","number"],["margin-block","number"]],an=["font-header","font-text","font-interface","font-monospace"],$a=on.map(([a])=>a),vt=[...$a,...an],Ri=new Set(vt),Ii=new Map(on),es=new Set(an);Ui=[{title:"Color Seeds",keys:["foreground","background","accent"],defaults:{foreground:'"#1c1917"',background:'"#faf7f2"',accent:'"#b45309"'}},{title:"Colors \u2014 Light",keys:["color-light-foreground","color-light-background","color-light-accent","color-light-red","color-light-orange","color-light-yellow","color-light-green","color-light-cyan","color-light-blue","color-light-purple","color-light-pink","color-light-bold","color-light-italic"]},{title:"Colors \u2014 Dark",keys:["color-dark-foreground","color-dark-background","color-dark-accent","color-dark-red","color-dark-orange","color-dark-yellow","color-dark-green","color-dark-cyan","color-dark-blue","color-dark-purple","color-dark-pink","color-dark-bold","color-dark-italic"]},{title:"Colors \u2014 Semantic",keys:["color-accent","color-header","color-bold","color-italic"]},{title:"Typography \u2014 Fonts",keys:["font-header","font-text","font-monospace","font-interface"],defaults:{"font-header":'"Inter"',"font-text":'"Inter"',"font-monospace":'"JetBrains Mono"',"font-interface":'"Inter"'}},{title:"Typography \u2014 Metrics",keys:["optical-ratio","font-density","line-width","font-weight","font-weight-bold","font-header-weight","font-header-letter-spacing","font-header-line-height","font-header-style"],defaults:{"optical-ratio":"1.414","font-density":"1.5","line-width":"65ch","font-weight":"400","font-weight-bold":"700","font-header-weight":"700"}},{title:"Typography \u2014 Advanced",keys:["font-feature","font-variation","font-header-feature","font-header-variation","font-monospace-feature","font-monospace-variation","font-interface-feature","font-interface-variation"]},{title:"Vertical Rhythm",keys:["margin","margin-block"],defaults:{margin:"1rlh","margin-block":"2"}}]});var as={};kt(as,{PROFILE_FIELDS:()=>go,PROFILE_FIELD_NAMES:()=>ns,PROFILE_KEYS:()=>qi,STRUCTURAL_KEYS:()=>yo,applyDesignDefaults:()=>ji,extractDesignDefaults:()=>os,extractProfile:()=>_i});function os(a){if(!a||typeof a!="object")return{};let e={},t=n=>{let o=a[n];o!=null&&o!==""&&(e[n]=o)};a.theme!=null&&a.theme!==""&&(e.theme=a.theme);for(let n of yo){let o=a[n];o==null||o===""||(e[n]=Bi.has(n)?o!=="false"&&o!==!1:o)}for(let n of vt)t(n);return e}function _i(a){let e={design:os(a)};for(let[t]of go){let n=a?.[t];n!=null&&n!==""&&(e[t]=n)}return e}function ji(a,e){return!a||typeof a!="object"?e||{}:{...a,...e||{}}}var go,ns,yo,Bi,qi,ss=E(()=>{"use strict";mo();go=[["garden-avatar","url"],["garden-display-name","text"]],ns=go.map(([a])=>a),yo=["garden-domain","garden-brand","garden-favicon","garden-mycelium","garden-launcher"],Bi=new Set(["garden-mycelium","garden-launcher"]),qi=new Set(["theme",...yo,...vt,...ns])});var ie=j((nd,cs)=>{"use strict";var{ALL_TOKEN_NAMES:Vi,KNOWN_TOKENS_SET:Hi,QUOTED_TOKEN_SET:Ki,TOKEN_GROUPS:Gi,RAW_SANITIZER_MAP:Wi,buildTokenStyle:zi}=(mo(),ho(ts)),{STRUCTURAL_KEYS:rs,PROFILE_KEYS:Ji,PROFILE_FIELD_NAMES:is}=(ss(),ho(as)),Xi=Hi,Zi=Ki,Yi={enableDesignSystem:!0,defaultTheme:"",startupSnapshot:{cssClasses:[],theme:"",customCss:""},themeCache:{},apiKey:"",apiUsername:"",apiUrl:"https://standard.garden/api",openAfterPublish:!1,publishStatusLocation:"titlebar",publishIndicatorStyle:"garden",autoSync:!1,autoSyncStartup:!1,syncDirection:"1way",excludedFolders:"Utopie",panelOpenedOnInstall:!1,mycelium:{enableGhostLinks:!1,enableLinkingCommand:!0,enableCompostFooter:!1}},Qi={plugin:"https://standard.garden/guide/publish/obsidian",sync:"https://standard.garden/guide/publish/sync",status:"https://standard.garden/guide/publish/status",commands:"https://standard.garden/guide/publish/obsidian-reference#commands",tokens:"https://standard.garden/guide/style/themes",cssHooks:"https://standard.garden/guide/style/css-hooks",typography:"https://standard.garden/guide/style/themes#typography",frontmatter:"https://standard.garden/guide/style/frontmatter#frontmatter",syntax:"https://standard.garden/guide/style/frontmatter#syntax"};function $i(a,e=[]){let t=document.createDocumentFragment();return a.split("\xA7").forEach((o,s)=>{if(o&&t.appendText(o),s<e.length){let r=e[s],i=t.createEl("a",{text:r.text,href:r.href});i.setAttribute("target","_blank"),i.setAttribute("rel","noopener noreferrer"),i.style.color="var(--link-color, var(--interactive-accent))",i.style.textDecoration="underline",i.style.textUnderlineOffset="2px"}}),t}function ls(a){if(a==null)return!1;if(typeof a=="object"&&!(a instanceof Date)){if(a.publish!==void 0)return ls(a.publish);if(typeof a.status=="string"){let e=a.status.trim().toLowerCase();if(e==="public"||e==="published")return!0;if(e==="draft"||e==="private"||e==="internal"||e==="archived")return!1}return!1}if(a===!0)return!0;if(a===!1||a==="")return!1;if(a instanceof Date)return!isNaN(a.getTime());if(typeof a=="string"){let e=a.trim().toLowerCase();return e==="true"?!0:e==="false"?!1:e==="public"||e==="published"?!0:e==="draft"||e==="private"||e==="archived"?!1:!isNaN(new Date(a).getTime())}return!1}function el(a){return/\.(png|jpe?g|gif|webp|svg|avif)$/i.test(a)}function tl(a){return/\.pdf$/i.test(a)}function nl(a){return!a||!/\.[a-z0-9]+$/i.test(a)?!1:!/\.(md|markdown|canvas)$/i.test(a)}function ol(a){let e=(a.split(".").pop()||"").toLowerCase();return{png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",avif:"image/avif",pdf:"application/pdf",zip:"application/zip",gz:"application/gzip",tar:"application/x-tar",mp3:"audio/mpeg",wav:"audio/wav",m4a:"audio/mp4",mp4:"video/mp4",mov:"video/quicktime",webm:"video/webm",txt:"text/plain",csv:"text/csv",json:"application/json",epub:"application/epub+zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}[e]||"application/octet-stream"}var al=new Set(rs),sl=new Set([...rs,...is,"garden-url","garden-short"]);cs.exports={ALL_TOKEN_NAMES:Vi,KNOWN_TOKENS:Xi,FONT_TOKENS:Zi,TOKEN_GROUPS:Gi,RAW_SANITIZER_MAP:Wi,buildTokenStyle:zi,GARDEN_FRONTMATTER_KEYS:sl,STRUCTURAL_KEYS:al,PROFILE_KEYS:Ji,PROFILE_FIELD_NAMES:is,DEFAULT_SETTINGS:Yi,isPublishIntent:ls,isImageFile:el,isPdfFile:tl,isAttachmentFile:nl,getMimeType:ol,descWithLinks:$i,DOCS_URLS:Qi}});var sn=j((od,fs)=>{"use strict";function wo(a){return(Array.isArray(a)?a:String(a||"").split(",")).map(t=>String(t).trim().replace(/^\/+|\/+$/g,"")).filter(Boolean)}function rl(a,e){let t=String(a||"").replace(/^\/+/,"").toLowerCase();return e.some(n=>{let o=n.toLowerCase();return t===o||t.startsWith(o+"/")})}function ds(a,e){let t=String(a||"").replace(/^\/+/,"").toLowerCase();return e.find(n=>{let o=n.toLowerCase();return t===o||t.startsWith(o+"/")})||null}function il(a,e){let t=wo(a);return ds(e,t)||t.push(e),t.join(", ")}function ll(a,e){let t=String(e).toLowerCase();return wo(a).filter(n=>n.toLowerCase()!==t).join(", ")}fs.exports={parseFolderList:wo,isInFolderList:rl,coveringFolder:ds,addFolder:il,removeFolder:ll}});var rn=j((ad,us)=>{"use strict";us.exports={2064:`body.stnd-adapter[data-stnd-theme="2064"] {
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
  --prose-width: 45rem;
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
  --prose-width: 30rlh;
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
  --font-weight-header: 600;
  --font-feature: "onum", "pnum";
  --line-height: 1.55;
  --prose-width: 30rlh;
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
  font-size: var(--scale);
  font-family: var(--font-serif);
}
body.stnd-adapter[data-stnd-theme=academic] {
  /* The abstract: an opening :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) reads as the epigraph/abstract */
}
body.stnd-adapter[data-stnd-theme=academic] .prose > :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote):first-of-type {
  border: 0;
  font-style: italic;
  font-size: var(--scale-d2);
  padding-inline: var(--space-4);
}
body.stnd-adapter[data-stnd-theme=academic] {
  /* Sidenote voice for asides */
}
body.stnd-adapter[data-stnd-theme=academic] aside {
  font-size: var(--scale-d2);
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
  font-size: var(--scale-d3);
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
  --font-weight-header: 400;
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
  --font-weight-header: 700;
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
  font-size: var(--scale-d2);
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
  font-size: var(--scale-d2);
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
  font-size: var(--scale-d2);
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
  --font-ratio: 1.2;
  --font-size: 1.15rem;
  --font-density: 2;
  --prose-width: 38rem;
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
  --callout-default: var(--color-base-30);
}
body.stnd-adapter[data-stnd-theme=book] {
  /* \u2500\u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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
  max-width: var(--prose-width);
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
  padding: var(--space-2) var(--space);
  margin-inline: var(--space-2) !important;
  font-size: var(--scale);
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
  font-size: var(--scale);
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
  left: calc(var(--space) + var(--prose-width));
  margin-top: calc(var(--space) * -1);
  margin-bottom: calc(var(--space) * -2);
  font-size: var(--scale-d2);
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
  --font-weight-header: 600;
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
  --font-weight-header: 800;
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
  border-radius: var(--radius);
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
  --font-weight-header: 500;
  --font-monospace: "Berkeley Mono", "IBM Plex Mono", Menlo, monospace;
  --line-height: 1.6;
  --prose-width: 43rem;
  --optical-ratio: 1.25;
  --font-size: 1.125rem;
  --font-ratio: 1.25;
  --font-density: 1.5;
  --font-line-width: 42rem;
  --radius: var(--trim);
}
body.stnd-adapter[data-stnd-theme=documentation] {
  --color-light-shadow-base: color-mix(in srgb, var(--color-accent) 1%, transparent);
  --color-border:color-mix(in srgb, var(--color-accent) 15%, transparent);
  --shadow-glow: 0 4px var(--leading) oklch(from var(--color-shadow) l c h / 0.05);
  --rhythm-block-scale: 3;
}
body.stnd-adapter[data-stnd-theme=documentation].theme-dark .stnd-code-block, body.stnd-adapter[data-stnd-theme=documentation][data-color-mode=dark] .stnd-code-block {
  background: var(--color-surface-light-1);
}
@media (prefers-color-scheme: dark) {
  body.stnd-adapter[data-stnd-theme=documentation] .stnd-code-block {
    background: var(--color-surface-light-1);
  }
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
body.stnd-adapter[data-stnd-theme=documentation] .prose > .stnd-code-block {
  grid-column: wide;
  margin-inline: 0;
  box-shadow: var(--shadow);
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
  background: var(--color-surface-light-2);
  background-image: none;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-shadow: none;
  padding: 0.1em 0.4em;
  font-size: 0.8em;
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
  border-radius: var(--radius);
  padding: var(--space);
  color: var(--color-foreground);
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
  --prose-width: 38rem;
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
  --font-weight-header: 700;
  --font-header-letter-spacing: 0.03em;
  --line-height: 1.6;
  --optical-ratio: 1.414;
  --prose-width: 38rem;
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
  border-radius: 0 var(--radius) var(--radius) 0;
}
body.stnd-adapter[data-stnd-theme=dyslexia] {
  /* Make links very explicit, not just a subtle color change */
}
body.stnd-adapter[data-stnd-theme=dyslexia] a {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  font-weight: 600;
}`,editorial:`body.stnd-adapter[data-stnd-theme=editorial] {
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
  --font-weight-header: 400;
  --font-header-letter-spacing: 0em;
  --font-display: "Tiempos Headline", "Georgia", serif;
  --font-interface: "Instrument Sans";
  --font-size: 1.15rem;
  --line-height: 1.5;
  --radius: var(--radius-sm);
  --mobile-line-height: 1.2;
  --gap-nl: var(--leading);
  --color-muted: color-mix( in srgb, var(--color-foreground) 75%, var(--color-background) );
  --font-ratio: 1.25;
  --font-density: 1.55;
  --font-line-width: 38rem;
}
body.stnd-adapter[data-stnd-theme=editorial] :is(.callout-title, .callout-title-inner),
body.stnd-adapter[data-stnd-theme=editorial] > summary {
  padding: 0 var(--space-d2);
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
  font-weight: var(--font-weight-header);
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
  --page-padding: var(--space-2);
  --optical-ratio: var(--ratio-golden);
  --font-size: 1.0625rem;
  --line-height: 1.5;
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
  --shadow-inset: none;
  --font-monospace: monospace;
  --font-text: "Cargo Diatype";
  --font-header: "Cargo Diatype";
  --font-header-letter-spacing: -0.065em;
  --line-height: 1.2;
  --page-padding: var(--space);
  --font-size: 1.0625rem;
  --font-ratio: 1.333;
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
  --img-padding: var(--space);
}
body.stnd-adapter[data-stnd-theme=gallery] .stnd-toc {
  display: none !important;
}
body.stnd-adapter[data-stnd-theme=gallery] .prose p:has(img) {
  grid-column: full;
  margin-inline: 0 !important;
  margin-block: var(--img-padding);
}
body.stnd-adapter[data-stnd-theme=gallery] {
  /* The placard: narrow, quiet, beside the work in spirit */
}
body.stnd-adapter[data-stnd-theme=gallery] .prose :not(p:has(img)) {
  max-width: var(--prose-width);
}
body.stnd-adapter[data-stnd-theme=gallery] {
  /* Captions recede like wall labels */
}
body.stnd-adapter[data-stnd-theme=gallery] .callout[data-callout=caption] {
  display: block;
  text-align: center;
  font-size: var(--scale-d3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-block-start: calc(var(--img-padding) * -1);
  margin-block-end: var(--img-padding);
  margin-inline: auto;
}
body.stnd-adapter[data-stnd-theme=gallery] :is(.markdown-reading-view blockquote, .markdown-rendered blockquote, .HyperMD-quote) {
  margin: var(--space-6) auto;
  font-size: var(--scale-2);
  padding: var(--space-2);
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
}
body.stnd-adapter[data-stnd-theme=gallery] :is(.markdown-reading-view h2, .HyperMD-header-2),
body.stnd-adapter[data-stnd-theme=gallery] :is(.markdown-reading-view h3, .HyperMD-header-3) {
  margin-block-start: var(--space-10);
}
body.stnd-adapter[data-stnd-theme=gallery] :is(:is(.markdown-reading-view h2, .HyperMD-header-2), :is(.markdown-reading-view h3, .HyperMD-header-3)) + p {
  margin-top: var(--space);
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
  --color-light-italic: var(--color-blue);
  --color-light-bold: var(--color-accent);
  --color-dark-italic: var(--color-blue);
  --color-dark-bold: var(--color-accent);
  --font-monospace: "MonoLisa";
  --bold-weight: 500;
  --font-density: 1.6;
  --font-ratio: 1.333;
  --font-line-width: 38rem;
  --font-size: 1.2rem;
}`,international:`body.stnd-adapter[data-stnd-theme=international] {
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
  --shadow-inset: none;
  --color-muted: var(--color-foreground);
  --color-dark-foreground: #ccc;
  --optical-ratio: var(--ratio-golden);
  --mobile-font-ratio: var(--ratio-golden);
  --font-monospace: "Sohne Mono", monospace;
  --font-text: "Cargo Diatype";
  --font-header-weight: 900;
  --font-header-letter-spacing: -0.065em;
  --line-height: 1.2;
  --page-padding: var(--space);
  --color-surface: var(--color-background);
  --font-header: Inter;
  --font-interface: Inter;
  --prose-width: 38rem;
  --font-size: 1.0625rem;
  --font-ratio: 1.25;
  --font-density: 1.45;
  --font-line-width: 42rem;
}
body.stnd-adapter[data-stnd-theme=international] :is(.callout-title, .callout-title-inner),
body.stnd-adapter[data-stnd-theme=international] > summary {
  padding: 0 var(--space-d2);
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
  --prose-width: 44rem;
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
  --font-weight-header: 400;
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
  font-weight: var(--font-weight-header);
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
  font-size: var(--scale-d5);
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
    --color-photo-frame: var(--color-surface-light-2);
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
  font-size: var(--scale-4);
  letter-spacing: 0.12em;
  padding-block-end: var(--space-2);
}
body.stnd-adapter[data-stnd-theme=reveal] :is(.markdown-reading-view h2, .HyperMD-header-2) {
  font-size: var(--scale-3);
  border-bottom: var(--border);
  padding-block-end: var(--space);
}
body.stnd-adapter[data-stnd-theme=reveal] :is(.markdown-reading-view h3, .HyperMD-header-3) {
  font-size: var(--scale-2);
}
body.stnd-adapter[data-stnd-theme=reveal] {
  /* Leica safety styling */
}
body.stnd-adapter[data-stnd-theme=reveal] .callout {
  border-left: 3px solid var(--color-accent) !important;
  background: var(--color-surface-dark-1) !important;
}
body.stnd-adapter[data-stnd-theme=reveal] {
  /* Technical tables */
}
body.stnd-adapter[data-stnd-theme=reveal] :is(.markdown-reading-view table, .markdown-rendered table, .cm-embed-block:has(table)) th {
  font-family: var(--font-header);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: var(--scale-d3);
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
  font-size: var(--scale-d3) !important;
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
  --page-padding: var(--space-2);
  --gap-block: var(--space-2);
  --gap-mobile-block: var(--space-2);
  --line-height: 1.55;
  --prose-width: 38rem;
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
  --page-padding: var(--space-2);
  --gap-block: var(--space-2);
  --gap-mobile-block: var(--space-2);
  --line-height: 1.55;
  --prose-width: 38rem;
  /* \u2500\u2500\u2500 Custom rules for Venetian \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* burnt umber */ /* lapis-like */
  letter-spacing: 0.004em;
}`}});var ps=j(()=>{(function(a){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var t=a.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism)});var hs=j(()=>{(function(a){a.languages.typescript=a.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),a.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete a.languages.typescript.parameter,delete a.languages.typescript["literal-property"];var e=a.languages.extend("typescript",{});delete e["class-name"],a.languages.typescript["class-name"].inside=e,a.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),a.languages.ts=a.languages.typescript})(Prism)});var ms=j(()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json});var gs=j(()=>{(function(a){var e=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+t.source+"(?:[ 	]+"+e.source+")?|"+e.source+"(?:[ 	]+"+t.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function r(i,l){l=(l||"").replace(/m/g,"")+"m";var c=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<value>>/g,function(){return i});return RegExp(c,l)}a.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return n})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:r(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:r(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:r(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:r(s),lookbehind:!0,greedy:!0},number:{pattern:r(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:e,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},a.languages.yml=a.languages.yaml})(Prism)});var ys=j(()=>{(function(a){var e="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:t,environment:{pattern:RegExp("\\$"+e),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+e),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};a.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+e),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:t}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+e),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},t.inside=a.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=n.variable[1].inside,r=0;r<o.length;r++)s[o[r]]=a.languages.bash[o[r]];a.languages.sh=a.languages.bash,a.languages.shell=a.languages.bash})(Prism)});var bs=j((md,ws)=>{"use strict";ws.exports=`/* --- Font: adobe-jenson-pro --- */
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



`});var Ts=j((gd,Ss)=>{"use strict";var ks=require("obsidian"),{KNOWN_TOKENS:cl,FONT_TOKENS:vs}=ie(),dl=rn();function fl(a){let e=window.Prism;window.Prism=a;try{a.languages.css||ps(),a.languages.typescript||hs(),a.languages.json||ms(),a.languages.yaml||gs(),a.languages.bash||ys()}catch(t){console.error("[Standard] Failed to load bundled Prism languages:",t)}finally{e&&(window.Prism=e)}}var bo=class{constructor(e,t){this.app=e,this.plugin=t,this.appliedClasses=new Set,this.appliedSnippetViewClasses=new Set,this.hasAppliedStartupSnapshot=!1,this.stndFrontmatterElement=null,this.stndThemeElement=null,this.lastAppliedCustomCss="",this.lastAppliedThemeSnippetCss="",this.lastAppliedThemePath="",this.lastAppliedThemeMtime=0,this.frontmatterUpdateTimeout=null,this.snapshotSaveTimeout=null,this.workspaceReadyTimeout=null,this.startupRetryCount=0,this.themeCache={}}getCurrentThemeInfo(){let e=this.app.workspace.getActiveFile(),t=e?this.app.metadataCache.getFileCache(e)?.frontmatter??null:null,n=t&&t.theme!=null?String(t.theme).trim():"";!n&&this.plugin.settings.defaultTheme&&(n=this.plugin.settings.defaultTheme);let o=n?this.app.metadataCache.getFirstLinkpathDest(n,""):null;return{activeFile:e,themeNote:o}}shouldRefreshForChangedFile(e){if(!e)return!0;let{activeFile:t,themeNote:n}=this.getCurrentThemeInfo();return!!(t&&e.path===t.path||n&&e.path===n.path)}async load(){await this.loadThemeCacheFromFile(),this.ensureThemeElement(),this.ensureFontsElement(),this.plugin.registerMarkdownPostProcessor(async e=>{let t=e.querySelectorAll('pre > code[class*="language-"]:not(.is-highlighted)');if(!t.length)return;let n;try{n=await ks.loadPrism()}catch{return}!n||typeof n.highlight!="function"||(fl(n),t.forEach(o=>{if(o.querySelector(".token")){o.classList.add("is-highlighted");return}let s=o.className.match(/language-(\S+)/);if(!s)return;let r=n.languages[s[1]];if(r)try{o.innerHTML=n.highlight(o.textContent,r,s[1]),o.classList.add("is-highlighted")}catch{}}))}),this.plugin.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.updateBodyClasses(),this.updateModeClasses()})),this.plugin.registerEvent(this.app.metadataCache.on("changed",e=>{this.shouldRefreshForChangedFile(e)&&(clearTimeout(this.frontmatterUpdateTimeout),this.frontmatterUpdateTimeout=setTimeout(()=>{this.updateBodyClasses()},50))})),this.plugin.registerEvent(this.app.metadataCache.on("resolve",e=>{this.shouldRefreshForChangedFile(e)&&(this.hasAppliedStartupSnapshot||this.applyStartupSnapshotSynchronously(),clearTimeout(this.frontmatterUpdateTimeout),this.frontmatterUpdateTimeout=setTimeout(()=>{this.updateBodyClasses()},50))})),this.plugin.registerEvent(this.app.workspace.on("layout-change",()=>{this.updateModeClasses()})),this.updateModeClasses(),this.app?.workspace?.onLayoutReady?this.app.workspace.onLayoutReady(()=>{this.onWorkspaceReady()}):this.app.workspace.on("layout-ready",()=>{this.onWorkspaceReady()})}async unload(){this.frontmatterUpdateTimeout&&clearTimeout(this.frontmatterUpdateTimeout),this.workspaceReadyTimeout&&clearTimeout(this.workspaceReadyTimeout),this.snapshotSaveTimeout&&clearTimeout(this.snapshotSaveTimeout),document.body.removeAttribute("data-stnd-theme"),this.stndThemeElement&&this.stndThemeElement.remove(),this.cleanup(),this.clearModeClasses()}onWorkspaceReady(){this.workspaceReadyTimeout=setTimeout(()=>{this.updateBodyClasses(),this.applyStartupSnapshotSynchronously()},50)}ensureThemeElement(){let e=document.getElementById("stnd-theme");e||(e=document.createElement("style"),e.id="stnd-theme",document.head.appendChild(e)),this.stndThemeElement=e}ensureFontsElement(){let e=document.getElementById("stnd-fonts");e||(e=document.createElement("style"),e.id="stnd-fonts",document.head.appendChild(e));try{let t=bs(),n=`${this.plugin.manifest.dir}/fonts`,o=this.app.vault.adapter,s=t.replace(/STND_FONT_URL:([\w.-]+)/g,(r,i)=>o.getResourcePath(`${n}/${i}`));e.textContent!==s&&(e.textContent=s)}catch(t){console.warn("[Standard] Failed to load generated fonts:",t)}}applyThemeCss(e,t){if(!this.stndThemeElement)return;let n=e&&dl[e]||"";n&&(n=n.replace(/\[data-theme="/g,'body.stnd-adapter[data-stnd-theme="'));let o=[n,t].filter(Boolean).join(`

`);this.stndThemeElement.textContent!==o&&(this.stndThemeElement.textContent=o)}async loadThemeCacheFromFile(){let e=`${this.plugin.manifest.dir}/cache-themes.json`;try{if(await this.app.vault.adapter.exists(e)){let t=await this.app.vault.adapter.read(e);this.themeCache=JSON.parse(t)||{}}}catch(t){console.warn("[Standard] Failed to load theme cache:",t)}}async saveThemeCacheToFile(){let e=`${this.plugin.manifest.dir}/cache-themes.json`;try{await this.app.vault.adapter.write(e,JSON.stringify(this.themeCache,null,2))}catch(t){console.warn("[Standard] Failed to save theme cache:",t)}}createStyleElements(){this.ensureThemeElement();let e=document.getElementById("stnd-frontmatter");e||(e=document.createElement("style"),e.id="stnd-frontmatter",this.stndThemeElement&&this.stndThemeElement.nextSibling?document.head.insertBefore(e,this.stndThemeElement.nextSibling):document.head.appendChild(e)),this.stndFrontmatterElement=e}cleanup(){this.clearAllClasses(),this.clearSnippetViewClasses(),this.clearFrontmatterProperties(),this.clearThemeSnippet();let e=document.getElementById("stnd-fonts");e&&e.remove()}saveStartupSnapshot(e,t){clearTimeout(this.snapshotSaveTimeout),this.snapshotSaveTimeout=setTimeout(async()=>{let n=t&&t.theme!=null?String(t.theme).trim():"";this.plugin.settings.startupSnapshot={cssClasses:Array.from(e).map(o=>o.replace("cssclass-","")),theme:n,customCss:this.lastAppliedCustomCss},await this.plugin.saveSettings()},1e3)}getStructuralClasses(){return["stnd-callouts","stnd-better-highlights","stnd-code-tweaks","stnd-subdued-links","stnd-clean-frontmatter","stnd-text-trim","stnd-base-tweaks","stnd-clean-transclusions"]}async updateBodyClasses(){let e=this.app.workspace.getActiveFile(),t=new Set,n=null;if(this.plugin.settings.enableDesignSystem&&(t.add("stnd-adapter"),this.getStructuralClasses().forEach(s=>t.add(s))),e&&(n=this.app.metadataCache.getFileCache(e)?.frontmatter??null,n)){let s=n.cssclasses||n.cssClasses;s&&(Array.isArray(s)?s:[s]).forEach(f=>{typeof f=="string"&&f.trim().length>0&&t.add("cssclass-"+f.trim().replace(/\s+/g,"-"))});let r=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey,i=n[r];if(i===!0||i==="true"||i==="public"||i==="unlisted"||i==="private"){t.add("stnd-note-published");let c=String(n.visibility||i||"").toLowerCase().trim();c==="public"?t.add("stnd-note-public"):c==="unlisted"?t.add("stnd-note-unlisted"):c==="private"&&t.add("stnd-note-private")}}let o=document.body.classList;this.appliedClasses.forEach(s=>{t.has(s)||o.remove(s)}),t.forEach(s=>{if(!this.appliedClasses.has(s))try{o.add(s)}catch(r){if(r instanceof DOMException)new ks.Notice(`Stnd: Invalid CSS class found: "${s}". Check your frontmatter for classes with spaces or special characters.`);else throw r}}),this.appliedClasses=t,this.plugin.settings.enableDesignSystem?e&&(n?(this.applyFrontmatter(n),await this.applyTheme(n)):await this.applyTheme(null)):(this.clearFrontmatterProperties(),this.clearThemeSnippet(),document.body.removeAttribute("data-stnd-theme"),this.applyThemeCss(null,"")),this.saveStartupSnapshot(t,n)}async applyTheme(e){let t=e&&e.theme!=null?String(e.theme).trim():"";if(!t&&this.plugin.settings.defaultTheme&&(t=this.plugin.settings.defaultTheme),t?document.body.setAttribute("data-stnd-theme",t):document.body.removeAttribute("data-stnd-theme"),!t){this.clearThemeSnippet(),this.applyThemeCss(null,"");return}let n=this.themeCache[t];if(n){let s=n.replace(/body\.stnd-color\b/g,`body.stnd-adapter[data-stnd-theme="${t}"]`);this.lastAppliedThemeSnippetCss=s,this.applyThemeCss(t,s)}else this.lastAppliedThemeSnippetCss&&this.clearThemeSnippet(),this.applyThemeCss(t,"");let o=this.app.metadataCache.getFirstLinkpathDest(t,"");if(!o){cachedCss||this.clearThemeSnippet();return}if(!(this.lastAppliedThemePath===o.path&&this.lastAppliedThemeMtime===o.stat.mtime))try{let s=await this.app.vault.read(o),r=/```css\b.*?\n([\s\S]*?)```/gi,i=[...s.matchAll(r)].map(l=>l[1]).join(`
`);if(i=i.replace(/body\.stnd-color\b/g,`body.stnd-adapter[data-stnd-theme="${t}"]`),i!==this.lastAppliedThemeSnippetCss){this.lastAppliedThemeSnippetCss=i,this.lastAppliedThemePath=o.path,this.lastAppliedThemeMtime=o.stat.mtime,this.applyThemeCss(t,i),this.themeCache[t]=i;let l=Object.keys(this.themeCache);l.length>5&&delete this.themeCache[l[0]],await this.saveThemeCacheToFile()}else this.lastAppliedThemePath=o.path,this.lastAppliedThemeMtime=o.stat.mtime}catch(s){console.error(`Standard: Error loading theme note "${o.path}":`,s),cachedCss||this.clearThemeSnippet()}}clearThemeSnippet(){this.lastAppliedThemeSnippetCss="",this.lastAppliedThemePath="",this.lastAppliedThemeMtime=0}clearAllClasses(){this.appliedClasses.forEach(e=>{document.body.classList.remove(e)}),this.appliedClasses.clear()}clearSnippetViewClasses(){if(!this.appliedSnippetViewClasses||this.appliedSnippetViewClasses.size===0)return;let e=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!e){this.appliedSnippetViewClasses.clear();return}let t=e.querySelectorAll(".markdown-source-view, .markdown-preview-view");this.appliedSnippetViewClasses.forEach(n=>{t.forEach(o=>o.classList.remove(n))}),this.appliedSnippetViewClasses.clear()}addClassToViews(e){let t=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!t)return;t.querySelectorAll(".markdown-source-view, .markdown-preview-view").forEach(o=>o.classList.add(e)),this.appliedSnippetViewClasses.add(e)}applyStartupSnapshotSynchronously(){if(this.hasAppliedStartupSnapshot)return;let e=this.plugin.settings?.startupSnapshot;if(!e){this.hasAppliedStartupSnapshot=!0;return}if(Array.isArray(e.cssClasses)&&e.cssClasses.forEach(t=>{if(typeof t=="string"&&t.trim().length>0){let n="cssclass-"+t.trim();document.body.classList.add(n),this.appliedClasses.add(n)}}),this.plugin.settings.enableDesignSystem&&(document.body.classList.add("stnd-adapter"),this.appliedClasses.add("stnd-adapter"),this.getStructuralClasses().forEach(t=>{document.body.classList.add(t),this.appliedClasses.add(t)})),this.plugin.settings.enableDesignSystem){let t=e.theme||this.plugin.settings.defaultTheme||"";t&&document.body.setAttribute("data-stnd-theme",t),this.createStyleElements(),this.ensureFontsElement();let n=t&&this.themeCache[t]||"";n&&(n=n.replace(/body\.stnd-color\b/g,`body.stnd-adapter[data-stnd-theme="${t}"]`)),this.applyThemeCss(t,n),this.lastAppliedThemeSnippetCss=n,e.customCss&&this.stndFrontmatterElement&&(this.stndFrontmatterElement.textContent=e.customCss,this.lastAppliedCustomCss=e.customCss)}else this.createStyleElements();this.hasAppliedStartupSnapshot=!0}clearModeViewClasses(){let e=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!e)return;let t=e.querySelectorAll(".markdown-source-view, .markdown-preview-view");["stnd-reading","stnd-editing","stnd-source","stnd-canvas","stnd-empty","stnd-base","stnd-webviewer","stnd-note"].forEach(o=>{t.forEach(s=>s.classList.remove(o)),this.appliedSnippetViewClasses&&this.appliedSnippetViewClasses.delete(o)})}applyFrontmatter(e){let t={},n=new Set;for(let[o,s]of Object.entries(e))if(cl.has(o)){let r="--"+o;t[r]=s,vs.has(o)&&String(s).split(",").map(l=>l.trim().replace(/['"]/g,"")).forEach(l=>n.add(l))}if(Object.keys(t).length>0){if(!this.stndFrontmatterElement||!document.getElementById("stnd-frontmatter")){this.stndFrontmatterElement=document.createElement("style"),this.stndFrontmatterElement.id="stnd-frontmatter";let l=document.getElementById("stnd-theme");l&&l.nextSibling?document.head.insertBefore(this.stndFrontmatterElement,l.nextSibling):document.head.appendChild(this.stndFrontmatterElement)}let o=this.stndFrontmatterElement,s=Array.from(n).map(l=>`@import url('https://fonts.googleapis.com/css2?family=${l.replace(/\s+/g,"+")}&display=swap');`).join(`
`),r=Object.entries(t).map(([l,c])=>{let f=l.slice(2),u=vs.has(f)&&typeof c=="string"&&c.includes(" ")&&!c.startsWith("'")&&!c.startsWith('"')?"'"+c+"'":c;return`  ${l}: ${u} !important;`}).join(`
`),i=[s,`html body {
${r}
}`].filter(Boolean).join(`

`);if(i===this.lastAppliedCustomCss)return;o.textContent=i,this.lastAppliedCustomCss=i}else this.clearFrontmatterProperties()}clearFrontmatterProperties(){this.stndFrontmatterElement&&(this.stndFrontmatterElement.textContent="",this.lastAppliedCustomCss="")}updateModeClasses(){let e=document.body,t=document.querySelector(".mod-root .workspace-leaf.mod-active .workspace-leaf-content");if(!t)return;let n=t.getAttribute("data-type"),o=t.getAttribute("data-mode"),s=t.querySelector(".markdown-source-view"),r=s?s.classList.contains("is-live-preview"):!1,i=`${n}|${o}|${r}`;if(t===this._lastModeLeafEl&&i===this._lastModeSignature)return;this._lastModeLeafEl=t,this._lastModeSignature=i,this.clearModeClasses(),this.clearModeViewClasses();let l=null;switch(n){case"markdown":e.classList.add("stnd-note"),this.addClassToViews("stnd-note"),o==="preview"?(l="reading",e.classList.add("stnd-reading"),this.addClassToViews("stnd-reading")):o==="source"&&(l="editing",e.classList.add("stnd-editing"),this.addClassToViews("stnd-editing"),s&&!r&&(e.classList.add("stnd-source"),this.addClassToViews("stnd-source")));break;case"canvas":l="canvas",e.classList.add("stnd-canvas"),this.addClassToViews("stnd-canvas");break;case"empty":l="empty",e.classList.add("stnd-empty"),this.addClassToViews("stnd-empty");break;case"webviewer":l="webviewer",e.classList.add("stnd-webviewer"),this.addClassToViews("stnd-webviewer");break;case"bases":l="base",e.classList.add("stnd-base"),this.addClassToViews("stnd-base");break}}clearModeClasses(){["stnd-reading","stnd-editing","stnd-source","stnd-canvas","stnd-empty","stnd-base","stnd-webviewer","stnd-note"].forEach(t=>{document.body.classList.remove(t),this.appliedClasses.delete(t)})}};Ss.exports={DesignSystemFeature:bo}});var vo=j((yd,xs)=>{"use strict";var ul=require("obsidian"),ko=class extends ul.Modal{constructor(e,t,n,o,s){super(e),this.message=t,this.confirmText=n,this.onConfirm=o,this.onCancel=s||(()=>{})}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),this.message.split(`
`).forEach((s,r)=>{let i=e.createEl("p",{text:s,cls:r===0?"stnd-modal-message":"stnd-modal-detail"})});let t=e.createEl("div",{cls:"stnd-modal-btns"});t.createEl("button",{text:"Cancel",cls:"stnd-modal-btn-cancel"}).addEventListener("click",()=>{this.close(),this.onCancel()}),t.createEl("button",{text:this.confirmText,cls:"mod-cta"}).addEventListener("click",()=>{this.close(),this.onConfirm()})}onClose(){this.contentEl.empty()}};xs.exports={StndConfirmModal:ko}});var Es=j((wd,Ns)=>{"use strict";var St=require("obsidian"),So=class extends St.Modal{constructor(e,t){super(e),this.plugin=t}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),e.addClass("stnd-ask-modal"),e.createEl("h2",{text:"\u2728 Ask Hyphe",cls:"stnd-modal-title"}),e.createEl("p",{text:"Ask Hyphe a question about your digital garden. Hyphe runs in the cloud on standard.garden and searches only across your published notes.",cls:"stnd-modal-detail"});let t=e.createEl("div",{cls:"stnd-ask-cloud-notice"});t.setText("\u{1F310} Online AI \xB7 Only searches notes published to standard.garden. Local drafts remain strictly private."),t.style.fontSize="11px",t.style.color="var(--text-muted)",t.style.marginBottom="14px",t.style.display="inline-flex",t.style.alignItems="center",t.style.gap="6px",t.style.padding="4px 8px",t.style.borderRadius="4px",t.style.background="var(--background-secondary)",t.style.border="1px solid var(--background-modifier-border)";let n=e.createEl("textarea",{cls:"stnd-modal-textarea",placeholder:"e.g., What did I learn about permaculture recently?"});n.style.width="100%",n.style.height="100px",n.style.marginBottom="15px",n.style.padding="10px",n.style.borderRadius="4px",n.style.border="1px solid var(--background-modifier-border)",n.style.background="var(--background-primary)",n.style.color="var(--text-normal)";let o=e.createEl("div",{cls:"stnd-modal-result-container"});o.style.display="none",o.style.marginTop="15px",o.style.padding="15px",o.style.borderRadius="4px",o.style.background="var(--background-secondary)",o.style.borderLeft="4px solid var(--interactive-accent)",o.style.maxHeight="300px",o.style.overflowY="auto";let s=o.createEl("div",{cls:"stnd-modal-result-text"});s.style.lineHeight="1.5",s.style.color="var(--text-normal)";let r=e.createEl("div",{cls:"stnd-modal-btns"});r.createEl("button",{text:"Close",cls:"stnd-modal-btn-cancel"}).addEventListener("click",()=>{this.close()});let l=r.createEl("button",{text:"Ask Hyphe",cls:"mod-cta"}),c=e.createEl("div",{cls:"stnd-ask-horizon"});c.setAttribute("aria-hidden","true"),c.innerHTML=`
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
    `;let f=async(d,u="garden")=>{let h=this.plugin.settings.apiKey;if(!h){new St.Notice("Please connect your standard.garden account in Settings first."),o.style.display="block",s.empty(),s.style.fontStyle="normal",s.setText("Please connect your standard.garden account in Settings first to query Hyphe.");return}o.querySelectorAll(".stnd-modal-mycelium-prompt").forEach(m=>m.remove()),l.disabled=!0,n.disabled=!0,l.text=u==="mycelium"?"Searching Mycelium...":"Hyphe is searching...",o.style.display="block",s.empty(),s.setText(u==="mycelium"?"Hyphe is exploring the public Mycelium and weaving an answer...":"Hyphe is searching your published notes and generating an answer..."),s.style.fontStyle="italic";try{let m=await St.requestUrl({url:`${this.plugin.settings.apiUrl}/ai/ask`,method:"POST",headers:{"Content-Type":"application/json","x-api-key":h},body:JSON.stringify({question:d,scope:u}),throw:!1});if(m.status<200||m.status>=300){let g=m.text;try{let y=JSON.parse(m.text||"{}");y.error&&(g=y.error)}catch{}throw new Error(g||`Server error (${m.status})`)}let p=m.json;if(s.style.fontStyle="normal",p.answer){if(s.empty(),await St.MarkdownRenderer.renderMarkdown(p.answer,s,"",this),s.querySelectorAll("a").forEach(g=>{g.addEventListener("click",y=>{let b=g.getAttribute("href");if(b&&b.startsWith("/")){y.preventDefault();let k=b.replace(/^\/+|\/+$/g,""),T=this.plugin.garden?.bySlug?.get(k)||this.plugin.garden?.byTitleSlug?.get(k)||this.plugin.garden?.byBasenameSlug?.get(k);T?(this.app.workspace.getLeaf(!1).openFile(T),this.close()):this.plugin.settings.apiUsername&&window.open(`https://standard.garden${b}`,"_blank")}})}),p.mycelium_hints?.count>0&&p.scope!=="mycelium"){let g=p.mycelium_hints.count,y=p.mycelium_hints.authors?.length?` (${p.mycelium_hints.authors.join(", ")})`:"",b=o.createEl("div",{cls:"stnd-modal-mycelium-prompt"});b.style.marginTop="14px",b.style.paddingTop="10px",b.style.borderTop="1px dashed var(--background-modifier-border)",b.style.display="flex",b.style.alignItems="center",b.style.justifyContent="space-between",b.style.gap="8px";let k=b.createEl("span",{text:`\u{1F344} Le Myc\xE9lium public a ${g} note${g>1?"s":""} connexe${g>1?"s":""}${y}`});k.style.fontSize="11px",k.style.color="var(--text-muted)";let T=b.createEl("button",{cls:"mod-cta",text:"Explorer le Myc\xE9lium \u2192"});T.style.fontSize="11px",T.style.padding="3px 8px",T.style.cursor="pointer",T.addEventListener("click",()=>{f(d,"mycelium")})}}else s.setText("No response was returned by Hyphe.")}catch(m){s.style.fontStyle="normal",s.setText(`Error: ${m.message}`),console.error("Error during Hyphe query:",m)}finally{l.disabled=!1,n.disabled=!1,l.text="Ask Hyphe"}};l.addEventListener("click",()=>{let d=n.value.trim();if(!d){new St.Notice("Please enter a question.");return}f(d,"garden")})}onClose(){this.contentEl.empty()}};Ns.exports={StndAskModal:So}});var xo=j((bd,Cs)=>{"use strict";var pl=require("obsidian"),To=class extends pl.Modal{constructor(e,t,n){super(e),this.noteTitle=t,this.liveUrl=n}onOpen(){let{contentEl:e}=this;e.addClass("stnd-modal"),e.style.cssText="max-width: 480px; padding: 20px;";let t=e.createEl("h3",{text:"Share Note"});t.style.cssText="margin-bottom: 16px; font-size: var(--font-ui-medium); font-weight: var(--font-semibold);";let n=(l,c)=>{let f=e.createEl("div");f.style.cssText="margin-bottom: 16px;";let d=f.createEl("div");d.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;",d.createEl("span",{text:l,cls:"stnd-panel-meta"});let u=f.createEl("div");u.style.cssText="display: flex; gap: 8px; align-items: center;";let h=u.createEl("input",{cls:"stnd-panel-input",type:"text",value:c});h.readOnly=!0,h.style.cssText="flex: 1; width: 100%; text-align: left; font-size: var(--font-ui-smaller); font-family: var(--font-monospace);";let m=u.createEl("button",{text:"Copy",cls:"stnd-panel-btn stnd-panel-btn-secondary"});m.style.cssText="flex-shrink: 0; font-size: var(--font-ui-smaller);",m.addEventListener("click",()=>{navigator.clipboard.writeText(c),m.setText("Copied!"),setTimeout(()=>m.setText("Copy"),1500)})};n("Direct URL",this.liveUrl);let o=`[${this.noteTitle}](${this.liveUrl})`;n("Markdown Link",o);let s=`<iframe src="${this.liveUrl}" width="100%" height="600" frameborder="0"></iframe>`;n("Embed Iframe",s);let r=e.createEl("div");r.style.cssText="display: flex; justify-content: flex-end; margin-top: 12px;",r.createEl("button",{text:"Close",cls:"stnd-panel-btn"}).addEventListener("click",()=>this.close())}onClose(){this.contentEl.empty()}};Cs.exports={StndShareModal:To}});function _(a){if(a&&typeof a=="object")switch(a[Y]){case de:case xe:return!0}return!1}function B(a){if(a&&typeof a=="object")switch(a[Y]){case ln:case de:case te:case xe:return!0}return!1}var ln,cn,de,No,te,xe,Y,ne,oe,ae,U,R,se,dn,q=E(()=>{ln=Symbol.for("yaml.alias"),cn=Symbol.for("yaml.document"),de=Symbol.for("yaml.map"),No=Symbol.for("yaml.pair"),te=Symbol.for("yaml.scalar"),xe=Symbol.for("yaml.seq"),Y=Symbol.for("yaml.node.type"),ne=a=>!!a&&typeof a=="object"&&a[Y]===ln,oe=a=>!!a&&typeof a=="object"&&a[Y]===cn,ae=a=>!!a&&typeof a=="object"&&a[Y]===de,U=a=>!!a&&typeof a=="object"&&a[Y]===No,R=a=>!!a&&typeof a=="object"&&a[Y]===te,se=a=>!!a&&typeof a=="object"&&a[Y]===xe;dn=a=>(R(a)||_(a))&&!!a.anchor});function le(a,e){let t=Fs(e);oe(a)?Ye(null,a.contents,t,Object.freeze([a]))===ye&&(a.contents=null):Ye(null,a,t,Object.freeze([]))}function Ye(a,e,t,n){let o=As(a,e,t,n);if(B(o)||U(o))return Ds(a,n,o),Ye(a,o,t,n);if(typeof o!="symbol"){if(_(e)){n=Object.freeze(n.concat(e));for(let s=0;s<e.items.length;++s){let r=Ye(s,e.items[s],t,n);if(typeof r=="number")s=r-1;else{if(r===Q)return Q;r===ye&&(e.items.splice(s,1),s-=1)}}}else if(U(e)){n=Object.freeze(n.concat(e));let s=Ye("key",e.key,t,n);if(s===Q)return Q;s===ye&&(e.key=null);let r=Ye("value",e.value,t,n);if(r===Q)return Q;r===ye&&(e.value=null)}}return o}async function $e(a,e){let t=Fs(e);oe(a)?await Qe(null,a.contents,t,Object.freeze([a]))===ye&&(a.contents=null):await Qe(null,a,t,Object.freeze([]))}async function Qe(a,e,t,n){let o=await As(a,e,t,n);if(B(o)||U(o))return Ds(a,n,o),Qe(a,o,t,n);if(typeof o!="symbol"){if(_(e)){n=Object.freeze(n.concat(e));for(let s=0;s<e.items.length;++s){let r=await Qe(s,e.items[s],t,n);if(typeof r=="number")s=r-1;else{if(r===Q)return Q;r===ye&&(e.items.splice(s,1),s-=1)}}}else if(U(e)){n=Object.freeze(n.concat(e));let s=await Qe("key",e.key,t,n);if(s===Q)return Q;s===ye&&(e.key=null);let r=await Qe("value",e.value,t,n);if(r===Q)return Q;r===ye&&(e.value=null)}}return o}function Fs(a){return typeof a=="object"&&(a.Collection||a.Node||a.Value)?Object.assign({Alias:a.Node,Map:a.Node,Scalar:a.Node,Seq:a.Node},a.Value&&{Map:a.Value,Scalar:a.Value,Seq:a.Value},a.Collection&&{Map:a.Collection,Seq:a.Collection},a):a}function As(a,e,t,n){if(typeof t=="function")return t(a,e,n);if(ae(e))return t.Map?.(a,e,n);if(se(e))return t.Seq?.(a,e,n);if(U(e))return t.Pair?.(a,e,n);if(R(e))return t.Scalar?.(a,e,n);if(ne(e))return t.Alias?.(a,e,n)}function Ds(a,e,t){let n=e[e.length-1];if(_(n))n.items[a]=t;else if(U(n))a==="key"?n.key=t:n.value=t;else if(oe(n))n.contents=t;else{let o=ne(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${o} parent`)}}var Q,Ls,ye,Tt=E(()=>{q();Q=Symbol("break visit"),Ls=Symbol("skip children"),ye=Symbol("remove node");le.BREAK=Q;le.SKIP=Ls;le.REMOVE=ye;$e.BREAK=Q;$e.SKIP=Ls;$e.REMOVE=ye});var hl,ml,we,Eo=E(()=>{q();Tt();hl={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},ml=a=>a.replace(/[!,[\]{}]/g,e=>hl[e]),we=class a{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},a.defaultYaml,e),this.tags=Object.assign({},a.defaultTags,t)}clone(){let e=new a(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){let e=new a(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:a.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},a.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:a.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},a.defaultTags),this.atNextDocument=!1);let n=e.trim().split(/[ \t]+/),o=n.shift();switch(o){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;let[s,r]=n;return this.tags[s]=r,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;let[s]=n;if(s==="1.1"||s==="1.2")return this.yaml.version=s,!0;{let r=/^\d+\.\d+$/.test(s);return t(6,`Unsupported YAML version ${s}`,r),!1}}default:return t(0,`Unknown directive ${o}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){let r=e.slice(2,-1);return r==="!"||r==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),r)}let[,n,o]=e.match(/^(.*!)([^!]*)$/s);o||t(`The ${e} tag has no suffix`);let s=this.tags[n];if(s)try{return s+decodeURIComponent(o)}catch(r){return t(String(r)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+ml(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){let t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags),o;if(e&&n.length>0&&B(e.contents)){let s={};le(e.contents,(r,i)=>{B(i)&&i.tag&&(s[i.tag]=!0)}),o=Object.keys(s)}else o=[];for(let[s,r]of n)s==="!!"&&r==="tag:yaml.org,2002:"||(!e||o.some(i=>i.startsWith(r)))&&t.push(`%TAG ${s} ${r}`);return t.join(`
`)}};we.defaultYaml={explicit:!1,version:"1.2"};we.defaultTags={"!!":"tag:yaml.org,2002:"}});function fn(a){if(/[\x00-\x19\s,[\]{}]/.test(a)){let t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(a)}`;throw new Error(t)}return!0}function Co(a){let e=new Set;return le(a,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function Lo(a,e){for(let t=1;;++t){let n=`${a}${t}`;if(!e.has(n))return n}}function Os(a,e){let t=[],n=new Map,o=null;return{onAnchor:s=>{t.push(s),o??(o=Co(a));let r=Lo(e,o);return o.add(r),r},setAnchors:()=>{for(let s of t){let r=n.get(s);if(typeof r=="object"&&r.anchor&&(R(r.node)||_(r.node)))r.node.anchor=r.anchor;else{let i=new Error("Failed to resolve repeated object (this should not happen)");throw i.source=s,i}}},sourceObjects:n}}var un=E(()=>{q();Tt()});function Fe(a,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let o=0,s=n.length;o<s;++o){let r=n[o],i=Fe(a,n,String(o),r);i===void 0?delete n[o]:i!==r&&(n[o]=i)}else if(n instanceof Map)for(let o of Array.from(n.keys())){let s=n.get(o),r=Fe(a,n,o,s);r===void 0?n.delete(o):r!==s&&n.set(o,r)}else if(n instanceof Set)for(let o of Array.from(n)){let s=Fe(a,n,o,o);s===void 0?n.delete(o):s!==o&&(n.delete(o),n.add(s))}else for(let[o,s]of Object.entries(n)){let r=Fe(a,n,o,s);r===void 0?delete n[o]:r!==s&&(n[o]=r)}return a.call(e,t,n)}var Fo=E(()=>{});function z(a,e,t){if(Array.isArray(a))return a.map((n,o)=>z(n,String(o),t));if(a&&typeof a.toJSON=="function"){if(!t||!dn(a))return a.toJSON(e,t);let n={aliasCount:0,count:1,res:void 0};t.anchors.set(a,n),t.onCreate=s=>{n.res=s,delete t.onCreate};let o=a.toJSON(e,t);return t.onCreate&&t.onCreate(o),o}return typeof a=="bigint"&&!t?.keep?Number(a):a}var Ae=E(()=>{q()});var De,pn=E(()=>{Fo();q();Ae();De=class{constructor(e){Object.defineProperty(this,Y,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:o,reviver:s}={}){if(!oe(e))throw new TypeError("A document argument is required");let r={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},i=z(this,"",r);if(typeof o=="function")for(let{count:l,res:c}of r.anchors.values())o(c,l);return typeof s=="function"?Fe(s,{"":i},"",i):i}}});function hn(a,e,t){if(ne(e)){let n=e.resolve(a),o=t&&n&&t.get(n);return o?o.count*o.aliasCount:0}else if(_(e)){let n=0;for(let o of e.items){let s=hn(a,o,t);s>n&&(n=s)}return n}else if(U(e)){let n=hn(a,e.key,t),o=hn(a,e.value,t);return Math.max(n,o)}return 1}var fe,xt=E(()=>{un();Tt();q();pn();Ae();fe=class extends De{constructor(e){super(ln),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if(t?.maxAliasCount===0)throw new ReferenceError("Alias resolution is disabled");let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],le(e,{Node:(s,r)=>{(ne(r)||dn(r))&&n.push(r)}}),t&&(t.aliasResolveCache=n));let o;for(let s of n){if(s===this)break;s.anchor===this.source&&(o=s)}return o}toJSON(e,t){if(!t)return{source:this.source};let{anchors:n,doc:o,maxAliasCount:s}=t,r=this.resolve(o,t);if(!r){let l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let i=n.get(r);if(i||(z(r,null,t),i=n.get(r)),i?.res===void 0){let l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(s>=0&&(i.count+=1,i.aliasCount===0&&(i.aliasCount=hn(o,r,n)),i.count*i.aliasCount>s)){let l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return i.res}toString(e,t,n){let o=`*${this.source}`;if(e){if(fn(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(s)}if(e.implicitKey)return`${o} `}return o}}});var mn,F,W=E(()=>{q();pn();Ae();mn=a=>!a||typeof a!="function"&&typeof a!="object",F=class extends De{constructor(e){super(te),this.value=e}toJSON(e,t){return t?.keep?this.value:z(this.value,e,t)}toString(){return String(this.value)}};F.BLOCK_FOLDED="BLOCK_FOLDED";F.BLOCK_LITERAL="BLOCK_LITERAL";F.PLAIN="PLAIN";F.QUOTE_DOUBLE="QUOTE_DOUBLE";F.QUOTE_SINGLE="QUOTE_SINGLE"});function yl(a,e,t){if(e){let n=t.filter(s=>s.tag===e),o=n.find(s=>!s.format)??n[0];if(!o)throw new Error(`Tag ${e} not found`);return o}return t.find(n=>n.identify?.(a)&&!n.format)}function Ne(a,e,t){if(oe(a)&&(a=a.contents),B(a))return a;if(U(a)){let d=t.schema[de].createNode?.(t.schema,null,t);return d.items.push(a),d}(a instanceof String||a instanceof Number||a instanceof Boolean||typeof BigInt<"u"&&a instanceof BigInt)&&(a=a.valueOf());let{aliasDuplicateObjects:n,onAnchor:o,onTagObj:s,schema:r,sourceObjects:i}=t,l;if(n&&a&&typeof a=="object"){if(l=i.get(a),l)return l.anchor??(l.anchor=o(a)),new fe(l.anchor);l={anchor:null,node:null},i.set(a,l)}e?.startsWith("!!")&&(e=gl+e.slice(2));let c=yl(a,e,r.tags);if(!c){if(a&&typeof a.toJSON=="function"&&(a=a.toJSON()),!a||typeof a!="object"){let d=new F(a);return l&&(l.node=d),d}c=a instanceof Map?r[de]:Symbol.iterator in Object(a)?r[xe]:r[de]}s&&(s(c),delete t.onTagObj);let f=c?.createNode?c.createNode(t.schema,a,t):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(t.schema,a,t):new F(a);return e?f.tag=e:c.default||(f.tag=c.tag),l&&(l.node=f),f}var gl,Nt=E(()=>{xt();q();W();gl="tag:yaml.org,2002:"});function Et(a,e,t){let n=t;for(let o=e.length-1;o>=0;--o){let s=e[o];if(typeof s=="number"&&Number.isInteger(s)&&s>=0){let r=[];r[s]=n,n=r}else n=new Map([[s,n]])}return Ne(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:a,sourceObjects:new Map})}var tt,et,gn=E(()=>{Nt();q();pn();tt=a=>a==null||typeof a=="object"&&!!a[Symbol.iterator]().next().done,et=class extends De{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){let t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>B(n)||U(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(tt(e))this.add(t);else{let[n,...o]=e,s=this.get(n,!0);if(_(s))s.addIn(o,t);else if(s===void 0&&this.schema)this.set(n,Et(this.schema,o,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${o}`)}}deleteIn(e){let[t,...n]=e;if(n.length===0)return this.delete(t);let o=this.get(t,!0);if(_(o))return o.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){let[n,...o]=e,s=this.get(n,!0);return o.length===0?!t&&R(s)?s.value:s:_(s)?s.getIn(o,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!U(t))return!1;let n=t.value;return n==null||e&&R(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){let[t,...n]=e;if(n.length===0)return this.has(t);let o=this.get(t,!0);return _(o)?o.hasIn(n):!1}setIn(e,t){let[n,...o]=e;if(o.length===0)this.set(n,t);else{let s=this.get(n,!0);if(_(s))s.setIn(o,t);else if(s===void 0&&this.schema)this.set(n,Et(this.schema,o,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${o}`)}}}});function ce(a,e){return/^\n+$/.test(a)?a.substring(1):e?a.replace(/^(?! *$)/gm,e):a}var Ms,be,Ct=E(()=>{Ms=a=>a.replace(/^(?!$)(?: $)?/gm,"#");be=(a,e,t)=>a.endsWith(`
`)?ce(t,e):t.includes(`
`)?`
`+ce(t,e):(a.endsWith(" ")?"":" ")+t});function Ft(a,e,t="flow",{indentAtStart:n,lineWidth:o=80,minContentWidth:s=20,onFold:r,onOverflow:i}={}){if(!o||o<0)return a;o<s&&(s=0);let l=Math.max(1+s,1+o-e.length);if(a.length<=l)return a;let c=[],f={},d=o-e.length;typeof n=="number"&&(n>o-Math.max(2,s)?c.push(0):d=o-n);let u,h,m=!1,p=-1,g=-1,y=-1;t===yn&&(p=Rs(a,p,e.length),p!==-1&&(d=p+l));for(let k;k=a[p+=1];){if(t===Lt&&k==="\\"){switch(g=p,a[p+1]){case"x":p+=3;break;case"u":p+=5;break;case"U":p+=9;break;default:p+=1}y=p}if(k===`
`)t===yn&&(p=Rs(a,p,e.length)),d=p+e.length+l,u=void 0;else{if(k===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){let T=a[p+1];T&&T!==" "&&T!==`
`&&T!=="	"&&(u=p)}if(p>=d)if(u)c.push(u),d=u+l,u=void 0;else if(t===Lt){for(;h===" "||h==="	";)h=k,k=a[p+=1],m=!0;let T=p>y+1?p-2:g-1;if(f[T])return a;c.push(T),f[T]=!0,d=T+l,u=void 0}else m=!0}h=k}if(m&&i&&i(),c.length===0)return a;r&&r();let b=a.slice(0,c[0]);for(let k=0;k<c.length;++k){let T=c[k],S=c[k+1]||a.length;T===0?b=`
${e}${a.slice(0,S)}`:(t===Lt&&f[T]&&(b+=`${a[T]}\\`),b+=`
${e}${a.slice(T+1,S)}`)}return b}function Rs(a,e,t){let n=e,o=e+1,s=a[o];for(;s===" "||s==="	";)if(e<o+t)s=a[++e];else{do s=a[++e];while(s&&s!==`
`);n=e,o=e+1,s=a[o]}return n}var Ao,yn,Lt,Is=E(()=>{Ao="flow",yn="block",Lt="quoted"});function wl(a,e,t){if(!e||e<0)return!1;let n=e-t,o=a.length;if(o<=n)return!1;for(let s=0,r=0;s<o;++s)if(a[s]===`
`){if(s-r>n)return!0;if(r=s+1,o-r<=n)return!1}return!0}function At(a,e){let t=JSON.stringify(a);if(e.options.doubleQuotedAsJSON)return t;let{implicitKey:n}=e,o=e.options.doubleQuotedMinMultiLineLength,s=e.indent||(kn(a)?"  ":""),r="",i=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(r+=t.slice(i,l)+"\\ ",l+=1,i=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{r+=t.slice(i,l);let f=t.substr(l+2,4);switch(f){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:f.substr(0,2)==="00"?r+="\\x"+f.substr(2):r+=t.substr(l,6)}l+=5,i=l+1}break;case"n":if(n||t[l+2]==='"'||t.length<o)l+=1;else{for(r+=t.slice(i,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)r+=`
`,l+=2;r+=s,t[l+2]===" "&&(r+="\\"),l+=1,i=l+1}break;default:l+=1}return r=i?r+t.slice(i):t,n?r:Ft(r,s,Lt,bn(e,!1))}function Do(a,e){if(e.options.singleQuote===!1||e.implicitKey&&a.includes(`
`)||/[ \t]\n|\n[ \t]/.test(a))return At(a,e);let t=e.indent||(kn(a)?"  ":""),n="'"+a.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:Ft(n,t,Ao,bn(e,!1))}function nt(a,e){let{singleQuote:t}=e.options,n;if(t===!1)n=At;else{let o=a.includes('"'),s=a.includes("'");o&&!s?n=Do:s&&!o?n=At:n=t?Do:At}return n(a,e)}function wn({comment:a,type:e,value:t},n,o,s){let{blockQuote:r,commentString:i,lineWidth:l}=n.options;if(!r||/\n[\t ]+$/.test(t))return nt(t,n);let c=n.indent||(n.forceBlockIndent||kn(t)?"  ":""),f=r==="literal"?!0:r==="folded"||e===F.BLOCK_FOLDED?!1:e===F.BLOCK_LITERAL?!0:!wl(t,l,c.length);if(!t)return f?`|
`:`>
`;let d,u;for(u=t.length;u>0;--u){let S=t[u-1];if(S!==`
`&&S!=="	"&&S!==" ")break}let h=t.substring(u),m=h.indexOf(`
`);m===-1?d="-":t===h||m!==h.length-1?(d="+",s&&s()):d="",h&&(t=t.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(Oo,`$&${c}`));let p=!1,g,y=-1;for(g=0;g<t.length;++g){let S=t[g];if(S===" ")p=!0;else if(S===`
`)y=g;else break}let b=t.substring(0,y<g?y+1:g);b&&(t=t.substring(b.length),b=b.replace(/\n+/g,`$&${c}`));let T=(p?c?"2":"1":"")+d;if(a&&(T+=" "+i(a.replace(/ ?[\r\n]+/g," ")),o&&o()),!f){let S=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`),x=!1,C=bn(n,!0);r!=="folded"&&e!==F.BLOCK_FOLDED&&(C.onOverflow=()=>{x=!0});let w=Ft(`${b}${S}${h}`,c,yn,C);if(!x)return`>${T}
${c}${w}`}return t=t.replace(/\n+/g,`$&${c}`),`|${T}
${c}${b}${t}${h}`}function bl(a,e,t,n){let{type:o,value:s}=a,{actualString:r,implicitKey:i,indent:l,indentStep:c,inFlow:f}=e;if(i&&s.includes(`
`)||f&&/[[\]{},]/.test(s))return nt(s,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s))return i||f||!s.includes(`
`)?nt(s,e):wn(a,e,t,n);if(!i&&!f&&o!==F.PLAIN&&s.includes(`
`))return wn(a,e,t,n);if(kn(s)){if(l==="")return e.forceBlockIndent=!0,wn(a,e,t,n);if(i&&l===c)return nt(s,e)}let d=s.replace(/\n+/g,`$&
${l}`);if(r){let u=p=>p.default&&p.tag!=="tag:yaml.org,2002:str"&&p.test?.test(d),{compat:h,tags:m}=e.doc.schema;if(m.some(u)||h?.some(u))return nt(s,e)}return i?d:Ft(d,l,Ao,bn(e,!1))}function Ee(a,e,t,n){let{implicitKey:o,inFlow:s}=e,r=typeof a.value=="string"?a:Object.assign({},a,{value:String(a.value)}),{type:i}=a;i!==F.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(i=F.QUOTE_DOUBLE);let l=f=>{switch(f){case F.BLOCK_FOLDED:case F.BLOCK_LITERAL:return o||s?nt(r.value,e):wn(r,e,t,n);case F.QUOTE_DOUBLE:return At(r.value,e);case F.QUOTE_SINGLE:return Do(r.value,e);case F.PLAIN:return bl(r,e,t,n);default:return null}},c=l(i);if(c===null){let{defaultKeyType:f,defaultStringType:d}=e.options,u=o&&f||d;if(c=l(u),c===null)throw new Error(`Unsupported default string type ${u}`)}return c}var bn,kn,Oo,Dt=E(()=>{W();Is();bn=(a,e)=>({indentAtStart:e?a.indent.length:a.indentAtStart,lineWidth:a.options.lineWidth,minContentWidth:a.options.minContentWidth}),kn=a=>/^(%|---|\.\.\.)/m.test(a);try{Oo=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Oo=/\n+(?!\n|$)/g}});function vn(a,e){let t=Object.assign({blockQuote:!0,commentString:Ms,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},a.schema.toStringOptions,e),n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:a,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function kl(a,e){if(e.tag){let o=a.filter(s=>s.tag===e.tag);if(o.length>0)return o.find(s=>s.format===e.format)??o[0]}let t,n;if(R(e)){n=e.value;let o=a.filter(s=>s.identify?.(n));if(o.length>1){let s=o.filter(r=>r.test);s.length>0&&(o=s)}t=o.find(s=>s.format===e.format)??o.find(s=>!s.format)}else n=e,t=a.find(o=>o.nodeClass&&n instanceof o.nodeClass);if(!t){let o=n?.constructor?.name??(n===null?"null":typeof n);throw new Error(`Tag not resolved for ${o} value`)}return t}function vl(a,e,{anchors:t,doc:n}){if(!n.directives)return"";let o=[],s=(R(a)||_(a))&&a.anchor;s&&fn(s)&&(t.add(s),o.push(`&${s}`));let r=a.tag??(e.default?null:e.tag);return r&&o.push(n.directives.tagString(r)),o.join(" ")}function Ce(a,e,t,n){if(U(a))return a.toString(e,t,n);if(ne(a)){if(e.doc.directives)return a.toString(e);if(e.resolvedAliases?.has(a))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(a):e.resolvedAliases=new Set([a]),a=a.resolve(e.doc)}let o,s=B(a)?a:e.doc.createNode(a,{onTagObj:l=>o=l});o??(o=kl(e.doc.schema.tags,s));let r=vl(s,o,e);r.length>0&&(e.indentAtStart=(e.indentAtStart??0)+r.length+1);let i=typeof o.stringify=="function"?o.stringify(s,e,t,n):R(s)?Ee(s,e,t,n):s.toString(e,t,n);return r?R(s)||i[0]==="{"||i[0]==="["?`${r} ${i}`:`${r}
${e.indent}${i}`:i}var Ot=E(()=>{un();q();Ct();Dt()});function Ps({key:a,value:e},t,n,o){let{allNullValues:s,doc:r,indent:i,indentStep:l,options:{commentString:c,indentSeq:f,simpleKeys:d}}=t,u=B(a)&&a.comment||null;if(d){if(u)throw new Error("With simple keys, key nodes cannot have comments");if(_(a)||!B(a)&&typeof a=="object"){let C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let h=!d&&(!a||u&&e==null&&!t.inFlow||_(a)||(R(a)?a.type===F.BLOCK_FOLDED||a.type===F.BLOCK_LITERAL:typeof a=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!h&&(d||!s),indent:i+l});let m=!1,p=!1,g=Ce(a,t,()=>m=!0,()=>p=!0);if(!h&&!t.inFlow&&g.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(t.inFlow){if(s||e==null)return m&&n&&n(),g===""?"?":h?`? ${g}`:g}else if(s&&!d||e==null&&h)return g=`? ${g}`,u&&!m?g+=be(g,t.indent,c(u)):p&&o&&o(),g;m&&(u=null),h?(u&&(g+=be(g,t.indent,c(u))),g=`? ${g}
${i}:`):(g=`${g}:`,u&&(g+=be(g,t.indent,c(u))));let y,b,k;B(e)?(y=!!e.spaceBefore,b=e.commentBefore,k=e.comment):(y=!1,b=null,k=null,e&&typeof e=="object"&&(e=r.createNode(e))),t.implicitKey=!1,!h&&!u&&R(e)&&(t.indentAtStart=g.length+1),p=!1,!f&&l.length>=2&&!t.inFlow&&!h&&se(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let T=!1,S=Ce(e,t,()=>T=!0,()=>p=!0),x=" ";if(u||y||b){if(x=y?`
`:"",b){let C=c(b);x+=`
${ce(C,t.indent)}`}S===""&&!t.inFlow?x===`
`&&k&&(x=`

`):x+=`
${t.indent}`}else if(!h&&_(e)){let C=S[0],w=S.indexOf(`
`),v=w!==-1,N=t.inFlow??e.flow??e.items.length===0;if(v||!N){let O=!1;if(v&&(C==="&"||C==="!")){let L=S.indexOf(" ");C==="&"&&L!==-1&&L<w&&S[L+1]==="!"&&(L=S.indexOf(" ",L+1)),(L===-1||w<L)&&(O=!0)}O||(x=`
${t.indent}`)}}else(S===""||S[0]===`
`)&&(x="");return g+=x+S,t.inFlow?T&&n&&n():k&&!T?g+=be(g,t.indent,c(k)):p&&o&&o(),g}var Us=E(()=>{q();W();Ot();Ct()});function Sn(a,e){(a==="debug"||a==="warn")&&console.warn(e)}var Mo=E(()=>{});function Io(a,e,t){let n=qs(a,t);if(se(n))for(let o of n.items)Ro(a,e,o);else if(Array.isArray(n))for(let o of n)Ro(a,e,o);else Ro(a,e,n)}function Ro(a,e,t){let n=qs(a,t);if(!ae(n))throw new Error("Merge sources must be maps or map aliases");let o=n.toJSON(null,a,Map);for(let[s,r]of o)e instanceof Map?e.has(s)||e.set(s,r):e instanceof Set?e.add(s):Object.prototype.hasOwnProperty.call(e,s)||Object.defineProperty(e,s,{value:r,writable:!0,enumerable:!0,configurable:!0});return e}function qs(a,e){return a&&ne(e)?e.resolve(a.doc,a):e}var Tn,ue,Bs,xn=E(()=>{q();W();Tn="<<",ue={identify:a=>a===Tn||typeof a=="symbol"&&a.description===Tn,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new F(Symbol(Tn)),{addToJSMap:Io}),stringify:()=>Tn},Bs=(a,e)=>(ue.identify(e)||R(e)&&(!e.type||e.type===F.PLAIN)&&ue.identify(e.value))&&a?.doc.schema.tags.some(t=>t.tag===ue.tag&&t.default)});function Nn(a,e,{key:t,value:n}){if(B(t)&&t.addToJSMap)t.addToJSMap(a,e,n);else if(Bs(a,t))Io(a,e,n);else{let o=z(t,"",a);if(e instanceof Map)e.set(o,z(n,o,a));else if(e instanceof Set)e.add(o);else{let s=Sl(t,o,a),r=z(n,s,a);s in e?Object.defineProperty(e,s,{value:r,writable:!0,enumerable:!0,configurable:!0}):e[s]=r}}return e}function Sl(a,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(B(a)&&t?.doc){let n=vn(t.doc,{});n.anchors=new Set;for(let s of t.anchors.keys())n.anchors.add(s.anchor);n.inFlow=!0,n.inStringifyKey=!0;let o=a.toString(n);if(!t.mapKeyWarned){let s=JSON.stringify(o);s.length>40&&(s=s.substring(0,36)+'..."'),Sn(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${s}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return o}return JSON.stringify(e)}var Po=E(()=>{Mo();xn();Ot();q();Ae()});function ot(a,e,t){let n=Ne(a,void 0,t),o=Ne(e,void 0,t);return new H(n,o)}var H,Oe=E(()=>{Nt();Us();Po();q();H=class a{constructor(e,t=null){Object.defineProperty(this,Y,{value:No}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return B(t)&&(t=t.clone(e)),B(n)&&(n=n.clone(e)),new a(t,n)}toJSON(e,t){let n=t?.mapAsMap?new Map:{};return Nn(t,n,this)}toString(e,t,n){return e?.doc?Ps(this,e,t,n):JSON.stringify(this)}}});function Cn(a,e,t){return(e.inFlow??a.flow?xl:Tl)(a,e,t)}function Tl({comment:a,items:e},t,{blockItemPrefix:n,flowChars:o,itemIndent:s,onChompKeep:r,onComment:i}){let{indent:l,options:{commentString:c}}=t,f=Object.assign({},t,{indent:s,type:null}),d=!1,u=[];for(let m=0;m<e.length;++m){let p=e[m],g=null;if(B(p))!d&&p.spaceBefore&&u.push(""),En(t,u,p.commentBefore,d),p.comment&&(g=p.comment);else if(U(p)){let b=B(p.key)?p.key:null;b&&(!d&&b.spaceBefore&&u.push(""),En(t,u,b.commentBefore,d))}d=!1;let y=Ce(p,f,()=>g=null,()=>d=!0);g&&(y+=be(y,s,c(g))),d&&g&&(d=!1),u.push(n+y)}let h;if(u.length===0)h=o.start+o.end;else{h=u[0];for(let m=1;m<u.length;++m){let p=u[m];h+=p?`
${l}${p}`:`
`}}return a?(h+=`
`+ce(c(a),l),i&&i()):d&&r&&r(),h}function xl({items:a},e,{flowChars:t,itemIndent:n}){let{indent:o,indentStep:s,flowCollectionPadding:r,options:{commentString:i}}=e;n+=s;let l=Object.assign({},e,{indent:n,inFlow:!0,type:null}),c=!1,f=0,d=[];for(let m=0;m<a.length;++m){let p=a[m],g=null;if(B(p))p.spaceBefore&&d.push(""),En(e,d,p.commentBefore,!1),p.comment&&(g=p.comment);else if(U(p)){let b=B(p.key)?p.key:null;b&&(b.spaceBefore&&d.push(""),En(e,d,b.commentBefore,!1),b.comment&&(c=!0));let k=B(p.value)?p.value:null;k?(k.comment&&(g=k.comment),k.commentBefore&&(c=!0)):p.value==null&&b?.comment&&(g=b.comment)}g&&(c=!0);let y=Ce(p,l,()=>g=null);c||(c=d.length>f||y.includes(`
`)),m<a.length-1?y+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(c||(c=d.reduce((b,k)=>b+k.length+2,2)+(y.length+2)>e.options.lineWidth)),c&&(y+=",")),g&&(y+=be(y,n,i(g))),d.push(y),f=d.length}let{start:u,end:h}=t;if(d.length===0)return u+h;if(!c){let m=d.reduce((p,g)=>p+g.length+2,2);c=e.options.lineWidth>0&&m>e.options.lineWidth}if(c){let m=u;for(let p of d)m+=p?`
${s}${o}${p}`:`
`;return`${m}
${o}${h}`}else return`${u}${r}${d.join(" ")}${r}${h}`}function En({indent:a,options:{commentString:e}},t,n,o){if(n&&o&&(n=n.replace(/^\n+/,"")),n){let s=ce(e(n),a);t.push(s.trimStart())}}var Uo=E(()=>{q();Ot();Ct()});function Me(a,e){let t=R(e)?e.value:e;for(let n of a)if(U(n)&&(n.key===e||n.key===t||R(n.key)&&n.key.value===t))return n}var G,Re=E(()=>{Uo();Po();gn();q();Oe();W();G=class extends et{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(de,e),this.items=[]}static from(e,t,n){let{keepUndefined:o,replacer:s}=n,r=new this(e),i=(l,c)=>{if(typeof s=="function")c=s.call(t,l,c);else if(Array.isArray(s)&&!s.includes(l))return;(c!==void 0||o)&&r.items.push(ot(l,c,n))};if(t instanceof Map)for(let[l,c]of t)i(l,c);else if(t&&typeof t=="object")for(let l of Object.keys(t))i(l,t[l]);return typeof e.sortMapEntries=="function"&&r.items.sort(e.sortMapEntries),r}add(e,t){let n;U(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new H(e,e?.value):n=new H(e.key,e.value);let o=Me(this.items,n.key),s=this.schema?.sortMapEntries;if(o){if(!t)throw new Error(`Key ${n.key} already set`);R(o.value)&&mn(n.value)?o.value.value=n.value:o.value=n.value}else if(s){let r=this.items.findIndex(i=>s(n,i)<0);r===-1?this.items.push(n):this.items.splice(r,0,n)}else this.items.push(n)}delete(e){let t=Me(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){let o=Me(this.items,e)?.value;return(!t&&R(o)?o.value:o)??void 0}has(e){return!!Me(this.items,e)}set(e,t){this.add(new H(e,t),!0)}toJSON(e,t,n){let o=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(o);for(let s of this.items)Nn(t,o,s);return o}toString(e,t,n){if(!e)return JSON.stringify(this);for(let o of this.items)if(!U(o))throw new Error(`Map items must all be pairs; found ${JSON.stringify(o)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Cn(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}});var pe,at=E(()=>{q();Re();pe={collection:"map",default:!0,nodeClass:G,tag:"tag:yaml.org,2002:map",resolve(a,e){return ae(a)||e("Expected a mapping for this tag"),a},createNode:(a,e,t)=>G.from(a,e,t)}});function Ln(a){let e=R(a)?a.value:a;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}var J,Ie=E(()=>{Nt();Uo();gn();q();W();Ae();J=class extends et{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(xe,e),this.items=[]}add(e){this.items.push(e)}delete(e){let t=Ln(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){let n=Ln(e);if(typeof n!="number")return;let o=this.items[n];return!t&&R(o)?o.value:o}has(e){let t=Ln(e);return typeof t=="number"&&t<this.items.length}set(e,t){let n=Ln(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);let o=this.items[n];R(o)&&mn(t)?o.value=t:this.items[n]=t}toJSON(e,t){let n=[];t?.onCreate&&t.onCreate(n);let o=0;for(let s of this.items)n.push(z(s,String(o++),t));return n}toString(e,t,n){return e?Cn(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){let{replacer:o}=n,s=new this(e);if(t&&Symbol.iterator in Object(t)){let r=0;for(let i of t){if(typeof o=="function"){let l=t instanceof Set?i:String(r++);i=o.call(t,l,i)}s.items.push(Ne(i,void 0,n))}}return s}}});var he,st=E(()=>{q();Ie();he={collection:"seq",default:!0,nodeClass:J,tag:"tag:yaml.org,2002:seq",resolve(a,e){return se(a)||e("Expected a sequence for this tag"),a},createNode:(a,e,t)=>J.from(a,e,t)}});var Pe,Mt=E(()=>{Dt();Pe={identify:a=>typeof a=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:a=>a,stringify(a,e,t,n){return e=Object.assign({actualString:!0},e),Ee(a,e,t,n)}}});var He,Fn=E(()=>{W();He={identify:a=>a==null,createNode:()=>new F(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new F(null),stringify:({source:a},e)=>typeof a=="string"&&He.test.test(a)?a:e.options.nullStr}});var Rt,Bo=E(()=>{W();Rt={identify:a=>typeof a=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:a=>new F(a[0]==="t"||a[0]==="T"),stringify({source:a,value:e},t){if(a&&Rt.test.test(a)){let n=a[0]==="t"||a[0]==="T";if(e===n)return a}return e?t.options.trueStr:t.options.falseStr}}});function Z({format:a,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);let o=typeof n=="number"?n:Number(n);if(!isFinite(o))return isNaN(o)?".nan":o<0?"-.inf":".inf";let s=Object.is(n,-0)?"-0":JSON.stringify(n);if(!a&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(s)&&!s.includes("e")){let r=s.indexOf(".");r<0&&(r=s.length,s+=".");let i=e-(s.length-r-1);for(;i-- >0;)s+="0"}return s}var rt=E(()=>{});var An,Dn,On,qo=E(()=>{W();rt();An={identify:a=>typeof a=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:a=>a.slice(-3).toLowerCase()==="nan"?NaN:a[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Z},Dn={identify:a=>typeof a=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:a=>parseFloat(a),stringify(a){let e=Number(a.value);return isFinite(e)?e.toExponential():Z(a)}},On={identify:a=>typeof a=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(a){let e=new F(parseFloat(a)),t=a.indexOf(".");return t!==-1&&a[a.length-1]==="0"&&(e.minFractionDigits=a.length-t-1),e},stringify:Z}});function _s(a,e,t){let{value:n}=a;return Mn(n)&&n>=0?t+n.toString(e):Z(a)}var Mn,_o,Rn,In,Pn,jo=E(()=>{rt();Mn=a=>typeof a=="bigint"||Number.isInteger(a),_o=(a,e,t,{intAsBigInt:n})=>n?BigInt(a):parseInt(a.substring(e),t);Rn={identify:a=>Mn(a)&&a>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(a,e,t)=>_o(a,2,8,t),stringify:a=>_s(a,8,"0o")},In={identify:Mn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(a,e,t)=>_o(a,0,10,t),stringify:Z},Pn={identify:a=>Mn(a)&&a>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(a,e,t)=>_o(a,2,16,t),stringify:a=>_s(a,16,"0x")}});var js,Vs=E(()=>{at();Fn();st();Mt();Bo();qo();jo();js=[pe,he,Pe,He,Rt,Rn,In,Pn,An,Dn,On]});function Hs(a){return typeof a=="bigint"||Number.isInteger(a)}var Un,Nl,El,Ks,Gs=E(()=>{W();at();st();Un=({value:a})=>JSON.stringify(a),Nl=[{identify:a=>typeof a=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:a=>a,stringify:Un},{identify:a=>a==null,createNode:()=>new F(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Un},{identify:a=>typeof a=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:a=>a==="true",stringify:Un},{identify:Hs,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(a,e,{intAsBigInt:t})=>t?BigInt(a):parseInt(a,10),stringify:({value:a})=>Hs(a)?a.toString():JSON.stringify(a)},{identify:a=>typeof a=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:a=>parseFloat(a),stringify:Un}],El={default:!0,tag:"",test:/^/,resolve(a,e){return e(`Unresolved plain scalar ${JSON.stringify(a)}`),a}},Ks=[pe,he].concat(Nl,El)});var It,Vo=E(()=>{W();Dt();It={identify:a=>a instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(a,e){if(typeof atob=="function"){let t=atob(a.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let o=0;o<t.length;++o)n[o]=t.charCodeAt(o);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),a},stringify({comment:a,type:e,value:t},n,o,s){if(!t)return"";let r=t,i;if(typeof btoa=="function"){let l="";for(let c=0;c<r.length;++c)l+=String.fromCharCode(r[c]);i=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=F.BLOCK_LITERAL),e!==F.QUOTE_DOUBLE){let l=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),c=Math.ceil(i.length/l),f=new Array(c);for(let d=0,u=0;d<c;++d,u+=l)f[d]=i.substr(u,l);i=f.join(e===F.BLOCK_LITERAL?`
`:" ")}return Ee({comment:a,type:e,value:i},n,o,s)}}});function Ho(a,e){if(se(a))for(let t=0;t<a.items.length;++t){let n=a.items[t];if(!U(n)){if(ae(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");let o=n.items[0]||new H(new F(null));if(n.commentBefore&&(o.key.commentBefore=o.key.commentBefore?`${n.commentBefore}
${o.key.commentBefore}`:n.commentBefore),n.comment){let s=o.value??o.key;s.comment=s.comment?`${n.comment}
${s.comment}`:n.comment}n=o}a.items[t]=U(n)?n:new H(n)}}else e("Expected a sequence for this tag");return a}function Ko(a,e,t){let{replacer:n}=t,o=new J(a);o.tag="tag:yaml.org,2002:pairs";let s=0;if(e&&Symbol.iterator in Object(e))for(let r of e){typeof n=="function"&&(r=n.call(e,String(s++),r));let i,l;if(Array.isArray(r))if(r.length===2)i=r[0],l=r[1];else throw new TypeError(`Expected [key, value] tuple: ${r}`);else if(r&&r instanceof Object){let c=Object.keys(r);if(c.length===1)i=c[0],l=r[i];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else i=r;o.items.push(ot(i,l,t))}return o}var Pt,Bn=E(()=>{q();Oe();W();Ie();Pt={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Ho,createNode:Ko}});var it,Ut,Go=E(()=>{q();Ae();Re();Ie();Bn();it=class a extends J{constructor(){super(),this.add=G.prototype.add.bind(this),this.delete=G.prototype.delete.bind(this),this.get=G.prototype.get.bind(this),this.has=G.prototype.has.bind(this),this.set=G.prototype.set.bind(this),this.tag=a.tag}toJSON(e,t){if(!t)return super.toJSON(e);let n=new Map;t?.onCreate&&t.onCreate(n);for(let o of this.items){let s,r;if(U(o)?(s=z(o.key,"",t),r=z(o.value,s,t)):s=z(o,"",t),n.has(s))throw new Error("Ordered maps must not include duplicate keys");n.set(s,r)}return n}static from(e,t,n){let o=Ko(e,t,n),s=new this;return s.items=o.items,s}};it.tag="tag:yaml.org,2002:omap";Ut={collection:"seq",identify:a=>a instanceof Map,nodeClass:it,default:!1,tag:"tag:yaml.org,2002:omap",resolve(a,e){let t=Ho(a,e),n=[];for(let{key:o}of t.items)R(o)&&(n.includes(o.value)?e(`Ordered maps must not include duplicate keys: ${o.value}`):n.push(o.value));return Object.assign(new it,t)},createNode:(a,e,t)=>it.from(a,e,t)}});function Ws({value:a,source:e},t){return e&&(a?Wo:zo).test.test(e)?e:a?t.options.trueStr:t.options.falseStr}var Wo,zo,zs=E(()=>{W();Wo={identify:a=>a===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new F(!0),stringify:Ws},zo={identify:a=>a===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new F(!1),stringify:Ws}});var Js,Xs,Zs,Ys=E(()=>{W();rt();Js={identify:a=>typeof a=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:a=>a.slice(-3).toLowerCase()==="nan"?NaN:a[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Z},Xs={identify:a=>typeof a=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:a=>parseFloat(a.replace(/_/g,"")),stringify(a){let e=Number(a.value);return isFinite(e)?e.toExponential():Z(a)}},Zs={identify:a=>typeof a=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(a){let e=new F(parseFloat(a.replace(/_/g,""))),t=a.indexOf(".");if(t!==-1){let n=a.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:Z}});function qn(a,e,t,{intAsBigInt:n}){let o=a[0];if((o==="-"||o==="+")&&(e+=1),a=a.substring(e).replace(/_/g,""),n){switch(t){case 2:a=`0b${a}`;break;case 8:a=`0o${a}`;break;case 16:a=`0x${a}`;break}let r=BigInt(a);return o==="-"?BigInt(-1)*r:r}let s=parseInt(a,t);return o==="-"?-1*s:s}function Jo(a,e,t){let{value:n}=a;if(Bt(n)){let o=n.toString(e);return n<0?"-"+t+o.substr(1):t+o}return Z(a)}var Bt,Qs,$s,er,tr,nr=E(()=>{rt();Bt=a=>typeof a=="bigint"||Number.isInteger(a);Qs={identify:Bt,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(a,e,t)=>qn(a,2,2,t),stringify:a=>Jo(a,2,"0b")},$s={identify:Bt,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(a,e,t)=>qn(a,1,8,t),stringify:a=>Jo(a,8,"0")},er={identify:Bt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(a,e,t)=>qn(a,0,10,t),stringify:Z},tr={identify:Bt,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(a,e,t)=>qn(a,2,16,t),stringify:a=>Jo(a,16,"0x")}});var lt,qt,Xo=E(()=>{q();Oe();Re();lt=class a extends G{constructor(e){super(e),this.tag=a.tag}add(e){let t;U(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new H(e.key,null):t=new H(e,null),Me(this.items,t.key)||this.items.push(t)}get(e,t){let n=Me(this.items,e);return!t&&U(n)?R(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);let n=Me(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new H(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){let{replacer:o}=n,s=new this(e);if(t&&Symbol.iterator in Object(t))for(let r of t)typeof o=="function"&&(r=o.call(t,r,r)),s.items.push(ot(r,null,n));return s}};lt.tag="tag:yaml.org,2002:set";qt={collection:"map",identify:a=>a instanceof Set,nodeClass:lt,default:!1,tag:"tag:yaml.org,2002:set",createNode:(a,e,t)=>lt.from(a,e,t),resolve(a,e){if(ae(a)){if(a.hasAllNullValues(!0))return Object.assign(new lt,a);e("Set items must all have null values")}else e("Expected a mapping for this tag");return a}}});function Zo(a,e){let t=a[0],n=t==="-"||t==="+"?a.substring(1):a,o=r=>e?BigInt(r):Number(r),s=n.replace(/_/g,"").split(":").reduce((r,i)=>r*o(60)+o(i),o(0));return t==="-"?o(-1)*s:s}function or(a){let{value:e}=a,t=r=>r;if(typeof e=="bigint")t=r=>BigInt(r);else if(isNaN(e)||!isFinite(e))return Z(a);let n="";e<0&&(n="-",e*=t(-1));let o=t(60),s=[e%o];return e<60?s.unshift(0):(e=(e-s[0])/o,s.unshift(e%o),e>=60&&(e=(e-s[0])/o,s.unshift(e))),n+s.map(r=>String(r).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}var _n,jn,ct,Yo=E(()=>{rt();_n={identify:a=>typeof a=="bigint"||Number.isInteger(a),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(a,e,{intAsBigInt:t})=>Zo(a,t),stringify:or},jn={identify:a=>typeof a=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:a=>Zo(a,!1),stringify:or},ct={identify:a=>a instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(a){let e=a.match(ct.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");let[,t,n,o,s,r,i]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0,c=Date.UTC(t,n-1,o,s||0,r||0,i||0,l),f=e[8];if(f&&f!=="Z"){let d=Zo(f,!1);Math.abs(d)<30&&(d*=60),c-=6e4*d}return new Date(c)},stringify:({value:a})=>a?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""}});var Qo,ar=E(()=>{at();Fn();st();Mt();Vo();zs();Ys();nr();xn();Go();Bn();Xo();Yo();Qo=[pe,he,Pe,He,Wo,zo,Qs,$s,er,tr,Js,Xs,Zs,It,ue,Ut,Pt,qt,_n,jn,ct]});function Vn(a,e,t){let n=sr.get(e);if(n&&!a)return t&&!n.includes(ue)?n.concat(ue):n.slice();let o=n;if(!o)if(Array.isArray(a))o=[];else{let s=Array.from(sr.keys()).filter(r=>r!=="yaml11").map(r=>JSON.stringify(r)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${s} or define customTags array`)}if(Array.isArray(a))for(let s of a)o=o.concat(s);else typeof a=="function"&&(o=a(o.slice()));return t&&(o=o.concat(ue)),o.reduce((s,r)=>{let i=typeof r=="string"?rr[r]:r;if(!i){let l=JSON.stringify(r),c=Object.keys(rr).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return s.includes(i)||s.push(i),s},[])}var sr,rr,ir,lr=E(()=>{at();Fn();st();Mt();Bo();qo();jo();Vs();Gs();Vo();xn();Go();Bn();ar();Xo();Yo();sr=new Map([["core",js],["failsafe",[pe,he,Pe]],["json",Ks],["yaml11",Qo],["yaml-1.1",Qo]]),rr={binary:It,bool:Rt,float:On,floatExp:Dn,floatNaN:An,floatTime:jn,int:In,intHex:Pn,intOct:Rn,intTime:_n,map:pe,merge:ue,null:He,omap:Ut,pairs:Pt,seq:he,set:qt,timestamp:ct},ir={"tag:yaml.org,2002:binary":It,"tag:yaml.org,2002:merge":ue,"tag:yaml.org,2002:omap":Ut,"tag:yaml.org,2002:pairs":Pt,"tag:yaml.org,2002:set":qt,"tag:yaml.org,2002:timestamp":ct}});var Cl,Ke,$o=E(()=>{q();at();st();Mt();lr();Cl=(a,e)=>a.key<e.key?-1:a.key>e.key?1:0,Ke=class a{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:o,schema:s,sortMapEntries:r,toStringDefaults:i}){this.compat=Array.isArray(e)?Vn(e,"compat"):e?Vn(null,e):null,this.name=typeof s=="string"&&s||"core",this.knownTags=o?ir:{},this.tags=Vn(t,this.name,n),this.toStringOptions=i??null,Object.defineProperty(this,de,{value:pe}),Object.defineProperty(this,te,{value:Pe}),Object.defineProperty(this,xe,{value:he}),this.sortMapEntries=typeof r=="function"?r:r===!0?Cl:null}clone(){let e=Object.create(a.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}});function cr(a,e){let t=[],n=e.directives===!0;if(e.directives!==!1&&a.directives){let l=a.directives.toString(a);l?(t.push(l),n=!0):a.directives.docStart&&(n=!0)}n&&t.push("---");let o=vn(a,e),{commentString:s}=o.options;if(a.commentBefore){t.length!==1&&t.unshift("");let l=s(a.commentBefore);t.unshift(ce(l,""))}let r=!1,i=null;if(a.contents){if(B(a.contents)){if(a.contents.spaceBefore&&n&&t.push(""),a.contents.commentBefore){let f=s(a.contents.commentBefore);t.push(ce(f,""))}o.forceBlockIndent=!!a.comment,i=a.contents.comment}let l=i?void 0:()=>r=!0,c=Ce(a.contents,o,()=>i=null,l);i&&(c+=be(c,"",s(i))),(c[0]==="|"||c[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${c}`:t.push(c)}else t.push(Ce(a.contents,o));if(a.directives?.docEnd)if(a.comment){let l=s(a.comment);l.includes(`
`)?(t.push("..."),t.push(ce(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=a.comment;l&&r&&(l=l.replace(/^\n+/,"")),l&&((!r||i)&&t[t.length-1]!==""&&t.push(""),t.push(ce(s(l),"")))}return t.join(`
`)+`
`}var dr=E(()=>{q();Ot();Ct()});function dt(a){if(_(a))return!0;throw new Error("Expected a YAML collection as document contents")}var me,_t=E(()=>{xt();gn();q();Oe();Ae();$o();dr();un();Fo();Nt();Eo();me=class a{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Y,{value:cn});let o=null;typeof t=="function"||Array.isArray(t)?o=t:n===void 0&&t&&(n=t,t=void 0);let s=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=s;let{version:r}=s;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new we({version:r}),this.setSchema(r,n),this.contents=e===void 0?null:this.createNode(e,o,n)}clone(){let e=Object.create(a.prototype,{[Y]:{value:cn}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=B(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){dt(this.contents)&&this.contents.add(e)}addIn(e,t){dt(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){let n=Co(this);e.anchor=!t||n.has(t)?Lo(t||"a",n):t}return new fe(e.anchor)}createNode(e,t,n){let o;if(typeof t=="function")e=t.call({"":e},"",e),o=t;else if(Array.isArray(t)){let g=b=>typeof b=="number"||b instanceof String||b instanceof Number,y=t.filter(g).map(String);y.length>0&&(t=t.concat(y)),o=t}else n===void 0&&t&&(n=t,t=void 0);let{aliasDuplicateObjects:s,anchorPrefix:r,flow:i,keepUndefined:l,onTagObj:c,tag:f}=n??{},{onAnchor:d,setAnchors:u,sourceObjects:h}=Os(this,r||"a"),m={aliasDuplicateObjects:s??!0,keepUndefined:l??!1,onAnchor:d,onTagObj:c,replacer:o,schema:this.schema,sourceObjects:h},p=Ne(e,f,m);return i&&_(p)&&(p.flow=!0),u(),p}createPair(e,t,n={}){let o=this.createNode(e,null,n),s=this.createNode(t,null,n);return new H(o,s)}delete(e){return dt(this.contents)?this.contents.delete(e):!1}deleteIn(e){return tt(e)?this.contents==null?!1:(this.contents=null,!0):dt(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return _(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return tt(e)?!t&&R(this.contents)?this.contents.value:this.contents:_(this.contents)?this.contents.getIn(e,t):void 0}has(e){return _(this.contents)?this.contents.has(e):!1}hasIn(e){return tt(e)?this.contents!==void 0:_(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Et(this.schema,[e],t):dt(this.contents)&&this.contents.set(e,t)}setIn(e,t){tt(e)?this.contents=t:this.contents==null?this.contents=Et(this.schema,Array.from(e),t):dt(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new we({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new we({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{let o=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${o}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new Ke(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:o,onAnchor:s,reviver:r}={}){let i={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof o=="number"?o:100},l=z(this.contents,t??"",i);if(typeof s=="function")for(let{count:c,res:f}of i.anchors.values())s(f,c);return typeof r=="function"?Fe(r,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return cr(this,e)}}});var Ge,$,We,jt,Vt=E(()=>{Ge=class extends Error{constructor(e,t,n,o){super(),this.name=e,this.code=n,this.message=o,this.pos=t}},$=class extends Ge{constructor(e,t,n){super("YAMLParseError",e,t,n)}},We=class extends Ge{constructor(e,t,n){super("YAMLWarning",e,t,n)}},jt=(a,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(i=>e.linePos(i));let{line:n,col:o}=t.linePos[0];t.message+=` at line ${n}, column ${o}`;let s=o-1,r=a.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(s>=60&&r.length>80){let i=Math.min(s-39,r.length-79);r="\u2026"+r.substring(i),s-=i-1}if(r.length>80&&(r=r.substring(0,79)+"\u2026"),n>1&&/^ *$/.test(r.substring(0,s))){let i=a.substring(e.lineStarts[n-2],e.lineStarts[n-1]);i.length>80&&(i=i.substring(0,79)+`\u2026
`),r=i+r}if(/[^ ]/.test(r)){let i=1,l=t.linePos[1];l?.line===n&&l.col>o&&(i=Math.max(1,Math.min(l.col-o,80-s)));let c=" ".repeat(s)+"^".repeat(i);t.message+=`:

${r}
${c}
`}}});function ke(a,{flow:e,indicator:t,next:n,offset:o,onError:s,parentIndent:r,startOnNewline:i}){let l=!1,c=i,f=i,d="",u="",h=!1,m=!1,p=null,g=null,y=null,b=null,k=null,T=null,S=null;for(let w of a)switch(m&&(w.type!=="space"&&w.type!=="newline"&&w.type!=="comma"&&s(w.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),m=!1),p&&(c&&w.type!=="comment"&&w.type!=="newline"&&s(p,"TAB_AS_INDENT","Tabs are not allowed as indentation"),p=null),w.type){case"space":!e&&(t!=="doc-start"||n?.type!=="flow-collection")&&w.source.includes("	")&&(p=w),f=!0;break;case"comment":{f||s(w,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");let v=w.source.substring(1)||" ";d?d+=u+v:d=v,u="",c=!1;break}case"newline":c?d?d+=w.source:(!T||t!=="seq-item-ind")&&(l=!0):u+=w.source,c=!0,h=!0,(g||y)&&(b=w),f=!0;break;case"anchor":g&&s(w,"MULTIPLE_ANCHORS","A node can have at most one anchor"),w.source.endsWith(":")&&s(w.offset+w.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=w,S??(S=w.offset),c=!1,f=!1,m=!0;break;case"tag":{y&&s(w,"MULTIPLE_TAGS","A node can have at most one tag"),y=w,S??(S=w.offset),c=!1,f=!1,m=!0;break}case t:(g||y)&&s(w,"BAD_PROP_ORDER",`Anchors and tags must be after the ${w.source} indicator`),T&&s(w,"UNEXPECTED_TOKEN",`Unexpected ${w.source} in ${e??"collection"}`),T=w,c=t==="seq-item-ind"||t==="explicit-key-ind",f=!1;break;case"comma":if(e){k&&s(w,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),k=w,c=!1,f=!1;break}default:s(w,"UNEXPECTED_TOKEN",`Unexpected ${w.type} token`),c=!1,f=!1}let x=a[a.length-1],C=x?x.offset+x.source.length:o;return m&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&s(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),p&&(c&&p.indent<=r||n?.type==="block-map"||n?.type==="block-seq")&&s(p,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:k,found:T,spaceBefore:l,comment:d,hasNewline:h,anchor:g,tag:y,newlineAfterProp:b,end:C,start:S??C}}var Ht=E(()=>{});function Ue(a){if(!a)return null;switch(a.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(a.source.includes(`
`))return!0;if(a.end){for(let e of a.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(let e of a.items){for(let t of e.start)if(t.type==="newline")return!0;if(e.sep){for(let t of e.sep)if(t.type==="newline")return!0}if(Ue(e.key)||Ue(e.value))return!0}return!1;default:return!0}}var Hn=E(()=>{});function Kt(a,e,t){if(e?.type==="flow-collection"){let n=e.end[0];n.indent===a&&(n.source==="]"||n.source==="}")&&Ue(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}var ea=E(()=>{Hn()});function Kn(a,e,t){let{uniqueKeys:n}=a.options;if(n===!1)return!1;let o=typeof n=="function"?n:(s,r)=>s===r||R(s)&&R(r)&&s.value===r.value;return e.some(s=>o(s.key,t))}var ta=E(()=>{q()});function ur({composeNode:a,composeEmptyNode:e},t,n,o,s){let r=s?.nodeClass??G,i=new r(t.schema);t.atRoot&&(t.atRoot=!1);let l=n.offset,c=null;for(let f of n.items){let{start:d,key:u,sep:h,value:m}=f,p=ke(d,{indicator:"explicit-key-ind",next:u??h?.[0],offset:l,onError:o,parentIndent:n.indent,startOnNewline:!0}),g=!p.found;if(g){if(u&&(u.type==="block-seq"?o(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in u&&u.indent!==n.indent&&o(l,"BAD_INDENT",fr)),!p.anchor&&!p.tag&&!h){c=p.end,p.comment&&(i.comment?i.comment+=`
`+p.comment:i.comment=p.comment);continue}(p.newlineAfterProp||Ue(u))&&o(u??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else p.found?.indent!==n.indent&&o(l,"BAD_INDENT",fr);t.atKey=!0;let y=p.end,b=u?a(t,u,p,o):e(t,y,d,null,p,o);t.schema.compat&&Kt(n.indent,u,o),t.atKey=!1,Kn(t,i.items,b)&&o(y,"DUPLICATE_KEY","Map keys must be unique");let k=ke(h??[],{indicator:"map-value-ind",next:m,offset:b.range[2],onError:o,parentIndent:n.indent,startOnNewline:!u||u.type==="block-scalar"});if(l=k.end,k.found){g&&(m?.type==="block-map"&&!k.hasNewline&&o(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&p.start<k.found.offset-1024&&o(b.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));let T=m?a(t,m,k,o):e(t,l,h,null,k,o);t.schema.compat&&Kt(n.indent,m,o),l=T.range[2];let S=new H(b,T);t.options.keepSourceTokens&&(S.srcToken=f),i.items.push(S)}else{g&&o(b.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),k.comment&&(b.comment?b.comment+=`
`+k.comment:b.comment=k.comment);let T=new H(b);t.options.keepSourceTokens&&(T.srcToken=f),i.items.push(T)}}return c&&c<l&&o(c,"IMPOSSIBLE","Map comment with trailing content"),i.range=[n.offset,l,c??l],i}var fr,pr=E(()=>{Oe();Re();Ht();Hn();ea();ta();fr="All mapping items must start at the same column"});function hr({composeNode:a,composeEmptyNode:e},t,n,o,s){let r=s?.nodeClass??J,i=new r(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=n.offset,c=null;for(let{start:f,value:d}of n.items){let u=ke(f,{indicator:"seq-item-ind",next:d,offset:l,onError:o,parentIndent:n.indent,startOnNewline:!0});if(!u.found)if(u.anchor||u.tag||d)d?.type==="block-seq"?o(u.end,"BAD_INDENT","All sequence items must start at the same column"):o(l,"MISSING_CHAR","Sequence item without - indicator");else{c=u.end,u.comment&&(i.comment=u.comment);continue}let h=d?a(t,d,u,o):e(t,u.end,f,null,u,o);t.schema.compat&&Kt(n.indent,d,o),l=h.range[2],i.items.push(h)}return i.range=[n.offset,l,c??l],i}var mr=E(()=>{Ie();Ht();ea()});function ve(a,e,t,n){let o="";if(a){let s=!1,r="";for(let i of a){let{source:l,type:c}=i;switch(c){case"space":s=!0;break;case"comment":{t&&!s&&n(i,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");let f=l.substring(1)||" ";o?o+=r+f:o=f,r="";break}case"newline":o&&(r+=l),s=!0;break;default:n(i,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:o,offset:e}}var ft=E(()=>{});function gr({composeNode:a,composeEmptyNode:e},t,n,o,s){let r=n.start.source==="{",i=r?"flow map":"flow sequence",l=s?.nodeClass??(r?G:J),c=new l(t.schema);c.flow=!0;let f=t.atRoot;f&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let d=n.offset+n.start.source.length;for(let g=0;g<n.items.length;++g){let y=n.items[g],{start:b,key:k,sep:T,value:S}=y,x=ke(b,{flow:i,indicator:"explicit-key-ind",next:k??T?.[0],offset:d,onError:o,parentIndent:n.indent,startOnNewline:!1});if(!x.found){if(!x.anchor&&!x.tag&&!T&&!S){g===0&&x.comma?o(x.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${i}`):g<n.items.length-1&&o(x.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${i}`),x.comment&&(c.comment?c.comment+=`
`+x.comment:c.comment=x.comment),d=x.end;continue}!r&&t.options.strict&&Ue(k)&&o(k,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(g===0)x.comma&&o(x.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${i}`);else if(x.comma||o(x.start,"MISSING_CHAR",`Missing , between ${i} items`),x.comment){let C="";e:for(let w of b)switch(w.type){case"comma":case"space":break;case"comment":C=w.source.substring(1);break e;default:break e}if(C){let w=c.items[c.items.length-1];U(w)&&(w=w.value??w.key),w.comment?w.comment+=`
`+C:w.comment=C,x.comment=x.comment.substring(C.length+1)}}if(!r&&!T&&!x.found){let C=S?a(t,S,x,o):e(t,x.end,T,null,x,o);c.items.push(C),d=C.range[2],oa(S)&&o(C.range,"BLOCK_IN_FLOW",na)}else{t.atKey=!0;let C=x.end,w=k?a(t,k,x,o):e(t,C,b,null,x,o);oa(k)&&o(w.range,"BLOCK_IN_FLOW",na),t.atKey=!1;let v=ke(T??[],{flow:i,indicator:"map-value-ind",next:S,offset:w.range[2],onError:o,parentIndent:n.indent,startOnNewline:!1});if(v.found){if(!r&&!x.found&&t.options.strict){if(T)for(let L of T){if(L===v.found)break;if(L.type==="newline"){o(L,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}x.start<v.found.offset-1024&&o(v.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else S&&("source"in S&&S.source?.[0]===":"?o(S,"MISSING_CHAR",`Missing space after : in ${i}`):o(v.start,"MISSING_CHAR",`Missing , or : between ${i} items`));let N=S?a(t,S,v,o):v.found?e(t,v.end,T,null,v,o):null;N?oa(S)&&o(N.range,"BLOCK_IN_FLOW",na):v.comment&&(w.comment?w.comment+=`
`+v.comment:w.comment=v.comment);let O=new H(w,N);if(t.options.keepSourceTokens&&(O.srcToken=y),r){let L=c;Kn(t,L.items,w)&&o(C,"DUPLICATE_KEY","Map keys must be unique"),L.items.push(O)}else{let L=new G(t.schema);L.flow=!0,L.items.push(O);let I=(N??w).range;L.range=[w.range[0],I[1],I[2]],c.items.push(L)}d=N?N.range[2]:v.end}}let u=r?"}":"]",[h,...m]=n.end,p=d;if(h?.source===u)p=h.offset+h.source.length;else{let g=i[0].toUpperCase()+i.substring(1),y=f?`${g} must end with a ${u}`:`${g} in block collection must be sufficiently indented and end with a ${u}`;o(d,f?"MISSING_CHAR":"BAD_INDENT",y),h&&h.source.length!==1&&m.unshift(h)}if(m.length>0){let g=ve(m,p,t.options.strict,o);g.comment&&(c.comment?c.comment+=`
`+g.comment:c.comment=g.comment),c.range=[n.offset,p,g.offset]}else c.range=[n.offset,p,p];return c}var na,oa,yr=E(()=>{q();Oe();Re();Ie();ft();Ht();Hn();ta();na="Block collections are not allowed within flow collections",oa=a=>a&&(a.type==="block-map"||a.type==="block-seq")});function aa(a,e,t,n,o,s){let r=t.type==="block-map"?ur(a,e,t,n,s):t.type==="block-seq"?hr(a,e,t,n,s):gr(a,e,t,n,s),i=r.constructor;return o==="!"||o===i.tagName?(r.tag=i.tagName,r):(o&&(r.tag=o),r)}function wr(a,e,t,n,o){let s=n.tag,r=s?e.directives.tagName(s.source,u=>o(s,"TAG_RESOLVE_FAILED",u)):null;if(t.type==="block-seq"){let{anchor:u,newlineAfterProp:h}=n,m=u&&s?u.offset>s.offset?u:s:u??s;m&&(!h||h.offset<m.offset)&&o(m,"MISSING_CHAR","Missing newline after block sequence props")}let i=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!s||!r||r==="!"||r===G.tagName&&i==="map"||r===J.tagName&&i==="seq")return aa(a,e,t,o,r);let l=e.schema.tags.find(u=>u.tag===r&&u.collection===i);if(!l){let u=e.schema.knownTags[r];if(u?.collection===i)e.schema.tags.push(Object.assign({},u,{default:!1})),l=u;else return u?o(s,"BAD_COLLECTION_TYPE",`${u.tag} used for ${i} collection, but expects ${u.collection??"scalar"}`,!0):o(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),aa(a,e,t,o,r)}let c=aa(a,e,t,o,r,l),f=l.resolve?.(c,u=>o(s,"TAG_RESOLVE_FAILED",u),e.options)??c,d=B(f)?f:new F(f);return d.range=c.range,d.tag=r,l?.format&&(d.format=l.format),d}var br=E(()=>{q();W();Re();Ie();pr();mr();yr()});function Gn(a,e,t){let n=e.offset,o=Ll(e,a.options.strict,t);if(!o)return{value:"",type:null,comment:"",range:[n,n,n]};let s=o.mode===">"?F.BLOCK_FOLDED:F.BLOCK_LITERAL,r=e.source?Fl(e.source):[],i=r.length;for(let p=r.length-1;p>=0;--p){let g=r[p][1];if(g===""||g==="\r")i=p;else break}if(i===0){let p=o.chomp==="+"&&r.length>0?`
`.repeat(Math.max(1,r.length-1)):"",g=n+o.length;return e.source&&(g+=e.source.length),{value:p,type:s,comment:o.comment,range:[n,g,g]}}let l=e.indent+o.indent,c=e.offset+o.length,f=0;for(let p=0;p<i;++p){let[g,y]=r[p];if(y===""||y==="\r")o.indent===0&&g.length>l&&(l=g.length);else{g.length<l&&t(c+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),o.indent===0&&(l=g.length),f=p,l===0&&!a.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=g.length+y.length+1}for(let p=r.length-1;p>=i;--p)r[p][0].length>l&&(i=p+1);let d="",u="",h=!1;for(let p=0;p<f;++p)d+=r[p][0].slice(l)+`
`;for(let p=f;p<i;++p){let[g,y]=r[p];c+=g.length+y.length+1;let b=y[y.length-1]==="\r";if(b&&(y=y.slice(0,-1)),y&&g.length<l){let T=`Block scalar lines must not be less indented than their ${o.indent?"explicit indentation indicator":"first line"}`;t(c-y.length-(b?2:1),"BAD_INDENT",T),g=""}s===F.BLOCK_LITERAL?(d+=u+g.slice(l)+y,u=`
`):g.length>l||y[0]==="	"?(u===" "?u=`
`:!h&&u===`
`&&(u=`

`),d+=u+g.slice(l)+y,u=`
`,h=!0):y===""?u===`
`?d+=`
`:u=`
`:(d+=u+y,u=" ",h=!1)}switch(o.chomp){case"-":break;case"+":for(let p=i;p<r.length;++p)d+=`
`+r[p][0].slice(l);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}let m=n+o.length+e.source.length;return{value:d,type:s,comment:o.comment,range:[n,m,m]}}function Ll({offset:a,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;let{source:o}=e[0],s=o[0],r=0,i="",l=-1;for(let u=1;u<o.length;++u){let h=o[u];if(!i&&(h==="-"||h==="+"))i=h;else{let m=Number(h);!r&&m?r=m:l===-1&&(l=a+u)}}l!==-1&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${o}`);let c=!1,f="",d=o.length;for(let u=1;u<e.length;++u){let h=e[u];switch(h.type){case"space":c=!0;case"newline":d+=h.source.length;break;case"comment":t&&!c&&n(h,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=h.source.length,f=h.source.substring(1);break;case"error":n(h,"UNEXPECTED_TOKEN",h.message),d+=h.source.length;break;default:{let m=`Unexpected token in block scalar header: ${h.type}`;n(h,"UNEXPECTED_TOKEN",m);let p=h.source;p&&typeof p=="string"&&(d+=p.length)}}}return{mode:s,indent:r,chomp:i,comment:f,length:d}}function Fl(a){let e=a.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),s=[n?.[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let r=1;r<e.length;r+=2)s.push([e[r],e[r+1]]);return s}var sa=E(()=>{W()});function Wn(a,e,t){let{offset:n,type:o,source:s,end:r}=a,i,l,c=(u,h,m)=>t(n+u,h,m);switch(o){case"scalar":i=F.PLAIN,l=Al(s,c);break;case"single-quoted-scalar":i=F.QUOTE_SINGLE,l=Dl(s,c);break;case"double-quoted-scalar":i=F.QUOTE_DOUBLE,l=Ol(s,c);break;default:return t(a,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${o}`),{value:"",type:null,comment:"",range:[n,n+s.length,n+s.length]}}let f=n+s.length,d=ve(r,f,e,t);return{value:l,type:i,comment:d.comment,range:[n,f,d.offset]}}function Al(a,e){let t="";switch(a[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${a[0]}`;break}case"@":case"`":{t=`reserved character ${a[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),kr(a)}function Dl(a,e){return(a[a.length-1]!=="'"||a.length===1)&&e(a.length,"MISSING_CHAR","Missing closing 'quote"),kr(a.slice(1,-1)).replace(/''/g,"'")}function kr(a){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(a);if(!n)return a;let o=n[1],s=" ",r=e.lastIndex;for(t.lastIndex=r;n=t.exec(a);)n[1]===""?s===`
`?o+=s:s=`
`:(o+=s+n[1],s=" "),r=t.lastIndex;let i=/[ \t]*(.*)/sy;return i.lastIndex=r,n=i.exec(a),o+s+(n?.[1]??"")}function Ol(a,e){let t="";for(let n=1;n<a.length-1;++n){let o=a[n];if(!(o==="\r"&&a[n+1]===`
`))if(o===`
`){let{fold:s,offset:r}=Ml(a,n);t+=s,n=r}else if(o==="\\"){let s=a[++n],r=Rl[s];if(r)t+=r;else if(s===`
`)for(s=a[n+1];s===" "||s==="	";)s=a[++n+1];else if(s==="\r"&&a[n+1]===`
`)for(s=a[++n+1];s===" "||s==="	";)s=a[++n+1];else if(s==="x"||s==="u"||s==="U"){let i=s==="x"?2:s==="u"?4:8;t+=Il(a,n+1,i,e),n+=i}else{let i=a.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${i}`),t+=i}}else if(o===" "||o==="	"){let s=n,r=a[n+1];for(;r===" "||r==="	";)r=a[++n+1];r!==`
`&&!(r==="\r"&&a[n+2]===`
`)&&(t+=n>s?a.slice(s,n+1):o)}else t+=o}return(a[a.length-1]!=='"'||a.length===1)&&e(a.length,"MISSING_CHAR",'Missing closing "quote'),t}function Ml(a,e){let t="",n=a[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&a[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=a[e+1];return t||(t=" "),{fold:t,offset:e}}function Il(a,e,t,n){let o=a.substr(e,t),r=o.length===t&&/^[0-9a-fA-F]+$/.test(o)?parseInt(o,16):NaN;try{return String.fromCodePoint(r)}catch{let i=a.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${i}`),i}}var Rl,ra=E(()=>{W();ft();Rl={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"\x85",_:"\xA0",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"}});function ia(a,e,t,n){let{value:o,type:s,comment:r,range:i}=e.type==="block-scalar"?Gn(a,e,n):Wn(e,a.options.strict,n),l=t?a.directives.tagName(t.source,d=>n(t,"TAG_RESOLVE_FAILED",d)):null,c;a.options.stringKeys&&a.atKey?c=a.schema[te]:l?c=Pl(a.schema,o,l,t,n):e.type==="scalar"?c=Ul(a,o,e,n):c=a.schema[te];let f;try{let d=c.resolve(o,u=>n(t??e,"TAG_RESOLVE_FAILED",u),a.options);f=R(d)?d:new F(d)}catch(d){let u=d instanceof Error?d.message:String(d);n(t??e,"TAG_RESOLVE_FAILED",u),f=new F(o)}return f.range=i,f.source=o,s&&(f.type=s),l&&(f.tag=l),c.format&&(f.format=c.format),r&&(f.comment=r),f}function Pl(a,e,t,n,o){if(t==="!")return a[te];let s=[];for(let i of a.tags)if(!i.collection&&i.tag===t)if(i.default&&i.test)s.push(i);else return i;for(let i of s)if(i.test?.test(e))return i;let r=a.knownTags[t];return r&&!r.collection?(a.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(o(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),a[te])}function Ul({atKey:a,directives:e,schema:t},n,o,s){let r=t.tags.find(i=>(i.default===!0||a&&i.default==="key")&&i.test?.test(n))||t[te];if(t.compat){let i=t.compat.find(l=>l.default&&l.test?.test(n))??t[te];if(r.tag!==i.tag){let l=e.tagString(r.tag),c=e.tagString(i.tag),f=`Value may be parsed as either ${l} or ${c}`;s(o,"TAG_RESOLVE_FAILED",f,!0)}}return r}var vr=E(()=>{q();W();sa();ra()});function Sr(a,e,t){if(e){t??(t=e.length);for(let n=t-1;n>=0;--n){let o=e[n];switch(o.type){case"space":case"comment":case"newline":a-=o.source.length;continue}for(o=e[++n];o?.type==="space";)a+=o.source.length,o=e[++n];break}}return a}var Tr=E(()=>{});function la(a,e,t,n){let o=a.atKey,{spaceBefore:s,comment:r,anchor:i,tag:l}=t,c,f=!0;switch(e.type){case"alias":c=ql(a,e,n),(i||l)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=ia(a,e,l,n),i&&(c.anchor=i.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=wr(Bl,a,e,t,n),i&&(c.anchor=i.source.substring(1))}catch(d){let u=d instanceof Error?d.message:String(d);n(e,"RESOURCE_EXHAUSTION",u)}break;default:{let d=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",d),f=!1}}return c??(c=zn(a,e.offset,void 0,null,t,n)),i&&c.anchor===""&&n(i,"BAD_ALIAS","Anchor cannot be an empty string"),o&&a.options.stringKeys&&(!R(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&n(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),s&&(c.spaceBefore=!0),r&&(e.type==="scalar"&&e.source===""?c.comment=r:c.commentBefore=r),a.options.keepSourceTokens&&f&&(c.srcToken=e),c}function zn(a,e,t,n,{spaceBefore:o,comment:s,anchor:r,tag:i,end:l},c){let f={type:"scalar",offset:Sr(e,t,n),indent:-1,source:""},d=ia(a,f,i,c);return r&&(d.anchor=r.source.substring(1),d.anchor===""&&c(r,"BAD_ALIAS","Anchor cannot be an empty string")),o&&(d.spaceBefore=!0),s&&(d.comment=s,d.range[2]=l),d}function ql({options:a},{offset:e,source:t,end:n},o){let s=new fe(t.substring(1));s.source===""&&o(e,"BAD_ALIAS","Alias cannot be an empty string"),s.source.endsWith(":")&&o(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);let r=e+t.length,i=ve(n,r,a.strict,o);return s.range=[e,r,i.offset],i.comment&&(s.comment=i.comment),s}var Bl,xr=E(()=>{xt();q();br();vr();ft();Tr();Bl={composeNode:la,composeEmptyNode:zn}});function Nr(a,e,{offset:t,start:n,value:o,end:s},r){let i=Object.assign({_directives:e},a),l=new me(void 0,i),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},f=ke(n,{indicator:"doc-start",next:o??s?.[0],offset:t,onError:r,parentIndent:0,startOnNewline:!0});f.found&&(l.directives.docStart=!0,o&&(o.type==="block-map"||o.type==="block-seq")&&!f.hasNewline&&r(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=o?la(c,o,f,r):zn(c,f.end,n,null,f,r);let d=l.contents.range[2],u=ve(s,d,!1,r);return u.comment&&(l.comment=u.comment),l.range=[t,d,u.offset],l}var Er=E(()=>{_t();xr();ft();Ht()});function Gt(a){if(typeof a=="number")return[a,a+1];if(Array.isArray(a))return a.length===2?a:[a[0],a[1]];let{offset:e,source:t}=a;return[e,e+(typeof t=="string"?t.length:1)]}function Cr(a){let e="",t=!1,n=!1;for(let o=0;o<a.length;++o){let s=a[o];switch(s[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(s.substring(1)||" "),t=!0,n=!1;break;case"%":a[o+1]?.[0]!=="#"&&(o+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}var Be,ca=E(()=>{Eo();_t();Vt();q();Er();ft();Be=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,o,s)=>{let r=Gt(t);s?this.warnings.push(new We(r,n,o)):this.errors.push(new $(r,n,o))},this.directives=new we({version:e.version||"1.2"}),this.options=e}decorate(e,t){let{comment:n,afterEmptyLine:o}=Cr(this.prelude);if(n){let s=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(o||e.directives.docStart||!s)e.commentBefore=n;else if(_(s)&&!s.flow&&s.items.length>0){let r=s.items[0];U(r)&&(r=r.key);let i=r.commentBefore;r.commentBefore=i?`${n}
${i}`:n}else{let r=s.commentBefore;s.commentBefore=r?`${n}
${r}`:n}}if(t){for(let s=0;s<this.errors.length;++s)e.errors.push(this.errors[s]);for(let s=0;s<this.warnings.length;++s)e.warnings.push(this.warnings[s])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Cr(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(let o of e)yield*this.next(o);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,o)=>{let s=Gt(e);s[0]+=t,this.onError(s,"BAD_DIRECTIVE",n,o)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{let t=Nr(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{let t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new $(Gt(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){let n="Unexpected doc-end without preceding document";this.errors.push(new $(Gt(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;let t=ve(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){let n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new $(Gt(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let n=Object.assign({_directives:this.directives},this.options),o=new me(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),o.range=[0,t,t],this.decorate(o,!1),yield o}}}});function Lr(a,e=!0,t){if(a){let n=(o,s,r)=>{let i=typeof o=="number"?o:Array.isArray(o)?o[0]:o.offset;if(t)t(i,s,r);else throw new $([i,i+1],s,r)};switch(a.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Wn(a,e,n);case"block-scalar":return Gn({options:{strict:e}},a,n)}}return null}function Fr(a,e){let{implicitKey:t=!1,indent:n,inFlow:o=!1,offset:s=-1,type:r="PLAIN"}=e,i=Ee({type:r,value:a},{implicitKey:t,indent:n>0?" ".repeat(n):"",inFlow:o,options:{blockQuote:!0,lineWidth:-1}}),l=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(i[0]){case"|":case">":{let c=i.indexOf(`
`),f=i.substring(0,c),d=i.substring(c+1)+`
`,u=[{type:"block-scalar-header",offset:s,indent:n,source:f}];return Dr(u,l)||u.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:s,indent:n,props:u,source:d}}case'"':return{type:"double-quoted-scalar",offset:s,indent:n,source:i,end:l};case"'":return{type:"single-quoted-scalar",offset:s,indent:n,source:i,end:l};default:return{type:"scalar",offset:s,indent:n,source:i,end:l}}}function Ar(a,e,t={}){let{afterKey:n=!1,implicitKey:o=!1,inFlow:s=!1,type:r}=t,i="indent"in a?a.indent:null;if(n&&typeof i=="number"&&(i+=2),!r)switch(a.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{let c=a.props[0];if(c.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r=c.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}let l=Ee({type:r,value:e},{implicitKey:o||i===null,indent:i!==null&&i>0?" ".repeat(i):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}});switch(l[0]){case"|":case">":_l(a,l);break;case'"':da(a,l,"double-quoted-scalar");break;case"'":da(a,l,"single-quoted-scalar");break;default:da(a,l,"scalar")}}function _l(a,e){let t=e.indexOf(`
`),n=e.substring(0,t),o=e.substring(t+1)+`
`;if(a.type==="block-scalar"){let s=a.props[0];if(s.type!=="block-scalar-header")throw new Error("Invalid block scalar header");s.source=n,a.source=o}else{let{offset:s}=a,r="indent"in a?a.indent:-1,i=[{type:"block-scalar-header",offset:s,indent:r,source:n}];Dr(i,"end"in a?a.end:void 0)||i.push({type:"newline",offset:-1,indent:r,source:`
`});for(let l of Object.keys(a))l!=="type"&&l!=="offset"&&delete a[l];Object.assign(a,{type:"block-scalar",indent:r,props:i,source:o})}}function Dr(a,e){if(e)for(let t of e)switch(t.type){case"space":case"comment":a.push(t);break;case"newline":return a.push(t),!0}return!1}function da(a,e,t){switch(a.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":a.type=t,a.source=e;break;case"block-scalar":{let n=a.props.slice(1),o=e.length;a.props[0].type==="block-scalar-header"&&(o-=a.props[0].source.length);for(let s of n)s.offset+=o;delete a.props,Object.assign(a,{type:t,source:e,end:n});break}case"block-map":case"block-seq":{let o={type:"newline",offset:a.offset+e.length,indent:a.indent,source:`
`};delete a.items,Object.assign(a,{type:t,source:e,end:[o]});break}default:{let n="indent"in a?a.indent:-1,o="end"in a&&Array.isArray(a.end)?a.end.filter(s=>s.type==="space"||s.type==="comment"||s.type==="newline"):[];for(let s of Object.keys(a))s!=="type"&&s!=="offset"&&delete a[s];Object.assign(a,{type:t,indent:n,source:e,end:o})}}}var Or=E(()=>{sa();ra();Vt();Dt()});function Xn(a){switch(a.type){case"block-scalar":{let e="";for(let t of a.props)e+=Xn(t);return e+a.source}case"block-map":case"block-seq":{let e="";for(let t of a.items)e+=Jn(t);return e}case"flow-collection":{let e=a.start.source;for(let t of a.items)e+=Jn(t);for(let t of a.end)e+=t.source;return e}case"document":{let e=Jn(a);if(a.end)for(let t of a.end)e+=t.source;return e}default:{let e=a.source;if("end"in a&&a.end)for(let t of a.end)e+=t.source;return e}}}function Jn({start:a,key:e,sep:t,value:n}){let o="";for(let s of a)o+=s.source;if(e&&(o+=Xn(e)),t)for(let s of t)o+=s.source;return n&&(o+=Xn(n)),o}var Mr,Rr=E(()=>{Mr=a=>"type"in a?Xn(a):Jn(a)});function qe(a,e){"type"in a&&a.type==="document"&&(a={start:a.start,value:a.value}),Pr(Object.freeze([]),a,e)}function Pr(a,e,t){let n=t(e,a);if(typeof n=="symbol")return n;for(let o of["key","value"]){let s=e[o];if(s&&"items"in s){for(let r=0;r<s.items.length;++r){let i=Pr(Object.freeze(a.concat([[o,r]])),s.items[r],t);if(typeof i=="number")r=i-1;else{if(i===fa)return fa;i===Ir&&(s.items.splice(r,1),r-=1)}}typeof n=="function"&&o==="key"&&(n=n(e,a))}}return typeof n=="function"?n(e,a):n}var fa,jl,Ir,Ur=E(()=>{fa=Symbol("break visit"),jl=Symbol("skip children"),Ir=Symbol("remove item");qe.BREAK=fa;qe.SKIP=jl;qe.REMOVE=Ir;qe.itemAtPath=(a,e)=>{let t=a;for(let[n,o]of e){let s=t?.[n];if(s&&"items"in s)t=s.items[o];else return}return t};qe.parentCollection=(a,e)=>{let t=qe.itemAtPath(a,e.slice(0,-1)),n=e[e.length-1][0],o=t?.[n];if(o&&"items"in o)return o;throw new Error("Parent collection not found")}});var Zn={};kt(Zn,{BOM:()=>Wt,DOCUMENT:()=>zt,FLOW_END:()=>Jt,SCALAR:()=>ut,createScalarToken:()=>Fr,isCollection:()=>Vl,isScalar:()=>Hl,prettyToken:()=>Kl,resolveAsScalar:()=>Lr,setScalarValue:()=>Ar,stringify:()=>Mr,tokenType:()=>ua,visit:()=>qe});function Kl(a){switch(a){case Wt:return"<BOM>";case zt:return"<DOC>";case Jt:return"<FLOW_END>";case ut:return"<SCALAR>";default:return JSON.stringify(a)}}function ua(a){switch(a){case Wt:return"byte-order-mark";case zt:return"doc-mode";case Jt:return"flow-error-end";case ut:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(a[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}var Wt,zt,Jt,ut,Vl,Hl,Yn=E(()=>{Or();Rr();Ur();Wt="\uFEFF",zt="",Jt="",ut="",Vl=a=>!!a&&"items"in a,Hl=a=>!!a&&(a.type==="scalar"||a.type==="single-quoted-scalar"||a.type==="double-quoted-scalar"||a.type==="block-scalar")});function ge(a){switch(a){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}var Br,Gl,Qn,Wl,pa,ze,ha=E(()=>{Yn();Br=new Set("0123456789ABCDEFabcdef"),Gl=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Qn=new Set(",[]{}"),Wl=new Set(` ,[]{}
\r	`),pa=a=>!a||Wl.has(a),ze=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){let o=this.buffer[n+e+1];if(o===`
`||!o&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){let n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&ge(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Wt&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){let s=e[n-1];if(s===" "||s==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){let s=e[t-1];if(s===" "||s==="	")t-=1;else break}let o=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-o),this.pushNewline(),"stream"}if(this.atLineEnd()){let t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield zt,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");let t=this.peek(3);if((t==="---"||t==="...")&&ge(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!ge(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&ge(t)){let n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(pa),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);let o=this.getLine();if(o===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&o[0]!=="#"||n===0&&(o.startsWith("---")||o.startsWith("..."))&&ge(o[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(o[0]==="]"||o[0]==="}")))return this.flowLevel=0,yield Jt,yield*this.parseLineStart();let s=0;for(;o[s]===",";)s+=yield*this.pushCount(1),s+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(s+=yield*this.pushIndicators(),o[s]){case void 0:return"flow";case"#":return yield*this.pushCount(o.length-s),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(pa),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{let r=this.charAt(1);if(this.flowKey||ge(r)||r===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let s=0;for(;this.buffer[t-1-s]==="\\";)s+=1;if(s%2===0)break;t=this.buffer.indexOf('"',t+1)}let n=this.buffer.substring(0,t),o=n.indexOf(`
`,this.pos);if(o!==-1){for(;o!==-1;){let s=this.continueScalar(o+1);if(s===-1)break;o=n.indexOf(`
`,s)}o!==-1&&(t=o-(n[o-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>ge(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let s=this.pos;n=this.buffer[s];++s)switch(n){case" ":t+=1;break;case`
`:e=s,t=0;break;case"\r":{let r=this.buffer[s+1];if(!r&&!this.atEnd)return this.setNext("block-scalar");if(r===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let s=this.continueScalar(e+1);if(s===-1)break;e=this.buffer.indexOf(`
`,s)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let o=e+1;for(n=this.buffer[o];n===" ";)n=this.buffer[++o];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++o];e=o-1}else if(!this.blockScalarKeep)do{let s=e-1,r=this.buffer[s];r==="\r"&&(r=this.buffer[--s]);let i=s;for(;r===" ";)r=this.buffer[--s];if(r===`
`&&s>=this.pos&&s+1+t>i)e=s;else break}while(!0);return yield ut,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,t=this.pos-1,n=this.pos-1,o;for(;o=this.buffer[++n];)if(o===":"){let s=this.buffer[n+1];if(ge(s)||e&&Qn.has(s))break;t=n}else if(ge(o)){let s=this.buffer[n+1];if(o==="\r"&&(s===`
`?(n+=1,o=`
`,s=this.buffer[n+1]):t=n),s==="#"||e&&Qn.has(s))break;if(o===`
`){let r=this.continueScalar(n+1);if(r===-1)break;n=Math.max(n,r-2)}}else{if(e&&Qn.has(o))break;t=n}return!o&&!this.atEnd?this.setNext("plain-scalar"):(yield ut,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){let n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(pa),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{let t=this.flowLevel>0,n=this.charAt(1);if(ge(n)||t&&Qn.has(n)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!ge(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Gl.has(t))t=this.buffer[++e];else if(t==="%"&&Br.has(this.buffer[e+1])&&Br.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");let o=t-this.pos;return o>0&&(yield this.buffer.substr(this.pos,o),this.pos=t),o}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}});var Je,ma=E(()=>{Je=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){let s=t+n>>1;this.lineStarts[s]<e?t=s+1:n=s}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};let o=this.lineStarts[t-1];return{line:t,col:e-o+1}}}}});function _e(a,e){for(let t=0;t<a.length;++t)if(a[t].type===e)return!0;return!1}function qr(a){for(let e=0;e<a.length;++e)switch(a[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function jr(a){switch(a?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function $n(a){switch(a.type){case"document":return a.start;case"block-map":{let e=a.items[a.items.length-1];return e.sep??e.start}case"block-seq":return a.items[a.items.length-1].start;default:return[]}}function pt(a){if(a.length===0)return[];let e=a.length;e:for(;--e>=0;)switch(a[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;a[++e]?.type==="space";);return a.splice(e,a.length)}function eo(a,e){if(e.length<1e5)Array.prototype.push.apply(a,e);else for(let t=0;t<e.length;++t)a.push(e[t])}function _r(a){if(a.start.type==="flow-seq-start")for(let e of a.items)e.sep&&!e.value&&!_e(e.start,"explicit-key-ind")&&!_e(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,jr(e.value)?e.value.end?eo(e.value.end,e.sep):e.value.end=e.sep:eo(e.start,e.sep),delete e.sep)}var je,ga=E(()=>{Yn();ha();je=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new ze,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let t=ua(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{let n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){let t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{let n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&_r(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{let o=n.items[n.items.length-1];if(o.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(o.sep)o.value=t;else{Object.assign(o,{key:t,sep:[]}),this.onKeyLine=!o.explicitKey;return}break}case"block-seq":{let o=n.items[n.items.length-1];o.value?n.items.push({start:[],value:t}):o.value=t;break}case"flow-collection":{let o=n.items[n.items.length-1];!o||o.value?n.items.push({start:[],key:t,sep:[]}):o.sep?o.value=t:Object.assign(o,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){let o=t.items[t.items.length-1];o&&!o.sep&&!o.value&&o.start.length>0&&qr(o.start)===-1&&(t.indent===0||o.start.every(s=>s.type!=="comment"||s.indent<t.indent))&&(n.type==="document"?n.end=o.start:n.items.push({start:o.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{let e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{qr(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}let t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){let t=$n(this.peek(2)),n=pt(t),o;e.end?(o=e.end,o.push(this.sourceToken),delete e.end):o=[this.sourceToken];let s={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){let t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){let n="end"in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type==="comment"?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){let o=e.items[e.items.length-2]?.value?.end;if(Array.isArray(o)){eo(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let n=!this.onKeyLine&&this.indent===e.indent,o=n&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind",s=[];if(o&&t.sep&&!t.value){let r=[];for(let i=0;i<t.sep.length;++i){let l=t.sep[i];switch(l.type){case"newline":r.push(i);break;case"space":break;case"comment":l.indent>e.indent&&(r.length=0);break;default:r.length=0}}r.length>=2&&(s=t.sep.splice(r[1]))}switch(this.type){case"anchor":case"tag":o||t.value?(s.push(this.sourceToken),e.items.push({start:s}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):o||t.value?(s.push(this.sourceToken),e.items.push({start:s,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(_e(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]});else if(jr(t.key)&&!_e(t.sep,"newline")){let r=pt(t.start),i=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:i,sep:l}]})}else s.length>0?t.sep=t.sep.concat(s,this.sourceToken):t.sep.push(this.sourceToken);else if(_e(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{let r=pt(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||o?e.items.push({start:s,key:null,sep:[this.sourceToken]}):_e(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{let r=this.flowScalar(this.type);o||t.value?(e.items.push({start:s,key:r,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(r):(Object.assign(t,{key:r,sep:[]}),this.onKeyLine=!0);return}default:{let r=this.startBlockValue(e);if(r){if(r.type==="block-seq"){if(!t.explicitKey&&t.sep&&!_e(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else n&&e.items.push({start:s});this.stack.push(r);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){let t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){let n="end"in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type==="comment"?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){let o=e.items[e.items.length-2]?.value?.end;if(Array.isArray(o)){eo(o,t.start),o.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||_e(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){let n=this.startBlockValue(e);if(n){this.stack.push(n);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{let o=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:o,sep:[]}):t.sep?this.stack.push(o):Object.assign(t,{key:o,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}let n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{let n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){let o=$n(n),s=pt(o);_r(e);let r=e.end.splice(1,e.end.length);r.push(this.sourceToken);let i={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;let t=$n(e),n=pt(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;let t=$n(e),n=pt(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}});function Vr(a){let e=a.prettyErrors!==!1;return{lineCounter:a.lineCounter||e&&new Je||null,prettyErrors:e}}function ya(a,e={}){let{lineCounter:t,prettyErrors:n}=Vr(e),o=new je(t?.addNewLine),s=new Be(e),r=Array.from(s.compose(o.parse(a)));if(n&&t)for(let i of r)i.errors.forEach(jt(a,t)),i.warnings.forEach(jt(a,t));return r.length>0?r:Object.assign([],{empty:!0},s.streamInfo())}function to(a,e={}){let{lineCounter:t,prettyErrors:n}=Vr(e),o=new je(t?.addNewLine),s=new Be(e),r=null;for(let i of s.compose(o.parse(a),!0,a.length))if(!r)r=i;else if(r.options.logLevel!=="silent"){r.errors.push(new $(i.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(r.errors.forEach(jt(a,t)),r.warnings.forEach(jt(a,t))),r}function wa(a,e,t){let n;typeof e=="function"?n=e:t===void 0&&e&&typeof e=="object"&&(t=e);let o=to(a,t);if(!o)return null;if(o.warnings.forEach(s=>Sn(o.options.logLevel,s)),o.errors.length>0){if(o.options.logLevel!=="silent")throw o.errors[0];o.errors=[]}return o.toJS(Object.assign({reviver:n},t))}function ba(a,e,t){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){let o=Math.round(t);t=o<1?void 0:o>8?{indent:8}:{indent:o}}if(a===void 0){let{keepUndefined:o}=t??e??{};if(!o)return}return oe(a)&&!n?a.toString(t):new me(a,n,t).toString(t)}var Hr=E(()=>{ca();_t();Vt();Mo();q();ma();ga()});var ka={};kt(ka,{Alias:()=>fe,CST:()=>Zn,Composer:()=>Be,Document:()=>me,Lexer:()=>ze,LineCounter:()=>Je,Pair:()=>H,Parser:()=>je,Scalar:()=>F,Schema:()=>Ke,YAMLError:()=>Ge,YAMLMap:()=>G,YAMLParseError:()=>$,YAMLSeq:()=>J,YAMLWarning:()=>We,isAlias:()=>ne,isCollection:()=>_,isDocument:()=>oe,isMap:()=>ae,isNode:()=>B,isPair:()=>U,isScalar:()=>R,isSeq:()=>se,parse:()=>wa,parseAllDocuments:()=>ya,parseDocument:()=>to,stringify:()=>ba,visit:()=>le,visitAsync:()=>$e});var va=E(()=>{ca();_t();$o();Vt();xt();q();Oe();W();Re();Ie();Yn();ha();ma();ga();Hr();Tt()});var Kr={};kt(Kr,{Alias:()=>fe,CST:()=>Zn,Composer:()=>Be,Document:()=>me,Lexer:()=>ze,LineCounter:()=>Je,Pair:()=>H,Parser:()=>je,Scalar:()=>F,Schema:()=>Ke,YAMLError:()=>Ge,YAMLMap:()=>G,YAMLParseError:()=>$,YAMLSeq:()=>J,YAMLWarning:()=>We,default:()=>zl,isAlias:()=>ne,isCollection:()=>_,isDocument:()=>oe,isMap:()=>ae,isNode:()=>B,isPair:()=>U,isScalar:()=>R,isSeq:()=>se,parse:()=>wa,parseAllDocuments:()=>ya,parseDocument:()=>to,stringify:()=>ba,visit:()=>le,visitAsync:()=>$e});var zl,Gr=E(()=>{va();va();zl=ka});var no=j((Xm,Jr)=>{"use strict";var Wr=require("obsidian"),Xt=new Map;function Sa(a){if(!a)return null;let e=a.match(/^---\r?\n([\s\S]*?)\r?\n---/);return e?e[1]:null}function Ta(a){if(!a||!a.trim())return{};try{if(typeof Wr.parseYaml=="function"){let n=Wr.parseYaml(a);if(n&&typeof n=="object")return n}}catch{}try{let o=(Gr(),ho(Kr)).parse(a);if(o&&typeof o=="object")return o}catch{}let e={},t=a.split(/\r?\n/);for(let n of t){let o=n.indexOf(":");if(o>0&&!n.startsWith(" ")&&!n.startsWith("	")){let s=n.slice(0,o).trim(),r=n.slice(o+1).trim();r==="true"?r=!0:r==="false"?r=!1:/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),e[s]=r}}return e}function zr(a,e){if(!e)return{};let t=a?.metadataCache?.getFileCache(e)?.frontmatter;if(t&&typeof t=="object"&&Object.keys(t).length>0)return Xt.set(e.path,{mtime:e.stat?.mtime||0,frontmatter:t}),t;let n=Xt.get(e.path);if(n&&e.stat&&n.mtime===e.stat.mtime)return n.frontmatter;if(a?.workspace){let o=a.workspace.getLeavesOfType("markdown");for(let s of o)if(s.view&&s.view.file&&s.view.file.path===e.path&&typeof s.view.getViewData=="function"){let r=s.view.getViewData(),i=Sa(r);if(i!==null){let l=Ta(i);return Xt.set(e.path,{mtime:e.stat?.mtime||0,frontmatter:l}),l}}}return n&&n.frontmatter?n.frontmatter:{}}async function Jl(a,e){if(!e)return{};let t=zr(a,e);if(t&&Object.keys(t).length>0)return t;try{let n=typeof a.vault.cachedRead=="function"?await a.vault.cachedRead(e):await a.vault.read(e),o=Sa(n),s=o!==null?Ta(o):{};return Xt.set(e.path,{mtime:e.stat?.mtime||0,frontmatter:s}),s}catch{return t||{}}}function Xl(a){a&&Xt.delete(a)}Jr.exports={getNoteFrontmatter:zr,getNoteFrontmatterAsync:Jl,invalidateFrontmatterCache:Xl,extractFrontmatterString:Sa,parseFrontmatterText:Ta}});var Yt=j((Zm,Yr)=>{"use strict";var Se=require("obsidian"),{isPublishIntent:Xr}=ie(),{getNoteFrontmatter:Zt,getNoteFrontmatterAsync:Zl,invalidateFrontmatterCache:oo}=no(),Zr={unpublished:{icon:"cloud-off",color:"var(--stnd-status-local)",label:"Local"},local:{icon:"cloud-off",color:"var(--stnd-status-local)",label:"Local"},pending:{icon:"upload-cloud",color:"var(--stnd-status-pending)",label:"Queued"},synced:{icon:"check-circle",color:"var(--stnd-status-synced)",label:"Synced"},changed:{icon:"upload-cloud",color:"var(--stnd-status-modified)",label:"Modified"},outdated:{icon:"arrow-down-circle",color:"var(--stnd-status-outdated)",label:"Outdated"},desynced:{icon:"alert-circle",color:"var(--stnd-status-desynced)",label:"Unpublished (online)"},public:{icon:"globe",color:"var(--stnd-status-synced)",label:"Synced"},unlisted:{icon:"eye-off",color:"var(--stnd-status-synced)",label:"Synced (unlisted)"},private:{icon:"lock",color:"var(--stnd-status-synced)",label:"Synced (private)"}},xa=class{constructor(e,t){this.app=e,this.plugin=t,this.statusBarEl=null,this.ribbonEl=null,this.noteStatuses=new Map,this.checkingFiles=new Set}async load(){let e=()=>this.refreshAll();this.plugin.registerEvent(this.app.workspace.on("file-open",e)),this.plugin.registerEvent(this.app.workspace.on("active-leaf-change",e)),this.plugin.registerEvent(this.app.workspace.on("layout-change",e)),this.plugin.registerEvent(this.app.metadataCache.on("changed",t=>{oo(t.path),this.refreshForFile(t)})),this.plugin.registerEvent(this.app.metadataCache.on("resolve",t=>{oo(t.path),this.refreshForFile(t)})),this.plugin.registerEvent(this.app.vault.on("modify",t=>{oo(t.path),this.refreshForFile(t)})),this.plugin.registerEvent(this.app.vault.on("delete",t=>{oo(t.path),this.noteStatuses.delete(t.path)})),this.app.workspace.onLayoutReady(e)}async unload(){this.cleanupAll()}cleanupAll(){this.app.workspace.getLeavesOfType("markdown").forEach(e=>{let t=e.view&&e.view._stndPublishAction;t&&(t.remove(),delete e.view._stndPublishAction);let n=e.view&&e.view._stndBottomIndicator;n&&(n.remove(),delete e.view._stndBottomIndicator)}),this.statusBarEl&&(this.statusBarEl.remove(),this.statusBarEl=null),this.ribbonEl&&(this.ribbonEl.remove(),this.ribbonEl=null)}stateKey(e,t,n){let o=e||{},s=Xr(o),r=!!o["garden-url"]||!!o.url_public||o.published===!0||o.published==="true";if(!s)return r?"desynced":"unpublished";if(!r)return"pending";if(t&&this.noteStatuses){let l=this.noteStatuses.get(t);if(l&&(l.status==="outdated"||l.status==="changed"))return l.status}let i=this.plugin?.garden?.noteStatsCache||this.plugin?.panel?.noteStatsCache;if(i&&t){let l=i.get(t),c=l?.updated_at?new Date(l.updated_at).getTime():0,f=n?.stat?.mtime||0;if(c>0&&f>c+3e3)return"changed"}return"synced"}getStateInfo(e,t,n){let o=e||{},s=this.stateKey(o,t,n),r=Zr[s]||Zr.unpublished,i=Object.assign({},r),l=String(o.visibility||"public").toLowerCase().trim();return s==="synced"?l==="private"?(i.icon="lock",i.label="Synced (private)"):l==="unlisted"?(i.icon="eye-off",i.label="Synced (unlisted)"):(i.icon="globe",i.label="Synced (public)"):s==="changed"?i.label=l==="private"?"Modified (private)":l==="unlisted"?"Modified (unlisted)":"Modified":s==="outdated"?i.label="Outdated":s==="desynced"&&(i.icon="alert-circle",i.color="var(--stnd-status-desynced)",i.label="Unpublished locally (still online)"),{key:s,state:i,visibility:l}}async triggerStatusCheck(e){if(!(!e||this.checkingFiles.has(e.path)||!this.plugin.settings.apiKey)){this.checkingFiles.add(e.path);try{let n=await Zl(this.app,e),o=Xr(n),s=n["garden-url"]!=null||n.url_public!=null||n.published===!0||n.published==="true";if(!s&&!o){this.noteStatuses.delete(e.path);return}if(!o&&s){this.noteStatuses.set(e.path,{status:"desynced",timestamp:Date.now()}),this.renderCurrentWidgets();return}let r=this.noteStatuses.get(e.path),i=Date.now(),l=this.plugin?.garden?.noteStatsCache||this.plugin?.panel?.noteStatsCache;if(l){let d=l.get(e.path),u=d?.updated_at?new Date(d.updated_at).getTime():0,h=e.stat?.mtime||0;u>0&&h>u+3e3&&(!r||r.status!=="changed")&&(this.noteStatuses.set(e.path,{status:"changed",remoteContent:r?r.remoteContent:null,timestamp:i}),this.renderCurrentWidgets())}if(r&&i-r.timestamp<1e4&&e.stat?.mtime<=r.timestamp)return;this.noteStatuses.has(e.path)||this.noteStatuses.set(e.path,{status:r?r.status:this.stateKey(n,e.path,e),remoteContent:r?r.remoteContent:null,timestamp:i});let c=this.plugin.garden;if(!c)return;let f=await c.checkNoteStatus(e);this.noteStatuses.set(e.path,{status:f.status,remoteContent:f.remoteContent,timestamp:Date.now()}),this.renderCurrentWidgets(),this.plugin.panel&&typeof this.plugin.panel.updateTopIndicator=="function"&&this.plugin.panel.updateTopIndicator(!0)}catch(n){console.error("Standard : Erreur lors de la v\xE9rification asynchrone du statut :",n)}finally{this.checkingFiles.delete(e.path)}}}refreshAll(){let e=!!this.plugin.settings.apiKey,t=this.plugin.settings.publishIndicatorStyle||"garden";if(!e&&t==="hidden"){this.cleanupAll();return}let n=this.app.workspace.getActiveFile();n&&e&&this.triggerStatusCheck(n),this.renderCurrentWidgets()}renderCurrentWidgets(){let e=!!this.plugin.settings.apiKey,t=this.plugin.settings.publishStatusLocation||"titlebar",n=this.plugin.settings.publishIndicatorStyle||"garden";if(!e&&n==="hidden"){this.cleanupAll();return}(t!=="titlebar"||!e||t==="hidden")&&this.app.workspace.getLeavesOfType("markdown").forEach(o=>{let s=o.view&&o.view._stndPublishAction;s&&(s.remove(),delete o.view._stndPublishAction)}),(t!=="statusbar"||!e||t==="hidden")&&this.statusBarEl&&(this.statusBarEl.remove(),this.statusBarEl=null),(t!=="ribbon"||!e||t==="hidden")&&this.ribbonEl&&(this.ribbonEl.remove(),this.ribbonEl=null),e&&t!=="hidden"&&(t==="titlebar"?this.app.workspace.getLeavesOfType("markdown").forEach(o=>this.refreshLeaf(o)):t==="statusbar"?this.refreshStatusBar():t==="ribbon"&&this.refreshRibbon()),this.app.workspace.getLeavesOfType("markdown").forEach(o=>{let s=o.view?._stndBottomIndicator||o.view?.containerEl?.querySelector(".stnd-bottom-indicator");s&&(s.remove(),o.view&&delete o.view._stndBottomIndicator)}),this.plugin.panel&&typeof this.plugin.panel.updateTopIndicator=="function"&&this.plugin.panel.updateTopIndicator(!1)}refreshForFile(e){let t=this.app.workspace.getActiveFile();if(t&&t.path===e.path)this.refreshAll();else{let n=!1;this.app.workspace.getLeavesOfType("markdown").forEach(o=>{o.view&&o.view.file&&o.view.file.path===e.path&&(n=!0,this.plugin.settings.publishStatusLocation==="titlebar"&&this.refreshLeaf(o))}),n&&this.plugin.panel&&typeof this.plugin.panel.updateTopIndicator=="function"&&this.plugin.panel.updateTopIndicator(!1)}}refreshBottomIndicator(e,t,n=!1){let o=e?.view;if(!o||!o.containerEl||!o.file)return;let s=o._stndBottomIndicator;if(t==="hidden"){s&&(s.remove(),delete o._stndBottomIndicator);return}let r=Zt(this.app,o.file),{key:i,state:l}=this.getStateInfo(r,o.file.path,o.file);if(!s||!s.isConnected||!o.containerEl.contains(s)){let f=o.containerEl.querySelector(".stnd-bottom-indicator");f?s=f:(s=document.createElement("div"),s.className="stnd-bottom-indicator",o.containerEl.appendChild(s)),o._stndBottomIndicator=s}o.containerEl.style.position!=="relative"&&getComputedStyle(o.containerEl).position==="static"&&(o.containerEl.style.position="relative"),s.className=`stnd-bottom-indicator stnd-style-${t} stnd-state-${i}`;let c=l?.label||i;s.setAttribute("title",`Garden: ${c}`),n&&t==="garden"&&(s.classList.remove("stnd-growing"),s.offsetWidth,s.classList.add("stnd-growing"))}refreshLeaf(e){let t=e.view;if(!t||typeof t.addAction!="function"||!t.file)return;if(this.plugin.garden?.isPathExcluded(t.file.path)){t._stndPublishAction?.remove(),delete t._stndPublishAction;return}let n=Zt(this.app,t.file),{key:o,state:s}=this.getStateInfo(n,t.file.path,t.file),r=t._stndPublishAction;if(!r||!r.isConnected||!t.containerEl.contains(r)){let i=t.containerEl.querySelector(".stnd-publish-status");i?r=i:(r=t.addAction(s.icon,"Garden Status",l=>this.onClick(t,l)),r.addClass("stnd-publish-status")),t._stndPublishAction=r}Se.setIcon(r,s.icon),r.style.color=s.color,r.setAttribute("aria-label",`Garden Status \u2014 ${s.label}`),r.dataset.stndState=o}refreshStatusBar(){let e=this.app.workspace.getActiveFile();if(!e){this.statusBarEl&&(this.statusBarEl.style.display="none");return}if(this.plugin.garden?.isPathExcluded(e.path)){this.statusBarEl&&(this.statusBarEl.style.display="none");return}let t=Zt(this.app,e),{key:n,state:o}=this.getStateInfo(t,e.path,e);this.statusBarEl||(this.statusBarEl=this.plugin.addStatusBarItem(),this.statusBarEl.addClass("stnd-publish-status-statusbar"),this.statusBarEl.style.cursor="pointer",this.statusBarEl.addEventListener("click",r=>{let i=this.app.workspace.getActiveViewOfType(Se.MarkdownView);i&&this.onClick(i,r)})),this.statusBarEl.style.display="",this.statusBarEl.empty();let s=this.statusBarEl.createSpan();Se.setIcon(s,o.icon),s.style.color=o.color,s.style.marginRight="6px",s.style.display="inline-flex",s.style.alignItems="center",this.statusBarEl.createSpan({text:`Garden: ${o.label}`}),this.statusBarEl.setAttribute("aria-label",`Garden Status \u2014 ${o.label}`)}refreshRibbon(){let e=this.app.workspace.getActiveFile();if(!e){this.ribbonEl&&(this.ribbonEl.style.display="none");return}if(this.plugin.garden?.isPathExcluded(e.path)){this.ribbonEl&&(this.ribbonEl.style.display="none");return}let t=Zt(this.app,e),{key:n,state:o}=this.getStateInfo(t,e.path,e);this.ribbonEl||(this.ribbonEl=this.plugin.addRibbonIcon(o.icon,"Garden Status",s=>{let r=this.app.workspace.getActiveViewOfType(Se.MarkdownView);r&&this.onClick(r,s)}),this.ribbonEl.addClass("stnd-publish-status-ribbon")),this.ribbonEl.style.display="",Se.setIcon(this.ribbonEl,o.icon),this.ribbonEl.style.color=o.color,this.ribbonEl.setAttribute("aria-label",`Garden Status \u2014 ${o.label}`)}onClick(e,t){let n=e.file;if(!n)return;let o=this.plugin.garden;if(!o)return;let s=Zt(this.app,n),r=this.stateKey(s,n.path,n),i=new Se.Menu,l=async()=>{if(!o.checkApiKeyAndShowModal())return;let c=await o.publishWithCheck(n);if(c!==null){if(new Se.Notice(c?`Standard: "${n.basename}" published.`:`Standard: Failed to publish "${n.basename}".`),c){let f=e.leaf||{view:e},d=this.plugin.settings.publishIndicatorStyle||"garden";this.refreshBottomIndicator(f,d,!0)}c&&o.plugin.settings.openAfterPublish&&o.viewLiveVersion(n)}this.refreshAll()};if(r==="desynced")i.addItem(c=>c.setTitle("Remove from Garden (delete online note)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await o.deleteOnlineVersion(n),this.refreshAll()})),i.addItem(c=>c.setTitle("Republish (set publish: true)").setIcon("upload-cloud").onClick(async()=>{await this.app.fileManager.processFrontMatter(n,f=>{f.publish=!0,"status"in f&&delete f.status}),await l()})),i.addItem(c=>c.setTitle("View live version").setIcon("external-link").onClick(()=>o.viewLiveVersion(n)));else if(r==="unpublished"||r==="pending")i.addItem(c=>c.setTitle("Publish to Garden").setIcon("upload-cloud").onClick(()=>l()));else if(r==="outdated"){let f=this.noteStatuses.get(n.path)?.remoteContent||"";i.addItem(d=>d.setTitle("Pull remote changes (overwrite local)").setIcon("arrow-down-circle").onClick(async()=>{f?(await this.app.vault.modify(n,f),new Se.Notice("Standard: Local file updated with remote version."),this.noteStatuses.set(n.path,{status:"synced",timestamp:Date.now()}),this.refreshAll()):new Se.Notice("Standard: Remote content not found.")})),i.addItem(d=>d.setTitle("Force publish local").setIcon("refresh-cw").onClick(()=>l())),i.addItem(d=>d.setTitle("View online").setIcon("external-link").onClick(()=>o.viewLiveVersion(n))),i.addSeparator(),i.addItem(d=>d.setTitle("Remove from Garden (unpublish)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await o.deleteOnlineVersion(n),this.refreshAll()}))}else r==="changed"?(i.addItem(c=>c.setTitle("Publish local changes").setIcon("upload-cloud").onClick(()=>l())),i.addItem(c=>c.setTitle("View online").setIcon("external-link").onClick(()=>o.viewLiveVersion(n))),i.addSeparator(),i.addItem(c=>c.setTitle("Remove from Garden (unpublish)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await o.deleteOnlineVersion(n),this.refreshAll()}))):(i.addItem(c=>c.setTitle("View online").setIcon("external-link").onClick(()=>o.viewLiveVersion(n))),i.addItem(c=>c.setTitle("Re-publish").setIcon("refresh-cw").onClick(()=>l())),i.addSeparator(),i.addItem(c=>c.setTitle("Remove from Garden (unpublish)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await o.deleteOnlineVersion(n),this.refreshAll()})));i.addSeparator(),i.addItem(c=>c.setTitle("Sync all notes").setIcon("folder-sync").onClick(async()=>{await o.syncAllPublished();let f=this.app.workspace.getActiveViewOfType(Se.MarkdownView);if(f){let d=f.leaf||{view:f},u=this.plugin.settings.publishIndicatorStyle||"garden";this.refreshBottomIndicator(d,u,!0)}})),i.showAtMouseEvent(t)}};Yr.exports={PublishStatusFeature:xa}});var ei=j((Ym,$r)=>{"use strict";var{parseFolderList:Yl,isInFolderList:Ql}=sn(),P=require("obsidian"),{KNOWN_TOKENS:$l,isPublishIntent:Ve,isImageFile:ao,isPdfFile:Qr,isAttachmentFile:Na,getMimeType:ec}=ie(),{StndConfirmModal:Ea}=vo(),{StndAskModal:tc}=Es(),{StndShareModal:nc}=xo(),{getNoteFrontmatter:oc,getNoteFrontmatterAsync:Ca}=no(),ac=new Set(["garden-url","garden-short","published","url_public","modified"]);function so(a,e=null){let t=String(a||"").replace(/\r\n/g,`
`),n=t.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);if(n){let o=[],s=!1;for(let r of n[1].split(`
`)){let i=r.match(/^([A-Za-z0-9_-]+)\s*:(.*)$/);if(i){let l=i[2].trim().replace(/^["']|["']$/g,"").replace(/^\/+|\/+$/g,"");if(s=ac.has(i[1])||i[1]==="permalink"&&e!=null&&l===e,s)continue}else{if(s&&/^\s/.test(r))continue;s=!1}o.push(r)}t=`---
`+o.join(`
`)+`
---
`+t.slice(n[0].length)}return t=t.replace(/!\[\[([^\]]+)\]\]/g,(o,s)=>{let[r,i]=s.split("|").map(l=>l.trim());return`[IMAGE:${(i||r.substring(0,r.lastIndexOf("."))||r).toLowerCase()}]`}),t=t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(o,s,r)=>{let i=r.split("/").pop()||"",l=i.substring(0,i.lastIndexOf("."))||i;return`[IMAGE:${(s.trim()||l).toLowerCase()}]`}),t.trim()}function ee(a){return String(a).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[æ]/gi,"ae").replace(/[œ]/gi,"oe").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}var mt=class{constructor(e,t){this.app=e,this.files=t,this.byNanoId=new Map,this.bySlug=new Map,this.byTitleSlug=new Map,this.byBasenameSlug=new Map,this.byGardenUrl=new Map;for(let n of t){let o=oc(e,n);if(o["garden-short"]){let i=String(o["garden-short"]).match(/stnd\.gd\/([a-zA-Z0-9_-]+)/);i&&this.byNanoId.set(i[1],n)}let s=o.permalink??o.slug;if(s!=null){let i=String(s).replace(/^\/+|\/+$/g,""),l=i===""?"~root":i;this.bySlug.set(l,n)}if(o.title){let i=ee(o.title);i&&this.byTitleSlug.set(i,n)}let r=ee(n.basename);if(r&&this.byBasenameSlug.set(r,n),o["garden-url"]){let i=String(o["garden-url"]).toLowerCase().trim().replace(/\/$/,"");this.byGardenUrl.set(i,n)}}}findMatchForRemote(e){if(!e)return null;if(e.nano_id&&this.byNanoId.has(e.nano_id))return this.byNanoId.get(e.nano_id);if(e.slug&&this.bySlug.has(e.slug))return this.bySlug.get(e.slug);if(e.slug&&this.byTitleSlug.has(e.slug))return this.byTitleSlug.get(e.slug);if(e.slug&&this.byBasenameSlug.has(e.slug))return this.byBasenameSlug.get(e.slug);if(e.title){let t=ee(e.title);if(t){if(this.bySlug.has(t))return this.bySlug.get(t);if(this.byTitleSlug.has(t))return this.byTitleSlug.get(t);if(this.byBasenameSlug.has(t))return this.byBasenameSlug.get(t)}}return null}},La=class extends P.Modal{constructor(e,t,n){super(e),this.total=t,this.breakdown=n||{},this.cancelled=!1,this.finished=!1,this.syncedNotes=[],this.pulledNotes=[],this.createdNotes=[],this.unpublishedNotes=[],this.skippedNotes=[],this.failedNotes=[],this.logs=[],this.startTime=Date.now()}onOpen(){let{contentEl:e,titleEl:t}=this;e.addClass("stnd-modal"),t.setText("Standard \u2014 Synchronisation du jardin"),this.statusEl=e.createEl("p",{text:`Pr\xE9paration... 0 / ${this.total}`,cls:"stnd-modal-message"});let n=e.createDiv();n.style.cssText="height:8px;border-radius:4px;background:var(--background-modifier-border);overflow:hidden;margin:0.5em 0;",this.barEl=n.createDiv(),this.barEl.style.cssText="height:100%;width:0%;background:var(--interactive-accent);transition:width .15s ease;";let o=this.breakdown,s=e.createDiv();s.style.cssText="display:flex;flex-wrap:wrap;gap:6px;margin:0.5em 0 0.75em;";let r=(c,f,d)=>{if(!f)return;let u=s.createEl("span");u.style.cssText=`display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:12px;font-size:var(--font-ui-smaller);background:var(--background-secondary);color:${d};border:1px solid currentColor;opacity:.85;`,u.setText(`${c} ${f}`)};r("\u2191 \xC0 publier",o.toPublish,"var(--color-green)"),r("\u2212 \xC0 d\xE9publier",o.toUnpublish,"var(--color-orange)"),r("\u2193 \xC0 t\xE9l\xE9charger",o.toCreate,"var(--color-blue)"),this.currentEl=e.createEl("div",{cls:"stnd-modal-detail",text:"V\xE9rification des notes existantes..."}),this.currentEl.style.cssText="opacity:.7;font-size:var(--font-ui-smaller);min-height:1.4em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;";let i=e.createEl("div",{text:"Journal de synchronisation :",cls:"stnd-modal-detail"});i.style.cssText="margin-top: 0.75em; margin-bottom: 0.25em; font-weight: 600; font-size: var(--font-ui-smaller);",this.logContainer=e.createDiv(),this.logContainer.style.cssText="height: 160px; overflow-y: auto; background: var(--background-primary-alt); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 6px 10px; font-family: var(--font-monospace); font-size: 11px; line-height: 1.5;",this.reconciliationEl=e.createEl("div"),this.reconciliationEl.style.cssText="margin-top: 0.75em; max-height: 180px; overflow-y: auto; font-size: var(--font-ui-smaller);";let l=e.createEl("div",{cls:"stnd-modal-btns"});this.copyBtn=l.createEl("button",{text:"Copier le log",cls:"stnd-modal-btn-cancel"}),this.copyBtn.addEventListener("click",()=>{if(this.logs.length===0){new P.Notice("Le journal est vide pour le moment.");return}let c=this.logs.map(f=>`[${f.time}] [${f.tag}] ${f.name}${f.detail?" \u2014 "+f.detail:""}`).join(`
`);navigator.clipboard.writeText(c),new P.Notice(`Journal copi\xE9 (${this.logs.length} entr\xE9es) !`)}),this.actionBtn=l.createEl("button",{text:"Annuler",cls:"mod-warning"}),this.actionBtn.addEventListener("click",()=>{if(this.finished)return this.close();this.cancelled=!0,this.actionBtn.disabled=!0,this.actionBtn.setText("Annulation...")})}update({index:e,current:t,synced:n,pulled:o,created:s,unpublished:r,skipped:i,failed:l}){if(!this.barEl)return;let c=this.total?Math.round(e/this.total*100):0;this.barEl.style.width=c+"%";let f=n+o+s+r;this.statusEl.setText(`${e} / ${this.total} (${c}%) \u2014 ${f} action(s), ${i} identique(s)`+(l?`, ${l} \xE9chou\xE9(s)`:"")),this.currentEl.setText(t?`Traitement : ${t}`:"")}recordResult(e,t,n=""){let o=new Date().toLocaleTimeString(),s="INFO",r="var(--text-muted)",i="var(--text-normal)";if(e==="synced"?(this.syncedNotes.push(t),s="\u2191 PUBLI\xC9",r="var(--color-green)"):e==="pulled"?(this.pulledNotes.push(t),s="\u2193 T\xC9L\xC9CHARG\xC9",r="var(--color-blue)"):e==="created"?(this.createdNotes.push(t),s="+ CR\xC9\xC9",r="var(--color-blue)"):e==="unpublished"?(this.unpublishedNotes.push(t),s="\u2212 D\xC9PUBLI\xC9",r="var(--color-orange)"):e==="skipped"?(this.skippedNotes.push(t),s="\u25CB IDENTIQUE",r="var(--text-faint)",i="var(--text-muted)"):e==="failed"&&(this.failedNotes.push({name:t,detail:n}),s="\u2717 \xC9CHEC",r="var(--color-red)",i="var(--color-red)"),this.logs.push({time:o,tag:s,type:e,name:t,detail:n}),this.logContainer){let l=this.logContainer.createDiv();l.style.cssText="display: flex; gap: 6px; align-items: baseline; word-break: break-all; margin-bottom: 2px;";let c=l.createSpan();c.style.cssText="color: var(--text-faint); font-size: 10px; flex-shrink: 0;",c.setText(o);let f=l.createSpan();f.style.cssText=`color: ${r}; font-weight: 600; flex-shrink: 0; font-size: 10px;`,f.setText(s);let d=l.createSpan();d.style.cssText=`color: ${i}; flex: 1;`,d.setText(t+(n?` \u2014 ${n}`:"")),this.logContainer.scrollTop=this.logContainer.scrollHeight}}done({synced:e,pulled:t,created:n,unpublished:o,skipped:s,failed:r,notesOnline:i,stats:l}){if(this.finished=!0,!this.barEl)return;let c=Math.round((Date.now()-this.startTime)/1e3);this.barEl.style.width="100%";let f=this.cancelled?"Annul\xE9e":"Termin\xE9e";this.statusEl.setText(`Synchronisation ${f.toLowerCase()} \xB7 ${c}s`),this.currentEl.setText(""),this.reconciliationEl.empty();let d=this.reconciliationEl.createEl("h4",{text:"Rapport de r\xE9conciliation :",cls:"stnd-reconciliation-title"});d.style.cssText="margin: 0 0 0.5em 0;";let u=i??e+s,h=l?.imagesReused||0,m=l?.imagesUploaded||0,p=l?.imagesFailed||0,g=h+m,y=r||0,b=y+p,k=l&&l.imagesChecked>0?` + ${g} image(s) en ligne${h>0?` (${h} d\xE9dupliqu\xE9e(s))`:""}`:"",T=this.reconciliationEl.createDiv({cls:"stnd-reconciliation-summary"});if(T.style.cssText="padding: 10px 14px; border-radius: 8px; background: var(--background-secondary-alt); border: 1px solid var(--background-modifier-border); margin-bottom: 12px; font-weight: 500; font-size: var(--font-ui-small);",b===0)T.setText(`\u2713 ${u} note(s)${k}, 0 manquante.`);else{let C=[];y>0&&C.push(`${y} note(s) manquante(s)`),p>0&&C.push(`${p} image(s) non t\xE9l\xE9vers\xE9e(s)`),T.setText(`\u26A0 ${u} note(s)${k}, ${C.join(", ")}.`)}let S=this.reconciliationEl.createEl("ul");S.style.cssText="list-style-type: none; padding-left: 0; margin: 0;";let x=(C,w,v,N)=>{if(C.length===0)return;let O=S.createEl("li");O.style.cssText=`${v} font-weight: bold; margin-bottom: 0.25em;`,O.setText(`${N} ${w} (${C.length}) :`);let L=S.createEl("ul");L.style.cssText="padding-left: 1.5em; margin-bottom: 0.5em; list-style-type: circle;";for(let I of C){let M=typeof I=="object"?`${I.name}${I.detail?" \u2014 "+I.detail:""}`:I;L.createEl("li",{text:M})}};x(this.syncedNotes,"Envoy\xE9e(s) / Mise(s) \xE0 jour \xE0 distance","color: var(--text-success);","\u2191"),x(this.pulledNotes,"T\xE9l\xE9charg\xE9e(s) / Mise(s) \xE0 jour localement","color: var(--text-success);","\u2193"),x(this.createdNotes,"Cr\xE9\xE9e(s) localement","color: var(--text-success);","+"),x(this.unpublishedNotes,"D\xE9-publi\xE9e(s) localement (pass\xE9e en brouillon)","color: var(--text-warning);","-"),x(this.skippedNotes,"D\xE9j\xE0 \xE0 jour (identiques)","color: var(--text-muted);","\u25CB"),x(this.failedNotes,"\xC9chec(s) de synchronisation","color: var(--text-error);","\u2717"),l?.failedImages?.length>0&&x(l.failedImages,"Image(s) non t\xE9l\xE9vers\xE9e(s)","color: var(--text-error);","\u2717"),this.actionBtn.disabled=!1,this.actionBtn.setText("Fermer"),this.actionBtn.removeClass("mod-warning"),this.actionBtn.addClass("mod-cta")}onClose(){this.finished||(this.cancelled=!0),this.contentEl.empty()}},Fa=class extends P.Modal{constructor(e,t,n){super(e),this.garden=t,this.items=n,this.cancelled=!1,this.inProgress=!1}onOpen(){let{contentEl:e,titleEl:t}=this;e.addClass("stnd-modal"),t.setText("Standard \u2014 Nettoyage des notes d\xE9publi\xE9es"),e.createEl("p",{text:`Les ${this.items.length} note(s) suivante(s) sont encore en ligne sur votre jardin ou poss\xE8dent des m\xE9tadonn\xE9es de publication obsol\xE8tes, mais ne sont plus publiques localement :`,cls:"stnd-modal-detail"});let n=e.createDiv();n.style.cssText="max-height: 220px; overflow-y: auto; border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px 12px; margin: 12px 0; background: var(--background-primary-alt);";let o=n.createEl("ul");o.style.cssText="list-style-type: none; padding: 0; margin: 0;";for(let i of this.items){let l=o.createEl("li");l.style.cssText="display: flex; justify-content: space-between; align-items: center; padding: 4px 0; border-bottom: 1px solid var(--background-modifier-border-focus); font-size: var(--font-ui-smaller);";let c=l.createEl("span",{text:i.title});c.style.cssText="font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 68%;";let f="Brouillon local";i.reason==="orphan"?f="Orpheline en ligne":i.reason==="stale_local"&&(f="Lien local r\xE9siduel");let d=l.createEl("span",{text:f});d.style.cssText="color: var(--text-warning); font-size: 11px; padding: 2px 6px; border-radius: 4px; background: var(--background-modifier-hover); flex-shrink: 0;"}this.progressContainer=e.createDiv(),this.progressContainer.style.display="none",this.progressContainer.style.margin="12px 0";let s=this.progressContainer.createDiv();s.style.cssText="height: 8px; border-radius: 4px; background: var(--background-modifier-border); overflow: hidden;",this.barEl=s.createDiv(),this.barEl.style.cssText="height: 100%; width: 0%; background: var(--interactive-accent); transition: width .15s ease;",this.progressText=this.progressContainer.createEl("div",{cls:"stnd-modal-detail",text:"Traitement..."}),this.progressText.style.cssText="margin-top: 6px; font-size: var(--font-ui-smaller);";let r=e.createEl("div",{cls:"stnd-modal-btns"});this.cancelBtn=r.createEl("button",{text:"Annuler",cls:"stnd-modal-btn-cancel"}),this.cancelBtn.addEventListener("click",()=>{this.close()}),this.confirmBtn=r.createEl("button",{text:`Supprimer du jardin (${this.items.length})`,cls:"mod-warning"}),this.confirmBtn.addEventListener("click",async()=>{await this.runPrune()})}async runPrune(){this.inProgress=!0,this.confirmBtn.disabled=!0,this.cancelBtn.disabled=!0,this.confirmBtn.setText("Nettoyage en cours..."),this.progressContainer.style.display="block";let e=0,t=0,n=this.items.length;for(let o=0;o<n&&!this.cancelled;o++){let s=this.items[o],r=Math.round((o+1)/n*100);this.barEl.style.width=r+"%",this.progressText.setText(`${o+1} / ${n} : ${s.title}`);try{await this.garden.unpublishNote(s.file,s.slug)?e++:t++}catch{t++}}this.progressText.setText(`Termin\xE9 : ${e} note(s) nettoy\xE9e(s)${t>0?`, ${t} en \xE9chec`:""}.`),this.confirmBtn.style.display="none",this.cancelBtn.disabled=!1,this.cancelBtn.setText("Fermer"),this.cancelBtn.removeClass("stnd-modal-btn-cancel"),this.cancelBtn.addClass("mod-cta"),new P.Notice(`Standard : ${e} note(s) d\xE9publi\xE9e(s) du jardin.`)}onClose(){this.cancelled=!0,this.contentEl.empty()}};async function Te(a,e={},t=5){let n=0,o=2e3;for(;;){n++;try{let s=await P.requestUrl({url:a,method:e.method||"GET",headers:e.headers||{},body:e.body,throw:!1}),r=()=>{try{return JSON.parse(s.text||"{}")}catch{return null}};if(s.status===429){if(n>=t)return{...s,ok:!1,json:async()=>r()};let i=s.headers&&(s.headers["retry-after"]||s.headers["Retry-After"]),l=0;if(i){let c=parseInt(i,10);l=isNaN(c)?o:c*1e3}else l=o+Math.random()*1e3,o*=2;console.warn(`Standard: Rate limited (429). Retrying in ${l}ms (attempt ${n}/${t})...`),await new Promise(c=>setTimeout(c,l));continue}return{...s,ok:s.status>=200&&s.status<300,json:async()=>r()}}catch(s){if(n>=t)throw s;let r=o+Math.random()*1e3;o*=2,console.warn(`Standard: Network error. Retrying in ${r}ms (attempt ${n}/${t})...`,s),await new Promise(i=>setTimeout(i,r))}}}async function ht(a,e=null){if(a<=0)return;let t=Date.now();for(;Date.now()-t<a&&!(e&&e.cancelled);){let n=a-(Date.now()-t);await new Promise(o=>setTimeout(o,Math.min(50,n)))}}var Aa=class{constructor(e,t){this.app=e,this.plugin=t,this.syncIntervalTimer=null,this.attachmentCache=new Map,this.noteStatsCache=new Map,this.lastAttachmentUploadTime=0,this.lastPublishTime=0,this.remoteOnly=null,this.lastRemoteOnlyCheck=0}isPathExcluded(e){return Ql(e,Yl(this.plugin.settings.excludedFolders))}getPublishableFiles(){return this.app.vault.getMarkdownFiles().filter(t=>!this.isPathExcluded(t.path))}async load(){this.plugin.settings.apiKey&&setTimeout(()=>this.refreshRemoteOnly(!0),8e3),this.plugin.settings.autoSync&&this.plugin.settings.apiKey&&setTimeout(()=>{this.pollRemoteChanges()},5e3),this.setupAutoSyncInterval()}unload(){this.syncIntervalTimer&&(clearInterval(this.syncIntervalTimer),this.syncIntervalTimer=null)}setupAutoSyncInterval(){if(this.syncIntervalTimer&&(clearInterval(this.syncIntervalTimer),this.syncIntervalTimer=null),!!this.plugin.settings.autoSync&&this.plugin.settings.apiKey){let t=window.setInterval(()=>{this.pollRemoteChanges()},3e5);this.syncIntervalTimer=t,this.plugin.registerInterval(t)}}async refreshRemoteOnly(e=!1){if(!this.plugin.settings.apiKey){this.remoteOnly=null;return}let t=Date.now();if(!(!e&&t-this.lastRemoteOnlyCheck<12e4)){this.lastRemoteOnlyCheck=t;try{let n=await Te(`${this.plugin.settings.apiUrl}/publish`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(!n.ok)return;let o=await n.json(),s=new mt(this.app,this.getPublishableFiles()),r=(o.notes||[]).filter(l=>!s.findMatchForRemote(l)),i=(this.remoteOnly?.length??-1)!==r.length;this.remoteOnly=r,i&&typeof this.plugin.panel?.render=="function"&&this.plugin.panel.render()}catch{}}}async pollRemoteChanges(){if(this.plugin.settings.apiKey){this.refreshRemoteOnly();try{let e=this.app.workspace.getActiveFile(),{PublishStatusFeature:t}=Yt(),n=this.plugin.features.find(o=>o instanceof t);n&&e&&await n.triggerStatusCheck(e)}catch{}}}checkApiKeyAndShowModal(){return this.plugin.settings.apiKey?!0:(new Ea(this.app,`No API key configured.
To publish or edit a post, you must link your account.`,"Connect",()=>this.startConnect()).open(),!1)}async verifyApiKey(e,t){if(!this.plugin.settings.apiKey){this.plugin.settings.apiUsername="",await this.plugin.saveSettings(),this.plugin.updateRibbonIconsVisibility(),t&&t();return}try{let n=await P.requestUrl({url:`${this.plugin.settings.apiUrl}/me`,headers:{"x-api-key":this.plugin.settings.apiKey},throw:!1});if(n.status>=200&&n.status<300){let o=n.json;this.plugin.settings.apiUsername=o.username||"",await this.plugin.saveSettings(),this.plugin.updateRibbonIconsVisibility(),e&&e.setText(`\u2713 @${o.username}`)}else this.plugin.settings.apiUsername="",await this.plugin.saveSettings(),this.plugin.updateRibbonIconsVisibility(),e&&e.setText("\u2717 Invalid key")}catch{e&&e.setText("\u2717 Could not connect")}t&&t()}startConnect(){let e=(this.plugin.settings.apiUrl||"https://standard.garden/api").replace(/\/api\/?$/,""),t=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2);this._connectState=t;let n=`${e}/connect/obsidian?state=${encodeURIComponent(t)}`;this._openExternal(n),new P.Notice("Standard : connexion ouverte dans le navigateur\u2026")}_openExternal(e){if(P.Platform.isDesktop)try{require("electron").shell.openExternal(e);return}catch{}window.open(e,"_blank")}async handleConnectCallback(e){let t=e&&e.key,n=e&&e.username||"",o=e&&e.state||"";if(!t){new P.Notice("Garden: connection cancelled (missing key).");return}if(this._connectState&&o!==this._connectState){new P.Notice("Garden: connection skipped (invalid token).");return}this._connectState=null,this.plugin.settings.apiKey=t,this.plugin.settings.apiUsername=n,await this.plugin.saveSettings(),await this.verifyApiKey(null,()=>{this.plugin.settingTab&&this.plugin.settingTab.display()});let s=this.plugin.settings.apiUsername||n;new P.Notice(s?`Garden: connected as @${s} \u2713`:"Garden: connected \u2713")}isUnchangedSinceSync(e,t,n){if(typeof n?.content!="string"||so(t,n.slug)!==so(n.content,n.slug))return!1;let o=n.updated_at?new Date(n.updated_at).getTime():0,s=this.plugin.settings.syncedAt?.[e.path]??o;if(!s)return!1;let r=this.app.metadataCache.getFileCache(e);for(let i of[...r?.embeds||[],...r?.links||[]]){let l=String(i.link||"").split("#")[0];if(!l)continue;let c=this.app.metadataCache.getFirstLinkpathDest(l,e.path);if(c?.stat&&c.path!==e.path&&c.stat.mtime>s)return!1}return!0}markSynced(e){let t=this.plugin.settings;t.syncedAt||(t.syncedAt={}),t.syncedAt[e.path]=Date.now(),clearTimeout(this._syncedAtTimer),this._syncedAtTimer=setTimeout(()=>this.plugin.saveSettings(),1e3)}async syncAllPublished(){if(!this.checkApiKeyAndShowModal())return;let e=this.getPublishableFiles(),t=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey;try{let n=await Te(`${this.plugin.settings.apiUrl}/publish?includeContent=true`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}}),o=[];n.ok?o=(await n.json()).notes||[]:console.warn("Standard : Impossible de r\xE9cup\xE9rer la liste distante pour la r\xE9conciliation.");let s=new Map(o.map(w=>[w.slug,w])),r=new Map(o.filter(w=>w.nano_id).map(w=>[w.nano_id,w])),i=new Map;for(let w of o)if(w.title){let v=ee(w.title);v&&!i.has(v)&&i.set(v,w)}let l=new mt(this.app,e),c=(w,v)=>{if(v["garden-short"]){let L=String(v["garden-short"]).match(/stnd\.gd\/([a-zA-Z0-9_-]+)/);if(L&&r.has(L[1]))return r.get(L[1])}let N=v.permalink??v.slug;if(N!=null){let L=String(N).replace(/^\/+|\/+$/g,""),I=L===""?"~root":L;if(s.has(I))return s.get(I);if(i.has(I))return i.get(I)}let O=ee(w.basename);if(s.has(O))return s.get(O);if(i.has(O))return i.get(O);if(v.title){let L=ee(v.title);if(s.has(L))return s.get(L);if(i.has(L))return i.get(L)}return null},f=new Set,d=[];for(let w of e){let v=this.app.metadataCache.getFileCache(w)?.frontmatter||{},N=v.permalink??v.slug,O=ee(w.basename),L=N!=null?String(N).replace(/^\/+|\/+$/g,""):O,I=L===""?"~root":L,M=Ve(v),D=v["garden-url"]!=null,V=c(w,v);V&&f.add(V),M?d.push({type:"local_published",file:w,remoteNote:V,slug:I,name:w.basename}):V?d.push({type:"local_draft_remote_exists",file:w,remoteNote:V,slug:I,name:w.basename}):D&&this.plugin.settings.syncDirection==="2way"&&d.push({type:"local_published",file:w,remoteNote:V,slug:I,name:w.basename})}if(this.plugin.settings.syncDirection==="2way")for(let w of o)!f.has(w)&&!l.findMatchForRemote(w)&&d.push({type:"remote_only",file:null,remoteNote:w,slug:w.slug,name:w.title||w.slug});if(d.length===0){new P.Notice("Standard : Aucune note \xE0 synchroniser.");return}let u={toPublish:d.filter(w=>w.type==="local_published").length,toUnpublish:d.filter(w=>w.type==="local_draft_remote_exists").length,toCreate:d.filter(w=>w.type==="remote_only").length},h=new La(this.app,d.length,u);h.open();let m=0,p=0,g=0,y=0,b=0,k=0,T=0,S={imagesChecked:0,imagesReused:0,imagesUploaded:0,imagesFailed:0,failedImages:[]},x=new Set;for(let w of d){if(h.cancelled||(h.update({index:T,current:w.name,synced:m,pulled:p,created:g,unpublished:y,skipped:b,failed:k}),h.cancelled))break;try{if(w.type==="local_published"){let{file:v,remoteNote:N}=w,L=(this.app.metadataCache.getFileCache(v)?.frontmatter||{})["garden-url"]!=null;if(N){let I=await this.app.vault.read(v),M=this.isUnchangedSinceSync(v,I,N),D=M?null:await this.uploadContentImages(I,v,!0,S,h,x),V=null;if(!M){let K=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(D));V=Array.from(new Uint8Array(K)).map(Le=>Le.toString(16).padStart(2,"0")).join("")}if(M||N.hash===V)M||this.markSynced(v),b++,h.recordResult("skipped",v.basename);else if(this.plugin.settings.syncDirection==="1way"){let K=Date.now()-this.lastPublishTime;if(K<1100&&await ht(1100-K,h),h.cancelled)break;let X=await this.publishNote(v,!0,D);this.lastPublishTime=Date.now(),X?(m++,h.recordResult("synced",v.basename)):(k++,h.recordResult("failed",v.basename,this.lastError||"Erreur de publication"))}else{let K=v.stat?.mtime||0;if((new Date(N.updated_at).getTime()||0)>K+5e3)await this.app.vault.modify(v,N.content),p++,h.recordResult("pulled",v.basename);else{let Le=Date.now()-this.lastPublishTime;if(Le<1100&&await ht(1100-Le,h),h.cancelled)break;let tn=await this.publishNote(v,!0,D);this.lastPublishTime=Date.now(),tn?(m++,h.recordResult("synced",v.basename)):(k++,h.recordResult("failed",v.basename,this.lastError||"Erreur de publication"))}}}else if(L)if(this.plugin.settings.syncDirection==="1way"){let I=await this.app.vault.read(v),M=await this.uploadContentImages(I,v,!0,S,h,x),D=Date.now()-this.lastPublishTime;if(D<1100&&await ht(1100-D,h),h.cancelled)break;let V=await this.publishNote(v,!0,M);this.lastPublishTime=Date.now(),V?(m++,h.recordResult("synced",v.basename)):(k++,h.recordResult("failed",v.basename,this.lastError||"Erreur de publication"))}else await this.app.fileManager.processFrontMatter(v,I=>{I[t]=!1,delete I["garden-url"],delete I["garden-short"]}),y++,h.recordResult("unpublished",v.basename);else{let I=await this.app.vault.read(v),M=await this.uploadContentImages(I,v,!0,S,h,x),D=Date.now()-this.lastPublishTime;if(D<1100&&await ht(1100-D,h),h.cancelled)break;let V=await this.publishNote(v,!0,M);this.lastPublishTime=Date.now(),V?(m++,h.recordResult("synced",v.basename)):(k++,h.recordResult("failed",v.basename,this.lastError||"Erreur de publication"))}}else if(w.type==="local_draft_remote_exists"){let{file:v,remoteNote:N}=w,O=v.stat?.mtime||0,L=new Date(N.updated_at).getTime()||0;if(this.plugin.settings.syncDirection==="2way"&&L>O+5e3)await this.app.vault.modify(v,N.content),await this.app.fileManager.processFrontMatter(v,M=>{Ve(M)||(M.publish=!0),"status"in M&&delete M.status,M["garden-url"]=this.getLiveUrl(v),N.nano_id&&(M["garden-short"]=`https://stnd.gd/${N.nano_id}`),M.created!=null&&N.created_at&&(M.created=N.created_at),M.modified!=null&&N.updated_at&&(M.modified=N.updated_at)}),p++,h.recordResult("pulled",v.basename);else{let M=w.remoteNote?.slug||w.slug,D=Date.now()-this.lastPublishTime;if(D<1100&&await ht(1100-D,h),h.cancelled)break;let V=await this.unpublishNote(v,M);this.lastPublishTime=Date.now(),V?(y++,h.recordResult("unpublished",v.basename)):(k++,h.recordResult("failed",v.basename,this.lastError||"Erreur de d\xE9publication"))}}else if(w.type==="remote_only"){let{remoteNote:v,slug:N}=w,O=(v.title||N).replace(/[\\\/:\*\?"<>\|]/g,"-").trim();O||(O="Sans titre");let L=`${O}.md`,I=1;for(;this.app.vault.getAbstractFileByPath(L);)L=`${O} (${I}).md`,I++;let M=await this.app.vault.create(L,v.content);await this.app.fileManager.processFrontMatter(M,D=>{Ve(D)||(D.publish=!0),"status"in D&&delete D.status,D["garden-url"]=this.getLiveUrl(M),D.permalink=v.slug,v.nano_id&&(D["garden-short"]=`https://stnd.gd/${v.nano_id}`),D.created!=null&&v.created_at&&(D.created=v.created_at),D.modified!=null&&v.updated_at&&(D.modified=v.updated_at)}),g++,h.recordResult("created",M.basename)}}catch(v){console.error(`Standard : Erreur lors de la synchronisation de ${w.name}:`,v),k++,h.recordResult("failed",w.name)}T++,h.update({index:T,current:w.name,synced:m,pulled:p,created:g,unpublished:y,skipped:b,failed:k})}let C=o.length+m-y;h.done({synced:m,pulled:p,created:g,unpublished:y,skipped:b,failed:k,notesOnline:C,stats:S}),this.refreshRemoteOnly(!0),new P.Notice(`Garden : Synchronisation ${h.cancelled?"annul\xE9e":"termin\xE9e"}. ${m+p+g+y} action(s), ${b} identique(s), ${k} en \xE9chec.`)}catch(n){console.error("Standard : Erreur globale lors de la synchronisation en lot :",n),new P.Notice("Standard : Erreur lors de la synchronisation.")}}async downloadNewOnlineNotes(){if(!this.checkApiKeyAndShowModal())return;let e=this.getPublishableFiles(),t=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey;try{let n=await Te(`${this.plugin.settings.apiUrl}/publish?includeContent=true`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}}),o=[];if(n.ok)o=(await n.json()).notes||[];else{new P.Notice("Garden: Failed to fetch online notes list.");return}let s=new mt(this.app,e),r=[],i=[];for(let c of o){let f=s.findMatchForRemote(c);f?i.push({remoteNote:c,file:f}):r.push(c)}for(let{remoteNote:c,file:f}of i)await this.app.fileManager.processFrontMatter(f,d=>{Ve(d)||(d.publish=!0),"status"in d&&delete d.status,d["garden-url"]||(d["garden-url"]=this.getLiveUrl(f)),!d.permalink&&c.slug&&c.slug!==ee(f.basename)&&(d.permalink=c.slug),c.nano_id&&!d["garden-short"]&&(d["garden-short"]=`https://stnd.gd/${c.nano_id}`),d.created!=null&&c.created_at&&(d.created=c.created_at),d.modified!=null&&c.updated_at&&(d.modified=c.updated_at)});if(r.length===0){new P.Notice(i.length>0?`Garden : Toutes les ${i.length} notes sont d\xE9j\xE0 dans le coffre (m\xE9tadonn\xE9es synchronis\xE9es).`:"Garden : Aucune nouvelle note en ligne \xE0 t\xE9l\xE9charger."),this.refreshRemoteOnly(!0);return}let l=0;for(let c of r){let f=(c.title||c.slug).replace(/[\\\/:\*\?"<>\|]/g,"-").trim();f||(f="Untitled");let d=`${f}.md`,u=1;for(;this.app.vault.getAbstractFileByPath(d);)d=`${f} (${u}).md`,u++;let h=await this.app.vault.create(d,c.content);await this.app.fileManager.processFrontMatter(h,m=>{Ve(m)||(m.publish=!0),"status"in m&&delete m.status,m["garden-url"]=this.getLiveUrl(h),m.permalink=c.slug,c.nano_id&&(m["garden-short"]=`https://stnd.gd/${c.nano_id}`),m.created!=null&&c.created_at&&(m.created=c.created_at),m.modified!=null&&c.updated_at&&(m.modified=c.updated_at)}),l++}new P.Notice(`Garden: Downloaded ${l} new note(s) successfully!`),this.refreshRemoteOnly(!0)}catch(n){console.error("Garden: Error during downloading online notes:",n),new P.Notice("Garden: Failed to download online notes.")}}async publishCurrentNote(){if(!this.checkApiKeyAndShowModal())return;let e=this.app.workspace.getActiveFile();if(!e){new P.Notice("Standard: No active note to publish.");return}if(this.isPathExcluded(e.path)){new P.Notice(`Standard : Cette note se trouve dans un dossier exclu de la publication (${e.path}).`);return}let t=await this.publishWithCheck(e);t===!0?(new P.Notice(`Standard: "${e.basename}" published.`),this.plugin.settings.openAfterPublish&&this.viewLiveVersion(e)):t===!1&&new P.Notice(`Standard: Failed to publish "${e.basename}".`)}async unpublishCurrentNote(){if(!this.checkApiKeyAndShowModal())return;let e=this.app.workspace.getActiveFile();if(!e){new P.Notice("Standard: No active note to unpublish.");return}let t=await this.deleteOnlineVersion(e);t===!0?new P.Notice(`Standard: "${e.basename}" removed from the garden.`):t===!1&&new P.Notice(`Standard: Failed to unpublish "${e.basename}".`)}async cleanUnpublishedNotes(){if(this.checkApiKeyAndShowModal()){new P.Notice("Standard : Recherche des notes \xE0 d\xE9publier...");try{let e=await Te(`${this.plugin.settings.apiUrl}/publish`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}}),t=[];if(e.ok)t=(await e.json()).notes||[];else{new P.Notice("Standard : Impossible de r\xE9cup\xE9rer les notes distantes.");return}let n=this.getPublishableFiles(),o=new mt(this.app,n),s=(this.plugin.settings.keyPrefix||"")+this.plugin.settings.publishKey,r=[],i=new Set;for(let l of t){let c=o.findMatchForRemote(l),f=l.slug||"~root";if(!c)r.push({slug:f,title:l.title||l.slug||"Sans titre",file:null,reason:"orphan"});else{i.add(c);let d=this.app.metadataCache.getFileCache(c)?.frontmatter||{};Ve(d)||r.push({slug:f,title:c.basename,file:c,reason:"draft"})}}for(let l of n){if(i.has(l))continue;let c=this.app.metadataCache.getFileCache(l)?.frontmatter||{};if(!Ve(c)&&(c["garden-url"]||c["garden-short"])){let f=c.permalink??c.slug,d=ee(l.basename),u=f!=null?String(f).replace(/^\/+|\/+$/g,""):d,h=u===""?"~root":u;r.push({slug:h,title:l.basename,file:l,reason:"stale_local"})}}if(r.length===0){new P.Notice("Standard : Aucune note d\xE9publi\xE9e \xE0 nettoyer. Le jardin est parfaitement synchronis\xE9 !");return}new Fa(this.app,this,r).open()}catch(e){console.error("Standard : Erreur lors du nettoyage :",e),new P.Notice("Standard : Erreur lors de la recherche des notes.")}}}getGardenDomain(){try{let e=this.app.vault.getMarkdownFiles();for(let t of e){let o=this.app.metadataCache.getFileCache(t)?.frontmatter||{};if((o.permalink==="/"||o.permalink==="index"||t.basename.toLowerCase()==="index")&&rawDomain)return String(rawDomain).trim().replace(/^https?:\/\//,"").replace(/\/$/,"")}}catch(e){console.error("Standard: Error scanning for garden-domain:",e)}return null}getLiveUrl(e){let t=this.app.metadataCache.getFileCache(e)?.frontmatter||{};if(t["garden-url"])return String(t["garden-url"]).trim();let n=t.permalink??t.slug,o=ee(e.basename),s=n!=null?String(n).replace(/^\/+|\/+$/g,""):o,r=this.getGardenDomain();if(r)return s===""?`https://${r}`:`https://${r}/${s}`;{let i="https://standard.garden";return s===""?`${i}/@${this.plugin.settings.apiUsername}`:`${i}/@${this.plugin.settings.apiUsername}/${s}`}}viewLiveVersion(e){let t=e||this.app.workspace.getActiveFile();if(!t){new P.Notice("Standard: No active note.");return}let n=this.getLiveUrl(t);this.plugin.settings.openInObsidianWeb?this.app.workspace.getLeaf("split","vertical").setViewState({type:"webviewer",state:{url:n}}):this._openExternal(n)}copyLiveUrl(e){let t=e||this.app.workspace.getActiveFile();if(!t){new P.Notice("Standard : Aucune note active.");return}let n=this.getLiveUrl(t);navigator.clipboard.writeText(n),new P.Notice("Standard : URL publique copi\xE9e dans le presse-papiers.")}copyShortUrl(e){let t=e||this.app.workspace.getActiveFile();if(!t){new P.Notice("Standard : Aucune note active.");return}let n=this.app.metadataCache.getFileCache(t)?.frontmatter||{},o=n["garden-short"]??n.garden_short??n.short_url;o?(navigator.clipboard.writeText(String(o).trim()),new P.Notice("Standard : URL courte copi\xE9e dans le presse-papiers.")):this.copyLiveUrl(t)}shareCurrentNote(e){let t=e||this.app.workspace.getActiveFile();if(!t){new P.Notice("Standard : Aucune note active.");return}let n=this.getLiveUrl(t);new nc(this.app,t.basename,n).open()}async setNoteVisibility(e,t){let n=t||this.app.workspace.getActiveFile();if(!n||n.extension!=="md"){new P.Notice("Standard : Ouvrez une note Markdown.");return}await this.app.fileManager.processFrontMatter(n,o=>{o.visibility=e}),new P.Notice(`Standard : Visibilit\xE9 d\xE9finie sur "${e}".`)}async cycleNoteVisibility(e){let t=e||this.app.workspace.getActiveFile();if(!t||t.extension!=="md"){new P.Notice("Standard : Ouvrez une note Markdown.");return}let n=this.app.metadataCache.getFileCache(t),o=String(n?.frontmatter?.visibility||"public").toLowerCase().trim(),s=["public","unlisted","private"],r=s.indexOf(o),i=s[(r+1)%s.length];await this.setNoteVisibility(i,t)}stripFrontmatter(e){return e?e.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/,""):""}extractMarkdownSubpath(e,t){if(!e||!t)return e;let n=t.trim();if(!n)return e;if(n.startsWith("^")){let c=n.slice(1),f=e.split(`
`),d=[],u=!1;for(let h=0;h<f.length;h++)if(f[h].includes(`^${c}`)){u=!0;let m=h;for(;m>0&&f[m-1].trim()!==""&&!f[m-1].startsWith("#");)m--;let p=h;for(;p<f.length-1&&f[p+1].trim()!==""&&!f[p+1].startsWith("#");)p++;for(let g=m;g<=p;g++)d.push(f[g].replace(new RegExp(`\\s*\\^${c}\\s*$`),""));break}return u?d.join(`
`).trim():e}let o=n.replace(/^#+/,"").trim().toLowerCase(),s=e.split(`
`),r=!1,i=0,l=[];for(let c=0;c<s.length;c++){let f=s[c],d=f.match(/^(#{1,6})\s+(.+)$/);if(d){let u=d[1].length,h=d[2].replace(/[#*`_\[\]]/g,"").trim().toLowerCase();if(r){if(u<=i)break;l.push(f)}else(h===o||h.startsWith(o))&&(r=!0,i=u,l.push(f))}else r&&l.push(f)}return r&&l.length>0?l.join(`
`).trim():e}async resolveNoteTransclusions(e,t,n=0,o=new Set){if(!e||n>5)return e;let s=t?t.path:"",r=new Set(o);s&&r.add(s);let i=/!\[\[([^\]]+)\]\]/g,l=[...e.matchAll(i)];if(l.length===0)return e;let c=e;for(let f of l){let d=f[0],u=f[1],[h]=u.split("|"),m=h.trim();if(Na(m)||ao(m)||Qr(m))continue;let p=m.indexOf("#"),g=p!==-1?m.slice(0,p).trim():m,y=p!==-1?m.slice(p+1).trim():null,b=null;if(g?b=this.app.metadataCache.getFirstLinkpathDest(g,s):t&&(b=t),!(!b||b.extension!=="md")){if(r.has(b.path)&&n>0&&!y){console.warn(`Standard: Circular transclusion detected for ${b.path}`),c=c.replace(d,"");continue}try{let k=await this.app.vault.read(b),T=this.stripFrontmatter(k);y&&(T=this.extractMarkdownSubpath(T,y));let S=new Set(r);S.add(b.path);let x=await this.resolveNoteTransclusions(T,b,n+1,S);c=c.replace(d,x.trim())}catch(k){console.warn(`Standard: Error resolving transclusion ${d}:`,k)}}}return c}async uploadContentImages(e,t,n=!1,o=null,s=null,r=null){if(!this.plugin.settings.apiKey)return e;let i=await this.resolveNoteTransclusions(e,t),l=new Map,c=async m=>{if(s&&s.cancelled)return null;if(l.has(m.path))return l.get(m.path);try{let p=m.stat?.mtime||0,g=m.stat?.size||0,y=m.name.split(".").pop()?.toLowerCase()||"bin",b="",k="",T=this.attachmentCache?.get(m.path);if(T&&T.mtime===p&&T.size===g&&T.contentHash)b=T.contentHash,k=T.cdnUrl;else{let K=await this.app.vault.readBinary(m),X=await crypto.subtle.digest("SHA-256",K);b=Array.from(new Uint8Array(X)).map(tn=>tn.toString(16).padStart(2,"0")).join("")}if(r&&r.has(b)&&k)return l.set(m.path,k),o&&(o.imagesChecked=(o.imagesChecked||0)+1,o.imagesReused=(o.imagesReused||0)+1),k;let S=`${this.plugin.settings.apiUrl}/publish/attachment?hash=${b}&ext=${y}`,x=await Te(S,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(x.status>=200&&x.status<300){let K=await x.json();if(K?.exists&&K.url)return k=new URL(K.url,this.plugin.settings.apiUrl).href,this.attachmentCache&&this.attachmentCache.set(m.path,{mtime:p,size:g,contentHash:b,cdnUrl:k}),r&&r.add(b),l.set(m.path,k),o&&(o.imagesChecked=(o.imagesChecked||0)+1,o.imagesReused=(o.imagesReused||0)+1),k}if(n){let K=Date.now()-this.lastAttachmentUploadTime;if(K<2e3&&await ht(2e3-K,s),s&&s.cancelled)return null}let C=await this.app.vault.readBinary(m),w="----ObsidianBoundary"+Math.random().toString(36).substring(2),v=[`--${w}`,`Content-Disposition: form-data; name="file"; filename="${m.name}"`,`Content-Type: ${ec(m.name)}`,"",""].join(`\r
`),N=`\r
--${w}--`,O=new Uint8Array(C),L=new TextEncoder().encode(v),I=new TextEncoder().encode(N),M=new Uint8Array(L.length+O.byteLength+I.length);M.set(L,0),M.set(O,L.length),M.set(I,L.length+O.byteLength);let D=await Te(`${this.plugin.settings.apiUrl}/publish/attachment`,{method:"POST",headers:{"x-api-key":this.plugin.settings.apiKey,"Content-Type":`multipart/form-data; boundary=${w}`},body:M.buffer});if(this.lastAttachmentUploadTime=Date.now(),D.status<200||D.status>=300){let K=`HTTP ${D.status}`;try{let X=await D.json();X?.error&&(K=X.error)}catch{}return console.warn(`Standard: Failed to upload ${m.name}: ${K}`,D.status),o&&(o.imagesChecked=(o.imagesChecked||0)+1,o.imagesFailed=(o.imagesFailed||0)+1,o.failedImages&&o.failedImages.push({name:m.name,detail:K})),null}let V=await D.json();return V?.url?(k=new URL(V.url,this.plugin.settings.apiUrl).href,this.attachmentCache&&this.attachmentCache.set(m.path,{mtime:p,size:g,contentHash:b,cdnUrl:k}),r&&r.add(b),l.set(m.path,k),o&&(o.imagesChecked=(o.imagesChecked||0)+1,o.imagesUploaded=(o.imagesUploaded||0)+1),k):(console.warn(`Standard: ${m.name} accept\xE9 par le serveur sans URL en retour`,V),o&&(o.imagesChecked=(o.imagesChecked||0)+1,o.imagesFailed=(o.imagesFailed||0)+1,o.failedImages&&o.failedImages.push({name:m.name,detail:"R\xE9ponse serveur sans URL"})),null)}catch(p){return console.warn(`Standard: Error uploading ${m.name}`,p),o&&(o.imagesChecked=(o.imagesChecked||0)+1,o.imagesFailed=(o.imagesFailed||0)+1,o.failedImages&&o.failedImages.push({name:m.name,detail:p.message||String(p)})),null}},f=i,d=/!\[\[([^\]]+)\]\]/g;for(let m of[...f.matchAll(d)]){let p=m[1],g=p.split("|")[0].trim();if(!Na(g))continue;let y=this.app.metadataCache.getFirstLinkpathDest(g,t.path);if(!y)continue;let b=await c(y);if(!b)continue;let k=p.includes("|")?p.split("|")[1]:y.basename;if(ao(g))f=f.replaceAll(m[0],`![${k}](${b})`);else if(Qr(g))f=f.replaceAll(m[0],`[${k}](${b} "pdf-embed")`);else{let T=`${b}?download=${encodeURIComponent(y.name)}`;f=f.replaceAll(m[0],`[${k}](${T})`)}}let u=/(^|[^!])\[\[([^\]]+)\]\]/g;for(let m of[...f.matchAll(u)]){let p=m[2],g=p.split("|")[0].trim();if(!Na(g)||ao(g))continue;let y=this.app.metadataCache.getFirstLinkpathDest(g,t.path);if(!y)continue;let b=await c(y);if(!b)continue;let k=p.includes("|")?p.split("|")[1]:y.name,T=`${b}?download=${encodeURIComponent(y.name)}`;f=f.replaceAll(m[0],`${m[1]}[${k}](${T})`)}let h=/!\[([^\]]*)\]\(([^)]+)\)/g;for(let m of[...f.matchAll(h)]){let p=m[2];if(/^https?:\/\//.test(p)||!ao(p))continue;let g=decodeURIComponent(p),y=this.app.vault.getFileByPath(g)||this.app.metadataCache.getFirstLinkpathDest(g,t.path);if(!y)continue;let b=await c(y);b&&(f=f.replaceAll(m[0],`![${m[1]}](${b})`))}return f}async publishNote(e,t=!1,n=null){if(this.isPathExcluded(e.path))return this.lastError="Folder is excluded from publication",!1;try{let o=n!==null?n:await this.uploadContentImages(await this.app.vault.read(e),e,t),s=this.app.metadataCache.getFileCache(e)?.frontmatter||{},r=s.permalink??s.slug,i=ee(e.basename),l=r!=null?String(r).replace(/^\/+|\/+$/g,""):i,c=l===""?"~root":l,f=s.created||(e.stat?.ctime?new Date(e.stat.ctime).toISOString():new Date().toISOString()),d=s.modified||(e.stat?.mtime?new Date(e.stat.mtime).toISOString():new Date().toISOString()),u=await Te(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(c)}`,{method:"PUT",headers:{"Content-Type":"application/json","x-api-key":this.plugin.settings.apiKey},body:JSON.stringify({title:e.basename,content:o,slug:c,created_at:f,updated_at:d})});if(u.status<200||u.status>=300){let p=`HTTP ${u.status}`;try{let g=JSON.parse(u.text||"{}");g.error&&(p+=`: ${g.error}`)}catch{u.text&&(p+=`: ${u.text.slice(0,80)}`)}return this.lastError=p,console.error(`Standard: Publish failed for ${e.basename}:`,u.status,u.text),!1}let h=await u.json().catch(()=>null),m=this.getLiveUrl(e);return await this.app.fileManager.processFrontMatter(e,p=>{delete p.published,delete p.url_public,p["garden-url"]=m,l!==""&&(p.permalink=l),h&&h.nano_id&&(p["garden-short"]=`https://stnd.gd/${h.nano_id}`),p.modified!=null&&(p.modified=new Date().toISOString())}),this.markSynced(e),!0}catch(o){return this.lastError=o.message||String(o),console.error(`Standard: Publish error for ${e.basename}:`,o),!1}}async unpublishNote(e,t=null){try{let n=t;if(!n&&e){let s=await Ca(this.app,e),r=s.permalink??s.slug,i=ee(e.basename),l=r!=null?String(r).replace(/^\/+|\/+$/g,""):i;n=l===""?"~root":l}if(!n)return!1;let o=await Te(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(n)}`,{method:"DELETE",headers:{"x-api-key":this.plugin.settings.apiKey}});if(o.status!==404&&(o.status<200||o.status>=300)){let s=`HTTP ${o.status}`;try{let r=JSON.parse(o.text||"{}");r.error&&(s+=`: ${r.error}`)}catch{o.text&&(s+=`: ${o.text.slice(0,80)}`)}return this.lastError=s,console.error(`Standard: Unpublish failed for ${e?e.basename:n}:`,o.status),!1}return e&&(this.noteStatsCache.delete(e.path),await this.app.fileManager.processFrontMatter(e,s=>{s.publish=!1,"status"in s&&delete s.status,delete s.published,delete s.url_public,delete s["garden-url"],delete s["garden-short"]})),!0}catch(n){return console.error(`Standard: Unpublish error for ${e?e.basename:t}:`,n),!1}}async generateTokens(e,t,n){let o=this.plugin.settings.apiKey;if(!o)throw new Error("Connect your Standard Garden account in settings first.");let s=Object.fromEntries(Object.entries(n).filter(([l])=>$l.has(l))),r=await P.requestUrl({url:`${this.plugin.settings.apiUrl}/ai/theme`,method:"POST",headers:{"Content-Type":"application/json","x-api-key":o},body:JSON.stringify({instruction:e,noteContent:t,currentTokens:s}),throw:!1});if(r.status<200||r.status>=300){let l=r.text;throw new Error(`Standard API ${r.status}: ${l}`)}let i=r.json;if(!i.tokens)throw new Error("No tokens returned from AI service");return i.tokens}async publishWithCheck(e){if(!this.checkApiKeyAndShowModal())return null;let n=this.app.metadataCache.getFileCache(e)?.frontmatter||{},o=async()=>(await this.app.fileManager.processFrontMatter(e,i=>{Ve(i)||(i.publish=!0),"status"in i&&delete i.status}),await this.publishNote(e)),s=[];return(n.publish===!1||n.publish==="false"||n.status==="draft")&&s.push("\u2022 publish: false \u2014 it was marked not to publish"),String(n.visibility||"").toLowerCase()==="private"&&s.push("\u2022 visibility: private \u2014 visitors won't see it"),s.length>0?new Promise(r=>{new Ea(this.app,`\u{1F331} Plant "${e.basename}" in the garden anyway?

${s.join(`
`)}`,"Plant it",async()=>r(await o()),()=>r(null)).open()}):await o()}async checkNoteStatus(e){if(!this.plugin.settings.apiKey||this.isPathExcluded(e.path))return{status:"unpublished"};try{let t=await Ca(this.app,e),n=t.permalink??t.slug,o=ee(e.basename),s=n!=null?String(n).replace(/^\/+|\/+$/g,""):o,r=s===""?"~root":s,i=await Te(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(r)}`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(i.status===404)return{status:"unpublished"};if(i.status<200||i.status>=300)throw new Error(`HTTP error ${i.status}`);let l=await i.json(),c=l.content||"",f=l.hash,d=l.updated_at?new Date(l.updated_at).getTime():0;this.noteStatsCache.set(e.path,{views:l.views||0,citations:Array.isArray(l.citations)?l.citations:[],related:Array.isArray(l.related)?l.related:[],created_at:l.created_at,updated_at:l.updated_at,online:!0});let u=await this.app.vault.read(e),h=S=>{if(!S)return"";let x=S.replace(/\r\n/g,`
`);return x=x.replace(/!\[\[([^\]]+)\]\]/g,(C,w)=>{let v=w.split("|"),N=v[0].trim(),O=v[1]?v[1].trim():"";return O?`[IMAGE:${O.toLowerCase()}]`:`[IMAGE:${(N.substring(0,N.lastIndexOf("."))||N).toLowerCase()}]`}),x=x.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(C,w,v)=>{let N=w.trim();if(N)return`[IMAGE:${N.toLowerCase()}]`;let O=v.split("/").pop()||"";return`[IMAGE:${(O.substring(0,O.lastIndexOf("."))||O).toLowerCase()}]`}),x.trim()},m=h(u),p=h(c),g=new TextEncoder().encode(m),y=await crypto.subtle.digest("SHA-256",g),k=Array.from(new Uint8Array(y)).map(S=>S.toString(16).padStart(2,"0")).join("");if(f===k||so(u,r)===so(c,r))return{status:"synced"};let T=e.stat.mtime;return d>T+5e3?{status:"outdated",remoteContent:c}:{status:"changed"}}catch(t){return console.error("Standard : Erreur lors de la v\xE9rification du statut de la note :",t),{status:"error"}}}async deleteOnlineVersion(e){return this.checkApiKeyAndShowModal()?new Promise(t=>{new Ea(this.app,`Remove "${e.basename}" from Standard Garden?

The online version will be permanently deleted.`,"Delete online version",async()=>{let n=await this.unpublishNote(e);t(n)},()=>t(null)).open()}):null}async getNoteStats(e){if(!this.plugin.settings.apiKey||this.isPathExcluded(e.path))return null;try{let t=await Ca(this.app,e),n=t.permalink??t.slug,o=ee(e.basename),s=n!=null?String(n).replace(/^\/+|\/+$/g,""):o,r=s===""?"~root":s,i=await Te(`${this.plugin.settings.apiUrl}/publish/${encodeURIComponent(r)}`,{method:"GET",headers:{"x-api-key":this.plugin.settings.apiKey}});if(i.status===200){let l=await i.json(),c={views:l.views||0,citations:Array.isArray(l.citations)?l.citations:[],related:Array.isArray(l.related)?l.related:[],created_at:l.created_at,updated_at:l.updated_at,online:!0};return this.noteStatsCache.set(e.path,c),c}return null}catch(t){return console.error("[Standard] Error fetching note stats:",t),null}}async askHypheInquiry(e,t){if(!this.checkApiKeyAndShowModal())return null;try{let n=e?e.basename:"Untitled",o=await P.requestUrl({url:`${this.plugin.settings.apiUrl}/ai/inquire`,method:"POST",headers:{"Content-Type":"application/json","x-api-key":this.plugin.settings.apiKey},body:JSON.stringify({title:n,content:t}),throw:!1});if(o.status===200){let s=o.json;return Array.isArray(s.questions)?s.questions:[]}else{let s=o.text||"";if(s.trim().startsWith("<")||s.includes("<html"))s=`Endpoint returned HTTP ${o.status} (service updating)`;else try{let r=JSON.parse(s);r.error&&(s=r.error)}catch{}throw new Error(s||`Server error (${o.status})`)}}catch(n){throw console.error("[Standard] Error calling askHypheInquiry:",n),n}}async askGardenAI(){this.checkApiKeyAndShowModal()&&new tc(this.app,this.plugin).open()}};$r.exports={GardenFeature:Aa}});var ni=j((Qm,ti)=>{"use strict";var{EditorSuggest:sc,setTooltip:rc}=require("obsidian"),Da=[{id:"feed",name:"::feed",category:"Flux",syntax:"::feed #tag",description:"Flux de cartes visuelles avec image cover, date relative et extrait markdown.",insertText:"::feed #",cursorOffset:8},{id:"list",name:"::list",category:"Flux",syntax:"::list #tag",description:"Liste compacte \xE0 puces des notes li\xE9es au tag sp\xE9cifi\xE9.",insertText:"::list #",cursorOffset:8},{id:"callout",name:"::callout",category:"Bloc",syntax:`::callout note
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

::end`,cursorLineOffset:1,cursorChOffset:0},{id:"small",name:"::small",category:"Bloc",syntax:`::small
...
::end`,description:"Corps r\xE9duit pour notes de bas de page ou mentions secondaires.",insertText:`::small

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
::end`,cursorLineOffset:1,cursorChOffset:0}],Oa=class extends sc{constructor(e,t){super(e),this.plugin=t}onTrigger(e,t,n){let r=t.getLine(e.line).slice(0,e.ch).match(/(?:^|[\s>])(::([a-zA-Z0-9_-]*))$/);if(!r)return null;let i=r[1],l=r[2],c=e.ch-i.length,f={start:{line:e.line,ch:c},end:{line:e.line,ch:e.ch},query:l};return this.latestTriggerInfo=f,f}getSuggestions(e){let t=(e.query||"").toLowerCase().trim(),n;return t?n=Da.filter(o=>o.id.toLowerCase().includes(t)||o.name.toLowerCase().includes(t)||o.category.toLowerCase().includes(t)||o.description.toLowerCase().includes(t)):n=Da,n.map(o=>({...o,context:e}))}renderSuggestion(e,t){t.addClass("stnd-suggest-item");let n=t.createDiv({cls:"stnd-suggest-header"});n.createSpan({cls:"stnd-suggest-name",text:e.name});let o=`stnd-suggest-badge badge-${e.category.toLowerCase().replace(/[^a-z]/g,"")}`;n.createSpan({cls:o,text:e.category}),e.syntax&&n.createSpan({cls:"stnd-suggest-syntax",text:e.syntax}),t.createDiv({cls:"stnd-suggest-desc",text:e.description});let s=`${e.name} (${e.category})
Syntaxe: ${e.syntax}
${e.description}`;try{rc(t,s,{placement:"right"})}catch{t.setAttribute("title",s)}}selectSuggestion(e,t){let n=e.context||this.context||this.latestTriggerInfo,o=this.app.workspace.activeEditor?.editor||this.context?.editor;if(!o||!n)return;let{start:s,end:r}=n;o.replaceRange(e.insertText,s,r),e.cursorOffset!==void 0?o.setCursor({line:s.line,ch:s.ch+e.cursorOffset}):e.cursorLineOffset!==void 0&&o.setCursor({line:s.line+e.cursorLineOffset,ch:e.cursorChOffset||0}),this.close()}};ti.exports={StandardDirectiveSuggest:Oa,DIRECTIVES:Da}});var Ra=j((eg,ii)=>{"use strict";var{BasesView:ic,MarkdownRenderer:lc,MarkdownRenderChild:cc,Setting:$m,Platform:ai}=require("obsidian"),si="standard-feed",dc="atelier-feed",ri={maxItems:50,previewChars:600,showCovers:!0};function oi(a){if(!a)return"";let e=new Date(a);if(isNaN(e.getTime()))return"";let n=Math.floor((new Date().getTime()-e.getTime())/864e5);return n===0?"Aujourd'hui":n===1?"Hier":n>1&&n<7?`Il y a ${n} jours`:e.toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function fc(a){if(!a)return"";if(a.startsWith("---")){let e=a.indexOf(`
---`,3);if(e!==-1){let t=a.indexOf(`
`,e+1);return t!==-1?a.slice(t+1):""}}return a}function uc(a,e,t){let n=t?.frontmatter||t||{};for(let r of["cover","image","banner"]){let i=null;if(typeof t?.getValue=="function")try{i=t.getValue(`note.${r}`)}catch{}if(!i&&n[r]&&(i=n[r]),i){let l=String(i).trim();if(/^https?:\/\//i.test(l))return l;let c=l.replace(/^\[\[/,"").replace(/\]\]$/,""),f=a.metadataCache.getFirstLinkpathDest(c,"");if(f)return a.vault.adapter.getResourcePath(f.path)}}let o=e.match(/!\[[^\]]*\]\(([^)]+)\)/);if(o){let r=o[1].trim();if(/^https?:\/\//i.test(r))return r;let i=a.metadataCache.getFirstLinkpathDest(r,"");if(i)return a.vault.adapter.getResourcePath(i.path)}let s=e.match(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/);if(s){let r=s[1].trim(),i=a.metadataCache.getFirstLinkpathDest(r,"");if(i)return a.vault.adapter.getResourcePath(i.path)}return null}var ro=class a{static async renderCard(e,t,n,o={},s=null){let{previewChars:r=600,showCovers:i=!0,token:l=null,getToken:c=()=>null}=o;if(l!==null&&c()!==l||!t||!t.isConnected)return;let f=t.createDiv({cls:"stnd-feed-card"}),d=f.createDiv({cls:"stnd-feed-card-header"}),h=e.metadataCache.getFileCache(n)?.frontmatter||{},m=h.title||n.basename;d.createDiv({cls:"stnd-feed-title",text:m});let p=h.publish||h.created||n.stat?.mtime;p&&d.createDiv({cls:"stnd-feed-date",text:oi(p)}),f.addEventListener("click",y=>{y.target.closest("a")||e.workspace.getLeaf(y.metaKey||y.ctrlKey?"tab":!1).openFile(n)});let g=f.createDiv({cls:"stnd-feed-body"});try{let y=await e.vault.cachedRead(n);if(l!==null&&c()!==l||!f.isConnected)return;let b=fc(y);if(b=b.replace(/^::.*$/gm,"").trim(),i){let k=uc(e,b,h);if(k){let T=g.createEl("img",{cls:"stnd-feed-cover"});T.src=k,T.loading="lazy"}}if(r>0&&b.length>r&&(b=b.slice(0,r).trimEnd()+"\u2026"),b){if(l!==null&&c()!==l||!f.isConnected)return;await lc.render(e,b,g,n.path,s)}}catch{}}static renderFeedOrList(e,t,n,o,s,r=null){let i=!!ai?.isMobile;if(r&&typeof r.addChild=="function")try{let w=new cc(t);w.onunload=()=>{t._stndFeedToken=(t._stndFeedToken||0)+1},r.addChild(w)}catch{}let l=(o||"").trim(),c=null,f=l.match(/(?:\s+limit[=:]\s*(\d+)|\s+(\d+))$/i);f&&(c=parseInt(f[1]||f[2],10),l=l.slice(0,f.index).trim()),l=l.replace(/^#/,"").toLowerCase();let d=e.vault.getMarkdownFiles().filter(w=>!s?.garden?.isPathExcluded(w.path)),u=[],h=(s?.settings?.keyPrefix||"")+(s?.settings?.publishKey||"publish");for(let w of d){let v=e.metadataCache.getFileCache(w),N=v?.frontmatter||{},L=[...Array.isArray(N.tags)?N.tags:typeof N.tags=="string"?[N.tags]:[],...(v?.tags||[]).map(M=>M.tag)];if((!l||L.some(M=>{let D=String(M).toLowerCase().replace(/^#/,"");return D===l||D.startsWith(l+"/")}))&&(N[h]===!0||typeof N[h]=="string"||N.visibility==="public"||!!N[h])){let D=N.publish?new Date(N.publish).getTime():N.created?new Date(N.created).getTime():w.stat.mtime;u.push({file:w,title:N.title||w.basename,time:isNaN(D)?w.stat.mtime:D,excerpt:N.excerpt||"",fm:N})}}if(u.sort((w,v)=>v.time-w.time),u.length===0){t.createEl("p",{text:l?`Aucune note publique trouv\xE9e pour #${l}`:"Aucune note publique trouv\xE9e.",cls:"stnd-feed-empty"});return}let m=t._stndFeedToken=(t._stndFeedToken||0)+1,p=()=>t._stndFeedToken,g=r&&typeof r.register=="function"?r:s;if(n==="list"){let w=t.createEl("ul",{cls:"stnd-feed-list"}),N=c||(i?30:100),O=0,L=null,I=(D,V)=>{let K=u.slice(D,D+V);for(let X of K){let Le=w.createEl("li");Le.createEl("a",{text:X.title,cls:"internal-link stnd-feed-link"}).addEventListener("click",Li=>{Li.preventDefault(),e.workspace.getLeaf().openFile(X.file)}),X.time&&Le.createSpan({cls:"stnd-feed-list-date",text:` (${oi(X.time)})`})}O=D+K.length,M()},M=()=>{L&&(L.remove(),L=null);let D=u.length-O;D>0&&(L=t.createDiv({cls:"stnd-feed-more"}),L.createEl("button",{cls:"stnd-feed-more-btn",text:`+ ${D} note(s) de plus (afficher)`}).addEventListener("click",()=>{I(O,N)}))};I(0,N);return}let y=t.createDiv({cls:"stnd-feed"}),k=c||(i?10:25),T=0,S=null,x=async(w,v)=>{let N=u.slice(w,w+v);for(let O of N){if(p()!==m||!t.isConnected)break;await a.renderCard(e,y,O.file,{previewChars:s?.settings?.feed?.previewChars??(i?300:600),showCovers:s?.settings?.feed?.showCovers??!0,token:m,getToken:p},g),await new Promise(L=>setTimeout(L,i?25:5))}T=w+N.length,C()},C=()=>{if(S&&(S.remove(),S=null),p()!==m||!t.isConnected)return;let w=u.length-T;if(w>0){S=t.createDiv({cls:"stnd-feed-more"});let v=S.createEl("button",{cls:"stnd-feed-more-btn mod-cta",text:`+ ${w} note(s) de plus (afficher ${Math.min(w,k)})`});v.addEventListener("click",async()=>{v.disabled=!0,v.textContent="Chargement...",await x(T,k)})}};x(0,k)}},Qt=class extends(ic||class{}){constructor(t,n,o){super(t);Qa(this,"type",si);this.feedContainerEl=n,this.settings=o,this.renderToken=0}onload(){this.feedContainerEl.addClass("stnd-feed"),this._render()}onunload(){this.renderToken++,this.feedContainerEl.removeClass("stnd-feed"),this.feedContainerEl.empty()}onDataUpdated(){this._render()}async _render(){let t=++this.renderToken,n=this.feedContainerEl;if(!n||(n.empty(),!this.data))return;let o=this.data?.data??[];if(o.length===0){n.createDiv({cls:"stnd-feed-empty",text:"Aucune note dans ce feed."});return}let s=!!ai?.isMobile,r=s?15:50,i=this._option("maxItems",this.settings?.maxItems??r),l=this._option("previewChars",this.settings?.previewChars??(s?300:600)),c=this._option("showCovers",this.settings?.showCovers??!0),f=o.slice(0,i);for(let d of f){let u=d.file;if(u){if(this.renderToken!==t||!n.isConnected)break;await ro.renderCard(this.app,n,u,{previewChars:l,showCovers:c,token:t,getToken:()=>this.renderToken},this),await new Promise(h=>setTimeout(h,s?25:5))}}this.renderToken===t&&n.isConnected&&o.length>f.length&&n.createDiv({cls:"stnd-feed-more",text:`+ ${o.length-f.length} note(s) de plus \u2014 affine le filtre ou augmente la limite.`})}_option(t,n){try{let o=this.config?.get?.(t);return o??n}catch{return n}}},Ma=class{constructor(e,t){this.app=e,this.plugin=t,t.settings.feed||(t.settings.feed={...ri}),this.settings=t.settings.feed}async load(){if(typeof this.plugin.registerBasesView=="function"){let e=()=>[{type:"slider",key:"maxItems",displayName:"Max entries",default:this.settings.maxItems,min:5,max:200,step:5},{type:"slider",key:"previewChars",displayName:"Preview length (chars, 0 = full)",default:this.settings.previewChars,min:0,max:2e3,step:100},{type:"toggle",key:"showCovers",displayName:"Show cover images",default:this.settings.showCovers}];this.plugin.registerBasesView(si,{name:"Feed",icon:"rss",factory:(t,n)=>new Qt(t,n,this.settings),options:e}),this.plugin.registerBasesView(dc,{name:"Feed (Legacy)",icon:"rss",factory:(t,n)=>new Qt(t,n,this.settings),options:e})}}async unload(){}};ii.exports={FeedFeature:Ma,FeedBasesView:Qt,FeedCardRenderer:ro,DEFAULT_FEED_SETTINGS:ri}});var ci=j((ag,li)=>{"use strict";var og=require("obsidian"),{StandardDirectiveSuggest:pc}=ni(),{FeedCardRenderer:hc}=Ra();function mc(a){if(!a)return null;try{let e=new URL(a);if((e.hostname==="www.youtube.com"||e.hostname==="youtube.com")&&e.searchParams.has("v"))return e.searchParams.get("v");if(e.hostname==="youtu.be")return e.pathname.slice(1).split("/")[0]||null;if((e.hostname==="www.youtube.com"||e.hostname==="youtube.com")&&e.pathname.startsWith("/embed/"))return e.pathname.split("/")[2]||null}catch{}return null}function gc(a){if(!a)return null;try{let e=new URL(a);if(e.hostname==="vimeo.com"||e.hostname==="www.vimeo.com"){let t=e.pathname.split("/").filter(Boolean),n=t[t.length-1];if(n&&/^\d+$/.test(n))return n}if(e.hostname==="player.vimeo.com"&&e.pathname.startsWith("/video/"))return e.pathname.split("/")[2]||null}catch{}return null}var Ia=class{constructor(e,t){this.app=e,this.plugin=t}async load(){this.plugin.registerMarkdownPostProcessor((e,t)=>{this.processSyntaxDirectives(e,t)}),this.plugin.registerEditorSuggest(new pc(this.app,this.plugin))}async unload(){}processSyntaxDirectives(e,t){Array.from(e.querySelectorAll("p")).forEach(r=>{let i=r.textContent.trim();if(i.startsWith("::space")){let d=i.substring(7).trim(),h=`space-${{small:"2",medium:"4",large:"6",xlarge:"8"}[d]||"4"}`,m=document.createElement("div");m.className=h,r.replaceWith(m);return}if(i.startsWith("::download")){let d=i.substring(10).trim()||"Download",u=document.createElement("button");u.type="button",u.className="btn note-download",u.textContent=d,r.replaceWith(u);return}let l=i.match(/^::(note|alert|warning|error|success|muted|subtle)\s+([\s\S]+)$/i);if(l){let d=l[1].toLowerCase(),u=l[2].trim(),h;if(d==="note"?(h=document.createElement("aside"),h.className="note",h.textContent=u):["alert","warning","error","success"].includes(d)?(h=document.createElement("div"),h.className=`alert ${d==="alert"?"":d}`,h.textContent=u):["muted","subtle"].includes(d)&&(h=document.createElement("p"),h.className=d,h.textContent=u),h){r.replaceWith(h);return}}let c=i.match(/^::video\s+([^\n]+)/i);if(c){let d=c[1].trim(),u=this.renderVideoEmbed(d);if(u){r.replaceWith(u);return}}let f=i.match(/^::(feed|list)(?:\s+([^\n]+))?$/i);if(f){let d=f[1].toLowerCase(),u=(f[2]||"").trim(),h=document.createElement("div");h.className=`dynamic-feed-container feed-type-${d}`,this.renderFeedOrList(h,d,u,t),r.replaceWith(h);return}});let o=Array.from(e.children),s=0;for(;s<o.length;){let r=o[s];if(r.tagName==="P"){let l=r.textContent.trim().match(/^::(callout|toggle|cards|hero-block|small|feature-block|grid|split|columns|card|image|gallery|button|form|hero|full|feature|editorial|excerpt)\s*(.*)$/i);if(l){let c=l[1].toLowerCase(),f=l[2].trim(),d=-1;for(let u=s+1;u<o.length;u++)if(o[u].tagName==="P"&&o[u].textContent.trim()==="::end"){d=u;break}if(d!==-1){let u=o.slice(s+1,d),h=this.renderBlockContainer(c,f,u);if(h){r.replaceWith(h);for(let m of u)m.remove();o[d].remove(),o.splice(s+1,d-s)}}else if(["hero","full","feature","editorial","excerpt","card"].includes(c)){let h=o[s+1];if(h){let m=document.createElement("div");for(m.className=c;h.firstChild;)m.appendChild(h.firstChild);h.replaceWith(m),r.remove(),o.splice(s,1);continue}}}}s++}}renderFeedOrList(e,t,n,o=null){hc.renderFeedOrList(this.app,e,t,n,this.plugin,o)}splitInnerElements(e){let t=[],n=[];for(let o of e)o.tagName==="HR"?n.length>0&&(t.push(n),n=[]):n.push(o);return n.length>0&&t.push(n),t}renderVideoEmbed(e){if(!e)return null;let t=document.createElement("div");t.className="video-container",t.style.cssText="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1.5rem 0;";let n=mc(e);if(n){let i=t.createEl("iframe");return i.src=`https://www.youtube-nocookie.com/embed/${n}`,i.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;",i.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),i.setAttribute("allowfullscreen","true"),t}let o=gc(e);if(o){let i=t.createEl("iframe");return i.src=`https://player.vimeo.com/video/${o}`,i.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;",i.setAttribute("allow","autoplay; fullscreen; picture-in-picture"),i.setAttribute("allowfullscreen","true"),t}let s=document.createElement("div");s.className="video-container native-video",s.style.margin="1.5rem 0";let r=s.createEl("video");return r.src=e,r.setAttribute("controls","true"),r.setAttribute("preload","metadata"),r.style.cssText="width: 100%; max-height: 500px; border-radius: var(--radius-m);",s}renderBlockContainer(e,t,n){let o;if(e==="callout"){let s=t.match(/^([+-])?\s*(.+)$/),r=s?s[1]:null,i=s?s[2]:t||"Note",l=r==="+"||r==="-",c=r==="+",f=i.toLowerCase(),d=i.charAt(0).toUpperCase()+i.slice(1),u={note:"\u{1F4DD}",tip:"\u{1F4A1}",info:"\u2139\uFE0F",warning:"\u26A0\uFE0F",danger:"\u26A1",success:"\u2705",question:"\u2753",quote:"\u{1F4AC}",abstract:"\u{1F4CB}",bug:"\u{1F41B}",example:"\u{1F4C4}",failure:"\u274C",todo:"\u2611\uFE0F"},h=u[f]||u.note;if(l){o=document.createElement("details"),o.className="callout",o.setAttribute("data-callout",f),c&&o.setAttribute("open","");let m=o.createEl("summary",{cls:"callout-title"});m.createEl("span",{text:h,cls:"callout-icon"}),m.createEl("span",{text:d,cls:"callout-title-inner"});let p=o.createDiv({cls:"callout-content"});n.forEach(g=>p.appendChild(g.cloneNode(!0)))}else{o=document.createElement("div"),o.className="callout",o.setAttribute("data-callout",f);let m=o.createDiv({cls:"callout-title"});m.createEl("span",{text:h,cls:"callout-icon"}),m.createEl("span",{text:d,cls:"callout-title-inner"});let p=o.createDiv({cls:"callout-content"});n.forEach(g=>p.appendChild(g.cloneNode(!0)))}}else if(e==="toggle"){o=document.createElement("details"),o.className="toggle-block";let s=o.createEl("summary",{text:t||"Details"}),r=o.createDiv({cls:"toggle-content"});n.forEach(i=>r.appendChild(i.cloneNode(!0)))}else if(e==="columns"){let s=t||"2",r=this.splitInnerElements(n);o=document.createElement("div"),o.className=`columns-${s}`,o.style.cssText=`display: grid; grid-template-columns: repeat(${s}, 1fr); gap: 1.5rem; margin: 1.5rem 0;`,r.forEach(i=>{let l=o.createDiv({cls:"column"});i.forEach(c=>l.appendChild(c.cloneNode(!0)))})}else if(e==="grid"||e==="cards"){let s=this.splitInnerElements(n),r=s.length;o=document.createElement("div"),o.className=e==="cards"?`grid-${r}`:`grid-${r}`,o.style.cssText=`display: grid; grid-template-columns: repeat(${r}, 1fr); gap: 1.5rem; margin: 1.5rem 0;`,s.forEach(i=>{let l=o.createDiv({cls:e==="cards"?"sm:row card":"sm:row"});e==="cards"&&(l.style.cssText="border: 1px solid var(--background-modifier-border); padding: 1rem; border-radius: var(--radius-m); background: var(--background-primary);"),i.forEach(c=>l.appendChild(c.cloneNode(!0)))})}else if(e==="split"){let s=t.split("/").map(i=>parseInt(i,10)).filter(i=>!isNaN(i)&&i>0),r=this.splitInnerElements(n);o=document.createElement("div"),o.className="grid",o.style.cssText="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.5rem; margin: 1.5rem 0;",r.forEach((i,l)=>{let c=s[l]||Math.max(1,Math.floor(12/r.length)),f=o.createDiv({cls:`sm:row col-${c}`});f.style.gridColumn=`span ${c}`,i.forEach(d=>f.appendChild(d.cloneNode(!0)))})}else if(e==="gallery"){let s=this.splitInnerElements(n),r=s.length,i=Math.max(1,Math.floor(12/r));o=document.createElement("div"),o.className="gallery grid gap-4",o.style.cssText="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem; margin: 1.5rem 0;",s.forEach(l=>{let c=o.createDiv({cls:`col-12 md:col-${i}`});c.style.gridColumn=`span ${i}`,l.forEach(f=>c.appendChild(f.cloneNode(!0)))})}else if(e==="image"){let s=t||"";o=document.createElement("figure"),o.className=`image-${s}`;let r="",i="";n.forEach(c=>{let f=c.querySelector("img");f?r=f.src:c.tagName==="IMG"?r=c.src:i+=(i?`
`:"")+c.textContent.trim()}),!r&&n.length>0&&(r=n[0].textContent.trim(),i=n.slice(1).map(c=>c.textContent.trim()).join(`
`));let l=o.createEl("img");l.src=r,l.alt=i,i&&o.createEl("figcaption",{text:i})}else if(e==="button"){let s=t||"",r=n.find(i=>i.tagName==="A")||n.reduce((i,l)=>i||l.querySelector("a"),null);r?(o=r.cloneNode(!0),o.className=s?`button button-${s}`:"button",o.style.cssText="display: inline-block; padding: 0.5rem 1rem; border-radius: var(--radius-m); background: var(--interactive-accent); color: var(--text-on-accent); text-decoration: none; font-weight: bold;"):(o=document.createElement("div"),o.className="button-wrapper",n.forEach(i=>o.appendChild(i.cloneNode(!0))))}else if(e==="form"){o=document.createElement("form"),o.className=`form form-${t||"contact"}`,o.style.cssText="display: flex; flex-direction: column; gap: 1rem; border: 1px solid var(--background-modifier-border); padding: 1.5rem; border-radius: var(--radius-m); background: var(--background-primary); max-width: 500px; margin: 1.5rem 0;";let s=n.map(l=>l.textContent.trim()).filter(Boolean),r=[];s.forEach(l=>{l.split(/\n/).forEach(c=>{let f=c.trim();f&&r.push(f)})}),r.forEach(l=>{let c=l.toLowerCase(),f=c==="email"?"email":c==="message"?"textarea":"text",d=o.createDiv({cls:"form-field"});d.style.cssText="display: flex; flex-direction: column; gap: 0.25rem;";let u=d.createEl("label",{text:l});if(u.setAttribute("for",c),u.style.fontWeight="bold",u.style.fontSize="var(--font-ui-small)",f==="textarea"){let h=d.createEl("textarea",{id:c});h.style.cssText="resize: vertical; min-height: 100px; padding: 0.5rem; border: 1px solid var(--background-modifier-border); border-radius: var(--radius-s); background: var(--background-secondary); color: var(--text-normal);"}else{let h=d.createEl("input",{type:f,id:c});h.style.cssText="padding: 0.5rem; border: 1px solid var(--background-modifier-border); border-radius: var(--radius-s); background: var(--background-secondary); color: var(--text-normal);"}});let i=o.createEl("button",{text:"Send",type:"submit",cls:"button button-primary"});i.style.cssText="align-self: flex-start; padding: 0.5rem 1rem; border-radius: var(--radius-s); background: var(--interactive-accent); color: var(--text-on-accent); border: none; font-weight: bold; cursor: pointer;"}else if(e==="card"||e==="narrow"||e==="small")o=document.createElement("div"),o.className=e==="card"?"card":"narrow",n.forEach(s=>o.appendChild(s.cloneNode(!0)));else if(e==="full-block"||e==="hero-block"||e==="wide-block"||e==="wide"||e==="feature-block"){o=document.createElement("div");let s=e==="hero-block"||e==="full-block"?"full":"wide",r=t?`text-${t}`:"";o.className=`${s} ${r}`.trim(),n.forEach(i=>o.appendChild(i.cloneNode(!0)))}else o=document.createElement("div"),o.className=`stnd-syntax-block block-type-${e}`,n.forEach(s=>o.appendChild(s.cloneNode(!0)));return o}};li.exports={SyntaxPreviewFeature:Ia}});var lo=j((rg,pi)=>{"use strict";var{parseFolderList:yc,isInFolderList:wc}=sn(),{PluginSettingTab:bc,Setting:Pa,Notice:gt,SuggestModal:kc,MarkdownView:Ua}=require("obsidian"),{Decoration:$t,ViewPlugin:vc}=require("@codemirror/view"),{descWithLinks:sg}=ie();function Sc(a,e){let t=a.metadataCache.getFileCache(e),n=[];if(t?.frontmatter?.aliases){let o=t.frontmatter.aliases;Array.isArray(o)?n.push(...o):typeof o=="string"&&n.push(...o.split(",").map(s=>s.trim()))}if(t?.frontmatter?.alias){let o=t.frontmatter.alias;Array.isArray(o)?n.push(...o):typeof o=="string"&&n.push(...o.split(",").map(s=>s.trim()))}return n.filter(Boolean)}function yt(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function fi(a){if(!a)return"";let e=a.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);if(!e)return a;let t=a.indexOf(e[1]),n=e[1],o=t+n.length,s=n.replace(/[^\r\n]/g," ");return a.slice(0,t)+s+a.slice(o)}var ui=new Set(["readme","license","licence","changelog","changes","todo","index","private","note","notes","untitled","sans titre","scratchpad","log","logs","journal","template","templates","draft","drafts","archive","archives"]),Tc=new Set(["jour","note","base","page","text","texte","type","item","tout","tous","bien","faire","fait","voir","avec","sans","pour","dans","plus","mais","comme","importe","aura","avoir","etre","peut","dire","mode","meta","info","data","true","false","null"]);function di(a,e){if(!a?.path)return!0;let t=a.path.toLowerCase();if(t.startsWith(".trash/")||t.includes("/.trash/")||t.startsWith("templates/")||t.includes("/templates/")||t.startsWith("_templates/")||t.startsWith("archive/")||t.includes("/archive/")||t.startsWith("archives/")||ui.has(a.basename.toLowerCase())||wc(a.path,yc(e?.settings?.excludedFolders)))return!0;let n=e?.app?.metadataCache?.getFileCache(a),o=[];if(n?.tags&&o.push(...n.tags.map(s=>s.tag.toLowerCase().replace(/^#/,""))),n?.frontmatter?.tags){let s=n.frontmatter.tags;Array.isArray(s)?o.push(...s.map(r=>String(r).toLowerCase().replace(/^#/,""))):typeof s=="string"&&o.push(...s.split(",").map(r=>r.trim().toLowerCase().replace(/^#/,"")))}return!!o.includes("backlink-exclude")}var xc=[/\b(?:mise|mis|mettre|met|mettait|foutre|foutu)\s+à\s+la\s+porte\b/gi,/\b(?:prendre|pris|prend)\s+la\s+porte\b/gi,/\b(?:au\s+bout\s+du\s+compte)\b/gi,/\b(?:de\s+temps\s+en\s+temps)\b/gi,/\b(?:coup\s+de\s+main)\b/gi];async function Ba(a,e,t=null){if(di(e,t))return[];let n=await a.vault.cachedRead(e),o=fi(n),s=a.vault.getMarkdownFiles(),r=[],i=new Set,l=new Set,c=[];for(let u of xc){u.lastIndex=0;let h;for(;(h=u.exec(o))!==null;)c.push({start:h.index,end:h.index+h[0].length})}let f=o.toLowerCase();for(let u of s){if(u.path===e.path)continue;let h=u.basename.toLowerCase();if(i.has(h))continue;let m=[u.basename,...Sc(a,u)].filter(k=>f.includes(String(k).toLowerCase()));if(m.length===0||di(u,t)||(a.metadataCache.resolvedLinks[e.path]||{}).hasOwnProperty(u.path)||(a.metadataCache.resolvedLinks[u.path]||{}).hasOwnProperty(e.path))continue;let y=!1,b="";for(let k of m){let T=k.toLowerCase().trim();if(T.length<3||Tc.has(T)||ui.has(T)||l.has(T))continue;let S=new RegExp(`\\b${yt(k)}\\b`,"gi"),x,C=0;for(;(x=S.exec(o))!==null;){let w=x.index,v=w+x[0].length,N=Math.max(0,w-100),O=Math.min(o.length,v+100),L=o.slice(N,O),I=w-N,M=I+x[0].length,D=L.slice(0,I),V=L.slice(M);D.lastIndexOf("[[")>D.lastIndexOf("]]")&&V.indexOf("]]")!==-1||D.lastIndexOf("[")>D.lastIndexOf("]")&&V.indexOf(")")!==-1||c.some(X=>w>=X.start&&v<=X.end)||C++}if(C>0){y=!0,b=k;break}}y&&(i.add(h),l.add(b.toLowerCase().trim()),r.push({file:u,term:b}))}let d=[];r.sort((u,h)=>(h.term?.length||0)-(u.term?.length||0));for(let u=0;u<r.length;u++){let h=r[u],m=!1;for(let p of d)if(p.term.toLowerCase().includes(h.term.toLowerCase())){let g=o.replace(new RegExp(`\\b${yt(p.term)}\\b`,"gi")," ");if(!new RegExp(`\\b${yt(h.term)}\\b`,"gi").test(g)){m=!0;break}}m||d.push(h)}return d}async function wt(a,e,t){let n=await a.vault.read(e),o=n,s=fi(n),r=t.term,i=new RegExp(`\\b${yt(r)}\\b`,"gi"),l,c=[];for(;(l=i.exec(s))!==null;)c.push({start:l.index,end:l.index+l[0].length,text:l[0]});let f=[],d=/(\[\[.*?\]\])|(\[.*?\]\(.*?\))/g,u;for(;(u=d.exec(n))!==null;)f.push({start:u.index,end:u.index+u[0].length});let h=null;for(let m=c.length-1;m>=0;m--){let p=c[m],g=!1;for(let y of f)if(p.start>=y.start&&p.end<=y.end){g=!0;break}if(!g){h=p;break}}if(h){let m=n.substring(0,h.start),p=n.substring(h.end),g=`[[${t.file.basename}]]`;t.file.basename!==h.text&&(g=`[[${t.file.basename}|${h.text}]]`);let y=m+g+p;await a.vault.modify(e,y);let b=new gt("",7e3),k=b.noticeEl;k.empty(),k.createSpan({text:`Li\xE9 : "${r}" \u2192 [[${t.file.basename}]]`});let T=k.createEl("button",{text:"Annuler",cls:"stnd-panel-btn stnd-panel-btn-secondary"});T.style.cssText="margin-left: 8px; padding: 2px 8px; font-size: 11px; height: 22px;",T.addEventListener("click",async()=>{await a.vault.modify(e,o),b.hide(),new gt(`Lien annul\xE9 : "${r}"`),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),typeof window.stndPanelRefreshLinks=="function"&&window.stndPanelRefreshLinks()})}else new gt(`Impossible de trouver une occurrence valide pour "${r}".`)}var io=0,Nc=vc.fromClass(class{constructor(a){this.lastRevision=io,this.decorations=$t.none,this.view=a,this.buildDecorations(a)}update(a){(a.docChanged||a.viewportChanged||this.lastRevision!==io)&&(this.lastRevision=io,this.buildDecorations(a.view))}buildDecorations(a){if(!window.stndMyceliumSettings?.enableGhostLinks){this.decorations=$t.none;return}let t=window.stndMyceliumCache||[];if(!t||t.length===0){this.decorations=$t.none;return}let n=[...t].sort((c,f)=>(f.term?.length||0)-(c.term?.length||0)),o=[],s=[],r=-1,i=a.app||window.app,l=i?.workspace?.getActiveFile();if(l&&i?.metadataCache){let c=i.metadataCache.getFileCache(l);c?.frontmatterPosition&&(r=c.frontmatterPosition.end.offset)}for(let{from:c,to:f}of a.visibleRanges){let d=a.state.doc.sliceString(c,f);if(d)for(let u of n){let h=u.term;if(!h||h.length<2)continue;let m=new RegExp(`\\b${yt(h)}\\b`,"gi"),p;for(;(p=m.exec(d))!==null;){let g=c+p.index,y=g+p[0].length;if(r>-1&&g<r)continue;let b=Math.max(0,g-150),k=Math.min(a.state.doc.length,y+150),T=a.state.doc.sliceString(b,k),S=g-b,x=S+p[0].length,C=T.slice(0,S),w=T.slice(x);C.lastIndexOf("[[")>C.lastIndexOf("]]")&&w.indexOf("]]")!==-1||C.lastIndexOf("[")>C.lastIndexOf("]")&&w.indexOf(")")!==-1||s.some(N=>g>=N.start&&g<N.end||y>N.start&&y<=N.end||g<=N.start&&y>=N.end)||(s.push({start:g,end:y}),o.push($t.mark({class:"mycelium-ghost-link",attributes:{title:`\u{1F331} Click to open ${u.file.basename} \xB7 Alt+Click to link`,"data-target":u.file.path,"data-term":h,"data-basename":u.file.basename}}).range(g,y)))}}}o.sort((c,f)=>c.from-f.from||c.to-f.to),this.decorations=$t.set(o)}},{decorations:a=>a.decorations,eventHandlers:{click:(a,e)=>{let t=a.target.closest(".mycelium-ghost-link");if(!t)return!1;let n=t.getAttribute("data-target"),o=t.getAttribute("data-term"),s=t.getAttribute("data-basename")||t.textContent;if(!n||!o)return!1;let r=e.app||window.app,i=r.vault.getAbstractFileByPath(n),l=r.workspace.getActiveFile();if(!i||!l)return!1;if(a.altKey)return a.preventDefault(),a.stopPropagation(),wt(r,l,{file:i,term:o}),!0;let{Menu:c,Platform:f}=require("obsidian");if(f.isMobile){a.preventDefault(),a.stopPropagation();let d=new c;return d.addItem(u=>{u.setTitle(`Lier [[${s}]]`).setIcon("link").onClick(()=>{wt(r,l,{file:i,term:o})})}),d.showAtMouseEvent(a),!0}return a.preventDefault(),a.stopPropagation(),r.workspace.getLeaf(a.ctrlKey||a.metaKey).openFile(i),!0}}}),qa=class extends kc{constructor(e,t,n){super(e),this.activeFile=t,this.suggestions=n,this.setPlaceholder("Select a concept to link...")}getSuggestions(e){return this.suggestions.filter(t=>t.file.basename.toLowerCase().includes(e.toLowerCase())||t.term.toLowerCase().includes(e.toLowerCase()))}renderSuggestion(e,t){t.createEl("div",{text:e.file.basename,cls:"link-suggest-title"}),t.createEl("small",{text:`Found mention: "${e.term}"`,cls:"link-suggest-desc"})}async onChooseSuggestion(e,t){await wt(this.app,this.activeFile,e)}};function Ec(a,e){let t=a.nodeValue,n=[];for(let r of e){let i=new RegExp(`\\b${yt(r.term)}\\b`,"gi"),l;for(;(l=i.exec(t))!==null;){let c=l.index,f=c+l[0].length;n.some(u=>c<u.end&&f>u.start)||n.push({start:c,end:f,sug:r,text:l[0]})}}if(!n.length)return;n.sort((r,i)=>r.start-i.start);let o=document.createDocumentFragment(),s=0;for(let r of n){r.start>s&&o.appendChild(document.createTextNode(t.slice(s,r.start)));let i=document.createElement("span");i.className="mycelium-ghost-link",i.textContent=r.text,i.setAttribute("title",`\u{1F331} Click to open ${r.sug.file.basename}`),i.setAttribute("data-target",r.sug.file.path),i.setAttribute("data-term",r.sug.term),i.setAttribute("data-basename",r.sug.file.basename),o.appendChild(i),s=r.end}s<t.length&&o.appendChild(document.createTextNode(t.slice(s))),a.parentNode.replaceChild(o,a)}function Cc(a,e){let t=[...e].filter(r=>r.term&&r.term.length>=2).sort((r,i)=>(i.term?.length||0)-(r.term?.length||0));if(!t.length)return;let n=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,{acceptNode(r){let i=r.nodeValue;if(!i||!i.trim())return NodeFilter.FILTER_REJECT;let l=r.parentElement;for(;l;){let c=l.tagName;if(c==="A"||c==="CODE"||c==="PRE"||c==="BUTTON"||l.classList?.contains("mycelium-ghost-link")||l.classList?.contains("mycelium-compost-footer"))return NodeFilter.FILTER_REJECT;if(l===a)break;l=l.parentElement}return NodeFilter.FILTER_ACCEPT}}),o=[],s;for(;s=n.nextNode();)o.push(s);for(let r of o)Ec(r,t)}var _a=class{constructor(e,t){this.app=e,this.plugin=t,t.settings.mycelium||(t.settings.mycelium={enableGhostLinks:!1,enableLinkingCommand:!0,enableCompostFooter:!1}),this.settings=t.settings.mycelium}async refreshSuggestions(e=null){let t=this.settings.enableGhostLinks||this.settings.enableCompostFooter;if(!t&&!(window.stndMyceliumCache||[]).length)return;let n=this.app.workspace.getActiveFile();!t||!n||n.extension!=="md"?window.stndMyceliumCache=[]:e?window.stndMyceliumCache=e:window.stndMyceliumCache=await Ba(this.app,n,this.plugin),io++,this.app.workspace.iterateAllLeaves(o=>{if(o.view instanceof Ua){if(o.view.editor?.cm)try{o.view.editor.cm.dispatch({})}catch{}o.view.previewMode&&o.view.previewMode.rerender(!0)}})}async load(){window.stndMyceliumCache=[],window.stndMyceliumSettings=this.settings,window.stndMyceliumFeature=this,window.stndRefreshMycelium=t=>this.refreshSuggestions(t),this.refreshSuggestions(),this.plugin.registerEvent(this.app.workspace.on("active-leaf-change",()=>{this.refreshSuggestions()})),this.plugin.registerEvent(this.app.metadataCache.on("changed",t=>{let n=this.app.workspace.getActiveFile();n&&t.path===n.path&&(this.cacheTimeout&&clearTimeout(this.cacheTimeout),this.cacheTimeout=setTimeout(()=>this.refreshSuggestions(),1500))})),this.plugin.registerEditorExtension(Nc),(this.settings.enableLinkingCommand??this.settings.enableGraftingCommand)&&this.plugin.addCommand({id:"mycelium-link-mentions",name:"Tend the Mycelium (Link mentions)",callback:async()=>{let t=this.app.workspace.getActiveFile();if(!t||t.extension!=="md"){new gt("Open a markdown note to tend the mycelium.");return}new gt("Scanning for roots...");let n=await Ba(this.app,t,this.plugin);if(n.length===0){new gt("No unlinked mentions found.");return}new qa(this.app,t,n).open()}}),this.plugin.registerMarkdownPostProcessor((t,n)=>{try{if(!this.settings.enableCompostFooter){t.querySelectorAll(".mycelium-compost-footer").forEach(m=>m.remove());return}let o=this.app.workspace.getActiveFile();if(!o||o.path!==n.sourcePath)return;let s=n.getSectionInfo(t);if(!s)return;let r=s.text.split(`
`),i=r.length-1;for(;i>=0&&!r[i].trim();)i--;if(s.lineEnd<i)return;let l=window.stndMyceliumCache||[],c=this.app.workspace.getActiveViewOfType(Ua);if(new Set([c?.containerEl,t.closest(".markdown-preview-section"),t.closest(".markdown-rendered"),t.parentElement].filter(Boolean)).forEach(h=>h.querySelectorAll(".mycelium-compost-footer").forEach(m=>m.remove())),l.length===0)return;let d=document.createElement("div");d.className="mycelium-compost-footer",t.appendChild(d),d.createEl("hr",{cls:"mycelium-footer-hr"}),d.createEl("h4",{text:"Mycelium finding",cls:"mycelium-footer-title"});let u=d.createEl("div",{cls:"mycelium-footer-grid"});for(let h of l)u.createEl("div",{cls:"mycelium-footer-item"}).createEl("span",{text:h.file.basename,cls:"mycelium-ghost-link",attr:{title:`\u{1F331} Click to open ${h.file.basename} \xB7 Alt+Click to link`,"data-target":h.file.path,"data-term":h.term,"data-basename":h.file.basename}})}catch(o){console.error("[Standard] Mycelium compost footer failed to render",o)}}),this.plugin.registerMarkdownPostProcessor((t,n)=>{try{if(!this.settings.enableGhostLinks)return;let o=this.app.workspace.getActiveFile();if(!o||o.path!==n.sourcePath)return;let s=window.stndMyceliumCache||[];if(!s.length)return;Cc(t,s)}catch(o){console.error("[Standard] Mycelium reading-view ghost links failed",o)}}),this.plugin.registerDomEvent(document,"click",t=>{let n=t.target?.closest?.(".mycelium-ghost-link");if(!n||!n.closest(".markdown-reading-view")&&!n.closest(".markdown-preview-view"))return;let o=n.getAttribute("data-target");if(!o)return;let s=this.app.vault.getAbstractFileByPath(o);if(s){if(t.preventDefault(),t.stopPropagation(),t.altKey){let r=n.getAttribute("data-term"),i=this.app.workspace.getActiveFile();r&&i&&wt(this.app,i,{file:s,term:r});return}this.app.workspace.getLeaf(t.ctrlKey||t.metaKey).openFile(s)}})}},ja=class extends bc{constructor(e,t){super(e,t),this.plugin=t,this.settings=t.settings.mycelium}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"Mycelium (Link Assist)"});let t=e.createEl("p",{text:"The Mycelium engine connects your thoughts by finding unlinked mentions of other notes in your current text. When you link a mention, it connects the LAST occurrence of the word, encouraging the reader to read the whole text before clicking away.",cls:"setting-item-description"});new Pa(e).setName("Enable Ghost Links (Option A)").setDesc("Subtly underlines potential links in the editor. Alt+Click or tap to link them.").addToggle(n=>n.setValue(this.settings.enableGhostLinks).onChange(async o=>{this.settings.enableGhostLinks=o,window.stndMyceliumSettings=this.settings,await this.plugin.saveSettings(),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium()})),new Pa(e).setName("Enable Linking Command").setDesc("Adds a command 'Tend the Mycelium (Link mentions)' to the palette. Opens a modal to link mentions.").addToggle(n=>n.setValue(this.settings.enableLinkingCommand??this.settings.enableGraftingCommand??!0).onChange(async o=>{this.settings.enableLinkingCommand=o,this.settings.enableGraftingCommand=o,await this.plugin.saveSettings()})),new Pa(e).setName("Enable Compost Footer").setDesc("Silently appends a list of potential links at the bottom of the Reading View for passive discovery.").addToggle(n=>n.setValue(this.settings.enableCompostFooter).onChange(async o=>{this.settings.enableCompostFooter=o,window.stndMyceliumSettings=this.settings,await this.plugin.saveSettings();let s=this.plugin.app.workspace.getActiveViewOfType(Ua);s?.previewMode&&s.previewMode.rerender(!0)}))}};pi.exports={MyceliumFeature:_a,MyceliumSettingTab:ja,findOutgoingUnlinkedMentions:Ba,createMentionLink:wt,graftLink:wt}});var Va=j((lg,hi)=>{"use strict";var Lc=require("obsidian");async function Fc(a,e){try{let t=a.internalPlugins?.getPluginById?.("webviewer");if(Lc.Platform.isDesktopApp&&t?.enabled){let n=new URL(e).host,s=a.workspace.getLeavesOfType("webviewer").find(r=>{try{return new URL(r.getViewState().state?.url).host===n}catch{return!1}})||a.workspace.getLeaf("tab");await s.setViewState({type:"webviewer",state:{url:e,navigate:!0},active:!0}),a.workspace.revealLeaf(s);return}}catch{}window.open(e,"_blank")}hi.exports={openDoc:Fc}});var uo=j((cg,yi)=>{"use strict";var A=require("obsidian"),{KNOWN_TOKENS:co,TOKEN_GROUPS:Ac,RAW_SANITIZER_MAP:Dc,isPublishIntent:Oc}=ie(),{StndConfirmModal:Ha}=vo(),{StndShareModal:mi}=xo(),{openDoc:Mc}=Va(),{DOCS_URLS:Rc}=ie(),{findOutgoingUnlinkedMentions:Ic,createMentionLink:Pc}=lo(),{getNoteFrontmatter:fo}=no(),gi="stnd-garden-panel",Ka=class extends A.ItemView{constructor(e,t){super(e),this.plugin=t,this._onFileChange=null,this._onMetaChange=null,this._debounceTimers={},this._lastRenderedFile=null,this.activeTab="note",this.auditData=null,this.isAuditing=!1,this.searchingCandidates={},this.linksData=null,this.isLoadingLinks=!1,this.noteStatsCache=t?.garden?.noteStatsCache||new Map,this.isLoadingStats=!1,this.inquiryCache=new Map,this._collapsedSections=new Set(["design"])}async triggerHypheInquiry(e){if(!e)return;let t=this.inquiryCache.get(e.path)||{};this.inquiryCache.set(e.path,{...t,isLoading:!0,error:null}),this.render();try{let n=await this.plugin.app.vault.read(e),o=await this.plugin.garden.askHypheInquiry(e,n);this.inquiryCache.set(e.path,{questions:o||[],isLoading:!1,error:null})}catch(n){this.inquiryCache.set(e.path,{questions:[],isLoading:!1,error:n.message||"Failed to generate inquiry"})}finally{this.render()}}async appendInquiryToNote(e,t){if(!(!e||!t))try{await this.plugin.app.vault.process(e,n=>{let o=`

> [!quote] \u{1F989} Hyphe's Inquiry
> ${t}

`;return n.trimEnd()+o}),new A.Notice("Inquiry added to note.")}catch(n){new A.Notice(`Error adding inquiry: ${n.message}`)}}async loadNoteStats(e){if(!(!e||this.isLoadingStats)){this.isLoadingStats=!0;try{let t=await this.plugin.garden.getNoteStats(e);t&&(this.plugin.garden?.noteStatsCache&&this.plugin.garden.noteStatsCache.set(e.path,t),this.noteStatsCache.set(e.path,t))}catch(t){console.error("[Standard] Error loading note stats:",t)}finally{this.isLoadingStats=!1,this.render(),this.plugin.publishStatus&&this.plugin.publishStatus.refreshForFile(e)}}}getViewType(){return gi}getDisplayText(){return"Garden"}getIcon(){return"flower"}async onOpen(){this._onFileChange=()=>{this.render()},this._onMetaChange=e=>{if(this._writing)return;let t=this.plugin.app.workspace.getActiveFile();t&&e&&(e===t||e.path&&t.path&&e.path===t.path)&&(this.render(),clearTimeout(this._linksResetTimer),this._linksResetTimer=setTimeout(()=>{this.linksData=null,this.render()},2e3))},this.plugin.app.workspace.on("file-open",this._onFileChange),this.plugin.app.workspace.on("active-leaf-change",this._onFileChange),this.plugin.app.metadataCache.on("changed",this._onMetaChange),this.plugin.app.metadataCache.on("resolve",this._onMetaChange),this.render()}async onClose(){this._onFileChange&&(this.plugin.app.workspace.off("file-open",this._onFileChange),this.plugin.app.workspace.off("active-leaf-change",this._onFileChange)),this._onMetaChange&&(this.plugin.app.metadataCache.off("changed",this._onMetaChange),this.plugin.app.metadataCache.off("resolve",this._onMetaChange));for(let e of Object.values(this._debounceTimers))clearTimeout(e);clearTimeout(this._linksResetTimer)}_setFrontmatter(e,t,n){clearTimeout(this._debounceTimers[t]),this._debounceTimers[t]=setTimeout(()=>{this._writing=!0,this.plugin.app.fileManager.processFrontMatter(e,o=>{n===""||n===null||n===void 0?delete o[t]:o[t]=n}).finally(()=>{setTimeout(()=>{this._writing=!1},300)})},400)}updateTopIndicator(e=!1){if(!this.topIndicatorEl)return;let t=this.plugin?.settings?.publishIndicatorStyle||"garden";if(t==="hidden"){this.topIndicatorEl.style.display="none";return}this.topIndicatorEl.style.display="";let n=this.plugin.app.workspace.getActiveFile(),o="unpublished",s="Unpublished";if(n&&this.plugin.publishStatus){let i=fo(this.plugin.app,n),l=this.plugin.publishStatus.getStateInfo(i,n.path,n);o=l.key,o==="synced"&&(l.visibility==="private"||l.visibility==="unlisted")&&(o=l.visibility),s=l.state?.label||o}let r=this.topIndicatorEl.querySelector(".stnd-panel-top-indicator")||this.topIndicatorEl;r.className=`stnd-panel-top-indicator stnd-style-${t} stnd-state-${o}`,this.topIndicatorEl.setAttribute("title",`Garden: ${s}`),e&&t==="garden"&&(r.classList.remove("stnd-growing"),r.offsetWidth,r.classList.add("stnd-growing"))}_createCollapsibleSection(e,t,n,o={}){let s=e.createEl("details",{cls:`stnd-panel-group stnd-panel-${t}-group`});this._collapsedSections||(this._collapsedSections=new Set(["design"])),this._collapsedSections.has(t)||s.setAttribute("open",""),s.addEventListener("toggle",()=>{s.open?this._collapsedSections.delete(t):this._collapsedSections.add(t)});let i=s.createEl("summary",{cls:"stnd-panel-group-summary"}),l=i.createEl("div",{cls:"stnd-panel-group-summary-left"});if(l.createSpan({text:n,cls:"stnd-panel-group-title"}),o.badge!=null&&o.badge!==""&&l.createSpan({text:String(o.badge),cls:"stnd-panel-group-badge"}),o.onRefresh){let f=i.createEl("button",{cls:"stnd-panel-header-btn",attr:{"aria-label":`Refresh ${n.toLowerCase()}`,title:`Refresh ${n.toLowerCase()}`}});f.style.padding="2px",A.setIcon(f,"refresh-cw"),f.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),o.onRefresh()})}let c=s.createEl("div",{cls:"stnd-panel-group-body"});return{details:s,summary:i,body:c}}render(){let e=this.containerEl.children[1];if(e.empty(),e.addClass("stnd-panel"),e.style.overflowY="auto",e.style.touchAction="pan-y",e.style.webkitOverflowScrolling="touch",(this.plugin?.settings?.publishIndicatorStyle||"garden")!=="hidden"){let c=e.createEl("div",{cls:"stnd-panel-top-bar"});c.createEl("div",{cls:"stnd-panel-top-indicator"}),this.topIndicatorEl=c,this.updateTopIndicator(!1)}else this.topIndicatorEl=null;let n=e.createEl("div",{cls:"stnd-panel-global-header"});n.createEl("div",{cls:"stnd-panel-global-title",text:"Garden"});let o=n.createEl("div",{cls:"stnd-panel-global-header-right"});if(this.plugin?.settings?.apiKey){let c=o.createEl("button",{cls:"stnd-panel-header-btn",attr:{"aria-label":"Sync all published notes with Garden",title:"Sync all published notes with Garden"}});A.setIcon(c,"folder-sync"),c.addEventListener("click",async()=>{this.plugin.garden&&(await this.plugin.garden.syncAllPublished(),this.render())});let f=this.plugin.garden;f?.refreshRemoteOnly();let d=f?.remoteOnly?.length||0;if(d>0){let u=o.createEl("button",{cls:"stnd-panel-header-btn stnd-panel-download-chip",text:`\u2193 ${d}`,attr:{"aria-label":`${d} online note(s) not in this vault \u2014 click to download`,title:`${d} online note(s) not in this vault \u2014 click to download`}});u.style.color="var(--stnd-status-outdated)",u.addEventListener("click",async()=>{await f.downloadNewOnlineNotes(),this.render()})}}let s=this.plugin?.settings?.apiUsername||"",r=o.createEl("div",{cls:"stnd-panel-global-username",text:s?`@${s}`:""});s&&(r.style.cursor="pointer",r.title=`View @${s} on Standard Garden`,r.addEventListener("click",()=>{window.open(`https://standard.garden/@${s}`,"_blank")}),r.addEventListener("mouseenter",()=>{r.style.color="var(--text-normal)"}),r.addEventListener("mouseleave",()=>{r.style.color="var(--text-faint)"}));let i=this.plugin.app.workspace.getActiveFile();if(!i){e.createEl("div",{cls:"stnd-panel-empty"}).createEl("p",{text:"No active note.",cls:"stnd-panel-muted"});return}this._lastRenderedFile=i;let l=fo(this.plugin.app,i);this._renderFileInfo(e,i,l),this._renderGardenSettings(e,i,l),(!this.linksData||this.linksData.file!==i)&&!this.isLoadingLinks&&this.refreshLinksData(),this._renderRootsSection(e,i),this._renderMyceliumSection(e,i),this._renderDesignSection(e,i,l)}_showNoteActionMenu(e,t,n,o={}){let{isConfirmedOnline:s,isDesynced:r,isOutdated:i,isModifiedLocally:l,remoteContent:c,liveUrl:f=s&&this.plugin.garden?this.plugin.garden.getLiveUrl(e):null}=o,d=this.plugin.garden,u=new A.Menu,h=async()=>{if(!d||!d.checkApiKeyAndShowModal())return;let p=await d.publishWithCheck(e);p===!0?(new A.Notice(`Standard: "${e.basename}" published.`),this.plugin.settings.openAfterPublish&&d.viewLiveVersion(e),this.render()):p===!1&&(new A.Notice(`Standard: Failed to publish "${e.basename}".`),this.render())},m=async()=>{let p=c;!p&&d&&(p=(await d.checkNoteStatus(e))?.remoteContent),p?(await this.plugin.app.vault.modify(e,p),new A.Notice("Standard: Local file updated with remote version."),this.plugin.publishStatus?.noteStatuses?.set(e.path,{status:"synced",timestamp:Date.now()}),this.plugin.publishStatus?.refreshAll(),this.render()):new A.Notice("Standard: Remote content not found.")};if(r?(u.addItem(p=>p.setTitle("Remove from Garden (delete online note)").setIcon("trash-2").setWarning(!0).onClick(async()=>{await d.deleteOnlineVersion(e),this.render()})),u.addItem(p=>p.setTitle("Republish (set publish: true)").setIcon("upload-cloud").onClick(async()=>{await this.plugin.app.fileManager.processFrontMatter(e,g=>{g.publish=!0,"status"in g&&delete g.status}),await h()}))):s?(i?(u.addItem(p=>p.setTitle("Pull remote changes (overwrite local)").setIcon("arrow-down-circle").onClick(()=>m())),u.addItem(p=>p.setTitle("Force publish local").setIcon("refresh-cw").onClick(()=>h()))):l?u.addItem(p=>p.setTitle("Publish local changes").setIcon("upload-cloud").onClick(()=>h())):u.addItem(p=>p.setTitle("Re-publish").setIcon("refresh-cw").onClick(()=>h())),f&&(u.addItem(p=>p.setTitle("View online").setIcon("external-link").onClick(()=>d.viewLiveVersion(e))),u.addItem(p=>p.setTitle("Share note").setIcon("share-2").onClick(()=>{new mi(this.plugin.app,e.basename,f).open()})),u.addItem(p=>p.setTitle("Copy public link").setIcon("copy").onClick(()=>{navigator.clipboard.writeText(f),new A.Notice("Public URL copied to clipboard.")}))),u.addSeparator(),u.addItem(p=>p.setTitle("Sync all notes").setIcon("folder-sync").onClick(async()=>{d&&(await d.syncAllPublished(),this.render())})),u.addSeparator(),u.addItem(p=>p.setTitle("Remove from Garden (unpublish)").setIcon("trash-2").setWarning(!0).onClick(async()=>{let g=await d.deleteOnlineVersion(e);g===!0?(new A.Notice(`Standard: "${e.basename}" removed from Garden.`),this.render()):g===!1&&(new A.Notice(`Standard: Failed to remove "${e.basename}".`),this.render())}))):(u.addItem(p=>p.setTitle("Publish to Garden").setIcon("upload-cloud").onClick(()=>h())),u.addSeparator(),u.addItem(p=>p.setTitle("Sync all notes").setIcon("folder-sync").onClick(async()=>{d&&(await d.syncAllPublished(),this.render())}))),n&&n.clientX!=null&&n.clientY!=null&&n.clientX>0&&n.clientY>0)u.showAtMouseEvent(n);else{let g=(n?.target?.closest?n.target.closest("button")||n.target.closest(".stnd-panel-badge"):n?.target)?.getBoundingClientRect?.();g?u.showAtPosition({x:Math.round(g.left),y:Math.round(g.bottom+4)}):u.showAtMouseEvent(n)}}_renderFileInfo(e,t,n){let o=e.createEl("div",{cls:"stnd-panel-card stnd-panel-note-card"});this.plugin.settings.apiKey&&t&&this.plugin.publishStatus&&this.plugin.publishStatus.triggerStatusCheck(t);let s=Oc(n),r=!!n["garden-url"]||!!n.url_public||n.published===!0||n.published==="true",i=!s&&r,l=o.createEl("div",{cls:"stnd-panel-status-row"}),c=this.plugin?.publishStatus?.noteStatuses?.get(t.path),f=c?.status==="outdated",d=c?.remoteContent,u=this.noteStatsCache.get(t.path),h=u?.updated_at?new Date(u.updated_at).getTime():0,m=t.stat?.mtime||0,p=h>0&&m>h+3e3||c?.status==="changed";if(this.plugin.settings.apiKey){let g=l.createEl("div",{cls:"stnd-panel-status-left"}),y;i?(y=g.createEl("span",{text:"Unpublished (Online)",cls:"stnd-panel-badge stnd-panel-badge-desynced is-clickable"}),y.title="Unpublished locally, but note is still live online \u2014 click for actions"):r?f?(y=g.createEl("span",{text:"Outdated",cls:"stnd-panel-badge stnd-panel-badge-outdated is-clickable"}),y.title="Update available online \u2014 click for actions"):p?(y=g.createEl("span",{text:"Modified",cls:"stnd-panel-badge stnd-panel-badge-modified is-clickable"}),y.title="Local edits not yet synced to Garden \u2014 click for actions"):(y=g.createEl("span",{text:"Synced",cls:"stnd-panel-badge stnd-panel-badge-online is-clickable"}),y.title="Up to date with Garden \u2014 click for actions"):s?(y=g.createEl("span",{text:"Queued",cls:"stnd-panel-badge stnd-panel-badge-pending is-clickable"}),y.title="Queued for publication \u2014 click for actions"):(y=g.createEl("span",{text:"Draft",cls:"stnd-panel-badge stnd-panel-badge-local is-clickable"}),y.title="Draft note (local only) \u2014 click for actions"),y.addEventListener("click",v=>{this._showNoteActionMenu(t,n,v,{isConfirmedOnline:r,isDesynced:i,isOutdated:f,isModifiedLocally:p,remoteContent:d})});let b=g.createEl("button",{cls:"stnd-panel-header-btn",attr:{"aria-label":"Status & colors guide",title:"Status & colors guide"}});b.style.padding="2px",A.setIcon(b,"info"),b.addEventListener("click",()=>Mc(this.plugin.app,Rc.status));let k=l.createEl("select",{cls:"dropdown stnd-panel-select stnd-panel-vis-select"}),T=k.createEl("option",{value:"public",text:"Public"});T.title="Public \u2014 visible in your garden feed & search";let S=k.createEl("option",{value:"unlisted",text:"Unlisted"});S.title="Unlisted \u2014 hidden from feed/search, accessible only via link";let x=k.createEl("option",{value:"private",text:"Private"});x.title="Private \u2014 encrypted & accessible only to you when logged in";let C=String(n.visibility||"public").toLowerCase().trim();k.value=["public","unlisted","private"].includes(C)?C:"public";let w=()=>{let v=k.value;k.title=v==="private"?"Private \u2014 accessible to you only on standard.garden":v==="unlisted"?"Unlisted \u2014 accessible via direct link only":"Public \u2014 visible in your garden feed and search"};w(),k.addEventListener("change",()=>{this._setFrontmatter(t,"visibility",k.value),w()})}else{let g=l.createEl("span",{text:"Add an API key in settings to plant seeds.",cls:"stnd-panel-meta"});g.style.fontStyle="italic"}if(this.plugin.settings.apiKey){let g=o.createEl("div",{cls:"stnd-panel-primary-action"}),y=async S=>{S&&(S.disabled=!0,S.textContent="...");let x=await this.plugin.garden.publishWithCheck(t);x===!0?(new A.Notice(`Standard: "${t.basename}" published.`),this.plugin.settings.openAfterPublish&&this.plugin.garden.viewLiveVersion(t),this.render()):x===!1?(new A.Notice(`Standard: Failed to publish "${t.basename}".`),this.render()):S&&(S.disabled=!1,this.render())},b=async S=>{S&&(S.disabled=!0,S.textContent="...");try{let x=d;x||(x=(await this.plugin.garden.checkNoteStatus(t))?.remoteContent),x?(await this.plugin.app.vault.modify(t,x),new A.Notice("Standard: Local file updated with remote version."),this.plugin.publishStatus?.noteStatuses?.set(t.path,{status:"synced",timestamp:Date.now()}),this.plugin.publishStatus?.refreshAll(),this.render()):(new A.Notice("Standard: Remote content not found."),S&&(S.disabled=!1,this.render()))}catch(x){console.error("Standard: Error pulling remote content:",x),new A.Notice("Standard: Error updating local file."),S&&(S.disabled=!1,this.render())}};if(f){let S=g.createEl("div",{cls:"stnd-panel-btn-split"}),x=S.createEl("button",{cls:"btn stnd-panel-btn-primary"});A.setIcon(x.createSpan({cls:"stnd-btn-icon"}),"arrow-down-circle"),x.createSpan({text:"Pull remote changes"}),x.title="Pull remote version (overwrite local)",x.addEventListener("click",()=>b(x));let C=S.createEl("button",{cls:"btn stnd-panel-btn-secondary"});A.setIcon(C.createSpan({cls:"stnd-btn-icon"}),"refresh-cw"),C.createSpan({text:"Force"}),C.title="Force publish local version",C.addEventListener("click",()=>y(C))}else{let S=g.createEl("button",{cls:"btn stnd-panel-btn-primary"+(i?" is-warning":"")}),x=i?"alert-circle":p?"upload-cloud":r?"refresh-cw":"upload-cloud",C=i?"Republish to Garden":p?"Publish changes":r?"Update note":"Publish to Garden";A.setIcon(S.createSpan({cls:"stnd-btn-icon"}),x),S.createSpan({text:C});let w=String(n.visibility||"public").toLowerCase().trim(),v=w==="private"?"privately":w==="unlisted"?"as unlisted":"publicly";S.title=r?`Update note on standard.garden (${v})`:`Publish note to standard.garden (${v} \u2014 visible to ${w==="private"?"you only":w==="unlisted"?"link holders":"everyone"})`,S.addEventListener("click",()=>y(S))}let k=null;r&&this.plugin.settings.apiUsername&&(k=this.plugin.garden.getLiveUrl(t));let T=o.createEl("div",{cls:"stnd-panel-toolbar"});if(r&&k){let S=T.createEl("button",{cls:"btn stnd-panel-btn"});A.setIcon(S.createSpan({cls:"stnd-btn-icon"}),"external-link"),S.createSpan({text:"Open"}),S.title="View note online in browser",S.addEventListener("click",()=>this.plugin.garden.viewLiveVersion(t));let x=T.createEl("button",{cls:"btn stnd-panel-btn"});A.setIcon(x.createSpan({cls:"stnd-btn-icon"}),"share-2"),x.createSpan({text:"Share"}),x.title="Share public link",x.addEventListener("click",()=>{new mi(this.plugin.app,t.basename,k).open()});let C=T.createEl("button",{cls:"btn stnd-panel-btn"});A.setIcon(C.createSpan({cls:"stnd-btn-icon"}),"copy"),C.createSpan({text:"Copy"}),C.title="Copy public URL to clipboard",C.addEventListener("click",()=>{navigator.clipboard.writeText(k),new A.Notice("Public URL copied to clipboard.")});let w=T.createEl("button",{cls:"btn stnd-panel-btn stnd-panel-btn-icon"});w.title="More note actions",w.setAttribute("aria-label","More note actions"),A.setIcon(w,"more-horizontal"),w.addEventListener("click",v=>{this._showNoteActionMenu(t,n,v,{isConfirmedOnline:r,isDesynced:i,isOutdated:f,isModifiedLocally:p,remoteContent:d,liveUrl:k,publishAction:y,pullAction:b})})}else{let S=T.createEl("button",{cls:"btn stnd-panel-btn"});A.setIcon(S.createSpan({cls:"stnd-btn-icon"}),"more-horizontal"),S.createSpan({text:"Options"}),S.title="More note actions",S.addEventListener("click",x=>{this._showNoteActionMenu(t,n,x,{isConfirmedOnline:r,isDesynced:i,isOutdated:f,isModifiedLocally:p,remoteContent:d,liveUrl:k,publishAction:y,pullAction:b})})}}if(r){let g=o.createEl("div",{cls:"stnd-panel-stats-box"});g.style.cssText="margin-top: var(--size-4-3); padding-top: var(--size-4-2); border-top: 1px solid var(--background-modifier-border);";let y=this.noteStatsCache.get(t.path);!y&&!this.isLoadingStats&&this.loadNoteStats(t);let b=g.createEl("div",{cls:"stnd-panel-stats-row"});b.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: var(--size-4-2); font-size: var(--font-ui-smaller); color: var(--text-muted);";let k=b.createEl("div",{cls:"stnd-panel-views-count"});k.style.cssText="display: flex; align-items: center; gap: 4px;";let T=k.createEl("span");A.setIcon(T,"eye");let S=y?y.views:this.isLoadingStats?"...":0;if(k.createEl("span",{text:`${S} ${S===1?"view":"views"}`}),y?.updated_at){let C=new Date(y.updated_at).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"});b.createEl("span",{text:`Updated ${C}`,cls:"stnd-panel-meta"})}}}_renderGardenSettings(e,t,n){if(!(n.permalink==="/"))return;let s=e.createEl("div",{cls:"stnd-panel-section stnd-panel-garden-profile"}),r=s.createEl("div",{cls:"stnd-panel-section-header"});r.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-semibold); color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--size-4-2);",r.createEl("span",{text:"Garden Profile Settings"});let i=[{key:"garden-display-name",label:"Display name",type:"text",placeholder:this.plugin?.settings?.apiUsername||"Gardener"},{key:"garden-domain",label:"Custom domain",type:"text",placeholder:"notes.example.com"},{key:"garden-brand",label:"Brand logo",type:"text",placeholder:"URL or false to hide"},{key:"garden-favicon",label:"Favicon",type:"text",placeholder:"https://.../favicon.png"},{key:"garden-avatar",label:"Avatar",type:"text",placeholder:"URL or image path"},{key:"garden-launcher",label:"Command Launcher",type:"toggle",default:!0},{key:"garden-mycelium",label:"Mycelium Network",type:"toggle",default:!0}];for(let l of i)this._renderField(s,t,n,l)}_renderAIGenerate(e,t,n){let o=e.createEl("div",{cls:"stnd-panel-section stnd-panel-ai"}),s=Object.keys(n).some(f=>co.has(f)||f.startsWith("stnd-")||f.startsWith("stnd_")),r=o.createEl("div",{cls:"stnd-panel-ai-row"});if(r.style.display="flex",r.style.gap="var(--size-4-2)",r.style.marginTop="0",s){let f=r.createEl("button",{cls:"btn stnd-panel-btn stnd-panel-btn-secondary"});A.setIcon(f.createSpan({cls:"stnd-btn-icon"}),"rotate-ccw"),f.createSpan({text:"Reset"}),f.style.flex="1",f.title="Clear custom design tokens",f.addEventListener("click",()=>{new Ha(this.plugin.app,`Remove all design tokens from "${t.basename}"?

This will delete fonts, colors, rhythm and layout tokens from frontmatter.`,"Reset",async()=>{let d=0;await this.plugin.app.fileManager.processFrontMatter(t,u=>{for(let h of Object.keys(u))!h.startsWith("garden-")&&!h.startsWith("garden_")&&(co.has(h)||h.startsWith("stnd-")||h.startsWith("stnd_"))&&(delete u[h],d++)}),new A.Notice(d>0?`Cleared ${d} design token${d>1?"s":""}.`:"No design tokens found."),this.plugin.design.updateBodyClasses(),this.render()},()=>{}).open()})}let i=r.createEl("button",{cls:"btn stnd-panel-btn stnd-panel-btn-ai"});A.setIcon(i.createSpan({cls:"stnd-btn-icon"}),"sparkles");let l=i.createSpan({text:"Let's Hyphe design this"});i.style.flex="2",i.title="Generate harmonious design tokens with Hyphe AI";let c=this;i.addEventListener("click",async()=>{i.disabled=!0,l.textContent="Hyphe is designing\u2026";try{let f=await c.plugin.app.vault.cachedRead(t),d=await c.plugin.garden.generateTokens("",f,n);if(d&&typeof d=="object"){let u=new Set(["margin","margin-block"]);await c.plugin.app.fileManager.processFrontMatter(t,h=>{for(let[m,p]of Object.entries(d))co.has(m)&&!u.has(m)&&(h[m]=p)}),new A.Notice(`Hyphe styled this note with ${Object.keys(d).length} tokens.`)}else new A.Notice("No tokens returned.")}catch(f){let d=f.message||"Failed to generate design";try{let u=d.indexOf("{");if(u!==-1){let h=JSON.parse(d.slice(u));h.error&&(d=h.error)}}catch{}new A.Notice(`Design failed: ${d}`)}finally{i.disabled=!1,l.textContent="Let's Hyphe design this"}})}_humanizeTokenKey(e){let t={"font-text":"Body font","font-header":"Heading font","font-monospace":"Code font","font-interface":"UI font","font-weight":"Body weight","font-weight-bold":"Bold weight","font-header-weight":"Heading weight","font-header-letter-spacing":"Letter spacing","font-header-line-height":"Line height","font-header-style":"Heading style","font-density":"Font density","optical-ratio":"Optical ratio","line-width":"Line width","body-max-width":"Max width",margin:"Base unit","margin-block":"Block multiplier",foreground:"Foreground",background:"Background",accent:"Accent"};if(t[e])return t[e];let n=e.replace(/^color-(light|dark)-/,"").replace(/^color-/,"").replace(/^font-/,"");return n.charAt(0).toUpperCase()+n.slice(1).replace(/-/g," ")}_getTokenFieldType(e){let t=Dc?.get(e);return t==="color"||e.startsWith("color-")||e==="accent"||e==="foreground"||e==="background"?"color":t==="number"?"number":"text"}_renderTokenGroups(e,t,n){for(let o of Ac){let s=e.createEl("details",{cls:"stnd-panel-group stnd-panel-token-group"});s.createEl("summary",{text:o.title});let r=s.createEl("div",{cls:"stnd-panel-fields"});for(let i of o.keys){let l=this._getTokenFieldType(i),c=o.defaults?.[i],f=c?String(c).replace(/^["']|["']$/g,""):"",d=i.includes("line-height")||i.includes("margin")?"0.05":i.includes("weight")?"50":"1";this._renderField(r,t,n,{key:i,label:this._humanizeTokenKey(i),type:l,placeholder:f,step:d})}}}_renderDesignSection(e,t,n){let o=Object.keys(n).some(r=>co.has(r)||r.startsWith("stnd-")||r.startsWith("stnd_")),{body:s}=this._createCollapsibleSection(e,"design","Design",{badge:o?"Custom":null});this._renderAIGenerate(s,t,n),this._renderTokenGroups(s,t,n)}_renderField(e,t,n,o){let s=e.createEl("div",{cls:"stnd-panel-field"});s.createEl("label",{text:o.label,cls:"stnd-panel-field-label"});let r=n[o.key];switch(o.type){case"text":{let i=s.createEl("input",{cls:"stnd-panel-input",type:"text"});i.placeholder=o.placeholder||"",i.value=r??"",i.addEventListener("input",()=>{this._setFrontmatter(t,o.key,i.value||null)});break}case"number":{let i=s.createEl("input",{cls:"stnd-panel-input",type:"number"});i.placeholder=o.placeholder||"",i.step=o.step||"1",i.value=r??"",i.addEventListener("input",()=>{let l=i.value===""?null:Number(i.value);this._setFrontmatter(t,o.key,l)});break}case"toggle":{let i=r!==void 0?!!(r&&r!=="false"):o.default??!1,l=s.createEl("div",{cls:"checkbox-container"+(i?" is-enabled":"")});l.addEventListener("click",()=>{let c=!l.hasClass("is-enabled");l.toggleClass("is-enabled",c),this._setFrontmatter(t,o.key,c)});break}case"dropdown":{let i=s.createEl("select",{cls:"dropdown stnd-panel-select"});for(let l of o.options){let c=i.createEl("option",{text:l||"\u2014",value:l});(r??"")===l&&(c.selected=!0)}i.addEventListener("change",()=>{this._setFrontmatter(t,o.key,i.value||null)});break}case"color":{let i=s.createEl("div",{cls:"stnd-panel-color-wrap"}),l=i.createEl("input",{type:"color",cls:"stnd-panel-color"}),c=i.createEl("input",{type:"text",cls:"stnd-panel-input stnd-panel-color-text"});c.placeholder=o.placeholder||"#000000";let f=r??"",d=this._toHex(f);l.value=d||"#000000",c.value=f,l.addEventListener("input",()=>{c.value=l.value,this._setFrontmatter(t,o.key,l.value)}),c.addEventListener("input",()=>{let u=this._toHex(c.value);u&&(l.value=u),this._setFrontmatter(t,o.key,c.value||null)});break}}}_toHex(e){if(!e)return null;let t=String(e).trim().replace(/^["']|["']$/g,"");return/^#[0-9a-f]{6}$/i.test(t)?t:/^#[0-9a-f]{3}$/i.test(t)?"#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]:null}async runScan(){this.isAuditing=!0,this.render();try{this.auditData=await this.plugin.vaultAudit.performAudit()}catch(e){console.error("[Garden] Audit failed:",e)}finally{this.isAuditing=!1,this.render()}}_renderAuditTab(e){let t=e.createEl("div",{cls:"stnd-audit-container"}),n=t.createEl("div",{cls:"stnd-audit-header-row"});n.createEl("h3",{text:"Vault Audit",cls:"stnd-audit-title"});let o=n.createEl("button",{cls:"stnd-audit-refresh-btn"+(this.isAuditing?" is-loading":""),title:"Refresh audit"});if(A.setIcon(o,"refresh-cw"),o.addEventListener("click",()=>this.runScan()),!this.auditData&&!this.isAuditing){this.runScan();return}if(this.isAuditing){let m=t.createEl("div",{cls:"stnd-audit-loading"}),p=m.createEl("div",{cls:"stnd-audit-spinner"});A.setIcon(p,"loader"),m.createEl("p",{text:"Scanning vault...",cls:"stnd-audit-loading-text"});return}let{brokenEmbeds:s,brokenLinks:r,orphanedMedia:i}=this.auditData,l=t.createEl("div",{cls:"stnd-audit-stats-row"}),c=l.createEl("div",{cls:"stnd-audit-stat-card type-embed"});c.createEl("div",{text:String(s.length),cls:"stnd-audit-stat-number"}),c.createEl("div",{text:"Broken Media",cls:"stnd-audit-stat-label"});let f=l.createEl("div",{cls:"stnd-audit-stat-card type-link"});f.createEl("div",{text:String(r.length),cls:"stnd-audit-stat-number"}),f.createEl("div",{text:"Broken Links",cls:"stnd-audit-stat-label"});let d=l.createEl("div",{cls:"stnd-audit-stat-card type-orphan"});d.createEl("div",{text:String(i.length),cls:"stnd-audit-stat-number"}),d.createEl("div",{text:"Orphaned Media",cls:"stnd-audit-stat-label"});let u=0,h=new Set(s.map(m=>m.link.split("/").pop().toLowerCase()));for(let m of i){let p=m.name.match(/^(\d{6}_\d{4}_)(.*)/);p&&h.has(p[2].toLowerCase())&&u++}if(u>0){let m=t.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"}),p=m.createEl("span",{cls:"stnd-audit-banner-icon"});A.setIcon(p,"alert-triangle");let g=m.createEl("div",{cls:"stnd-audit-banner-text"});g.createEl("strong",{text:"Double Timestamps Detected"}),g.createEl("span",{text:`${u} orphaned images match broken links due to double timestamping.`});let y=m.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Auto Repair"});y.addEventListener("click",async()=>{y.disabled=!0,y.textContent="Repairing...";let b=await this.plugin.vaultAudit.fixDoubleTimestamps();new A.Notice(`${b} images successfully repaired!`),this.runScan()})}this._renderAuditSection(t,"Broken Images & Media",s,"image",m=>this._renderBrokenEmbeds(m,s),null,s.length<=50),this._renderAuditSection(t,"Broken Internal Links",r,"link",m=>this._renderBrokenLinks(m,r),null,r.length<=50),this._renderAuditSection(t,"Orphaned Media",i,"folder",m=>this._renderOrphanedMedia(m,i),i.length>0?()=>{new Ha(this.plugin.app,`Delete permanently the ${i.length} orphaned media files?

This action is irreversible.`,"Delete all",async()=>{let m=0;for(let p of i)await this.plugin.vaultAudit.deleteOrphan(p)&&m++;new A.Notice(`${m} files deleted.`),this.runScan()},()=>{}).open()}:null,i.length<=50)}_getFileTags(e){let t=fo(this.plugin.app,e),n=this.plugin.app.metadataCache.getFileCache(e),o=[];if(n?.tags&&o.push(...n.tags.map(s=>s.tag.toLowerCase().replace(/^#/,""))),t?.tags){let s=t.tags;Array.isArray(s)?o.push(...s.map(r=>String(r).toLowerCase().replace(/^#/,""))):typeof s=="string"&&o.push(...s.split(",").map(r=>r.trim().toLowerCase().replace(/^#/,"")))}return o}async _addTagToFile(e,t){let n=t.replace(/^#/,"");await this.plugin.app.fileManager.processFrontMatter(e,o=>{let s=o.tags||[];typeof s=="string"&&(s=s.split(",").map(r=>r.trim())),s.includes(n)||(s.push(n),o.tags=s)})}async _removeTagFromFile(e,t){let n=t.replace(/^#/,"");await this.plugin.app.fileManager.processFrontMatter(e,o=>{let s=o.tags||[];typeof s=="string"&&(s=s.split(",").map(r=>r.trim())),o.tags=s.filter(r=>r!==n)})}async refreshLinksData(){window.stndPanelRefreshLinks=()=>this.refreshLinksData();let e=this.plugin.app.workspace.getActiveFile();if(!e){this.linksData=null;return}this.isLoadingLinks=!0,this.render();try{let t=[],n=this.plugin.app.metadataCache.resolvedLinks||{};for(let[s,r]of Object.entries(n))if(s!==e.path&&r.hasOwnProperty(e.path)){let i=this.plugin.app.vault.getAbstractFileByPath(s);i&&t.push(i)}let o=await Ic(this.plugin.app,e,this.plugin);typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(o),this.linksData={incoming:t,unlinked:o,file:e}}catch(t){console.error("[Standard] Error loading links data",t)}finally{this.isLoadingLinks=!1,this.render()}}_renderHypheInquiries(e,t){let n=e.createEl("div",{cls:"stnd-resonances-card stnd-inquiries-card"}),o=n.createEl("div",{cls:"stnd-inquiries-header"});o.createEl("span",{cls:"stnd-inquiries-title"}).setText("\u{1F989} Hyphe (AI Thinker)");let r=this.inquiryCache.get(t.path),i=o.createEl("button",{cls:"stnd-inquiries-btn mod-cta",text:r?.questions?.length?"Ask again":"Ask Hyphe"});if(r?.isLoading&&(i.disabled=!0,i.setText("Reflecting...")),i.addEventListener("click",async()=>{await this.triggerHypheInquiry(t)}),r?.isLoading){let l=n.createEl("div",{cls:"stnd-inquiry-loading"});l.style.cssText="font-size: var(--font-ui-smaller); color: var(--text-muted); font-style: italic; padding: 6px 0;",l.setText("Hyphe is reading your note and framing questions...");return}if(r?.error){let l=n.createEl("div",{cls:"stnd-inquiry-error"});l.style.cssText="font-size: 11px; color: var(--color-red); margin-top: 4px;",l.setText(`Error: ${r.error}`);return}if(r?.questions?.length>0){let l=n.createEl("div",{cls:"stnd-inquiries-list"});for(let c of r.questions){let f=l.createEl("div",{cls:"stnd-inquiry-box"});f.createEl("span",{cls:"stnd-inquiry-text"}).setText(c),f.createEl("button",{cls:"stnd-inquiry-action-btn",text:"+ Add to note"}).addEventListener("click",async()=>{await this.appendInquiryToNote(t,c)})}}else{let l=n.createEl("p",{cls:"stnd-inquiry-placeholder",text:"Ask Hyphe (AI) for Socratic questions to challenge your assumptions and uncover unexamined angles on this note."});l.style.cssText="font-size: 11px; color: var(--text-faint); margin: 4px 0 0 0; line-height: 1.4;"}}_renderPublicResonances(e,t){let n=fo(this.plugin.app,t),o=!!n["garden-url"]||!!n.url_public||n.published===!0||n.published==="true",s=e.createEl("div",{cls:"stnd-resonances-card stnd-network-card"});if(s.createEl("div",{cls:"stnd-inquiries-header"}).createEl("span",{cls:"stnd-inquiries-title"}).setText("\u{1F310} Network Echoes"),!o){let m=s.createEl("p");m.style.cssText="font-size: 11px; color: var(--text-faint); margin: 0; line-height: 1.4;",m.setText("Publish this note to reveal public citations, readership metrics, and semantic connections across standard.garden.");return}let l=this.noteStatsCache.get(t.path);!l&&!this.isLoadingStats&&this.loadNoteStats(t);let c=s.createEl("div",{cls:"stnd-network-stats"}),f=l?l.views:this.isLoadingStats?"...":0,d=l?.citations?.length||0;if(c.createEl("span",{text:`\u{1F441}\uFE0F ${f} ${f===1?"view":"views"} \xB7 \u{1F517} ${d} ${d===1?"citation":"citations"}`}),l?.updated_at){let m=new Date(l.updated_at);c.createEl("span",{text:m.toLocaleDateString(void 0,{month:"short",day:"numeric"}),cls:"stnd-panel-meta"})}let u=l?.citations||[];if(u.length>0){s.createEl("div",{cls:"stnd-network-subheading",text:`Citations & Mentions (${u.length})`});let m=s.createEl("div");m.style.cssText="display: flex; flex-direction: column; gap: 4px;";for(let p of u){let g=m.createEl("div",{cls:"stnd-panel-citation-card"});g.style.cssText="display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; border-radius: var(--radius-s); background: var(--background-primary); cursor: pointer; border: 1px solid var(--background-modifier-border);";let y=g.createEl("div");y.style.cssText="display: flex; flex-direction: column; min-width: 0;";let b=y.createEl("span",{text:p.title||p.slug,cls:"stnd-panel-citation-title"});b.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;";let k=y.createEl("span",{text:`@${p.username}`,cls:"stnd-panel-citation-author"});k.style.cssText="font-size: 10px; color: var(--text-faint);",g.addEventListener("click",()=>{let T=this.plugin.garden?.bySlug?.get(p.slug)||this.plugin.garden?.byTitleSlug?.get(p.slug)||this.plugin.garden?.byBasenameSlug?.get(p.slug);T?this.plugin.app.workspace.getLeaf(!1).openFile(T):p.url&&window.open(p.url,"_blank")})}}let h=l?.related||[];if(h.length>0){s.createEl("div",{cls:"stnd-network-subheading",text:`Related Notes (${h.length})`});let m=s.createEl("div");m.style.cssText="display: flex; flex-direction: column; gap: 4px;";for(let p of h){let g=m.createEl("div",{cls:"stnd-panel-citation-card"});g.style.cssText="display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; border-radius: var(--radius-s); background: var(--background-primary); cursor: pointer; border: 1px solid var(--background-modifier-border);";let y=g.createEl("div");y.style.cssText="display: flex; flex-direction: column; min-width: 0;";let b=y.createEl("span",{text:p.title||p.slug,cls:"stnd-panel-citation-title"});if(b.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",p.username){let k=y.createEl("span",{text:`@${p.username}`,cls:"stnd-panel-citation-author"});k.style.cssText="font-size: 10px; color: var(--text-faint);"}g.addEventListener("click",()=>{let k=this.plugin.garden?.bySlug?.get(p.slug)||this.plugin.garden?.byTitleSlug?.get(p.slug)||this.plugin.garden?.byBasenameSlug?.get(p.slug);k?this.plugin.app.workspace.getLeaf(!1).openFile(k):p.url&&window.open(p.url,"_blank")})}}}_renderRootsSection(e,t){if(!t)return;let n=0;this.linksData?.unlinked&&(n=this.linksData.unlinked.length);let{body:o}=this._createCollapsibleSection(e,"roots","Roots",{badge:n>0?`${n} unlinked`:null,onRefresh:()=>this.refreshLinksData()}),s=o.createEl("div",{cls:"stnd-panel-mycelium-prefs"});s.style.cssText="display: flex; flex-direction: column; gap: 8px; margin: 0 0 var(--size-4-3) 0; padding: 10px 12px; background: var(--background-secondary); border-radius: var(--radius-m); border: 1px solid var(--background-modifier-border);";let r=s.createEl("div");r.style.cssText="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--background-modifier-border); padding-bottom: 4px; margin-bottom: 2px;";let i=r.createEl("span",{text:"Vault-Wide Preferences"});i.style.cssText="font-size: 10px; font-weight: var(--font-semibold); color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.05em;";let l=(y,b,k,T)=>{let S=s.createEl("div");S.style.cssText="display: flex; align-items: center; justify-content: space-between; gap: 8px;";let x=S.createEl("div");x.style.cssText="display: flex; flex-direction: column; min-width: 0;";let C=x.createEl("span",{text:y});C.style.cssText="font-size: var(--font-ui-smaller); font-weight: var(--font-medium); color: var(--text-normal);";let w=x.createEl("span",{text:b});w.style.cssText="font-size: 11px; color: var(--text-faint);";let v=S.createEl("div",{cls:"checkbox-container"+(k?" is-enabled":"")});v.style.cssText="cursor: pointer; flex-shrink: 0;",v.addEventListener("click",async()=>{let N=!v.hasClass("is-enabled");v.toggleClass("is-enabled",N),await T(N)})};this.plugin.settings.mycelium||(this.plugin.settings.mycelium={enableGhostLinks:!1,enableLinkingCommand:!0,enableCompostFooter:!0});let c=this.plugin.settings.mycelium;if(l("Ghost links","Underline mentions in editor (Alt+click or tap to link)",!!c.enableGhostLinks,async y=>{c.enableGhostLinks=y,window.stndMyceliumSettings=c,await this.plugin.saveSettings(),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),new A.Notice(y?"Ghost links enabled in editor.":"Ghost links disabled.")}),l("Compost footer","Show suggested note connections at bottom of reading view",!!c.enableCompostFooter,async y=>{c.enableCompostFooter=y,window.stndMyceliumSettings=c,await this.plugin.saveSettings(),typeof window.stndRefreshMycelium=="function"&&window.stndRefreshMycelium(),new A.Notice(y?"Compost footer enabled.":"Compost footer hidden.")}),this.isLoadingLinks){let y=o.createEl("div",{cls:"stnd-audit-loading"}),b=y.createEl("div",{cls:"stnd-audit-spinner"});A.setIcon(b,"loader"),y.createEl("p",{text:"Scanning roots & mentions...",cls:"stnd-audit-loading-text"});return}if(!this.linksData)return;let{incoming:f,unlinked:d}=this.linksData,u="backlink-exclude",h=[],m=[],p=new Set;for(let y of f){if(p.has(y.path))continue;p.add(y.path),this._getFileTags(y).includes(u)?m.push(y):h.push(y)}let g=[];for(let y of d){if(p.has(y.file.path))continue;p.add(y.file.path),this._getFileTags(y.file).includes(u)?m.push(y.file):g.push(y)}this._renderAuditSection(o,"Unlinked mentions",g,"link-2",y=>this._renderUnlinkedMentionsList(y,g,t,u),null,g.length>0),this._renderAuditSection(o,"Linked mentions (Backlinks)",h,"link",y=>this._renderLinkedMentionsList(y,h,u),null,h.length>0),m.length>0&&this._renderAuditSection(o,"Active exclusions",m,"eye-off",y=>this._renderExcludedMentionsList(y,m,u),null,!1)}_renderMyceliumSection(e,t){if(!t)return;let{body:n}=this._createCollapsibleSection(e,"mycelium","Mycelium",{onRefresh:()=>{this.noteStatsCache.delete(t.path),this.loadNoteStats(t),this.render()}});this._renderHypheInquiries(n,t),this._renderPublicResonances(n,t)}_renderLinkedMentionsList(e,t,n){t.forEach(o=>{let s=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-row"});s.createEl("div",{cls:"stnd-audit-card-title-wrap"}).createEl("a",{cls:"stnd-audit-note-link",text:o.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(o)});let c=s.createEl("div",{cls:"stnd-audit-card-actions"}).createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",attr:{title:"Hide"}});A.setIcon(c.createEl("span",{cls:"btn-icon"}),"eye-off"),c.addEventListener("click",async()=>{await this._addTagToFile(o,n),new A.Notice(`Hidden: ${o.basename}`),this.refreshLinksData()})})}_renderUnlinkedMentionsList(e,t,n,o){t.forEach(s=>{let r=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-row"}),i=r.createEl("div",{cls:"stnd-audit-card-title-wrap"});i.createEl("a",{cls:"stnd-audit-note-link",text:s.file.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(s.file)}),s.term&&i.createEl("span",{cls:"stnd-panel-meta stnd-audit-card-term",text:`"${s.term}"`});let c=r.createEl("div",{cls:"stnd-audit-card-actions"}),f=c.createEl("button",{cls:"stnd-panel-btn stnd-audit-btn-compact",attr:{title:"Link"}});A.setIcon(f.createEl("span",{cls:"btn-icon"}),"link"),f.addEventListener("click",async()=>{await Pc(this.plugin.app,n,s),this.refreshLinksData()});let d=c.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",attr:{title:"Hide"}});A.setIcon(d.createEl("span",{cls:"btn-icon"}),"eye-off"),d.addEventListener("click",async()=>{await this._addTagToFile(s.file,o),new A.Notice(`Hidden: ${s.file.basename}`),this.refreshLinksData()})})}_renderExcludedMentionsList(e,t,n){t.forEach(o=>{let s=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-row"});s.createEl("div",{cls:"stnd-audit-card-title-wrap"}).createEl("a",{cls:"stnd-audit-note-link",text:o.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(o)});let c=s.createEl("div",{cls:"stnd-audit-card-actions"}).createEl("button",{cls:"stnd-panel-btn stnd-audit-btn-compact",attr:{title:"Restore"}});A.setIcon(c.createEl("span",{cls:"btn-icon"}),"undo"),c.addEventListener("click",async()=>{await this._removeTagFromFile(o,n),new A.Notice(`Restored: ${o.basename}`),this.refreshLinksData()})})}_renderAuditSection(e,t,n,o,s,r=null,i=!0){let l=e.createEl("details",{cls:"stnd-panel-group stnd-audit-section"});n.length>0&&i&&l.setAttribute("open","");let c=l.createEl("summary"),f=c.createEl("div",{cls:"stnd-audit-section-title-wrap"}),d=f.createEl("span",{cls:"stnd-audit-section-icon"});A.setIcon(d,o),f.createEl("span",{text:`${t} (${n.length})`}),r&&c.createEl("button",{cls:"stnd-audit-bulk-btn",text:"Clean"}).addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),r()});let u=l.createEl("div",{cls:"stnd-audit-section-content"});if(n.length===0){let h=u.createEl("div",{cls:"stnd-audit-empty-success"}),m=h.createEl("span",{cls:"stnd-audit-check-icon"});A.setIcon(m,"check"),h.createEl("span",{text:"Everything is in order"})}else s(u)}_renderBrokenEmbeds(e,t){if(t.length>50){let n=e.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"});n.style.margin="0 0 var(--size-4-3) 0";let o=n.createEl("div",{cls:"stnd-audit-banner-text"});o.createEl("strong",{text:"Render Hidden for Safety"}),o.createEl("span",{text:`Displaying the ${t.length} broken media cards is disabled to prevent slowing down Obsidian.`});let s=n.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Show anyway"});s.style.background="var(--interactive-accent)",s.style.color="var(--text-on-accent)",s.addEventListener("click",()=>{n.remove(),this._renderBrokenEmbedsList(e,t)})}else this._renderBrokenEmbedsList(e,t)}_renderBrokenEmbedsList(e,t){t.forEach(n=>{let o=e.createEl("div",{cls:"stnd-audit-card"}),s=o.createEl("div",{cls:"stnd-audit-card-source-row"});s.createEl("a",{cls:"stnd-audit-note-link",text:n.file.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(n.file,{eState:{line:n.line??0}})}),s.createEl("span",{cls:"stnd-audit-badge-type",text:n.isMedia?"media":"note"}),o.createEl("div",{cls:"stnd-audit-card-broken-target",text:`\u21B3 Missing target: ${n.link}`});let i=o.createEl("div",{cls:"stnd-audit-card-actions"}),l=i.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",text:"Search"});A.setIcon(l.createEl("span",{cls:"btn-icon"}),"search");let c=`${n.file.path}::${n.link}`;l.addEventListener("click",async()=>{if(this.searchingCandidates[c]){delete this.searchingCandidates[c],this.render();return}let d=await this.plugin.vaultAudit.findCandidates(n.link);this.searchingCandidates[c]=d,this.render()});let f=i.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-danger stnd-audit-btn-compact",text:"Delete"});if(A.setIcon(f.createEl("span",{cls:"btn-icon"}),"trash"),f.addEventListener("click",async()=>{await this.plugin.vaultAudit.removeBrokenReference(n)&&(new A.Notice("Broken reference deleted."),this.runScan())}),this.searchingCandidates[c]){let d=this.searchingCandidates[c],u=o.createEl("div",{cls:"stnd-audit-candidates-wrap"});d.length===0?u.createEl("div",{text:"No file with this name was found.",cls:"stnd-audit-candidates-empty"}):(u.createEl("div",{text:"Files found (click to link):",cls:"stnd-audit-candidates-title"}),d.forEach(h=>{u.createEl("button",{cls:"stnd-audit-candidate-btn",text:h.path}).addEventListener("click",async()=>{await this.plugin.vaultAudit.resolveBrokenEmbed(n,h.path)&&(new A.Notice("Link successfully repaired!"),delete this.searchingCandidates[c],this.runScan())})}))}})}_renderBrokenLinks(e,t){if(t.length>50){let n=e.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"});n.style.margin="0 0 var(--size-4-3) 0";let o=n.createEl("div",{cls:"stnd-audit-banner-text"});o.createEl("strong",{text:"Rendu masqu\xE9 par s\xE9curit\xE9"}),o.createEl("span",{text:`L'affichage des ${t.length} cartes de liens bris\xE9s est d\xE9sactiv\xE9 pour \xE9viter de ralentir Obsidian. Ces liens pointent g\xE9n\xE9ralement vers des notes futures pr\xE9vues.`});let s=n.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Afficher quand m\xEAme"});s.style.background="var(--interactive-accent)",s.style.color="var(--text-on-accent)",s.addEventListener("click",()=>{n.remove(),this._renderBrokenLinksList(e,t)})}else this._renderBrokenLinksList(e,t)}_renderBrokenLinksList(e,t){t.forEach(n=>{let o=e.createEl("div",{cls:"stnd-audit-card"});o.createEl("div",{cls:"stnd-audit-card-source-row"}).createEl("a",{cls:"stnd-audit-note-link",text:n.file.basename}).addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(n.file,{eState:{line:n.line??0}})}),o.createEl("div",{cls:"stnd-audit-card-broken-target",text:`\u21B3 Broken link: [[${n.link}]]`});let i=o.createEl("div",{cls:"stnd-audit-card-actions"}),l=i.createEl("button",{cls:"stnd-panel-btn stnd-audit-btn-compact",text:"Create Note"});A.setIcon(l.createEl("span",{cls:"btn-icon"}),"plus"),l.addEventListener("click",async()=>{await this.plugin.vaultAudit.createMissingNote(n)&&(new A.Notice(`Note "${n.link}" created.`),this.runScan())});let c=i.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",text:"Remove Link"});A.setIcon(c.createEl("span",{cls:"btn-icon"}),"link-2"),c.addEventListener("click",async()=>{await this.plugin.vaultAudit.removeBrokenLink(n)&&(new A.Notice("Link converted to plain text."),this.runScan())})})}_renderOrphanedMedia(e,t){if(t.length>50){let n=e.createEl("div",{cls:"stnd-audit-banner stnd-audit-banner-warning"});n.style.margin="0 0 var(--size-4-3) 0";let o=n.createEl("div",{cls:"stnd-audit-banner-text"});o.createEl("strong",{text:"Render Hidden for Safety"}),o.createEl("span",{text:`Displaying the ${t.length} orphaned media cards is disabled to prevent slowing down Obsidian.`});let s=n.createEl("button",{cls:"stnd-panel-btn stnd-audit-banner-btn",text:"Show anyway"});s.style.background="var(--interactive-accent)",s.style.color="var(--text-on-accent)",s.addEventListener("click",()=>{n.remove(),this._renderOrphanedMediaList(e,t)})}else this._renderOrphanedMediaList(e,t)}_renderOrphanedMediaList(e,t){t.forEach(n=>{let o=e.createEl("div",{cls:"stnd-audit-card stnd-audit-card-orphan"});if(/\.(png|jpe?g|gif|webp|svg|avif)$/i.test(n.name)){let u=o.createEl("div",{cls:"stnd-audit-orphan-thumb-wrap"}),h=this.app.vault.getResourcePath(n),m=u.createEl("img",{cls:"stnd-audit-orphan-thumb"});m.src=h}let r=o.createEl("div",{cls:"stnd-audit-orphan-info"});r.createEl("div",{text:n.name,cls:"stnd-audit-orphan-name"});let i=Math.round(n.stat.size/102.4)/10,l=i>1e3?`${Math.round(i/102.4)/10} MB`:`${i} KB`;r.createEl("div",{text:`${n.path} (${l})`,cls:"stnd-audit-orphan-path"});let c=o.createEl("div",{cls:"stnd-audit-card-actions"});c.style.marginTop="var(--size-4-2)";let f=c.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-secondary stnd-audit-btn-compact",text:"Open"});A.setIcon(f.createEl("span",{cls:"btn-icon"}),"file-text"),f.addEventListener("click",()=>{this.app.workspace.getLeaf().openFile(n)});let d=c.createEl("button",{cls:"stnd-panel-btn stnd-panel-btn-danger stnd-audit-btn-compact",text:"Delete"});A.setIcon(d.createEl("span",{cls:"btn-icon"}),"trash"),d.addEventListener("click",()=>{new Ha(this.plugin.app,`Delete permanently the media file "${n.name}"?`,"Delete",async()=>{await this.plugin.vaultAudit.deleteOrphan(n)&&(new A.Notice("Media deleted."),this.runScan())},()=>{}).open()})})}};yi.exports={StandardGardenView:Ka,STND_PANEL_VIEW:gi}});var bi=j((dg,wi)=>{"use strict";var{PluginSettingTab:Uc,Setting:Xe}=require("obsidian"),{descWithLinks:bt,DOCS_URLS:Ze}=ie(),{openDoc:Bc}=Va(),{setIcon:qc}=require("obsidian"),Ga=class extends Uc{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:e}=this;e.empty();let n=e.createEl("h2",{text:"Publication"}).createEl("button",{cls:"clickable-icon",attr:{"aria-label":"Status & colors guide",title:"Status & colors guide"}});n.style.cssText="margin-left: 8px; vertical-align: middle;",qc(n,"info"),n.addEventListener("click",()=>Bc(this.app,Ze.status)),e.createEl("p",{text:"Notes marked with 'publish: true' in their frontmatter appear in your digital garden. Private drafts and notes in excluded folders are never shared online.",cls:"setting-item-description"}),new Xe(e).setName("Sync all published notes").setDesc(bt("Reconcile notes between your vault and the garden. Local drafts are always preserved. \xA7",[{text:"Learn how sync works \u2192",href:Ze.sync}])).addButton(o=>o.setButtonText("Sync Now").setCta().onClick(async()=>{await this.plugin.garden.syncAllPublished()})),new Xe(e).setName("Automatic synchronization").setDesc(bt("Check for updates in the background every 5 minutes. When disabled, notes are only synced when you manually request it. \xA7",[{text:"Learn more \u2192",href:Ze.sync}])).addToggle(o=>o.setValue(!!this.plugin.settings.autoSync).onChange(async s=>{this.plugin.settings.autoSync=s,this.plugin.settings.autoSyncStartup=s,await this.plugin.saveSettings(),this.plugin.garden&&this.plugin.garden.setupAutoSyncInterval()})),new Xe(e).setName("Sync direction").setDesc(bt("Push: your vault always wins \u2014 online edits never touch your files. Two-way: the newer side wins, online edits are pulled into your vault, and notes written online are downloaded. \xA7",[{text:"Compare the two \u2192",href:Ze.sync}])).addDropdown(o=>o.addOption("1way","Push (vault wins)").addOption("2way","Two-way (newer wins)").setValue(this.plugin.settings.syncDirection==="2way"?"2way":"1way").onChange(async s=>{this.plugin.settings.syncDirection=s,await this.plugin.saveSettings()})),new Xe(e).setName("Panel top status indicator").setDesc(bt("A visual accent on top of the Garden side panel reflecting the active note's publication state. \xA7",[{text:"Learn more \u2192",href:Ze.plugin}])).addDropdown(o=>o.addOption("garden","Garden (Organic gradient with animation)").addOption("subtle","Subtle (Minimal accent line)").addOption("hidden","Disabled").setValue(this.plugin.settings.publishIndicatorStyle||"garden").onChange(async s=>{this.plugin.settings.publishIndicatorStyle=s,await this.plugin.saveSettings();let{PublishStatusFeature:r}=Yt(),i=this.plugin.features.find(l=>l instanceof r);i&&i.refreshAll(),this.plugin.panel&&this.plugin.panel.render()})),new Xe(e).setName("Open in browser after publish").setDesc("Automatically open the live web page in your browser immediately after publishing a note.").addToggle(o=>o.setValue(this.plugin.settings.openAfterPublish).onChange(async s=>{this.plugin.settings.openAfterPublish=s,await this.plugin.saveSettings()})),new Xe(e).setClass("stnd-advanced-setting").setName("Publish status badge location").setDesc(bt("Choose where the garden status icon appears in Obsidian. \xA7",[{text:"Learn more \u2192",href:Ze.plugin}])).addDropdown(o=>o.addOption("titlebar","Title bar (Note header)").addOption("statusbar","Status bar").addOption("ribbon","Ribbon bar").addOption("hidden","Hidden").setValue(this.plugin.settings.publishStatusLocation||"titlebar").onChange(async s=>{this.plugin.settings.publishStatusLocation=s,await this.plugin.saveSettings();let{PublishStatusFeature:r}=Yt(),i=this.plugin.features.find(l=>l instanceof r);i&&i.refreshAll()})),new Xe(e).setName("Ignored folders").setDesc(bt("The Garden ignores these folders entirely: nothing is published or synced, no status badge, and Mycelium neither suggests nor links them (comma-separated, e.g. Utopie, Archive). You can also right-click a folder in the file explorer. \xA7",[{text:"Configuration guide \u2192",href:Ze.plugin}])).addText(o=>o.setPlaceholder("Utopie, Archive").setValue(this.plugin.settings.excludedFolders||"").onChange(async s=>{this.plugin.settings.excludedFolders=s.trim(),await this.plugin.saveSettings()}))}};wi.exports={GardenSettingTab:Ga}});var vi=j((fg,ki)=>{"use strict";var{PluginSettingTab:_c,Setting:po,Notice:jc}=require("obsidian"),{descWithLinks:Wa,DOCS_URLS:en}=ie(),za=class extends _c{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"Apparence"}),e.createEl("p",{text:"The Standard Design System guarantees 1:1 typographic fidelity between your local editor and your online garden. Frontmatter tokens and curated typography are rendered directly in the workspace. ",cls:"setting-item-description"}).createEl("a",{text:"View Design System Manual \u2192",href:en.tokens}),new po(e).setName("Standard Design System").setDesc(Wa("Apply classical typography, fluid vertical rhythm, callouts, and harmonious color palettes across notes. \xA7",[{text:"Learn more \u2192",href:en.typography}])).addToggle(o=>o.setValue(this.plugin.settings.enableDesignSystem).onChange(async s=>{this.plugin.settings.enableDesignSystem=s,await this.plugin.saveSettings(),this.plugin.design.updateBodyClasses()}));let n=rn();new po(e).setName("Default Theme").setDesc(Wa("Select the default theme for notes that do not specify a theme in their frontmatter. \xA7",[{text:"Browse themes \u2192",href:en.tokens}])).addDropdown(o=>{o.addOption("","None (Default)"),Object.keys(n).forEach(s=>{o.addOption(s,s)}),o.setValue(this.plugin.settings.defaultTheme||"").onChange(async s=>{this.plugin.settings.defaultTheme=s,await this.plugin.saveSettings(),this.plugin.design.updateBodyClasses()})}),new po(e).setClass("stnd-advanced-setting").setName("Clear theme cache").setDesc("Forces the plugin to re-scan and reload all theme stylesheets defined in your vault.").addButton(o=>o.setButtonText("Clear Cache").onClick(async()=>{this.plugin.settings.themeCache={},await this.plugin.saveSettings(),await this.plugin.design.updateBodyClasses(),new jc("Theme cache cleared")})),new po(e).setClass("stnd-advanced-setting").setName("CSS Hooks Reference").setDesc(Wa("The plugin continuously reflects active workspace states (such as .stnd-adapter, .stnd-published) onto the workspace. \xA7",[{text:"Read CSS hooks documentation \u2192",href:en.cssHooks}])).addButton(o=>o.setButtonText("View CSS Hooks").onClick(()=>{window.open(en.cssHooks,"_blank")}))}};ki.exports={DesignSystemSettingTab:za}});var xi=j((ug,Ti)=>{"use strict";var{PluginSettingTab:Vc,requestUrl:Si,setIcon:Hc}=require("obsidian"),{isPublishIntent:Kc}=ie(),{GardenSettingTab:Gc}=bi(),{DesignSystemSettingTab:Wc}=vi(),Ja=class{constructor(e,t,n){this.app=e,this.plugin=t,this.rootTab=n}display(){let{containerEl:e}=this;e.empty();let t=this.plugin.settings.apiUsername;if(!t){this._renderDisconnected(e);return}e.createEl("h2",{text:"Compte"});let o=`${(this.plugin.settings.apiUrl||"https://standard.garden/api").replace(/\/api\/?$/,"")}/@${t}`,s=e.createEl("div");s.style.cssText="display:flex;align-items:center;gap:14px;padding:16px;background:var(--background-secondary);border:1px solid var(--background-modifier-border);border-radius:12px;margin-bottom:16px;";let r=s.createEl("div",{text:t.slice(0,2).toLowerCase()});r.style.cssText="width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;flex:0 0 auto;background:var(--background-primary);color:var(--interactive-accent);";let i=s.createEl("div");i.style.cssText="flex:1;min-width:0;";let l=i.createEl("div",{text:`@${t}`});l.style.cssText="font-weight:600;font-size:var(--font-ui-medium);";let c=i.createEl("a",{text:o.replace(/^https?:\/\//,""),href:o});c.setAttribute("target","_blank"),c.style.cssText="font-size:var(--font-ui-smaller);color:var(--text-accent);text-decoration:none;";let f=s.createEl("div");f.style.cssText="display:flex;gap:8px;flex:0 0 auto;";let d=f.createEl("button",{text:"Online"});d.classList.add("mod-cta"),d.onclick=()=>window.open(o,"_blank");let u=f.createEl("button",{text:"Sign out"});u.onclick=async()=>{this.plugin.settings.apiKey="",this.plugin.settings.apiUsername="",this.plugin.statsCache=null,await this.plugin.saveSettings(),this.rootTab?this.rootTab.display():this.display()};let m=(this.plugin.garden?.getPublishableFiles?this.plugin.garden.getPublishableFiles():this.app.vault.getMarkdownFiles()).filter(y=>Kc(this.app.metadataCache.getFileCache(y)?.frontmatter)).length,p=e.createEl("div",{cls:"stnd-account-stats-container"}),g=this.plugin.statsCache;g?(this._renderStatsValues(p,g,m),Si({url:`${this.plugin.settings.apiUrl}/me`,headers:{"x-api-key":this.plugin.settings.apiKey},throw:!1}).then(y=>{y.status>=200&&y.status<300&&(this.plugin.statsCache=y.json,this._updateStatsValues(p,y.json,m))}).catch(()=>{})):(p.createEl("span",{cls:"stnd-account-stats-loading",text:"Loading garden stats..."}),Si({url:`${this.plugin.settings.apiUrl}/me`,headers:{"x-api-key":this.plugin.settings.apiKey},throw:!1}).then(y=>{if(y.status<200||y.status>=300)throw new Error;return y.json}).then(y=>{this.plugin.statsCache=y,p.empty(),this._renderStatsValues(p,y,m)}).catch(()=>{p.empty(),p.createEl("span",{cls:"stnd-account-stats-loading",text:"Failed to load stats."})}))}_renderDisconnected(e){e.createEl("h2",{text:"Compte"});let t=e.createEl("div");t.style.cssText="text-align:center;padding:32px 20px;border:1px solid var(--background-modifier-border);border-radius:12px;margin-top:8px;";let n=t.createEl("div");n.style.cssText="background:var(--background-secondary);width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;background:var(--background-secondary);color:var(--interactive-accent);",Hc(n,"leaf");let o=t.createEl("div",{text:"Connect your vault to the web"});o.style.cssText="font-size:var(--font-ui-large);font-weight:600;margin-bottom:8px;";let s=t.createEl("div",{text:"Publish notes to your digital garden with a single status: public frontmatter property.",cls:"setting-item-description"});s.style.cssText="max-width:380px;margin:0 auto 20px;line-height:1.5;";let r=t.createEl("button",{text:"Connect to Garden"});r.classList.add("mod-cta"),r.onclick=()=>this.plugin.garden.startConnect()}_renderStatsValues(e,t,n){let o=e.createEl("div",{cls:"stnd-account-stat-col"});o.createEl("div",{cls:"stnd-account-stat-value stnd-stat-local",text:String(n)}),o.createEl("div",{cls:"stnd-account-stat-label",text:"Local"});let s=e.createEl("div",{cls:"stnd-account-stat-col"});s.createEl("div",{cls:"stnd-account-stat-value stnd-stat-published",text:String(t.notesCount??0)}),s.createEl("div",{cls:"stnd-account-stat-label",text:"Published"});let r=e.createEl("div",{cls:"stnd-account-stat-col"});r.createEl("div",{cls:"stnd-account-stat-value stnd-stat-views",text:String(t.totalViews??0)}),r.createEl("div",{cls:"stnd-account-stat-label",text:"Views"});let i=e.createEl("div",{cls:"stnd-account-stat-col"}),l="Never";t.lastSync&&(l=new Date(t.lastSync).toLocaleDateString()),i.createEl("div",{cls:"stnd-account-stat-value stnd-stat-sync",text:l}),i.createEl("div",{cls:"stnd-account-stat-label",text:"Last Sync"})}_updateStatsValues(e,t,n){let o=e.querySelector(".stnd-stat-local");o&&o.setText(String(n));let s=e.querySelector(".stnd-stat-published");s&&s.setText(String(t.notesCount??0));let r=e.querySelector(".stnd-stat-views");r&&r.setText(String(t.totalViews??0));let i=e.querySelector(".stnd-stat-sync");if(i){let l="Never";t.lastSync&&(l=new Date(t.lastSync).toLocaleDateString()),i.setText(l)}}},Xa=class extends Vc{constructor(e,t){super(e,t),this.plugin=t,this._cleanupAltListeners=null}hide(){super.hide(),this._cleanupAltListeners&&(this._cleanupAltListeners(),this._cleanupAltListeners=null)}display(){let{containerEl:e}=this;e.empty(),e.addClass("stnd-settings-flat"),this._cleanupAltListeners&&(this._cleanupAltListeners(),this._cleanupAltListeners=null);let t=u=>{(u.key==="Alt"||u.altKey)&&e.addClass("stnd-show-advanced")},n=u=>{(u.key==="Alt"||!u.altKey)&&e.removeClass("stnd-show-advanced")};window.addEventListener("keydown",t),window.addEventListener("keyup",n),this._cleanupAltListeners=()=>{window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)};let o=new Ja(this.app,this.plugin,this);o.containerEl=e.createDiv({cls:"stnd-settings-section"}),o.display();let s=new Gc(this.app,this.plugin);s.containerEl=e.createDiv({cls:"stnd-settings-section"}),s.display();let r=new Wc(this.app,this.plugin);r.containerEl=e.createDiv({cls:"stnd-settings-section"}),r.display();let{MyceliumSettingTab:i}=lo(),l=new i(this.app,this.plugin);l.containerEl=e.createDiv({cls:"stnd-settings-section"}),l.display();let f=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/.test(navigator.platform)?"\u2325 Option":"Alt";e.createDiv({cls:"stnd-alt-hint"}).createEl("span",{text:`Maintenez la touche ${f} pour r\xE9v\xE9ler les outils avanc\xE9s de maintenance.`})}};Ti.exports={StandardSettingTab:Xa}});var Ei=j((pg,Ni)=>{"use strict";var{SuggestModal:zc,Notice:Jc}=require("obsidian"),Xc=rn(),Za=class extends zc{constructor(e,t,n){super(e),this.plugin=t,this.activeFile=n,this.setPlaceholder("Select a theme for this note..."),this.themes=[{id:"",name:"Default (Inherit / Clear)",desc:"Clear theme property to use vault default"},...Object.keys(Xc).sort((o,s)=>o.localeCompare(s)).map(o=>({id:o,name:o.charAt(0).toUpperCase()+o.slice(1),desc:`Standard theme: ${o}`}))]}getSuggestions(e){let t=(e||"").toLowerCase().trim();return t?this.themes.filter(n=>n.name.toLowerCase().includes(t)||n.id.toLowerCase().includes(t)):this.themes}renderSuggestion(e,t){t.createEl("div",{text:e.name}),t.createEl("small",{text:e.desc,cls:"stnd-panel-meta",attr:{style:"color: var(--text-faint); font-size: 0.85em;"}})}async onChooseSuggestion(e){this.activeFile&&(await this.app.fileManager.processFrontMatter(this.activeFile,t=>{e.id?t.theme=e.id:delete t.theme}),new Jc(e.id?`Standard : Th\xE8me d\xE9fini sur "${e.name}".`:"Standard : Th\xE8me r\xE9initialis\xE9 sur la valeur par d\xE9faut."))}};Ni.exports={ThemeSuggestModal:Za}});Object.defineProperty(exports,"__esModule",{value:!0});var re=require("obsidian"),{DEFAULT_SETTINGS:Ci}=ie(),{parseFolderList:Zc,coveringFolder:Yc,addFolder:Qc,removeFolder:$c}=sn(),Ya=class extends re.Plugin{constructor(){super(...arguments),this.features=[]}async onload(){let e=performance.now();document.body.classList.add("stnd");let t=()=>{let s=document.body.classList.contains("theme-dark");document.body.setAttribute("data-theme",s?"dark":"light")};t(),this.themeObserver=new MutationObserver(s=>{for(let r of s)r.attributeName==="class"&&t()}),this.themeObserver.observe(document.body,{attributes:!0,attributeFilter:["class"]});let n=await this.loadData();this.isFirstInstall=n===null,this.settings=Object.assign({},Ci,n);let{DesignSystemFeature:o}=Ts();this.features=[],this.settings.enableDesignSystem&&(this.design=new o(this.app,this),this.features.push(this.design)),await Promise.all(this.features.map(s=>s.load())),this.design&&this.design.applyStartupSnapshotSynchronously(),this.app.workspace.onLayoutReady(()=>{this.loadRemainingFeatures(e)})}async loadRemainingFeatures(e){let{GardenFeature:t}=ei(),{PublishStatusFeature:n}=Yt(),{SyntaxPreviewFeature:o}=ci(),{MyceliumFeature:s}=lo(),{FeedFeature:r}=Ra();this.garden=new t(this.app,this),this.features.push(this.garden),this.registerObsidianProtocolHandler("standard-connect",h=>{this.garden.handleConnectCallback(h)});let i=[];this.publishStatus=new n(this.app,this),i.push(this.publishStatus),i.push(new r(this.app,this)),this.settings.enableSyntaxPreview!==!1&&i.push(new o(this.app,this)),this.mycelium=new s(this.app,this),i.push(this.mycelium),this.features.push(...i),await Promise.all(i.map(h=>h.load?h.load():Promise.resolve()));let{StandardGardenView:l,STND_PANEL_VIEW:c}=uo();this.registerView(c,h=>{let m=new l(h,this);return this.panel=m,m});let{StandardSettingTab:f}=xi();this.settingTab=new f(this.app,this),this.addSettingTab(this.settingTab),this.addRibbonIcon("flower","Standard Garden Panel",()=>{this.activatePanel()}),this.isFirstInstall&&!this.settings.panelOpenedOnInstall&&(this.activatePanel(),this.settings.panelOpenedOnInstall=!0,await this.saveSettings());let{STND_PANEL_VIEW:d}=uo();this.registerEvent(this.app.workspace.on("file-menu",(h,m)=>{if(!(m instanceof re.TFolder)||m.isRoot())return;let p=Yc(m.path,Zc(this.settings.excludedFolders)),g=p&&p.toLowerCase()===m.path.toLowerCase();p&&!g||(h.addSeparator(),h.addItem(y=>y.setTitle(g?"Garden: stop ignoring this folder":"Garden: ignore this folder").setIcon(g?"eye":"eye-off").onClick(async()=>{this.settings.excludedFolders=g?$c(this.settings.excludedFolders,m.path):Qc(this.settings.excludedFolders,m.path),await this.saveSettings(),this.publishStatus?.refreshAll?.(),window.stndRefreshMycelium?.(),new re.Notice(g?`Garden: "${m.path}" is no longer ignored.`:`Garden: "${m.path}" is now ignored.`)})))})),this.addCommand({id:"open-stnd-panel",name:"Open Garden panel",callback:()=>this.activatePanel(d)}),this.addCommand({id:"open-settings",name:"Open settings",callback:()=>{this.app.setting&&(this.app.setting.open(),this.app.setting.openTabById(this.manifest.id))}}),this.addCommand({id:"publish-current-note",name:"Plant seed (Publish current note)",callback:()=>this.garden.publishCurrentNote()}),this.addCommand({id:"unpublish-current-note",name:"Uproot seed (Remove from garden)",callback:()=>this.garden.unpublishCurrentNote()}),this.addCommand({id:"view-live-version",name:"View live version",callback:()=>this.garden.viewLiveVersion()}),this.addCommand({id:"copy-live-url",name:"Copy live URL to clipboard",callback:()=>this.garden.copyLiveUrl()}),this.addCommand({id:"copy-short-url",name:"Copy short URL (garden-short) to clipboard",callback:()=>this.garden.copyShortUrl()}),this.addCommand({id:"share-current-note",name:"Share note (Open share dialog)",callback:()=>this.garden.shareCurrentNote()}),this.addCommand({id:"check-note-status",name:"Check garden publication status",callback:async()=>{let h=this.app.workspace.getActiveFile();if(!h||h.extension!=="md"){new re.Notice("Standard : Ouvrez une note Markdown.");return}new re.Notice("Standard : V\xE9rification du statut en ligne...");let m=await this.garden.checkNoteStatus(h);m.status==="synced"?new re.Notice(`Standard : "${h.basename}" est \xE0 jour en ligne.`):m.status==="outdated"?new re.Notice(`Standard : Une version plus r\xE9cente de "${h.basename}" existe en ligne.`):m.status==="changed"?new re.Notice(`Standard : Modifications locales non publi\xE9es pour "${h.basename}".`):m.status==="unpublished"?new re.Notice(`Standard : "${h.basename}" n'est pas encore publi\xE9e en ligne.`):new re.Notice(`Standard : Impossible de v\xE9rifier le statut de "${h.basename}".`)}}),this.addCommand({id:"set-visibility-public",name:"Set visibility: Public",callback:()=>this.garden.setNoteVisibility("public")}),this.addCommand({id:"set-visibility-unlisted",name:"Set visibility: Unlisted",callback:()=>this.garden.setNoteVisibility("unlisted")}),this.addCommand({id:"set-visibility-private",name:"Set visibility: Private",callback:()=>this.garden.setNoteVisibility("private")}),this.addCommand({id:"cycle-visibility",name:"Cycle visibility (Public / Unlisted / Private)",callback:()=>this.garden.cycleNoteVisibility()}),this.addCommand({id:"sync-all-published",name:"Tend the garden (Sync all notes)",callback:()=>this.garden.syncAllPublished()}),this.addCommand({id:"download-new-notes",name:"Harvest seeds (Download new notes from garden)",callback:()=>this.garden.downloadNewOnlineNotes()}),this.addCommand({id:"clean-unpublished-notes",name:"Prune garden (Clean up unpublished notes)",callback:()=>this.garden.cleanUnpublishedNotes()}),this.addCommand({id:"ask-garden-ai",name:"Ask Hyphe",callback:()=>this.garden.askGardenAI()}),this.addCommand({id:"set-note-theme",name:"Set note theme",callback:()=>{let h=this.app.workspace.getActiveFile();if(!h||h.extension!=="md"){new re.Notice("Standard : Ouvrez une note Markdown pour d\xE9finir son th\xE8me.");return}let{ThemeSuggestModal:m}=Ei();new m(this.app,this,h).open()}}),this.addCommand({id:"reset-note-tokens",name:"Reset note styling (Clear design tokens)",callback:async()=>{let h=this.app.workspace.getActiveFile();if(!h||h.extension!=="md"){new re.Notice("Standard : Ouvrez une note Markdown.");return}let{KNOWN_TOKENS:m}=ie(),p=0;await this.app.fileManager.processFrontMatter(h,g=>{for(let y of Object.keys(g))!y.startsWith("garden-")&&!y.startsWith("garden_")&&(m.has(y)||y.startsWith("stnd-")||y.startsWith("stnd_"))&&(delete g[y],p++)}),new re.Notice(p>0?`Standard : ${p} token(s) de design r\xE9initialis\xE9(s).`:"Standard : Aucun token personnalis\xE9 sur cette note.")}});let u=performance.now();console.log(`[Standard] Fully loaded in ${Math.round(u-e)}ms (Visuals ready at ~150ms)`)}async onunload(){for(let e of this.features)e.unload&&await e.unload();this.themeObserver&&this.themeObserver.disconnect(),document.body.classList.remove("stnd")}async activatePanel(e){let{STND_PANEL_VIEW:t}=uo(),n=e||t,o=this.app.workspace.getLeavesOfType(n);if(o.length){this.app.workspace.revealLeaf(o[0]);return}let s=this.app.workspace.getRightLeaf(!1);await s.setViewState({type:n,active:!0}),this.app.workspace.revealLeaf(s)}updateRibbonIconsVisibility(){}async loadSettings(){let e=await this.loadData();this.settings=Object.assign({},Ci,e);let t=!1;this.settings.themeCache&&(delete this.settings.themeCache,t=!0),this.settings.snippets&&this.settings.snippets.globalCache&&(delete this.settings.snippets.globalCache,t=!0),t&&(console.log("[Standard] Purging heavy caches from data.json..."),await this.saveSettings())}async saveSettings(){await this.saveData(this.settings)}};module.exports=Ya;
