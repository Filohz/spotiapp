import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas:any[] =[];
  loading:boolean=false;

  constructor(private spotify:SpotifyService){
  }

  buscar(termino:string){
    if(termino.length>0 && termino.trim()!=''){
        this.loading=true;
        this.spotify.getArtistas(termino).subscribe(data => {
        this.artistas=data;
        this.loading = false;
      });
    }else{
      this.artistas=[];
    }
  }


}
