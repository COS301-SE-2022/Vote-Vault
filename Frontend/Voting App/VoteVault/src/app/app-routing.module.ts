import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'ballot',
    loadChildren: () => import('./ballot/ballot.module').then( m => m.BallotPageModule)
  },
  {
    path: 'generate-ballot',
    loadChildren: () => import('./generate-ballot/generate-ballot.module').then( m => m.GenerateBallotPageModule)
  },  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'voter-dashboard',
    loadChildren: () => import('./voter-dashboard/voter-dashboard.module').then( m => m.VoterDashboardPageModule)
  },
  {
    path: 'voter-registration',
    loadChildren: () => import('./voter-registration/voter-registration.module').then( m => m.VoterRegistrationPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
