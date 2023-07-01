import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseApi} from "./model/responseApi";
import {Post} from "./model/post.model";

@Injectable({providedIn: 'root'})
export class PostService {
  baseUrl = 'http://localhost:8080/api/posts'

  constructor(private http: HttpClient) {}

  getPost(): Observable<ResponseApi> | never {
    return this.http.get<ResponseApi>(this.baseUrl);
  }
  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + "/" + id);
  }
}
