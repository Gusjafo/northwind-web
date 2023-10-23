import { Injectable } from '@angular/core';
import { Role } from './role';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { transformError } from '../common/common';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends CacheService {
  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<IServerAuthResponse>;

  authStatus = new BehaviorSubject<IAuthStatus>(
    this.getItem('authStatus', '') || defaultAuthStatus
  );

  constructor(private httpClient: HttpClient) {
    super();
    this.authStatus.subscribe((authStatus) => {
      this.setItem('authStatus', authStatus);
    });
    this.authProvider = this.userAuthProvider;
  }

  private userAuthProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    return this.httpClient.post<IServerAuthResponse>(
      `${environment.urlService}token/`,
      { email: email, password: password }
    );
  }

  login(email: string, password: string): Observable<IAuthStatus> {
    this.logout();

    const loginResponse = this.authProvider(email, password).pipe(
      map((value) => {
        this.setToken(value.access_token);
        const result = jwt_decode<IAuthStatus>(value.access_token);
        return result as IAuthStatus;
      }),
      catchError(transformError)
    );

    loginResponse.subscribe({
      next: (res) => this.authStatus.next(res),
      error: (err: any) => {
        this.logout();
        return err;
      },
    });

    return loginResponse;
  }

  logout() {
    this.clearToken();
    this.authStatus.next(defaultAuthStatus);
  }

  private setToken(jwt: string) {
    this.setItem('jwt', jwt);
  }

  getToken(): string {
    return this.getItem('jwt', '');
  }

  private clearToken() {
    this.removeItem('jwt');
  }

  getAuthStatus(): IAuthStatus {
    return this.getItem<IAuthStatus>('authStatus', defaultAuthStatus);
  }
}

export interface IAuthStatus {
  role: Role;
  primarysid: number | null;
  unique_name: string | null;
}

interface IServerAuthResponse {
  access_token: string;
}

export const defaultAuthStatus: IAuthStatus = {
  role: Role.None,
  primarysid: null,
  unique_name: null,
};
