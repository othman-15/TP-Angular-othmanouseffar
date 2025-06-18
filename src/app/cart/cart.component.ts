import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;
  totalArticles: number = 0;
  shipping: number = 5;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.updateTotal();
  }

  remove(productID: string) {
    this.cartService.removeFromCart(productID);
    this.cartItems = this.cartService.getItems(); // Refresh list
    this.updateTotal();
  }

  updateTotal() {
    this.totalArticles = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    this.totalPrice = this.cartItems.reduce(
      (acc, item) => acc + item.productPrice * item.quantity,
      0
    );
  }

  validerCommande() {
    alert('Commande validée !');
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
    this.totalArticles = 0;
  }

  // Pour utiliser parseFloat dans le template
  protected readonly parseFloat = parseFloat;
}
