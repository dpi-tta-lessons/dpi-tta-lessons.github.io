// assets/js/controllers/boot_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.connectLiveCodeController()
  }
  
  // NOTE: triggered by data-action="remote-repo:ready->boot#ready"
  ready() {    
    this.connectLiveCodeController()
  }

  connectLiveCodeController() {
    // add live code data controller to each code snippet with .live-code
    document.querySelectorAll(".live-code").forEach(el => {
      if (!el.hasAttribute("data-controller")) {
        el.setAttribute("data-controller", "live-code");
      }
    });
  }
}
