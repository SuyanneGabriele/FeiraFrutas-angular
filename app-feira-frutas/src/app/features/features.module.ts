import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsModule } from './fruits/fruits.module';
import { CarrinhoModule } from './carrinho/carrinho.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FruitsModule,
    CarrinhoModule
  ],
  exports: [
    FruitsModule,
    CarrinhoModule
  ]
})
export class FeaturesModule { }
