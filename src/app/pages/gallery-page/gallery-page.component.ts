import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Photo} from "../../models/photo.model";

@Component({
  selector: 'app-gallery-page-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
  photos: Photo[] = [];
  loadingState: boolean = true;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  changeLoadingState(state:boolean): void {
    this.loadingState = state;
  }
  fetchPhotos():void {
    this.dataService.getGalleryPhotos().subscribe((photos: Photo[]) => {
      this.loadingState = false;
      this.photos = photos;
    });
  }

}
