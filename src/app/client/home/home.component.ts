import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phones: any;
  constructor(
    private ps: ProductService
  ) { }

  ngOnInit(): void {
    this.ps.getNewProduct().subscribe(data => {
      this.phones = data;
      console.log(this.phones)
    })
  }

}
