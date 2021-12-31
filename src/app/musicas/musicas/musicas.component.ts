import { Id } from './../model/id';
import { MusicasService } from './../services/musicas.service';
import { Component, OnInit } from '@angular/core';
import { Musica } from '../model/musica';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.scss']
})
export class MusicasComponent implements OnInit {

  musicas: Observable <Musica[]>;
  displayedColumns = ['idMusica','nmMusica','nmArtista','add'];

  constructor(private musicasService: MusicasService) {
    //this.musicas = []
    this.musicas = this.musicasService.musicaList();
   }

  ngOnInit(): void {


  }


  addPlaylist(id: any){

    const NewPlaylist: Id = {
      idMusicPlaylist: id
    }

    {alert("Botão: OK.. Pegando Objeto: " + NewPlaylist + " OK")}

    this.musicas = this.musicasService.addPlaylist(NewPlaylist)

  }
}



