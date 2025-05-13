import { Component } from '@angular/core';
import { bonuses, Student } from 'src/app/data/data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  bonuses = bonuses;
  studentForm: Student = {
    id: -1,
    name: '',
    lastname: '',
    nif: '',
    bonus: {
      id: undefined,
      bondType: '',
      price: 0
    }
  }
  errorMessage: string = '';

  constructor(private studentService: StudentService) { }
  
  saveUser(): void {
    const selectedBonus = this.bonuses.find(r => r.id === this.studentForm.bonus.id);
    console.log(selectedBonus);
    if (selectedBonus) {
      this.studentForm.bonus = { ...selectedBonus };
      console.log(this.studentForm.bonus);
    }
    this.studentService.saveStudent(this.studentForm).subscribe({
      next: res => alert("Éxito: " + res),
      error: err => this.errorMessage = err.error.message
    });
  }
}
