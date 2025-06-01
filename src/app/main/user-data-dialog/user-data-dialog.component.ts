import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserResponse } from 'src/app/data/data';

@Component({
  selector: 'app-user-data-dialog',
  templateUrl: './user-data-dialog.component.html',
  styleUrls: ['./user-data-dialog.component.scss']
})
export class UserDataDialogComponent {
  readonly dialogRef = inject(MatDialogRef<UserDataDialogComponent>);
  user: UserResponse ={
    id: -1,
    name: '',
    lastname: '',
    corporateMail: '',
    phoneNumber: '',
    address: '',
    dayOfBirth: '',
    role: {
      id: -1,
      rol: ''
    } 
  }

  constructor() {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      this.user = JSON.parse(storedUser) as UserResponse;
    }
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

  logOut(): void {
    localStorage.removeItem('user');
    this.dialogRef.close(true);
  }
}
