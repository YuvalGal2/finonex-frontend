import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {GalleryPageComponent} from "./pages/gallery-page/gallery-page.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  {path: 'contact', component: ContactPageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'posts', component: PostsPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
