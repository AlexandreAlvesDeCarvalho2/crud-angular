import { PlaylistService } from './../services/playlist.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../model/playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlist: Observable <Playlist[]>;
  displayedColumns = ['nmMusica','nmArtista','add'];

  constructor(private playlistService: PlaylistService) {
    //this.musicas = []
    this.playlist = this.playlistService.playList();
   }
  ngOnInit(): void {
  }


  excluirMusicPlaylist(id: any){
    const NewPlaylist: Playlist = {
      idPlaylist: id,
      idMusica: 0,
      nmMusica: '',
      nmArtista: ''
    }

   {
     alert(NewPlaylist.idPlaylist);
   }

   this.playlistService.excluirMusicPlaylist(NewPlaylist.idPlaylist);

  }


}
