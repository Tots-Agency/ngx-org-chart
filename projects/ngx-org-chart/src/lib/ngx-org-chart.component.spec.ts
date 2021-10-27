import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOrgChartComponent } from './ngx-org-chart.component';

describe('NgxOrgChartComponent', () => {
  let component: NgxOrgChartComponent;
  let fixture: ComponentFixture<NgxOrgChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxOrgChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOrgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
