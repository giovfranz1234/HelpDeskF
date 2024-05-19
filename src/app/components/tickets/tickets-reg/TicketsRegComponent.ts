import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { Ticket } from 'src/app/models/ticket';
import { TicketsService } from 'src/app/services/tickets.service';

/**
 * @title Stepper lazy content rendering
 */

@Component({
  selector: 'app-tickets-reg',
  templateUrl: './tickets-reg.component.html',
  styleUrls: ['./tickets-reg.component.css']
})
export class TicketsRegComponent {
  @Input() equipoDato: Equipo=new Equipo;
  ticket: Ticket = new Ticket();
  mostrar: boolean;
  constructor(private service:TicketsService,private router:Router, private route:ActivatedRoute) {
    this.mostrar = false;


  }
  public verificardatos(){
    console.log('verificacione de datos',this.equipoDato)
  }
  ngOnInit(){
   
  }
  public crear():void{
    this.ticket.dispositivo = this.equipoDato.id;
    const formato = new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    formato.format(this.ticket.fechaRegistro);
    this.ticket.fechaFin = null;
    this.ticket.fechaInicio = null;
    this.ticket.creadoPor = 1
    this.ticket.dispositivo = this.equipoDato.id;
    this.verificardatos();
    this.ticket.estado ='NA';
    this.service.crear(this.ticket).subscribe(ticket => {
      
      
      console.log(this.ticket);
      alert (`Ticket ${ticket.id} creado correctamente`);
      this.router.navigate(['/tickets'])
      });
  }
  public editar():void{
    this.ticket.estado ='AC';

    this.service.editar(this.ticket).subscribe(ticket => {
      console.log('asdasdasdasdasdasdasdasd====================>',ticket);
      alert (`Usuario ${ticket.id}  actualizado correctamente`);
      this.router.navigate(['/tickets'])
      });
  }
}

