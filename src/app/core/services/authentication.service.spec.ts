import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

import { AuthenticationServiceStub, RouterStub } from '../../mocks/mocks';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
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

  it('should be created', inject([AuthenticationService, Router],
  	(auth: AuthenticationService, router: Router) => {
    expect(auth).toBeTruthy();
    expect(router).toBeTruthy();
  }));
});
