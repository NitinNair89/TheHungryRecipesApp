import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomrecipeRoutingModule } from './randomrecipe-routing.module';
import { RandomrecipeComponent } from './randomrecipe.component';


@NgModule({
  declarations: [RandomrecipeComponent],
  imports: [
    CommonModule,
    RandomrecipeRoutingModule
  ]
})
export class RandomrecipeModule { }
