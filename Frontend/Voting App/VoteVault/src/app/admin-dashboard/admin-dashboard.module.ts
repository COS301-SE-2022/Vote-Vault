import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboardPageRoutingModule } from './admin-dashboard-routing.module';

import { AdminDashboardPage } from './admin-dashboard.page';
import { CircleTopComponent } from '../components/circle-top/circle-top.component';
import { ElectionsHeaderComponent } from '../components/elections-header/elections-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboardPageRoutingModule
  ],
  declarations: [AdminDashboardPage, CircleTopComponent, ElectionsHeaderComponent]
})
export class AdminDashboardPageModule {}
