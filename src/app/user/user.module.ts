import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    UserRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
