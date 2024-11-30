import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRoutes } from '@angular/router';

import { BooksComponent } from './books.component';

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule
  ],
  providers : [
    provideRoutes([{path: '', component: BooksComponent}])
  ]
})
export class BooksModule { }
