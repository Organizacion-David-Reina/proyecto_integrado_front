import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UpdateClassDialogComponent } from '../update-class-dialog/update-class-dialog.component';
import { ClassService } from '../services/class.service';
import { ReservationRequest } from 'src/app/data/data';

@Component({
  selector: 'app-add-reservation-dialog',
  templateUrl: './add-reservation-dialog.component.html',
  styleUrls: ['./add-reservation-dialog.component.scss']
})
export class AddReservationDialogComponent {
  readonly dialogRef = inject(MatDialogRef<UpdateClassDialogComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  reservation: ReservationRequest = {
    classId: -1,
    studentNif: ''
  };
  errorMessage: string = '';

  constructor(private _classService: ClassService) {
    this.reservation.classId = this.data;
  }

  saveReservation(): void {
    this._classService.saveReservation(this.reservation).subscribe({
      next: () => this.dialogRef.close(true),
      error: err => this.errorMessage = err.error.message
    });
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
