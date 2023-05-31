import { Component, Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-interceptor',
  templateUrl: './my-interceptor.component.html',
  styleUrls: ['./my-interceptor.component.scss'],
})
@Injectable()
export class MyInterceptorComponent implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify the request or response behavior here
    //modify headers, handle errors, authentication tokens
    // fetchData() {
    //   this.http.get('https://api.example.com/data').subscribe((response: any) => {
    //     this.data = response;
    //   });
    // }
    
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer myToken'),
    });
    
    return next.handle(modifiedRequest);
  }
  
}
