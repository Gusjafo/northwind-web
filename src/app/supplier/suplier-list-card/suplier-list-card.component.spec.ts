import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierListCardComponent } from './suplier-list-card.component';

describe('SuplierListCardComponent', () => {
  let component: SuplierListCardComponent;
  let fixture: ComponentFixture<SuplierListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuplierListCardComponent]
    });
    fixture = TestBed.createComponent(SuplierListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
