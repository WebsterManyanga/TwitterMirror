import { Injectable } from '@angular/core';
import { Tweet } from './tweet';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  tweets: Tweet[] = [
    new Tweet(
      'bobmarley',
      'Woke up this morning feeling irie... until I realized it was Monday. Who needs Mondays anyway? #NoMondays #BobMarleyProblems',['tchala','mrKrabs','picasso']
    ),
    new Tweet('shakespeare', 'To block or not to block, that is the question.', ['callMeIsaac','spongebob']),
    new Tweet(
      'beethoven',
      "When you're trying to write a symphony but your neighbor's dog won't stop barking... #ComposerProblems #NeedSomeQuiet",['shakespeare', 'picasso', 'bobmarley', 'mrKrabs', 'tchala']
    ),
    new Tweet(
      'picasso',
      "Just finished painting my latest masterpiece. Critics are already debating whether it's avant-garde or just me sneezing on the canvas. #AbstractOrAccidental",
    ),
    new Tweet(
      'callMeIsaac',
      "Just discovered calculus. Sorry in advance to all future students who'll have to learn it! #MathMadness #CalculusCraziness",['bobmarley', 'shakespeare']
    ),
    new Tweet(
      'spongebob',
      "When you're so excited to go jellyfishing, but then you realize you left your net at home... Rookie mistake, even for a sponge! #JellyfishBlues",
      ['spongebob']
    ),
    new Tweet(
      'mrKrabs',
      "Me money's feeling lonely. Any volunteers to keep it company? 💰 #MoneyTalks",['spongebob']
    ),
    new Tweet(
      'tchala',
      'To the guy who tried to steal vibranium from Wakanda last night... Nice try. #FailedHeist #WakandaSecurity',
    ['shakespeare', 'callMeIsaac', 'bobMarley']
    ),
  ];


  
}
