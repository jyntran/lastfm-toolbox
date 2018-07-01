import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
  	path: '',
    loadChildren: '../main/main.module#MainModule'
  },
  {
    path: 'user',
    loadChildren: '../user/user.module#UserModule'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ] 
})
export class CoreRoutingModule { };