import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: []
})
export class AvatarComponent {
  @Input()
  imageUrl = '';

  @Input()
  label = 'Avatar';
}
