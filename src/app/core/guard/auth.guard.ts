import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
  	private authService: AuthenticationService,
  	private router: Router
  ) { }

  canActivate(
  	next: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
  	if (!this.authService.isLoggedIn()) {
  		this.router.navigate(['/login']);
  		return false;
  	}
  	return true;
  }

}
