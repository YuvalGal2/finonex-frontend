import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageComponent } from './components/gallery/image/image.component';
import { PostsPageComponent} from './pages/posts-page/posts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {GalleryComponent} from "./components/gallery/gallery.component";
import {PostComponent} from "./components/posts/post/post.component";
import {PostsComponent} from "./components/posts/posts.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    ContactPageComponent,
    MainContentComponent,
    GalleryPageComponent,
    ContactFormComponent,
    PostsPageComponent,
    HomePageComponent,
    GalleryComponent,
    ImageComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
