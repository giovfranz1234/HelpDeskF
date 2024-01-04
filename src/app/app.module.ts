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
import { ComboComponent } from "./components/comun/combo/combo.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    declarations: [
        AppComponent,
        UsuariosComponent,
        TicketsComponent,
        EquiposComponent,
        UsuariosFormComponent,
        ComboComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
