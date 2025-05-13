import { Component } from '@angular/core';
import { Teacher } from 'src/app/data/data';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent {
  teacherForm: Teacher = {
    id: -1,
    name: '',
    lastname: '',
    mail: '',
    nif: '',
  }
  errorMessage: string = '';

  constructor(private _teacherService: TeacherService) { }
  
  saveTeacher(): void {
    this._teacherService.saveTeacher(this.teacherForm).subscribe({
      next: res => alert("Éxito: " + res),
      error: err => this.errorMessage = err.error.message
    });
  }
}
