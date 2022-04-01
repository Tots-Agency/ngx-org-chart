import { Component, Input } from '@angular/core';
import { Layout } from '../../../utils/types';
import { IChart } from '../../../utils/interfaces';

@Component({
  selector: 'ngx-org-chart',
  templateUrl: './chart.component.html',
  styleUrls: []
})
export class ChartComponent {
  @Input()
  layout!: Layout;

  @Input()
  data!: IChart;
}
