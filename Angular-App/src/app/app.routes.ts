import { Routes } from '@angular/router';
import { TweetsPageComponent } from './tweets-page/tweets-page.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './ProfileSection/profile/profile.component';

export const routes: Routes = [
  {
    component: TweetsPageComponent,
    path: ''
  },
  {
    component: NotificationsComponent,
    path: 'notifications'
  },
  {
    component: SettingsComponent,
    path: 'settings'
  },
  {
    component: MessagesComponent,
    path: 'messages'
  },
  {
    component: SearchComponent,
    path: 'search'
  },
  {
    component: ProfileComponent,
    path:'profile'
  }
];
