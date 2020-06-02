import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Store} from '../../../model/store';

import {MapStyles} from '../../../components/geoquery-map/styles';

@Component({
  selector: 'single-store-map',
  templateUrl: './single-store-map.component.html',
  styleUrls: ['./single-store-map.component.css']
})
export class SingleStoreMapComponent implements OnInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  @Input()
  public store: Store;

  mapStyles = MapStyles.mapStyles;

  constructor() {
  }

  ngOnInit(): void {
  }


}
