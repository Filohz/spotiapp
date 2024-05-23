import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrl: './artista.component.css'
})
export class ArtistaComponent {

  artista:any={};
  toptracks:any[] =[];
  loading:boolean=true;

  constructor(private activedrouter:ActivatedRoute, private spotify:SpotifyService){
  this.activedrouter.params.subscribe(params => {
      console.log(params['id']);
      this.getArtista(params['id']);
    })
  }

  getArtista(id:string){
    this.spotify.getArtista(id).subscribe(artista =>{
      console.log(artista);
      this.artista = artista;
      this.loading = false;
      this.getTopTracks(id);
    });
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(
      data =>{
        this.toptracks=data;
        console.log(data);
      })
  }



}
