import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Article} from "../models/Article";
import {ArticleService} from "../service/article/article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  article$ !: Observable<Article[]>;

  constructor(private readonly service : ArticleService) {
  }

  ngOnInit(): void {
    this.article$ = this.service.articles$;
  }
}
