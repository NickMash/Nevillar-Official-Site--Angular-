import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public socialLinks = [
    {
      itemName: 'spotify_icon',
      itemHiddenName: 'spotify_hidden_icon',
      link: 'https://open.spotify.com/artist/1OjL7vV1j8HPenNxeQcTnz',
    },
    {
      itemName: 'instagram_icon',
      itemHiddenName: 'instagram_hidden_icon',
      link: 'https://www.instagram.com/nevillar',
    },
    {
      itemName: 'facebook_icon',
      itemHiddenName: 'facebook_hidden_icon',
      link: 'https://www.facebook.com/nevillarofficial',
    },
    {
      itemName: 'youtube_icon',
      itemHiddenName: 'youtube_hidden_icon',
      link: 'https://www.youtube.com/c/nevillar',
    },
    {
      itemName: 'twitter_icon',
      itemHiddenName: 'twitter_hidden_icon',
      link: 'https://twitter.com/nevillarmusic',
    },
    {
      itemName: 'soundcloud_icon',
      itemHiddenName: 'soundcloud_hidden_icon',
      link: 'https://soundcloud.com/nevillar',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
