import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'products',
        component: ListProductsComponent,
      },
      {
        path: 'products/create',
        component: FormProductComponent,
      },
      {
        path: 'products/edit/:id',
        component: EditProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
