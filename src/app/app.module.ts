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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SlidebarComponent,
    FooterComponent,
    ListarCursosComponent,
    ListarRolesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
