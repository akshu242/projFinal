import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustHealthComponent } from './add-cust-health.component';

describe('AddCustHealthComponent', () => {
  let component: AddCustHealthComponent;
  let fixture: ComponentFixture<AddCustHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
