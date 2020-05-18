import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Hungry Recipes';

  loading: boolean;

  constructor(
    router: Router
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
