import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {album_obj, Photo} from "./models";
import {AlbumsComponent} from "./albums/albums.component";
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL: string = "https://jsonplaceholder.typicode.com";
  constructor(private client: HttpClient) {
  }
  getAlbums() : Observable<album_obj[]>{
    return this.client.get<album_obj[]>(`${this.BASE_URL}/albums`);//get albums
  }
  getAlbum(id: number) : Observable<album_obj> {
    return this.client.get<album_obj>(`${this.BASE_URL}/albums/${id}`);//get album
  }
  addAlbum(album: album_obj) : Observable<album_obj> {
    return this.client.post<album_obj>(`${this.BASE_URL}/albums`, album);//new album
  }
  deleteAlbum(id: number) : Observable<album_obj> {
    return this.client.delete<album_obj>(`${this.BASE_URL}/albums/${id}`);//delete album
  }
  updateAlbum(album: album_obj, id: number) : Observable<album_obj> {
    return this.client.put<album_obj>(`${this.BASE_URL}/albums/${id}`, album);//update album
  }
  getAlbumPhotos(id: number)  : Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);//get album photos
  }


}
