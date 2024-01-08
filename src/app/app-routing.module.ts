import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ListarRolesComponent } from './Roles/listar-roles/listar-roles.component';
import { ListadoPeriodosComponent } from './Periodo/listado-periodos/listado-periodos.component';
import { SistemaAdministrativoComponent } from './sistema-administrativo/sistema-administrativo.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { RolComponent } from './Roles/rol/rol.component';
import { MenuComponent } from './menu/menu.component';


//rutas navegacion
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'listarroles', component: ListarRolesComponent },
  { path: 'sistema_administrativo', component: SistemaAdministrativoComponent },
  { path: 'slidebar', component: SlidebarComponent },
  { path: 'rol', component: RolComponent },
  //{ path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
