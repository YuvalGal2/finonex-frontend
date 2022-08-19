import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post.model";
import {DataService} from "../../services/data.service";
import {Photo} from "../../models/photo.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }
  topTenPosts:Post[] = [];
  topTenPhotos:Photo[] = [];
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getPosts();
    this.getPhotos();
  }
  getPosts(): void {
    this.dataService.getPosts().subscribe((posts: Post[]) => this.topTenPosts = posts.slice(0,10));
  }
  getPhotos(): void {
    this.dataService.getGalleryPhotos().subscribe((photos: Photo[]) => this.topTenPhotos = photos.slice(0,10));
  }

}
