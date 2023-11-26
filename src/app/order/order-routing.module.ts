import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role';
import { OrderContainerComponent } from './order-container/order-container.component';
import { CommonModule } from '@angular/common';

const orderRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OrderContainerComponent,
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
