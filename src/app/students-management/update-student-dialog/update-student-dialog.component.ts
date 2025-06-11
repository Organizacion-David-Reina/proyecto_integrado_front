import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { bonuses, Student } from 'src/app/data/data';
import { StudentService } from '../services/student.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-update-student-dialog',
  templateUrl: './update-student-dialog.component.html',
  styleUrls: ['./update-student-dialog.component.scss']
})
export class UpdateStudentDialogComponent {
  utils = Utils;
  readonly dialogRef = inject(MatDialogRef<UpdateStudentDialogComponent>);
  readonly data = inject<Student>(MAT_DIALOG_DATA);
  student: Student = {
    id: 0,
    name: '',
    lastname: '',
    nif: '',
    phoneNumber: '',
    address: '',
    dayOfBirth: '',
    bonus: {
      id: 0,
      bondType: '',
      price: 0
    },
    mail: ''
  };
  errorMessage: string = '';
  bonuses = bonuses;

  constructor(private _studentService: StudentService) {
    this.student = { ...this.data };
  }

  updateStudent(): void {
    this._studentService.updateStudent(this.student).subscribe({
      next: () => this.dialogRef.close(true),
      error: err => this.errorMessage = err.error.message
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
