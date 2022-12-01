import { TestBed } from '@angular/core/testing';

import { CurrentEmployeeService } from './current-employee.service';

describe('CurrentEmployeeService', () => {
  let service: CurrentEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
