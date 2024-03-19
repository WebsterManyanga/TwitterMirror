import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Tweet } from '../tweet';
import { UserService } from '../user.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { RepostDialog1Component } from '../repost-dialog1/repost-dialog1.component';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.scss',
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet = new Tweet('me', 'hi');
  userInfo: User = {
    name: '',
    username: '',
    bio: '',
    photo: '',
    created: '',
    headerPhoto: '',
    followers: [],
    following: [],
  };
  liked = false;
  likedBy = '';
  constructor(private usersService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    const i = this.usersService.OtherUsers.findIndex(
      (user) => user.username === this.tweet.userId
    );
    if (i !== -1) {
      this.userInfo = Object.assign({}, this.usersService.OtherUsers[i]);
    }
    this.likedBy = this.randomLike();
  }

  randomLike() {
    let i = Math.round(Math.random() * this.tweet.likes.length);
    let j = this.usersService.OtherUsers.findIndex(
      (user) => user.username === this.tweet.likes[i]
    );
    return j !== -1 ? this.usersService.OtherUsers[j].name : '';
  }

  like() {
    if (!this.liked) {
      this.tweet.likes.push(this.userInfo.username);
    } else {
      const i = this.tweet.likes.findIndex(
        (username) => username === this.userInfo.username
      );
      this.tweet.likes.splice(i, 1);
    }

    this.liked = !this.liked;
  }
  openCommentDialog() {
    const dialogRef = this.dialog.open(CommentDialogComponent,{
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openRepostDialog() {
    const dialogRef = this.dialog.open(RepostDialog1Component,{
      maxWidth: '100vw',
      width: '100%',
      position: {bottom: '0'}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



