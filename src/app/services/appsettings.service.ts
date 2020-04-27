import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppsettingsService {

  constructor(private http: HttpClient) {}

  // Read config values
  loadSettings(): Observable<any> {
    return this.http.get('../../assets/appsettings.json');
  }
}