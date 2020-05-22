import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Hungry Recipes';

  loading: boolean;

  constructor(
    router: Router,
    private appService: AppService
  ) {
    this.loading = false;
    router.events.subscribe(
      (event: RouterEvent):void => {
        if ( event instanceof NavigationStart ) {
          this.loading = true;
        } else if ( event instanceof NavigationEnd ) {
          this.loading = false;
        }
      }
    );
  }

  ngOnInit(): void {}
}
