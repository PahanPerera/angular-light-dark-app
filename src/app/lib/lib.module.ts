import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModeToggleModule } from "./mode-toggle/mode-toggle.module";

/**
 * Library module
 * Contains
 *  * ModeToggleModule (for now)
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, ModeToggleModule],
  exports: [ModeToggleModule],
})
export class LibModule {}
