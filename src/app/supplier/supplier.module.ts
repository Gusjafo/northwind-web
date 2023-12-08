import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierContainerComponent } from './supplier-container.component';
import { SuplierListTableComponent } from './suplier-list-table/suplier-list-table.component';
import { SuplierListCardComponent } from './suplier-list-card/suplier-list-card.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SupplierContainerComponent,
    SuplierListTableComponent,
    SuplierListCardComponent,
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SupplierModule {}
