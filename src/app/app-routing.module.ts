import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {UsuariosComponent} from "./components/usuarios/usuarios.component";
import {EquiposComponent} from "./components/equipos/equipos.component";
import {TicketsComponent} from "./components/tickets/tickets.component";
import { UsuariosFormComponent } from './components/usuarios/usuarios-form/usuarios-form.component';
import { ComboComponent } from './components/comun/combo/combo.component';
import { TicketsRegComponent } from './components/tickets/tickets-reg/TicketsRegComponent';
import { EquiposRegComponent } from './components/equipos/equipos-reg/equipos-reg.component';
import { HistorialComponent } from './components/historial/HistorialComponent';
import { TicketAsignacionComponent } from './components/ticket-asignacion/ticket-asignacion.component';
import { TicketCierreComponent } from './components/ticket-cierre/ticket-cierre.component';
import { AuthComponent } from './components/auth/auth.component';
import { Forbidden403Component } from './components/forbidden403/forbidden403.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo:'login'},
  {path: 'usuarios',component: UsuariosComponent},
  {path: 'usuarios/form',component: UsuariosFormComponent},
  {path: 'tickets/reg',component: TicketsRegComponent},
  {path: 'tickets/reg/:id',component: TicketsRegComponent},
  {path: 'equipos/form',component: EquiposRegComponent},
  {path: 'equipos/form/:id',component: EquiposRegComponent},
  {path: 'usuarios/form/:id',component: UsuariosFormComponent},
  {path: 'tickets',component: TicketsComponent,
    canActivate:[authGuard]
  },
    {path: 'equipos',component: EquiposComponent},
  {path: 'historial',component: HistorialComponent},
  {path: 'combo',component: ComboComponent},
  {path: 'tickets/asignacion',component: TicketAsignacionComponent},
  {path: 'tickets/cierre',component: TicketCierreComponent},
  {path: 'login', component: AuthComponent},
  {path: 'forbidden',component: Forbidden403Component },
    {
        path: 'forbidden',
        component: Forbidden403Component
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
