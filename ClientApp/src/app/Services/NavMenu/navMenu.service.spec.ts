import { TestBed } from '@angular/core/testing';

import { NavMenuService } from './navMenu.service';

describe('NavMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavMenuService = TestBed.get(NavMenuService);
    expect(service).toBeTruthy();
  });
});
