import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewCustomerService {
  constructor(private http: HttpClient) {}

  saveCustomerOnBD(data: AddOrEditCustomer): Observable<Response> {
    data.id = undefined;
    console.log("in service",data)
    return this.http
      .post(`${environment.urlService}customer`, data)
      .pipe(map((response: any) => response));
  }
}
