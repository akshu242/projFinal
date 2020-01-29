import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPolByCidComponent } from './show-pol-by-cid.component';

describe('ShowPolByCidComponent', () => {
  let component: ShowPolByCidComponent;
  let fixture: ComponentFixture<ShowPolByCidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPolByCidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPolByCidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
