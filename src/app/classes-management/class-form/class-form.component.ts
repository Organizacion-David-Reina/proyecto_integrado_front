import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TeacherService } from 'src/app/teachers-management/services/teacher.service';
import { ClassService } from '../services/class.service';
import { Class, levels, Room, Style, Teacher } from 'src/app/data/data';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss']
})
export class ClassFormComponent implements AfterViewInit {

  @ViewChild('endTime') endTimeControl!: NgModel;

  teachers: Teacher[] = [];
  styles: Style[] = [];
  rooms: Room[] = [];
  classForm: Class = {
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
      nif: ''
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
  levels = levels;
  errorMessage: string = '';

  constructor(private _teacherService: TeacherService, private _classService: ClassService,
    private route: ActivatedRoute, private router: Router) {
    const dateParam = this.route.snapshot.queryParamMap.get('date');
    if (dateParam) {
      this.classForm.day = new Date(dateParam);
    }

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

  saveClass(): void {
    this._classService.saveClass(this.classForm).subscribe({
      next: res => 
        this.router.navigate(['/classes/classes-calendar']),
      error: err => this.errorMessage = err.error.message
    });
  }

  filterWeekdays = (date: Date | null): boolean => {
    if (!date) return false;
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  validateEndTime(): void {
    setTimeout(() => {
      if (!this.classForm.startTime || !this.classForm.endTime) {
        this.endTimeControl.control.setErrors(null);
        return;
      }

      const [startHour, startMin] = this.classForm.startTime.split(':').map(Number);
      const [endHour, endMin] = this.classForm.endTime.split(':').map(Number);

      const start = startHour * 60 + startMin;
      const end = endHour * 60 + endMin;

      if (end <= start) {
        this.endTimeControl.control.setErrors({ endBeforeStart: true });
      } else {
        this.endTimeControl.control.setErrors(null);
      }
    });
  }
}
