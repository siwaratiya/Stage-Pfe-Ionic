import { TestBed } from '@angular/core/testing';

import { GrhService } from './grh.service';

describe('GrhService', () => {
  let service: GrhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
