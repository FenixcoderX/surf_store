import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

// Routes array that defines the routes for the application
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/confirmation', component: ConfirmationComponent }
];

// NgModule decorator that defines the metadata for the module
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import the RouterModule and configure it with the routes array
  exports: [RouterModule] // Export the RouterModule so it can be used throughout the application
})

export class AppRoutingModule { }
