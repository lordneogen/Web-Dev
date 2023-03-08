import {Component, OnInit} from '@angular/core';
import {album_obj} from "../models";
import {ActivatedRoute} from "@angular/router";
import {ALBUMS} from "../fakedb";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: album_obj;
  load: boolean;
  temp: album_obj;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as album_obj;
    this.load = true;
    this.temp  = {} as album_obj;
  }
  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get("id"));
      this.load = false;
      this.albumService.getAlbum(id).subscribe(
        (album) => {
          this.album = album;
          this.load = true;
        }
      )
    });
  }
  updateAlbumTitle() {
    this.temp.id = this.album.id;
    this.temp.userId = this.album.id;
    this.load = false;
    this.albumService.updateAlbum(this.temp, this.album.id).subscribe((album)=>{
      this.album = album;
      this.load = true;
    });
    this.temp = {} as album_obj;
  }
}
