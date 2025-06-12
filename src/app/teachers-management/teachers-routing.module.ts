import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'teachers-list', pathMatch: 'full' },
  {
    path: 'teachers-list',
    component: TeachersListComponent
  },
  {
    path: 'teacher-form',
    component: TeacherFormComponent,
    data: { showNavbar: false }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
