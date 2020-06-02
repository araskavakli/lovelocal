import {Component, OnInit, ViewChild} from '@angular/core';
import {StoreService} from 'src/app/services/store.service';

import {Router} from '@angular/router';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})


export class SearchBarComponent implements OnInit {

  formattedAddress = '';
  queryString: any;

  constructor(private storeService: StoreService,
              private router: Router) {
  }

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(41.060, -8.653), // SW
    new google.maps.LatLng(41.276, -8.563)); // NE

  options = {
    bounds: this.defaultBounds,
    strictBounds: true,
    componentRestrictions: {
      country: ['PT'],
    }
  };

  public handleAddressChange(address: Address) {
    this.formattedAddress = address.formatted_address;
    let addressUrl = address.url;
    this.queryString = addressUrl.substring(
      addressUrl.lastIndexOf('?q=') + 3,
      addressUrl.lastIndexOf('&')
    );
    this.router.navigateByUrl(`search/${this.queryString}`);
  }

  public searchAddress() {
    this.router.navigateByUrl(`search/${this.queryString}`);
  }

  ngOnInit(): void {
  }


}
