import { TestBed } from '@angular/core/testing';

import { NewsFeedsService } from './news-feeds.service';

describe('NewsFeedsService', () => {
  let service: NewsFeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
