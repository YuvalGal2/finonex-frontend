import {Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Photo} from "../../models/photo.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input('clickableGalleryImages') clickableGalleryImages: boolean = false;
  @Output('loadingState') loadingState = new EventEmitter<boolean>();
  @Input('photos') photos: Photo[] = [];
  subscriptions: Subscription[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  showAlbumRelatedImages(photo: Photo): void {
    if (this.clickableGalleryImages) {
      this.loadingState.emit(true);
      this.subscriptions.push(this.dataService.getAlbumById(photo.albumId).subscribe((filteredPhotos: Photo[]) => {
        this.photos = filteredPhotos
        this.loadingState.emit(false);
      }));
    }
  }
}
