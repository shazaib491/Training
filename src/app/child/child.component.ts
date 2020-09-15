import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item: number;
  @Output() itemChange = new EventEmitter<number>();
  constructor() { }
  //child to parent data send =custom->event with the help EventEmitter custom event foodEvt same as click
  // @Output() newItemEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }
isAddToCard=false;
  itemPrice: number = 15;
  setAsc() {
    const val = parseInt(this.item);
    this.item = val;
    this.item += 1;
    this.itemChange.emit(this.item)
  }
  setDsc() {
    this.item -= 1;
    this.itemChange.emit(this.item)
  }
  update(){
    this.isAddToCard=true;
  }
  //template refrence varible
  //templateref html var front pass older html only markup lang but angular + markup lang
}
