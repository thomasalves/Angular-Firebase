import { TestBed } from '@angular/core/testing';

import { VendaprodutoDataService } from './vendaproduto-data.service';

describe('VendaprodutoDataService', () => {
  let service: VendaprodutoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendaprodutoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
