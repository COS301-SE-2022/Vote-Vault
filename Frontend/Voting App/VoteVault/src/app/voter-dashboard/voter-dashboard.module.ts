import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterDashboardPageRoutingModule } from './voter-dashboard-routing.module';

import { VoterDashboardPage } from './voter-dashboard.page';
import { ElectionsHeaderComponent } from '../components/elections-header/elections-header.component';
import { CircleTopComponent } from '../components/circle-top/circle-top.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterDashboardPageRoutingModule
  ],
  declarations: [VoterDashboardPage, ElectionsHeaderComponent, CircleTopComponent]
})
export class VoterDashboardPageModule {}
