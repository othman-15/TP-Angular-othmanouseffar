import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './CatalogComponent/products.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProductServiceService} from './product-service.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import {JwtInterceptor} from '../models/auth/interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductDetailsComponent,
    HttpClientModule,
    FormsModule,
    LoginComponent,
    SignupComponent,

  ],
  providers: [ProductServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
