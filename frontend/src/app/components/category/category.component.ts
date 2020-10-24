import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  categoryName: string;
  recipesBySpecificCategory = [];
  categoryInfo: any;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getCategory();

    this.getRecipesByCategory(this.categoryName);

    this.categoryInfo = this.appService.getCategoryData(this.categoryName);
  }

  // Get ':category' param value
  getCategory(): void {
    this.categoryName = this.route.snapshot.paramMap.get('category');
  }

  // Get category info
  getRecipesByCategory(categoryName: string): void {
    this.appService.getRecipesByCategory(categoryName).subscribe(data => {
      data.meals.forEach((meal, index) => {
        this.recipesBySpecificCategory[index] = meal;
      });
      this.appService.setRecipesByCategory(this.recipesBySpecificCategory);
    });
  }
}
