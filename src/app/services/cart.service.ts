// Service for cart

import { Injectable } from '@angular/core';
import { Product } from '../models/product';

// Injectable decorator that specifies that the service can be injected in other components
@Injectable({
  providedIn: 'root',
})

// Class that defines the properties and methods of the service
export class CartService {
  cartProducts: Product[] = []; // Array of products in the cart
  fullName: string = ''; // Full name of the user

  constructor() {}

  /**
   * Retrieves the cart products from the local storage
   * @returns {Product[]} An array of cart products objects in the cart
   */
  getCart() {
    // If cart products exist in the local storage then save it to the cartProducts array.
    if (localStorage.getItem('cartProducts')) {
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!); // JSON.parse - converts a JSON string to a JavaScript object. ! - non-null assertion operator - tells the compiler that the value is not null or undefined
    }
    return this.cartProducts;
  }

  /**
   * Adds a product to the cart (or updates amount if product already in the cart) and stores it in the local storage
   * @param {Product} product - The product object to be added to the cart
   * @returns {Product[]} The updated array of products objects in the cart
   */
  addToCart(product: Product) {
    // If cart products exist in the local storage then save it to the cartProducts array.
    if (localStorage.getItem('cartProducts')) {
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
    }

    // Checks the existing of an item in the cart and adds only the quantity if the item exists
    if (this.cartProducts.find((value) => value.id === product.id)) {
      // console.log('Product Object found in cart, update quantity only');
      this.cartProducts.map((value) => {
        if (value.id === product.id) {
          value.amount += product.amount;
        }
      });
      // if no item found in the cart, add the item to the cart
    } else {
      // console.log('Product Object not found in cart, add to the cart');
      this.cartProducts.push(product);
    }

    // console.log ("this.cartProducts",this.cartProducts);
    // console.log ("product",product);

    // Save the updated cartProducts array to the local storage
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));

    // Return the updated cartProducts array taken from the local storage
    return (this.cartProducts = JSON.parse(
      localStorage.getItem('cartProducts')!
    ));
  }

  /**
   * Clears the cart by removing all products from the cart and updating the local storage
   * @returns {Product[]} An empty array representing the cleared cart
   */
  clearCart() {
    //remove all cart products from the local storage
    localStorage.removeItem('cartProducts');

    //clear the cartProducts array
    this.cartProducts = [];

    // Save the empty cartProducts array to the local storage
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));

    return this.cartProducts;
  }

  /**
   * Calculates the total price of all products in the cart
   * @returns {number} The total price of all products in the cart
   */
  getTotalPrice(): number {
    let totalPriceForAll = 0;
    let totalPerProduct = 0;

    // Calculate the total price of all products in the cart using map method
    this.cartProducts.map((product) => {
      totalPerProduct = product.price * product.amount;
      totalPriceForAll += totalPerProduct;
    });

    // If the product amount of any product in the cart is less than 0, then set the total price to 0
    if (this.cartProducts.find((product) => product.amount < 0)) {
      totalPriceForAll = 0;
    }
    // If the total price is less than 0, then set the total price to 0
    if (totalPriceForAll < 0) {
      totalPriceForAll = 0;
    }

    // Covnert the total price to a number with 2 decimal places and return it
    return Number(totalPriceForAll.toFixed(2));
  }

  /**
   * Updates the amount of products (by passinng as argument new cardProducts array with updated amount) and stores it in the local storage
   * @param {Product[]} cartProducts - An array of all products with new amount
   * @returns {Product[]} The updated array of products in the cart.
   */
  updateAmount(cartProducts: Product[]) {
    // Save the updated cartProducts array to the local storage
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    // Return the updated cartProducts array taken from the local storage
    return (this.cartProducts = JSON.parse(
      localStorage.getItem('cartProducts')!
    ));
  }

  /**
   * Removes a product from the cart and updates the local storage
   * @param {Product} cartProduct - The product to be removed from the cart
   * @returns {Product[]} - The updated list of cart products after removing the specified product
   */
  removeProduct(cartProduct: Product) {
    // Save to the cartProducts array the cart products from the local storage
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!);
    // Filter the cartProducts array to remove the product with the specified id
    this.cartProducts = this.cartProducts.filter(
      (value) => value.id !== cartProduct.id
    );
    // Save the updated cartProducts array to the local storage
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));

    return this.cartProducts;
  }

  /**
   * Saves the full name of the user from the form 
   * @param {string} name - The name to be saved
   */
  saveName(name: string) {
    this.fullName = name;
  }

  /**
   * Returns the full name of the user 
   * @returns The full name of the user
   */
  getName() {
    return this.fullName;
  }
}
