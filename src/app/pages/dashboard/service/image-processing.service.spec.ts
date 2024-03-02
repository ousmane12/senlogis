/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImageProcessingService } from './image-processing.service';

describe('Service: ImageProcessing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageProcessingService]
    });
  });

  it('should ...', inject([ImageProcessingService], (service: ImageProcessingService) => {
    expect(service).toBeTruthy();
  }));
});
