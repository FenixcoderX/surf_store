// Displays a product and allows the user to add it to the cart and navigate to product details page

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

// Component decorator that specifies the selector (name of the component in HTML), template and style URLs for the component
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})

// Class for the component that defines the properties and methods of the component
export class ProductItemComponent {
  //
  // Input decorator that defines the product property that comes from the parent component
  @Input() product: Product;

  // Constructor that injects the CartService into the component and initializes the product property
  constructor(private cartService: CartService) {
    // Initialize the product property
    this.product = {
      id: 0,
      name: '',
      price: 0,
      imageUrl: '',
      description: '',
      amount: 0,
    };
  }

  ngOnInit(): void {
    // console.log(this.product);
  }

  /**
   * Increases the amount of a product by 1
   *
   * @param {Product} product - The product to increase the amount of
   * @returns {Product} The updated product with the increased amount
   */
  amountUp(product: Product) {
    product.amount += 1;
    return product;
  }

  /**
   * Decrease the amount of a product by 1
   *
   * @param {Product} product - The product to decrease the amount of
   * @returns {Product} The updated product with the decrease amount
   */
  amountDown(product: Product) {
    if (product.amount > 1) {
      product.amount -= 1;
    }
    return product;
  }

  /**
   * Adds a product to the cart and displays a notification
   *
   * @param {Product} product - The product to be added to the cart
   */
  addToCart(product: Product) {
    //  Add product to cart
    if (product.amount >= 1) {
      this.cartService.addToCart(product);
      // console.log(this.product);

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
