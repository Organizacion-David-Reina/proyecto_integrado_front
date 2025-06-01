import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/users-services/user.service';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss']
})
export class DeleteUserDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteUserDialogComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  userId: number = -1;

  constructor(private _userService: UserService) {
    this.userId = this.data as number;
  }

  onNoClick(): void {
      this.dialogRef.close(false);
  }

  onDelete(): void {
    this._userService.deleteUser(this.userId).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.dialogRef.close(false);
      }
    });
  }
}
