import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  adminItems = ['EDIT LATEST RELEASES', 'EDIT MUSIC', 'EDIT BIOGRAPHY', 'EDIT VIDEO', 'EDIT CONTACT'];
  constructor() { }

  ngOnInit(): void {
  }

}
