import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    content: String,  // CSS selector for the content to scan
    levels: { type: Array, default: ["h2", "h3"] }
  }

  connect() {
    const content = document.querySelector(this.contentValue || "#lesson");
    if (!content) return;

    this.toc = this.element.querySelector("ul");
    this.buildTOC(content);
    this.setupScrollSpy();
  }

  buildTOC(content) {
    this.toc.innerHTML = "";
    const headings = content.querySelectorAll(this.levelsValue.join(","));
    headings.forEach(heading => {
      if (!heading.id) {
        heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, "-");
      }

      const li = document.createElement("li");
      li.className = `nav-item toc-${heading.tagName.toLowerCase()}`;
      li.innerHTML = `<a class="nav-link" href="#${heading.id}">${heading.textContent}</a>`;
      this.toc.appendChild(li);
    });
  }

  setupScrollSpy() {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const id = entry.target.id;
        const link = this.element.querySelector(`a[href="#${id}"]`);
        if (link) {
          link.classList.toggle("active", entry.isIntersecting);
        }
      }
    }, {
      rootMargin: "0px 0px -80% 0px", // Adjust when "active" triggers
      threshold: 1.0
    });

    const content = document.querySelector(this.contentValue || "#lesson");
    const headings = content.querySelectorAll(this.levelsValue.join(","));
    headings.forEach(h => observer.observe(h));
  }
}
