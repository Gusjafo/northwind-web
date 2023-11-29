import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderList } from '../models/order-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailService {
  constructor(private http: HttpClient) {}

  getOrderDetails(orderId: number): Observable<OrderList> {
    return this.http.get<OrderList>(
      `${environment.urlService}Order/GetOrderById/${orderId}`
    );
  }
}
