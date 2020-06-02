import {Component} from '@angular/core';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lovelocal';

  public isAuthenticated: boolean;
  public isLoggedIn: boolean;



  constructor(private loginService: LoginService) {

    loginService.isAuthenticated.subscribe(responseBool => {
      this.isAuthenticated = responseBool;
    });

    loginService.isLoggedIn.subscribe(responseBool => {
      this.isLoggedIn = responseBool;
    });

  }

  logout(): void {
    this.loginService.logout();
  }

}
