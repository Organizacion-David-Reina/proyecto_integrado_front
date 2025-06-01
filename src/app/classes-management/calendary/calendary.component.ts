import { Component } from '@angular/core';
import { Class, UserResponse } from 'src/app/data/data';
import { ClassService } from '../services/class.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateClassDialogComponent } from '../update-class-dialog/update-class-dialog.component';
import { SnackBarComponent } from 'src/app/utils/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddReservationDialogComponent } from '../add-reservation-dialog/add-reservation-dialog.component';
import { ReservationsDialogComponent } from '../reservations-dialog/reservations-dialog.component';
import { DeleteClassDialogComponent } from '../delete-class-dialog/delete-class-dialog.component';
import { DeleteReservationDialogComponent } from '../delete-reservation-dialog/delete-reservation-dialog.component';

@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrls: ['./calendary.component.scss'],
})
export class CalendaryComponent {
  currentWeekStart: Date = this.getStartOfWeek(new Date()); // lunes actual
  weekDays: Date[] = [];
  classes: Class[] = [];
  user: UserResponse ={
    id: -1,
    name: '',
    lastname: '',
    corporateMail: '',
    phoneNumber: '',
    address: '',
    dayOfBirth: '',
    role: {
      id: -1,
      rol: ''
    } 
  }

  constructor(private classService: ClassService, private route: ActivatedRoute,
    private router: Router, private dialog: MatDialog, private _snackBar: MatSnackBar
  ) {
    this.updateWeekDays();
    this.classes = this.route.snapshot.data['classes'];
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      this.user = JSON.parse(storedUser) as UserResponse;
    }
  }

  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(date);
    monday.setDate(date.getDate() + diff);
    return monday;
  }

  updateWeekDays() {
    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(this.currentWeekStart);
      day.setDate(this.currentWeekStart.getDate() + i);
      this.weekDays.push(day);
    }
  }

  goToPreviousWeek() {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
    this.updateWeekDays();
  }

  goToNextWeek() {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
    this.updateWeekDays();
  }

  get weekdaysOnly(): Date[] {
    return this.weekDays.filter(day => day.getDay() >= 1 && day.getDay() <= 5);
  }

  getClassesForDay(date: Date): Class[] {
    return this.classes.filter(c => {
      const classDate = new Date(c.day);
      return (
        classDate.getFullYear() === date.getFullYear() &&
        classDate.getMonth() === date.getMonth() &&
        classDate.getDate() === date.getDate()
      );
    });
  }

  addClass(day: Date): void {
    const formattedDate = day.toISOString();
    this.router.navigate(['/classes/class-form'], {
      queryParams: { date: formattedDate }
    });
  }

  openDialog(selectedClass: Class): void {
    if (this.user.role.id === 3) {
      this.openReservationsDialog(selectedClass);
    } else {
      this.openUpdateClassDialog(selectedClass);
    }
  }

  openUpdateClassDialog(selectedClass: Class): void {
    const dialogRef = this.dialog.open(UpdateClassDialogComponent, {
      width: '400px',
      data: selectedClass
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.classService.getClasses().subscribe((response) => {
          this.classes = response;
        });
    
        this._snackBar.openFromComponent(SnackBarComponent, {
          data: 'Clase actualizada correctamente',
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
    }

    if (result === 'reservations') {
      this.openReservationsDialog(selectedClass);
    }
    

    if (result === 'delete') {
          const deleteDialogRef = this.dialog.open(DeleteClassDialogComponent, {
            data: selectedClass.id,
            width: '400px',
          });

          deleteDialogRef.afterClosed().subscribe(deleted => {

            if (deleted) {
              this.classService.getClasses().subscribe((response) => {
                this.classes = response;
              });
          
              this._snackBar.openFromComponent(SnackBarComponent, {
                data: 'Clase eliminada correctamente',
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
            }
          });
          
        }
      });
  }

  openReservationDialog(selectedClass: Class): void {
    const dialogRef = this.dialog.open(AddReservationDialogComponent, {
      width: '400px',
      data: selectedClass.id
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.classService.getClasses().subscribe((response) => {
          this.classes = response;
        });

        this._snackBar.openFromComponent(SnackBarComponent, {
          data: 'Reserva realizada correctamente',
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }

  openReservationsDialog(selectedClass: Class): void {
    const dialogRef = this.dialog.open(ReservationsDialogComponent, {
      width: '600px',
      data: selectedClass.id
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result?.action === 'delete') {
          const dialogRef = this.dialog.open(DeleteReservationDialogComponent, {
            data: result.data,
            width: '400px',
          });
          dialogRef.afterClosed().subscribe(deleted => {
            if (deleted) {
              this.classService.getClasses().subscribe((response) => {
                this.classes = response;
              });
          
              this._snackBar.openFromComponent(SnackBarComponent, {
                data: 'Reserva eliminada correctamente',
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
            }
          });
        }
        if (result === "back") {
          this.openUpdateClassDialog(selectedClass);
        } else {
          this.classService.getClasses().subscribe((response) => {
              this.classes = response;
          });
        }
    });
  }
}
