import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomerList(page: number, rows: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      `${environment.urlService}customer/GetPaginatedCustomer/${page}/${rows}`
    );
  }
}
