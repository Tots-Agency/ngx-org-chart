import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-org-chart',
  templateUrl: './ngx-org-chart.component.html',
  styleUrls: []
})
export class NgxOrgChartComponent {
  @Input()
  imageUrl?: string;

  @Input()
  fullname!: string;

  @Input()
  title?: string;

  @Input()
  department?: string;
}
