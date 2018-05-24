import { TestBed, inject } from '@angular/core/testing';

import { UserStatService } from './user-stat.service';

describe('UserStatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStatService]
    });
  });

  it('should be created', inject([UserStatService], (service: UserStatService) => {
    expect(service).toBeTruthy();
  }));
});
