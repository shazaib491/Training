import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-com',
  template: `
  <input type="text" class="col-md-6 m-auto form-control" (keyup)="passVal($event)">
  <div *ngIf="data" >this is some info {{data}}</div>
  `,
  styleUrls: ['./inline-com.component.css']
})
export class InlineComComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:any;

  passVal(param){
  this.data=param.target.value

  }
}
