import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Post} from "../model/post.model";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  currentPost !: Post;
  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.postService.getPostById(this.route.snapshot.params['id']).subscribe(post => {
      this.currentPost = post;
    });
  }

}
