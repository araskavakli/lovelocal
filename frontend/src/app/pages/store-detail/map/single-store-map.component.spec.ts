import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStoreMapComponent } from './single-store-map.component';

describe('MapComponent', () => {
  let component: SingleStoreMapComponent;
  let fixture: ComponentFixture<SingleStoreMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStoreMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStoreMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
