import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManualScrobblerComponent } from './manual-scrobbler/manual-scrobbler.component';
import { AlbumScrobblerComponent } from './album-scrobbler/album-scrobbler.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManualScrobblerComponent,
    AlbumScrobblerComponent
  ],
  imports: [
    UserRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
