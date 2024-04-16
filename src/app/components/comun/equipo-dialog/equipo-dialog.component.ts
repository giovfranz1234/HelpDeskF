import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-equipo-dialog',
  templateUrl: './equipo-dialog.component.html',
  styleUrls: ['./equipo-dialog.component.css']
})

export class EquipoDialogComponent {
  constructor(public dialogo:MatDialogRef<EquipoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogo.close();
  }
}