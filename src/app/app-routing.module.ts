import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineComComponent } from './inline-com/inline-com.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { DproductComponent } from './dproduct/dproduct.component';
import { LoopsComponent } from './loops/loops.component';


const routes: Routes = [
  {path:"child",component:ChildComponent},
  {path:"Parent",component:ParentComponent},
  {path:"product",component:ProductComponent},
  {path:"dProduct",component:DproductComponent},
  {path:"**",component:LoopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
