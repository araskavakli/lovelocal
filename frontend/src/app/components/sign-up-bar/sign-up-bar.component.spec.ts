import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBarComponent } from './sign-up-bar.component';

describe('SignUpBarComponent', () => {
  let component: SignUpBarComponent;
  let fixture: ComponentFixture<SignUpBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
