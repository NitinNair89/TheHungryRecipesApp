import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit, OnDestroy {

  categoryName: string;
  recipesBySpecificCategory = [];
  categoryInfo: any;

  ngUnsubscribe: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getCategory();

    this.getRecipesByCategory(this.categoryName);

    this.categoryInfo = this.appService.getCategoryData(this.categoryName);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  // Get ':category' param value
  getCategory(): void {
    this.categoryName = this.route.snapshot.paramMap.get('category');
  }

  // Get category info
  getRecipesByCategory(categoryName: string): void {
    this.appService.getRecipesByCategory(categoryName)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        data.meals.forEach((meal, index) => {
          this.recipesBySpecificCategory[index] = meal;
        });
        this.appService.setRecipesByCategory(this.recipesBySpecificCategory);
      });
  }
}
