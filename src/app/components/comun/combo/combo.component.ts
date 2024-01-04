import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface User {
  rol: string;
  
}

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css'],
})
export class ComboComponent {
  userControl = new FormControl<User | null>(null, Validators.required);
  users: User[] = [
    { rol: 'Administrador'},
    { rol: 'Tecnico'},
    { rol: 'Funcionario' },
    
  ];
}




