import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListCateComponent } from './admin/categories/list-cate/list-cate.component';
import { ListComponent } from './admin/products/list/list.component';
import { ClientComponent } from './client/client.component';
import { DetailProductComponent } from './client/detail-product/detail-product.component';
import { HomeComponent } from './client/home/home.component';
import { ProductComponent } from './client/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'phones',
        component: ProductComponent
      },
      {
        path: 'phone/:id',
        component: DetailProductComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'phones',
        pathMatch: 'full'
      },
      {
        path: 'phones',
        component: ListComponent
      },
      {
        path: 'categories',
        component: ListCateComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
