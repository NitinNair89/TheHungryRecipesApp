import { Component, OnInit } from '@angular/core';
import { AppsettingsService } from './services/appsettings.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Hungry Recipes';


  constructor() {}

  ngOnInit(): void {}
}
