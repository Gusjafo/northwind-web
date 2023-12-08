import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from './models/supplier-list';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  constructor(private http: HttpClient) {}

  getSupplierList(
    page: number,
    rows: number,
    key: string
  ): Observable<Supplier[]> {
    return this.http.post<Supplier[]>(
      `${environment.urlService}Supplier/GetPaginatedSupplier`,
      { page: page, rows: rows, searchTerm: key }
    );
  }
}
