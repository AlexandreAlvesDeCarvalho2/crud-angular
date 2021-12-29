import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  constructor(private httpClient: HttpClient) { }

  musicaList(){
    return [
    {_id: 1, musica: 'Vagabundo', cantor: 'Ze'}
    ]
  }
}
