import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseEndpoint='http://localhost:8090/HelpDesk/usuarios'
  constructor(private http:HttpClient) { this.http=http }
  public listarus():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseEndpoint);
  }
}
