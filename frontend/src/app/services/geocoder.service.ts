import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GeocoderService {


  constructor(private http: HttpClient) {
  }

  searchAddress(address: any): Observable<any> {

    const headers = new HttpHeaders()
      .set('Secret-Token' , environment.cloudFunctionToken);

    return this.http
      .get<any>(`https://europe-west3-for-local-app.cloudfunctions.net/getLocationFromAddress/?q=${address}`,
        {headers});
  }

}
