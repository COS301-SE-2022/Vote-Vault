import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { HowtoPageComponent } from './howto-page/howto-page.component';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnalyticsPageComponent,
    ResultsPageComponent,
    HowtoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
