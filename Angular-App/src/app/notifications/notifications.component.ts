import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  mentionsActive = true;

  onViewMentions(view: boolean) {
    this.mentionsActive = view;
  }

}
