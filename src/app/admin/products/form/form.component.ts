import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  phoneForm: FormGroup;
  phoneDetail: any;
  id: any;
  act: any;
  categories: any;
  //Upload Img
  imageBase64: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private ps : ProductService,
    private router: Router,
    private cs: CategoryService
  ) {
    this.phoneForm = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10)
        ]
      ),
      desc: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(255)
        ]
      ),
      price: new FormControl(
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ),
      image: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      status: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      categoryId: new FormControl(
        '',
        [
          Validators.required
        ]
      )
    })
  }
  
  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    this.act = this.activeRouter.snapshot.params['act'];
    this.cs.getCatesClient().subscribe(data => {
      return this.categories = data
    })
    if(this.id!== undefined) {
      this.ps.getProduct(this.id).subscribe(data => {
        this.phoneDetail = data;
      })
    }
    else {
      this.phoneDetail = {
        name: '',
        price: 0,
        desc: '',
        status: '',
        image: '',
        categoryId: ''
        
      }
    }
  }
  onSubmit(obj: {name: string, price: number, desc: string, status: number, categoryId: number}){
    const submitData = {
      ...obj,
      image : this.imageBase64 ? this.imageBase64 : this.phoneDetail.image 
    };
    if(this.id!==undefined){
      this.ps.updateProduct(this.id, {...submitData, status: +submitData.status, categoryId: +submitData.categoryId}).subscribe(data => {
        this.router.navigate(['admin/phones']);
      });
    }
    else {
      this.ps.createProduct({...submitData, status: +submitData.status, categoryId: +submitData.categoryId}).subscribe(data => {
        this.router.navigate(['admin/phones']);
      }
      );
      
      
    }
  }
  resultString (e:any) {
    if (e && e.target && typeof e.target.result == 'string') {
      return e.target.result;
    }

    return '';
  }

  changeImg(event :any) {
    const arrayImageTypes = ['image/png', 'image/jpg','image/jpeg','image/jpe'];
    const file = event.target.files[0];
    console.log(file);
    if (file.size > 500000) {
      return alert('Kích thước file quá lớn');
    } else if (!arrayImageTypes.includes(file.type)) {
      return alert('Kiểu dữ liệu không phù hợp');
    }

    console.log(file.size, file.type);
    // 1. Định nghĩa 1 thể hiện của FileReader để đọc file
    const reader = new FileReader();
    // 2. Định nghĩa phương thức đọc file
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
      const image = new Image();
      image.src = this.resultString(e);

      console.log(image.width, image.height);
    }
    // 3. Đây là lúc bắt đầu đọc file để chạy phần 2.
    reader.readAsDataURL(file);
  }
  

}
