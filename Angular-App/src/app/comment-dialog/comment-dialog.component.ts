import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { User } from '../user';
import { DialogRef } from '@angular/cdk/dialog';
import { TweetComponent } from '../tweet/tweet.component';

@Component({
  selector: 'app-comment-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './comment-dialog.component.html',
})
export class CommentDialogComponent {
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

  disableButton = true;

  constructor(private userService: UserService) {
    Object.assign(this.user, userService.userInfo);
  }

  validateReply(reply: string) {
    this.disableButton = !reply;
    return this.disableButton;
  }
}
