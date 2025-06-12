import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { classesResolver } from './classes.resolver';

describe('classesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => classesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
