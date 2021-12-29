import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full' , redirectTo: 'musicas'},

  {
    path: 'musicas',
    loadChildren: () => import('./musicas/musicas.module').then(m => m.MusicasModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
