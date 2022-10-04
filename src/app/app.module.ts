import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './user/shared/main-layout/main-layout.component';
import { ArticlePageComponent } from './user/article-page/article-page.component';
import { CreatePageComponent } from './user/create-page/create-page.component';
import { FavoritePageComponent } from './user/favorite-page/favorite-page.component';
import { MainPageComponent } from './user/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ArticlePageComponent,
    CreatePageComponent,
    FavoritePageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
