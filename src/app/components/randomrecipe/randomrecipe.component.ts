import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-randomrecipe',
  templateUrl: './randomrecipe.component.html',
  styleUrls: ['./randomrecipe.component.scss']
})
export class RandomrecipeComponent implements OnInit {

  mealThumb: string;
  mealName: string;
  mealIngredients = [];
  mealYoutubeLink: string;
  mealTags = [];
  mealInstructions: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.fetchRandomRecipe();
  }

  fetchRandomRecipe(): void {
    
    this.appService.getRandomMeal().subscribe(data => {
      data.meals.forEach(meal => {
        this.mealThumb = meal.strMealThumb;
        this.mealName = meal.strMeal;
        this.mealInstructions = meal.strInstructions;
        this.mealYoutubeLink = meal.strYoutube;

        for (let index = 1; index <= 20; index++) {
          let ingredient = 'strIngredient' + index;
          let measure = 'strMeasure' + index;
  
          if ( meal[ingredient] && meal[measure] ) {
            this.mealIngredients.push( meal[ingredient] + ' - ' + meal[measure]);
          } else if ( meal[ingredient] ) {
            this.mealIngredients.push( meal[ingredient] );
          }
        }
      });
    });
  }

}
