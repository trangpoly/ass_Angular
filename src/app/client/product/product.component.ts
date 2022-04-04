import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
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
    private cs: CategoryService
    ) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
    this.cs.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories)
    })
  }

}
