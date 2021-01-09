import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MusicComponent} from './music/music.component';
import {VideoComponent} from './video/video.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'music', component: MusicComponent},
  {path: 'video', component: VideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
