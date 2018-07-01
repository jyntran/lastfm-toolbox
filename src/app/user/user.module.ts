import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
  	DashboardComponent
  ],
  imports: [
  	UserRoutingModule
  ],
  exports: [
  	RouterModule
  ]
})
export class UserModule { }
