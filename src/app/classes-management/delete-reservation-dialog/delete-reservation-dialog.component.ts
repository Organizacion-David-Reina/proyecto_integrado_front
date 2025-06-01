import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-delete-reservation-dialog',
  templateUrl: './delete-reservation-dialog.component.html',
  styleUrls: ['./delete-reservation-dialog.component.scss']
})
export class DeleteReservationDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteReservationDialogComponent>);
  readonly data = inject<number[]>(MAT_DIALOG_DATA);
  reservationData: number[] = [];

  constructor(private _classService: ClassService) {
    this.reservationData = this.data as number[];
  }

  onNoClick(): void {
      this.dialogRef.close(false);
  }

  onDelete(): void {
    this._classService.deleteReservation(
      this.reservationData[0], this.reservationData[1]).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.dialogRef.close(false);
      }
    });
  }
}
