import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Tweet } from '../tweet';
import { UserService } from '../user.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [MatIconModule, CommonModule],
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
    headerPhoto: '',
    followers: [],
    following: [],
  };
  likedBy = '';
  constructor(private usersService: UserService) {}

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
}
