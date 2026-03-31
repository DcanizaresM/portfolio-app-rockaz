import { TestBed } from '@angular/core/testing';

import { PortfolioAdapter } from './portfolio-adapter';

describe('PortfolioAdapter', () => {
  let service: PortfolioAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
