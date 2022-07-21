import { TestBed } from '@angular/core/testing';
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())],
      providers: []
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a ballot1 class member', () => {
    expect(service.ballot1).toEqual(jasmine.any(Object));
  });

  it('should have a ballot2 class member', () => {
    expect(service.ballot2).toEqual(jasmine.any(Object));
  });

  it('should have an electionName class member', () => {
    expect(service.electionName).toEqual(jasmine.any(String));
  });

  it('should have a userEmail class member', () => {
    expect(service.userEmail).toEqual(jasmine.any(String));
  });

  it('should have an elections class member', () => {
    expect(service.elections).toEqual(jasmine.any(Object));
  });

  it('should have a registeredUsers class member', () => {
    expect(service.registeredUsers).toEqual(jasmine.any(Object));
  });
});
