import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socialLinks = [
    {
      imagePath: '/assets/images/soundcloud_icon.png',
      link: 'https://soundcloud.com/nevillar',
    },
    {
      imagePath: '/assets/images/facebook_icon.png',
      link: 'https://www.facebook.com/Nevillar',
    },
    {
      imagePath: '/assets/images/instagram_icon.png',
      link: 'https://www.instagram.com/nevillar',
    },
    {
      imagePath: '/assets/images/youtube_icon.png',
      link: 'https://www.youtube.com/c/nevillar',
    },
    {
      imagePath: '/assets/images/twitter_icon.png',
      link: 'https://twitter.com/nevillarofficial',
    },
    {
      imagePath: '/assets/images/spotify_icon.png',
      link: 'https://open.spotify.com/artist/1OjL7vV1j8HPenNxeQcTnz',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
