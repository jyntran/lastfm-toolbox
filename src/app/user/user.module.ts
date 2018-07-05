import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManualScrobblerComponent } from './manual-scrobbler/manual-scrobbler.component';
import { AlbumScrobblerComponent } from './album-scrobbler/album-scrobbler.component';
import { PlaintextScrobblerComponent } from './plaintext-scrobbler/plaintext-scrobbler.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManualScrobblerComponent,
    AlbumScrobblerComponent,
    PlaintextScrobblerComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
