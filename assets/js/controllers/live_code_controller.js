import { Controller } from "@hotwired/stimulus";
import * as monaco from "monaco-editor";

export default class extends Controller {

  // TODO: move to ready?
  connect() {
    if (!this.element.querySelector("code")) return;
    this.buildEditorElements();
    this.createEditor();
    this.observeThemeChanges();
  }

  disconnect() {
    if (this.editor) this.editor.dispose();
    if (this.themeObserver) this.themeObserver.disconnect();
  }

  buildEditorElements() {
    const code = this.element.querySelector("code");
    this.rawContent = code.textContent.trim();
  
    const pre = this.element.closest("pre") || this.element;
    this.language = this.detectLanguage(pre);
    this.theme = this.detectTheme();
  
    // Wipe existing content
    this.element.innerHTML = "";
    this.element.classList.add("live-code-block", "mb-5");
  
    // Create live preview
    this.preview = document.createElement("div");
    this.preview.className = "live-code-preview border p-3 mb-2";
    this.preview.innerHTML = this.rawContent;
  
    // Create editor container
    this.editorDiv = document.createElement("div");
    this.editorDiv.className = "live-code-editor mb-2 border";
    this.editorDiv.style.minHeight = "7rem";
  
    // Insert new elements into controlled element
    this.element.appendChild(this.preview);
    this.element.appendChild(this.editorDiv);
  }

  createEditor() {
    this.editor = monaco.editor.create(this.editorDiv, {
      value: this.rawContent,
      language: this.language,
      theme: this.theme,
      automaticLayout: true,
      minimap: { enabled: false },
      wordWrap: "on"
    });

    this.editor.onDidChangeModelContent(() => {
      this.preview.innerHTML = this.editor.getValue();
    });
  }

  observeThemeChanges() {
    this.themeObserver = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "data-bs-theme") {
          this.updateTheme();
        }
      }
    });

    this.themeObserver.observe(document.documentElement, { attributes: true });
  }

  updateTheme() {
    if (!this.editor) return;
    const newTheme = this.detectTheme();
    monaco.editor.setTheme(newTheme);
  }

  detectLanguage(pre) {
    const match = Array.from(pre.classList).find(c => c.startsWith("language-"));
    return match ? match.replace("language-", "") : "plaintext";
  }

  detectTheme() {
    return document.documentElement.getAttribute("data-bs-theme") === "dark"
      ? "vs-dark"
      : "vs-light";
  }
}
