import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-delete-student-dialog',
  templateUrl: './delete-student-dialog.component.html',
  styleUrls: ['./delete-student-dialog.component.scss']
})
export class DeleteStudentDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteStudentDialogComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  studentId: number = -1;

  constructor(private _studentService: StudentService) {
    this.studentId = this.data as number;
  }

  onNoClick(): void {
      this.dialogRef.close(false);
  }

  onDelete(): void {
    this._studentService.deleteStudent(this.studentId).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.dialogRef.close(false);
      }
    });
  }
}
