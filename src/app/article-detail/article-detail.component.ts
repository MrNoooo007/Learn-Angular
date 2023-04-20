import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../service/article/article.service";
import {ActivatedRoute} from "@angular/router";
import {filter, Observable, pluck, switchMap} from "rxjs";
import {Article} from "../models/Article";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article$ !: Observable<Article>;

  constructor(private readonly service : ArticleService, private readonly route : ActivatedRoute) {
  }

  ngOnInit() {
    this.article$ = this.route.params.pipe(
      pluck('slug'),
      switchMap(slug => this.service.getArticle(slug)),
      filter(article => !! article)
    )
  }


}
