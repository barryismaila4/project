import { TestBed } from '@angular/core/testing';

import { DanceServiceService } from './dance-service.service';

describe('DanceServiceService', () => {
  let service: DanceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
