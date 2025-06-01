import { Component } from '@angular/core';
import { Teacher } from 'src/app/data/data';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent {
  utils = Utils;
  teacherForm: Teacher = {
    id: -1,
    name: '',
    lastname: '',
    mail: '',
    nif: '',
  }
  errorMessage: string = '';

  constructor(private _teacherService: TeacherService, private router: Router) { }
  
  saveTeacher(): void {
    this._teacherService.saveTeacher(this.teacherForm).subscribe({
      next: res => 
        this.router.navigate(['/teachers/teachers-list']),
      error: err => this.errorMessage = err.error.message
    });
  }
}
