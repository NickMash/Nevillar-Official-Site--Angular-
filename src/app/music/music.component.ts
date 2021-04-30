import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  public allMusic = [
    {
      trackLink: 'https://fanlink.to/NEVILLAR2',
      trackName: 'Nevillar - Somebody Say Yeah',
      coverPath: 'url("/assets/images/somebody_say_yeah_cover.jpg")no-repeat',
    },
    {
      trackLink: 'https://fanlink.to/DESTROYTHECLUB',
      trackName: 'Nevillar - Destroy The Club',
      coverPath: 'url("/assets/images/destroy_the_club_cover.jpg") 100% 100% no-repeat',
    },
    {
      trackLink: 'https://fanlink.to/FATBEAT',
      trackName: 'Nevillar - Fat Beat',
      coverPath: 'url("/assets/images/fat_beat_cover.jpg") 100% 100% no-repeat',
    },
    {
      trackLink: 'https://fanlink.to/S2e',
      trackName: 'Nevillar - Oldschool Rave',
      coverPath: 'url("/assets/images/oldschool_rave_cover.jpg") 100% 100% no-repeat',
    },
    {
      trackLink: 'https://fanlink.to/NEVILLAR',
      trackName: 'Nevillar - Boom',
      coverPath: 'url("/assets/images/boom_cover.jpg") 100% 100% no-repeat',
    },
    {
      trackLink: 'https://fanlink.to/GETEMHIGH',
      trackName: 'Nevillar - Get Em High',
      coverPath: 'url("/assets/images/get_em_high_cover.jpg") 100% 100% no-repeat',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
