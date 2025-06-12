import { Component, inject } from '@angular/core';
import { UserService } from '../services/users-services/user.service';
import { roles, UserResponse } from 'src/app/data/data';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-update-user-dialog',
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.scss']
})
export class UpdateUserDialogComponent {
  utils = Utils
  readonly dialogRef = inject(MatDialogRef<UpdateUserDialogComponent>);
  readonly data = inject<UserResponse>(MAT_DIALOG_DATA);
  user: UserResponse = {
    id: 0,
    name: '',
    lastname: '',
    corporateMail: '',
    phoneNumber: '',
    address: '',
    dayOfBirth: '',
    role: {
      id: 0,
      rol: ''
    }
  };
  errorMessage: string = '';
  roles = roles.filter(r => r.rol !== 'Director');

  constructor(private _userService: UserService) {
    this.user = { ...this.data };
  }

  updateUser(): void {
    this._userService.updateUser(this.user).subscribe({
      next: () => this.dialogRef.close(true),
      error: err => this.errorMessage = err.error.message
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  
}
