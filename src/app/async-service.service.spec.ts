import { TestBed } from '@angular/core/testing';

import { AsyncServiceService } from './async-service.service';

describe('AsyncServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncServiceService = TestBed.get(AsyncServiceService);
    expect(service).toBeTruthy();
  });
});
