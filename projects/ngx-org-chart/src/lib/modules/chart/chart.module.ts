import { NgModule } from '@angular/core';
import { NodeModule } from '../node/node.module';
import { ComponentsModule } from '../../../components/components.module';
import { ChartComponent } from './chart.component';

@NgModule({
  imports: [
    ComponentsModule,
    NodeModule
  ],
  declarations: [
    ChartComponent
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }
