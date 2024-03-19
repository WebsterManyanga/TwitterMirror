import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './comment-dialog.component.html',
  styleUrl: './comment-dialog.component.scss'
})
export class CommentDialogComponent {

}
