import { Component, Inject, OnInit } from '@angular/core';
import { EditCustomerService } from './edit-customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { WhiteSpaceValidator } from 'src/app/shared/validators/whiteSpaceValidator';
import { CustomerService } from '../customer-list/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
  providers: [EditCustomerService],
})
export class EditCustomerComponent implements OnInit {
  newCustomerForm!: FormGroup;
  customer!: AddOrEditCustomer;

  constructor(
    private service: EditCustomerService,
    public dialogRef: MatDialogRef<EditCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.customerRetrieved(data.id);
  }

  ngOnInit(): void {
    this.buildNewCustomerForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  buildNewCustomerForm(): void {
    this.newCustomerForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, WhiteSpaceValidator.cannotContainSpace],
      ],
      lastName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: [
        '',
        [Validators.required, WhiteSpaceValidator.cannotContainSpace],
      ],
      phone: ['', [Validators.required]],
    });
  }

  customerRetrieved(id: number): void {
    this.service.getCustomerById(id).subscribe((response) => {
      this.customer = response;
      this.newCustomerForm.patchValue({
        firstName: response.firstName,
        lastName: response.lastName,
        city: response.city,
        country: response.country,
        phone: response.phone,
      });
    });
  }

  save(): void {
    if (this.newCustomerForm.dirty && this.newCustomerForm.valid) {
      const p = Object.assign({}, this.customer, this.newCustomerForm.value);
      p.id = this.data.id;
      this.service.editCustomer(p).subscribe((response) => {
        console.log("respuesta",response);
      });
      this.dialogRef.close();
    } else if (!this.newCustomerForm.dirty) {
      this.newCustomerForm.reset();
    }
  }
}
