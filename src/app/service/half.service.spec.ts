import { TestBed } from '@angular/core/testing';

import { HalfService } from './half.service';

describe('HalfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HalfService = TestBed.get(HalfService);
    expect(service).toBeTruthy();
  });
});
