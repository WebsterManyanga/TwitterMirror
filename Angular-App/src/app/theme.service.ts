import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkMode = true;
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

}
