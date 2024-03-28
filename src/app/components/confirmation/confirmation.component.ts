// Displays a confirmation message of a successful order submission

import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

// Component decorator that specifies the selector (name of the component in HTML), template and style URLs for the component
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})

// Class for the component that defines the properties and methods of the component
export class ConfirmationComponent {
  // properties for the total price and full name of the customer
  total: number = 0;
  fullName: string = '';

  // Constructor to inject the CartService
  constructor(private cartService: CartService) {}

  // Method to run when the component is initialized
  ngOnInit(): void {
    this.total = this.cartService.getTotalPrice();
    this.fullName = this.cartService.getName();
    this.cartService.clearCart();
  }
}
