import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {

  recipeName: string;
  recipesByName = [];

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getRecipeName();

    this.getRecipeByName(this.recipeName);
    
  }

  // Get ':name' param value
  getRecipeName(): void {
    this.recipeName = this.route.snapshot.paramMap.get('name');
  }

  // Get recipe list by searched name
  getRecipeByName(name: string): void {
    this.appService.getRecipeByName(name).subscribe(data => {
      if (data.meals !== null ) {
        data.meals.forEach((meal, index) => {
          this.recipesByName[index] = meal;
        });
      } else {
        this.recipesByName = [];
      }
    });
  }

}
