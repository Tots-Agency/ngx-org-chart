import { TestBed } from '@angular/core/testing';

import { NgxOrgChartService } from './ngx-org-chart.service';

describe('NgxOrgChartService', () => {
  let service: NgxOrgChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOrgChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
