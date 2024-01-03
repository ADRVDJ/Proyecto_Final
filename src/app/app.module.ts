// app.module.ts
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { ListarRolesComponent } from './listar-roles/listar-roles.component';
//
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { CursoComponent } from './curso/curso.component';
import { HeaderComponent } from './header/header.component';
import { ListadoActividadesComponent } from './listado-actividades/listado-actividades.component';
import { ListadoCargoComponent } from './listado-cargo/listado-cargo.component';
import { ListadoCarrerasComponent } from './listado-carreras/listado-carreras.component';
import { MenuComponent } from './menu/menu.component';
import { PanelCrearCarreraComponent } from './panel-crear-carrera/panel-crear-carrera.component';
import { PanelCrearMateriasComponent } from './panel-crear-materias/panel-crear-materias.component';
import { PeriodosComponent } from './periodos/periodos.component';
import { RolComponent } from './rol/rol.component';
import { ListadoPeriodosComponent } from './listado-periodos/listado-periodos.component';

@NgModule({
  declarations: [
    AppComponent,
   
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
