import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicasRoutingModule } from './musicas-routing.module';
import { MusicasComponent } from './musicas/musicas.component';
import {MatTableModule} from '@angular/material/table';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    MusicasComponent
  ],
  imports: [
    CommonModule,
    MusicasRoutingModule,
    MatTableModule,
    ScrollingModule
  ]
})
export class MusicasModule { }
