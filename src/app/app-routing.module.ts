import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {GalleryPageComponent} from "./pages/gallery-page/gallery-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'posts', component: PostsPageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
