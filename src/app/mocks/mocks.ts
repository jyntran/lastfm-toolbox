import { Observable } from 'rxjs';

export class AuthenticationServiceStub {
  	getKey = function() {
  		return Observable.of('123');
  	};
  	isLoggedIn = function() {
  		return Observable.of(true);
  	};
  	login = function() {};
  	logout = function() {};
};

export class RouterStub {
  	navigate = function() {};
};