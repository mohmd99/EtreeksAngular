import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  // moveMap(event: google.maps.MapMouseEvent) {
  //   if(event.latLng!= null)
  //   this.center = (event.latLng.toJSON());
  // }

  display : any;
  center: google.maps.LatLngLiteral = {lat: 31.9539, lng: 35.9106};
  zoom = 10;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPosition: google.maps.LatLngLiteral={lat: 31.9539, lng: 35.9106} ;

  select(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }
  
  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.markerPosition=event.latLng.toJSON();
  }

  ConfirmLocation(){

  }

}
