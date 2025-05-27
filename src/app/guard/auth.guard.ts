import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem('loggedInUser');
  if (user) {
    return true;
  }

  const router = inject(Router);
  router.navigate(['/login']);
  return false;
};
