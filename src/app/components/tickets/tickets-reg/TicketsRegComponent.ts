import { Component, Input, Output } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';

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

  mostrar: boolean;
  constructor() {
    this.mostrar = false;


  }
  public verificardatos(){
    console.log(this.equipoDato)
  }
  ngOnInit(){
    this.verificardatos();
  }

}

