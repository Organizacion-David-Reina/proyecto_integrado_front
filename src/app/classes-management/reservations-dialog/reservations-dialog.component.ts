import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student, User } from 'src/app/data/data';
import { StudentService } from 'src/app/students-management/services/student.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reservations-dialog',
  templateUrl: './reservations-dialog.component.html',
  styleUrls: ['./reservations-dialog.component.scss']
})
export class ReservationsDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ReservationsDialogComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  displayedColumns: string[] = ['Nombre', 'Apellidos', 'Nif', 'Acciones'];
  classId: number = -1;
  studentList: Student[] = [];
  dataSource = new MatTableDataSource<Student>(this.studentList);
  reservationData: number[] = [];
  user: User ={
    id: -1,
    name: '',
    lastname: '',
    phoneNumber: '',
    address: '',
    dayOfBirth: '',
    role: {
      id: -1,
      rol: ''
    } 
  }

  constructor(private _studentService: StudentService) {
    this.classId = this.data as number;
    this._studentService.getStudentsByClassId(this.classId).subscribe((response) => {
      this.studentList = response;
      this.dataSource.data = [...this.studentList];
    });
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      this.user = JSON.parse(storedUser) as User;
    }
  }

  openDeleteDialog(studentId: number): void {
    this.reservationData = [studentId, this.classId];

    this.dialogRef.close({
      action: 'delete',
      data: this.reservationData
    });
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onBack(): void {
    this.dialogRef.close('back');
  }
}
