import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipelistRoutingModule } from './recipelist-routing.module';
import { RecipelistComponent } from './recipelist.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [RecipelistComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RecipelistRoutingModule
  ]
})
export class RecipelistModule { }
