import { Observable } from 'rxjs';

export class ActivatedRouteStub {
	snapshot = {
		queryParams: Observable.of({})
	}
};

export class AuthenticationServiceStub {
	getUser = function() {
		return Observable.of({});
	}
  	isLoggedIn = function() {
  		return Observable.of(true);
  	};
  	login = function() {};
  	logout = function() {};
  	clearKey = function() {};
  	fetchSession = function(str: string) {};
};

export class LastfmServiceStub {
	requestAuth = function() {};
	fetchSession = function(str: string) {};
	scrobble = function(str: string, arr: Array<any>) {
		return Observable.of({});
	};
}

export class MD5ServiceStub {
  	createHash = function(str: string) {
  		return Observable.of('abc');
  	};
};

export class RouterStub {
  	navigate = function() {};
};