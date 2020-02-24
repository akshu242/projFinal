import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustCliaComponent } from './show-cust-clia.component';

describe('ShowCustCliaComponent', () => {
  let component: ShowCustCliaComponent;
  let fixture: ComponentFixture<ShowCustCliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustCliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustCliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
