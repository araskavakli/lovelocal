import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private isAuthenticated: boolean;
  private isLoggedIn: boolean;

  constructor(private loginService: LoginService) {

    this.loginService.isAuthenticated.subscribe(responseBool => {
      this.isAuthenticated = responseBool;
    });
    this.loginService.isLoggedIn.subscribe(responseBool => {
      this.isLoggedIn = responseBool;
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // const headers = new HttpHeaders(this.loginService.credentials ? this.loginService.createUserToken(this.loginService.credentials) : {});
    //
    // if (this.isAuthenticated || this.isLoggedIn) {
    //   const modifiedRequest = request.clone({
    //       withCredentials: true,
    //       headers    // does not work on refresh, because credentials got reset
    //     }
    //   );
    //   return next.handle(modifiedRequest);
    // }
    return next.handle(request);
  }

}
