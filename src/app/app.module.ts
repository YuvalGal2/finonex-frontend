import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery.component';
import { ImageComponent } from './components/gallery/image/image.component';
import { PostsPageComponent} from './pages/posts-page/posts-page.component';
import {GalleryComponent} from "./components/gallery/gallery.component";
import { ContactComponent } from './pages/contact-page/contact.component';
import {PostComponent} from "./components/posts/post/post.component";
import {PostsComponent} from "./components/posts/posts.component";
import { HomeComponent } from './pages/home-page/home.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    MainContentComponent,
    GalleryPageComponent,
    PostsPageComponent,
    ContactComponent,
    GalleryComponent,
    ImageComponent,
    PostsComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
