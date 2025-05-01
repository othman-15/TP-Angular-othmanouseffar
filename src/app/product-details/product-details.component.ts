import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { Product } from '../../models/Product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [
    RouterLink
  ]
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    public prodService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.prodService.getAllProduct().subscribe({
      next: (data) => {
        this.product = data.find((p: { productID: string | null; }) => p.productID === id);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits :", err);
      }
    });
  }
}
