import {Injectable} from '@angular/core';
import {from, Observable, of, ReplaySubject} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public userLocationSubject = new ReplaySubject<any>(1);

  // Porto city center
  public userDefaultLocation = {
    latitude: 41.158102,
    longitude: -8.629125
  };

  public city;

  constructor(private http: HttpClient) {
  }

  getUserIpInfo(): Observable<any> {
    return this.http.get('https://ipinfo.io/?token=958dbf8849bacb');
  }

  getUserLocation(): Observable<any> {

    return this.getUserIpInfo().pipe(
      switchMap(ip => {
        if (ip.city === 'Porto') {

          return from(new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
          }));

        } else {
          return of(this.userDefaultLocation);
        }
      })
    );
  }

}
