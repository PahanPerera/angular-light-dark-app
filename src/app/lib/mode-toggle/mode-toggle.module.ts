import { NgModule } from "@angular/core";
import {
  ModeLocalStorageService,
  MODE_STORAGE_SERVICE,
} from "./mode-storage.service";
import { ModeToggleComponent } from "./mode-toggle.component";
import { ModeToggleService } from "./mode-toggle.service";

/**
 * Angular module for mode toggling feature
 * Contains
 *  * ModeToggleComponent
 *  * ModeToggleService
 */
@NgModule({
  declarations: [ModeToggleComponent],
  providers: [
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
  ],
  exports: [ModeToggleComponent],
})
export class ModeToggleModule {}
