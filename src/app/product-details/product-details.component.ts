import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./product-details.component.css']  // Remarque: c'est `styleUrls`, pas `styleUrl`
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    const p1 = new Product("P001");
    p1.productTitle = "HP Pavilion 15";
    p1.productPrice = "9500 DH";
    p1.quantity = 5;
    p1.image = "assets/images/Hp-pavilon.png";

    const p2 = new Product("P002");
    p2.productTitle = "MacBook Air M2";
    p2.productPrice = "14000 DH";
    p2.quantity = 2;
    p2.image = 'assets/images/m2-macbook-air.png';

    const p3 = new Product("P003");
    p3.productTitle = "hp mouse";
    p3.productPrice = "360 DH";
    p3.quantity = 30;
    p3.image = "assets/images/mouse-hp.png";

    const p4 = new Product("P08703");
    p4.productTitle = "imprimante Hp";
    p4.productPrice = "1200 DH";
    p4.quantity = 15;
    p4.image = "assets/images/imprim-hp.png";

    const p5 = new Product("P087e03");
    p5.productTitle = "Toshiba";
    p5.productPrice = "9999 DH";
    p5.quantity = 18;
    p5.image = "assets/images/toushiba.png";

    const allProducts: Product[] = [p1, p2, p3, p4, p5];

    this.product = allProducts.find(p => p.productID === id);
  }
}
