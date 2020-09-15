import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  item: Item[] = [
    {
      id:1,
      name: "iphone",
      qty: 5,
      price: 20
    },
    {
      id:2,
      name: "sansung",
      qty: 3,
      price: 10
    },
    {
      id:3,
      name: "motorla",
      qty: 2,
      price: 30
    }
  ]
  // storing classes
  myclass={
      "col-md-6": true,
      "m-auto": true,
      "shadow": true,
      "border": true,
      "border-dark": true
    }
    myform={
      "form-group":true,
      "container":true
    }
    inputGroup={
      "form-control":true,
      "border":true,
      "border-top-0":true,
      "border-left-0":true,
      "border-right-0":true,
      "w-50":true
    }
    // storing classes

Refresh(){
  this.item= [
    {
      id:1,
      name: "iphone",
      qty: 5,
      price: 20
    },
    {
      id:2,
      name: "sansung",
      qty: 3,
      price: 10
    },
    {
      id:3,
      name: "motorla",
      qty: 2,
      price: 30
    },
    {
      id:4,
      name: "lava iris",
      qty: 3,
      price: 20
    }
  ]
}
trackByMethod(index:number,el:any): number {
    return el.id;
  }
getval(param){
  console.log(param)
}

}
