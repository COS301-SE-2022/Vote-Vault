import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { HowtoPageComponent } from './howto-page/howto-page.component';
import { PredictionsPageComponent } from './predictions-page/predictions-page.component';
import { ChartModule } from 'angular2-chartjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryPageComponent } from './history-page/history-page.component';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { Firestore, FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnalyticsPageComponent,
    ResultsPageComponent,
    HowtoPageComponent,
    HistoryPageComponent,
    PredictionsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    NgbModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
