import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home-page/home.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {GalleryPageComponent} from "./pages/gallery-page/gallery.component";
import {ContactComponent} from "./pages/contact-page/contact.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostsPageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
