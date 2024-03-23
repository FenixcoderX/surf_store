import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  cartProducts: Product[] = [];
  total:number = 0;

  fullName:string='';
  address:string='';
  creditCardNumber:string='';

  fullNameValidate: boolean = true;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCart();
    this.total = this.cartService.getTotalPrice();
  }
  
  updateAmount (cartProducts:Product[]):void {
    this.cartService.updateAmount(cartProducts);
    this.total = this.cartService.getTotalPrice();
  }

  removeProduct (cartProduct:Product):void {
    this.cartProducts = this.cartService.removeProduct(cartProduct);
    this.total = this.cartService.getTotalPrice();

    const notification = document.getElementById("notification");
    if (notification) {
      notification.style.display = "block";
      setTimeout(function(){
        if (notification) {
          notification.style.display = "none";
        }
      }, 3000); 
    }
  }  

  submitForm () {
    console.log ('aaaaa',this.fullName);
    this.cartService.saveName(this.fullName);
  }

  validateFullName(fullName: Event) {
    const symbols = /^[A-Za-z0-9]+$/
    this.fullNameValidate = symbols.test(fullName as unknown as string)
  }
}
