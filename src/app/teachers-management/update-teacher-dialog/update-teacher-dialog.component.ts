import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Teacher } from 'src/app/data/data';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-update-teacher-dialog',
  templateUrl: './update-teacher-dialog.component.html',
  styleUrls: ['./update-teacher-dialog.component.scss']
})
export class UpdateTeacherDialogComponent {
  readonly dialogRef = inject(MatDialogRef<UpdateTeacherDialogComponent>);
  readonly data = inject<Teacher>(MAT_DIALOG_DATA);
  teacher: Teacher = {
    id: -1,
    name: '',
    lastname: '',
    mail: '',
    nif: ''
  };
  errorMessage: string = '';

  constructor(private _teacherService: TeacherService) {
    this.teacher = { ...this.data };
  }

  updateTeacher(): void {
    console.log(this.teacher);
    this._teacherService.updateTeacher(this.teacher).subscribe({
      next: () => this.dialogRef.close(true),
      error: err => this.errorMessage = err.error.message
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
