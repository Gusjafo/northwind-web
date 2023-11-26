import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import {
  Observable,
  catchError,
  throwError as observableThrowError,
} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwt = this.authService.getToken();
    const authRequest = req.clone({
      setHeaders: { authorization: `Bearer ${jwt}` },
    });

    return next.handle(authRequest).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['login'], {
            queryParams: { redirectUrl: this.router.routerState.snapshot.url },
          });
        }
        return observableThrowError(err);
      })
    );
  }
}
