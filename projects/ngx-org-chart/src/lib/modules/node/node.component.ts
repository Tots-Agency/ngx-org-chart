import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-org-chart-node',
  templateUrl: './node.component.html',
  styleUrls: []
})
export class NodeComponent {
  @Input()
  imageUrl = '';

  @Input()
  label = '';

  @Input()
  fullname = '';

  @Input()
  title = '';
}
