import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipeModule } from '../../shared/pipes/pipe.module';
import { AvatarComponent } from './avatar.component';

@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule { }
