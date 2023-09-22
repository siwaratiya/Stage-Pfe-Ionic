import { TestBed } from '@angular/core/testing';

import { PossService } from './poss.service';

describe('PossService', () => {
  let service: PossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
