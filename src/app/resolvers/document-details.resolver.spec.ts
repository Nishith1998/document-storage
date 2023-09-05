import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { documentDetailsResolver } from './document-details.resolver';

describe('documentDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => documentDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
