import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { WhiteSpaceValidator } from 'src/app/shared/validators/whiteSpaceValidator';
import { NewCustomerService } from './new-customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
  providers: [NewCustomerService],
})
export class NewCustomerComponent implements OnInit {
  newCustomerForm!: FormGroup;
  customer!: AddOrEditCustomer;

  constructor(
    public dialogRef: MatDialogRef<NewCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private service: NewCustomerService
  ) {}

  ngOnInit(): void {
    this.buildNewCustomerForm();
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveCustomer(): void {
    const p = Object.assign({}, this.customer, this.newCustomerForm.value);
    if (this.newCustomerForm.dirty && this.newCustomerForm.valid) {
      this.service
      .saveCustomerOnBD(p)
      .subscribe((response) => console.log(response));
    this.dialogRef.close();
    } else if (!this.newCustomerForm.dirty) {
      this.newCustomerForm.reset()
    }
  }
}
