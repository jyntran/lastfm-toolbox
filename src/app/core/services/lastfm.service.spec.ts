import { TestBed, inject } from '@angular/core/testing';

import { LastfmService } from './lastfm.service';
import { MD5Service } from './md5.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MD5ServiceStub } from '../../mocks/mocks';

describe('LastfmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LastfmService,
      {
      	provide: MD5Service,
      	useClass: MD5ServiceStub
      }]
    });
  });

  it('should be created', inject([LastfmService, MD5Service, HttpTestingController],
  	(service: LastfmService, md5: MD5Service, http: HttpTestingController) => {
    expect(service).toBeTruthy();
    expect(md5).toBeTruthy();
    expect(http).toBeTruthy();
  }));
});
