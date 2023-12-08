import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierListTableComponent } from './suplier-list-table.component';

describe('SuplierListTableComponent', () => {
  let component: SuplierListTableComponent;
  let fixture: ComponentFixture<SuplierListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuplierListTableComponent]
    });
    fixture = TestBed.createComponent(SuplierListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
