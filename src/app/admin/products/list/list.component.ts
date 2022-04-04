import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: any;
  constructor(
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data=>{
      return this.products = data
    })
  }

}
