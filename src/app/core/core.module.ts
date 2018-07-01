import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CoreRoutingModule
  ],
  exports: [
  	RouterModule
  ]
})
export class CoreModule { }
