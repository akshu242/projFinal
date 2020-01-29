import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustAdddressComponent } from './add-cust-adddress.component';

describe('AddCustAdddressComponent', () => {
  let component: AddCustAdddressComponent;
  let fixture: ComponentFixture<AddCustAdddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustAdddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustAdddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
