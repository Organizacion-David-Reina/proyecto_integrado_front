import { Component, ViewEncapsulation } from '@angular/core';
import { UserRequest } from 'src/app/data/data';
import { UserService } from '../services/users-services/user.service';
import { roles } from 'src/app/data/data';
import { Router } from '@angular/router';
import { Utils } from 'src/app/utils/utils';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  utils = Utils;
  roles = roles;
  userForm: UserRequest = {
    user: {
      id: -1,
      name: '',
      lastname: '',
      phoneNumber: '',
      address: '',
      dayOfBirth: '',
      role: {
        id: undefined,
        rol: ''
      }
    }, 
    credentials: {
      nif: '',
      corporateMail: '',
      password: ''
    }
  }
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }
  
  signUp(): void {
    if (this.userForm.user.dayOfBirth instanceof Date) {
      this.userForm.user.dayOfBirth = formatDate(this.userForm.user.dayOfBirth, 'yyyy-MM-dd', 'es');
    }

    const selectedRole = this.roles.find(r => r.id === this.userForm.user.role.id);
    if (selectedRole) {
      this.userForm.user.role = { ...selectedRole };
    }
    this.userService.saveUser(this.userForm).subscribe({
      next: res => 
        this.router.navigate(['/users/users-list']),
      error: err => this.errorMessage = err.error.message
    });
  }
}
