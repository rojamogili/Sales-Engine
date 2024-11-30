import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRoutes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms'; 

import { DashboardComponent } from './dashboard.component';
import { SliderCardsComponent } from './slider-cards/slider-cards.component';
import { NavigatorModule } from '../navigator/navigator.module';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SliderCardsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RatingModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    NavigatorModule,
    SidebarModule,
    InputTextModule
  ],
  providers: [
    provideRoutes([{path: '', component: DashboardComponent}])
  ]
})
export class DashboardModule { }
