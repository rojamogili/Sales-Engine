import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
  {path: 'fashion', loadChildren: () => import('./fashion/fashion.module').then(m => m.FashionModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
