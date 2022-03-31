import { Component, Input } from '@angular/core';
import { IChart } from '../../../utils/interfaces';

@Component({
  selector: 'ngx-org-chart',
  templateUrl: './chart.component.html',
  styleUrls: []
})
export class ChartComponent {
  @Input()
  data!: IChart;
}
