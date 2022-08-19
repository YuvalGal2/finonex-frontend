import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  posts: Post[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts():void {
    this.dataService.getPosts().subscribe((posts: Post[]) => this.posts = posts);
  }

}
