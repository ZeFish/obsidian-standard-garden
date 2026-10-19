"use strict";

/**
 * Standard Slides Feature (inspired by iA Presenter)
 *
 * Automatically organizes Markdown slide presentations:
 * - Smart Split Layout: Places text and images side-by-side (2 columns).
 * - Multi-Image Grids: Arranges 2, 3, or 4 images in comparison columns or grids.
 * - Hero Slide: Centers solo images in maximum crispness without overflow.
 * - Cover Slide: Editorial keynote presentation styling for title slides.
 * - Auto-Fit Zoom: Zero-flicker proportional scaling when slide text is extra long.
 */
class SlidesFeature {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
    this.revealContainer = null;
    this.mutationObserver = null;
    this.isSlidesOpen = false;
    this.lastActiveFile = null;

    this.resizeHandler = () => this.fitAllSlides();
    this.slideChangedHandler = (evt) => {
      const currentSlide = evt?.currentSlide || this.getCurrentSlide();
      if (currentSlide) {
        this.layoutSlide(currentSlide);
        this.fitSlide(currentSlide);
      }
    };
  }

  async load() {
    this.plugin.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        const file = leaf?.view?.file || this.app.workspace.getActiveFile();
        if (file) {
          this.lastActiveFile = file;
        }
      })
    );
    this.lastActiveFile = this.app.workspace.getActiveFile();

    this.setupObserver();
  }

  async unload() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
    this.onExitSlides();
  }

  setupObserver() {
    this.mutationObserver = new MutationObserver(() => {
      this.checkSlidesMode();
    });
    this.mutationObserver.observe(document.body, { childList: true, subtree: true });
    this.checkSlidesMode();
  }

  checkSlidesMode() {
    const reveal = document.querySelector(".reveal");
    if (reveal && !this.isSlidesOpen) {
      this.onEnterSlides(reveal);
    } else if (!reveal && this.isSlidesOpen) {
      this.onExitSlides();
    }
  }

  onEnterSlides(reveal) {
    this.isSlidesOpen = true;
    this.revealContainer = reveal;
    document.body.classList.add("stnd-slides-active");

    // Ensure active note theme tokens are applied
    this.ensureThemeActive();

    // Listen to Reveal events
    reveal.addEventListener("slidechanged", this.slideChangedHandler);
    reveal.addEventListener("ready", () => this.applyLayoutsAndFit());
    window.addEventListener("resize", this.resizeHandler);

    // Watch for class changes when active slide changes
    this.slidesObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "class") {
          const target = m.target;
          if (target && target.tagName === "SECTION" && target.classList.contains("present")) {
            this.layoutSlide(target);
            this.fitSlide(target);
          }
        }
      }
    });
    const slidesEl = reveal.querySelector(".slides");
    if (slidesEl) {
      this.slidesObserver.observe(slidesEl, { attributes: true, subtree: true, attributeFilter: ["class"] });
    }

    // Initial pass: layout all slides and fit
    window.requestAnimationFrame(() => {
      this.applyLayoutsAndFit();
    });
  }

  onExitSlides() {
    if (this.slidesObserver) {
      this.slidesObserver.disconnect();
      this.slidesObserver = null;
    }
    if (this.revealContainer) {
      this.revealContainer.removeEventListener("slidechanged", this.slideChangedHandler);
      const sections = this.revealContainer.querySelectorAll(".slides section");
      sections.forEach((s) => {
        s.style.zoom = "";
        s.style.width = "";
      });
      this.revealContainer = null;
    }
    window.removeEventListener("resize", this.resizeHandler);
    document.body.classList.remove("stnd-slides-active");
    this.isSlidesOpen = false;
  }

  ensureThemeActive() {
    const activeFile = this.app.workspace.getActiveFile() || this.lastActiveFile;
    if (activeFile && this.plugin.design) {
      const cache = this.app.metadataCache.getFileCache(activeFile);
      if (cache?.frontmatter) {
        this.plugin.design.applyTheme(cache.frontmatter);
        this.plugin.design.applyFrontmatter(cache.frontmatter);
      }
    }
  }

  getCurrentSlide() {
    if (!this.revealContainer) return null;
    const current =
      this.revealContainer.querySelector(".slides > section.present") ||
      this.revealContainer.querySelector(".slides > section");
    if (!current) return null;
    const vertical = current.querySelector("section.present");
    return vertical || current;
  }

  applyLayoutsAndFit() {
    if (!this.revealContainer) return;

    const allSlides = Array.from(
      this.revealContainer.querySelectorAll(".slides section")
    ).filter((s) => s.querySelectorAll("section").length === 0);

    for (const slide of allSlides) {
      this.layoutSlide(slide);
    }

    this.fitAllSlides();
  }

  /**
   * Intelligently arranges slide elements inspired by iA Presenter:
   * - Side-by-side (Split) when text and images share a slide.
   * - Responsive grids for 2, 3, or 4 images.
   * - Hero slide when an image stands alone.
   * - Cover slide when only title elements are present.
   */
  layoutSlide(slide) {
    if (!slide || slide.dataset.stndLayoutApplied) return;

    slide.classList.remove("stnd-layout-cover", "stnd-layout-gallery", "stnd-layout-gallery-2", "stnd-layout-gallery-3", "stnd-layout-gallery-4", "stnd-layout-split", "stnd-layout-hero");

    const imgs = Array.from(slide.querySelectorAll("img"));

    // Case 0: No images -> Check for cover slide
    if (imgs.length === 0) {
      const hasH1 = slide.querySelector("h1");
      const hasContent = slide.querySelector("ul, ol, table, pre:not(.frontmatter)");
      if (hasH1 && !hasContent) {
        slide.classList.add("stnd-layout-cover");
      }
      slide.dataset.stndLayoutApplied = "true";
      return;
    }

    // Find top-level media wrappers directly under slide
    const mediaElements = [];
    imgs.forEach((img) => {
      let top = img;
      while (top.parentElement && top.parentElement !== slide) {
        top = top.parentElement;
      }
      if (!mediaElements.includes(top)) {
        mediaElements.push(top);
      }
    });

    const nonMedia = Array.from(slide.children).filter(
      (child) => !mediaElements.includes(child) && !child.matches("pre.frontmatter")
    );

    const hasText = nonMedia.some((el) => {
      return el.matches("h1, h2, h3, h4, h5, h6, p, ul, ol, blockquote, .callout, table, pre:not(.frontmatter)");
    });

    // Case 1: Multiple images without rich text -> Comparison Gallery / Grid
    if (mediaElements.length >= 2 && !slide.querySelector("ul, ol, table, pre:not(.frontmatter), blockquote")) {
      const count = Math.min(mediaElements.length, 4);
      slide.classList.add("stnd-layout-gallery", `stnd-layout-gallery-${count}`);

      const grid = document.createElement("div");
      grid.className = `stnd-images-grid stnd-images-grid-${count}`;

      mediaElements.forEach((m) => grid.appendChild(m));
      slide.appendChild(grid);
      slide.dataset.stndLayoutApplied = "true";
      return;
    }

    // Case 2: Text + Image(s) -> Smart Split Layout (iA Presenter style!)
    if (hasText && mediaElements.length > 0) {
      slide.classList.add("stnd-layout-split");

      const splitContainer = document.createElement("div");
      splitContainer.className = "stnd-slide-split";

      const textCol = document.createElement("div");
      textCol.className = "stnd-slide-text";

      const mediaCol = document.createElement("div");
      mediaCol.className = "stnd-slide-media";

      // Keep primary heading at the slide root level so it spans 100% width across the top
      const firstHeading = nonMedia.find((el) => el.matches("h1, h2, h3"));
      const bodyElements = nonMedia.filter((el) => el !== firstHeading);

      bodyElements.forEach((el) => textCol.appendChild(el));
      mediaElements.forEach((m) => mediaCol.appendChild(m));

      splitContainer.appendChild(textCol);
      splitContainer.appendChild(mediaCol);

      if (firstHeading) {
        slide.appendChild(firstHeading);
      }
      slide.appendChild(splitContainer);
      slide.dataset.stndLayoutApplied = "true";
      return;
    }

    // Case 3: Solo image without body text -> Hero slide
    if (mediaElements.length === 1 && !hasText) {
      slide.classList.add("stnd-layout-hero");
      slide.dataset.stndLayoutApplied = "true";
      return;
    }

    slide.dataset.stndLayoutApplied = "true";
  }

  fitAllSlides() {
    if (!this.revealContainer) return;
    const allSlides = Array.from(
      this.revealContainer.querySelectorAll(".slides section")
    ).filter((s) => s.querySelectorAll("section").length === 0);

    for (const slide of allSlides) {
      this.fitSlide(slide);
    }
  }

  fitSlide(slide) {
    if (!slide || !slide.isConnected) return;
    // Reveal handles responsive scaling natively. CSS zoom inside 3D transforms
    // causes rasterization bugs in Electron/Chromium, so we ensure it remains clear.
    slide.style.zoom = "";
    slide.style.width = "";
  }
}

module.exports = { SlidesFeature };
