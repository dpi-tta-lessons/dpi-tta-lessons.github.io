import { Controller } from "@hotwired/stimulus"
import { marked } from "marked"
import DOMPurify from "dompurify"

export default class extends Controller {
  static values = {
    url: String, // e.g. https://github.com/org/repo
    branch: { type: String, default: "main" },
    path: { type: String, default: "content.md" }
  }

  connect() {
    if (this.hasUrlValue) {
      this.loadRemoteLesson()
    } else {
      // Static content — still notify others
      this.dispatch("ready", { bubbles: true })
    }
  }

  async loadRemoteLesson() {
    const rawUrlBase = this.urlValue.replace("github.com", "raw.githubusercontent.com")
    const contentUrl = `${rawUrlBase}/${this.branchValue}/${this.pathValue}`

    try {
      const response = await fetch(contentUrl)
      if (!response.ok) throw new Error(`Fetch error: ${response.status}`)

      const markdown = await response.text()
      const html = DOMPurify.sanitize(marked.parse(markdown))

      const base = contentUrl.replace(/\/[^/]*$/, "/")
      this.element.innerHTML = html.replace(
        /(src|href)="([^:"]+)"/g,
        (_, attr, path) => `${attr}="${new URL(path, base)}"`
      )

      this.dispatch("ready", { bubbles: true })
    } catch (error) {
      this.element.innerHTML = `<p class="text-danger">Error loading lesson: ${error.message}</p>`
      console.error(error)
    }
  }
}
