import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = inject(AuthService).token;
    if(token != undefined){
      const authReq= request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
        
      });
      console.log('tokeninterceptor',token);
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
