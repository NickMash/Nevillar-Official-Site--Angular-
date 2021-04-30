import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {MusicComponent} from './music/music.component';
import {BiographyComponent} from './biography/biography.component';
import {VideoComponent} from './video/video.component';
import {ContactComponent} from './contact/contact.component';
import {AdministrationComponent} from './administration/administration.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'music', component: MusicComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'video', component: VideoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'administration', component: AdministrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
