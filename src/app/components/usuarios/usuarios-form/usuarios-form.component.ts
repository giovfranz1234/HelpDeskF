import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit{
  titulo ='Crear Usuario';
  usuario : Usuario = new Usuario();


  constructor(private service: UsuarioService, private router:Router, private route:ActivatedRoute){


  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idString: string  | null = params.get('id');
      if(idString!==null){
        const id:number = +idString

      if(id){
        this.service.ver(id).subscribe(usuario=> this.usuario =usuario)
      }
    }
    })
  }
  public crear():void{
    this.service.crear(this.usuario).subscribe(usuario => {
      this.usuario.estado ='AC';
      console.log(usuario);
      alert (`Usuario ${usuario.nombres} ${usuario.paterno} creado correctamente`);
      this.router.navigate(['/usuarios'])
      });
  }
  public editar():void{
    this.usuario.estado ='AC';

    this.service.editar(this.usuario).subscribe(usuario => {
      console.log('asdasdasdasdasdasdasdasd====================>',usuario);
      alert (`Usuario ${usuario.nombres} ${usuario.paterno} actualizado correctamente`);
      this.router.navigate(['/usuarios'])
      });
  }
}

