import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatIcon, NavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
