import { Application } from "@hotwired/stimulus";
import ThemeController from "controllers/theme_controller";
import TocController from "controllers/toc_controller";

window.Stimulus = Application.start();

Stimulus.register("theme", ThemeController);
Stimulus.register("toc", TocController);
