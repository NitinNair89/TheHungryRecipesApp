import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  allCategories = [];
  recipeName: string;
  inputError: boolean;

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.inputError = false;
    
    this.allCategories = this.appService.getMealCategoriesStoredData();

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

  // Store search value
  update(inputValue: string): void {
    this.recipeName = inputValue;
  }

  // Navigate user to recipe list view
  navigate(): void {
    console.log(this.recipeName);
    if ( this.recipeName === undefined ) {
      this.inputError = true;
    } else {
      this.router.navigate(['/recipelist',this.recipeName]);
    }
  }  
}