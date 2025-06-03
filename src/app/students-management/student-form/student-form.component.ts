import { Component } from '@angular/core';
import { bonuses, Student } from 'src/app/data/data';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { Utils } from 'src/app/utils/utils';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  utils = Utils;
  bonuses = bonuses;
  studentForm: Student = {
    id: -1,
    name: '',
    lastname: '',
    nif: '',
    phoneNumber: '',
    address: '',
    dayOfBirth: '',
    bonus: {
      id: undefined,
      bondType: '',
      price: 0
    }
  }
  errorMessage: string = '';

  constructor(private studentService: StudentService, private router: Router) { }
  
  saveStudent(): void {
    const selectedBonus = this.bonuses.find(r => r.id === this.studentForm.bonus.id);
    if (selectedBonus) {
      this.studentForm.bonus = { ...selectedBonus };
    }
    if (this.studentForm.dayOfBirth instanceof Date) {
      this.studentForm.dayOfBirth = formatDate(this.studentForm.dayOfBirth, 'yyyy-MM-dd', 'es');
    }
    this.studentService.saveStudent(this.studentForm).subscribe({
      next: res => 
        this.router.navigate(['/students/students-list']),
      error: err => this.errorMessage = err.error.message
    });
  }
}
