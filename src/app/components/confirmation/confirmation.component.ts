// Displays a confirmation message of a successful order submission

import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})

export class ConfirmationComponent {
  // properties for the total price and full name of the customer
  total: number = 0;
  fullName: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.total = this.cartService.getTotalPrice();
    this.fullName = this.cartService.getName();
    this.cartService.clearCart();
  }
}
