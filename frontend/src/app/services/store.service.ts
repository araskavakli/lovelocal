import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, first, map, shareReplay, switchMap} from 'rxjs/operators';
import {Store} from '../model/store';
import {LocationService} from './location.service';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import * as geofirex from 'geofirex';
import {convertSnap} from './db-utils';
import {addMapIconToStore} from './icon-factory';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  storesSubject: Observable<any>;

  stores: Store[];
  stores$: Observable<Store[]>;
  geo = geofirex.init(firebase);
  radiusSubject = new BehaviorSubject(0.30);
  userLocation: any;


  constructor(private db: AngularFirestore,
              private locationService: LocationService) {


    this.stores$ = this.radiusSubject.pipe(
      switchMap((radius) => {

        return this.locationService.getUserLocation().pipe(
          switchMap(res => {
            this.userLocation = res.coords;
            return this.userLocation;
          }),

          catchError(() => {
            this.userLocation = this.locationService.userDefaultLocation;
            return of(this.userLocation);
          }),

          switchMap(userLocation => {
              let center = this.geo.point(userLocation.latitude, userLocation.longitude);
              let field = 'position';

              let storesQuery = firebase.firestore().collection('stores');
              let geoQuery = this.geo.query(storesQuery);

              return geoQuery.within(center, radius, field);
            }
          ),
          map(stores => {
            return addMapIconToStore(stores);
          }),
        );
      }),
      shareReplay(1)
    );

  }

  geoQueryCoordinates(userLocation: any, radius: number): Observable<any> {
    let center = this.geo.point(userLocation.lat, userLocation.lng);
    let field = 'position';

    let storesQuery = firebase.firestore().collection('stores');
    let geoQuery = this.geo.query(storesQuery);

    return geoQuery.within(center, radius, field).pipe(
      map(stores => {
          return addMapIconToStore(stores);
        }
      )
    );
  }

  increaseRadius(radius: number) {
    this.radiusSubject.next(radius);
  }

  findStoreById(id: string): Observable<any> {

    return this.db.doc(`stores/${id}`)
      .snapshotChanges()
      .pipe(
        map(
          snap => {
            return convertSnap<Store>(snap);
          }
        ),
        first(),
      );

  }

}
