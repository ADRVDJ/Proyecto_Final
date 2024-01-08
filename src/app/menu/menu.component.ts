import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  constructor(private router: Router) {}
  menuabierto = false;
  comprobar(){
    this.menuabierto = !this.menuabierto;
  }
  verificar(){
    const rutas = this.router.url;
    this.menuabierto = rutas.includes('rol');
  }

  navigateToRoles(): void {
    this.router.navigate(['/roles']);
  }

  navigateToCursos(): void {
    this.router.navigate(['/cursos']);
  }

  navigateToPeriodos(): void {
    this.router.navigate(['/periodos']);
  }


}
