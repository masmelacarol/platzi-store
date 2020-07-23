import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    ListProductsComponent,
    TableComponent,
    FormProductComponent,
    EditProductComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, SharedModule],
})
export class AdminModule {}
