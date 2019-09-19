import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";
import { FormsModule } from "@angular/forms";

import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";

registerLocaleData(localeFr, "fr");

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [[ { provide: LOCALE_ID, useValue: "fr-FR" } ]],
  bootstrap: [AppComponent]
})
export class AppModule {}
