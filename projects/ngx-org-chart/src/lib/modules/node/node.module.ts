import { NgModule } from '@angular/core';
import { NodeComponent } from './node.component';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule
  ],
  declarations: [
    NodeComponent
  ],
  exports: [
    NodeComponent
  ]
})
export class NodeModule { }
