import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MusicComponent } from './music/music.component';
import { BiographyComponent } from './biography/biography.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    AvatarComponent,
    LoginButtonComponent,
    NavigationComponent,
    MenuItemComponent,
    HomepageComponent,
    MusicComponent,
    BiographyComponent,
    VideoComponent,
    ContactComponent,
    FooterComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
