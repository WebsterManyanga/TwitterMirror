import { Component, OnChanges } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { TweetsPageComponent } from '../../tweets-page/tweets-page.component';
import { CommonModule } from '@angular/common';
import { TweetsService } from '../../tweets.service';
import { Tweet } from '../../tweet';
import { TweetComponent } from '../../tweet/tweet.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatTabsModule, TweetsPageComponent,CommonModule, TweetComponent, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  tweets:Tweet[] = [];
  likedTweets:Tweet[] = [];

  constructor(public tweetsService:TweetsService) {
    this.tweets = tweetsService.tweets;
    this.likedTweets = this.tweets.filter(tweet => tweet.liked);

  }

  changeTab() {
    this.likedTweets = this.tweets.filter(tweet => tweet.liked);
    console.log(this.likedTweets);
  }
  



}
