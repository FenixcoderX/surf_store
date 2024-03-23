# Surf Store

A single-page e-commerce application where users can view a list of products, access detailed information about individual products, add products to their cart in desired quantities, view their cart contents, update or delete products from the cart, see the total amount, proceed to checkout, and view confirmation of a successful order.

This application is built with Angular using TypeScript and Jasmine for tests. 

## Description

### Components
- nav-bar - navigates through application
- product-list - displays inforamtion from 'product-item' component
- product-item (has input from product-list) - generates html for each product, you can add product to cart
- product-item-detail - displays detail information about product, you can add product to cart
- cart - displays products in cart (you can update or delete products from the cart), total amount and checkout form  
- confirmation - displays infromation about succesfull order
### Services
 - product - fetch data from JSON file
 - cart - functions to add, remove, update product from cart, take total amount, save some info from form

## Instructions

**Install the dependencies**

```bash
npm install
```

**Run server**

```bash
ng serve --port 3000
```

**Navigate to**

`http://localhost:3000/`
