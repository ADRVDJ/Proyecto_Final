import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  constructor(private router: Router) {}
  openRolPanel(): void {
   
    this.navigateToRoles();
  }
  
  
  navigateToRoles(): void {
    this.router.navigate(['/']);
  }

  navigateToCursos(): void {
    this.router.navigate(['/cursos']);
  }

  navigateToPeriodos(): void {
    this.router.navigate(['/periodos']);
  }


}
