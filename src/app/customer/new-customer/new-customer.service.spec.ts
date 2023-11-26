import { TestBed } from '@angular/core/testing';

import { NewCustomerService } from './new-customer.service';

describe('NewCustomerService', () => {
  let service: NewCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
