import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms'; 

import { NavigatorComponent } from './navigator.component';



@NgModule({
  declarations: [
    NavigatorComponent,
  ],
  imports: [
    CommonModule,
    SlideMenuModule,
    ButtonModule,
    BadgeModule,
    AvatarModule,
    MenubarModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    NavigatorComponent
  ],
})
export class NavigatorModule { }
