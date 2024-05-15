import { Component, Input } from '@angular/core';

/**
 * @title Stepper lazy content rendering
 */

@Component({
  selector: 'app-tickets-reg',
  templateUrl: './tickets-reg.component.html',
  styleUrls: ['./tickets-reg.component.css']
})
export class TicketsRegComponent {
  @Input() equipo: Array<any> = [];

  mostrar: boolean;
  constructor() {
    this.mostrar = false;

  }
  
}
