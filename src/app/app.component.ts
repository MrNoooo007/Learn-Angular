import {Component, OnInit} from '@angular/core';
import {Post} from "./model/post.model";
import {PostService} from "./post.service";
import {map, pluck} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts !: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPost().subscribe(data => {
      this.posts = data.content;
    })
  }
}
