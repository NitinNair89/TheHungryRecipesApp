import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  // Get meal categories
  getMealCategories(): Observable<any>  {
    return this.http.get(environment.apiURL.mealCategories);
  }

  // Get random meal
  getRandomMeal(): Observable<any> {
    return this.http.get(environment.apiURL.randomMeal);
  }

  // Get meals by category
  getMealsByCategory(categoryName: string): Observable<any> {
    return this.http.get(environment.apiURL.mealsByCategory + '?c=' + categoryName);
  }
}
