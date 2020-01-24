import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwt = localStorage.getItem('jwt');
        if (!!jwt) {
            req = req.clone({
                setHeaders: {
                    Authorization: jwt
                }
            });
        }
        return next.handle(req);
    }
}
