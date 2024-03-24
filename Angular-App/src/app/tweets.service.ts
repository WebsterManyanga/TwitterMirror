import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  tweets: Tweet[] = [
    new Tweet(
      'bobmarley',
      'Woke up this morning feeling irie... until I realized it was Monday. Who needs Mondays anyway? #NoMondays #BobMarleyProblems',
      1,
      ['tchala', 'mrKrabs', 'picasso']
    ),
    new Tweet(
      'shakespeare',
      'To block or not to block, that is the question.',
      2,
      ['callMeIsaac', 'spongebob']
    ),
    new Tweet(
      'beethoven',
      "When you're trying to write a symphony but your neighbor's dog won't stop barking... #ComposerProblems #NeedSomeQuiet",
      3,
      ['shakespeare', 'picasso', 'bobmarley', 'mrKrabs', 'tchala']
    ),
    new Tweet(
      'picasso',
      "Just finished painting my latest masterpiece. Critics are already debating whether it's avant-garde or just me sneezing on the canvas. #AbstractOrAccidental",
      4
    ),
    new Tweet(
      'callMeIsaac',
      "Just discovered calculus. Sorry in advance to all future students who'll have to learn it! #MathMadness #CalculusCraziness",
      5,
      ['bobmarley', 'shakespeare']
    ),
    new Tweet(
      'spongebob',
      "When you're so excited to go jellyfishing, but then you realize you left your net at home... Rookie mistake, even for a sponge! #JellyfishBlues",
      6,
      ['spongebob']
    ),
    new Tweet(
      'mrKrabs',
      "Me money's feeling lonely. Any volunteers to keep it company? 💰 #MoneyTalks",
      7,
      ['spongebob']
    ),
    new Tweet(
      'tchala',
      'To the guy who tried to steal vibranium from Wakanda last night... Nice try. #FailedHeist #WakandaSecurity',
      8,
      ['shakespeare', 'callMeIsaac', 'bobMarley']
    ),
  ];


  constructor(public userService: UserService) {

  }

  addLike(liked: boolean, id: number) {
    const i = this.tweets.findIndex(tweet => tweet.id === id);

    if (liked) {
      this.tweets[i].likes.push(this.userService.userInfo.username);
      this.tweets[i].liked = true;
    } else {
      const j = this.tweets[i].likes.findIndex(user => user === this.userService.userInfo.name);
      this.tweets[i].likes.splice(j,1);
      this.tweets[i].liked = false;
    }

  }
}
