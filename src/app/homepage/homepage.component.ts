import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public latestReleases = [
    {
      trackLink: 'https://fanlink.to/NEVILLAR2',
      spotifyPlayerLink: 'https://open.spotify.com/embed/track/6r6UCXis4SXG65vkjbkvOw',
      coverPath: 'url("/assets/images/somebody_say_yeah_cover.jpg")',
    },
    {
      trackLink: 'https://fanlink.to/DESTROYTHECLUB',
      spotifyPlayerLink: 'https://open.spotify.com/embed/track/2FPMslCUnX3y1m6D68VVQd',
      coverPath: 'url("/assets/images/destroy_the_club_cover.jpg")',
    },
    {
      trackLink: 'https://fanlink.to/FATBEAT',
      spotifyPlayerLink: 'https://open.spotify.com/embed/track/54YqR7dDwm0IMb0rzLftqG',
      coverPath: 'url("/assets/images/fat_beat_cover.jpg")',
    },
    {
      trackLink: 'https://fanlink.to/S2e',
      spotifyPlayerLink: 'https://open.spotify.com/embed/track/5HxmhAZveQdz33SMrsMmMe',
      coverPath: 'url("/assets/images/oldschool_rave_cover.jpg")',
    },
    {
      trackLink: 'https://fanlink.to/NEVILLAR',
      spotifyPlayerLink: 'https://open.spotify.com/embed/track/1zaSpVK6JwTTDPqf1iYAVt',
      coverPath: 'url("/assets/images/boom_cover.jpg")',
    },
    {
      trackLink: 'https://fanlink.to/GETEMHIGH',
      spotifyPlayerLink: 'https://open.spotify.com/embed/track/7xmpDC79qagOhYYumOplLz',
      coverPath: 'url("/assets/images/get_em_high_cover.jpg")',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
