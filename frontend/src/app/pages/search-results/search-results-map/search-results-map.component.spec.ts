import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsMapComponent } from './search-results-map.component';

describe('SearchResultsMapComponent', () => {
  let component: SearchResultsMapComponent;
  let fixture: ComponentFixture<SearchResultsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
