import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { firestoreInstance$, FirestoreModule } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { VoterRegistrationPage } from './voter-registration.page';

describe('VoterRegistrationPage', () => {
  let component: VoterRegistrationPage;
  let fixture: ComponentFixture<VoterRegistrationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterRegistrationPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, FirestoreModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VoterRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
