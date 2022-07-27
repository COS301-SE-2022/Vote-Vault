import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotPageRoutingModule } from './ballot-routing.module';

import { BallotPage } from './ballot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotPageRoutingModule
  ],
  declarations: [BallotPage]
})
export class BallotPageModule {}
