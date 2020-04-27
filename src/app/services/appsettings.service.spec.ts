import { TestBed } from '@angular/core/testing';

import { AppsettingsService } from './appsettings.service';

describe('AppsettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppsettingsService = TestBed.get(AppsettingsService);
    expect(service).toBeTruthy();
  });
});
