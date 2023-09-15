import { TestBed } from '@angular/core/testing';

import { TableStudentsService } from './table-students.service';

describe('TableStudentsService', () => {
  let service: TableStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
