import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateBallotPage } from './generate-ballot.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateBallotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateBallotPageRoutingModule {}
