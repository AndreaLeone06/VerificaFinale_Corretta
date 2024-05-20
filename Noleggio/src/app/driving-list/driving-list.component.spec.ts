import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingListComponent } from './driving-list.component';

describe('DrivingListComponent', () => {
  let componente: DrivingListComponent;
  let abe: ComponentFixture<DrivingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrivingListComponent]
    });
    abe = TestBed.createComponent(DrivingListComponent);
    componente = abe.componentInstance;
    abe.detectChanges();
  });

  it('should create', () => {
    expect(componente).toBeTruthy();
  });
});
