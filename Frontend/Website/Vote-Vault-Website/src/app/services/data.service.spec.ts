import { TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { constants } from 'os';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // if('should return eventually when fetchElections is called', async () => {
  //   const serviceSpy: DataService = service;
  //   spyOn(serviceSpy, 'fetchElections').and.returnValue(Promise.resolve())
  // });

  it('should return an array when fetching elections',
    (done: DoneFn) => {
      service.fetchElections().then(value => {
        expect(value).toBe('array');
        done();
    });
  });

  // it('should return an array when fetching past elections',
  //   (done: DoneFn) => {
  //     service.fetchPastElections().then(value => {
  //       expect(value).toBe('array');
  //       done();
  //   });
  // });

  it('should return winner index', () => {
    expect(service.findWinnerIndex([10,0,0])).toBe(0);
  });
});

