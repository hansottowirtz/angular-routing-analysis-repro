import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import * as r from '../all-routes';
import { LazyCompComponent } from '../lazy-comp/lazy-comp.component';

export const LAZY_ROUTE: Route = {
  path: '',
  component: LazyCompComponent
};

const routes: Routes = [
  LAZY_ROUTE
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
