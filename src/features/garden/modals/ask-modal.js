"use strict";

const obsidian_1 = require("obsidian");

class StndAskModal extends obsidian_1.Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("stnd-modal");
    contentEl.addClass("stnd-ask-modal");

    // Titre de la modal
    contentEl.createEl("h2", {
      text: "✨ Ask Hyphe",
      cls: "stnd-modal-title",
    });

    contentEl.createEl("p", {
      text: "Ask Hyphe a question about your digital garden. Hyphe runs in the cloud on standard.garden and searches only across your published notes.",
      cls: "stnd-modal-detail",
    });

    const privacyNotice = contentEl.createEl("div", {
      cls: "stnd-ask-cloud-notice",
    });
    privacyNotice.setText("🌐 Online AI · Only searches notes published to standard.garden. Local drafts remain strictly private.");
    privacyNotice.style.fontSize = "11px";
    privacyNotice.style.color = "var(--text-muted)";
    privacyNotice.style.marginBottom = "14px";
    privacyNotice.style.display = "inline-flex";
    privacyNotice.style.alignItems = "center";
    privacyNotice.style.gap = "6px";
    privacyNotice.style.padding = "4px 8px";
    privacyNotice.style.borderRadius = "4px";
    privacyNotice.style.background = "var(--background-secondary)";
    privacyNotice.style.border = "1px solid var(--background-modifier-border)";

    // Zone de texte pour la question
    const textarea = contentEl.createEl("textarea", {
      cls: "stnd-modal-textarea",
      placeholder: "e.g., What did I learn about permaculture recently?",
    });
    textarea.style.width = "100%";
    textarea.style.height = "100px";
    textarea.style.marginBottom = "15px";
    textarea.style.padding = "10px";
    textarea.style.borderRadius = "4px";
    textarea.style.border = "1px solid var(--background-modifier-border)";
    textarea.style.background = "var(--background-primary)";
    textarea.style.color = "var(--text-normal)";

    // Zone d'affichage du résultat
    const resultContainer = contentEl.createEl("div", {
      cls: "stnd-modal-result-container",
    });
    resultContainer.style.display = "none";
    resultContainer.style.marginTop = "15px";
    resultContainer.style.padding = "15px";
    resultContainer.style.borderRadius = "4px";
    resultContainer.style.background = "var(--background-secondary)";
    resultContainer.style.borderLeft = "4px solid var(--interactive-accent)";
    resultContainer.style.maxHeight = "300px";
    resultContainer.style.overflowY = "auto";

    const resultText = resultContainer.createEl("div", {
      cls: "stnd-modal-result-text",
    });
    resultText.style.lineHeight = "1.5";
    resultText.style.color = "var(--text-normal)";

    // Conteneur de boutons
    const btns = contentEl.createEl("div", { cls: "stnd-modal-btns" });

    const cancelBtn = btns.createEl("button", {
      text: "Close",
      cls: "stnd-modal-btn-cancel",
    });
    cancelBtn.addEventListener("click", () => {
      this.close();
    });

    const askBtn = btns.createEl("button", {
      text: "Ask Hyphe",
      cls: "mod-cta",
    });

    // Horizon d'herbes ondulantes (Le jardin sous la surface)
    const horizon = contentEl.createEl("div", { cls: "stnd-ask-horizon" });
    horizon.setAttribute("aria-hidden", "true");
    horizon.innerHTML = `
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
    `;

    const executeQuery = async (question, scope = "garden") => {
      const apiKey = this.plugin.settings.apiKey;
      if (!apiKey) {
        new obsidian_1.Notice("Please connect your standard.garden account in Settings first.");
        resultContainer.style.display = "block";
        resultText.empty();
        resultText.style.fontStyle = "normal";
        resultText.setText("Please connect your standard.garden account in Settings first to query Hyphe.");
        return;
      }

      // Nettoyer les éventuels boutons/invitations précédents
      resultContainer.querySelectorAll(".stnd-modal-mycelium-prompt").forEach((el) => el.remove());

      // Désactiver le bouton et la saisie
      askBtn.disabled = true;
      textarea.disabled = true;
      askBtn.text = scope === "mycelium" ? "Searching Mycelium..." : "Hyphe is searching...";

      // Afficher le statut de chargement
      resultContainer.style.display = "block";
      resultText.empty();
      resultText.setText(
        scope === "mycelium"
          ? "Hyphe is exploring the public Mycelium and weaving an answer..."
          : "Hyphe is searching your published notes and generating an answer..."
      );
      resultText.style.fontStyle = "italic";

      try {
        const response = await obsidian_1.requestUrl({
          url: `${this.plugin.settings.apiUrl}/ai/ask`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
          },
          body: JSON.stringify({ question, scope }),
          throw: false,
        });

        if (response.status < 200 || response.status >= 300) {
          let errText = response.text;
          try {
            const parsed = JSON.parse(response.text || "{}");
            if (parsed.error) errText = parsed.error;
          } catch {}
          throw new Error(errText || `Server error (${response.status})`);
        }

        const data = response.json;
        resultText.style.fontStyle = "normal";
        if (data.answer) {
          resultText.empty();
          await obsidian_1.MarkdownRenderer.renderMarkdown(
            data.answer,
            resultText,
            "",
            this,
          );
          // Intercepter les clics sur les liens markdown internes
          resultText.querySelectorAll("a").forEach((a) => {
            a.addEventListener("click", (evt) => {
              const href = a.getAttribute("href");
              if (!href) return;
              if (href.startsWith("/")) {
                evt.preventDefault();
                const slug = href.replace(/^\/+|\/+$/g, "");
                const localFile =
                  this.plugin.garden?.bySlug?.get(slug) ||
                  this.plugin.garden?.byTitleSlug?.get(slug) ||
                  this.plugin.garden?.byBasenameSlug?.get(slug);
                if (localFile) {
                  this.app.workspace.getLeaf(false).openFile(localFile);
                  this.close();
                } else if (this.plugin.settings.apiUsername) {
                  window.open(`https://standard.garden${href}`, "_blank");
                }
              }
            });
          });

          // Si des notes publiques connexes existent dans le Mycélium, proposer d'explorer
          if (data.mycelium_hints?.count > 0 && data.scope !== "mycelium") {
            const count = data.mycelium_hints.count;
            const authors = data.mycelium_hints.authors?.length
              ? ` (${data.mycelium_hints.authors.join(", ")})`
              : "";

            const hintBox = resultContainer.createEl("div", {
              cls: "stnd-modal-mycelium-prompt",
            });
            hintBox.style.marginTop = "14px";
            hintBox.style.paddingTop = "10px";
            hintBox.style.borderTop = "1px dashed var(--background-modifier-border)";
            hintBox.style.display = "flex";
            hintBox.style.alignItems = "center";
            hintBox.style.justifyContent = "space-between";
            hintBox.style.gap = "8px";

            const label = hintBox.createEl("span", {
              text: `🍄 Le Mycélium public a ${count} note${count > 1 ? "s" : ""} connexe${count > 1 ? "s" : ""}${authors}`,
            });
            label.style.fontSize = "11px";
            label.style.color = "var(--text-muted)";

            const exploreBtn = hintBox.createEl("button", {
              cls: "mod-cta",
              text: "Explorer le Mycélium →",
            });
            exploreBtn.style.fontSize = "11px";
            exploreBtn.style.padding = "3px 8px";
            exploreBtn.style.cursor = "pointer";

            exploreBtn.addEventListener("click", () => {
              executeQuery(question, "mycelium");
            });
          }
        } else {
          resultText.setText("No response was returned by Hyphe.");
        }
      } catch (err) {
        resultText.style.fontStyle = "normal";
        resultText.setText(`Error: ${err.message}`);
        console.error("Error during Hyphe query:", err);
      } finally {
        askBtn.disabled = false;
        textarea.disabled = false;
        askBtn.text = "Ask Hyphe";
      }
    };

    askBtn.addEventListener("click", () => {
      const question = textarea.value.trim();
      if (!question) {
        new obsidian_1.Notice("Please enter a question.");
        return;
      }
      executeQuery(question, "garden");
    });
  }

  onClose() {
    this.contentEl.empty();
  }
}

module.exports = { StndAskModal };
