import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosFormComponent } from './components/usuarios/usuarios-form/usuarios-form.component';
import { ComboComponent } from './components/comun/combo/combo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TicketsComponent,
    EquiposComponent,
    UsuariosFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
