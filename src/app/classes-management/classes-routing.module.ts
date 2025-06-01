import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendaryComponent } from './calendary/calendary.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { classesResolver } from '../auth/classes.resolver';

const routes: Routes = [
  {
    path: 'classes-calendar',
    component: CalendaryComponent,
    resolve: {
      classes: classesResolver
    }
  },
  {
    path: 'class-form',
    component: ClassFormComponent,
    data: { showNavbar: false }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
