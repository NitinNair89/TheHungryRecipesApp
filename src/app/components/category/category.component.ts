import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  mealCategoryName: string;
  mealCategoryData = [];

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getMealsByCategory(this.mealCategoryName);
  }

  // Get ':category' param value
  getCategory(): void {
    this.mealCategoryName = this.route.snapshot.paramMap.get('category');
  }

  // Get category info
  getMealsByCategory(categoryName: string): void {
    this.appService.getMealsByCategory(categoryName).subscribe(data => {
      data.meals.forEach(meal => {
        this.mealCategoryData.push(meal);
      });
    });
  }
}
