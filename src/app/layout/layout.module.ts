import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutComponent,SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
