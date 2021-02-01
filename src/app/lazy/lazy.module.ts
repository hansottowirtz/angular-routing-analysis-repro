import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCompComponent } from '../lazy-comp/lazy-comp.component';
import { LazyRoutingModule } from '../lazy-routing/lazy-routing.module';

@NgModule({
  declarations: [
    LazyCompComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
