import { Component, ViewEncapsulation } from '@angular/core';
import { UserRequest } from 'src/app/data/data';
import { UserService } from '../services/users-services/user.service';
import { roles } from 'src/app/data/data';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserFormComponent {
  roles = roles;
  userForm: UserRequest = {
    user: {
      id: -1,
      name: '',
      lastname: '',
      role: {
        id: -1,
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

  constructor(private userService: UserService) { }
  
  signUp(): void {
    const selectedRole = this.roles.find(r => r.id === this.userForm.user.role.id);
    if (selectedRole) {
      this.userForm.user.role = { ...selectedRole };
    }
    this.userService.saveUser(this.userForm).subscribe({
      next: res => alert("Éxito: " + res),
      error: err => this.errorMessage = err.error.message
    });
  }
}
