import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLoginPageRoutingModule } from './admin-login-routing.module';

import { AdminLoginPage } from './admin-login.page';
import { CircleComponent } from '../components/circle/circle/circle.component';
import { LandingHeaderComponent } from '../components/landing-header/landing-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLoginPageRoutingModule
  ],
  declarations: [AdminLoginPage, CircleComponent, LandingHeaderComponent]
})
export class AdminLoginPageModule {}
