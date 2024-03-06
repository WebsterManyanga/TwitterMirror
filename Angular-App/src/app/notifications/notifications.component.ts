import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  mentionsActive = true;

  onViewMentions(view: boolean) {
    this.mentionsActive = view;
  }

}
