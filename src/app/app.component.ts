import { Component } from "@angular/core";
import { Mode } from "./lib/mode-toggle/mode-toggle.model";
import { ModeToggleService } from "./lib/mode-toggle/mode-toggle.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent {
  /**
   * current active mode
   */
  currentMode: Mode = Mode.LIGHT;
  constructor(private modeToggleService: ModeToggleService) {
    /**
     * Example code that demonstrate the modeChanged$ observable behavior and usage
     */
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }
}
