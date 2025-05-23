// controllers/remote_markdown_controller.js
import { Controller } from "@hotwired/stimulus";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default class extends Controller {
  static values = {
    url: String,              // e.g. https://github.com/org/repo
    branch: { type: String, default: "main" },
    path: { type: String, default: "content.md" }
  }

  async connect () {
    // 1. Build the raw URL: https://raw.githubusercontent.com/org/repo/<branch>/<path>
    const rawBase = this.urlValue.replace("github.com", "raw.githubusercontent.com")
    const url     = `${rawBase}/${this.branchValue}/${this.pathValue}`

    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

      const markdown = await response.text()
      const html = DOMPurify.sanitize(marked.parse(markdown))

      // 2. Re-write relative links / images so they still work
      const base = url.replace(/\/[^/]*$/, "/")
      this.element.innerHTML = html.replace(
        /(src|href)="([^:"]+)"/g,
        (_, attr, rel) => `${attr}="${new URL(rel, base)}"`
      )

      this.element.dispatchEvent(new CustomEvent("lesson:loaded"))
    } catch (error) {
      console.error(error)
      this.element.innerHTML =
        `<p class="text-red-600">Couldn't load lesson (${error.message}).</p>`
    }
  }
}
