import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {UsuariosComponent} from "./components/usuarios/usuarios.component";
import {EquiposComponent} from "./components/equipos/equipos.component";
import {TicketsComponent} from "./components/tickets/tickets.component";

const routes: Routes = [
  {path: 'usuarios',component: UsuariosComponent},
  {path: 'tickets',component: TicketsComponent},
  {path: 'equipos',component: EquiposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
