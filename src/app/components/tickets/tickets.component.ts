
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
    volver =false;
    tickets: Ticket[]=[];
    filtroId : string='';
    filtroDispositivo : string='';
    @Output() ticket= new EventEmitter<any>();
    constructor(private service:TicketsService) {
    
      }
      get filteredItems(): Ticket[] {
        return this.tickets.filter(ticket => 
          ticket.id.toString().toLowerCase().includes(this.filtroId.toString().toLowerCase())&&
          ticket.dispositivo.toString().toLowerCase().includes(this.filtroDispositivo.toString().toLowerCase())
        
          
          
        );
      }
    ngOnInit() {
     this.service.listar().subscribe(tickets =>  this.tickets = tickets);
     this.ticket.emit(this.tickets);
      console.log(this.tickets);
    }
   public eliminar(ticket:Ticket):void{
      if(confirm(`seguro que desea eliminar el usuario?`))
      this.service.eliminar(ticket.id).subscribe(()=> {
    this.tickets= this.tickets.filter(a=>a!==ticket);
    alert(`Usuario eliminado `)
    })
  }
   public getPdf(){
       this.service.generaPdf().subscribe(data=>{    
        let blob= window.URL.createObjectURL(data);               
        let link=document.createElement('a');
        link.href=blob
        link.download="reporteTickets.pdf";
        link.click();

       })
       
    }


   
}