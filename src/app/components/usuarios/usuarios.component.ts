import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {Usuario} from "../../models/usuario";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
    titulo ='Listado de Usuarios';
    usuarios: Usuario[]=[];
    constructor(private service:UsuarioService) {

      }
    ngOnInit() {
      this.service.listarus().subscribe(usuarios =>  this.usuarios = usuarios);

      console.log(this.usuarios);
    }
    public eliminar(usuario:Usuario):void{
      if(confirm(`seguro que desea eliminar el usuario?`))
      this.service.eliminar(usuario.id).subscribe(()=> {
    this.usuarios= this.usuarios.filter(a=>a!==usuario);
    alert(`Usuario eliminado `)
    })


    }
}
