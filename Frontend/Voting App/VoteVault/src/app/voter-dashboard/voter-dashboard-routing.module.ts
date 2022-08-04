import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoterDashboardPage } from './voter-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: VoterDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoterDashboardPageRoutingModule {}
