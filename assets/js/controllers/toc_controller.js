import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    content: String,  // CSS selector for the content to scan
    levels: { type: Array, default: ["h2", "h3"] }
  }

  connect() {
    this.init();
  }

  // NOTE: triggered by data-action="remote-repo:ready->boot#ready"
  ready() {
    this.init();
  }

  init() {
    const content = document.querySelector(this.contentValue || "#lesson");
    if (!content) return;

    this.toc = this.element.querySelector("ul");
    // Use #lesson-content instead of #lesson to ensure we process the actual lesson content
    const lessonContent = document.querySelector("#lesson-content");
    this.buildTOC(lessonContent || content);
    this.setupScrollSpy();
  }

  buildTOC(content) {
    this.toc.innerHTML = "";
    const headings = content.querySelectorAll(this.levelsValue.join(","));
    headings.forEach(heading => {
      if (!heading.id) {
        heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, "-");
      }

      // Add anchor link to the heading
      this.addAnchorLink(heading);

      const li = document.createElement("li");
      li.className = `nav-item toc-${heading.tagName.toLowerCase()}`;
      li.innerHTML = `<a class="nav-link" href="#${heading.id}">${heading.textContent}</a>`;
      this.toc.appendChild(li);
    });
  }

  addAnchorLink(heading) {
    // Only add the link if it doesn't already have one
    if (!heading.querySelector('.heading-link')) {
      const anchor = document.createElement('a');
      anchor.className = 'heading-link';
      anchor.href = `#${heading.id}`;
      anchor.setAttribute('aria-hidden', 'true');
      anchor.innerHTML = ' <i class="bi bi-link-45deg"></i>';
      
      // Add the link to the heading
      heading.appendChild(anchor);
    }
  }

  setupScrollSpy() {
    const lessonContent = document.querySelector("#lesson-content");
    const headings = lessonContent ? 
      lessonContent.querySelectorAll(this.levelsValue.join(",")) : 
      document.querySelectorAll(this.levelsValue.join(","));
      
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
