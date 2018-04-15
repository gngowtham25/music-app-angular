import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  providers: [MusicService]
})
export class MusicComponent implements OnInit {

  artistName: string;
  artistList: any[] = [];
  currentArtistList : any[] = [];
  paginatorLength : number = 0;

  constructor(private musicService: MusicService, private router: Router) {

  }

  ngOnInit() {

  }

  searchForArtist() {

    this.artistList = [];
    this.paginatorLength = 0;
    if (this.artistName.length > 0) {
      this.musicService.getArtistByName(this.artistName).subscribe(data => {
        console.log(data);
        this.artistList = data.artists;
        this.currentArtistList = this.artistList ? this.artistList.slice(0,10) : [];
        this.paginatorLength = this.artistList ? this.artistList.length : 0;
      })
    }

  }

  viewAlbum(artist: any) {
    console.log(artist);
    this.router.navigate([
      '/album' , artist.strArtist, artist.strArtistFanart
    ])
  }

  pageChanged(event:any){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.currentArtistList = this.artistList.slice(startItem, endItem);
  }

}
