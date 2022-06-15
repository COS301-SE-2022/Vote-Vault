import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { environment } from 'src/environments/environment';

import { AdminLoginPage } from './admin-login.page';

describe('AdminLoginPage', () => {
  let component: AdminLoginPage;
  let fixture: ComponentFixture<AdminLoginPage>;


  beforeAll(waitForAsync(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
  }));


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginPage ],
      imports: [IonicModule.forRoot(),
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth())],
      providers: []

    }).compileComponents();


    fixture = TestBed.createComponent(AdminLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should have custom timeout', () => {
    console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL); //prints 999999
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  console.log('ADMIN LOGIN');
  });
});
