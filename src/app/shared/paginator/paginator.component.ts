import { NumberInput } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() totalItems: NumberInput;
  @Output() dataFromPaginator = new EventEmitter<any>();

  pageSize: NumberInput = 10;
  pageIndex: NumberInput;
  pageSizeOptions: number[] = [7, 10, 25];

  pageEvent: PageEvent = {
    length: 50,
    pageSize: 10,
    pageIndex: 0,
  };

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalItems = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.dataFromPaginator.emit({ size: this.pageSize, index: this.pageIndex });
  }
}
