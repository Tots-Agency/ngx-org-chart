import { Component, Input } from '@angular/core';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: []
})
export class NodeComponent {
  @Input()
  imageUrl?: string;

  @Input()
  fullname!: string;

  @Input()
  title?: string;

  @Input()
  department?: string;
}
