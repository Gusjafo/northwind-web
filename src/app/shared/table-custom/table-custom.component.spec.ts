import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomComponent } from './table-custom.component';

describe('TableCustomComponent', () => {
  let component: TableCustomComponent;
  let fixture: ComponentFixture<TableCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCustomComponent]
    });
    fixture = TestBed.createComponent(TableCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
