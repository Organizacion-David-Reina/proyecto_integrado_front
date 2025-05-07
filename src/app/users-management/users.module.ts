import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UpdateUserDialogComponent } from './update-user-dialog/update-user-dialog.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
