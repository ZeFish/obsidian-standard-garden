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

    // Titre de la modal
    contentEl.createEl("h2", {
      text: "✨ Ask Hyphe",
      cls: "stnd-modal-title",
    });

    contentEl.createEl("p", {
      text: "Ask Hyphe a question about your notes. Hyphe will search across your digital garden to answer.",
      cls: "stnd-modal-detail",
    });

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
    resultText.style.whiteSpace = "pre-wrap";
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

    askBtn.addEventListener("click", async () => {
      const question = textarea.value.trim();
      if (!question) {
        new obsidian_1.Notice("Please enter a question.");
        return;
      }

      // Désactiver le bouton et la saisie
      askBtn.disabled = true;
      textarea.disabled = true;
      askBtn.text = "Hyphe is searching...";
      
      // Afficher le statut de chargement
      resultContainer.style.display = "block";
      resultText.setText("Hyphe is searching your notes and generating an answer...");
      resultText.style.fontStyle = "italic";

      try {
        const apiKey = this.plugin.settings.apiKey;
        const response = await obsidian_1.requestUrl({
          url: `${this.plugin.settings.apiUrl}/ai/ask`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
          },
          body: JSON.stringify({ question }),
          throw: false,
        });

        if (response.status < 200 || response.status >= 300) {
          const errText = response.text;
          throw new Error(errText || `Server error (${response.status})`);
        }

        const data = response.json;
        resultText.style.fontStyle = "normal";
        if (data.answer) {
          resultText.setText(data.answer);
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
    });
  }

  onClose() {
    this.contentEl.empty();
  }
}

module.exports = { StndAskModal };
