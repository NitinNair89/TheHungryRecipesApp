import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Meal } from 'src/app/shared/models/meal.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-randomrecipe',
  templateUrl: './randomrecipe.component.html',
  styleUrls: ['./randomrecipe.component.scss']
})
export class RandomrecipeComponent implements OnInit, OnDestroy {
  meal: Meal;

  ngUnsubscribe: Subject<void> = new Subject();

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.fetchRandomRecipe();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  fetchRandomRecipe(): void {
    this.appService.getRandomMeal()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((meal: Meal) => this.meal = meal);
  }

}
