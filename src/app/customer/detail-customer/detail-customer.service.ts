import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DetailCustomerService {
  constructor(private http: HttpClient) {}

  getCustomerById(id: number): Observable<AddOrEditCustomer> {
    return this.http.get<AddOrEditCustomer>(
      `${environment.urlService}customer/${id}`
    );
  }
}
