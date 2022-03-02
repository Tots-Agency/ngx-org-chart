import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-info',
  templateUrl: './info.component.html',
  styleUrls: []
})
export class InfoComponent {
  @Input()
  fullname = '';

  @Input()
  title = '';
}
