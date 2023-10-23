import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role';

const customerRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomerListComponent,
      },
    ],
    canActivate: [AuthGuard],
    data: { expectedRole: Role.AdminSupplier },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {

}
