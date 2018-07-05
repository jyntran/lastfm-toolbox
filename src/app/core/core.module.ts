import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { CommonModule } from '@angular/common';  

import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guard/auth.guard';
import { LastfmService } from './services/lastfm.service';
import { MD5Service } from './services/md5.service';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    LoginComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CoreRoutingModule,
    CommonModule
  ],
  exports: [
  	RouterModule,
    HttpClientModule,
    HeaderComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    LastfmService,
    MD5Service
  ]
})
export class CoreModule { }
