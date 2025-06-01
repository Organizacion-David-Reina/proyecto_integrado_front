import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('user');

  if (user) {
    // Si ya hay usuario, redirige a users-list u otra ruta protegida
    return router.parseUrl('/users/users-list');
  } else {
    // Si no hay usuario, deja acceder al login
    return true;
  }
};
