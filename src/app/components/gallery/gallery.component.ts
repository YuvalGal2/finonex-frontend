import {Component, Input, OnInit} from '@angular/core';
import {Photo} from "../../models/photo.model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input('photos') photos: Photo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
