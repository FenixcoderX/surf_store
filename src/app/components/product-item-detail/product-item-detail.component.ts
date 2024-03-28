// Displays a detail product information and allows the user to add it to the cart

import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

// Component decorator that specifies the selector (name of the component in HTML), template and style URLs for the component
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})

// Class for the component that defines the properties and methods of the component
export class ProductItemDetailComponent {
  //Initialize the product property
  id: number = 0;
  products: Product[] = [];

  // Constructor that injects the ProductService, CartService and ActivatedRoute into the component
  constructor(
    route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    // Save to id variable the id parameter from the URL
    route.params.subscribe((params) => (this.id = params['id'])); //https://metanit.com/web/angular2/7.4.php
  }

  // ngOnInit method that is called after the component is initialized
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
      //console.log (this.id);
      //console.log (Number(this.id));

      // Filter the products array to get the product with the id from the URL
      this.products = this.products.filter((p) => p.id === Number(this.id));
    });
  }

   /**
   * Increases the amount of a product by 1
   *
   * @param {Product} product - The product to increase the amount of
   * @returns {Product} The updated product with the increased amount
   */
  amountUp(products: Product[]) {
    products[0].amount += 1;
    return products;
  }

 /**
   * Decrease the amount of a product by 1
   *
   * @param {Product} product - The product to decrease the amount of
   * @returns {Product} The updated product with the decrease amount
   */
  amountDown(products: Product[]) {
    if (products[0].amount > 1) {
      products[0].amount -= 1;
    }
    return products;
  }

  /**
   * Adds a product to the cart and displays a notification
   *
   * @param {Product} product - The product to be added to the cart
   */
  addToCart(products: Product[]) {
      //  Add product to cart
    if (products[0].amount >= 1) {
      this.cartService.addToCart(products[0]);
      //console.log(this.products[0]);

      // Show notification
      const notification = document.getElementById('notification');
      if (notification) {
        notification.style.display = 'block';

        // Hide notification after 3 seconds
        setTimeout(function () {
          if (notification) {
            notification.style.display = 'none';
          }
        }, 3000);
      }
    }
  }
}
