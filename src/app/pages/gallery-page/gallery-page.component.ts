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
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos():void {
    this.dataService.getGalleryPhotos().subscribe((photos: Photo[]) => this.photos = photos);
  }

}
