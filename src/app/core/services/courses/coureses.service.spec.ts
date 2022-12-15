import { TestBed } from '@angular/core/testing';

import { CouresesService } from './coureses.service';

describe('CouresesService', () => {
  let service: CouresesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouresesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
