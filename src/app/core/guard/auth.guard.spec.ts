import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { AuthenticationServiceStub, RouterStub } from '../../mocks/mocks';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard,
      	{
      		provide: AuthenticationService,
      		useClass: AuthenticationServiceStub
      	},
      	{
      		provide: Router,
      		useClass: RouterStub
      	}
  	  ]
    });
  });

  it('should be created', inject([AuthGuard, AuthenticationService, Router],
  	(service: AuthGuard, auth: AuthenticationService, router: Router) => {
    expect(service).toBeTruthy();
    expect(auth).toBeTruthy();
    expect(router).toBeTruthy();
  }));
});
