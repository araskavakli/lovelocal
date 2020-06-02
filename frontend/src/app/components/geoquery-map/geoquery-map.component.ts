import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import * as geofirex from 'geofirex';
import {MapStyles} from './styles';
import {StoreService} from '../../services/store.service';
import {Store} from '../../model/store';

@Component({
  selector: 'app-geoquery-map',
  templateUrl: './geoquery-map.component.html',
  styleUrls: ['./geoquery-map.component.css']
})
export class GeoqueryMapComponent implements OnInit {

  geo = geofirex.init(firebase);
  radius$: Observable<number>;
  userLocation: any;

  sliderValue = 0.30;
  sliderContinuousValue = 0.30;

  markers: Store[];
  mapStyles = MapStyles.mapStyles;

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {

    this.radius$ = this.storeService.radiusSubject.asObservable();
    this.storeService.stores$.subscribe(stores => {
      this.markers = stores;
      this.userLocation = this.storeService.userLocation;
    });
  }

  increaseRadius(radius: number): void {
    this.storeService.increaseRadius(radius);
  }

  onInputChange(event: any) {
    this.radius$ = of(event.value);
    this.sliderContinuousValue = event.value;
  }

  onChange(event: any) {
    this.sliderValue = event;
    this.increaseRadius(event);
  }
}
