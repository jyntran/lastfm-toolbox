import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CoreRoutingModule
  ],
  exports: [
  	RouterModule
  ]
})
export class CoreModule { }
