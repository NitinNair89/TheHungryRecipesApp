import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  private mealCategories = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    if ( this.mealCategories.length === 0 ) {
      console.log('here');
      this.getMealCategories();
    }
  }

  // Get meal categories
  getMealCategories(): void {
    this.appService.getMealCategories().subscribe(data => {
      data.meals.forEach(meal => {
        this.mealCategories.push(meal.strCategory);
      });
    });
  }


}
