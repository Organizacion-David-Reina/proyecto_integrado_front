import { Component } from '@angular/core';
import { Rol, UserRequest } from 'src/app/data/data';
import { UserService } from '../services/users-services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: UserRequest = {
    user: {
      id: -1,
      name: '',
      lastname: '',
      role: ''
    }, 
    credentials: {
      nif: '',
      corporateMail: '',
      password: ''
    }
  }

  roles: Rol[] = [
    { id: 1, rol: 'Director' },
    { id: 2, rol: 'Encargado' },
    { id: 3, rol: 'Trabajador' }
  ];

  constructor(private userService: UserService) { }
  
  signUp(): void {
    console.log(this.userForm);
    this.userService.saveUser(this.userForm).subscribe({
      next: res => alert("Éxito: " + res),
      error: err => alert("Error: " + err.error.message)
    });
  }
}
