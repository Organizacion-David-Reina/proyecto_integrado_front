import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-delete-teacher-dialog',
  templateUrl: './delete-teacher-dialog.component.html',
  styleUrls: ['./delete-teacher-dialog.component.scss']
})
export class DeleteTeacherDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteTeacherDialogComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  teacherId: number = -1;

  constructor(private _teacherService: TeacherService) {
    this.teacherId = this.data as number;
  }

  onNoClick(): void {
      this.dialogRef.close(false);
  }

  onDelete(): void {
    this._teacherService.deleteTeacher(this.teacherId).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.dialogRef.close(false);
      }
    });
  }
}
