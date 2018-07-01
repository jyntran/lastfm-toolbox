import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login() {
    // TODO change dummy key to real key
    localStorage.setItem('lastfm_toolbox_key', 'yes');
  }

  logout() {
    localStorage.removeItem('lastfm_toolbox_key');
  }
}
