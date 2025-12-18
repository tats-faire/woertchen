import {Component, input} from '@angular/core';
import {RouterLink, Routes} from '@angular/router';
import {routes} from '../../../routes/mainRoutes';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.sass',
})
export class Navbar {
  currentPageTitle = input<string>()
  routes: Routes = routes;

}
