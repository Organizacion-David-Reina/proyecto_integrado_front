import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UpdateClassDialogComponent } from '../update-class-dialog/update-class-dialog.component';
import { ClassService } from '../services/class.service';
import { ReservationRequest, Student } from 'src/app/data/data';
import { StudentService } from 'src/app/students-management/services/student.service';

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
  students: Student[] = [];

  constructor(private _classService: ClassService, private _studentService: StudentService) {
    this.reservation.classId = this.data;
    this._studentService.getAllStudents().subscribe((response) => {
      this.students = response;
    });
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
