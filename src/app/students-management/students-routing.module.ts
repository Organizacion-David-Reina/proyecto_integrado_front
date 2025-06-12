import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'students-list', pathMatch: 'full' },

  {
    path: 'students-list',
    component: StudentsListComponent
  },
  {
    path: 'student-form',
    component: StudentFormComponent,
    data: { showNavbar: false }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
