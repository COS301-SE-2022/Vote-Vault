import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { VoterRegistrationPage } from './voter-registration.page';

describe('VoterRegistrationPage', () => {
  let component: VoterRegistrationPage;
  let fixture: ComponentFixture<VoterRegistrationPage>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterRegistrationPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())],
      providers: [BarcodeScanner ]
    }).compileComponents();

    fixture = TestBed.createComponent(VoterRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  console.log('VOTER REGESTRATION');
  });

  it('should have a name class member', () => {
    expect(component.name).toEqual(jasmine.any(String));
  });

  it('should have a surname class member', () => {
    expect(component.surname).toEqual(jasmine.any(String));
  });

  it('should have an idNum class member', () => {
    expect(component.idNum).toEqual(jasmine.any(String));
  });

  it('should have an encodeData class member', () => {
    expect(component.encodeData).toEqual(jasmine.any(String));
  });
  
  it('should have an encodedData class member', () => {
    expect(component.encodedData).toEqual(jasmine.any(String));
  });
});
