import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './ProfileSection/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: ListsComponent,
    path: 'lists'
  },
  {
    component: SettingsComponent,
    path: 'settings'
  },
  {
    component: ProfileComponent,
    path:'profile'
  }
];
