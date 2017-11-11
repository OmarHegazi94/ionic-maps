import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController) {}

    ionViewDidLoad() {
      this.showMap();
    }

    showMap() {
        // loaction lat long
        const location = new google.maps.LatLng(51.55316, -0.123258); 
            
        // map options
        const options = {
          center: location,
          zoom: 15,
          // streetViewControl: false,
          mapTypeId: 'terrain'  
        };

        const map = new google.maps.Map(this.mapRef.nativeElement,options);

        // set timeout to change the map type 
        setTimeout(() => map.setMapTypeId('satellite'), 3000);

        // display marker
        this.addMarker(location, map);
    }

    //marker function
    addMarker(position, map) {
      return new google.maps.Marker({
        position,
        map
      });
    }
}

