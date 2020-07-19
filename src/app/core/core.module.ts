import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsService } from './services/products/products.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductsService],
})
export class CoreModule {}
