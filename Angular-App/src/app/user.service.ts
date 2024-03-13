import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userInfo = {
    name: 'Icarus',
    username: 'spaceCadet',
    bio: 'Flying to the sun soon',
    photo: '../assets/dp.jpeg'
  }
  
}
