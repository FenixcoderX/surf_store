// Component to display a list of products

import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  // Method to run when the component is initialized
  ngOnInit(): void {
    // Subscribe to the Observable returned by the getProducts method
    this.productService.getProducts().subscribe((res) => {

      // Loop through the products array and add an amount property to each product object
      for (let index = 0; index < res.length; index++) {
        const product = res[index];
        product['amount'] = 1;
      }
      // Save final array of products in the products property
      this.products = res;
    });
  }
}
