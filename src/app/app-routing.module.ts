import {Routes, RouterModule, Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { MusicComponent} from './music/music.component';
import {AlbumComponent} from './album/album.component';

const routes : Routes = [
    {path : 'music' , component : MusicComponent},
    {path : 'album/:artistName/:artistImage', component : AlbumComponent},
    {path : "", redirectTo : "music", pathMatch : "full"}
]

@NgModule({
    
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{

}