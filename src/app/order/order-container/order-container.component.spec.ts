import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderContainerComponent } from './order-container.component';

describe('OrderContainerComponent', () => {
  let component: OrderContainerComponent;
  let fixture: ComponentFixture<OrderContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderContainerComponent]
    });
    fixture = TestBed.createComponent(OrderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
