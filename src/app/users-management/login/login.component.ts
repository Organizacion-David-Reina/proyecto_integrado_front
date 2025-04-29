import { Component } from '@angular/core';
import { Credentials, User } from 'src/app/data/data';
import { AuthService } from '../services/auth-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: Credentials = {
    corporateMail: '',
    password: ''
  };

  constructor(private _authService: AuthService) { }

  login(userForm: Credentials): void {
    this._authService.getUser(userForm).subscribe({
      next: (user: User) => {
        console.log(user);
        // Handle successful login here, e.g., store user data, redirect, etc.
      }
      , error: (error) => {
        console.error('Login failed', error);
        // Handle login error here, e.g., show error message
      }
      , complete: () => {
        console.log('Login request completed');
        // Optionally, you can perform any final actions after the request completes
      }
    });
  }
}
