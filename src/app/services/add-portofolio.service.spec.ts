import { TestBed } from '@angular/core/testing';

import { AddPortofolioService } from './add-portofolio.service';

describe('AddPortofolioService', () => {
  let service: AddPortofolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPortofolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
