import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    this.ps.getProductsClient().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
    this.cs.getCatesClient().subscribe(data => {
      this.categories = data
    })
  }
  filterCate(id: number){
    if(id===0){
      this.ps.getProductsClient().subscribe(data => {
        this.products = data;
      });
    }
    else {
      this.ps.filterCate(id).subscribe(data => {
        this.products = data;
      })
    }
  }
  sort(choose: any){
    if(choose==='desc'){
      this.products.sort((a: any, b: any) => {
        return b.price - a.price
      });
    }
    else{
      this.products.sort((a: any, b: any) => {
        return a.price - b.price
      });
    }
  }
  searchPro(event: any){
    // console.log(event.target.value)
    this.ps.searchProduct(event.target.value).subscribe(data => {
      return this.products = data
    })
  }
}
