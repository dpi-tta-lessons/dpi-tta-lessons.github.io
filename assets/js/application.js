import { Application } from "@hotwired/stimulus";
import TocController from "controllers/toc_controller";

window.Stimulus = Application.start();

Stimulus.register("toc", TocController);
