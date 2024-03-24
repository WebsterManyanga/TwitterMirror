import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './ProfileSection/profile/profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
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
