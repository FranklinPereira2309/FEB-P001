import { TestBed } from '@angular/core/testing';

import { ApiWikiService } from './api-wiki.service';

describe('ApiWikiService', () => {
  let service: ApiWikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
