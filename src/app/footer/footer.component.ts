import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  latitude = -6.18;
  longitude = 106.9;
  latitude1 = 1.3;
  longitude1 = 103.8;
  constructor() {
  }

  ngOnInit() {
  }

}
