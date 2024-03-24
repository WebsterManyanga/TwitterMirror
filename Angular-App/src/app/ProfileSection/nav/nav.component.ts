import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { TweetsPageComponent } from '../../tweets-page/tweets-page.component';
import { CommonModule } from '@angular/common';
import { TweetsService } from '../../tweets.service';
import { Tweet } from '../../tweet';
import { TweetComponent } from '../../tweet/tweet.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatTabsModule, TweetsPageComponent,CommonModule, TweetComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  tweets:Tweet[] = [];
  likes = 0;

  constructor(public tweetsService:TweetsService) {
    this.tweets = tweetsService.tweets;
  }

}
