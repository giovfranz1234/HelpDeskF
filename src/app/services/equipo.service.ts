import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private baseEndpoint='http://localhost:8090/equipos';

  private cabecera: HttpHeaders= new HttpHeaders({'Content-Type':'Application/json'})
  constructor(private http:HttpClient) { this.http=http }

  public listar():Observable<Equipo[]>{
    return this.http.get<Equipo[]>(this.baseEndpoint);
  }
  public crear(equipo:Equipo): Observable<Equipo>{
    return this.http.post<Equipo>(this.baseEndpoint,equipo,{headers:this.cabecera});
  }
  
  public ver(id:number): Observable<Equipo>{
    return this.http.get<Equipo>(`${this.baseEndpoint}/${id}`);
  }
  
  public editar(equipo:Equipo): Observable<Equipo>{
    console.log('caebcera==========>', this.cabecera);

    return this.http.put<Equipo>(`${this.baseEndpoint}/${equipo.id}`,equipo,{headers:this.cabecera});
  }
  public eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
  public obtActfijo (activoFijo:string): Observable<Equipo>{
    return this.http.get<Equipo>(`${this.baseEndpoint}/actFijo/${activoFijo}`);
  }
}
