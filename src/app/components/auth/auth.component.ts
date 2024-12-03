import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
   usuario: Usuario;

   constructor(private sharingData: SharingDataService){
    this.usuario = new Usuario();
   }

  onSubmit(){
    if(!this.usuario.login||!this.usuario.password){
      Swal.fire(
        'Error de validacion',
        'Username y password requeridos!',
        'error'
      );
    } else{
      console.log(this.usuario);
      this.sharingData.handlerLoginEventEmitter.emit({ username: this.usuario.login, password: this.usuario.password });
    }
  }

}
