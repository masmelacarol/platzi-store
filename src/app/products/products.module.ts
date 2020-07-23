import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsContainer } from './containers/products/products.container';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  declarations: [ProductsContainer, ProductComponent, ProductDetailComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, MaterialModule],
})
export class ProductsModule {}
