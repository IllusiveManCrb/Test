/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LineService } from './line.service';

describe('Service: LineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineService]
    });
  });

  it('should ...', inject([LineService], (service: LineService) => {
    expect(service).toBeTruthy();
  }));
});
