import { Musica } from './../model/musica';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  constructor(private httpClient: HttpClient) { }
  private readonly API = 'api';

  musicaList(){
    return this.httpClient.get<Musica[]>(this.API + "/Musica").pipe(take(1));
  }

  addPlaylist(NewPlaylist: any){
    {
      alert("Post: Ok" )
    }
    window.location.reload()
    return this.httpClient.post<Musica[]>(this.API + "/Playlist", NewPlaylist).pipe(take(1));


  }


}
