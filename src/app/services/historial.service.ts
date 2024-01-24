import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
/*  private baseEndpoint='http://localhost:8090/HelpDesk/historial';

  private cabecera: HttpHeaders= new HttpHeaders({'Content-Type':'Application/json'})
  constructor(private http:HttpClient) { this.http=http }

  public listar():Observable<Historial[]>{
    return this.http.get<Historial[]>(this.baseEndpoint);
  }
  public crear(equipo:Historial): Observable<Historial>{
    return this.http.post<Historial>(this.baseEndpoint,historial,{headers:this.cabecera});
  }
  
  public ver(id:number): Observable<Historial>{
    return this.http.get<Historial>(`${this.baseEndpoint}/${id}`);
  }
  
  public editar(equipo:Historial): Observable<Historial>{
    console.log('caebcera==========>', this.cabecera);

    return this.http.put<Historial>(`${this.baseEndpoint}/${historial.id}`,equipo,{headers:this.cabecera});
  }
  public eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }*/
}
