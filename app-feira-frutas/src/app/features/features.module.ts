import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsModule } from './fruits/fruits.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FruitsModule,
  ],
  exports: [
    FruitsModule,
  ]
})
export class FeaturesModule { }
