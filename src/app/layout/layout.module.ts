import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { ThemeChangeComponent } from '../component/theme-change/theme-change.component';




@NgModule({
  declarations: [LayoutComponent,SidebarComponent, NavbarComponent, TabBarComponent,  ThemeChangeComponent],
  imports: [
    CommonModule,
    RouterModule,
  
    
  ]
})
export class LayoutModule { }
