import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Meal } from '../shared/models/meal.model';
import { MealHelper } from '../shared/helpers/meal.helper';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // Arrays to store retrieved data
  allMealCategoriesData = [];
  recipesBySpecificCategory = [];
  singleCategoryInfo = {};
  singleRecipe = {};

  constructor(private http: HttpClient) {}

  // Store all meal categories data
  setMealCategories(data: Array<string>):void {
    this.allMealCategoriesData = data;
  }

  // Get meal categories list from stored data
  getMealCategoriesStoredData(): Array<any> {
    return this.allMealCategoriesData;
  }

  // Get meal categories from API
  getMealCategories(): Observable<any>  {
    return this.http.get(environment.apiURL.allCategories);
  }

  // Get random meal
  getRandomMeal(): Observable<Meal> {
    return this.http.get(environment.apiURL.randomMeal)
      .pipe(
        map(({ meals }: { meals: any[] }) => {
          const [meal] = meals;
          return {
            thumb: meal.strMealThumb,
            name: meal.strMeal,
            instructions: meal.strInstructions,
            youtubeLink: meal.strYoutube,
            ingredients: MealHelper.formattedIngredients(meal)
          } as Meal
        })
      );
  }

  // Store meal recipes for a specific category
  setRecipesByCategory(data: Array<any>): void {
    this.recipesBySpecificCategory = data;
  }

  // Get meal recipes for specific category from stored data
  getRecipesByCategoryStoredData(): Array<any> {
    return this.recipesBySpecificCategory;
  }

  // Get meal recipes for specific category from API
  getRecipesByCategory(categoryName: string): Observable<any> {
    return this.http.get(environment.apiURL.mealsByCategory + '?c=' + categoryName);
  }

  // Set category data for a specific category
  // TO DO

  // Get category data for a specific category
  getCategoryData(categoryName: string): Object {
    for (let idx = 0; idx < this.allMealCategoriesData.length; idx++) {
      let subItem = this.allMealCategoriesData[idx];

      if ( subItem.strCategory === categoryName ) {
        this.singleCategoryInfo = subItem;
        break;
      }

    }
    return this.singleCategoryInfo;
  }

  // Get specific meal recipe
  getRecipe(recipeID: string): Observable<any> {
    return this.http.get(environment.apiURL.mealRecipe + '?i=' +recipeID);
  }

  // Store specific meal recipe
  storeSingleRecipe(recipe: Array<string>): void {
    this.singleRecipe = recipe;
  }

  // Get recipe by name
  getRecipeByName(name: string): Observable<any> {
    return this.http.get(environment.apiURL.recipeByName + '?s=' + name);
  }
}
