import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-form-cate',
  templateUrl: './form-cate.component.html',
  styleUrls: ['./form-cate.component.css']
})
export class FormCateComponent implements OnInit {
  category: any;
  id: any;
  constructor(
    private cs: CategoryService
  ) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('idCate');
    // console.log(this.id)
    this.cs.getCategory(this.id).subscribe(data => {
      this.category = data;
      console.log(this.category)
    })

  }

}
