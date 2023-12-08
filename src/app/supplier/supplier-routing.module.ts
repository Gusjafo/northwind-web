import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierContainerComponent } from './supplier-container.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role';

const supplierRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SupplierContainerComponent,
      },
    ],
    canActivate: [AuthGuard],
    data: { expectedRole: Role.AdminSupplier },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(supplierRoutes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {}
