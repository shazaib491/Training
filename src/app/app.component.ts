import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advance';
person={
  name:"",
  email:"",
  mobile:"",
  salary:""
}
isdone=false
// object input 4 keyup ->event dynamically object store
handle(event){
  const keyname=event.target.name;
  const val=event.target.value;
  this.person[keyname]=val;
}

// submit (click) form hide thankyou informmation detail
submit(){
  this.isdone=true

}
}
