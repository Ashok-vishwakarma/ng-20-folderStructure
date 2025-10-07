import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login-service';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginService);
  console.log(auth)
  return auth.isLoggedIn();
};
