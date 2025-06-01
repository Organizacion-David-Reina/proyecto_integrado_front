import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './users-management/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
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
import { CalendaryComponent } from './classes-management/calendary/calendary.component';
import { ClassFormComponent } from './classes-management/class-form/class-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './main/navbar/navbar.component';
import { UpdateClassDialogComponent } from './classes-management/update-class-dialog/update-class-dialog.component';
import { AddReservationDialogComponent } from './classes-management/add-reservation-dialog/add-reservation-dialog.component';
import { ReservationsDialogComponent } from './classes-management/reservations-dialog/reservations-dialog.component';
import { DeleteClassDialogComponent } from './classes-management/delete-class-dialog/delete-class-dialog.component';
import { DeleteUserDialogComponent } from './users-management/delete-user-dialog/delete-user-dialog.component';
import { DeleteStudentDialogComponent } from './students-management/delete-student-dialog/delete-student-dialog.component';
import { DeleteTeacherDialogComponent } from './teachers-management/delete-teacher-dialog/delete-teacher-dialog.component';
import { DeleteReservationDialogComponent } from './classes-management/delete-reservation-dialog/delete-reservation-dialog.component';
import { UserDataDialogComponent } from './main/user-data-dialog/user-data-dialog.component';
import { TruncatePipe } from './utils/truncate.pipe';

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
    UpdateTeacherDialogComponent,
    CalendaryComponent,
    ClassFormComponent,
    NavbarComponent,
    UpdateClassDialogComponent,
    AddReservationDialogComponent,
    ReservationsDialogComponent,
    DeleteClassDialogComponent,
    DeleteUserDialogComponent,
    DeleteStudentDialogComponent,
    DeleteTeacherDialogComponent,
    DeleteReservationDialogComponent,
    UserDataDialogComponent,
    TruncatePipe
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
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
