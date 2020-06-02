import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import {MatSliderModule} from '@angular/material/slider'

import {AgmCoreModule} from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {StoreListComponent} from './components/store-list/store-list.component';
import {StoreCardComponent} from './components/store-card/store-card.component';
import {SignUpBarComponent} from './components/sign-up-bar/sign-up-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './pages/login/login.component';
import {LoginService} from './services/login.service';
import {TokenInterceptor} from './services/token.interceptor';
import {MainMapComponent} from './components/main-map/main-map.component';
import {LocationService} from './services/location.service';
import {StoreDetailComponent} from './pages/store-detail/store-detail.component';
import {ReviewComponent} from './pages/store-detail/review/review.component';
import {SingleStoreMapComponent} from './pages/store-detail/map/single-store-map.component';
import {CarouselComponent} from './pages/store-detail/carousel/carousel.component';
import {StoreService} from './services/store.service';
import {GeoqueryMapComponent} from './components/geoquery-map/geoquery-map.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../firestore-db/environment';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchResultsMapComponent } from './pages/search-results/search-results-map/search-results-map.component';
import {GeocoderService} from './services/geocoder.service';


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchBarComponent,
    NavBarComponent,
    StoreListComponent,
    StoreCardComponent,
    SignUpBarComponent,
    FooterComponent,
    LoginComponent,
    MainMapComponent,
    StoreDetailComponent,
    ReviewComponent,
    SingleStoreMapComponent,
    CarouselComponent,
    GeoqueryMapComponent,
    SearchResultsComponent,
    SearchResultsMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPLSbbCRXUmVr-qnf7J-t31aduj5J5Z3A'
    }),
    AgmJsMarkerClustererModule,
    GooglePlaceModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [LoginService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    LocationService,
    StoreService,
    GeocoderService
  ],
  bootstrap: [AppComponent,]
})
export class AppModule {}
