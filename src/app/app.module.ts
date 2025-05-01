import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './CatalogComponent/products.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductServiceService} from './product-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductDetailsComponent,
    HttpClientModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
