import { TestBed } from '@angular/core/testing';

import { DepService } from './dep.service';

describe('DepService', () => {
  let service: DepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
