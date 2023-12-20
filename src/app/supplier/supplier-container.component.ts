import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SupplierService } from './supplier.service';
import { SwitchViewComponent } from '../shared/switch-view/switch-view.component';
import { Supplier } from './models/supplier-list';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, takeWhile } from 'rxjs';

@Component({
  selector: 'app-supplier-container',
  templateUrl: './supplier-container.component.html',
  styleUrls: ['./supplier-container.component.scss'],
  providers: [SupplierService],
})
export class SupplierContainerComponent implements OnInit, AfterViewInit {

  items: Supplier[] = [];
  totalItems: number = 0;
  isVisible: boolean = true;

  @ViewChild('cardViewTemplate') private cardViewTemplate!: TemplateRef<any>;
  @ViewChild('tableViewTemplate') private tableViewTemplate!: TemplateRef<any>;

  templates: Map<string, TemplateRef<any>> = new Map<
    string,
    TemplateRef<any>
  >();
  defaultTemplate: string | undefined;
  searchControl: FormControl = new FormControl();

  constructor(
    private supplierService: SupplierService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isVisible = true;
    this.defaultTemplate = SwitchViewComponent.CARD_KEY;
    this.getSuppliers(1, 10);
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        this.isVisible = true;
        this.getSuppliers(1, 10, val);
      });
  }

  ngAfterViewInit(): void {
    this.templates.set(SwitchViewComponent.CARD_KEY, this.cardViewTemplate);
    this.templates.set(SwitchViewComponent.TABLE_KEY, this.tableViewTemplate);
    this.ref.detectChanges();
  }

  getSuppliers(page: number, rows: number, searchTerm: string = '' ): void {
    this.supplierService
      .getSupplierList(page, rows, searchTerm)
      .subscribe((res: Supplier[]) => {
        this.items = res;
        this.totalItems = res[0].totalRecords;
        this.isVisible = false;
      });
  }

  dataFromPaginator(data: { index: number; size: number }) {
    this.getSuppliers(data.index + 1, data.size);
  }
}
