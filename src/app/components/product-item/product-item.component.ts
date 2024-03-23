import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  

  constructor(private cartService:CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      imageUrl: '',
      description: '', 
      amount: 0
    }
  }
  
  ngOnInit(): void {
    // console.log(this.product);
  }

  amountUp(product: Product) {
    product.amount += 1;
    return product;
  }

  amountDown(product: Product) {
    if (product.amount>1) {
    product.amount -= 1;}
    return product;
  }

  addToCart(product: Product) {
    if (product.amount>=1) { 
      this.cartService.addToCart(product);
      // console.log(this.product);
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
    
  }


}
