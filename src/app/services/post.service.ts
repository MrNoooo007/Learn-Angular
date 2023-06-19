import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "http://localhost:8080/api/posts";
  // private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Posts>(this.url);
  }
}
