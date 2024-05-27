import { Component, Input } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from '../../models/ticket';
import Chart from 'chart.js/auto';
import { Grafico } from 'src/app/models/grafico';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  chartBar: any;
  chartline: any;
  @Input() ticketf: Ticket[] = [];
  asignados: number = 0;
  noasignados: number = 0;
  terminados: number = 0;
  tickets: Ticket[] = [];
  datos: Grafico[] = [];
  tecnicos: string[] = [];
  nroTickets: number []=[];
  constructor(private ticketService: TicketsService) {
  }
  ngOnInit(): void {
    this.grafico(), this.armarlinetime();

  }

  grafico() {
    this.ticketService.listar().subscribe(tickets => {
      this.tickets = tickets;
      console.log('NO ASIGNADO', tickets);
      for (let i = 0; i < this.tickets.length; i++) {
        if (this.tickets[i].estado == 'NO ASIGNADO') {
          this.noasignados++;
          console.log('========>', this.noasignados);
        } else if (tickets[i].estado == 'ASIGNADO') {
          this.asignados++;
        } else if (tickets[i].estado == 'TERMINADO') {
          this.terminados++;
        }
      }
      this.chartBar = new Chart('canvas-bar', {
        type: 'polarArea', //'bar',//'doughnut',
        data: {
          labels: [
            'NO ASIGNADO',
            'TERMINADO',
            'ASIGNADO'
          ],
          datasets: [{
            label: 'Detalle de tickets',
            data: [this.noasignados, this.terminados, this.asignados],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
          }]
        }
      });
      /*
    
  }*/
    });
  }

  /* armarGrafico() {
     this.grafico();
     this.chartBar = new Chart('canvas-bar',{
       type:'doughnut',//'bar',//'doughnut',
      data : {
       labels: [
         'NO ASIGNADO',
         'TERMINADO',
         'ASIGNADO'
       ],
       datasets: [{
         label: 'Detalle de tickets',
         data: [this.noasignados, this.terminados, this.asignados],
         backgroundColor: [
           'rgb(255, 99, 132)',
           'rgb(54, 162, 235)',
           'rgb(255, 205, 86)'
         ],
        
       }]
     }});
   }*/
  armarlinetime() {
    this.ticketService.graficos().subscribe(datos => {
      this.datos = datos;
      for (let i = 0; i < this.datos.length; i++) {
        this.tecnicos[i] =this.datos[i].tecnico;
        this.nroTickets [i]= this.datos[i].count;      
      }
      this.chartline = new Chart('canvas-line', {
        type: 'bar', //'bar',//'doughnut',

        data: {
          labels:  this.tecnicos,
          datasets: [{
            label: 'Tickets Asignados',
            xAxisID: 'x',

            data: this.nroTickets,

            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
          }]
        }
      });

    });
  }

}
