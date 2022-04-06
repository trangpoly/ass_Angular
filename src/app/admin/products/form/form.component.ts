import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() phoneId:any;
  phoneDetail: any;

  constructor(
    private ps : ProductService
  ) {
    this.phoneId = 0;
  }
  
  ngOnInit(): void {
    console.log(this.phoneId)
    if(this.phoneId !== 1000) {
      this.ps.getProduct(this.phoneId).subscribe(data => {
        this.phoneDetail = data;
      })
    }
  
  }
  

}
