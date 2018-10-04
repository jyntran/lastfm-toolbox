import { TestBed, inject } from '@angular/core/testing';

import { MD5Service } from './md5.service';

describe('MD5Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MD5Service]
    });
  });

  it('should be created', inject([MD5Service], (service: MD5Service) => {
    expect(service).toBeTruthy();
  }));
});
