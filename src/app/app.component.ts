import { Component } from '@angular/core';
import {Link} from "./models/link.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Link[] = [
    {url: '/home',text: 'Home'},
    {url: '/posts', text: 'Posts'},
    {url: '/gallery', text: 'Gallery'},
    {url: '/contact', text: 'Contact us'}
    ];
}
