import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRoutes } from '@angular/router';

import { FashionComponent } from './fashion.component';



@NgModule({
  declarations: [
    FashionComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    provideRoutes([{path: '', component: FashionComponent}])
  ]
})
export class FashionModule { }
