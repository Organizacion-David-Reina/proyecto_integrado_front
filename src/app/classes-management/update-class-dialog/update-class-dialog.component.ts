import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Class, levels, Room, Style, Teacher } from 'src/app/data/data';
import { ClassService } from '../services/class.service';
import { TeacherService } from 'src/app/teachers-management/services/teacher.service';
import { ReservationsDialogComponent } from '../reservations-dialog/reservations-dialog.component';
import { DeleteClassDialogComponent } from '../delete-class-dialog/delete-class-dialog.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-update-class-dialog',
  templateUrl: './update-class-dialog.component.html',
  styleUrls: ['./update-class-dialog.component.scss']
})
export class UpdateClassDialogComponent implements AfterViewInit {

  @ViewChild('endTime') endTimeControl!: NgModel;

  readonly dialogRef = inject(MatDialogRef<UpdateClassDialogComponent>);
  readonly data = inject<Class>(MAT_DIALOG_DATA);
  class: Class = {
    id: -1,
    style: {
      id: -1,
      style: ''
    },
    teacher: {
      id: -1,
      name: '',
      lastname: '',
      mail: '',
      nif: '',
      phoneNumber: '',
      address: '',
      dayOfBirth: ''
    },
    room: {
      id: -1,
      capacity: 0,
      roomName: ''
    },
    day: new Date(),
    level: '',
    reservations: 0,
    startTime: '',
    endTime: ''
  }
  errorMessage: string = '';
  teachers: Teacher[] = [];
  styles: Style[] = [];
  rooms: Room[] = [];
  levels = levels;

  constructor(private _classService: ClassService, private dialog: MatDialog, 
    private _teacherService: TeacherService) {
    this.class = { ...this.data };

    this._teacherService.getAllTeachers().subscribe((response) => {
      this.teachers = response;
    }
    );
    this._classService.getStyles().subscribe((response) => {
      this.styles = response;
    }
    );
    this._classService.getRooms().subscribe((response) => {
      this.rooms = response;
    }
    );
  }

  ngAfterViewInit() {
    // Escuchar cambios en el formulario
    this.validateEndTime();
  }

  updateClass(): void {
      const day = this.class.day;
      const dayString = day instanceof Date
        ? new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate())).toISOString().substring(0, 10)
        : day;

      const payload = {
        ...this.class,
        day: dayString
      };

      this._classService.updateClass(payload).subscribe({
        next: () => this.dialogRef.close(true),
        error: err => this.errorMessage = err.error.message
      });
  }

  validateEndTime(): void {
    setTimeout(() => {
      if (!this.class.startTime || !this.class.endTime) {
        this.endTimeControl.control.setErrors(null);
        return;
      }

      const [startHour, startMin] = this.class.startTime.split(':').map(Number);
      const [endHour, endMin] = this.class.endTime.split(':').map(Number);

      const start = startHour * 60 + startMin;
      const end = endHour * 60 + endMin;

      if (end <= start) {
        this.endTimeControl.control.setErrors({ endBeforeStart: true });
      } else {
        this.endTimeControl.control.setErrors(null);
      }
    });
  }
  
  onNoClick(): void {
      this.dialogRef.close(false);
  }
  
  compareById(o1: any, o2: any): boolean {
      return o1?.id === o2?.id;
  }

  filterWeekdays = (date: Date | null): boolean => {
      if (!date) return false;
      const day = date.getDay();
      return day !== 0 && day !== 6;
  }

  openReservationsDialog(): void {
    this.dialogRef.close('reservations');
  }

  openDeleteClassDialog(): void {
      this.dialogRef.close('delete');
  }


}
