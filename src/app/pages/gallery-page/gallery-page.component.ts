import { Component, OnInit,OnDestroy } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Photo} from "../../models/photo.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-gallery-page-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  loadingState: boolean = true;
  photos: Photo[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  changeLoadingState(state:boolean): void {
    this.loadingState = state;
  }

  fetchPhotos():void {
    this.subscriptions.push(this.dataService.getGalleryPhotos().subscribe((photos: Photo[]) => {
      this.loadingState = false;
      this.photos = photos;
    },(error) => console.log('Request failed, probably need to do some handling...')));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
