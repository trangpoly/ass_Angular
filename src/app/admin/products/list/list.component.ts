import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  phones: any;

  constructor(
    private ps: ProductService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(data => {
      return this.phones = data
    })
  }
  onGetListPhones(){
    this.ps.getProducts().subscribe(data => {
      return this.phones = data
    })
  }
  onRemove(id: number){
    console.log(id);
    const confirm = window.confirm("Bạn chắc chắn muốn xóa?");
    if(confirm){
      this.ps.removeProduct(id).subscribe(data => {
        this.onGetListPhones();
      })
      this.router.navigate(['admin/phones']);
    }
  }
  parentChangeStatus(newStatus: number, phoneId: number){
    const currentPhone = this.phones.find((phone: any) => phone.id === phoneId );
    if(currentPhone){
      this.ps.updateProduct(
        phoneId, 
        {
          ...currentPhone,
          status: newStatus
        }).subscribe((data: any)=> this.onGetListPhones())
    }
  }

}
