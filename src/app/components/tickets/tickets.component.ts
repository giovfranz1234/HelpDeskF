
import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {Ticket} from "../../models/ticket";


/**
 * @title Stepper lazy content rendering
 */
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit{
    titulo ='Listado de Tickets';
    tickets: Ticket[]=[];
    constructor(private service:UsuarioService) {

      }
    ngOnInit() {
    /* this.service.listarus().subscribe(usuarios =>  this.usuarios = usuarios);

      console.log(this.usuarios);
    }
    public eliminar(usuario:Usuario):void{
      if(confirm(`seguro que desea eliminar el usuario?`))
      this.service.eliminar(usuario.id).subscribe(()=> {
    this.usuarios= this.usuarios.filter(a=>a!==usuario);
    alert(`Usuario eliminado `)
    })*/


    }
}
