import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //intialise class
  heading = {
    'border': true,
    'p-3': true,
    'shadow': true,
    'text-center': true
  }
  //making an array
  product: Product[] = [
    {
      name: 'Iphone 10',
      qty: 2,
      price: 100000
    },
    {
      name: 's610',
      qty: 5,
      price: 10000
    },
    {
      name: 'Motorola 10',
      qty: 1,
      price: 5000
    }
  ]
  card: Product[] = [];
  AddtoCard(payload) {
    if (payload.AddtoCart) {
      this.card.push(payload.product)
    }
    else {
      console.log(this.card)
      this.card = this.card.filter(item =>
        item == payload.product
      )
    }
  }
  calculate(){
     let  total=0;
    this.card.forEach(item=>{
      total=item.qty * item.price}
    )
    return total;
  }
}
