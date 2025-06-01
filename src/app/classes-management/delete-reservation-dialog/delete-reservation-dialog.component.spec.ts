import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReservationDialogComponent } from './delete-reservation-dialog.component';

describe('DeleteReservationDialogComponent', () => {
  let component: DeleteReservationDialogComponent;
  let fixture: ComponentFixture<DeleteReservationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteReservationDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteReservationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
