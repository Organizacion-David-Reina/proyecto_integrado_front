import { ResolveFn } from '@angular/router';
import { Class } from '../data/data';
import { ClassService } from '../classes-management/services/class.service';
import { inject } from '@angular/core';

export const classesResolver: ResolveFn<Class[]> = (route, state) => {
  const classService = inject(ClassService);
  return classService.getClasses();
};
