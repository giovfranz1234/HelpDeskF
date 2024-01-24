import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {UsuariosComponent} from "./components/usuarios/usuarios.component";
import {EquiposComponent} from "./components/equipos/equipos.component";
import {TicketsComponent} from "./components/tickets/tickets.component";
import { UsuariosFormComponent } from './components/usuarios/usuarios-form/usuarios-form.component';
import { ComboComponent } from './components/comun/combo/combo.component';
import { TicketsRegComponent } from './components/tickets/tickets-reg/tickets-reg.component';
import { EquiposRegComponent } from './components/equipos/equipos-reg/equipos-reg.component';
import { HistorialComponent } from './components/historial/historial.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo:'usuarios'},
  {path: 'usuarios',component: UsuariosComponent},
  {path: 'usuarios/form',component: UsuariosFormComponent},
  {path: 'tickets/reg',component: TicketsRegComponent},
  {path: 'equipos/form',component: EquiposRegComponent},
  {path: 'usuarios/form/:id',component: UsuariosFormComponent},
  {path: 'tickets',component: TicketsComponent},
  {path: 'equipos',component: EquiposComponent},
  {path: 'historial',component: HistorialComponent},
  {path: 'combo',component: ComboComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
