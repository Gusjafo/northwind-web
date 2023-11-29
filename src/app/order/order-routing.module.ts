import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role';
import { OrderContainerComponent } from './order-container/order-container.component';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const orderRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OrderContainerComponent,
      },
      {
        path: 'detail/:orderId',
        component: OrderDetailComponent,
      },
    ],
    canActivate: [AuthGuard],
    data: { expectedRole: Role.AdminSupplier },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(orderRoutes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
