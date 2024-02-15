import { Component } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
  titulo ='Listado de Equipos';
  equipos: Equipo[]=[];
  constructor(private service:EquipoService) {
 
    }
  ngOnInit() {
    volver:false
    this.service.listar().subscribe(equipos =>  this.equipos = equipos);

    console.log(this.equipos);
  }
  public eliminar(equipo:Equipo):void{
    if(confirm(`seguro que desea eliminar el Equipo registrado?`))
    this.service.eliminar(equipo.id).subscribe(()=> {
  this.equipos= this.equipos.filter(a=>a!==equipo);
  alert(`Equipo eliminado `)
  })


  }
}
