"use strict";

const obsidian_1 = require("obsidian");
const { StandardDirectiveSuggest } = require("./suggest.js");
const { FeedCardRenderer } = require("../feed/index.js");

// ─── Video Helpers ───────────────────────────────────────────────
function extractYouTubeId(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (
      (u.hostname === "www.youtube.com" || u.hostname === "youtube.com") &&
      u.searchParams.has("v")
    )
      return u.searchParams.get("v");
    if (u.hostname === "youtu.be")
      return u.pathname.slice(1).split("/")[0] || null;
    if (
      (u.hostname === "www.youtube.com" || u.hostname === "youtube.com") &&
      u.pathname.startsWith("/embed/")
    )
      return u.pathname.split("/")[2] || null;
  } catch {}
  return null;
}

function extractVimeoId(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname === "vimeo.com" || u.hostname === "www.vimeo.com") {
      const segments = u.pathname.split("/").filter(Boolean);
      const last = segments[segments.length - 1];
      if (last && /^\d+$/.test(last)) return last;
    }
    if (u.hostname === "player.vimeo.com" && u.pathname.startsWith("/video/"))
      return u.pathname.split("/")[2] || null;
  } catch {}
  return null;
}

class SyntaxPreviewFeature {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
  }

  async load() {
    this.plugin.registerMarkdownPostProcessor((el, ctx) => {
      this.processSyntaxDirectives(el, ctx);
    });
    this.plugin.registerEditorSuggest(
      new StandardDirectiveSuggest(this.app, this.plugin),
    );
  }

  async unload() {}

  processSyntaxDirectives(el, ctx) {
    // 1. Process inline directives (that sit entirely inside a single <p> paragraph)
    const paragraphs = Array.from(el.querySelectorAll("p"));
    paragraphs.forEach((p) => {
      const text = p.textContent.trim();
      
      // Standalone spacing
      if (text.startsWith("::space")) {
        const size = text.substring(7).trim();
        const sizeMap = { small: "2", medium: "4", large: "6", xlarge: "8" };
        const spaceClass = `space-${sizeMap[size] || "4"}`;
        const spaceDiv = document.createElement("div");
        spaceDiv.className = spaceClass;
        p.replaceWith(spaceDiv);
        return;
      }

      // Standalone download button
      if (text.startsWith("::download")) {
        const label = text.substring(10).trim() || "Download";
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn note-download";
        btn.textContent = label;
        p.replaceWith(btn);
        return;
      }

      // Inline alerts
      const alertMatch = text.match(/^::(note|alert|warning|error|success|muted|subtle)\s+([\s\S]+)$/i);
      if (alertMatch) {
        const type = alertMatch[1].toLowerCase();
        const content = alertMatch[2].trim();
        
        let newEl;
        if (type === "note") {
          newEl = document.createElement("aside");
          newEl.className = "note";
          newEl.textContent = content;
        } else if (["alert", "warning", "error", "success"].includes(type)) {
          newEl = document.createElement("div");
          newEl.className = `alert ${type === "alert" ? "" : type}`;
          newEl.textContent = content;
        } else if (["muted", "subtle"].includes(type)) {
          newEl = document.createElement("p");
          newEl.className = type;
          newEl.textContent = content;
        }
        
        if (newEl) {
          p.replaceWith(newEl);
          return;
        }
      }

      // Standalone video embed
      const videoMatch = text.match(/^::video\s+([^\n]+)/i);
      if (videoMatch) {
        const url = videoMatch[1].trim();
        const videoEl = this.renderVideoEmbed(url);
        if (videoEl) {
          p.replaceWith(videoEl);
          return;
        }
      }

      // Dynamic feeds and lists of notes
      const feedMatch = text.match(/^::(feed|list)(?:\s+([^\n]+))?$/i);
      if (feedMatch) {
        const type = feedMatch[1].toLowerCase();
        const tag = (feedMatch[2] || "").trim();
        const container = document.createElement("div");
        container.className = `dynamic-feed-container feed-type-${type}`;

        this.renderFeedOrList(container, type, tag, ctx);
        p.replaceWith(container);
        return;
      }
    });

    // 2. Process block directives (which span multiple sibling nodes inside the 'el' container)
    const children = Array.from(el.children);
    let i = 0;
    while (i < children.length) {
      const child = children[i];
      if (child.tagName === "P") {
        const text = child.textContent.trim();
        const blockMatch = text.match(/^::(callout|toggle|cards|hero-block|small|accent|feature-block|center|grid|split|columns|card|image|gallery|button|form|hero|full|feature|editorial|excerpt)\s*(.*)$/i);
        
        if (blockMatch) {
          const type = blockMatch[1].toLowerCase();
          const args = blockMatch[2].trim();
          
          // Look for matching ::end paragraph among subsequent siblings
          let endIdx = -1;
          for (let j = i + 1; j < children.length; j++) {
            if (children[j].tagName === "P" && children[j].textContent.trim() === "::end") {
              endIdx = j;
              break;
            }
          }
          
          if (endIdx !== -1) {
            // Gather block inner elements
            const innerElements = children.slice(i + 1, endIdx);
            
            // Build the block container
            const blockEl = this.renderBlockContainer(type, args, innerElements);
            
            if (blockEl) {
              // Replace the starting paragraph with our newly built block container
              child.replaceWith(blockEl);
              
              // Remove inner elements and the ::end paragraph from DOM
              for (const inner of innerElements) {
                inner.remove();
              }
              children[endIdx].remove();
              
              // Update children array and advance list index
              children.splice(i + 1, endIdx - i);
            }
          } else {
            // No ::end found, check if it's a Smart Paragraph pattern
            const smartTypes = ["hero", "full", "feature", "editorial", "excerpt", "card"];
            if (smartTypes.includes(type)) {
              const nextChild = children[i + 1];
              if (nextChild) {
                const wrapper = document.createElement("div");
                wrapper.className = type;
                
                // Move children of next paragraph to the wrapper container
                while (nextChild.firstChild) {
                  wrapper.appendChild(nextChild.firstChild);
                }
                
                nextChild.replaceWith(wrapper);
                child.remove();
                
                // Update children list and keep index without incrementing
                children.splice(i, 1);
                continue;
              }
            }
          }
        }
      }
      i++;
    }
  }

  renderFeedOrList(container, type, tag, ctx = null) {
    FeedCardRenderer.renderFeedOrList(this.app, container, type, tag, this.plugin, ctx);
  }

  splitInnerElements(elements) {
    const groups = [];
    let currentGroup = [];
    for (const el of elements) {
      if (el.tagName === "HR") {
        if (currentGroup.length > 0) {
          groups.push(currentGroup);
          currentGroup = [];
        }
      } else {
        currentGroup.push(el);
      }
    }
    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }
    return groups;
  }

  renderVideoEmbed(url) {
    if (!url) return null;
    const container = document.createElement("div");
    container.className = "video-container";
    container.style.cssText = "position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1.5rem 0;";

    const ytId = extractYouTubeId(url);
    if (ytId) {
      const iframe = container.createEl("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${ytId}`;
      iframe.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;";
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", "true");
      return container;
    }

    const vId = extractVimeoId(url);
    if (vId) {
      const iframe = container.createEl("iframe");
      iframe.src = `https://player.vimeo.com/video/${vId}`;
      iframe.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;";
      iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
      iframe.setAttribute("allowfullscreen", "true");
      return container;
    }

    const videoWrapper = document.createElement("div");
    videoWrapper.className = "video-container native-video";
    videoWrapper.style.margin = "1.5rem 0";
    const video = videoWrapper.createEl("video");
    video.src = url;
    video.setAttribute("controls", "true");
    video.setAttribute("preload", "metadata");
    video.style.cssText = "width: 100%; max-height: 500px; border-radius: var(--radius-m);";
    return videoWrapper;
  }

  renderBlockContainer(type, args, innerElements) {
    let blockEl;
    
    if (type === "callout") {
      const argsMatch = args.match(/^([+-])?\s*(.+)$/);
      const fold = argsMatch ? argsMatch[1] : null;
      const header = argsMatch ? argsMatch[2] : args || "Note";
      
      const isCollapsible = fold === "+" || fold === "-";
      const isOpen = fold === "+";
      const typeNormalized = header.toLowerCase();
      const titleText = header.charAt(0).toUpperCase() + header.slice(1);
      
      const icons = {
        note: "📝", tip: "💡", info: "ℹ️", warning: "⚠️", danger: "⚡",
        success: "✅", question: "❓", quote: "💬", abstract: "📋",
        bug: "🐛", example: "📄", failure: "❌", todo: "☑️"
      };
      const icon = icons[typeNormalized] || icons.note;

      if (isCollapsible) {
        blockEl = document.createElement("details");
        blockEl.className = "callout";
        blockEl.setAttribute("data-callout", typeNormalized);
        if (isOpen) blockEl.setAttribute("open", "");
        
        const summary = blockEl.createEl("summary", { cls: "callout-title" });
        summary.createEl("span", { text: icon, cls: "callout-icon" });
        summary.createEl("span", { text: titleText, cls: "callout-title-inner" });
        
        const contentDiv = blockEl.createDiv({ cls: "callout-content" });
        innerElements.forEach(el => contentDiv.appendChild(el.cloneNode(true)));
      } else {
        blockEl = document.createElement("div");
        blockEl.className = "callout";
        blockEl.setAttribute("data-callout", typeNormalized);
        
        const titleDiv = blockEl.createDiv({ cls: "callout-title" });
        titleDiv.createEl("span", { text: icon, cls: "callout-icon" });
        titleDiv.createEl("span", { text: titleText, cls: "callout-title-inner" });
        
        const contentDiv = blockEl.createDiv({ cls: "callout-content" });
        innerElements.forEach(el => contentDiv.appendChild(el.cloneNode(true)));
      }
    } else if (type === "toggle") {
      blockEl = document.createElement("details");
      blockEl.className = "toggle-block";
      const summary = blockEl.createEl("summary", { text: args || "Details" });
      const contentDiv = blockEl.createDiv({ cls: "toggle-content" });
      innerElements.forEach(el => contentDiv.appendChild(el.cloneNode(true)));
    } else if (type === "columns") {
      const cols = args || "2";
      const groups = this.splitInnerElements(innerElements);
      blockEl = document.createElement("div");
      blockEl.className = `columns-${cols}`;
      blockEl.style.cssText = `display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: 1.5rem; margin: 1.5rem 0;`;
      groups.forEach(group => {
        const col = blockEl.createDiv({ cls: "column" });
        group.forEach(el => col.appendChild(el.cloneNode(true)));
      });
    } else if (type === "grid" || type === "cards") {
      const groups = this.splitInnerElements(innerElements);
      const count = groups.length;
      blockEl = document.createElement("div");
      blockEl.className = type === "cards" ? `grid-${count}` : `grid-${count}`;
      blockEl.style.cssText = `display: grid; grid-template-columns: repeat(${count}, 1fr); gap: 1.5rem; margin: 1.5rem 0;`;
      groups.forEach(group => {
        const cell = blockEl.createDiv({ cls: type === "cards" ? "sm:row card" : "sm:row" });
        if (type === "cards") {
          cell.style.cssText = "border: 1px solid var(--background-modifier-border); padding: 1rem; border-radius: var(--radius-m); background: var(--background-primary);";
        }
        group.forEach(el => cell.appendChild(el.cloneNode(true)));
      });
    } else if (type === "split") {
      const sizes = args.split("/").map(n => parseInt(n, 10)).filter(n => !isNaN(n) && n > 0);
      const groups = this.splitInnerElements(innerElements);
      blockEl = document.createElement("div");
      blockEl.className = "grid";
      blockEl.style.cssText = "display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.5rem; margin: 1.5rem 0;";
      groups.forEach((group, i) => {
        const span = sizes[i] || Math.max(1, Math.floor(12 / groups.length));
        const cell = blockEl.createDiv({ cls: `sm:row col-${span}` });
        cell.style.gridColumn = `span ${span}`;
        group.forEach(el => cell.appendChild(el.cloneNode(true)));
      });
    } else if (type === "gallery") {
      const groups = this.splitInnerElements(innerElements);
      const count = groups.length;
      const colSpan = Math.max(1, Math.floor(12 / count));
      blockEl = document.createElement("div");
      blockEl.className = "gallery grid gap-4";
      blockEl.style.cssText = "display: grid; grid-template-columns: repeat(12, 1fr); gap: 1rem; margin: 1.5rem 0;";
      groups.forEach(group => {
        const col = blockEl.createDiv({ cls: `col-12 md:col-${colSpan}` });
        col.style.gridColumn = `span ${colSpan}`;
        group.forEach(el => col.appendChild(el.cloneNode(true)));
      });
    } else if (type === "image") {
      const variant = args || "";
      blockEl = document.createElement("figure");
      blockEl.className = `image-${variant}`;
      let imgUrl = "";
      let captionText = "";
      innerElements.forEach(el => {
        const img = el.querySelector("img");
        if (img) {
          imgUrl = img.src;
        } else if (el.tagName === "IMG") {
          imgUrl = el.src;
        } else {
          captionText += (captionText ? "\n" : "") + el.textContent.trim();
        }
      });
      if (!imgUrl && innerElements.length > 0) {
        imgUrl = innerElements[0].textContent.trim();
        captionText = innerElements.slice(1).map(el => el.textContent.trim()).join("\n");
      }
      
      const img = blockEl.createEl("img");
      img.src = imgUrl;
      img.alt = captionText;
      if (captionText) {
        blockEl.createEl("figcaption", { text: captionText });
      }
    } else if (type === "button") {
      const variant = args || "";
      const firstLink = innerElements.find(el => el.tagName === "A") || 
                        innerElements.reduce((found, el) => found || el.querySelector("a"), null);
      if (firstLink) {
        blockEl = firstLink.cloneNode(true);
        blockEl.className = variant ? `button button-${variant}` : "button";
        blockEl.style.cssText = "display: inline-block; padding: 0.5rem 1rem; border-radius: var(--radius-m); background: var(--interactive-accent); color: var(--text-on-accent); text-decoration: none; font-weight: bold;";
      } else {
        blockEl = document.createElement("div");
        blockEl.className = "button-wrapper";
        innerElements.forEach(el => blockEl.appendChild(el.cloneNode(true)));
      }
    } else if (type === "form") {
      blockEl = document.createElement("form");
      blockEl.className = `form form-${args || "contact"}`;
      blockEl.style.cssText = "display: flex; flex-direction: column; gap: 1rem; border: 1px solid var(--background-modifier-border); padding: 1.5rem; border-radius: var(--radius-m); background: var(--background-primary); max-width: 500px; margin: 1.5rem 0;";
      
      const fieldNames = innerElements.map(el => el.textContent.trim()).filter(Boolean);
      const finalFields = [];
      fieldNames.forEach(text => {
        text.split(/\n/).forEach(t => {
          const trimmed = t.trim();
          if (trimmed) finalFields.push(trimmed);
        });
      });
      
      finalFields.forEach(field => {
        const fieldName = field.toLowerCase();
        const fieldType = fieldName === "email" ? "email" : (fieldName === "message" ? "textarea" : "text");
        const fieldDiv = blockEl.createDiv({ cls: "form-field" });
        fieldDiv.style.cssText = "display: flex; flex-direction: column; gap: 0.25rem;";
        const label = fieldDiv.createEl("label", { text: field });
        label.setAttribute("for", fieldName);
        label.style.fontWeight = "bold";
        label.style.fontSize = "var(--font-ui-small)";
        
        if (fieldType === "textarea") {
          const textarea = fieldDiv.createEl("textarea", { id: fieldName });
          textarea.style.cssText = "resize: vertical; min-height: 100px; padding: 0.5rem; border: 1px solid var(--background-modifier-border); border-radius: var(--radius-s); background: var(--background-secondary); color: var(--text-normal);";
        } else {
          const input = fieldDiv.createEl("input", { type: fieldType, id: fieldName });
          input.style.cssText = "padding: 0.5rem; border: 1px solid var(--background-modifier-border); border-radius: var(--radius-s); background: var(--background-secondary); color: var(--text-normal);";
        }
      });
      
      const submitBtn = blockEl.createEl("button", { text: "Send", type: "submit", cls: "button button-primary" });
      submitBtn.style.cssText = "align-self: flex-start; padding: 0.5rem 1rem; border-radius: var(--radius-s); background: var(--interactive-accent); color: var(--text-on-accent); border: none; font-weight: bold; cursor: pointer;";
    } else if (type === "card" || type === "small" || type === "accent" || type === "center") {
      blockEl = document.createElement("div");
      blockEl.className = type === "card" ? "card" : `container-${type}`;
      innerElements.forEach(el => blockEl.appendChild(el.cloneNode(true)));
    } else if (type === "hero-block" || type === "feature-block") {
      blockEl = document.createElement("div");
      const baseClass = type === "hero-block" ? "container-hero" : "container-feature";
      const alignClass = args ? `text-${args}` : "";
      blockEl.className = `${baseClass} ${alignClass}`.trim();
      innerElements.forEach(el => blockEl.appendChild(el.cloneNode(true)));
    } else {
      blockEl = document.createElement("div");
      blockEl.className = `stnd-syntax-block block-type-${type}`;
      innerElements.forEach(el => blockEl.appendChild(el.cloneNode(true)));
    }
    
    return blockEl;
  }
}

module.exports = { SyntaxPreviewFeature };
