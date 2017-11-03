import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiscountsComponent } from './view-discounts.component';

describe('ViewDiscountsComponent', () => {
  let component: ViewDiscountsComponent;
  let fixture: ComponentFixture<ViewDiscountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiscountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
