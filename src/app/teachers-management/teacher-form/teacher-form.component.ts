import { Component } from '@angular/core';
import { Teacher } from 'src/app/data/data';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';
import { Utils } from 'src/app/utils/utils';
import { formatDate } from '@angular/common';

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
    phoneNumber: '',
    address: '',
    dayOfBirth: new Date()
  }
  errorMessage: string = '';

  constructor(private _teacherService: TeacherService, private router: Router) { }
  
  saveTeacher(): void {
    if (this.teacherForm.dayOfBirth instanceof Date) {
      this.teacherForm.dayOfBirth = formatDate(this.teacherForm.dayOfBirth, 'yyyy-MM-dd', 'es');
    }
    
    this._teacherService.saveTeacher(this.teacherForm).subscribe({
      next: res => 
        this.router.navigate(['/teachers/teachers-list']),
      error: err => this.errorMessage = err.error.message
    });
  }
}
