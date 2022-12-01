import { TestBed } from '@angular/core/testing';

import { EmployeeapiService } from './employeeapi.service';

describe('EmployeeapiService', () => {
  let service: EmployeeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
