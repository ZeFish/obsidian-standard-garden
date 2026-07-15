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
      text: "Questionner le Jardin",
      cls: "stnd-modal-title",
    });

    contentEl.createEl("p", {
      text: "Posez une question sur le contenu de vos notes. L'IA de votre jardin va analyser vos notes pour y répondre.",
      cls: "stnd-modal-detail",
    });

    // Zone de texte pour la question
    const textarea = contentEl.createEl("textarea", {
      cls: "stnd-modal-textarea",
      placeholder: "Ex: Qu'est-ce que j'ai appris sur la permaculture dernièrement ?",
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
      text: "Fermer",
      cls: "stnd-modal-btn-cancel",
    });
    cancelBtn.addEventListener("click", () => {
      this.close();
    });

    const askBtn = btns.createEl("button", {
      text: "Poser la question",
      cls: "mod-cta",
    });

    askBtn.addEventListener("click", async () => {
      const question = textarea.value.trim();
      if (!question) {
        new obsidian_1.Notice("Veuillez saisir une question.");
        return;
      }

      // Désactiver le bouton et la saisie
      askBtn.disabled = true;
      textarea.disabled = true;
      askBtn.text = "Recherche en cours...";
      
      // Afficher le statut de chargement
      resultContainer.style.display = "block";
      resultText.setText("Recherche dans vos notes et génération de la réponse par le jardin...");
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
          throw new Error(errText || `Erreur serveur (${response.status})`);
        }

        const data = response.json;
        resultText.style.fontStyle = "normal";
        if (data.answer) {
          resultText.setText(data.answer);
        } else {
          resultText.setText("Aucune réponse n'a été retournée par le service d'IA.");
        }
      } catch (err) {
        resultText.style.fontStyle = "normal";
        resultText.setText(`Erreur : ${err.message}`);
        console.error("Erreur lors de la requête RAG :", err);
      } finally {
        askBtn.disabled = false;
        textarea.disabled = false;
        askBtn.text = "Poser la question";
      }
    });
  }

  onClose() {
    this.contentEl.empty();
  }
}

module.exports = { StndAskModal };
