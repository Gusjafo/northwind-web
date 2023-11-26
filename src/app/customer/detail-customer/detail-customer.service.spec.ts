import { TestBed } from '@angular/core/testing';

import { DetailCustomerService } from './detail-customer.service';

describe('DetailCustomerService', () => {
  let service: DetailCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
