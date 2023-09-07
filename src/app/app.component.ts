import { Component } from '@angular/core';
import { HousingLocation } from './housing-list/housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'fairhouse';


  housingLocationList: HousingLocation[] = [
    {
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
      parking: false,
      distanceFromCenter: 10,
    },
    {
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
      parking: true,
      distanceFromCenter: 10000,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
      parking: false,
      distanceFromCenter: 0,
    },
  ];
/*
  selectedLocation: HousingLocation | undefined;
  updateSelectedLocation(location: HousingLocation) {   //takes the selected location from the emitted Event
    this.selectedLocation = location;                 //and saves it into "selectedLocation"
  }*/

}
