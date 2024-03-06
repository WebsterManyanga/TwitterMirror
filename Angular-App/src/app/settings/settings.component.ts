import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
