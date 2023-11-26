import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditCustomerService {
  constructor(private http: HttpClient) {}

  getCustomerById(id: number): Observable<AddOrEditCustomer> {
    return this.http.get<AddOrEditCustomer>(
      `${environment.urlService}customer/${id}`
    );
  }

  editCustomer(data: AddOrEditCustomer): Observable<Response> {
    return this.http
      .put(`${environment.urlService}customer`, data)
      .pipe(map((response: any) => response));
  }
}
