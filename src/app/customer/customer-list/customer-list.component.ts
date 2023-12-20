import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../models/customer';
import { PageEvent } from '@angular/material/paginator';
import { NumberInput } from '@angular/cdk/coercion';
import { MatDialog } from '@angular/material/dialog';
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { DetailCustomerComponent } from '../detail-customer/detail-customer.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  providers: [CustomerService],
})
export class CustomerListComponent {
  customers: Customer[] = [];
  pageSize: number = 10;
  pageIndex: number = 0;
  numberOfRecords: NumberInput = 0;
  pageSizeOptions: number[] = [7, 10, 25];

  pageEvent: PageEvent = {
    length: 50,
    pageSize: 10,
    pageIndex: 0,
  };

  constructor(
    private customerService: CustomerService,
    public dialog: MatDialog
  ) {
    this.getCustomer(this.pageIndex + 1, this.pageSize);
  }

  handlePageEvent(e: PageEvent): void {
    this.pageEvent = e;
    this.numberOfRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getCustomer(this.pageIndex + 1, this.pageSize);
  }

  getCustomer(page: number, rows: number): void {
    this.customerService.getCustomerList(page, rows).subscribe((response) => {
      this.customers = response;
      this.numberOfRecords = response[0].totalRecords;
    });
  }

  newCustomer(): void {
    this.dialog.open(NewCustomerComponent, {
      data: { title: 'Nuevo Cliente' },
    });
  }

  editCustomer(id: number): void {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      data: { title: 'Editar Cliente', id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getCustomer(1, 10);
    });
  }

  viewDetails(id: number): void {
    const dialogRef = this.dialog.open(DetailCustomerComponent, {
      data: { title: 'Detalles', id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
