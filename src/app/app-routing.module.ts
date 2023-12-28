// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login.component';
import { FooterComponent } from 'src/footer/footer.component';
import { ListarRolesComponent } from 'src/listar-roles/listar-roles.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'footer', component: FooterComponent},
  { path: 'listarroles', component: ListarRolesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
