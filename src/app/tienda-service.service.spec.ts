import { TestBed } from '@angular/core/testing';

import { TiendaServiceService } from './tienda-service.service';

describe('TiendaServiceService', () => {
  let service: TiendaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
