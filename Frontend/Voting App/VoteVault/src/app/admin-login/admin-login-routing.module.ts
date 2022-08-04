import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginPage } from './admin-login.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLoginPageRoutingModule {}
