import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { ChartComponent } from './chart.component';

@NgModule({
  imports: [
    ComponentsModule
  ],
  declarations: [
    ChartComponent
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }
