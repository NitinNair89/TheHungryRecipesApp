import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  // to change the --color variable in src/style.scss
  // would affect theming since all the components use that variable
  // override in style.scss for components if required
  changeThemeToLeafyGreen(){
    document.documentElement.style.setProperty('--color', '#1b7742'); // veg : #1b7742
  }
  changeThemeToStarvingRed(){
    document.documentElement.style.setProperty('--color', '#f44336'); // non-veg: #e9493d;
  }
  changeThemeToChaiOrange(){
    document.documentElement.style.setProperty('--color', '#ff8f00'); // snack: #e98e17;
  }

  ngOnInit() {
  }

}
