import { NgModule } from '@angular/core';
import { AvatarModule } from './avatar/avatar.module';
import { InfoModule } from './info/info.module';

@NgModule({
  imports: [
    AvatarModule,
    InfoModule
  ],
  exports: [
    AvatarModule,
    InfoModule
  ]
})
export class ComponentsModule { }
