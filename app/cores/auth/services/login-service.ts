import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = true;

  login() { this.loggedIn = true; }
  logout() { this.loggedIn = false; }
  isLoggedIn() { return this.loggedIn; }
}
