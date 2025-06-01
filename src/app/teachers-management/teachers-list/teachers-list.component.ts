import { Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/data/data';
import { TeacherService } from '../services/teacher.service';
import { UpdateTeacherDialogComponent } from '../update-teacher-dialog/update-teacher-dialog.component';
import { SnackBarComponent } from 'src/app/utils/snack-bar/snack-bar.component';
import { DeleteTeacherDialogComponent } from '../delete-teacher-dialog/delete-teacher-dialog.component';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent {
  displayedColumns: string[] = ['Mail', 'Nombre completo', 'Nif', 'Acciones'];
  teacherList : Teacher[] = [];
  teacher: Teacher = {
    id: -1,
    name: '',
    lastname: '',
    mail: '',
    nif: ''
  };
  dataSource = new MatTableDataSource<Teacher>(this.teacherList);
  selectedBonusId: number | null = null;
  private _snackBar = inject(MatSnackBar);

  constructor(private _teacherService: TeacherService, private _route: ActivatedRoute, private _router: Router,
    private dialog: MatDialog) {
    this._teacherService.getAllTeachers().subscribe((response) => {
      this.teacherList = response;
      this.dataSource.data = [...this.teacherList];
    });
  }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  
    applyFilters() {
      const emailFilter = this.teacher.mail?.toLowerCase() || '';

      this.dataSource.data = this.teacherList.filter(teacher =>
        teacher.mail.toLowerCase().includes(emailFilter)
      );
    }
    
    
    openUpdateDialog(teacher: Teacher): void {
      const dialogRef = this.dialog.open(UpdateTeacherDialogComponent, {
        width: '400px',
        data: teacher
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this._teacherService.getAllTeachers().subscribe((response) => {
            this.teacherList = response;
            this.dataSource.data = [...this.teacherList];
          });
      
          this._snackBar.openFromComponent(SnackBarComponent, {
            data: 'Profesor actualizado correctamente',
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
    }

    openDeleteDialog(teacherId: number) {
      const dialogRef = this.dialog.open(DeleteTeacherDialogComponent, {
        width: '400px',
        data: teacherId
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this._teacherService.getAllTeachers().subscribe((response) => {
            this.teacherList = response;
            this.dataSource.data = [...this.teacherList];
          });
      
          this._snackBar.openFromComponent(SnackBarComponent, {
            data: 'Profesor eliminado correctamente',
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
    }
}
