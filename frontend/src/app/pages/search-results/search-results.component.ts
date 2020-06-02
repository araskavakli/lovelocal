import {Component, OnInit} from '@angular/core';
import {Store} from '../../model/store';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../services/store.service';
import {GeocoderService} from '../../services/geocoder.service';
import {share, shareReplay, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public stores: Store[];
  public location;
  public queryString;

  constructor(private route: ActivatedRoute,
              private geocoderService: GeocoderService,
              private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.getStores(0.30);
  }

  getStores(radius: number) {

    this.queryString = this.route.snapshot.paramMap.get('queryString');
    this.geocoderService.searchAddress(this.queryString).pipe(
      switchMap(location => {
        this.location = location;
        return this.storeService.geoQueryCoordinates(location, radius);
      }),
      shareReplay(1)
    ).subscribe(stores => this.stores = stores);
  }

  increaseRadius(radius: number) {
    this.getStores(radius);
  }

}
