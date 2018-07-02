import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  readonly keyName: string = 'lastfm_toolbox_key';

  constructor(
    private router: Router
  ) { }

  getKey() {
    return localStorage.getItem(this.keyName);
  }

  isLoggedIn() {
    return this.getKey() != null;
  }

  login() {
    // TODO change dummy key to real key
    localStorage.setItem(this.keyName, 'yes');
    this.router.navigate(['/user']);
  }

  logout() {
    localStorage.removeItem(this.keyName);
    this.router.navigate(['/']);
  }
}
