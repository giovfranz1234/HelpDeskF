import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';
import { Grafico } from '../models/grafico';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private baseEndpoint='http://localhost:8090/tickets';

  private cabecera: HttpHeaders= new HttpHeaders({'Content-Type':'Application/json'})
  constructor(private http:HttpClient) { this.http=http }

  public listar():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.baseEndpoint);
  }

  public listarAs():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.baseEndpoint+'/asigna');
  }
  public listarcierre():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.baseEndpoint+'/asigna');
  }
  public crear(ticket:Ticket): Observable<Ticket>{
    return this.http.post<Ticket>(this.baseEndpoint,ticket,{headers:this.cabecera});
  }

  public ver(id:number): Observable<Ticket>{
    return this.http.get<Ticket>(`${this.baseEndpoint}/${id}`);
  }

  public editar(ticket:Ticket): Observable<Ticket>{
    console.log('cabecera==========>', this.cabecera);

    return this.http.put<Ticket>(`${this.baseEndpoint}/${ticket.id}`,ticket,{headers:this.cabecera});
  }
  public eliminar(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
  public mostrarGrafico():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.baseEndpoint);
  }
  public generaPdf(){
    console.log ('aqui=====>',this.baseEndpoint+'/exportpdf');
    return this.http.get(this.baseEndpoint+'/exportpdf',{responseType:'blob'});
  }
  public graficos(){
    return this.http.get<Grafico[]>(this.baseEndpoint+'/Grafico',{headers:this.cabecera})
  }
  }

