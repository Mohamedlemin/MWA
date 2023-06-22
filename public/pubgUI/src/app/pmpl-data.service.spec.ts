import { TestBed } from '@angular/core/testing';

import { PmplDataService } from './pmpl-data.service';

describe('PmplDataService', () => {
  let service: PmplDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmplDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
