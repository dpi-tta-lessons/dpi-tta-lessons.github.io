// assets/js/controllers/theme_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button"];
  static values = {
    storageKey: { type: String, default: "theme" }
  };

  connect() {
    this.syncInitialTheme();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (!localStorage.getItem(this.storageKeyValue)) {
        this.applyTheme(this.getPreferredTheme());
      }
    });
  }

  select(event) {
    const theme = event.currentTarget.getAttribute("data-bs-theme-value");
    localStorage.setItem(this.storageKeyValue, theme);
    this.applyTheme(theme);
    this.updateActiveButton(theme);
  }

  syncInitialTheme() {
    const stored = localStorage.getItem(this.storageKeyValue);
    const theme = stored || this.getPreferredTheme();
    this.applyTheme(theme);
    this.updateActiveButton(theme);
  }

  getPreferredTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  applyTheme(theme) {
    if (theme === "auto") {
      document.documentElement.removeAttribute("data-bs-theme");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  }

  updateActiveButton(selectedTheme) {
    this.buttonTargets.forEach(btn => {
      const value = btn.getAttribute("data-bs-theme-value");
      btn.classList.toggle("active", value === selectedTheme);
    });
  }
}
