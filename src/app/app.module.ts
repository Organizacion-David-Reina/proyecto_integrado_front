import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './users-management/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserFormComponent } from './users-management/user-form/user-form.component';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersListComponent } from './users-management/users-list/users-list.component';
import { UpdateUserDialogComponent } from './users-management/update-user-dialog/update-user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SnackBarComponent } from './utils/snack-bar/snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentFormComponent } from './students-management/student-form/student-form.component';
import { StudentsListComponent } from './students-management/students-list/students-list.component';
import { TeacherFormComponent } from './teachers-management/teacher-form/teacher-form.component';
import { TeachersListComponent } from './teachers-management/teachers-list/teachers-list.component';
import { UpdateStudentDialogComponent } from './students-management/update-student-dialog/update-student-dialog.component';
import { UpdateTeacherDialogComponent } from './teachers-management/update-teacher-dialog/update-teacher-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserFormComponent,
    UsersListComponent,
    UpdateUserDialogComponent,
    SnackBarComponent,
    StudentFormComponent,
    StudentsListComponent,
    TeacherFormComponent,
    TeachersListComponent,
    UpdateStudentDialogComponent,
    UpdateTeacherDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule, 
    ReactiveFormsModule, 
    MatButtonModule, 
    MatDividerModule, 
    HttpClientModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
