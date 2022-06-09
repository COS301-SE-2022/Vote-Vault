import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterDashboardPageRoutingModule } from './voter-dashboard-routing.module';

import { VoterDashboardPage } from './voter-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterDashboardPageRoutingModule
  ],
  declarations: [VoterDashboardPage]
})
export class VoterDashboardPageModule {}
