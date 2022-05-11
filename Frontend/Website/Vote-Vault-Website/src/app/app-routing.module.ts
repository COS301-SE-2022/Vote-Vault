import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HowtoPageComponent } from './howto-page/howto-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'analytics', component: AnalyticsPageComponent},
  {path: 'results', component: ResultsPageComponent},
  {path: 'howto', component: HowtoPageComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
