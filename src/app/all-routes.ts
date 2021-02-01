import { Route } from '@angular/router';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';
import { NormalCompComponent } from './normal-comp/normal-comp.component';

export const NORMAL_ROUTE: Route = {
  component: NormalCompComponent,
  path: '',
  pathMatch: 'full',
};

export const LAZY_MODULE_ROUTE: Route = {
  path: 'lazy',
  loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
};

export const LAZY_ROUTE: Route = {
  path: '',
  component: LazyCompComponent
};
