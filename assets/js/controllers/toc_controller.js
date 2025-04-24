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
    const headings = document.querySelectorAll(this.levelsValue.join(","));
    const links = Array.from(this.element.querySelectorAll("a.nav-link"));
    const observer = new IntersectionObserver(entries => {
      // Get all intersecting entries that are visible
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
  
      if (visible.length > 0) {
        const activeId = visible[0].target.id;
  
        links.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
        });
      }
    }, {
      rootMargin: "0px 0px -60% 0px", // triggers earlier in scroll
      threshold: 0.1
    });
    headings.forEach(h => observer.observe(h));
  }
}
