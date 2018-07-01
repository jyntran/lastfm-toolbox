import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    CoreRoutingModule
  ],
  exports: [
  	RouterModule
  ],
  providers: [
  	AuthenticationService
  ]
})
export class CoreModule { }
