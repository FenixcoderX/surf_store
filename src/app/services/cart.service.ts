import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];
  fullName: string = '';

  constructor() {}

  getCart() {
    if (localStorage.getItem('cartProducts')) {
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
    }
    // console.log ("this.cartProducts",this.cartProducts);
    return this.cartProducts;
  }

  addToCart(product: Product) {
    if (localStorage.getItem('cartProducts')) {
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
    }
    //Checking the existing of an item in the cart and adding only the quantity if the item exists
    if (this.cartProducts.find((value) => value.id === product.id)) {
      console.log('Object found');
      this.cartProducts.map((value) => {
        if (value.id === product.id) {
          value.amount += product.amount;
        }
      });
    } else {
      console.log('Object not found');
      this.cartProducts.push(product);
    }

    // console.log ("this.cartProducts",this.cartProducts);
    // console.log ("product",product);

    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    return (this.cartProducts = JSON.parse(
      localStorage.getItem('cartProducts')!
    ));
  }

  clearCart() {
    localStorage.removeItem('cartProducts');

    this.cartProducts = [];
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    return this.cartProducts;
  }

  getTotalPrice(): number {
    let totalPriceForAll = 0;
    let totalPerProduct = 0;
    this.cartProducts.map((product) => {
      totalPerProduct = product.price * product.amount;
      totalPriceForAll += totalPerProduct;
    });
    if (this.cartProducts.find((product) => product.amount < 0)) {
      totalPriceForAll = 0;
    }
    if (totalPriceForAll < 0) {
      totalPriceForAll = 0;
    }
    return Number(totalPriceForAll.toFixed(2));
  }
  updateAmount(cartProducts: Product[]) {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    return (this.cartProducts = JSON.parse(
      localStorage.getItem('cartProducts')!
    ));
  }
  removeProduct(cartProduct: Product) {
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
    this.cartProducts = this.cartProducts.filter(
      (value) => value.id !== cartProduct.id
    );
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    return this.cartProducts;
  }

  saveName(name: string) {
    this.fullName = name;
  }
  getName() {
    return this.fullName;
  }
}
