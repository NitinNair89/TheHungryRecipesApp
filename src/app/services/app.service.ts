import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  // Get meal categories
  getMealCategories(): Observable<any>  {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  }
}
