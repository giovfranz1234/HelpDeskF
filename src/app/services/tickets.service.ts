import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private baseEndpoint='http://localhost:8090/HelpDesk/tickets';

  private cabecera: HttpHeaders= new HttpHeaders({'Content-Type':'Application/json'})
  constructor(private http:HttpClient) { this.http=http }

  public listar():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.baseEndpoint);
  }
  public crear(ticket:Ticket): Observable<Ticket>{
    return this.http.post<Ticket>(this.baseEndpoint,ticket,{headers:this.cabecera});
  }
  
  public ver(id:number): Observable<Ticket>{
    return this.http.get<Ticket>(`${this.baseEndpoint}/${id}`);
  }
  
  public editar(ticket:Ticket): Observable<Ticket>{
    console.log('caebcera==========>', this.cabecera);

    return this.http.put<Ticket>(`${this.baseEndpoint}/${ticket.id}`,ticket,{headers:this.cabecera});
  }
  public eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
  }
