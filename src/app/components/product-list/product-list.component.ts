import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe((res) => {
      for (let index = 0; index < res.length; index++) {
        const product = res[index];
        product['amount'] = 1;
      }

      this.products = res;
    });
  }
}
