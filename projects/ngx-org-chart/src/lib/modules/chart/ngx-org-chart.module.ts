import { NgModule } from '@angular/core';
import { NodeModule } from '../../components/node/node.module';
import { NgxOrgChartComponent } from './ngx-org-chart.component';



@NgModule({
  imports: [
    NodeModule
  ],
  declarations: [
    NgxOrgChartComponent
  ],
  exports: [
    NgxOrgChartComponent
  ]
})
export class NgxOrgChartModule { }
