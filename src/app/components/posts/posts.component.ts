import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input('posts') posts: Post[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.posts);
  }

}

