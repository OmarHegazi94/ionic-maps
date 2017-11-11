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
<<<<<<< HEAD

        const map = new google.maps.Map(this.mapRef.nativeElement,options);

        // set timeout to change the map type 
        setTimeout(() => map.setMapTypeId('satellite'), 3000);

        // display marker
        this.addMarker(location, map);
    }

=======

        const map = new google.maps.Map(this.mapRef.nativeElement,options);

        // set timeout to change the map type 
        setTimeout(() => map.setMapTypeId('satellite'), 3000);

        // display marker
        this.addMarker(location, map);
    }

>>>>>>> 37f78af7b855d0dd9b1a66a2e6e8e572d4425c23
    //marker function
    addMarker(position, map) {
      return new google.maps.Marker({
        position,
        map
      });
    }
}

