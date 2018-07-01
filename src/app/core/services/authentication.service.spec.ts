import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

import { AuthenticationServiceStub } from '../../mocks/mocks';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      	{
      		provide: AuthenticationService,
      		useClass: AuthenticationServiceStub
      	}
      ]
    });
  });

  it('should be created', inject([AuthenticationService],
  	(auth: AuthenticationService) => {
    expect(auth).toBeTruthy();
  }));
});
