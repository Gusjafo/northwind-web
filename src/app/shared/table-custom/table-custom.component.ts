import { Component, Input } from '@angular/core';
import { OrderItemList } from 'src/app/order/models/order-list';

@Component({
  selector: 'app-table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.scss']
})
export class TableCustomComponent {

  @Input() dataSource!: object[];
  @Input() columnsToDisplay: string[] = [];
  @Input() title!: string;

  trackColumn(index: number, column: any): any {
    return column; // Replace with the actual unique identifier from your data
  }
}
