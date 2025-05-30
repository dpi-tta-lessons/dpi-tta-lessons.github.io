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

  ready() {
    this.init();
  }

  init() {
    if (!this.element.querySelector("code")) return;
    this.buildEditorElements();
    this.createEditor();
    this.observeThemeChanges();
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
  
    // Create live preview with iframe for CSS isolation
    this.preview = document.createElement("div");
    this.preview.className = "live-code-preview border p-3 mb-2";
    
    if (this.language === "html" || this.language === "css") {
      this.createIframedPreview();
    } else {
      this.preview.innerHTML = this.rawContent;
    }
  
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
      this.updatePreview();
      this.resizeEditorToContent();
    });

    // Initial resize
    this.resizeEditorToContent();
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

  resizeEditorToContent() {
    if (!this.editor) return;
    
    const lineCount = this.editor.getModel().getLineCount();
    const lineHeight = this.editor.getOption(monaco.editor.EditorOption.lineHeight);
    const padding = 20; // Top and bottom padding
    
    const height = Math.max(lineCount * lineHeight + padding, 100); // Minimum 100px
    this.editorDiv.style.height = height + "px";
    
    this.editor.layout();
  }

  createIframedPreview() {
    this.iframe = document.createElement("iframe");
    this.iframe.style.width = "100%";
    this.iframe.style.border = "none";
    this.iframe.style.minHeight = "200px";
    this.iframe.style.resize = "vertical";
    this.iframe.style.overflow = "auto";
    this.iframeLoaded = false;
    
    this.preview.appendChild(this.iframe);
    
    // Wait for iframe to load before updating content
    this.iframe.onload = () => {
      if (!this.iframeLoaded) {
        this.iframeLoaded = true;
        this.updateIframeContent(this.rawContent);
      }
    };
    
    // Initialize empty document
    this.iframe.src = "about:blank";
  }

  updatePreview() {
    const content = this.editor.getValue();
    if (this.iframe) {
      this.updateIframeContent(content);
    } else {
      this.preview.innerHTML = content;
    }
  }

  updateIframeContent(content) {
    const doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
    if (!doc) return; // Exit if document not ready
    
    let htmlContent;
    if (this.language === "css") {
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: system-ui, sans-serif; padding: 1rem; }
            ${content}
          </style>
        </head>
        <body>
          <div>Sample content div to see CSS effects</div>
          <p>This paragraph p will show your CSS styles.</p>
          <button>A button element</button>
        </body>
        </html>
      `;
    } else {
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: system-ui, sans-serif; padding: 1rem; margin: 0; }
          </style>
        </head>
        <body>
          ${content}
        </body>
        </html>
      `;
    }
    
    doc.open();
    doc.write(htmlContent);
    doc.close();
    
    // Auto-resize iframe to content
    setTimeout(() => {
      this.iframe.style.height = Math.max(200, doc.body.scrollHeight + 20) + "px";
    }, 100);
  }
}
