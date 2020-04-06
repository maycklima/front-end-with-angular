import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoAwayDataBindComponent } from './two-away-data-bind.component';

describe('TwoAwayDataBindComponent', () => {
  let component: TwoAwayDataBindComponent;
  let fixture: ComponentFixture<TwoAwayDataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoAwayDataBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoAwayDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
