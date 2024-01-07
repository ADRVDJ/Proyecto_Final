// app.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Fronted';
  currentRoute: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Redirige a la vista de login al inicializar la aplicación
    // this.router.navigate(['/login']);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.getCurrentRoute(this.activatedRoute);
      }
    });
  }

  private getCurrentRoute(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.routeConfig?.path ?? '';
  }
}
