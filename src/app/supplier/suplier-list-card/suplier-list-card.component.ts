import { Component, Input } from '@angular/core';
import { Supplier } from '../models/supplier-list';

@Component({
  selector: 'app-suplier-list-card',
  templateUrl: './suplier-list-card.component.html',
  styleUrls: ['./suplier-list-card.component.scss']
})
export class SuplierListCardComponent {
  @Input() items: Supplier[] = [];

}
