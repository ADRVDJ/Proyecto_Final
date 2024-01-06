//app.module.ts
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ListarCursosComponent } from './Cursos/listar-cursos/listar-cursos.component';
import { ListarRolesComponent } from './Roles/listar-roles/listar-roles.component';
import { CrearActividadComponent } from './Actividades/crear-actividad/crear-actividad.component';
import { CursoComponent } from './Cursos/curso/curso.component';
import { HeaderComponent } from './header/header.component';
import { ListadoActividadesComponent } from './Actividades/listado-actividades/listado-actividades.component';
import { ListadoCargoComponent } from './Cargos/listado-cargo/listado-cargo.component';
import { ListadoCarrerasComponent } from './Carrera/listado-carreras/listado-carreras.component';
import { MenuComponent } from './menu/menu.component';
import { PanelCrearCarreraComponent } from './Carrera/panel-crear-carrera/panel-crear-carrera.component';
import { PanelCrearMateriasComponent } from './Materias/panel-crear-materias/panel-crear-materias.component';
import { PeriodosComponent } from './Periodo/periodos/periodos.component';
import { RolComponent } from './Roles/rol/rol.component';
import { ListadoPeriodosComponent } from './Periodo/listado-periodos/listado-periodos.component';
import { ListadoDocentesComponent } from './Docentes/listado-docentes/listado-docentes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SlidebarComponent,
    FooterComponent,
    ListarCursosComponent,
    ListarRolesComponent,
    CrearActividadComponent,
    CursoComponent,
    HeaderComponent,
    ListadoActividadesComponent,
    ListadoCargoComponent,
    ListadoCarrerasComponent,
    MenuComponent,
    PanelCrearCarreraComponent,
    PanelCrearMateriasComponent,
    PeriodosComponent,
    RolComponent,
    ListadoPeriodosComponent,
    ListadoDocentesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
