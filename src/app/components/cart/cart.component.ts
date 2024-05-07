// Displays the products in the cart and allows the user to update the amount of products, remove products and submit the order

import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent {
  
  // properties for the cart products and total price
  cartProducts: Product[] = [];
  total: number = 0;
  // properties for the form fields
  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';
  // property for the form validation
  fullNameValidate: boolean = true;

  // Constructor to inject the CartService. Private properties can only be accessed and modified from the class itself
  constructor(private cartService: CartService) {}


  ngOnInit(): void {
    // Get the cart products and total price from the CartService
    this.cartProducts = this.cartService.getCart();
    this.total = this.cartService.getTotalPrice();
  }

  /**
   * Updates the amount of products in the cart and calculates the total price
   *
   * @param {Product[]} cartProducts - An array of Product objects representing the products in the cart.
   */
  updateAmount(cartProducts: Product[]): void {
    this.cartService.updateAmount(cartProducts);
    this.total = this.cartService.getTotalPrice();
  }

  /**
   * Removes a product from the cart and calculates the total price
   *
   * @param {Product} cartProduct - The product to be removed from the cart.
   */
  removeProduct(cartProduct: Product): void {
    this.cartProducts = this.cartService.removeProduct(cartProduct);
    this.total = this.cartService.getTotalPrice();

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

  /**
   * Submits the form and saves the full name to the cart service
   */
  submitForm() {
    this.cartService.saveName(this.fullName);
  }

  /**
   * Validates the full name in the form
   *
   * @param {string} fullName - The full name to be validated.
   */
  validateFullName(fullName: Event) {
    const symbols = /^[A-Za-z0-9]+$/; // Regular expression to check if the full name contains only letters and numbers
    this.fullNameValidate = symbols.test(fullName as unknown as string); // test the full name against the regular expression and set the validation property
  }
}
