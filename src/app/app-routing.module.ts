import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './CatalogComponent/products.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path:"home", component: HomeComponent },
  {path:"products", component: ProductsComponent },
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
