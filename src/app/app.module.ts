import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './user/shared/main-layout/main-layout.component';
import { ArticlePageComponent } from './user/article-page/article-page.component';
import { CreatePageComponent } from './user/create-page/create-page.component';
import { FavoritePageComponent } from './user/favorite-page/favorite-page.component';
import { MainPageComponent } from './user/main-page/main-page.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
