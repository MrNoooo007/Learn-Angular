import { Injectable } from '@angular/core';
import {map, Observable, of, shareReplay} from "rxjs";
import {Article} from "../../models/Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  get articles$ () {
    return of<Article[]>(
      [
        { title: "Tieu de 1", body: "Noi dung 1", slug: "bai-viet-1" },
        { title: "Tieu de 2", body: "Noi dung 2", slug: "bai-viet-2" },
      ]
    ).pipe(shareReplay(1));
  }

  getArticle(slug : string) : Observable<Article> {
    // @ts-ignore
    return this.articles$.pipe(map( articles => articles.find(ar => ar.slug === slug) ));
  }
}
