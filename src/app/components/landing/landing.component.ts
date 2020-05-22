import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  allCategories = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
      this.allCategories = this.appService.getMealCategoriesStoredData();

      console.log(this.allCategories.length);

      // If data was not previously stored, fetch latest data
      if ( this.allCategories.length === 0 ) {
        this.getMealCategories();
      }
  }

  // Get meal categories
  getMealCategories(): void {
    this.appService.getMealCategories().subscribe(data => {
      data.categories.forEach((category, index) => {
        this.allCategories[index] = category;
      });
      this.appService.setMealCategories(this.allCategories);
    });
  }
  
}