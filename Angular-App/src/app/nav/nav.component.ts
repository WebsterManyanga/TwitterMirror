import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TweetingComponent } from '../tweeting/tweeting.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(public dialog: MatDialog) {}

  startTweet() {
    const dialogRef = this.dialog.open(TweetingComponent, {
      width: '100vw',
      height: '100%',
    });
  }
}
