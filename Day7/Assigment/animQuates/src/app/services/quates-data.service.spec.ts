import { TestBed } from '@angular/core/testing';

import { QuatesDataService } from './quates-data.service';

describe('QuatesDataService', () => {
  let service: QuatesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuatesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
