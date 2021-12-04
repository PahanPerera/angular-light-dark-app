import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { LibModule } from "./lib/lib.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, LibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
