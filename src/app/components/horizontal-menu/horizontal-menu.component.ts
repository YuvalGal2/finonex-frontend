import { Component, OnInit, Input } from '@angular/core';
import {Link} from "../../models/link.model";

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent implements OnInit {
  @Input('height') height: number = 40;
  @Input('bgColor')  color: string = 'black';
  @Input('alignment') alignment: string = 'center';
  @Input('links') links: Link[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
