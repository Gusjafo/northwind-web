import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from './order-detail.service';
import { OrderItemList, OrderList } from '../models/order-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  providers: [OrderDetailService],
})
export class OrderDetailComponent implements OnInit {
  orderMain!: OrderList[];
  orderDetails!: OrderItemList[];
  columnsMain: string[] = [
    'customer',
    'orderDate',
    'orderNumber',
    'totalAmount',
  ];
  columnsDetails: string[] = [
    'productId',
    'productName',
    'quantity',
    'unitPrice',
  ];

  constructor(
    private orderDetailService: OrderDetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getOrderDetails(params['orderId'] ?? 0);
    });
  }

  getOrderDetails(orderId: number): void {
    this.orderDetailService.getOrderDetails(orderId).subscribe((res) => {
      this.orderMain = [res];
      this.orderDetails = res.orderDetails;
    });
  }
}
