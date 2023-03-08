import {Component, OnInit} from '@angular/core';
import {album_obj} from "../models";
import {ALBUMS} from "../fakedb";
import {AlbumService} from "../album.service";
import {max} from "rxjs";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: album_obj[];
  newAlbum: album_obj;
  loaded: boolean;
  constructor(private albumService: AlbumService) {

    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as album_obj;
  }
  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe(
      (albums) => {
        this.albums = albums;
        this.loaded = true;
      }
    )
  }
  addAlbum() {
    this.loaded = false;
    const getMaxIdFromAlbums = () => {
      let res = -1;
      for (let album of this.albums) {
        if (album.id > res) {
          res = album.id;
        }
      }
      return res;
    }
    this.albumService.addAlbum(this.newAlbum).subscribe((album)=>{
      album.id = getMaxIdFromAlbums() + 1;
      this.albums.unshift(album);
      this.loaded = true;
      this.newAlbum = {} as album_obj;
    })
  }
  delAlbum(albumId: number) {
    this.albums = this.albums.filter(x => x.id != albumId);
  }
}
