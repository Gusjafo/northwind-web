import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderContainerComponent } from './order-container/order-container.component';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    OrderContainerComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class OrderModule { }
