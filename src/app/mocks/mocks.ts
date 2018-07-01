export class AuthenticationServiceStub {
  	getKey = jasmine.createSpy("getKey");
  	isLoggedIn = jasmine.createSpy("isLoggedIn");
  	login = jasmine.createSpy("login");
  	logout = jasmine.createSpy("logout");
};

export class RouterStub {
    navigate = jasmine.createSpy("navigate");
};