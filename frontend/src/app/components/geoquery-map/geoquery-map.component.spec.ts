import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoqueryMapComponent } from './geoquery-map.component';

describe('GeoqueryMapComponent', () => {
  let component: GeoqueryMapComponent;
  let fixture: ComponentFixture<GeoqueryMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoqueryMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoqueryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
