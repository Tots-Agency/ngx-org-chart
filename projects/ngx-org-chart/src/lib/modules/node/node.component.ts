import { Component, Input } from '@angular/core';
import { IChartNode } from '../../../utils/interfaces';

@Component({
  selector: 'ngx-org-chart-node',
  templateUrl: './node.component.html',
  styleUrls: []
})
export class NodeComponent {
  @Input()
  chartNode!: IChartNode;
}
