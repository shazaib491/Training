import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:number;

  // getFood(val){
  //   console.log(val);
  //   this.data.push(val)
  // }

  // inputItems(val){
  //   this.data1.push(val)
  // }

  setQuantity(event:number){
    this.data=event;
  }
  reAssign(event:number){
    this.data=event;
  }

}
