import { Component } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/models/ticket';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  chartBar: any;

  constructor(private ticketService: TicketsService) {

  }
  ngOnInit(): void { this.armarGrafico() }



  grafico() {


    this.ticketService.listar().subscribe(tickets => tickets = tickets);
  }

  armarGrafico() {
    
    this.chartBar = new Chart('canvas-bar',{
      type:'line',//'bar',//'doughnut',
     data : {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 150, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
       
      }]
    }});
  }
}
/*  titulo ='Historial';
  historial: Historial[]=[];
  constructor(private service:HistorialService) {

    }
  ngOnInit() {
    this.service.listar().subscribe(equipos =>  this.equipos = equipos);

    console.log(this.equipos);
  }
  public eliminar(equipo:Equipo):void{
    if(confirm(`seguro que desea eliminar el Equipo registrado?`))
    this.service.eliminar(equipo.id).subscribe(()=> {
  this.equipos= this.equipos.filter(a=>a!==equipo);
  alert(`Equipo eliminado `)
  })


  }*/


