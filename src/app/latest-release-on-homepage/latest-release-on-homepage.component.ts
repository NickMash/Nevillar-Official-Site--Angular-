import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-latest-release-on-homepage',
  templateUrl: './latest-release-on-homepage.component.html',
  styleUrls: ['./latest-release-on-homepage.component.scss']
})
export class LatestReleaseOnHomepageComponent {

  public padding;
  public opacity;

  @Input() trackLink;
  @Input() spotifyPlayerLink;
  @Input() coverPath;

}
