
import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";
import {Ticket} from "../../models/ticket";
import { TicketsService } from 'src/app/services/tickets.service';


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
    constructor(private service:TicketsService) {

      }
    ngOnInit() {
     this.service.listar().subscribe(tickets =>  this.tickets = tickets);

      console.log(this.tickets);
    }
   /* public eliminar(ticket:Ticket):void{
      if(confirm(`seguro que desea eliminar el usuario?`))
      this.service.eliminar(ticket.id).subscribe(()=> {
    this.tickets= this.tickets.filter(a=>a!==ticket);
    alert(`Usuario eliminado `)
    })*/


    }

