import { TestBed } from '@angular/core/testing';

import { ForfaitServService } from './forfait-serv.service';

describe('ForfaitServService', () => {
  let service: ForfaitServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForfaitServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
