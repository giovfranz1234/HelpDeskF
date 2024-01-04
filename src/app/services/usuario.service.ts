import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseEndpoint='http://localhost:8090/HelpDesk/usuarios';

  private cabecera: HttpHeaders= new HttpHeaders({'Content-Type':'Application/json'})
  constructor(private http:HttpClient) { this.http=http }
  public listarus():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseEndpoint);
  }
  public crear(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseEndpoint,usuario,{headers:this.cabecera});
  }
  
  public ver(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseEndpoint}/${id}`);
  }
  

}
