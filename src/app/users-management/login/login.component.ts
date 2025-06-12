import { Component, ViewEncapsulation } from '@angular/core';
import { User, UserResponse } from 'src/app/data/data';
import { AuthService } from '../services/auth-services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  corporateMail: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private _authService: AuthService, private router: Router) { }

  login(corporateMail: string, password: string): void {
    this._authService.authUser(corporateMail, password).subscribe({
      next: (user: UserResponse | null) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/classes/classes-calendar']);
        } else {
          this.errorMessage = 'Correo o contraseña incorrectos';
        }
      },
      error: () => {
        this.errorMessage = 'Ocurrió un error al intentar iniciar sesión';
      }
    });
  }
}

