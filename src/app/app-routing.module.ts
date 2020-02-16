import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';


const routes: Routes = [
  {path: '', component: Comp1Component},
  {path: 'main', component: Comp1Component},
  {path: 'products', component: Comp2Component},
  {path: 'stores', component: Comp3Component},
  {path: 'about', component: Comp4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
