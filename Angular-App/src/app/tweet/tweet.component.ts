import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Tweet } from '../tweet';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.scss'
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet = new Tweet('me', 'hi')
  userInfo: User = {
    name: '',
    username: '',
    bio: '',
    photo: ''
  }
  constructor(private usersService: UserService) {
  }


  ngOnInit(): void {
    const i = this.usersService.OtherUsers.findIndex(user => user.username === this.tweet.userId);
    console.log(this.usersService.OtherUsers);
    console.log(this.tweet.userId);
    if (i !== -1) {
      this.userInfo = Object.assign({}, this.usersService.OtherUsers[i])
    }

    
  }
}

