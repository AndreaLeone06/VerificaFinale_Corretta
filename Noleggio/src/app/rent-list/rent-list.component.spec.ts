import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentListComponent } from './rent-list.component';

describe('RentListComponent', () => {
  let componente: RentListComponent;
  let abe: ComponentFixture<RentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentListComponent]
    });
    abe = TestBed.createComponent(RentListComponent);
    componente = abe.componentInstance;
    abe.detectChanges();
  });

  it('should create', () => {
    expect(componente).toBeTruthy();
  });
});
