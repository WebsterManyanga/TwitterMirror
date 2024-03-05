import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TweetComponent } from '../tweet/tweet.component';

@Component({
  selector: 'app-tweets-page',
  standalone: true,
  imports: [TweetComponent],
  templateUrl: './tweets-page.component.html',
  styleUrl: './tweets-page.component.scss'
})
export class TweetsPageComponent {

}
