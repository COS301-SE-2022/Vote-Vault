import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideFirebaseApp } from '@angular/fire/app';
import { firestoreInstance$, FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

import { VoterRegistrationPage } from './voter-registration.page';

describe('VoterRegistrationPage', () => {
  let component: VoterRegistrationPage;
  let fixture: ComponentFixture<VoterRegistrationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterRegistrationPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, FirestoreModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())]
    }).compileComponents();

    fixture = TestBed.createComponent(VoterRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
