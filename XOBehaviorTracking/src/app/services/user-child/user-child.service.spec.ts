import { TestBed } from '@angular/core/testing';

import { UserChildService } from './user-child.service';

describe('UserChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserChildService = TestBed.get(UserChildService);
    expect(service).toBeTruthy();
  });
});
