import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicasRoutingModule } from './musicas-routing.module';
import { MusicasComponent } from './musicas/musicas.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    MusicasComponent
  ],
  imports: [
    CommonModule,
    MusicasRoutingModule,
    MatTableModule
  ]
})
export class MusicasModule { }
