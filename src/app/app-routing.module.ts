import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";
import {MyArticleComponent} from "./my-article/my-article.component";

const routes: Routes = [
  {
    path: 'detail/:slug',
    component: ArticleDetailComponent
  },
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: 'my-article',
    component: MyArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
