import { TestBed } from '@angular/core/testing';

import { OrderContainerService } from './order-container.service';

describe('OrderContainerService', () => {
  let service: OrderContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
