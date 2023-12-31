import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseEndpoint='http://locahost:8090/HelpDesk/usuarios'
  constructor(private http:HttpClient) { this.http=http }
}
