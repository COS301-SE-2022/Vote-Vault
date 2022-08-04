import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateBallotPageRoutingModule } from './generate-ballot-routing.module';

import { GenerateBallotPage } from './generate-ballot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateBallotPageRoutingModule
  ],
  declarations: [GenerateBallotPage]
})
export class GenerateBallotPageModule {}
