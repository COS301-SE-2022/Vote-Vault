import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { VoterDashboardPage } from './voter-dashboard.page';

describe('VoterDashboardPage', () => {
  let component: VoterDashboardPage;
  let fixture: ComponentFixture<VoterDashboardPage>;

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999;
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterDashboardPage ],
      imports: [IonicModule.forRoot(),
        RouterModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideAuth(() => getAuth())]
    }).compileComponents();

    fixture = TestBed.createComponent(VoterDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should have custom timeout', () => {
    console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL); //prints 999999
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  console.log('VOTER DASH');
  });

  it('should have an elections class member', () => {
    expect(component.elections).toEqual(jasmine.any(Object));
  });
});
