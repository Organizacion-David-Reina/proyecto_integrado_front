import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { workerGuard } from './auth/worker.guard';
import { attendantGuard } from './auth/attendant.guard';

const routes: Routes = [
  { path: '', redirectTo: '/classes/classes-calendar', pathMatch: 'full' },
  {

    path: 'users',
    loadChildren: () => import('./users-management/users.module').then(m => m.UsersModule),
  },
  {
    path: 'students',
    canActivate: [authGuard],
    loadChildren: () => import('./students-management/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'teachers',
    canActivate: [authGuard, workerGuard, attendantGuard],
    loadChildren: () => import('./teachers-management/teachers.module').then(m => m.TeachersModule)
  },
  {
    path: 'classes',
    canActivate: [authGuard],
    loadChildren: () => import('./classes-management/classes.module').then(m => m.ClassesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
