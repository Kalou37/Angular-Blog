import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostListComponent } from "./postList/postList.component";
import { FormsModule } from "@angular/forms";

import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { PostListItemComponent } from "./post-list-item/post-list-item.component";

registerLocaleData(localeFr, "fr");

@NgModule({
  declarations: [AppComponent, PostListComponent, PostListItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [[{ provide: LOCALE_ID, useValue: "fr-FR" }]],
  bootstrap: [AppComponent]
})
export class AppModule {}
