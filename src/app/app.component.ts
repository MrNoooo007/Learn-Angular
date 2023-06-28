import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: any[]  = [];
  private url = 'https://example-jsi-1-default-rtdb.asia-southeast1.firebasedatabase.app/post.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        this.url,
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.http.get(this.url, {
      headers: new HttpHeaders({ 'Test-Header': 'Cong dat' })
    }).pipe(
      map(response => {
        const postArrays = [];
        for(const key in response) {
          if(response.hasOwnProperty(key)) {
            // @ts-ignore
            postArrays.push({...response[key], id: key})
          }
        }
        return postArrays;
      })
    ).subscribe(data => {
      // @ts-ignore
      this.loadedPosts = data;
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
