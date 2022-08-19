import {Component, Input, OnInit} from '@angular/core';
import {Link} from "../../models/link.model";

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {
  @Input('links') links: Link[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
