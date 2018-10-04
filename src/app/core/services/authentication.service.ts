import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LastfmService } from './lastfm.service';

@Injectable()
export class AuthenticationService {
  readonly keyName: string = 'lastfm_toolbox_key';
  readonly userName: string = 'lastfm_toolbox_user';
  user: any;

  constructor(
    private lastfm: LastfmService,
    private router: Router
  ) { }

  getStoredKey() {
    return localStorage.getItem(this.keyName);
  }

  getStoredUser() {
    return localStorage.getItem(this.userName);
  }

  getUser() {
    if (!this.user) {
      let user = this.getStoredUser();
      this.user = JSON.parse(user);
    }
    return this.user;
  }

  isLoggedIn() {
    return (
      this.getStoredKey() != null
      && this.getStoredUser() != null
    );
  }

  login() {
    this.lastfm.requestAuth();
  }

  logout() {
    this.user = null;
    this.clearKey();
    this.router.navigate(['/']);
  }

  clearKey() {
    localStorage.removeItem(this.keyName);
    localStorage.removeItem(this.userName);
  }

  fetchSession(token) {
    this.lastfm.fetchSession(token)
      .subscribe((data: any) => {
        localStorage.setItem(this.keyName, data.session.key);
        this.lastfm.getUserInfo(data.session.name)
          .subscribe((data: any) => {
            localStorage.setItem(this.userName, JSON.stringify(data.user));
            this.router.navigate(['/user']);
          });
      });
  }
}
