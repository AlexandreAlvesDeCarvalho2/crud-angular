import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Playlist } from '../model/playlist';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  constructor(private httpClient: HttpClient) {}
  private readonly API = 'api';

  playList() {
    return this.httpClient.get<Playlist[]>(this.API + '/VwPlaylist').pipe(take(1));
  }

  excluirMusicPlaylist(idPlaylist: any){

    let endPoints = "/Playlist/"+idPlaylist
    {alert(endPoints)}

    window.location.reload()
    return this.httpClient.delete(this.API + endPoints).subscribe(data => {
      console.log(data);
    })

  }


}
