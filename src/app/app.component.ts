import { Component, OnInit } from '@angular/core';
import { AppsettingsService } from './services/appsettings.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Hungry Recipes';
  mealCategories = [];
  randomMealURL = '';
  randomMeal = [];


  constructor(
    private appSettingsService : AppsettingsService,
    private appService : AppService
  ) {}

  ngOnInit(): void {
    this.appSettingsService.loadSettings().subscribe(data => {
      this.fetchMealCategories(data.categoryList);
      this.randomMealURL = data.randomMeal;
    });
  }
  
  // Retrieves meal categories
  fetchMealCategories(categoryListURL: string): void {
   this.appService.fetchMealCategories(categoryListURL).subscribe(data => {
     data.meals.forEach(meal => {
       this.mealCategories.push(meal.strCategory);
     });
   });
  }

  // Fetch meal recipe
  fetchRecipe(recipeType: string): void {
    switch (recipeType) {
      case 'r':
        this.appService.fetchRecipe(this.randomMealURL).subscribe(data => {
          this.randomMeal = data.meals[0];
        });
        break;
    
      default:
        break;
    }
  }
  
}
