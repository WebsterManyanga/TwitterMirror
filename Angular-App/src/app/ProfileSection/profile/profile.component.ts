import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavComponent } from '../nav/nav.component';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatIcon, NavComponent, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {

  user:User = {
    name: '',
    username: '',
    bio: '',
    photo: '',
    created: '',
    headerPhoto: '',
    following: [],
    followers: []
  }
  constructor(private userService: UserService) {
    Object.assign(this.user, userService.userInfo);
  }

}
