import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones:any [] =[];
  loading:boolean=true;

  constructor(private spotify :SpotifyService){
    this.spotify.getNewReleases().subscribe((data:any) =>{
        this.nuevasCanciones = data;
        this.loading = false;
    })
  }



}
