import { Application } from "@hotwired/stimulus";
import BootController from "controllers/boot_controller";
import LiveCodeController from "controllers/live_code_controller";
import ThemeController from "controllers/theme_controller";
import TocController from "controllers/toc_controller";

window.Stimulus = Application.start();

Stimulus.register("boot", BootController);
Stimulus.register("live-code", LiveCodeController);
Stimulus.register("theme", ThemeController);
Stimulus.register("toc", TocController);
