import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { HomeComponent } from './client/home/home.component';
import { ProductComponent } from './client/product/product.component';
import { DetailProductComponent } from './client/detail-product/detail-product.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { ListComponent } from './admin/products/list/list.component';
import { FormComponent } from './admin/products/form/form.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product/product.service';
import { ListCateComponent } from './admin/categories/list-cate/list-cate.component';
import { FormCateComponent } from './admin/categories/form-cate/form-cate.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ProductComponent,
    DetailProductComponent,
    AdminComponent,
    UsersComponent,
    ListComponent,
    FormComponent,
    ListCateComponent,
    FormCateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
