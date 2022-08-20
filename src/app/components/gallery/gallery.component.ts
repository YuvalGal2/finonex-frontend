import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Photo} from "../../models/photo.model";
import {Data} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input('photos') photos: Photo[] = [];
  @Input('clickableGalleryImages') clickableGalleryImages: boolean = false;
  @Output('loadingState') loadingState = new EventEmitter<boolean>();
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  showAlbumRelatedImages(photo: Photo) {
    if (this.clickableGalleryImages) {
      this.loadingState.emit(true);
      this.dataService.getAlbumById(photo.albumId).subscribe((filteredPhotos: Photo[]) => {
        this.photos = filteredPhotos
        this.loadingState.emit(false);
      });
    }
  }
}
