import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReplaySubject} from 'rxjs';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';

// const apiRoot = 'http://localhost:8080';
const apiRoot = 'https://lovelocal.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isAuthenticated = new ReplaySubject<boolean>(1);
  public isLoggedIn = new ReplaySubject<boolean>(1);
  public userToken: any;
  public credentials = {};

  constructor(private http: HttpClient,
              private router: Router) {

    this.isAuthenticated.next(false);
    this.isLoggedIn.next(JSON.parse(sessionStorage.getItem('loggedIn')));
  }

  authenticate(credentials, callback): void {

    const headers = new HttpHeaders(credentials ? this.createUserToken(credentials) : {});

    this.http.get(`${apiRoot}/login`, {withCredentials: true, headers}).subscribe(response => {
      if (response['name']) {
        this.isAuthenticated.next(true);
        this.isLoggedIn.next(true);
        sessionStorage.setItem('loggedIn', 'true');
        this.credentials = credentials;
        this.router.navigateByUrl('/');
      } else {
        this.isAuthenticated.next(false);
        this.isLoggedIn.next(false);
      }
      return callback & callback();
    });

  }

  logout(): void {
    this.isAuthenticated.next(false);
    this.isLoggedIn.next(false);
    sessionStorage.removeItem('loggedIn');
    Cookie.deleteAll();
  }

  createUserToken(credentials): any {
    this.userToken = {authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)};
    return this.userToken;
  }

}
