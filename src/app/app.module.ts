// Code to define the metadata for the AppModule class

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({ // The @NgModule decorator is used to define the metadata for the AppModule class
  declarations: [ // The declarations array is used to declare all components, directives, and pipes that belong to the module
    AppComponent, 
    ProductListComponent, 
    ProductItemComponent,
    NavBarComponent,
    ProductItemDetailComponent,
    CartComponent,
    ConfirmationComponent
  ],
  imports: [ // The imports array is used to import other modules that are required by the module
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [], // The providers array is used to define the services that are provided by the module
  bootstrap: [AppComponent] // The bootstrap array is used to define the root component of the application that is used to bootstrap the application
})

export class AppModule { } 
