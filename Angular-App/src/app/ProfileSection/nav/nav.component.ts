import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { TweetsPageComponent } from '../../tweets-page/tweets-page.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatTabsModule, TweetsPageComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
