import { Component, Input } from '@angular/core';
import { Supplier } from '../models/supplier-list';

@Component({
  selector: 'app-suplier-list-table',
  templateUrl: './suplier-list-table.component.html',
  styleUrls: ['./suplier-list-table.component.scss'],
})
export class SuplierListTableComponent {
  @Input() items: Supplier[] = [];
  columns: string[] = [
    'id',
    'companyName',
    'contactName',
    'city',
    'phone',
    'fax',
  ];
}
