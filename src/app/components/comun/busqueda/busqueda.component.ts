import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { EquipoService } from 'src/app/services/equipo.service';
import { EquipoDialogComponent } from '../equipo-dialog/equipo-dialog.component';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent {
  activoFijo: string='';
  equipoData: any;

  constructor(private dialog: MatDialog, private equipoService: EquipoService) { }

  buscarEquipo() {
    this.equipoService.obtActfijo(this.activoFijo).subscribe(data => {
      this.equipoData = data;
      this.openDialog();
    });
  }

  openDialog() {
    if (this.equipoData != null){
      const dialogo= this.dialog.open(EquipoDialogComponent, {
        data: this.equipoData, disableClose:true
      });
      dialogo.afterClosed().subscribe( result => {
        console .log( 'El diálogo se cerró' );
        this .equipoData = result;
     });
    }/*else{
      this.equipoData.id=0;
      this.equipoData.serieActivoFijo="";
      this.equipoData.tipoEquipo="";
      this.equipoData.marca="";
      this.equipoData.propietario="";
      this.equipoData.unidadOrg="";
      this.equipoData.observaciones="";
      this.dialog.open(EquipoDialogComponent, {
        data: this.equipoData
      });*/
    }
    
    
  
}