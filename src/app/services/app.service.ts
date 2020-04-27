import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  // Get meal categories
  fetchMealCategories(categoryListURL: string): Observable<any> {
    return this.http.get(categoryListURL);
  }

  // Get meal recipe
  fetchRecipe(recipeURL: string): Observable<any> {
    return this.http.get(recipeURL);
  }
}
