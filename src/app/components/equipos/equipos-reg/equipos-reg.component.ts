import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipos-reg',
  templateUrl: './equipos-reg.component.html',
  styleUrls: ['./equipos-reg.component.css']
})
export class EquiposRegComponent implements OnInit{
  titulo ='Registrar Equipo';
  equipo : Equipo = new Equipo();
  mostrar=true;

  constructor(private service: EquipoService, private router:Router, private route:ActivatedRoute){


  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idString: string  | null = params.get('id');
      if(idString!==null){
        const id:number = +idString

      if(id){
        this.service.ver(id).subscribe(equipo=> this.equipo =equipo)
        this.mostrar =false;
      }
    }
    })
  }
  public crear():void{
    this.service.crear(this.equipo).subscribe(equipo => {
      console.log(equipo);
      alert (`Usuario ${equipo.serieActivoFijo} ${equipo.tipoEquipo} creado correctamente`);
      this.router.navigate(['/equipos'])
      });
  }
  public editar():void{
    

    this.service.editar(this.equipo).subscribe(equipo => {
      console.log('asdasdasdasdasdasdasdasd====================>',equipo);
      alert (`Usuario ${equipo.serieActivoFijo} ${equipo.tipoEquipo} creado correctamente`);
      this.router.navigate(['/equipos'])
      });
  }

}


