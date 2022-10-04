import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlePageComponent} from "./user/article-page/article-page.component";
import {MainLayoutComponent} from "./user/shared/main-layout/main-layout.component";
import {MainPageComponent} from "./user/main-page/main-page.component";
import {FavoritePageComponent} from "./user/favorite-page/favorite-page.component";
import {CreatePageComponent} from "./user/create-page/create-page.component";

const routes: Routes = [
  {
    path: '', component:MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'favorite', component: FavoritePageComponent},
      {path: 'create', component: CreatePageComponent},
      {path: 'article/:id', component: ArticlePageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
