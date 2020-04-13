import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencesSummaryComponent } from './expences-summary.component';

describe('ExpencesSummaryComponent', () => {
  let component: ExpencesSummaryComponent;
  let fixture: ComponentFixture<ExpencesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
