import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipelistComponent } from './recipelist.component';

const routes: Routes = [
  { 
    path: ':name', 
    component: RecipelistComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipelistRoutingModule { }
