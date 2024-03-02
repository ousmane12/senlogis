/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppartmentService } from './appartment.service';

describe('Service: Appartment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppartmentService]
    });
  });

  it('should ...', inject([AppartmentService], (service: AppartmentService) => {
    expect(service).toBeTruthy();
  }));
});
