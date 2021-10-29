import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from '../avatar/avatar.module';
import { NodeComponent } from './node.component';

@NgModule({
  declarations: [
    NodeComponent
  ],
  imports: [
    CommonModule,
    AvatarModule
  ],
  exports: [
    NodeComponent
  ]
})
export class NodeModule { }
