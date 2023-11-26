import { Component, Inject } from '@angular/core';
import { DetailCustomerService } from './detail-customer.service';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss'],
  providers: [DetailCustomerService],
})
export class DetailCustomerComponent {
  customer!: AddOrEditCustomer;

  constructor(
    private service: DetailCustomerService,
    public dialogRef: MatDialogRef<DetailCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.customerRetrieved(data.id)
  }

  customerRetrieved(id: number): void {
    this.service.getCustomerById(id).subscribe((response) => {
      this.customer = response;
    });
  }
}
