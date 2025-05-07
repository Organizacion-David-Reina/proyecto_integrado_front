import { Component, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/data/data';
import { AuthService } from '../services/auth-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  corporateMail: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private _authService: AuthService) { }

  login(corporateMail: string, password: string): void {
    this._authService.authUser(corporateMail, password).subscribe({
      next: (user: User | null) => {
        if (user) {
          console.log('Login successful', user);
          this.errorMessage = '';
        } else {
          console.log('User not found or invalid credentials');
          this.errorMessage = 'Correo o contraseña incorrectos';
        }
      },
      error: (error) => {
        console.error('Login request failed', error);
        this.errorMessage = 'Ocurrió un error al intentar iniciar sesión';
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }  
  
}
