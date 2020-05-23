import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipeID: string;
  recipeCategory: string;
  recipeThumb: string;
  recipeName: string;
  recipeIngredients = [];
  recipeYoutubeLink: string;
  recipeTags = [];
  recipeInstructions: string;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getRecipeID();
    this.fetchRecipe(this.recipeID);
  }

  // Get ':category' param value
  getRecipeID(): void {
    this.recipeID = this.route.snapshot.paramMap.get('id');
  }

  fetchRecipe(recipeID: string): void {
    this.recipeIngredients = [];
    
    this.appService.getRecipe(recipeID).subscribe(recipe => {
      recipe = recipe.meals[0];
      this.recipeThumb = recipe.strMealThumb;
      this.recipeName = recipe.strMeal;
      this.recipeCategory = recipe.strCategory;
      this.recipeInstructions = recipe.strInstructions;
      this.recipeYoutubeLink = recipe.strYoutube;

      for (let index = 1; index <= 20; index++) {
        let ingredient = 'strIngredient' + index;
        let measure = 'strMeasure' + index;

        if ( recipe[ingredient] && recipe[measure] ) {
          this.recipeIngredients.push( recipe[ingredient] + ' - ' + recipe[measure]);
        } else if ( recipe[ingredient] ) {
          this.recipeIngredients.push( recipe[ingredient] );
        }
      }

      this.appService.storeSingleRecipe(recipe);
    });
  }

}
