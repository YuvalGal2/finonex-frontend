import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ImageComponent } from './components/gallery/image/image.component';
import { PostsPageComponent} from './pages/posts-page/posts-page.component';
import {GalleryComponent} from "./components/gallery/gallery.component";
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import {PostComponent} from "./components/posts/post/post.component";
import {PostsComponent} from "./components/posts/posts.component";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    MainContentComponent,
    GalleryPageComponent,
    PostsPageComponent,
    ContactPageComponent,
    GalleryComponent,
    ImageComponent,
    PostsComponent,
    HomePageComponent,
    PostComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
