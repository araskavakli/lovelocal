import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Type} from '@angular/core';
import {LocationService} from '../../services/location.service';
import {StoreService} from '../../services/store.service';
import {Store} from '../../model/store';
import * as MarkerClusterer from '@google/markerclusterer';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  stores: Store[];

  map: google.maps.Map;
  lat: number;
  lng: number;
  mapOptions: google.maps.MapOptions;
  bounds = new google.maps.LatLngBounds();
  markers = [];

  constructor(private storeService: StoreService,
              private locationService: LocationService) {

    this.locationService.userLocationSubject.subscribe(userLocation => {
      this.lat = userLocation.latitude;
      this.lng = userLocation.longitude;
    });

    this.storeService.storesSubject.subscribe(stores => {

      this.stores = stores;

      this.lat = this.locationService.userDefaultLocation.latitude;
      this.lng = this.locationService.userDefaultLocation.longitude;
      const defaultCoordinates = new google.maps.LatLng(this.lat, this.lng);

      this.mapOptions = {
        center: defaultCoordinates,
        zoom: 13,
        mapTypeControlOptions: {
          mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'styled_map']
        }
      };

    });

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.mapInitializer();

    for (let i = 0; i < this.stores.length; i++) {
      let coords = new google.maps.LatLng(this.stores[i].latitude, this.stores[i].longitude);
      let marker = new google.maps.Marker({

        position: coords,
        map: this.map,
        title: this.stores[i].name

      });
      this.markers.push(marker);
      this.bounds.extend(coords);
    }

    this.map.fitBounds(this.bounds);
    this.map.setCenter(this.bounds.getCenter());

  }

  mapInitializer() {

    var styledMapType = new google.maps.StyledMapType(
      [
        {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{color: '#c9b2a6'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{color: '#dcd2be'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ae9e90'}]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#93817c'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{color: '#a5b076'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#447530'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#f5f1e6'}]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{color: '#fdfcf8'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#f8c967'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#e9bc62'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{color: '#e98d58'}]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{color: '#db8555'}]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{color: '#806b63'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{color: '#8f7d77'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#ebe3cd'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{color: '#dfd2ae'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{color: '#b9d3c2'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#92998d'}]
        }
      ],
      {name: 'Styled Map'});

    // this.map = new google.maps.Map(this.gmap.nativeElement);
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');

    //Adding all markers
    this.loadAllMarkers();



    // google.maps.event.addListenerOnce(this.map, 'bounds_changed', function(event) {
    //   this.setZoom(this.getZoom() - 1);
    //   if (this.getZoom() < 16) {
    //     this.setZoom(14);
    //   }
    // });


  }

  loadAllMarkers() {

    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener('click', () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });

  }

}
