import { TestBed } from '@angular/core/testing';
import { DataService } from '../data.service';

import { ContractService } from './contract.service';

describe('ContractService', () => {
  let service: ContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DataService
      ],
      providers :[
        DataService
      ]
    });
    service = TestBed.inject(ContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a conttractABI class member', () => {
    expect(service.contractABI).toEqual(jasmine.any(String));
  });

  it('should have a privateKey class member', () => {
    expect(service.privateKey).toEqual(jasmine.any(String));
  });

  it('should have a contractBytecode class member', () => {
    expect(service.contractBytecode).toEqual(jasmine.any(String));
  });

  it('should have an alcProvider class member', () => {
    expect(service.alcProvider).toEqual(null);
  });

  it('should have a signer class member', () => {
    expect(service.signer).toEqual(null);
  });
});
