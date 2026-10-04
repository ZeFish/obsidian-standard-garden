"use strict";

const obsidian_1 = require("obsidian");

/**
 * A fallback for the connection hand-off. The connect page normally calls the
 * plugin back through an `obsidian://` link, but on a phone Obsidian is often
 * restarted while the browser is open, and a link that arrives before plugins
 * have loaded is dropped ("Unrecognized URI action"). The page then offers a
 * connection code to copy; this modal takes it.
 */
class ConnectCodeModal extends obsidian_1.Modal {
  constructor(app, onCode) {
    super(app);
    this.onCode = onCode;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("stnd-modal");
    contentEl.createEl("p", { text: "Paste your connection code", cls: "stnd-modal-message" });
    contentEl.createEl("p", {
      text: "On standard.garden, after you authorize, press “Copy connection code”, then paste it here.",
      cls: "stnd-modal-detail",
    });
    const input = contentEl.createEl("input", { type: "text", placeholder: "Connection code" });
    input.style.width = "100%";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submit();
    });
    const btns = contentEl.createEl("div", { cls: "stnd-modal-btns" });
    const cancel = btns.createEl("button", { text: "Cancel", cls: "stnd-modal-btn-cancel" });
    cancel.addEventListener("click", () => this.close());
    const ok = btns.createEl("button", { text: "Connect", cls: "mod-cta stnd-modal-btn-confirm" });
    const submit = () => {
      const value = input.value.trim();
      if (!value) return;
      this.close();
      this.onCode(value);
    };
    ok.addEventListener("click", submit);
    setTimeout(() => input.focus(), 50);
  }

  onClose() {
    this.contentEl.empty();
  }
}

module.exports = { ConnectCodeModal };
