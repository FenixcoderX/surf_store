import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute} from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {
  //product: Product;
  id: number = 0;
  products: Product[] = [];

  constructor(route: ActivatedRoute, private productService: ProductService, private cartService:CartService) { 
    route.params.subscribe(params=>this.id=params['id']);    //https://metanit.com/web/angular2/7.4.php
  }
    
  ngOnInit(): void {
    //this.products = this.productService.getProducts().subscribe(res => {
    this.productService.getProducts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const product = res[index];
        product["amount"] = 1;
      }
      this.products = res;
      //console.log (this.id);
      //console.log (Number(this.id));
      this.products=this.products.filter(p => p.id === Number(this.id));
    
    });
  }
  amountUp(products: Product[]) {
    products[0].amount += 1;
    return products;
  }

  amountDown(products: Product[]) {
    if (products[0].amount>1) {
      products[0].amount -= 1;}
    return products;
  }

  addToCart(products: Product[]) {
    if (products[0].amount>=1){ 
      this.cartService.addToCart(products[0]);
      //console.log(this.products[0]);

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
