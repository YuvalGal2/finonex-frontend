import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    MainContentComponent,
    HomeComponent,
    PostsComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
