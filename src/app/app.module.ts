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
import { ListComponent } from './admin/products/list/list.component';
import { FormComponent } from './admin/products/form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product/product.service';
import { PhoneStatusComponent } from './components/phone-status/phone-status.component';
import { PhoneValidateComponent } from './components/phone-validate/phone-validate.component';

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
    ListComponent,
    FormComponent,
    PhoneStatusComponent,
    PhoneValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
