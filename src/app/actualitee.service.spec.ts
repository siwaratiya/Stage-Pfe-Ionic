import { TestBed } from '@angular/core/testing';

import { ActualiteeService } from './actualitee.service';

describe('ActualiteeService', () => {
  let service: ActualiteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualiteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
