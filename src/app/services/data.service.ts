import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {filter} from 'rxjs/operators';
import {Photo} from "../models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  filteredImagesSubject = new Subject<Photo[]>();
  constructor(private _http:HttpClient) { }
  // could be saved in the env file
  private apiUrl: string = 'http://localhost:8080/api';

  getPosts(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getGalleryPhotos(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/photos');
  }

  getAlbumById(albumId: number): void {
    this.getGalleryPhotos().subscribe((photos: Photo[]) => {
      photos = photos.filter((photo) => photo.albumId === albumId);
      this.filteredImagesSubject.next(photos);
    })
  }
}
