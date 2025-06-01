import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { loginGuard } from '../auth/login.guard';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'users-list', pathMatch: 'full' },

  {
    path: 'auth',
    component: LoginComponent,
    canActivate: [loginGuard],
    data: { showNavbar: false }
  },
  {
    path: 'user-form',
    component: UserFormComponent,
    canActivate: [authGuard],
    data: { showNavbar: false }
  },
  {
    path: 'users-list',
    component: UsersListComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
