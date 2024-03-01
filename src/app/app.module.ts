import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { TicketsRegComponent } from './components/tickets/tickets-reg/tickets-reg.component';
import { HistorialComponent } from './components/historial/historial.component';
import { EquiposRegComponent } from './components/equipos/equipos-reg/equipos-reg.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


/*function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080/',
          realm:'HelpDesk',
          clientId: 'HelpDesk-client'
        },
        initOptions: {
          onLoad: 'login-required',
          flow:"standard",
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html'
        },
        loadUserProfileAtStartUp:true
      });
  }*/
@NgModule({
    declarations: [
        AppComponent,
        UsuariosComponent,
        TicketsComponent,
        EquiposComponent,
        UsuariosFormComponent,
        ComboComponent,
        TicketsRegComponent,
        HistorialComponent,
        EquiposRegComponent
    ],
    providers: [/*{
        /*provide: APP_INITIALIZER,
        useFactory: initializeKeycloak,
        multi: true,
        deps: [KeycloakService]
      }*/],
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
        ReactiveFormsModule,
        MatStepperModule,
        MatButtonModule,
        KeycloakAngularModule,
        

    ]
})
export class AppModule { }
