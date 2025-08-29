import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-theme-change',
  templateUrl: './theme-change.component.html',
  styleUrls: ['./theme-change.component.scss']
})
export class ThemeChangeComponent implements OnInit {
  @Output() closeSetting = new EventEmitter<void>();

  constructor() { }

  

    closeSidebar() {
    this.closeSetting.emit();
  }

 currentTheme = 'pink'; // default theme

  ngOnInit() {
    this.currentTheme = localStorage.getItem('app-theme') || 'pink';
    this.applyTheme();
  }

  setColor(theme: string) {
    this.currentTheme = theme;
    localStorage.setItem('app-theme', theme);
    this.applyTheme();
  }

  applyTheme() {
    const themes = ['dark', 'light', 'pink', 'orange', 'green', 'gray', 'blue'];
    const body = document.body;

    // Remove old theme
    themes.forEach(t => body.classList.remove(`${t}-theme`));

    // Add new theme class
    body.classList.add(`${this.currentTheme}-theme`);
  }




}
