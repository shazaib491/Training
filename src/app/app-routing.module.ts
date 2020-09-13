import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineComComponent } from './inline-com/inline-com.component';

const routes: Routes = [
  {path:"",component:InlineComComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
