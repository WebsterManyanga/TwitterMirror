import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo = {
    name: 'Icarus',
    username: 'spaceCadet',
    bio: 'Flying to the sun soon',
    photo: '../assets/dp.jpeg',
  };

  OtherUsers: User[] = [
    {
      name: 'Bob Marley',
      username: 'bobmarley',
      bio: "Woke up this morning with a tweet on my mind. Let's get together and feel alright. 🌞🎶 #BuffaloSoldier",
      photo: '../../assets/bobMarley.jpeg',
    },
    {
      name: 'William Shakespeare',
      username: 'shakespeare',
      bio: 'To thine own bio be true. In fair Twitterland, where we lay our scene. Expect jokes, jests, and maybe a bit of iambic sass.',
      photo: '../../assets/shakespeare.jpeg',
    },
    {
      name: 'Ludwig Beethoven',
      username: 'beethoven',
      bio: '🎵 Deaf composer making noise since 1770',
      photo: '../../assets/beethoven.jpeg',
    },
    {
      name: 'Pablo Picasso',
      username: 'picasso',
      bio: 'Blue period enthusiast, occasional painter. #BrushStrokesAndPunchlines',
      photo: '../../assets/picasso.jpeg',
    },
    {
      name: 'Isaac Newton',
      username: 'callMeIsaac',
      bio: "Gravity's favorite nemesis. Inventor of calculus, connoisseur of apples. #PhysicsLover #GravityIsReal",
      photo: '../../assets/newton.jpeg',
    },
    {
      name: 'Spongebob',
      username: 'spongebob',
      bio: 'Living in a pineapple under the sea, but tweeting from the surface world! 🍍☀️ #SpongeBobLife',
      photo: '../../assets/spongebob.jpeg',
    },
    {
      name: 'Mr Krabs',
      username: 'mrKrabs',
      bio: "Official Twitter account of the Krusty Krab's finest, Eugene Krabs! In the business of making Krabby Patties and counting me money. #BikiniBottomBaller 💰🍔",
      photo: '../../assets/mrKrabs.jpeg',
    },
    {
      name: 'Black Panther',
      username: 'tchala',
      bio: '🐾 King of Wakanda by day, Twitter warrior by night. 🌙 Vibranium suit, sharp wit, and a penchant for justice. #WakandaForever #WittyPanther',
      photo: '../../assets/blackPanther.jpeg',
    },
  ];
}
