import { Injectable } from '@angular/core';
import {filter, Observable, of,} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }
  // could be saved in the env file
  private apiUrl: string = 'http://localhost:8080/api';

  getPosts(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getGalleryPhotos(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/photos');
  }

  getAlbumById(id: string) {
   return of(this.getGalleryPhotos())
      .pipe(
        filter((photo: any) => {
          return photo.id === id;
        }),
      );

  }
}
