import { Component, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { bonuses, Student } from 'src/app/data/data';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { UpdateStudentDialogComponent } from '../update-student-dialog/update-student-dialog.component';
import { SnackBarComponent } from 'src/app/utils/snack-bar/snack-bar.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentsListComponent {
  displayedColumns: string[] = ['Nif', 'Nombre completo', 'Tipo de bono', 'Mensualidad'];
  studentList : Student[] = [];
  student: Student = {
    id: -1,
    name: '',
    lastname: '',
    nif: '',
    bonus: {
      id: -1,
      bondType: '',
      price: 0}
  };
  dataSource = new MatTableDataSource<Student>(this.studentList);
  bonuses = bonuses;
  selectedBonusId: number | null = null;
  private _snackBar = inject(MatSnackBar);

  constructor(private _studentService: StudentService, private _route: ActivatedRoute, private _router: Router,
    private dialog: MatDialog) {
    this._studentService.getAllStudents().subscribe((response) => {
      this.studentList = response;
      this.dataSource.data = [...this.studentList];
    });
  }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  
    applyFilters() {
      this.dataSource.data = this.studentList.filter(student =>
        (this.selectedBonusId === null || student.bonus.id === this.selectedBonusId)
      );
    }
    
    
    openDialog(student: Student): void {
      const dialogRef = this.dialog.open(UpdateStudentDialogComponent, {
        width: '400px',
        data: student
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this._studentService.getAllStudents().subscribe((response) => {
            this.studentList = response;
            this.dataSource.data = [...this.studentList];
          });
      
          this._snackBar.openFromComponent(SnackBarComponent, {
            data: 'Estudiante actualizado correctamente',
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
    }
}
