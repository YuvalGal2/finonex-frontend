import {DataService} from "../../services/data.service";
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Photo} from "../../models/photo.model";
import {Post} from "../../models/post.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  subscriptions: Subscription[] = [];
  topTenPhotos:Photo[] = [];
  topTenPosts:Post[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub:Subscription) => sub.unsubscribe());
  }

  getData(): void{
    this.getPosts();
    this.getPhotos();
  }

  getPosts(): void {
    this.subscriptions.push(this.dataService.getPosts()
      .subscribe((posts: Post[]) => this.topTenPosts = posts.slice(0,10)));
  }

  getPhotos(): void {
    this.subscriptions.push(this.dataService.getGalleryPhotos()
      .subscribe((photos: Photo[]) => this.topTenPhotos = photos.slice(0,10)));
  }

}
