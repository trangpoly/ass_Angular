import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-phone-status',
  templateUrl: './phone-status.component.html',
  styleUrls: ['./phone-status.component.css']
})
export class PhoneStatusComponent implements OnInit {
  @Input() status: number;
  @Output() changeStatus: EventEmitter<number>
  constructor() { 
    this.status =1;
    this.changeStatus = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.status)
  }
  onChangeStatus(newStatus: number){
    this.changeStatus.emit(newStatus)
  }

}
