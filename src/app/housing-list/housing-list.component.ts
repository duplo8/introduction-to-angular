import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  isSelected: boolean = false;
  selectedResult: HousingLocation = {
    name: "",
    city: "",
    state: "",
    photo: "",
    availableUnits: 0,
    wifi: false,
    laundry: false,
    parking: false,
    distanceFromCenter: 0,
  }
  
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  constructor() { }
  ngOnInit(): void { }

  searchHousingLocations(searchText: string) {    //fills in the result object with all of the location that match 
    if (!searchText) return;
    this.results = this.locationList
      .filter(
        location => location.city.toLowerCase().includes(searchText.toLowerCase())
      );
  }
  
  /*
  selectHousingLocation(location: HousingLocation) {  //"emits" the selected location (HousingLocation type) as selectedLocationEvent (OUTPUT)
    this.selectedLocationEvent.emit(location);        //it gets received by "app.component.html" and passed to updateSelectedLocation(app.component.ts)
  }                                               //by being emitted it stays in the global namespace (?)
*/

  
  //try without emitting  (making it in this module)
  selectHousingLocation(location: HousingLocation) {
    this.isSelected = true;
    this.selectedResult = location;
  }

}
