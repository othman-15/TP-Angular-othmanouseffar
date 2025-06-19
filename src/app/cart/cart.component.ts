import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [FormsModule, CommonModule, RouterModule]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalArticles: number = 0;
  shipping: number = 5;
  promoCode: string = '';

  shippingOptions = [
    { value: 5, label: 'Standard Delivery – 5.00 DH' },
    { value: 10, label: 'Express – 10.00 DH' }
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalArticles = this.cartService.getTotalItems();
  }

  updateQuantity(item: CartItem, newQuantity: number): void {
    if (newQuantity < 1 || newQuantity > 99) return;

    this.cartService.updateQuantity(item.product.productID, newQuantity, item.selectedColor);
    this.loadCart();
  }

  removeItem(productID: string, color?: string): void {
    this.cartService.removeFromCart(productID, color);
    this.loadCart();
  }

  checkout(): void {
    if (this.cartItems.length === 0) {
      alert('Votre panier est vide !');
      return;
    }

    const orderPayload = {
      items: this.cartItems.map(item => ({
        productId: item.product.productID,
        quantity: item.quantity,
        selectedColor: item.selectedColor
      })),
      shipping: this.shipping,
      promoCode: this.promoCode
    };

    this.cartService.placeOrder(orderPayload).subscribe({
      next: () => {
        alert('Commande envoyée avec succès !');
        this.cartService.clearCart();
        this.loadCart();
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de l’envoi de la commande');
      }
    });
  }

  get grandTotal(): number {
    return this.totalPrice + this.shipping;
  }
}
