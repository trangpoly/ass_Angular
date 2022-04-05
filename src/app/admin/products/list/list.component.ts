import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  phones: any;
  phoneId: number = 0;

  constructor(
    private ps: ProductService
  ) {
  }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data => {
      return this.phones = data
    })
  }
}
