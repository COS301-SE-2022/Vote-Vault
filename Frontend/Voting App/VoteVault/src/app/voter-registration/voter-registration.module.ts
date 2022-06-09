import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterRegistrationPageRoutingModule } from './voter-registration-routing.module';

import { VoterRegistrationPage } from './voter-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterRegistrationPageRoutingModule
  ],
  declarations: [VoterRegistrationPage]
})
export class VoterRegistrationPageModule {}
