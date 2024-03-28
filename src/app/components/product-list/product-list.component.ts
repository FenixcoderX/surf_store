// Component to display a list of products

import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

// Component decorator that specifies the selector (name of the component in HTML), template and style URLs for the component
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

// Class for the component that defines the properties and methods of the component
export class ProductListComponent {
  // Create a property to store the products with an empty array of Product type
  products: Product[] = [];

  // Constructor to inject the ProductService. Private properties can only be accessed and modified from the class itself
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
