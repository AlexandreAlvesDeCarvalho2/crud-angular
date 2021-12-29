import { Musica } from './../model/musica';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  constructor(private httpClient: HttpClient) { }
  private readonly API = 'api/Musica';

  musicaList(){
    return this.httpClient.get<Musica[]>(this.API);
  }
}
