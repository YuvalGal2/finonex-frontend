import {Component, Input, OnInit} from '@angular/core';
import {Photo} from "../../../models/photo.model";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input("photoData") photoData: Photo | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
