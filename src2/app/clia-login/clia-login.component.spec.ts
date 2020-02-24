import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliaLoginComponent } from './clia-login.component';

describe('CliaLoginComponent', () => {
  let component: CliaLoginComponent;
  let fixture: ComponentFixture<CliaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
