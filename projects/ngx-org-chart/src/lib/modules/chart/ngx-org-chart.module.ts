import { NgModule } from '@angular/core';
import { NodeModule } from '../../components/node/node.module';
import { NgxOrgChartComponent } from './ngx-org-chart.component';



@NgModule({
  declarations: [
    NgxOrgChartComponent
  ],
  imports: [
    NodeModule
  ],
  exports: [
    NgxOrgChartComponent
  ]
})
export class NgxOrgChartModule { }
