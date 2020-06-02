import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {StoreListComponent} from './components/store-list/store-list.component';
import {StoreCardComponent} from './components/store-card/store-card.component';
import {SignUpBarComponent} from './components/sign-up-bar/sign-up-bar.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {MainMapComponent} from './components/main-map/main-map.component';
import {FooterComponent} from './components/footer/footer.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {LoginComponent} from './pages/login/login.component';
import {StoreDetailComponent} from './pages/store-detail/store-detail.component';
import {CarouselComponent} from './pages/store-detail/carousel/carousel.component';
import {ReviewComponent} from './pages/store-detail/review/review.component';
import {SingleStoreMapComponent} from './pages/store-detail/map/single-store-map.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lovelocal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lovelocal');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('lovelocal app is running!');
  });
});
