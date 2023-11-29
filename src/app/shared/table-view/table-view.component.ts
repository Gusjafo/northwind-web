import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NumberInput } from '@angular/cdk/coercion';
import { OrderList } from 'src/app/order/models/order-list';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableViewComponent {

  @Input() dataSource: OrderList[] = [];
  @Input() columnsToDisplay: string[] = [];
  @Input() columnsToDisplayWithExpand: string[] = [];
  expandedElement = [];

  @Output() dataFromPaginator = new EventEmitter<any>();

  pageSize: number = 10;
  pageIndex: number = 0;
  numberOfRecords: NumberInput = 0;
  pageSizeOptions: number[] = [7, 10, 25];

  ngAfterContentChecked() {
    // Acciones después de la verificación del contenido proyectado
    this.numberOfRecords = this.dataSource[0]?.totalRecords;
  }

  trackColumn(index: number, column: any): any {
    return column; // Replace with the actual unique identifier from your data
  }

  handlePageEvent(e: PageEvent): void {
    this.numberOfRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.dataFromPaginator.emit({size: this.pageSize, index: this.pageIndex})
  }
}
