import { Component, OnInit } from '@angular/core';
import { OrderContainerService } from './order-container.service';
import { OrderList } from '../models/order-list';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss'],
  providers: [OrderContainerService],
})
export class OrderContainerComponent implements OnInit {
  items: OrderList[] = [];
  numberOfRecords: number = 0;
  columns: string[] = [
    'orderId',
    'orderDate',
    'orderNumber',
    'customerId',
    'customer',
    'totalAmount',
  ];
  columnsExpand = [...this.columns, 'expand'];
  isVisible: boolean = false;

  constructor(private orderContainerService: OrderContainerService) {}

  ngOnInit() {
    this.isVisible = true;
    this.getOrders(1, 10);
  }

  getOrders(page: number, rows: number): void {
    this.orderContainerService.getOrderList(page, rows).subscribe((res) => {
      this.items = res;
      this.numberOfRecords = res[0].totalRecords;
      this.isVisible = false;
    });
  }

  dataFromPaginator(data: { index: number; size: number }) {
    this.isVisible = true;
    this.getOrders(data.index + 1, data.size);
  }
}
