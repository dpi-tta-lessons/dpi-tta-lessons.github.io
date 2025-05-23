import { Application } from "@hotwired/stimulus";
import BootController from "controllers/boot_controller";
import LiveCodeController from "controllers/live_code_controller";
import RemoteRepoController from "controllers/remote_repo_controller"
import ThemeToggleController from "controllers/theme_toggle_controller";
import TocController from "controllers/toc_controller";

window.Stimulus = Application.start();

Stimulus.register("boot", BootController);
Stimulus.register("live-code", LiveCodeController);
Stimulus.register("remote-repo", RemoteRepoController);
Stimulus.register("theme-toggle", ThemeToggleController);
Stimulus.register("toc", TocController);
