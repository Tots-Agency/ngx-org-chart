import { NgModule } from '@angular/core';
import { AbbreviationPipe } from './abbreviation.pipe';

@NgModule({
  declarations: [
    AbbreviationPipe
  ],
  exports: [
    AbbreviationPipe
  ]
})
export class PipeModule { }
