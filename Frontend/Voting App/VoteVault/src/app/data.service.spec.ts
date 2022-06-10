import { TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a ballot1 class member', () => {
    expect(service.ballot1).toEqual(jasmine.any(Object));
  })

  it('should have a ballot2 class member', () => {
    expect(service.ballot2).toEqual(jasmine.any(Object));
  })

  it('should have an electionName class member', () => {
    expect(service.electionName).toEqual(jasmine.any(String));
  })

  it('should have a userEmail class member', () => {
    expect(service.userEmail).toEqual(jasmine.any(String));
  })

  it('should have an elections class member', () => {
    expect(service.elections).toEqual(jasmine.any(Object));
  })

  it('should have a registeredUsers class member', () => {
    expect(service.registeredUsers).toEqual(jasmine.any(Object));
  })
});
