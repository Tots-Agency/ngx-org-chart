import { Component, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: []
})
export class AvatarComponent {
  @Input()
  imageUrl?: string;

  @Input()
  fullname!: string;
}
