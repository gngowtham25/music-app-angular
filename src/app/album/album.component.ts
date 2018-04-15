import { Component, OnInit, TemplateRef,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlbumPipes } from './album.pipe'


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  providers: [AlbumService]
})
export class AlbumComponent implements OnInit {

  artistName: string;
  artistImage: string;
  albumList: any[] = [];
  currentAlbumList : any[] = [];
  modalRef: BsModalRef;
  trackList: any[] =[];
  selectedAlbum : any;
  paginatorLength:number;

  constructor(private route: ActivatedRoute, 
    private router: Router, private albumService: AlbumService, 
    private modalService: BsModalService) { }


  ngOnInit() {

    this.artistName = this.route.snapshot.paramMap.get('artistName');
    this.artistImage = this.route.snapshot.paramMap.get('artistImage');
    console.log(this.artistImage);
    this.getAlbums(this.artistName);

  }

  getAlbums(artistName: string) {

    this.albumService.getAlbumsByArtist(artistName).subscribe(data => {
      this.albumList = data.album;
      this.paginatorLength = this.albumList ? this.albumList.length : 0;
      this.currentAlbumList = this.albumList.slice(0,10);
    })

  }

  getTrackList(template: TemplateRef<any> , album : any){

    this.selectedAlbum = album;
    console.log(this.selectedAlbum);
    this.albumService.getAlbumDetails(album.idAlbum).subscribe(data=>{
      this.trackList = data.track;
      this.openModal(template)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pageChanged(event:any){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.currentAlbumList = this.albumList.slice(startItem, endItem);
  }


}
