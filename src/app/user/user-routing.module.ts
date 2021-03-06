import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManualScrobblerComponent } from './manual-scrobbler/manual-scrobbler.component';
import { AlbumScrobblerComponent } from './album-scrobbler/album-scrobbler.component';
import { PlaintextScrobblerComponent } from './plaintext-scrobbler/plaintext-scrobbler.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'album-scrobbler',
        component: AlbumScrobblerComponent
      },
      {
        path: 'manual-scrobbler',
        component: ManualScrobblerComponent
      },
      {
        path: 'plaintext-scrobbler',
        component: PlaintextScrobblerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
 ] 
})
export class UserRoutingModule { };