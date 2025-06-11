import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const attendantGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storedUser = localStorage.getItem('user');

  if (!storedUser) {
    router.navigate(['']);
    return false;
  }

  const user = JSON.parse(storedUser);

  if (user.role.id === 2) {
    router.navigate(['/classes/classes-calendar']);
    return false;
  }

  return true;
};
