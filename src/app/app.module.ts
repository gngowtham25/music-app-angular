import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule, } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { AlbumComponent } from './album/album.component';

import {AlbumPipes} from './album/album.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    AlbumComponent,
    AlbumPipes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
