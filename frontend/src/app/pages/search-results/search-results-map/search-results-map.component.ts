import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '../../../model/store';
import {MapStyles} from '../../../components/geoquery-map/styles';

@Component({
  selector: 'app-search-results-map',
  templateUrl: './search-results-map.component.html',
  styleUrls: ['./search-results-map.component.css']
})
export class SearchResultsMapComponent implements OnInit {

  @Input()
  lat: number;

  @Input()
  lon: number;

  sliderValue = 0.30;
  sliderContinuousValue = 0.30;

  @Output()
  radiusEmitter: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  markers: Store[];

  mapStyles = MapStyles.mapStyles;

  constructor() {
  }

  ngOnInit(): void {
  }

  increaseRadius(): void {
    this.radiusEmitter.emit(this.sliderValue);
  }

  onInputChange(event: any) {
    this.sliderContinuousValue = event.value;
  }

  onChange(event: any) {
    this.sliderValue = event;
    this.increaseRadius();
  }

}
