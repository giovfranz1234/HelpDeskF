import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketsService } from 'src/app/services/tickets.service';


@Component({
  selector: 'app-ticket-cierre',
  templateUrl: './ticket-cierre.component.html',
  styleUrls: ['./ticket-cierre.component.css']
})
export class TicketCierreComponent {
titulo ='Tickets para Asignar';
tickets: Ticket[] = [];
constructor(private service:TicketsService) {
 
}
ngOnInit(){
  this.service.listarcierre().subscribe(tickets =>  this.tickets = tickets);  
}

}
