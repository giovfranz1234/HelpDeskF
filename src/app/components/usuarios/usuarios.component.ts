import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {Usuario} from "../../models/usuario";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
    titulo ='Listado de Usuarios';
    usuarios: Usuario[]=[];
    filtroApellido:String='';
    filtroNombre:String='';
    filtroMaterno:String='';
    filtroDocIdentidad:String='';
    
    constructor(private service:UsuarioService) {

      }
      get filteredItems(): Usuario[] {
        return this.usuarios.filter(usuario => 
          usuario.nombres.toLowerCase().includes(this.filtroNombre.toLowerCase())&&
          usuario.paterno.toLowerCase().includes(this.filtroApellido.toLowerCase())&&
          usuario.materno.toLowerCase().includes(this.filtroMaterno.toLowerCase())&&
          usuario.docIdentidad.toLowerCase().includes(this.filtroDocIdentidad.toLowerCase())
          
          
        );
      }
    ngOnInit() {
      this.service.listarus().subscribe(usuarios =>  {this.usuarios = usuarios
       
        console.log(this.usuarios.length);
      }
        
      );
     
      console.log(this.usuarios.length);
    }
    public eliminar(usuario:Usuario):void{
      if(confirm(`seguro que desea eliminar el usuario?`))
      this.service.eliminar(usuario.id).subscribe(()=> {
    this.usuarios= this.usuarios.filter(a=>a!==usuario);
    alert(`Usuario eliminado `)
    })
   
    }
    

}
