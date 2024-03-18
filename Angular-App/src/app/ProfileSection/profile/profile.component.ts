import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavComponent } from '../nav/nav.component';
import { UserService } from '../../user.service';
import { User } from '../../user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatIcon, NavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {

  user:User = {
    name: '',
    username: '',
    bio: '',
    photo: '',
    headerPhoto: '',
    following: [],
    followers: []
  }
  constructor(private userService: UserService) {
    Object.assign(this.user, userService.userInfo);
  }

}
