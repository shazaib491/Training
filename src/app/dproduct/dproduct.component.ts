import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from "../product";
@Component({
  selector: 'app-dproduct',
  templateUrl: './dproduct.component.html',
  styleUrls: ['./dproduct.component.css']
})
export class DproductComponent implements OnInit {
@Input('item') product:Product;
@Output() Card=new EventEmitter<any>();
isAddToCard=false;
  constructor() { }

  ngOnInit(): void {
  }
  incQty(){
    this.product.qty++;
  }
  decQty(){
    this.product.qty--;

  }
  update(){

    this.isAddToCard=!this.isAddToCard;
    let payload={
      AddtoCart:this.isAddToCard,
      product:this.product
    }
    this.Card.emit(payload);
  }

}
