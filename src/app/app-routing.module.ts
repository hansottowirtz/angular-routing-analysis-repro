import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as r from './all-routes';

const routes: Routes = [
  r.NORMAL_ROUTE,
  r.LAZY_MODULE_ROUTE,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
