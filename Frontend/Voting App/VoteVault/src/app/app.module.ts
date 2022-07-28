import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { Firestore, FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { RouterModule } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LoginPage } from './login/login.page';
import { AdminLoginPage } from './admin-login/admin-login.page';
import { GenerateBallotPage } from './generate-ballot/generate-ballot.page';

@NgModule({
  declarations: [AppComponent, LoginPage, AdminLoginPage, GenerateBallotPage],
  entryComponents: [],
  imports: [ NgModel, FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())],
  providers: [ DataService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
