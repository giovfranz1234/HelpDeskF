import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-ticket-asignacion',
  templateUrl: './ticket-asignacion.component.html',
  styleUrls: ['./ticket-asignacion.component.css']
})
export class TicketAsignacionComponent {
  titulo ='Tickets para Asignar';
  tickets: Ticket[] = [];
  constructor(private service:TicketsService) {
 
  }
  ngOnInit(){
    this.service.listarAs().subscribe(tickets =>  this.tickets = tickets);  
  }

}
