import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemCount = new BehaviorSubject<number>(0); // ✅

  cartCount$ = this.cartItemCount.asObservable(); // ✅ observable accessible

  getItems() {
    return this.cartItems;
  }

  addToCart(product: Product) {
    const existing = this.cartItems.find(p => p.productID === product.productID);
    if (existing) {
      existing.quantity += 1;
    } else {
      const newProduct = new Product(product.productID);
      newProduct.productTitle = product.productTitle;
      newProduct.productPrice = product.productPrice;
      newProduct.image = product.image;
      newProduct.quantity = 1;
      newProduct.favorite = product.favorite;

      this.cartItems.push(newProduct);
    }

    this.updateCartCount(); // ✅ mettre à jour
  }

  removeFromCart(productID: string) {
    this.cartItems = this.cartItems.filter(p => p.productID !== productID);
    this.updateCartCount(); // ✅
  }

  clearCart() {
    this.cartItems = [];
    this.updateCartCount(); // ✅
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) =>
      total + parseFloat(item.productPrice) * item.quantity, 0);
  }

  private updateCartCount() {
    const totalCount = this.cartItems.reduce((count, item) => count + item.quantity, 0);
    this.cartItemCount.next(totalCount); // ✅ notification
  }
}
