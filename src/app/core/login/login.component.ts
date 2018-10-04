import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let token = this.route.snapshot.queryParams['token'];
    if (token) {
      this.authService.fetchSession(token);
    }
  }

  login() {
  	this.authService.login();
  }

}
