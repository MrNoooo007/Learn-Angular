import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { MyArticleComponent } from './my-article/my-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    MyArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Đây chính là AppRoutingModule được tạo tự động bằng CLI
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
