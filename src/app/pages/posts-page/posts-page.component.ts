import {DataService} from "../../services/data.service";
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Post} from "../../models/post.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit,OnDestroy {
  posts: Post[] = [];
  subscriptions: Subscription[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  fetchPosts():void {
    this.subscriptions.push(this.dataService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts
    },(error) => console.log('Request failed, probably need to do some handling...', error)));
  }

}
