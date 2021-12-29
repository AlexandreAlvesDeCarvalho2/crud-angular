import { Component, OnInit } from '@angular/core';
import { Musica } from '../model/musica';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.scss']
})
export class MusicasComponent implements OnInit {

  musicas: Musica[] = [
    {_id: 1, musica: 'Vagabundo', cantor: 'Ze'}
  ];
  displayedColumns = ['_id','musica','cantor'];

  constructor() {
    //this.musicas = []
   }

  ngOnInit(): void {


  }

}
