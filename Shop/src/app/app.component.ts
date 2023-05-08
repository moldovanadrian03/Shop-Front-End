import { Component, OnInit } from '@angular/core';
import { ProductService } from './Services/product.service';
import { Product } from './product';
import { ProductModel } from './models/product-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Shop';
  products: Product[]  = new ProductModel();


  constructor(public productService: ProductService) {
    this.products = this.products;
    console.log(this.products, "adsadas");
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log("Products list: ", products);
      this.products = products;

      this.products.forEach(currProd => {
        console.log("Product: ", currProd);
      });

    });
  }


}
