import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoterRegistrationPage } from './voter-registration.page';

const routes: Routes = [
  {
    path: '',
    component: VoterRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoterRegistrationPageRoutingModule {}
