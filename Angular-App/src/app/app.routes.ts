import { Routes } from '@angular/router';
import { TweetsPageComponent } from './tweets-page/tweets-page.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const routes: Routes = [
  {
    component: TweetsPageComponent,
    path: ''
  },
  {
    component: NotificationsComponent,
    path: 'notifications'
  }
];
