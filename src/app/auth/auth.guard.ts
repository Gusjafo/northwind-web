import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanMatchFn,
  Router,
} from '@angular/router';
import { AuthService, IAuthStatus, defaultAuthStatus } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  protected currentAuthStatus: IAuthStatus = defaultAuthStatus;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.authStatus.subscribe(
      (authStatus) =>
        (this.currentAuthStatus = this.authService.getAuthStatus())
    );
  }

  canMatch: CanMatchFn = ():
    | Observable<boolean>
    | Promise<boolean>
    | boolean => {
    return this.checkLogin();
  };

  canActivateChild: CanActivateChildFn = (
    childRoute: ActivatedRouteSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> => {
    return this.checkPermissions(this.router, childRoute);
  };

  canActivate: CanActivateFn = (
    next: ActivatedRouteSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> => {
    return this.checkPermissions(this.router, next);
  };

  protected checkLogin() {
    if (
      this.authService.getToken() == null ||
      this.authService.getToken() === ''
    ) {
      alert('Debes loguearte para continuar..');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  protected checkPermissions(router: Router, route?: ActivatedRouteSnapshot) {
    let roleMatch = true;
    if (route) {
      const expectedRole = route.data['expectedRole'];
      if (expectedRole) {
        roleMatch = this.currentAuthStatus.role === expectedRole;
      }
    }
    if (!roleMatch) {
      alert('No tienes permisos para ver este recurso');
      router.navigate(['home']);
      return false;
    }
    return true;
  }
}
