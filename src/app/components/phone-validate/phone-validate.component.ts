import { Component, Input, OnInit } from '@angular/core';

interface ERROR {
  hasName: string,
  require: string,
  minlength: string,
  [key: string]: string
}

@Component({
  selector: 'app-phone-validate',
  templateUrl: './phone-validate.component.html',
  styleUrls: ['./phone-validate.component.css']
})
export class PhoneValidateComponent implements OnInit {
  @Input('formField') formData : any;
  @Input() key: string;

  constructor() {
    this.key = '';
   }

  ngOnInit(): void {
    console.log(this.key)
  }

}
