import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NodeModule } from '../node/node.module';
import { ChartComponent } from './chart.component';

@NgModule({
  imports: [
    CommonModule,
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
