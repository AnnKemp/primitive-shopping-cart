import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

// key for CHVOxBhwGMvtRCuGizEp for the here.com map
  constructor() {}

  ngOnInit(): void {
    let L;
    let mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYW5ua2VtcCIsImEiOiJja2JycDg0MDMyNjJpMndwOXRlYWd3enA3In0.UIG13B0o0gHaSQh-a_9iTg'
    }).addTo(mymap);
  }
}
