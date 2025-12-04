import { TestBed } from '@angular/core/testing';

import { RandomPhraseApiService } from './random-phrase-api.service';

describe('RandomPhraseApi', () => {
  let service: RandomPhraseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPhraseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
