// Service for products

import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Injectable decorator that specifies that the service can be injected in other components
@Injectable({
  providedIn: 'root', 
})

// Class that defines the properties and methods of the service
export class ProductService {
  // Constructor - method for creating and initializing an object instance of that class
  // Private properties can only be accessed and modified from the class itself
  constructor(private http: HttpClient) {} 

  /**
   * Get products from the data.json file using HttpClient module
   * @returns {Observable<Product[]>} An Observable that emits an array of Product objects.
   */
  getProducts(): Observable<Product[]> {    // Describe that return is Observable (stream of data that can be subscribed to)
    return this.http.get<Product[]>('../../assets/data.json');
  }
}
