import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
