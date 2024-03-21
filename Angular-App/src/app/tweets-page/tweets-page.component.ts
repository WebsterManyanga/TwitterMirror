import { Component } from '@angular/core';
import { TweetComponent } from '../tweet/tweet.component';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tweets-page',
  standalone: true,
  imports: [TweetComponent, CommonModule,HeaderComponent],
  templateUrl: './tweets-page.component.html',
  styleUrl: './tweets-page.component.scss',
})
export class TweetsPageComponent {
  tweets: Tweet[] = [];
  constructor(
    private tweetsService: TweetsService,
    private userService: UserService
  ) {
    this.tweets = tweetsService.tweets.filter((tweet) =>
      userService.userInfo.following.includes(tweet.userId)
    );
  }
}
