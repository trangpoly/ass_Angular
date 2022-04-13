import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  categories: any;
  constructor(
    private ps: ProductService,
    ) { }

  ngOnInit(): void {
    this.ps.getProductsClient().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
  }

}
