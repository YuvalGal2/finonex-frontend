import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http:HttpClient) { }
  // could be saved in the env file
  private apiUrl: string = 'http://localhost:8080/api';

  getPosts(): Observable<any> {
    return this._http.get(`${this.apiUrl}/posts`);
  }

  getGalleryPhotos(): Observable<any> {
    return this._http.get(`${this.apiUrl}/photos`);
  }

  getAlbumById(albumId: number): Observable<any> {
    return this._http.get(`${this.apiUrl}/album/${albumId}`);
  }
}
