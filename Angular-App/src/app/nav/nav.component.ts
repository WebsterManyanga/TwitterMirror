import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TweetingComponent } from '../tweeting/tweeting.component';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  user: User = {
    name: '',
    username: '',
    bio: '',
    photo: '',
    headerPhoto: '',
    followers: [],
    following: [],
  };

  constructor(public dialog: MatDialog, private userService: UserService) {
    Object.assign(this.user, this.userService.userInfo);
  }

  startTweet() {
    const dialogRef = this.dialog.open(TweetingComponent, {
      width: '100vw',
      height: '100%',
    });
  }
}
