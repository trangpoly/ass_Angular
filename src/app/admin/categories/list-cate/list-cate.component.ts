import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-list-cate',
  templateUrl: './list-cate.component.html',
  styleUrls: ['./list-cate.component.css']
})
export class ListCateComponent implements OnInit {
  categories: any;
  constructor(
    private cs: CategoryService
  ) { }

  ngOnInit(): void {
    this.cs.getCategories().subscribe(data => {
      return this.categories = data;
    })
  }
  onEditCate(id:number){
    console.log(id);
    localStorage.setItem("idCate",JSON.stringify(id));
  }

}
