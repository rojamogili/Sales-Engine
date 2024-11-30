import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let request: HttpRequest<any> = req.clone({
        setHeaders: {
          auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        }        
      });

      return next.handle(request)

  }
}
