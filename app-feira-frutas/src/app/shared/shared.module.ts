import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ListComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [ListComponent, FooterComponent, HeaderComponent]
})
export class SharedModule { }
