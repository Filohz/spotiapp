import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http :HttpClient) {
    console.log("spotify service listo");
   }

   getQuery(path:string){
    const url =`https://api.spotify.com/v1/${path}`;
    const headers =new HttpHeaders({
      'Authorization':'Bearer BQCg_YycT_qFwMqqN_Hk7toRPZSKH-kx2r_7v8vI-CqPRSTfBDGamd_7YsfTKvCNK_S1l-MTY3nFO9JjD1AzN3RczN-jqLIaEveSQSBmmxi-mc034zc'
    });
    return this.http.get(url,{headers});
   }


  getNewReleases(){
      return this.getQuery('browse/new-releases').pipe(map((data:any) => data.albums.items));
    }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map((data:any) => data.artists.items));
    }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
    }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks`).pipe(map((data:any) => data.tracks));
  }

}
