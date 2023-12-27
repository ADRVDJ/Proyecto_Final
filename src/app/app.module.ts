// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/login/login.component';
import { SlidebarComponent } from 'src/slidebar/slidebar.component';
import { FooterComponent } from 'src/footer/footer.component';
import { ListarCursosComponent } from 'src/listar-cursos/listar-cursos.component';
import { ListarRolesComponent } from 'src/listar-roles/listar-roles.component';
//
import { CrearActividadComponent } from 'src/crear-actividad/crear-actividad.component';
import { CursoComponent } from 'src/curso/curso.component';
import { HeaderComponent } from 'src/header/header.component';
import { ListadoActividadesComponent } from 'src/listado-actividades/listado-actividades.component';
import { ListadoCargoComponent } from 'src/listado-cargo/listado-cargo.component';
import { ListadoCarrerasComponent } from 'src/listado-carreras/listado-carreras.component';
import { MenuComponent } from 'src/menu/menu.component';
import { PanelCrearCarreraComponent } from 'src/panel-crear-carrera/panel-crear-carrera.component';
import { PanelCrearMateriasComponent } from 'src/panel-crear-materias/panel-crear-materias.component';
import { PeriodosComponent } from 'src/periodos/periodos.component';
import { RolComponent } from 'src/rol/rol.component';
import { ListadoPeriodosComponent } from 'src/listado-periodos/listado-periodos.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
